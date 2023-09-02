/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GuestFormService } from './guest_form.service';
import { CreateGuestFormDto } from './dto/create-guest_form.dto';
import { UpdateGuestFormDto } from './dto/update-guest_form.dto';

@Controller('guest-form')
export class GuestFormController {
  constructor(private readonly guestFormService: GuestFormService) {}

  //Controller Url membuat API Guest Form
  @Post()
  create(@Body() createGuestFormDto: any) {
    return this.guestFormService.create(createGuestFormDto);
  }

  //Controller Url mendapatkan API Note Gallery
  @Get()
  findAll() {
    return this.guestFormService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.guestFormService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGuestFormDto: UpdateGuestFormDto) {
    return this.guestFormService.update(+id, updateGuestFormDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.guestFormService.remove(+id);
  }
}
