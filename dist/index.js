"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const home_router_1 = require("./src/router/home.router");
const login_router_1 = require("./src/router/login.router");
const body_parser_1 = __importDefault(require("body-parser"));
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = 8080;
app.set('view engine', 'ejs');
app.set('views', './src/views');
app.use(express_1.default.static("./public"));
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(home_router_1.router);
app.use(login_router_1.router);
app.listen(PORT, "localhost", () => {
    console.log("Server is running on port" + PORT);
});
//# sourceMappingURL=index.js.map