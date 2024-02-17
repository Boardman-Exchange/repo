import { Test, TestingModule } from '@nestjs/testing';
import { SquareController } from './square.controller';
import { SquareService } from './square.service';

describe('SquareController', () => {
  let controller: SquareController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SquareController],
      providers: [SquareService],
    }).compile();

    controller = module.get<SquareController>(SquareController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
