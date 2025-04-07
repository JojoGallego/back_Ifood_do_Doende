import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateClienteService from '@modules/users/services/CreateClienteService';
import CreateEnderecosService from '@modules/users/services/CreateEnderecosService';
import CreateEntregadorService from '@modules/users/services/CreateEntregadorService';
import CreateEstabelecimentoService from '@modules/users/services/CreateEstabelecimentoService';
import CreateItemService from '@modules/users/services/createItemService';
import CreatePedidoService from '@modules/users/services/CreatePedidoService';

import GetAllEntregadoresService from '@modules/users/services/GetAllEntregadoresService';
import GetAllEstabelecimentosService from '@modules/users/services/GetAllEstabelecimentosService';
import GetPedidosByClienteService from '@modules/users/services/GetPedidosByClienteService';
import GetPedidosByEntregadorService from '@modules/users/services/GetPedidosByEntregadorService';
import GetItensByEstabelecimentoService from '@modules/users/services/GetItensByEstabelecimento';

export default class UserController {
  public async createCliente(req: Request, res: Response): Promise<Response> {
    const {
      nome,
      cpf,
      numCartao,
      validadeCartao,
      nomeCartao
    } = req.body;

    const createCliente = container.resolve(CreateClienteService);

    const user = await createCliente.execute({
      nome,
      cpf,
      numCartao,
      validadeCartao,
      nomeCartao
    });

    return res.status(201).json(user);
  }

  public async createEnderecos(req: Request, res: Response): Promise<Response> {
    const {
      cep,
      estado,
      cidade,
      logradouro,
      numero, 
      complemento
    } = req.body;

    const createEnderecos = container.resolve(CreateEnderecosService);

    const user = await createEnderecos.execute({
      cep,
      estado,
      cidade,
      logradouro,
      numero,
      complemento
    });

    return res.status(201).json(user);
  }

  public async createEstabelecimento(req: Request, res: Response): Promise<Response> {
    const {
      nome, 
      descricao, 
      enderecoId
    } = req.body;

    const createEnderecos = container.resolve(CreateEstabelecimentoService);

    const user = await createEnderecos.execute({
      nome,
      descricao,
      endereco: {
        connect: { idEnderecos: enderecoId }
      }
    });

    return res.status(201).json(user);
  }

  public async createEntregador(req: Request, res: Response): Promise<Response> {
    const {
      nome, 
      cpf,
      avaliacao,
      meioDeTransporte
    } = req.body;

    const createEnderecos = container.resolve(CreateEntregadorService);

    const user = await createEnderecos.execute({
      nome, 
      cpf,
      avaliacao,
      meioDeTransporte
    });

    return res.status(201).json(user);
  }

  public async createItem(req: Request, res: Response): Promise<Response> {
    const {
      nome, 
      preco,
      descricao,
      categoria,
      disponivel,
      estabelecimentoId
    } = req.body;
  
    const createItem = container.resolve(CreateItemService);
  
    const item = await createItem.execute({
      nome,
      preco,
      descricao,
      categoria,
      disponivel,
      estabelecimento: {
        connect: { idEstabelecimento: estabelecimentoId }
      }
    });
  
    return res.status(201).json(item);
  }
  
  public async createPedido(req: Request, res: Response): Promise<Response> {
    const {
      avaliacao,
      formaDePagamento,
      dataDeEntrega,
      clienteId,
      entregadorId,
      estabelecimentoId
    } = req.body;
  
    const createItem = container.resolve(CreatePedidoService);
  
    const item = await createItem.execute({
      avaliacao,
      formaDePagamento,
      dataDeEntrega,
      cliente:{
      connect : { idCliente : clienteId }
      },
      entregador: {
      connect : { idEntregador : entregadorId }
      },
      estabelecimento: {
        connect: { idEstabelecimento: estabelecimentoId }
      }
    });
  
    return res.status(201).json(item);
  }

  public async getPedidosByCliente(req: Request, res: Response): Promise<Response> {
    const { clienteId } = req.body;
  
    const getPedidosByCliente = container.resolve(GetPedidosByClienteService);
  
    const pedidos = await getPedidosByCliente.execute(clienteId);
  
    return res.status(200).json(pedidos);
  }
  
  public async getAllEstabelecimentos(req: Request, res: Response): Promise<Response> {
    const getAllEstabelecimentos = container.resolve(GetAllEstabelecimentosService);
  
    const estabelecimentos = await getAllEstabelecimentos.execute();
  
    return res.status(200).json(estabelecimentos);
  }
  
  public async getAllEntregadores(req: Request, res: Response): Promise<Response> {
    const getAllEntregadores = container.resolve(GetAllEntregadoresService);
  
    const entregadores = await getAllEntregadores.execute();
  
    return res.status(200).json(entregadores);
  }
  
  public async getPedidosByEntregador(req: Request, res: Response): Promise<Response> {
    const { entregadorId } = req.body;
  
    const getPedidosByEntregador = container.resolve(GetPedidosByEntregadorService);
  
    const pedidos = await getPedidosByEntregador.execute(entregadorId);
  
    return res.status(200).json(pedidos);
  }
  
  public async getItensByEstabelecimento(req: Request, res: Response): Promise<Response> {
    const { estabelecimentoId } = req.body;
  
    const getItensByEstabelecimento = container.resolve(GetItensByEstabelecimentoService);
  
    const itens = await getItensByEstabelecimento.execute(estabelecimentoId);
  
    return res.status(200).json(itens);
  }
  
}
