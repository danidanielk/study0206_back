"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var app_model_1 = require("./app.model");
var express_1 = __importDefault(require("express"));
var app = express_1.default();
app.get("/", function (req, res) {
    res.send({ cats: app_model_1.Cat });
});
app.listen(8000, function () {
    console.log("server start!");
});
//# sourceMappingURL=app.js.map