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
const User_1 = __importDefault(require("../models/User"));
class UserController {
    static getUsers(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield User_1.default.find();
                const filteredUsers = users.map((user) => ({
                    username: user.username,
                }));
                response.status(200).send(filteredUsers);
            }
            catch (error) {
                response.status(500).send({ error: 'Error', message: error.message });
            }
        });
    }
    static createUser(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newUser = new User_1.default(request.body);
                const authNewTechnology = yield User_1.default.findOne({ username: newUser.username });
                if (authNewTechnology)
                    throw new Error('user already exists');
                const pattern = /[^a-zA-Z0-9\s]/gm;
                if (pattern.test(newUser.username))
                    throw new Error('unsupported characters');
                yield newUser.save();
                response.status(200).send('registered user');
            }
            catch (error) {
                response.status(500).send({ error: 'Error', message: error.message });
            }
        });
    }
    static deleteUser(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { username, password } = request.body;
                const deletedUser = yield User_1.default.findOneAndDelete({ username, password });
                if (!deletedUser)
                    throw new Error('username or password invalid');
                response.status(200).send(`${username} deleted`);
            }
            catch (error) {
                response.status(500).send({ error: 'Error', message: error.message });
            }
        });
    }
}
exports.default = UserController;
