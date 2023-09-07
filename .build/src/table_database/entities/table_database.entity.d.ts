import * as mongoose from 'mongoose';
export interface TableDatabase extends mongoose.Document {
    tenantId: string;
    table_id: string;
    access_type: string;
    creator: string;
    owner: string;
    createAt: Number;
}
export declare const TableDatabaseSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    tenantId?: string;
    table_id?: string;
    access_type?: string;
    creator?: string;
    owner?: string;
    createAt?: number;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    tenantId?: string;
    table_id?: string;
    access_type?: string;
    creator?: string;
    owner?: string;
    createAt?: number;
}>> & Omit<mongoose.FlatRecord<{
    tenantId?: string;
    table_id?: string;
    access_type?: string;
    creator?: string;
    owner?: string;
    createAt?: number;
}> & {
    _id: mongoose.Types.ObjectId;
}, never>>;
