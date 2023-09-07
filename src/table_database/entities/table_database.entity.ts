import * as mongoose from 'mongoose';


export interface TableDatabase extends mongoose.Document{
    tenantId : string;
    table_id : string;
    access_type : string
    creator :  string
    owner: string;
    createAt: Number;
}

export const TableDatabaseSchema = new mongoose.Schema({
    tenantId : {type: String},
    table_id : {type: String},
    access_type : {type: String},
    creator :  {type: String},
    owner: {type: String},
    createAt: {type: Number}
})
