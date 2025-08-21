import { AppError } from "../erros";
import { userRepository } from "../repositories";
import { ICreateUserServiceParams, IReadUserServiceResponse, userKeys } from "../types/user.type";
import bcrypt from "bcryptjs";

const create = async ({ email, username, password }: ICreateUserServiceParams) => {
    const existing = await userRepository.findOne({ where: { email } });
    if (existing) throw new AppError("E-mail already exists")

    const passwordHash = await bcrypt.hash(password, 10);

    const newUser = userRepository.create({ email, username, passwordHash });

    const user = await userRepository.save(newUser);

    return user
}

const read = async (): Promise<[IReadUserServiceResponse[], number]> => {
    const [users, total] = (await userRepository.findAndCount())

    const usersWithoutPassword: IReadUserServiceResponse[] = users.map(user => {
        const { passwordHash, ...rest } = user
        return rest
    })

    return [usersWithoutPassword, total]
}

export default {
    create,
    read
}