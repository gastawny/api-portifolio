"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const technologiesRoutes_1 = __importDefault(require("./technologiesRoutes"));
const usersRoutes_1 = __importDefault(require("./usersRoutes"));
const routes = (app) => {
    app.route('/').get((req, res) => res.status(200).send('Hello'));
    app.use(express_1.default.json(), usersRoutes_1.default, technologiesRoutes_1.default);
};
exports.default = routes;
