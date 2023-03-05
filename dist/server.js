"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dbConnect_1 = __importDefault(require("./config/dbConnect"));
const routes_1 = __importDefault(require("./routes"));
dbConnect_1.default.on('error', console.log.bind(console, 'connection error'));
dbConnect_1.default.once('open', () => {
    console.log('successful connection to the database');
});
const app = (0, express_1.default)();
app.use(express_1.default.json());
(0, routes_1.default)(app);
app.listen(8000, () => console.log('listening...'));
