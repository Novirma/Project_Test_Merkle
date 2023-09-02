/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserTamuService } from './user_tamu.service';
import { CreateUserTamuDto } from './dto/create-user_tamu.dto';
import { UpdateUserTamuDto } from './dto/update-user_tamu.dto';

@Controller('user-tamu')
export class UserTamuController {
  constructor(private readonly userTamuService: UserTamuService) {}

  //Controller Url membuat API Create User Tamu
  @Post()
  create(@Body() createUserTamuDto: any) {
    return this.userTamuService.create(createUserTamuDto);
  }

  //Controller Url mendapatkan API Get All User Tamu
  @Get()
  findAll() {
    return this.userTamuService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userTamuService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserTamuDto: UpdateUserTamuDto) {
    return this.userTamuService.update(+id, updateUserTamuDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userTamuService.remove(+id);
  }
}
