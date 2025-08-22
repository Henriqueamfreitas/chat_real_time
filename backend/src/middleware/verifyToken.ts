import { NextFunction, Request, Response } from "express"
import { AppError } from "../erros"
import { verify } from "jsonwebtoken"

export const verifyTokenMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const authorization = req.headers.authorization
  if (!authorization) throw new AppError('Missing Bearer token', 401)
  const [Bearer, token] = authorization.split(" ")

  if (!process.env.SECRET_KEY) throw new AppError('Missing secret key', 400)
  const decoded = verify(token, process.env.SECRET_KEY)

  res.locals.decoded = decoded

  return next()
}