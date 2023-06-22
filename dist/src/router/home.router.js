"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const home_Controller_1 = require("../controller/home.Controller");
const express_1 = __importDefault(require("express"));
exports.router = express_1.default.Router();
exports.router.get("/home", home_Controller_1.HomeController.showHome);
//# sourceMappingURL=home.router.js.map