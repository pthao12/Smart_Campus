// paymentRoute.js

import { Router } from "express";
import { getAllPayments, showAddPaymentForm, addPayment, updatePayment, deletePayment } from "../controllers/paymentController.js";

const paymentRoute = Router();

paymentRoute.get("/", getAllPayments);
paymentRoute.get("/add", showAddPaymentForm); // Display the form
paymentRoute.post("/addPayment", addPayment); // Handle the form submission
paymentRoute.put("/:id", updatePayment);
paymentRoute.delete("/:id", deletePayment);

export default paymentRoute;
