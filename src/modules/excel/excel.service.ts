import { Injectable, Inject, HttpException, HttpStatus } from '@nestjs/common';
import { raw } from 'mysql2';
import { CreateExcelDto } from './dto/create-excel.dto';
import { UpdateExcelDto } from './dto/update-excel.dto';
import { Excel } from './entities/excel.entity';

@Injectable()
export class ExcelService {
  
  constructor(
    @Inject('ExcelsRepository')
    private readonly excelsRepository: typeof Excel,
  ) { }

  async create(createExcelDto: CreateExcelDto) {
    const excel = await this.excelsRepository.create<Excel> (
      {
        link: createExcelDto.link
      },
      {
        raw: true
      }
    );
    return excel;
  }

  async findAll() {
    const excel = await this.excelsRepository.findAll<Excel>({
      raw: true
    });
    return excel;
  }

  async findOne(id: number) {
    const excel = await this.excelsRepository.findOne<Excel>({
      where: { id },
      raw: true
    })
    return excel
  }

  update(id: number, updateExcelDto: UpdateExcelDto) {
    return `This action updates a #${id} excel`;
  }

  remove(id: number) {
    return `This action removes a #${id} excel`;
  }
}
