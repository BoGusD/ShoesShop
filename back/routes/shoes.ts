import express, { Request, Response, Router } from "express";
import multer, { StorageEngine } from "multer";
import fs from "fs";

const mysql = require("../controller/shoesController").controller;

const router = express.Router();

const dir: string = "./shoeImgs";
const storage: StorageEngine = multer.diskStorage({
  destination: (req: Request, file: Express.Multer.File, cb) => {
    cb(null, dir);
  },
  filename: (req: Request, file: Express.Multer.File, cb) => {
    const uniqueSuffix: string =
      Date.now() + "-" + Math.round(Math.random() * 1e9);
    const filename: string = file.originalname.replace(/\s/g, "-");
    cb(null, filename + "-" + uniqueSuffix);
  },
});
const limits: { fileSize: number } = {
  fileSize: 2048 * 2048 * 2,
};

const upload = multer({ storage: storage, limits: limits });

const handleRequest = async (
  req: Request,
  res: Response,
  callback: Function
) => {
  try {
    const result = await callback();
    res.send(JSON.stringify(result));
  } catch (error) {
    console.error(error);
    res.status(500).send("Error retrieving items");
  }
};

router.get("/", async (req: Request, res: Response) => {
  const keyword = req.query.keyword;
  if (keyword) {
    handleRequest(req, res, mysql.getKeyWordItems.bind(null, keyword));
  } else {
    handleRequest(req, res, mysql.getAllItems);
  }
});

router.get("/ascPrice", async (req: Request, res: Response) => {
  const gender = req.query.gender;
  handleRequest(req, res, mysql.getAscItems.bind(null, gender));
});

router.get("/descPrice", async (req: Request, res: Response) => {
  const gender = req.query.gender;
  handleRequest(req, res, mysql.getDescItems.bind(null, gender));
});

router.post(
  "/addItem",
  upload.array("itemImg", 5),
  (req: Request, res: Response) => {
    console.log(req.files);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir);
    const {
      id,
      itemTitle,
      price,
      gender,
    }: { id: string; itemTitle: string; price: string; gender: string } =
      req.body;
    const files = req.files as Express.Multer.File[];
    const imgSrc: string =
      files.length > 0
        ? `${process.env.SERVER_URL}/shoeImgs/${files[0]?.filename}`
        : "";

    const data = {
      id,
      itemTitle,
      price,
      gender,
      itemImg: imgSrc,
    };
    console.log("data", data);

    handleRequest(req, res, mysql.addItem.bind(null, data));
  }
);

router.put("/", (req: Request, res: Response) => {});

router.delete("/", (req: Request, res: Response) => {});

module.exports = router;
