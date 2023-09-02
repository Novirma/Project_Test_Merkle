import { PartialType } from '@nestjs/mapped-types';
import { CreateUserTamuDto } from './create-user_tamu.dto';

export class UpdateUserTamuDto extends PartialType(CreateUserTamuDto) {}
