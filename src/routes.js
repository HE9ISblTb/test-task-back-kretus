import express from "express";

import { avgAllData, avgData, createAllData } from "./controller.js";

const routes = express.Router();

routes.post("/create-all", createAllData);
routes.get("/reports", avgAllData);
routes.get("/avg-data", avgData);

export default routes;