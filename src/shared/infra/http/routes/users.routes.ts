import { Router, Request, Response } from 'express';

const usersRoutes = Router();

usersRoutes.get('/', (request: Request, response: Response) => {
  const { name, password, email } = request.body;

  return response.json({ message: 'Olá mundo' });
});

usersRoutes.post('/', (request: Request, response: Response) => {
  const { name, password, email } = request.body;
  console.log(password);
  return response.json({ name });
});

export { usersRoutes };
