import { BaseAPIGenerator, QueryBase, ReadOnlyAPIGenerator } from './general';

class FileAPIGenerator extends BaseAPIGenerator {
  upload(file:string){
    console.log(file);
    return {status:200, data:'ok'}
  }
  // find_by_nickname(nickname: string) {
  //   const endpoint = this.makeUrl(`/find_by_name/`);
  //   return this.client.get<User>(endpoint, { params: { nickname } });
  // }
  // getMyInfo() {
  //   const endpoint = this.makeUrl('/me/');
  //   return this.client.get<User>(endpoint);
  // }
}

const File = new FileAPIGenerator('/file');

export default File;
