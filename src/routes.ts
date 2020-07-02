import express from 'express';

import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';

const routes = express.Router();
const pointsConstrollers = new PointsController();
const itemsController = new ItemsController();

routes.get('/items', itemsController.index);

routes.post('/points', pointsConstrollers.create);
routes.get('/points', pointsConstrollers.index);
routes.get('/points/:id', pointsConstrollers.show);

export default routes;