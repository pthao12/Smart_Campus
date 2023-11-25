// // paymentRoute.js
// import { Router } from "express";
// import {
//   getAllPayments,
//   getPaymentByStudentID,
//   addPayment,
//   updatePayment,
//   deletePayment,
// } from "../controllers/paymentController.js";

// const paymentRoute = Router();

// paymentRoute.get("/", getAllPayments);
// paymentRoute.get("/:studentID", getPaymentByStudentID);
// paymentRoute.post("/", addPayment);
// paymentRoute.put("/:studentID", updatePayment);
// paymentRoute.delete("/:studentID", deletePayment);

// export default paymentRoute;
// paymentRoute.js
import { Router } from "express";
import { getAllPayments, getPaymentById, addPayment, updatePayment, deletePayment } from "../controllers/paymentController.js";

const paymentRoute = Router();

paymentRoute.get("/", getAllPayments);
paymentRoute.get("/:id", getPaymentById);
paymentRoute.post("/", addPayment);
paymentRoute.put("/:id", updatePayment);
paymentRoute.delete("/:id", deletePayment);

export default paymentRoute;
