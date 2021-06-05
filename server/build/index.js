import express from 'express';
import { router } from './api/index.js';
const app = express();
const PORT = 3000;
app.get('/', (_, res) => res.send('Express + TypeScript Server'));
app.use(router);
app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
