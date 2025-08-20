import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, Index } from "typeorm";
import { User } from "./User";

@Entity()
export class Message {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @ManyToOne(() => User, u => u.sentMessages, { eager: true })
  sender!: User;

  @ManyToOne(() => User, u => u.receivedMessages, { eager: true })
  @Index()
  recipient!: User;

  @Column()
  content!: string;

  @CreateDateColumn()
  createdAt!: Date;
}
