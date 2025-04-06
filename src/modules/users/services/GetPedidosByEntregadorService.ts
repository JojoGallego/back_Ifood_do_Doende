import { inject, injectable } from 'tsyringe';

import { Prisma, Pedido } from '@prisma/client';

@injectable()
export default class GetPedidosByEntregadorService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) { }

  public async execute(entregadorId: string): Promise<Pedido[]> {
    const user = this.usersRepository.getPedidosByEntregador(entregadorId);
    return user;
  }
}
