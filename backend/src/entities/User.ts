import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Message } from "./Message";

@Entity()
export class User {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ unique: true })
  email!: string;

  @Column()
  username!: string;

  @Column()
  passwordHash!: string;

  @OneToMany(() => Message, m => m.sender)
  sentMessages!: Message[];

  @OneToMany(() => Message, m => m.recipient)
  receivedMessages!: Message[];
}
