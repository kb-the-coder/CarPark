import express from "express";
import { Login, Register } from "../Conrollers/UserController.js";

export const userRoute = express.Router();

userRoute.post("/register",Register);
userRoute.post("/login",Login)