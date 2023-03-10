import { Controller, 
  Get, 
  Post,
  Body, 
  Patch, 
  Param, 
  Delete, 
  Res, 
  HttpStatus, 
  Req, 
  UsePipes, 
  ValidationPipe } from '@nestjs/common';
import { ExcelService } from './excel.service';
import { CreateExcelDto } from './dto/create-excel.dto';
import { UpdateExcelDto } from './dto/update-excel.dto';
import { Response } from 'express';

@Controller('api/excel')
export class ExcelController {
  constructor(private readonly excelService: ExcelService) {}

  @Post('uploadFile')
  async create(@Body() createExcelDto: CreateExcelDto, @Res() res: Response) {
    try {
      const result = await this.excelService.create(createExcelDto);
      console.log(result);
      if(result){
        return res.status(200).json(result);
      }
      return res.status(400).json("Bad request");
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Internal Server Error' })
    }
  }

  @Get('files')
  async findAll(@Res() res: Response) {
    try {
      const result = await this.excelService.findAll();
      return res.status(200).json(result); 
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Internal Server Error' })
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @Res() res: Response) {
    try {
      const result = await this.excelService.findOne(+id);
      return res.status(200).json(result); 
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Internal Server Error' })
    }
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateExcelDto: UpdateExcelDto) {
    return this.excelService.update(+id, updateExcelDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.excelService.remove(+id);
  }
}
