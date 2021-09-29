import express from 'express';
import 'reflect-metadata';

import '../../containers';

import createConnection from '../typeorm';
import { routes } from './routes';

const app = express();
const port = process.env.PORT || 3333;

createConnection();

app.use(express.json());
app.use(routes);

app.listen(port, () => {
  console.log(`O Servidor foi iniciado na porta ${port}`);
});
