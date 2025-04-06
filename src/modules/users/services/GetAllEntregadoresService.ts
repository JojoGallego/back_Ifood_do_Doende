import { inject, injectable } from 'tsyringe';

import { Prisma, Entregador } from '@prisma/client';

@injectable()
export default class GetAllEntregadoresService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) { }

  public async execute(): Promise<Entregador[]> {
    const user = this.usersRepository.getAllEntregadores();
    return user;
  }
}
