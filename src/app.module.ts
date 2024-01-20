import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { CsvFileModule } from './csv-file/csv-file.module';
import typeorm from './config/typeorm';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [typeorm]
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => (configService.get('typeorm')),
    }),
    MulterModule.register({
        dest: './uploads',
    }),
    UserModule,
    AuthModule,
    CsvFileModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
