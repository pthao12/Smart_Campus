import { Router } from "express";
import {About} from "../controllers/aboutController.js";
//import { Login } from "../controllers/loginController.js";

const aboutRoute = Router();
aboutRoute.get("/about", About);
//aboutRoute.get("login",Login);

export default aboutRoute;