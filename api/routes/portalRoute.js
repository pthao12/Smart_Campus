import { Router } from "express";
import { getAllCourse } from "../controllers/portalController.js";

const portalRoute = Router();
portalRoute.get("/", getAllCourse);

export default portalRoute;