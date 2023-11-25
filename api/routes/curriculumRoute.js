import { Router } from "express";
import { getAllDocuments, getDocumentById} from "../controllers/curriculumController.js";

const curriculumRoute = Router();

curriculumRoute.get("/", getAllDocuments);
curriculumRoute.get("/:id", getDocumentById);

export default curriculumRoute;