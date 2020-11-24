/* eslint-disable max-len */
import { isEqual } from 'date-fns';
import { EntityRepository, Repository } from 'typeorm';

import Appointment from '../models/Appointment';

@EntityRepository(Appointment)
class AppointmentsRepository extends Repository<Appointment> {
  public async findByDate(date: Date): Promise<Appointment | null> {
    const findAppointment = await this.findOne({
      where: { date },
    });

    return findAppointment || null;
  }

  // public findByProvider(provider: string): Appointment | null{
  //   const findAppointment = this.appointments.find((appointment) => (provider === appointment.provider ? true : null));

  //   return findAppointment || null;
  // }
}

export default AppointmentsRepository;
