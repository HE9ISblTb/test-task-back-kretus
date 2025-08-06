import express from 'express';
import cors from 'cors';

import routes from "./src/routes.js";

import errorHandler from "./src/middleware/errorHandler.js";

export const app = express();

app.use(cors());
app.use(express.json())
let jsonParser = express.json();

app.use("/api", routes);

app.use(errorHandler)

app.get("/", jsonParser, function (req, res, next) {
    res.status(200).send('hello world');
});