"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const leadSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true }
}, { timestamps: true } // optional: adds createdAt & updatedAt
);
const Leads = (0, mongoose_1.model)("Lead", leadSchema);
exports.default = Leads;
