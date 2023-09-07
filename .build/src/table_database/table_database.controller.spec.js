"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const table_database_controller_1 = require("./table_database.controller");
const table_database_service_1 = require("./table_database.service");
describe('TableDatabaseController', () => {
    let controller;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            controllers: [table_database_controller_1.TableDatabaseController],
            providers: [table_database_service_1.TableDatabaseService],
        }).compile();
        controller = module.get(table_database_controller_1.TableDatabaseController);
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
//# sourceMappingURL=table_database.controller.spec.js.map