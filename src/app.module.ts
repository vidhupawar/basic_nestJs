import { ProcutsModule } from './products/products.module';
import { ProductsService } from './products/products.service';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ProcutsModule
  ],
  controllers: [AppController],
  providers: [
    ProductsService, AppService],
})
export class AppModule { }
