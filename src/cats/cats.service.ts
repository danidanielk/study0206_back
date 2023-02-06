import { Cat } from "./cats.model";
import { Request, Response } from "express";

//고양이 정보 전체 불러오기
export const readAllcat = (req: Request, res: Response) => {
  try {
    // const cats=Cat
    res.status(200).send({
      success: true,
      data: {
        cats: Cat[0],
      },
    });
  } catch (error: any) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
};

//고양이 정보 선택해서 가져오기
export const selectCat = (req: Request, res: Response) => {
  try {
    const param = req.params;
    console.log(param);
    const cats = Cat.find((cat) => {
      return cat.id === param.idgogo;
    });

    res.status(200).send({
      success: true,
      data: {
        cats,
      },
    });
  } catch (error: any) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
};

//고양이 생성하기
export const createCat = (req: Request, res: Response) => {
  try {
    const data = req.body;
    console.log(data);
    Cat.push(data);
    res.status(200).send({
      success: true,
      data: {
        data,
      },
    });
  } catch (error: any) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
};

//고양이 업데이트 전체
export const updateCat = (req: Request, res: Response) => {
  try {
    const body = req.body;
    const param = req.params;
    let catData;
    Cat.forEach((cat) => {
      if (cat.id === param.idgo) {
        cat = body;
        catData = cat;
      }
    });
    res.status(200).send({
      succecss: true,
      data: {
        catData,
      },
    });
  } catch (error) {}
};

//고양이 업데이트 일부
export const updateOneCat = (req: Request, res: Response) => {
  try {
    const param = req.params;
    const body = req.body;
    let result;
    Cat.forEach((cat) => {
      if (cat.id === param.id) {
        cat = { ...cat, ...body };
        result = cat;
      }
    });
    res.status(200).send({
      success: true,
      data: {
        result,
      },
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      error: "error",
    });
  }
};

//고양이 삭제
export const deleteCat = (req: Request, res: Response) => {
  try {
    const param = req.params;
    const newCat = Cat.filter((cat) => {
      return cat.id === param.id;
    });
    res.status(200).send({
      success: true,
      data: {
        newCat,
      },
    });
  } catch (error: any) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
};
