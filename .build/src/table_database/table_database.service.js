"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableDatabaseService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let TableDatabaseService = class TableDatabaseService {
    constructor(tDBModel) {
        this.tDBModel = tDBModel;
    }
    create(createTableDatabaseDto) {
        return this.tDBModel.create(createTableDatabaseDto);
    }
    async findAll() {
        const tableData = await this.tDBModel.find().exec();
        return tableData;
    }
    async findOne(id) {
        const tableData = await this.tDBModel.findOne({ table_id: id }).exec();
        return tableData;
    }
    async update(id, updateTableDatabaseDto) {
        const tableData = await this.tDBModel.updateOne({ table_id: id }, updateTableDatabaseDto).exec();
        return tableData;
    }
    async remove(id) {
        const tableData = await this.tDBModel.deleteOne({ table_id: id }).exec();
        return tableData;
    }
};
TableDatabaseService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('table_databases')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], TableDatabaseService);
exports.TableDatabaseService = TableDatabaseService;
//# sourceMappingURL=table_database.service.js.map