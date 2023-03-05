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
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const User_1 = __importDefault(require("../models/User"));
class authentication {
    static checkToken(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const token = request.headers['authorization'];
                if (!token)
                    throw new Error('invalid token');
                jsonwebtoken_1.default.verify(token, process.env.SECRET);
                next();
            }
            catch (error) {
                response.status(500).send({ error: 'Error', message: error.message });
            }
        });
    }
    static Login(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { username, password } = request.body;
                if (!username)
                    throw new Error('username invalid');
                const user = yield User_1.default.findOne({ username });
                const checkPassword = yield bcrypt_1.default.compare(password, user.password);
                if (!checkPassword)
                    throw new Error('invalid data');
                const token = jsonwebtoken_1.default.sign({ username: user.username }, process.env.SECRET);
                response.status(200).send({ message: 'Authentication successful!', token });
            }
            catch (error) {
                response.status(500).send({ error: 'Error', message: error.message });
            }
        });
    }
    static Register(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { username, password } = request.body;
                const pattern = /[^a-zA-Z0-9\s]/gm;
                if (username.length < 3 || pattern.test(username))
                    throw new Error('username format invalid');
                if (password.length < 8)
                    throw new Error('password format invalid');
            }
            catch (error) {
                response.status(500).send({ error: 'Error', message: error.message });
            }
        });
    }
}
exports.default = authentication;
