import { Router } from "express";
import { userController } from "../controllers";

const userRoutes: Router = Router()

userRoutes.post("/", userController.create)

export default {
  userRoute: userRoutes
}