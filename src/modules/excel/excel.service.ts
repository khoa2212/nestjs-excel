import { Injectable, Inject, HttpException, HttpStatus } from '@nestjs/common';
import { CreateExcelDto } from './dto/create-excel.dto';
import { UpdateExcelDto } from './dto/update-excel.dto';
import { Excel } from './entities/excel.entity';

@Injectable()
export class ExcelService {
  
  constructor(
    @Inject('ExcelsRepository')
    private readonly excelsRepository: typeof Excel,
  ) { }

  create(createExcelDto: CreateExcelDto) {
    const excel = new Excel();
    return 'This action adds a new excel';
  }

  async findAll() {
    const excel = await this.excelsRepository.findAll<Excel>({
      raw: true
    });
    return excel;
  }

  findOne(id: number) {
    return `This action returns a #${id} excel`;
  }

  update(id: number, updateExcelDto: UpdateExcelDto) {
    return `This action updates a #${id} excel`;
  }

  remove(id: number) {
    return `This action removes a #${id} excel`;
  }
}
