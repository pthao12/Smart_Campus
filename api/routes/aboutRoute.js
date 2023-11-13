import { Router } from "express";
import {About} from "../controllers/aboutController.js";

const aboutRoute = Router();
aboutRoute.get("/about", About);


export default aboutRoute;