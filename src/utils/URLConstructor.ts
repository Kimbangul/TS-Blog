export default class URLConstructor<T extends { [key: string]: string }> {
  URL: string;
  baseURL: string;
  params: T;
  constructor(baseURL: string, params: T) {
    this.baseURL = baseURL;
    this.params = params;
    const keyVal = Object.entries(params).map((val) => `${val[0]}=${val[1]}`);
    const queryParams = keyVal.join('&');
    if (queryParams === '') {
      this.URL = baseURL;
    } else {
      this.URL = baseURL + '?' + queryParams;
    }
  }
}
