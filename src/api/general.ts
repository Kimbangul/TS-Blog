import { AxiosInstance } from 'axios';
import client from 'src/axios';
import { Blog } from './blogs';
// const id = 1;
// const params = {};

// client.get('/articles/'); // 페이지네이티드 쿼리
// client.get(`/articles/${id}/`); //단일 쿼리

// client.get('/articles/me/', { params: { category: 'react' } }); //자신의 모든 글

// client.get('/articles/flat/)

// client.post('/articles/', params); // 리소스 생성
// client.patch(`/articles/${id}/`, params); //수정

// client.delete(`/articles/${id}/`); //삭제

export class BaseAPIGenerator {
  private basePath: string;
  readonly client: AxiosInstance;

  constructor(basePath: string) {
    if (basePath.endsWith('/')) {
      throw Error('/를 뒤에 붙이지 마세요');
    }
    this.basePath = basePath;
    this.client = client;
  }

  makeUrl(uri: string) {
    return this.basePath + uri;
  }
}

export type QueryBase = {
  id: number;
};

export type PaginatedParams = {
  cursor?: string;
  search?: string;
};

export type Paginated<T = QueryBase> = {
  next?: string;
  prev?: string;
  result: T[];
};

export type Integerable = string | number;

//조회만 가능 한 리소스
export class ReadOnlyAPIGenerator<T extends QueryBase> extends BaseAPIGenerator {
  getRequest =
    <T extends QueryBase, P = {}>(endpoint: string) =>
    (args: PaginatedParams = {}, filters: Partial<T> & any = {}) => {
      const params = {
        ...args,
        ...filters,
      };
      return this.client.get<P extends Paginated ? Paginated<T> : T[]>(endpoint, { params });
    };

  get getItems() {
    const endpoint = this.makeUrl('/');
    return this.getRequest<T, Paginated>(endpoint);
  }

  get getFlatItems() {
    const endpoint = this.makeUrl('/flat/');
    return this.getRequest<T>(endpoint);
  }

  get getMyItems() {
    const endpoint = this.makeUrl('/me/');
    return this.getRequest<T, Paginated>(endpoint);
  }

  getItem(resourceId: Integerable) {
    const endpoint = this.makeUrl(`/${resourceId}/`);
    return this.client.get<T>(endpoint);
  }
}

export class CRUDApiGenerator<T extends QueryBase, U = {}> extends ReadOnlyAPIGenerator<T> {
  postItem = (args: U) => {
    const endpoint = this.makeUrl('/');
    return this.client.post<T>(endpoint, args);
  };
  updateItem = (id: number | string, args: Partial<U>) => {
    const endpoint = this.makeUrl(`/${id}/`);
    return this.client.patch<T>(endpoint, args);
  };
  deleteitem = (id: number | string) => {
    const endpoint = this.makeUrl(`/${id}/`);
    return this.client.delete<{}>(endpoint);
  };
}

//조회,생성 업데이트만 가능 한 리소스

//조회,생성,업데이트,삭제만 가능한 리소스들
