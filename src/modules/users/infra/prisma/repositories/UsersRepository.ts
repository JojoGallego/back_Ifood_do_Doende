import prisma from '@shared/infra/prisma/client';
import {
  Prisma,
  Cliente,
  Entregador,
  Enderecos,
  Estabelecimento,
  Item,
  Pedido
} from '@prisma/client';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';

export default class UsersRepository implements IUsersRepository {

  public async createCliente(data: Prisma.ClienteCreateInput): Promise<Cliente> {
    return prisma.cliente.create({ data });
  }

  // Entregador
  public async createEntregador(data: Prisma.EntregadorCreateInput): Promise<Entregador> {
    return prisma.entregador.create({ data });
  }

  // Endereços
  public async createEnderecos(data: Prisma.EnderecosCreateInput): Promise<Enderecos> {
    return prisma.enderecos.create({ data });
  }

  // Estabelecimento
  public async createEstabelecimento(data: Prisma.EstabelecimentoCreateInput): Promise<Estabelecimento> {
    return prisma.estabelecimento.create({ data });
  }

  // Item
  public async createItem(data: Prisma.ItemCreateInput): Promise<Item> {
    return prisma.item.create({ data });
  }

  // Pedido
  public async createPedido(data: Prisma.PedidoCreateInput): Promise<Pedido> {
    return prisma.pedido.create({ data });
  }


}
