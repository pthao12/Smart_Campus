import { Router } from "express";
import {About} from "../controllers/aboutController.js";
import{Dashboard} from "../controllers/dashboardController.js"

const dashboardRoute = Router();
dashboardRoute.get("/about", About);
dashboardRoute.get("/dashboard", Dashboard);

export default dashboardRoute;