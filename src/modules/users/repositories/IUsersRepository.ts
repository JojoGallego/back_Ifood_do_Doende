import {
  Prisma,
  Cliente,
  Entregador,
  Enderecos,
  Estabelecimento,
  Item,
  Pedido
} from '@prisma/client';

interface IUsersRepository {
  createCliente(data: Prisma.ClienteCreateInput): Promise<Cliente>;
  createEntregador(data: Prisma.EntregadorCreateInput): Promise<Entregador>;
  createEnderecos(data: Prisma.EnderecosCreateInput): Promise<Enderecos>;
  createEstabelecimento(data: Prisma.EstabelecimentoCreateInput): Promise<Estabelecimento>;
  createItem(data: Prisma.ItemCreateInput): Promise<Item>;
  createPedido(data: Prisma.PedidoCreateInput): Promise<Pedido>;
}

export default IUsersRepository;
