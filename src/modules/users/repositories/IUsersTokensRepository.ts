import UserToken from '../infra/typeorm/entities/UsersToken';

export default interface IUsersTokensRepository {
  generate(user_id: string): Promise<UserToken>;
  findByToken(token: string): Promise<UserToken | undefined>;
};
