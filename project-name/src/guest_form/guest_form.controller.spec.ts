import { Test, TestingModule } from '@nestjs/testing';
import { GuestFormController } from './guest_form.controller';
import { GuestFormService } from './guest_form.service';

describe('GuestFormController', () => {
  let controller: GuestFormController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GuestFormController],
      providers: [GuestFormService],
    }).compile();

    controller = module.get<GuestFormController>(GuestFormController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
