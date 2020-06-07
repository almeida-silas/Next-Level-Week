import express from 'express';

const routes = express.Router();

import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';

routes.get('/items', ItemsController.index);

routes.get('/points', PointsController.index);
routes.get('/points', PointsController.show);

routes.post('/points', PointsController.store);

export default routes;
