import { inject, injectable } from 'tsyringe';

import { Prisma, Item } from '@prisma/client';

@injectable()
export default class GetItensByEstabelecimentoService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) { }

  public async execute(estabelecimentoId: string): Promise<Item[]> {
    const user = this.usersRepository.getItensByEstabelecimento(estabelecimentoId);
    return user;
  }
}
