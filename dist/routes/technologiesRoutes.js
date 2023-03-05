"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authentication_1 = __importDefault(require("../authentication/authentication"));
const TechnologyController_1 = __importDefault(require("../controllers/TechnologyController"));
const technologiesRoutes = (0, express_1.Router)();
technologiesRoutes
    .get('/technologies', TechnologyController_1.default.getTechnologies)
    .post('/technologies', authentication_1.default.checkToken, TechnologyController_1.default.createTechnology)
    .put('/technologies/:technology', authentication_1.default.checkToken, TechnologyController_1.default.updateTechnologyValue)
    .delete('/technologies/:technology', authentication_1.default.checkToken, TechnologyController_1.default.deleteTechnology);
exports.default = technologiesRoutes;
