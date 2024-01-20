import { PartialType } from '@nestjs/mapped-types';
import { CreateCsvFileDto } from './create-csv-file.dto';

export class UpdateCsvFileDto extends PartialType(CreateCsvFileDto) {}
