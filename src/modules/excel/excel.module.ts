import { Module } from '@nestjs/common';
import { ExcelService } from './excel.service';
import { ExcelController } from './excel.controller';
import { excelProviders } from './excel.provider';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [ExcelController],
  providers: [ExcelService, ...excelProviders],
  exports: []
})
export class ExcelModule {}
