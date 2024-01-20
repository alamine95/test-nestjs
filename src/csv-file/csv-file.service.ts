import { Injectable } from '@nestjs/common';
import { CreateCsvFileDto } from './dto/create-csv-file.dto';
import { UpdateCsvFileDto } from './dto/update-csv-file.dto';

@Injectable()
export class CsvFileService {
  create(createCsvFileDto: CreateCsvFileDto) {
    return 'This action adds a new csvFile';
  }

  findAll() {
    return `This action returns all csvFile`;
  }

  findOne(id: number) {
    return `This action returns a #${id} csvFile`;
  }

  update(id: number, updateCsvFileDto: UpdateCsvFileDto) {
    return `This action updates a #${id} csvFile`;
  }

  remove(id: number) {
    return `This action removes a #${id} csvFile`;
  }
}
