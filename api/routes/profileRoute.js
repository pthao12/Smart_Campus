import { Router } from "express";
import {About} from "../controllers/aboutController.js";
import{Dashboard} from "../controllers/dashboardController.js"
import{Profile} from "../controllers/profileController.js"
const profileRoute = Router();
profileRoute.get("/about", About);
profileRoute.get("/dashboard", Dashboard);
profileRoute.get("/profile", Profile);

export default profileRoute;