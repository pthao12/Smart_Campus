import { Router } from "express";
import {About} from "../controllers/aboutController.js";
import{Dashboard} from "../controllers/dashboardController.js"
import{Profile} from "../controllers/profileController.js"
import { Payment } from "../controllers/paymentController.js";
//import { Contact } from "../controllers/contactController.js";
//import { Login } from "../controllers/loginController.js";
const dashboardRoute = Router();
dashboardRoute.get("/about", About);
dashboardRoute.get("/dashboard", Dashboard);
dashboardRoute.get("/profile", Profile);
dashboardRoute.get("/payment",Payment);
//dashboardRoute.get("/contact",Contact);
//dashboardRoute.get("/login",Login);
export default dashboardRoute;