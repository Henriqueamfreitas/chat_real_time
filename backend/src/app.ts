import express, { Application, json } from "express";
import cors from "cors"
import { Request, Response } from "express";
import { authRoutes } from "./routes";
import middleware from "./middleware";
import userRoute from "./routes/user.route";

const app: Application = express();
const path = require('path')
app.use(cors())

app.use(json());

app.use("/auth", authRoutes.authRoute);

app.use("/users", userRoute.userRoute);

app.use(middleware.handleError);


export default app;
