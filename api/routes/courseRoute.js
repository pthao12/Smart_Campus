import { Router } from "express";
import { getAllCourse, addNewCourse, deleteCourse, updateCourse } from "../controllers/courseController.js";

const courseRoute = Router();
courseRoute.get("/", getAllCourse);
courseRoute.get("/addCourse", addNewCourse);
courseRoute.get("/deleteCourse/:id", deleteCourse);
courseRoute.get("/updateCourse/:id", updateCourse);

export default courseRoute;