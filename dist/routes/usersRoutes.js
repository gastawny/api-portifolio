"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const UserController_1 = __importDefault(require("../controllers/UserController"));
const usersRoutes = express_1.default.Router();
usersRoutes
    .get('/users', UserController_1.default.getUsers)
    .post('/users', UserController_1.default.createUser)
    .delete('/users', UserController_1.default.deleteUser);
exports.default = usersRoutes;
