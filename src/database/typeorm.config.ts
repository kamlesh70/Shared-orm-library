import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  constructor() {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: process.env.DATABASE_TYPE,
      host: process.env.DATABASE_HOST,
      port: Number(process.env.DATABASE_PORT),
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      synchronize: process.env.DATABASE_SYNCHRONIZE == 'true',
      dropSchema: false,
      keepConnectionAlive: true,
      logging: false,
      migrationsTableName: 'migrations_history',
      migrations: [`${__dirname}/migrations/*{.ts,.js}`],
      migrationsRun: true,
      entities: [__dirname + '/../**/**/*.entity{.ts,.js}'],
      cli: {
        entitiesDir: 'src',
        subscribersDir: 'subscriber',
      },
    } as TypeOrmModuleOptions;
  }
}
