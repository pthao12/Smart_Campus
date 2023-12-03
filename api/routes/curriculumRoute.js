import { Router } from "express";
import { getAllDocuments, getDocumentById, searchDocument} from "../controllers/curriculumController.js";

const curriculumRoute = Router();

curriculumRoute.get("/", getAllDocuments);
curriculumRoute.post("/search", searchDocument);
curriculumRoute.get("/:id", getDocumentById);

export default curriculumRoute;