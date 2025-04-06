import { inject, injectable } from 'tsyringe';

import { Prisma, Pedido } from '@prisma/client';

@injectable()
export default class CreatePedidoService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) { }

  public async execute(data: Prisma.PedidoCreateInput): Promise<Pedido> {
    const user = this.usersRepository.createPedido(data);
    return user;
  }
}
