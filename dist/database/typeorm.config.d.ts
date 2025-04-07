import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
export declare class TypeOrmConfigService implements TypeOrmOptionsFactory {
    constructor();
    createTypeOrmOptions(): TypeOrmModuleOptions;
}
