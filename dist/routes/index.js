"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authRoutes_1 = __importDefault(require("./authRoutes"));
const technologiesRoutes_1 = __importDefault(require("./technologiesRoutes"));
const usersRoutes_1 = __importDefault(require("./usersRoutes"));
const cors_1 = __importDefault(require("cors"));
const routes = (app) => {
    app.route('/').get((req, res) => res.status(200).send('Hello'));
    app.use(express_1.default.json(), (0, cors_1.default)(), usersRoutes_1.default, technologiesRoutes_1.default, authRoutes_1.default);
};
exports.default = routes;
