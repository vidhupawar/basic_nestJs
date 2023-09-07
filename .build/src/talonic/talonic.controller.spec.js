"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const talonic_controller_1 = require("./talonic.controller");
const talonic_service_1 = require("./talonic.service");
describe('TalonicController', () => {
    let controller;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            controllers: [talonic_controller_1.TalonicController],
            providers: [talonic_service_1.TalonicService],
        }).compile();
        controller = module.get(talonic_controller_1.TalonicController);
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
//# sourceMappingURL=talonic.controller.spec.js.map