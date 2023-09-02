/* eslint-disable prettier/prettier */
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GuestFormModule } from './guest_form/guest_form.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserTamuModule } from './user_tamu/user_tamu.module';
import { LoginModule } from './login/login.module';
import { CheckToken } from './token/token.middleware';
import { MiddlewareConsumer, Module, NestModule, Global } from '@nestjs/common';
import { RequestMethod } from '@nestjs/common/enums/request-method.enum';

@Module({
  imports: [
    SequelizeModule.forRootAsync({
      useFactory: () => ({
        dialect: 'postgres',
        host: 'localhost',
        port: 5432,
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        models: [], // Tambahkan model Anda di sini
        autoLoadModels: true,
      }),
    }),
    GuestFormModule,
    UserTamuModule,
    LoginModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
// export class AppModule {}

// middleware


export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // Exclude routes inside 'src/login' from token validation
    consumer
      .apply(CheckToken)
      .exclude({ path: 'login', method: RequestMethod.ALL })
      .forRoutes('*');
  }
}






