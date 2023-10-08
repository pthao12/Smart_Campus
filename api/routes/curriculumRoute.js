import { Router } from "express";
import { getAllDocuments, getDocumentById} from "../controllers/curriculumController.js";

const curriculumRoute = Router();

// GET
curriculumRoute.get("/", getAllDocuments);
//curriculumRoute.get("/search", searchDocument);
curriculumRoute.get("/:id", getDocumentById);

export default curriculumRoute;