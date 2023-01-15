import { Module } from '@nestjs/common';
import { ExcelService } from './excel.service';
import { ExcelController } from './excel.controller';
import { excelProviders } from './excel.provider';
import { DatabaseModule } from 'src/database/database.module';
import { CloudinaryModule } from '../../cloundinary/cloudinary.module';

@Module({
  imports: [DatabaseModule, CloudinaryModule],
  controllers: [ExcelController],
  providers: [ExcelService, ...excelProviders],
  exports: []
})
export class ExcelModule {}
