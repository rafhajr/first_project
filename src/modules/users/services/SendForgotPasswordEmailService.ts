import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';
// import User from '../infra/typeorm/entities/User';
import IMailProvider from '@shared/container/providers/MailProvider/models/IMailProvider';
import IUsersRepository from '../repositories/IUsersRepository';
import IUserTokensRepository from '../repositories/IUsersTokensRepository';

interface IRequest {
  email: string;
}

@injectable()
class SendForgotPasswordEmailService {
  constructor(
    @inject('UsersRepository')
    private usersRepository : IUsersRepository,

    @inject('MailProvider')
    private mailProvider: IMailProvider,

    @inject('UserTokenRepository')
    private userTokensRepository: IUserTokensRepository,
  ) {}

  public async execute({ email }: IRequest): Promise<void> {
    const checkUserExist = await this.usersRepository.findByEmail(email);

    if (!checkUserExist) {
      throw new AppError('User does not exits.');
    }

    const { token } = await this.userTokensRepository.generate(checkUserExist.id);

    await this.mailProvider.sendMail(email, `Pedido de recuperação de senha recebido: ${token}`);
  }
}

export default SendForgotPasswordEmailService;
