import { Router } from 'express';

import UsersController from '../controller/UsersController';

const usersRoutes = Router();

const usersController = new UsersController();

usersRoutes.post('/createCliente', usersController.createCliente);
usersRoutes.post('/createEnderecos', usersController.createEnderecos);
usersRoutes.post('/createEntregador', usersController.createEntregador);
usersRoutes.post('/createEstabelecimento', usersController.createEstabelecimento);
usersRoutes.post('/createItem', usersController.createItem);
usersRoutes.post('/createPedido', usersController.createPedido);

usersRoutes.get('/getEntregadores', usersController.getAllEntregadores);
usersRoutes.get('/getEstabelecimentos', usersController.getAllEstabelecimentos);
usersRoutes.get('/getItensByEstabelecimento', usersController.getItensByEstabelecimento);
usersRoutes.get('/getPedidosByCliente', usersController.getPedidosByCliente);
usersRoutes.get('/getPedidosByEntregador', usersController.getPedidosByEntregador);

export default usersRoutes;
