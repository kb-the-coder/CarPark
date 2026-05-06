import express from "express";
import { insert, select } from "../Conrollers/CarController.js";

export const carRoute = express.Router();

carRoute.post("/insert",insert)
carRoute.get("/select",select)