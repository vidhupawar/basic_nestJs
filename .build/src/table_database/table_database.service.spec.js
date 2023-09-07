"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const table_database_service_1 = require("./table_database.service");
describe('TableDatabaseService', () => {
    let service;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [table_database_service_1.TableDatabaseService],
        }).compile();
        service = module.get(table_database_service_1.TableDatabaseService);
    });
    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
//# sourceMappingURL=table_database.service.spec.js.map