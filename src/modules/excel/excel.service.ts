import { Injectable, Inject, HttpException, HttpStatus } from '@nestjs/common';
import { raw } from 'mysql2';
import { CreateExcelDto } from './dto/create-excel.dto';
import { UpdateExcelDto } from './dto/update-excel.dto';
import { Excel } from './entities/excel.entity';
import { CloudinaryService } from 'src/cloundinary/cloudinary.service';

@Injectable()
export class ExcelService {
  
  constructor(
    @Inject('ExcelsRepository')
    private readonly excelsRepository: typeof Excel,
    private readonly cloudinary: CloudinaryService
  ) { }

  async create(createExcelDto: CreateExcelDto) {
    const resUpload = await this.cloudinary.uploadFile(createExcelDto.link.toString());
    console.log(resUpload)
    const excel = await this.excelsRepository.create<Excel> (
      {
        link: resUpload
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
