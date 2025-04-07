import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateSettingsTable1744048177119 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
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

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "setting";`);
  }
}
