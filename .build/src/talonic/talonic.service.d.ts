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
/// <reference types="mongoose/types/inferschematype" />
import { Model } from 'mongoose';
import { CreateTalonicDto } from './dto/create-talonic.dto';
import { UpdateTalonicDto } from './dto/update-talonic.dto';
import { Talonic } from './entities/talonic.entity';
export declare class TalonicService {
    private readonly talonicModel;
    constructor(talonicModel: Model<Talonic>);
    create(createTalonicDto: CreateTalonicDto): Promise<string>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, Talonic> & Omit<Talonic & {
        _id: import("mongoose").Types.ObjectId;
    }, never>)[]>;
    findOne(id: string): Promise<import("mongoose").Document<unknown, {}, Talonic> & Omit<Talonic & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
    update(id: number, updateTalonicDto: UpdateTalonicDto): Promise<import("mongoose").Document<unknown, {}, Talonic> & Omit<Talonic & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
    remove(id: number): Promise<import("mongodb").DeleteResult>;
}
