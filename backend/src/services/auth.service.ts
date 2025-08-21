import { compare } from "bcryptjs"
import { AppError } from "../erros"
import { userRepository } from "../repositories"
import { ILoginService } from "../types/auth.type"
import { sign } from "jsonwebtoken"

const login = async ({ email, password }: ILoginService) => {
  const findUser = await userRepository.findOne({
    where: {
      email
    }
  })

  if (!findUser) throw new AppError('Invalid Credentials', 401)

  const isPasswordValid = await compare(password, findUser.passwordHash)
  if (!isPasswordValid) throw new AppError('Invalid Credentials', 401)

  const secretKey: string = process.env.SECRET_KEY || ""

  const token = sign(
    {
      id: findUser.id,
      userName: findUser.username
    },
    secretKey,
    {
      expiresIn: '8h'
    }
  )

  return token
}

export default {
  login
}