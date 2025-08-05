import { readFile } from 'node:fs/promises';
import { app } from './app.js';

const config = JSON.parse(await readFile('./src/config/config.json', 'utf8'));

app.listen(config.server.port, config.server.host, () => {
    console.log(`Сервер запущен на ${config.server.host}:${config.server.port}`);
});