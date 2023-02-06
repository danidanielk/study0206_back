"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var cats_model_1 = require("./cats.model");
var express_1 = require("express");
var router = express_1.Router();
router.get("/cats", function (req, res) {
    try {
        res.status(200).send({
            success: true,
            data: {
                cats: cats_model_1.Cat[0],
            },
        });
    }
    catch (error) {
        res.status(400).send({
            success: false,
            error: error.message,
        });
    }
});
router.get("/cats/:idgogo", function (req, res) {
    try {
        var param_1 = req.params;
        console.log(param_1);
        var cats = cats_model_1.Cat.find(function (cat) {
            return cat.id === param_1.idgogo;
        });
        res.status(200).send({
            success: true,
            data: {
                cats: cats,
            },
        });
    }
    catch (error) {
        res.status(400).send({
            success: false,
            error: error.message,
        });
    }
});
router.post("/cats", function (req, res) {
    try {
        var data = req.body;
        console.log(data);
        cats_model_1.Cat.push(data);
        res.status(200).send({
            success: true,
            data: {
                data: data,
            },
        });
    }
    catch (error) {
        res.status(400).send({
            success: false,
            error: error.message,
        });
    }
});
router.put("/cats/:idgo", function (req, res) {
    try {
        var body_1 = req.body;
        var param_2 = req.params;
        var catData_1;
        cats_model_1.Cat.forEach(function (cat) {
            if (cat.id === param_2.idgo) {
                cat = body_1;
                catData_1 = cat;
            }
        });
        res.status(200).send({
            succecss: true,
            data: {
                catData: catData_1,
            },
        });
    }
    catch (error) { }
});
router.patch("/cats/:id", function (req, res) {
    try {
        var param_3 = req.params;
        var body_2 = req.body;
        var result_1;
        cats_model_1.Cat.forEach(function (cat) {
            if (cat.id === param_3.id) {
                cat = __assign(__assign({}, cat), body_2);
                result_1 = cat;
            }
        });
        res.status(200).send({
            success: true,
            data: {
                result: result_1,
            },
        });
    }
    catch (error) {
        res.status(400).send({
            success: false,
            error: "error",
        });
    }
});
router.delete("/cats/:id", function (req, res) {
    try {
        var param_4 = req.params;
        var newCat = cats_model_1.Cat.filter(function (cat) {
            return cat.id === param_4.id;
        });
        res.status(200).send({
            success: true,
            data: {
                newCat: newCat,
            },
        });
    }
    catch (error) {
        res.status(400).send({
            success: false,
            error: error.message,
        });
    }
});
exports.default = router;
//# sourceMappingURL=cats.service.js.map