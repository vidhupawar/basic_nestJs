import { Module } from '@nestjs/common';
import { TalonicService } from './talonic.service';
import { TalonicController } from './talonic.controller';
import { HttpModule} from '@nestjs/axios';
import { MongooseModule } from '@nestjs/mongoose';
import { TalonicSchema } from './entities/talonic.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{name: 'Talonic', schema: TalonicSchema}]),
    HttpModule
  ],
  controllers: [TalonicController],
  providers: [TalonicService]
})
export class TalonicModule {}
