import { v4 as uuid } from 'uuid';

import IUsersTokensRepository from '@modules/users/repositories/IUsersTokensRepository';

import UserToken from '../../infra/typeorm/entities/UsersToken';

class FakeUsersTokensRepository implements IUsersTokensRepository {
  private userTokens: UserToken[] = [];

  public async generate(user_id: string): Promise<UserToken> {
    const userToken = new UserToken();

    Object.assign(userToken, {
      id: uuid(),
      token: uuid(),
      user_id,
      created_at: new Date(),
      updated_at: new Date(),
    });

    this.userTokens.push(userToken);

    return userToken;
  }

  public async findByToken(token: string): Promise<UserToken | undefined> {
    const userToken = this.userTokens.find((findToken) => findToken.token === token);

    return userToken;
  }
}

export default FakeUsersTokensRepository;
