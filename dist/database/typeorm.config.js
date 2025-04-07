"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeOrmConfigService = void 0;
const common_1 = require("@nestjs/common");
let TypeOrmConfigService = class TypeOrmConfigService {
    constructor() { }
    createTypeOrmOptions() {
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
        };
    }
};
exports.TypeOrmConfigService = TypeOrmConfigService;
exports.TypeOrmConfigService = TypeOrmConfigService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], TypeOrmConfigService);
//# sourceMappingURL=typeorm.config.js.map