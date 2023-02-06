"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cat_route_1 = __importDefault(require("./cats/cat.route"));
var Server = (function () {
    function Server() {
        var app = express_1.default();
        this.app = app;
    }
    Server.prototype.setRoute = function () {
        this.app.use(cat_route_1.default);
    };
    Server.prototype.Listen = function () {
        this.setMiddleware;
        this.app.listen(8000, function () {
            console.log("server start!");
        });
    };
    Server.prototype.setMiddleware = function () {
        this.setRoute();
        this.app.use(express_1.default.json());
        this.app.use(function (req, res, next) {
            console.log("미들웨어 상단에 위치시키면 이곳을 우선 거친다.");
            next();
        });
        this.app.get("/test", function (req, res, next) {
            console.log("여기는 /test로 요청줬을때만 먼저 거친다.");
            next();
        });
        this.app.use(function (req, res, next) {
            console.log("미들웨어를 제일 마지막에 주어서 어떤 주소도 찾지 못하면 error 가 보이게 할 수 있다.");
            next();
        });
    };
    return Server;
}());
function init() {
    var server = new Server();
    server.Listen();
}
init();
//# sourceMappingURL=app.js.map