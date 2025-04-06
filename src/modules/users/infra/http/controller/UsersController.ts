import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateClienteService from '@modules/users/services/CreateClienteService';
import CreateEnderecosService from '@modules/users/services/CreateEnderecosService';
import CreateEntregadorService from '@modules/users/services/CreateEntregadorService';
import CreateEstabelecimentoService from '@modules/users/services/CreateEstabelecimentoService';
import CreateItemService from '@modules/users/services/createItemService';
import CreatePedidoService from '@modules/users/services/CreatePedidoService';

import CreeClienteService from '@modules/users/services/CreateClienteService';
import CreeService from '@modules/users/services/CreateClienteService';
import Service from '@modules/users/services/CreateClienteService';
import CreenteService from '@modules/users/services/CreateClienteService';
import dadService from '@modules/users/services/CreateClienteService';

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

    const createEnderecos = container.resolve(CreateItemService);

    const user = await createEnderecos.execute({
      nome, 
      preco,
      descricao,
      categoria,
      disponivel,
      estabelecimento: {
        connect: { idEstabelecimento: estabelecimentoId }
      },
      
    });

    return res.status(201).json(user);
  }
}
