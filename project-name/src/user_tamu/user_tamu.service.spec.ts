import { Test, TestingModule } from '@nestjs/testing';
import { UserTamuService } from './user_tamu.service';

describe('UserTamuService', () => {
  let service: UserTamuService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserTamuService],
    }).compile();

    service = module.get<UserTamuService>(UserTamuService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
