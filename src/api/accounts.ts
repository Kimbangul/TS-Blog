import client from '../axios/index';

export type EmailLoginParam = {
  email: string;
  callback: string;
  scheme: 'https' | 'http';
  url: string;
};
export type ThirdPartyLoginParam = {
  type: 'kakao';
  token: string;
};
export type TokenResponseType = {
  status: true;
  access: string;
  refresh: string;
};
const Accounts = {
  /**
   * 200,
   * 400, 이메일 발신 3분 안지남
   * 409, 그냥 한얼이에게 말해요
   */
  SignInEmail: (params: EmailLoginParam) => {
    const endpoint = '/auth/signup/email';
    return client.post<{}>(endpoint, params);
  },
  VerifyCode: (params: { code: string }) => {
    const endpoint = '/auth/token';
    return client.post<TokenResponseType>(endpoint, params);
  },
  ThirdPartySignIn: (params: ThirdPartyLoginParam) => {
    const endpoint = '/auth/signin/thirdparty';
    return client.post<TokenResponseType>(endpoint, params);
  },
  ThirdPartySignUp: (params: ThirdPartyLoginParam) => {
    const endpoint = '/auth/signup/thirdparty';
    return client.post<{ is_success: boolean }>(endpoint, params);
  },
};
export default Accounts;
