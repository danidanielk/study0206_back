import { Cat, CatType } from "./app.model";
import express from "express";

const app: express.Express = express();

app.get("/", (req: express.Request, res: express.Response) => {
  // res.send("dddd");
  res.send({ cats: Cat });
});

app.listen(8000, () => {
  console.log("server start!");
});
