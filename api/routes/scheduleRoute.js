import { Router } from "express";
import {getSchedule} from "../controllers/scheduleController.js";

const scheduleRouter = Router();

scheduleRouter.get("/", getSchedule);

export default scheduleRouter;