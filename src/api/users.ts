import { QueryBase, ReadOnlyAPIGenerator } from './general';

type User = QueryBase & {
  nickname: string;
  username: string;
};

class UserAPIGenerator extends ReadOnlyAPIGenerator<User> {
  find_by_nickname(nickname: string) {
    const endpoint = this.makeUrl(`/find_by_name/`);
    return this.client.get<User>(endpoint, { params: { nickname } });
  }
  getMyInfo() {
    const endpoint = this.makeUrl('/me/');
    return this.client.get<User>(endpoint);
  }
}

const Users = new UserAPIGenerator('/users');

export default Users;
