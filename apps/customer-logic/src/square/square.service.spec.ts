import { Test, TestingModule } from '@nestjs/testing';
import { SquareService } from './square.service';

describe('SquareService', () => {
  let service: SquareService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SquareService],
    }).compile();

    service = module.get<SquareService>(SquareService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
