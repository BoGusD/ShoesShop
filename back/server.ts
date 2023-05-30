import express, { Request, Response } from "express";
import cors from "cors";

const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(cors());
server.use("/shoeImgs", express.static("shoeImgs"));
server.use("/img", express.static("img"));
// dotenv
require("dotenv").config();

const PORT = process.env.PORT;

const shoppingRouter = require("./routes/shoes");

server.use("/shoes", shoppingRouter);

server.use((err: any, req: Request, res: Response) => {
  console.log(err.stack);
  res.status(err.statusCode || 500);
  res.send(err.message);
});
server.listen(PORT, () => {
  console.log("서버 연결 완료");
});
