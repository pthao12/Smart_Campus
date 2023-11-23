import { Router } from "express";
import { getAllCourse } from "../controllers/courseController.js";

const courseRoute = Router();
courseRoute.get("/", getAllCourse);


export default courseRoute;