/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { TableDatabaseService } from './table_database.service';
import { CreateTableDatabaseDto } from './dto/create-table_database.dto';
import { UpdateTableDatabaseDto } from './dto/update-table_database.dto';
export declare class TableDatabaseController {
    private readonly tableDatabaseService;
    constructor(tableDatabaseService: TableDatabaseService);
    create(createTableDatabaseDto: CreateTableDatabaseDto): Promise<import("mongoose").Document<unknown, {}, import("./entities/table_database.entity").TableDatabase> & Omit<import("./entities/table_database.entity").TableDatabase & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, import("./entities/table_database.entity").TableDatabase> & Omit<import("./entities/table_database.entity").TableDatabase & {
        _id: import("mongoose").Types.ObjectId;
    }, never>)[]>;
    findOne(id: string): Promise<import("mongoose").Document<unknown, {}, import("./entities/table_database.entity").TableDatabase> & Omit<import("./entities/table_database.entity").TableDatabase & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
    update(id: string, updateTableDatabaseDto: UpdateTableDatabaseDto): Promise<import("mongodb").UpdateResult>;
    remove(id: string): Promise<import("mongodb").DeleteResult>;
}
