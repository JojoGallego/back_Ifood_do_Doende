import { inject, injectable } from 'tsyringe';

import { Prisma, Pedido } from '@prisma/client';

@injectable()
export default class GetPedidosByClienteService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) { }

  public async execute(clienteId: string): Promise<Pedido[]> {
    const user = this.usersRepository.getPedidosByCliente(clienteId);
    return user;
  }
}
