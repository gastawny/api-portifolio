"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const TechnologyController_1 = __importDefault(require("../controllers/TechnologyController"));
const technologiesRoutes = express_1.default.Router();
technologiesRoutes
    .get('/technologies', TechnologyController_1.default.getTechnologies)
    .post('/technologies', TechnologyController_1.default.createTechnology)
    .put('/technologies/:technology', TechnologyController_1.default.updateTechnologyValue)
    .delete('/technologies/:technology', TechnologyController_1.default.deleteTechnology);
exports.default = technologiesRoutes;
