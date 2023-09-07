import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';

import { AppService } from './app.service';
import { AppController } from './app.controller';
import { TalonicModule } from './talonic/talonic.module';
import { TableDatabaseModule } from './table_database/table_database.module';



@Module({
  imports: [
    //mongodb+srv://<username>:<password>@gremlin.rbzxrsl.mongodb.net/?retryWrites=true&w=majority
   MongooseModule.forRoot('mongodb+srv://vidhupawaradmin:vidhu123@cluster1.dnffxib.mongodb.net/?retryWrites=true&w=majority'),
   TalonicModule,
   TableDatabaseModule,
  ],
  controllers: [AppController],
  providers: [
    AppService
  ],
})
export class AppModule { }
