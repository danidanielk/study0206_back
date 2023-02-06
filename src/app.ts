import { Cat, CatType } from "./cats/cats.model";
import express, { application } from "express";
import catsRouter from "./cats/cat.route";

class Server {
  public app: express.Application;
  constructor() {
    const app: express.Application = express();
    this.app = app;
  }

  private setRoute() {
    this.app.use(catsRouter);
  }

  public Listen() {
    this.setMiddleware;
    this.app.listen(8000, () => {
      console.log("server start!");
    });
  }

  private setMiddleware() {
    this.setRoute();

    this.app.use(express.json()); //json 넣어주기

    this.app.use((req, res, next) => {
      console.log("미들웨어 상단에 위치시키면 이곳을 우선 거친다.");
      next();
    });

    this.app.get("/test", (req, res, next) => {
      console.log("여기는 /test로 요청줬을때만 먼저 거친다.");
      next();
    });

    this.app.use((req, res, next) => {
      console.log(
        "미들웨어를 제일 마지막에 주어서 어떤 주소도 찾지 못하면 error 가 보이게 할 수 있다."
      );
      next();
    });
  }
}

function init() {
  const server = new Server();
  server.Listen();
}
init();
