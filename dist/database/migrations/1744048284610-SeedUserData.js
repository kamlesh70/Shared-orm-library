"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeedUserData1744048284610 = void 0;
class SeedUserData1744048284610 {
    async up(queryRunner) {
        const users = [];
        for (let i = 1; i <= 50; i++) {
            const firstName = `User${i}`;
            const lastName = `Test${i}`;
            const email = `user${i}@example.com`;
            const hashedPassword = '$2y$10$bCUGnTJp.s7aeEgQvIpnj.0sj1RxLAIeiHXgADIao5.GHSrtDlptq';
            users.push(`('${firstName}', '${lastName}', '${email}', '${hashedPassword}')`);
        }
        await queryRunner.query(`
        INSERT INTO "user" ("firstName", "lastName", "email", "password")
        VALUES ${users.join(', ')};
        `);
    }
    async down(queryRunner) {
        await queryRunner.query(`
            DELETE FROM "user" WHERE email LIKE 'user%@example.com';
        `);
    }
}
exports.SeedUserData1744048284610 = SeedUserData1744048284610;
//# sourceMappingURL=1744048284610-SeedUserData.js.map