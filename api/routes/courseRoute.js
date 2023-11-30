import { Router } from "express";
import { getAllCourse, addNewCourse, deleteCourse, updateCourse } from "../controllers/courseController.js";

const courseRoute = Router();
courseRoute.get("/", getAllCourse);
courseRoute.post("/addCourse", addNewCourse);
courseRoute.delete("/deleteCourse/:id", deleteCourse);
courseRoute.put("/updateCourse/:id", updateCourse);

export default courseRoute;