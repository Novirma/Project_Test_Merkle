/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateUserTamuDto } from './dto/create-user_tamu.dto';
import { UpdateUserTamuDto } from './dto/update-user_tamu.dto';
import * as bcrypt from 'bcrypt';
import { user_tamu } from 'models/db_merkle';

@Injectable()
export class UserTamuService {

  // Function untuk membuat API Create User Tamu
  async create(dataBody: any) {
    try {
      const salt = await bcrypt.genSalt(10);
      const hashed = await bcrypt.hash(dataBody.password, salt);

      const result = await user_tamu.create({
        username: dataBody.username,
        password: hashed
      })

      return {
        status: 200,
        message: 'data users berhasil dibuat',
      };

    } catch (error) {
      return error.message;
    }
  }

  // Function untuk mendapatkan API Get All User Tamu
  async findAll() {
    try {
      const result = await user_tamu.findAll()
      return result
    } catch (error) {
      return error.message
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} userTamu`;
  }

  update(id: number, updateUserTamuDto: UpdateUserTamuDto) {
    return `This action updates a #${id} userTamu`;
  }

  remove(id: number) {
    return `This action removes a #${id} userTamu`;
  }
}
