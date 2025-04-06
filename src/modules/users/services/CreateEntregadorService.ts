import { inject, injectable } from 'tsyringe';

import { Prisma, Entregador } from '@prisma/client';

@injectable()
export default class CreateEntregadorService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) { }

  public async execute(data: Prisma.EntregadorCreateInput): Promise<Entregador> {
    const user = this.usersRepository.createEntregador(data);
    return user;
  }
}
