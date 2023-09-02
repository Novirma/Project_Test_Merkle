/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { user_tamu } from 'models/db_merkle';
import { CreateLoginDto } from './dto/create-login.dto';
import { UpdateLoginDto } from './dto/update-login.dto';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken'

@Injectable()
export class LoginService {

  // Function untuk membuat API Login dan mendapatkan Token
  async validateUser(dataBody: any): Promise<any> {
    try {
      const user = await user_tamu.findOne({
        where: {
          username: dataBody.username,
        },
      });
      if (!user) {
        // Jika pengguna tidak ditemukan, kembalikan pesan kesalahan 401
        return {
          status: 401,
          message: 'Autentikasi gagal. Pengguna tidak ditemukan.',
        };
      }
  
      const matchPassword = await bcrypt.compare(
        dataBody.password,
        user.password,
      );
  
      if (matchPassword) {
        const expiresIn = '1h'; // Contoh: token kadaluarsa dalam 1 jam
  
        const accessToken = jwt.sign(
          { username: user.username },
          process.env.ACCESS_TOKEN_RAHASIA,
          {
            expiresIn,
          },
        );
  
        return {
          token: accessToken,
          status: 200,
          message: 'Selamat Telah Berhasil Login',
          durasi: expiresIn,
        };
      } else {
        // Jika kata sandi tidak cocok, kembalikan pesan kesalahan 401
        return {
          status: 401,
          message: 'Autentikasi gagal. Password salah.',
        };
      }
    } catch (error) {
      // Tangani kesalahan lain
      return {
        status: 500,
        message: 'Terjadi kesalahan saat mencoba autentikasi.',
      };
    }
  }
  

  create(createLoginDto: CreateLoginDto) {
    return 'This action adds a new login';
  }

  findAll() {
    return `This action returns all login`;
  }

  findOne(id: number) {
    return `This action returns a #${id} login`;
  }

  update(id: number, updateLoginDto: UpdateLoginDto) {
    return `This action updates a #${id} login`;
  }

  remove(id: number) {
    return `This action removes a #${id} login`;
  }
}
