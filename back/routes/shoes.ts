import express, { Request, Response } from "express";
const mysql = require("../controller/shoesGetController").controller;
const router = express.Router();

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
  console.log("req.query", req.query);
  handleRequest(req, res, mysql.getAllItems);
});

router.get("/ascPrice", async (req: Request, res: Response) => {
  const gender = req.query.gender;
  handleRequest(req, res, mysql.getAscItems.bind(null, gender));
});

router.get("/descPrice", async (req: Request, res: Response) => {
  const gender = req.query.gender;
  handleRequest(req, res, mysql.getDescItems.bind(null, gender));
});

router.put("/", (req: Request, res: Response) => {});

router.delete("/", (req: Request, res: Response) => {});

module.exports = router;
