"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const talonic_service_1 = require("./talonic.service");
describe('TalonicService', () => {
    let service;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [talonic_service_1.TalonicService],
        }).compile();
        service = module.get(talonic_service_1.TalonicService);
    });
    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
//# sourceMappingURL=talonic.service.spec.js.map