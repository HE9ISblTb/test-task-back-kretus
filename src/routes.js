import express from "express";

import { createAllData } from "./controller.js";

const routes = express.Router();

routes.post("/create-all", createAllData);

export default routes;