import { User } from "../entities"

export interface ICreateUserServiceParams {
  email: string,
  password: string,
  username: string
}

export interface IReadUserServiceResponse {
  id: string,
  email: string,
  username: string,
}

export type userKeys = keyof User