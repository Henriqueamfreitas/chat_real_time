import { Router } from "express";
import { userController } from "../controllers";

const userRoutes: Router = Router()

userRoutes.post("/", userController.create)
userRoutes.get("/", userController.read)

export default {
  userRoute: userRoutes
}