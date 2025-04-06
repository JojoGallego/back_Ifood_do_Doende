import { inject, injectable } from 'tsyringe';

import { Prisma, Enderecos } from '@prisma/client';

@injectable()
export default class CreateEnderecosService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) { }

  public async execute(data: Prisma.EnderecosCreateInput): Promise<Enderecos> {
    const user = this.usersRepository.createEnderecos(data);
    return user;
  }
}
