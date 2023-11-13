import { Router } from "express";
import {About} from "../controllers/aboutController.js";
import{Dashboard} from "../controllers/dashboardController.js"
import{Profile} from "../controllers/profileController.js"
import { Contact } from "../controllers/contactController.js";
const contactRoute = Router();
contactRoute.get("/about", About);
contactRoute.get("/dashboard", Dashboard);
contactRoute.get("/profile", Profile);
contactRoute.get("/contact",Contact);

export default contactRoute;