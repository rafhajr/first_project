import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import AppointmentController from '../controllers/AppointmentsController';
import ProviderAppointmentsController from '../controllers/ProviderAppointmentsController';

const appointmentsRouter = Router();
const AppointmentsController = new AppointmentController();
const providerAppointmentsController = new ProviderAppointmentsController();

appointmentsRouter.use(ensureAuthenticated);
appointmentsRouter.post('/', AppointmentsController.create);
appointmentsRouter.get('/me', providerAppointmentsController.index);

export default appointmentsRouter;
