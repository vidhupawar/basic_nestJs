"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TalonicSchema = void 0;
const mongoose = require("mongoose");
exports.TalonicSchema = new mongoose.Schema({
    tenantId: { type: String },
    table_id: { type: String },
    access_type: { type: String },
    creator: { type: String },
    owner: { type: String },
    createAt: { type: Number },
    formData: { type: Object },
});
//# sourceMappingURL=talonic.entity.js.map