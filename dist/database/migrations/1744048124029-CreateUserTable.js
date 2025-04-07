"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserTable1744048124029 = void 0;
class CreateUserTable1744048124029 {
    async up(queryRunner) {
        await queryRunner.query(`
            CREATE TABLE "user" (
                "id" SERIAL PRIMARY KEY,
                "firstName" VARCHAR NOT NULL,
                "lastName" VARCHAR NOT NULL,
                "email" VARCHAR NOT NULL UNIQUE,
                "password" VARCHAR NOT NULL,
                "createdAt" TIMESTAMP NOT NULL DEFAULT NOW(),
                "updatedAt" TIMESTAMP NOT NULL DEFAULT NOW()
            );
        `);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "user";`);
    }
}
exports.CreateUserTable1744048124029 = CreateUserTable1744048124029;
//# sourceMappingURL=1744048124029-CreateUserTable.js.map