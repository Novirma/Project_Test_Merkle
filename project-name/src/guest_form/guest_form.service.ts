/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { guest_form } from 'models/db_merkle';
import { CreateGuestFormDto } from './dto/create-guest_form.dto';
import { UpdateGuestFormDto } from './dto/update-guest_form.dto';


@Injectable()
export class GuestFormService {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars

  // Function untuk membuat API Guest Form
  async create(dataBody: any) {
    try {
      const { nama, alamat, nomor_telepon, catatan } = dataBody;
      if (!dataBody.nama || !dataBody.alamat || !dataBody.nomor_telepon || !dataBody.catatan) {
        throw new Error('Semua bidang harus diisi');
      }
      
      const result = await guest_form.create({
        nama,
        alamat,
        nomor_telepon,
        catatan,
      });
      return result;
      
    } catch (error) {
      return error.message
    }
  }

  //Function untuk mendapatkan API Note Gallery
  async findAll() {
    try {
      const result = await guest_form.findAll({
        attributes: ['nama', 'catatan']
        // include: {model:guest_form}
      })
      return result
    } catch (error) {
      return error.message
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} guestForm`;
  }

  update(id: number, updateGuestFormDto: UpdateGuestFormDto) {
    return `This action updates a #${id} guestForm`;
  }

  remove(id: number) {
    return `This action removes a #${id} guestForm`;
  }
}
