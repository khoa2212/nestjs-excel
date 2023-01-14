import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExcelModule } from './excel/excel.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [ExcelModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
