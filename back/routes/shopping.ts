import express, { Request, Response } from "express";

const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  console.log(req.query);
  //   console.log(req.query);
  //   res.send(JSON.stringify(req));
});
router.post("/", (req: Request, res: Response) => {});
router.put("/", (req: Request, res: Response) => {});
router.delete("/", (req: Request, res: Response) => {});

module.exports = router;
