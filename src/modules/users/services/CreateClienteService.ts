import { inject, injectable } from 'tsyringe';

import { Prisma, Cliente } from '@prisma/client';

@injectable()
export default class CreateClienteService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) { }

  public async execute(data: Prisma.ClienteCreateInput): Promise<Cliente> {
    const user = this.usersRepository.createCliente(data);
    return user;
  }
}
