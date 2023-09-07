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
exports.TableDatabaseController = void 0;
const common_1 = require("@nestjs/common");
const table_database_service_1 = require("./table_database.service");
const create_table_database_dto_1 = require("./dto/create-table_database.dto");
const update_table_database_dto_1 = require("./dto/update-table_database.dto");
let TableDatabaseController = class TableDatabaseController {
    constructor(tableDatabaseService) {
        this.tableDatabaseService = tableDatabaseService;
    }
    create(createTableDatabaseDto) {
        return this.tableDatabaseService.create(createTableDatabaseDto);
    }
    findAll() {
        return this.tableDatabaseService.findAll();
    }
    findOne(id) {
        return this.tableDatabaseService.findOne(+id);
    }
    update(id, updateTableDatabaseDto) {
        return this.tableDatabaseService.update(+id, updateTableDatabaseDto);
    }
    remove(id) {
        return this.tableDatabaseService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_table_database_dto_1.CreateTableDatabaseDto]),
    __metadata("design:returntype", void 0)
], TableDatabaseController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TableDatabaseController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TableDatabaseController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_table_database_dto_1.UpdateTableDatabaseDto]),
    __metadata("design:returntype", void 0)
], TableDatabaseController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TableDatabaseController.prototype, "remove", null);
TableDatabaseController = __decorate([
    (0, common_1.Controller)('table-database'),
    __metadata("design:paramtypes", [table_database_service_1.TableDatabaseService])
], TableDatabaseController);
exports.TableDatabaseController = TableDatabaseController;
//# sourceMappingURL=table_database.controller.js.map