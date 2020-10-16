import { Router } from 'express';

import { OrphanageController } from '@/controllers/OrphanageController';
import { processUpload } from '@/middlewares/processUpload';
import { validateInputs } from '@/middlewares/validateInputs';

import { OrphanagesValidators } from './validators/OrphanagesValidators';

const routes = Router();

routes.post(
  '/orphanages',
  processUpload.array('images'),
  validateInputs(OrphanagesValidators.store),
  OrphanageController.store
);
routes.get('/orphanages/:id', OrphanageController.show);
routes.get('/orphanages', validateInputs(OrphanagesValidators.show), OrphanageController.index);

export default routes;
