"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authentication_1 = __importDefault(require("../authentication/authentication"));
const UserController_1 = __importDefault(require("../controllers/UserController"));
const usersRoutes = (0, express_1.Router)();
usersRoutes
    .get('/users', UserController_1.default.getUsers)
    .post('/users', authentication_1.default.checkToken, UserController_1.default.createUser)
    .delete('/users', authentication_1.default.checkToken, UserController_1.default.deleteUser);
exports.default = usersRoutes;
