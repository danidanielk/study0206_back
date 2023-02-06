import { Cat, CatType } from "./cats.model";
import { Router } from "express";
import {
  createCat,
  readAllcat,
  selectCat,
  updateCat,
  updateOneCat,
} from "./cats.service";

const router = Router();

//고양이 정보 전체 불러오기
router.get("/cats", readAllcat);

//고양이 정보 선택해서 가져오기
router.get("/cats/:idgogo", selectCat);

//고양이 생성하기
router.post("/cats", createCat);

//고양이 업데이트 전체
router.put("/cats/:idgo", updateCat);

//고양이 업데이트 일부
router.patch("/cats/:id", updateCat);

//고양이 삭제
router.delete("/cats/:id", updateOneCat);

export default router;
