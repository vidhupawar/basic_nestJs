"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableDatabaseSchema = void 0;
const mongoose = require("mongoose");
exports.TableDatabaseSchema = new mongoose.Schema({
    tenantId: { type: String },
    table_id: { type: String },
    access_type: { type: String },
    creator: { type: String },
    owner: { type: String },
    createAt: { type: Number }
});
//# sourceMappingURL=table_database.entity.js.map