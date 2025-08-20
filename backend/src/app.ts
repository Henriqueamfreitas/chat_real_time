import express, { Application, json } from "express";
import cors from "cors"
import { Request, Response } from "express";
import { authRoutes } from "./routes";
import middleware from "./middleware";

const app: Application = express();
const path = require('path')
app.use(cors())

app.use(json());

app.use("/auth", authRoutes.authRoute);

app.use(middleware.handleError);


export default app;
