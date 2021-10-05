import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateAddressUseCase } from './CreateAddressUseCase';

class CreateAddressController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { cep, city, complement, district, name, number, state, street } =
      request.body;
    const { id: user_id } = request.user;

    const createAddressUseCase = container.resolve(CreateAddressUseCase);

    const create = await createAddressUseCase.execute({
      user_id,
      cep,
      city,
      complement,
      district,
      name,
      number,
      state,
      street,
    });

    return response.status(201).json(create);
  }
}

export { CreateAddressController };
