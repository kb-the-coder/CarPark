import express from "express"
import { deletePark, insert, select, update } from "../Conrollers/ParkingSlotController.js";


export const parkSlotRoute = express.Router();

parkSlotRoute.post("/insert",insert)
parkSlotRoute.get("/select",select)
parkSlotRoute.put("/update/:id",update)
parkSlotRoute.delete("/delete/:id",deletePark)