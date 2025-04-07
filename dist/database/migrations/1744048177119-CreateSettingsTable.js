"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSettingsTable1744048177119 = void 0;
class CreateSettingsTable1744048177119 {
    async up(queryRunner) {
        await queryRunner.query(`
      CREATE TABLE "setting" (
        "id" SERIAL PRIMARY KEY,
        "isNotificationEnabled" BOOLEAN DEFAULT true,
        "isNewDashboardEnabled" BOOLEAN DEFAULT false,
        "timezone" VARCHAR DEFAULT 'UTC',
        "createdAt" TIMESTAMP NOT NULL DEFAULT NOW(),
        "updatedAt" TIMESTAMP NOT NULL DEFAULT NOW()
      );
    `);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "setting";`);
    }
}
exports.CreateSettingsTable1744048177119 = CreateSettingsTable1744048177119;
//# sourceMappingURL=1744048177119-CreateSettingsTable.js.map