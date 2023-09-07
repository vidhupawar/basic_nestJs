"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TalonicModule = void 0;
const common_1 = require("@nestjs/common");
const talonic_service_1 = require("./talonic.service");
const talonic_controller_1 = require("./talonic.controller");
const axios_1 = require("@nestjs/axios");
const mongoose_1 = require("@nestjs/mongoose");
const talonic_entity_1 = require("./entities/talonic.entity");
let TalonicModule = class TalonicModule {
};
TalonicModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: 'Talonic', schema: talonic_entity_1.TalonicSchema }]),
            axios_1.HttpModule
        ],
        controllers: [talonic_controller_1.TalonicController],
        providers: [talonic_service_1.TalonicService]
    })
], TalonicModule);
exports.TalonicModule = TalonicModule;
//# sourceMappingURL=talonic.module.js.map