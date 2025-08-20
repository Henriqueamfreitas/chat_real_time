import { Router } from "express"
import { userController } from "../controllers"

const authRoute: Router = Router()

// authRoute.post("/", userController.create)

export default { authRoute }