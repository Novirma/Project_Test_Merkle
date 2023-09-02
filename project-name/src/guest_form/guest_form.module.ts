/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { GuestFormService } from './guest_form.service';
import { GuestFormController } from './guest_form.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { guest_form } from 'models/db_merkle';

@Module({
  imports: [SequelizeModule.forFeature([guest_form])],
  controllers: [GuestFormController],
  providers: [GuestFormService]
})
export class GuestFormModule {}
