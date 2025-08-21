import { Request, Response } from "express";
import { userService } from "../services";
import { AppError } from "../erros";
import { verify } from "jsonwebtoken";

// controllers → handle HTTP requests/responses.

const create = async (req: Request, res: Response) => {
    const { email, username, password } = req.body;
    if (!email || !username || !password) throw new AppError("Missing Fields", 400)

    const user = await userService.create({ email, password, username })

    return res.status(201).json({ id: user.id, email: user.email, username: user.username });
}

const read = async (req: Request, res: Response) => {
    const authorization = req.headers.authorization
    if (!authorization) throw new AppError('Missing Bearer token', 401)
    const [Bearer, token] = authorization.split(" ")

    if (!process.env.SECRET_KEY) throw new AppError('Missing secret key', 400)
    const decoded = verify(token, process.env.SECRET_KEY)

    const users = await userService.read()

    return res.json({ users })
}

export default {
    create,
    read
}