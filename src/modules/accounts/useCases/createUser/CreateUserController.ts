import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateUserUseCase } from './CreateUserUseCase';

class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { email, last_name, name, password, phone } = request.body;
    const createUserUseCase = container.resolve(CreateUserUseCase);

    const createUser = await createUserUseCase.execute({
      email,
      last_name,
      name,
      password,
      phone,
    });

    return response.status(201).json(createUser);
  }
}

export { CreateUserController };
