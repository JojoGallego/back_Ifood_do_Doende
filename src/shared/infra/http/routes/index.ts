import { Router } from 'express';

// Users
import usersRoutes from '@modules/users/infra/http/routes/users.routes';

const routes = Router();

// Users
routes.use('', usersRoutes);

export default routes;
