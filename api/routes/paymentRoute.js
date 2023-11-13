import { Router } from "express";
import {About} from "../controllers/aboutController.js";
import{Dashboard} from "../controllers/dashboardController.js"
import{Profile} from "../controllers/profileController.js"
import { Payment } from "../controllers/paymentController.js";
const paymentRoute = Router();
paymentRoute.get("/about", About);
paymentRoute.get("/dashboard", Dashboard);
paymentRoute.get("/profile", Profile);
paymentRoute.get("/payment",Payment);

export default paymentRoute;