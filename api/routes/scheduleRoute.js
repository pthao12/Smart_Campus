import { Router } from "express";
import { } from "../controllers/scheduleController.js";

const curriculumRoute = Router();

curriculumRoute.get("/", getSchedule);

export default curriculumRoute;