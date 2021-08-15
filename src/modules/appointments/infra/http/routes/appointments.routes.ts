import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import AppointmentController from '../controllers/AppointmentsController';

const appointmentsRouter = Router();
const AppointmentsController = new AppointmentController();

appointmentsRouter.use(ensureAuthenticated);
appointmentsRouter.post('/', AppointmentsController.create);

export default appointmentsRouter;
