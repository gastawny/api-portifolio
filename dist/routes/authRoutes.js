"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authentication_1 = __importDefault(require("../authentication/authentication"));
const authRoutes = (0, express_1.Router)();
authRoutes.get('/auth', authentication_1.default.Login);
exports.default = authRoutes;