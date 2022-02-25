import express from 'express';
import { router } from './routes';
import { cors } from './middlewares/cors';
const app = express();

app.use(express.json());
app.use(cors);
app.use(router);

app.listen(process.env.PORT || 3333);
