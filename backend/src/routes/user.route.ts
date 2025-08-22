import { Router } from "express";
import { userController } from "../controllers";
import middleware from "../middleware";

const userRoutes: Router = Router()

userRoutes.post("/", userController.create)
userRoutes.get("/", middleware.verifyTokenMiddleware, userController.read)

export default {
  userRoute: userRoutes
}