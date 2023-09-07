"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTalonicDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_talonic_dto_1 = require("./create-talonic.dto");
class UpdateTalonicDto extends (0, mapped_types_1.PartialType)(create_talonic_dto_1.CreateTalonicDto) {
}
exports.UpdateTalonicDto = UpdateTalonicDto;
//# sourceMappingURL=update-talonic.dto.js.map