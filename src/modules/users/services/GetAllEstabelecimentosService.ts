import { inject, injectable } from 'tsyringe';

import { Prisma, Estabelecimento } from '@prisma/client';

@injectable()
export default class GetAllEstabelecimentosService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) { }

  public async execute(): Promise<Estabelecimento[]> {
    const user = this.usersRepository.getAllEstabelecimentos();
    return user;
  }
}
