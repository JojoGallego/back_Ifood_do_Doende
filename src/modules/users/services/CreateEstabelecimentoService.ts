import { inject, injectable } from 'tsyringe';

import { Prisma, Estabelecimento } from '@prisma/client';

@injectable()
export default class CreateEstabelecimentoService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) { }

  public async execute(data: Prisma.EstabelecimentoCreateInput): Promise<Estabelecimento> {
    const user = this.usersRepository.createEstabelecimento(data);
    return user;
  }
}
