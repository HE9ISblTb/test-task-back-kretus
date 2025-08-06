import express from 'express';
import cors from 'cors';

import routes from "./src/routes.js";

import errorHandler from "./src/middleware/errorHandler.js";

export const app = express();

app.use(express.json());
app.use(cors());

let bodyParser = express.json();
app.use(bodyParser)

app.use("/api", routes);

app.use(errorHandler);