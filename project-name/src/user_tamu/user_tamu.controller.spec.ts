import { Test, TestingModule } from '@nestjs/testing';
import { UserTamuController } from './user_tamu.controller';
import { UserTamuService } from './user_tamu.service';

describe('UserTamuController', () => {
  let controller: UserTamuController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserTamuController],
      providers: [UserTamuService],
    }).compile();

    controller = module.get<UserTamuController>(UserTamuController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
