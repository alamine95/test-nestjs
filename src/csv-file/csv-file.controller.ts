import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile, ParseFilePipe, MaxFileSizeValidator, FileTypeValidator, UploadedFiles, Res, StreamableFile } from '@nestjs/common';
import { CsvFileService } from './csv-file.service';
import { CreateCsvFileDto } from './dto/create-csv-file.dto';
import { UpdateCsvFileDto } from './dto/update-csv-file.dto';
import { FileFieldsInterceptor, FileInterceptor } from '@nestjs/platform-express';
import { createReadStream } from 'fs';
import * as csvParser from 'csv-parser';
import { ApiTags } from '@nestjs/swagger';

@Controller('csv-file')
@ApiTags('csv-files')
export class CsvFileController {
  constructor(private readonly csvFileService: CsvFileService) {}

  @Post('/upload')
  @UseInterceptors(FileInterceptor('files'))
  async uploadFiles(@UploadedFiles() files: Express.Multer.File[]): Promise<any[]> {
    const results = [];
    //console.log();

    for (const file of files) {
      const fileContent = await new Promise<any[]>((resolve) => {
        const rows = [];

        createReadStream(file.path)
          .pipe(csvParser())
          .on('data', (row) => rows.push(row))
          .on('end', () => {
            resolve(rows);
          });
      });

      results.push({ filename: file.originalname, data: fileContent });
    }

    return results;
  }

  @Get()
  findAll() {
    return this.csvFileService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.csvFileService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCsvFileDto: UpdateCsvFileDto) {
    return this.csvFileService.update(+id, updateCsvFileDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.csvFileService.remove(+id);
  }
}
