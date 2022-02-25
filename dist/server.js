"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes");
const cors_1 = require("./middlewares/cors");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(cors_1.cors);
app.use(routes_1.router);
app.listen(process.env.PORT || 3333);
