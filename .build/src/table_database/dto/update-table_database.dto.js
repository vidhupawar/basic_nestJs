"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTableDatabaseDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_table_database_dto_1 = require("./create-table_database.dto");
class UpdateTableDatabaseDto extends (0, mapped_types_1.PartialType)(create_table_database_dto_1.CreateTableDatabaseDto) {
}
exports.UpdateTableDatabaseDto = UpdateTableDatabaseDto;
//# sourceMappingURL=update-table_database.dto.js.map