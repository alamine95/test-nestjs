import { Module } from '@nestjs/common';
import { CsvFileService } from './csv-file.service';
import { CsvFileController } from './csv-file.controller';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  controllers: [CsvFileController],
  providers: [CsvFileService],
})
export class CsvFileModule {}
