import { Request, Response } from "express";
import { AppError } from "../erros";
import { authService } from "../services";

const login = async (req: Request, res: Response): Promise<Response> => {
  const { email, password } = req.body
  if (!email || !password) throw new AppError('Missing fields', 400)
  const token = await authService.login({ email, password })

  return res.status(200).json({ token })
}

export default {
  login
}