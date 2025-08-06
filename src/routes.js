import express from "express";

import { avgData, createAllData } from "./controller.js";

const routes = express.Router();

routes.post("/create-all", createAllData);
routes.get("/avg-data", avgData);

export default routes;