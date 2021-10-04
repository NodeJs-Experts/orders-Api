import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { AuthUserUseCase } from './AuthUserUseCase';

class AuthUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const authUserUseCase = container.resolve(AuthUserUseCase);
    const { email, password } = request.body;

    const login = await authUserUseCase.execute({ email, password });

    return response.status(200).json(login);
  }
}

export { AuthUserController };
