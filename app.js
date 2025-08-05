import express from 'express';
import cors from 'cors';

export const app = express();

app.use(cors());

let jsonParser = express.json();

app.get("/", jsonParser, function (req, res, next) {
    res.status(200).send('hello world');
});