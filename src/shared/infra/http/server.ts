import express, { NextFunction, Request, Response } from 'express';

import 'reflect-metadata';
import 'express-async-errors';
import swaggerUi from 'swagger-ui-express';

import swaggerFile from '../../../swagger.json';
import { AppError } from '../../errors/AppErrors';

import '../../containers';

import createConnection from '../typeorm';
import { routes } from './routes';

const app = express();
const port = process.env.PORT || 3333;

createConnection();

app.use(express.json());
app.use('/app-doc', swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(routes);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({ message: err.message });
    }
    return response.status(500).json({
      status: 'error',
      message: `Internal server error - ${err.message}`,
    });
  }
);

app.listen(port, () => {
  console.log(`O Servidor foi iniciado na porta ${port}`);
});
