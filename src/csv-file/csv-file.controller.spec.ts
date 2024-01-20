import { Test, TestingModule } from '@nestjs/testing';
import { CsvFileController } from './csv-file.controller';
import { CsvFileService } from './csv-file.service';

describe('CsvFileController', () => {
  let controller: CsvFileController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CsvFileController],
      providers: [CsvFileService],
    }).compile();

    controller = module.get<CsvFileController>(CsvFileController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
