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

    // Ver todos os pedidos de um cliente ordenado por data de criação (mais recentes primeiro)
  public async getPedidosByCliente(clienteId: string): Promise<Pedido[]> {
    return prisma.pedido.findMany({
      where: { clienteId },
      orderBy: { dataDeCriacao: 'desc' },
    });
  }

  // Ver todos os estabelecimentos
  public async getAllEstabelecimentos(): Promise<Estabelecimento[]> {
    return prisma.estabelecimento.findMany();
  }

  // Ver todos os entregadores
  public async getAllEntregadores(): Promise<Entregador[]> {
    return prisma.entregador.findMany();
  }

  // Ver todos os pedidos entregues por um entregador
  public async getPedidosByEntregador(entregadorId: string): Promise<Pedido[]> {
    return prisma.pedido.findMany({
      where: { entregadorId },
      orderBy: { dataDeEntrega: 'desc' },
    });
  }

  // Ver todos os itens de um estabelecimento, ordenados por preço (do mais barato para o mais caro)
  public async getItensByEstabelecimento(estabelecimentoId: string): Promise<Item[]> {
    return prisma.item.findMany({
      where: { estabelecimentoId },
      orderBy: { preco: 'asc' },
    });
  }

}
