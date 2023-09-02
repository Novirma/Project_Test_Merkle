import { PartialType } from '@nestjs/mapped-types';
import { CreateGuestFormDto } from './create-guest_form.dto';

export class UpdateGuestFormDto extends PartialType(CreateGuestFormDto) {}
