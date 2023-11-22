import { Router } from "express";
import { Statistic } from "../controllers/statisticController";

const statisticRoute = Router();

statisticRoute.get("/", Statistic);

export default statisticRoute;