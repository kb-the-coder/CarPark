import express from "express"
import { deletePark, insert, select, update } from "../Conrollers/ParkingRecordController.js";

export const parkRecRoute = express.Router();

parkRecRoute.post("/insert",insert)
parkRecRoute.get("/select",select)
parkRecRoute.put("/update/:id",update)
parkRecRoute.delete("/delete/:id",deletePark)