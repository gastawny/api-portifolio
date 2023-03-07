"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Technology_1 = __importDefault(require("../models/Technology"));
class TechnologyController {
    static getTechnologies(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const technologies = yield Technology_1.default.find();
                const filteredTechnologies = technologies.map((tech) => ({
                    technology: tech.technology,
                    value: tech.value,
                    iconName: tech.iconName,
                    fontSize: tech.fontSize,
                    iconSize: tech.iconSize,
                }));
                response.status(200).send(filteredTechnologies);
            }
            catch (error) {
                response.status(500).send({ error: 'Error', message: error.message });
            }
        });
    }
    static createTechnology(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newTechnology = new Technology_1.default(request.body);
                const authNewTechnology = yield Technology_1.default.findOne({ technology: newTechnology.technology });
                if (authNewTechnology)
                    throw new Error('technology already exists');
                const pattern = /[^a-zA-Z0-9\s]/gm;
                if (pattern.test(newTechnology.technology))
                    throw new Error('unsupported characters');
                yield newTechnology.save();
                response.status(200).send(newTechnology);
            }
            catch (error) {
                response.status(500).send({ error: 'Error', message: error.message });
            }
        });
    }
    static updateTechnologyValue(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { technology } = request.params;
                const { value } = request.body;
                yield Technology_1.default.findOneAndUpdate({ technology }, { $set: { value } });
                response.status(200).send(` new ${technology} value: ${value}`);
            }
            catch (error) {
                response.status(500).send({ error: 'Error', message: error.message });
            }
        });
    }
    static deleteTechnology(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { technology } = request.params;
                yield Technology_1.default.findOneAndDelete({ technology });
                response.status(200).send(`${technology} deleted`);
            }
            catch (error) {
                response.status(500).send({ error: 'Error', message: error.message });
            }
        });
    }
}
exports.default = TechnologyController;
