import { Test, TestingModule } from '@nestjs/testing';
import { GuestFormService } from './guest_form.service';

describe('GuestFormService', () => {
  let service: GuestFormService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GuestFormService],
    }).compile();

    service = module.get<GuestFormService>(GuestFormService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
