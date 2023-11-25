import { Router } from "express";
import {About} from "../controllers/aboutController.js";
import{Dashboard} from "../controllers/dashboardController.js"
import{Profile} from "../controllers/profileController.js"


const dashboardRoute = Router();
dashboardRoute.get("/about", About);
dashboardRoute.get("/dashboard", Dashboard);
dashboardRoute.get("/profile", Profile);


export default dashboardRoute;