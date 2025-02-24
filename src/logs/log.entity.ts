import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Log {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  action: string;

  @Column({ type: 'datetime', default: () => 'GETDATE()' })
  timestamp: Date;
}