import express from "express"
import { deletePark, insert, select, update } from "../Conrollers/PaymentController.js";


export const paymentRoute = express.Router();

paymentRoute.post("/insert",insert)
paymentRoute.get("/select",select)
paymentRoute.put("/update/:id",update)
paymentRoute.delete("/delete/:id",deletePark)