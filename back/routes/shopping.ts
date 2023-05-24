import express, { Request, Response } from "express";
const mysql = require("../controller/shoesController").controller;
const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  try {
    const result = await mysql.getAllItems();
    console.log(result);
    res.send(JSON.stringify(result));
  } catch (error) {
    console.error(error);
    res.status(500).send("Error retrieving items");
  }
});
router.get("/ascPrice", async (req: Request, res: Response) => {
  try {
    const result = await mysql.getAscItems();
    console.log(result);
    res.send(JSON.stringify(result));
  } catch (error) {
    console.error(error);
    res.status(500).send("Error retrieving items");
  }
});
router.get("/descPrice", async (req: Request, res: Response) => {
  try {
    const result = await mysql.getDescItems();
    console.log(result);
    res.send(JSON.stringify(result));
  } catch (error) {
    console.error(error);
    res.status(500).send("Error retrieving items");
  }
});
router.put("/", (req: Request, res: Response) => {});
router.delete("/", (req: Request, res: Response) => {});

module.exports = router;
