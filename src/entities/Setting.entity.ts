import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Setting {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: true })
  isNotificationEnabled: boolean;

  @Column({ default: false })
  isNewDashboardEnabled: boolean;

  @Column({ default: 'UTC' })
  timezone: string;
}
