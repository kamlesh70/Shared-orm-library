import { MigrationInterface, QueryRunner } from 'typeorm';

export class SeedUserData1744048284610 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const users = [];
    for (let i = 1; i <= 50; i++) {
      const firstName = `User${i}`;
      const lastName = `Test${i}`;
      const email = `user${i}@example.com`;

        // this is bcrypt hashed password to save in database
        // for seed storing the same password we can save different for all users
        // the password for test use is = Test@101
      const hashedPassword = '$2y$10$bCUGnTJp.s7aeEgQvIpnj.0sj1RxLAIeiHXgADIao5.GHSrtDlptq';
        
      users.push(
        `('${firstName}', '${lastName}', '${email}', '${hashedPassword}')`,
      );
    }

    await queryRunner.query(`
        INSERT INTO "user" ("firstName", "lastName", "email", "password")
        VALUES ${users.join(', ')};
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            DELETE FROM "user" WHERE email LIKE 'user%@example.com';
        `);
  }
}
