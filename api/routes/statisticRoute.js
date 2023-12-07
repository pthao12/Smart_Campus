import { Router } from "express";
import { getStatistic } from "../controllers/statisticController";

const statisticRoute = Router();

statisticRoute.get("/", getStatistic);

export default statisticRoute;