import { Router } from "express";
import { getAllCourse, printDebug, regist } from "../controllers/portalController.js";

const portalRoute = Router();
portalRoute.get("/", getAllCourse);
portalRoute.post("/registCourse", regist);
portalRoute.get("/debug", printDebug);

export default portalRoute;