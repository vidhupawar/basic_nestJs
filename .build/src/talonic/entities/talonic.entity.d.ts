import * as mongoose from 'mongoose';
export interface Talonic extends mongoose.Document {
    tenantId: string;
    table_id: string;
    access_type: string;
    creator: string;
    owner: string;
    createAt: Number;
    formData: object;
}
export declare const TalonicSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    tenantId?: string;
    table_id?: string;
    access_type?: string;
    creator?: string;
    owner?: string;
    createAt?: number;
    formData?: any;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    tenantId?: string;
    table_id?: string;
    access_type?: string;
    creator?: string;
    owner?: string;
    createAt?: number;
    formData?: any;
}>> & Omit<mongoose.FlatRecord<{
    tenantId?: string;
    table_id?: string;
    access_type?: string;
    creator?: string;
    owner?: string;
    createAt?: number;
    formData?: any;
}> & {
    _id: mongoose.Types.ObjectId;
}, never>>;
