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
    const users = await userService.read()
    console.log(11111, res.locals)

    return res.json({ users })
}

export default {
    create,
    read
}