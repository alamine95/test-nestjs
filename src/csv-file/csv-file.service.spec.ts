import { Test, TestingModule } from '@nestjs/testing';
import { CsvFileService } from './csv-file.service';

describe('CsvFileService', () => {
  let service: CsvFileService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CsvFileService],
    }).compile();

    service = module.get<CsvFileService>(CsvFileService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
