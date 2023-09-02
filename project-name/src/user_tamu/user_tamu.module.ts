/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UserTamuService } from './user_tamu.service';
import { UserTamuController } from './user_tamu.controller';
import { user_tamu } from 'models/db_merkle';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forFeature([user_tamu])],
  controllers: [UserTamuController],
  providers: [UserTamuService]
})
export class UserTamuModule {}
