import express, { Request, Response } from "express";
import cors from "cors";
import fs from "fs";
import https from "https";
const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(cors());

// dotenv
require("dotenv").config();

const PORT = process.env.PORT;

const options = {
  key: fs.readFileSync(`${process.env.SSL_KEY}`),
  cert: fs.readFileSync(`${process.env.SSL_CRT}`),
};

server.get("/", (req: Request, res: Response) => {
  res.json({ message: "Server is RUNNING" });
});

https.createServer(options, server).listen(PORT, () => {
  console.log("HTTPS server 구동");
});
