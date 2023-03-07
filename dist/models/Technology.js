"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const TechnologySchema = new mongoose_1.Schema({
    technology: { type: String, required: true },
    value: { type: Number, required: true },
    iconName: { type: String, required: true },
    iconSize: { type: Number, required: true },
    fontSize: { type: Number, required: true },
});
const Technology = (0, mongoose_1.model)('Technology', TechnologySchema);
exports.default = Technology;
