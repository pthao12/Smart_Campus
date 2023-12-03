import { Router } from "express";
import { getAllCourse, addCourse, deleteCourse, updateCourse } from "../controllers/courseController.js";

const courseRoute = Router();
courseRoute.get("/", getAllCourse);
courseRoute.post("/addCourse", addCourse);
courseRoute.delete("/deleteCourse/:id", deleteCourse);
courseRoute.put("/updateCourse/:id", updateCourse);

export default courseRoute;