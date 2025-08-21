import { Router } from "express"
import { authController } from "../controllers"

const authRoute: Router = Router()

authRoute.post("/", authController.login)

export default { authRoute }