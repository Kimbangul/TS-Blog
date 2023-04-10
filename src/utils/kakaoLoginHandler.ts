import { URL } from 'next/dist/compiled/@edge-runtime/primitives/url';
import Router from 'next/router';
import URLConstructor from './URLConstructor';
import axios from 'axios';
import { Accounts } from 'src/api';
import { TokenHandler } from 'pages/auth/redirection';

type KakaoCodeURLParams = {
  client_id: string;
  redirect_uri: string;
  response_type: 'code';
  state: 'kakao';
};

const kakaoLoginHandler = (e: React.MouseEvent) => {
  e.preventDefault();
  const endpoint = 'https://kauth.kakao.com/oauth/authorize';
  const URL = new URLConstructor<KakaoCodeURLParams>(endpoint, {
    client_id: process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY,
    redirect_uri: process.env.NEXT_PUBLIC_LOGIN_CALLBACK_URL,
    response_type: 'code',
    state: 'kakao',
  });
  Router.push(URL.URL);
};

type KakaoAccessCodeParams = {
  code: string;
};

type KakaoJwtTokenResponse = {
  access_token: string;
  expires_in: number;
  refresh_token: string;
  refresh_token_expires_in: number;
  scope: 'profile_image profile_nickname';
  token_type: 'bearer';
};

export const getKakaoAccessCode = ({ code }: KakaoAccessCodeParams) => {
  return new Promise<KakaoJwtTokenResponse>((resolve, reject) => {
    const endpoint = 'https://kauth.kakao.com/oauth/token';
    const kakaoURL = new URLConstructor(endpoint, {
      client_id: process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY,
      grant_type: 'authorization_code',
      redirect_uri: process.env.NEXT_PUBLIC_LOGIN_CALLBACK_URL,
      code,
    });

    axios
      .get(kakaoURL.baseURL, {
        params: kakaoURL.params,
      })
      .then(({ data }) => resolve(data))
      .catch(() => {
        console.log('error');
        reject();
      });
  });
};

export const tryKakaoLogin = (param: { type: 'kakao'; token: string }) => {
  Accounts.ThirdPartySignIn(param)
    .then(({ data }) => {
      TokenHandler.setToken(data);
      Router.push('/auth/done');
    })
    .catch(({ response }) => {
      const status = response.status as number;
      if (status === 404) {
        if (window.confirm('회원가입이 되지 않은 계정입니다. 회원가입 하시겠습니까?')) {
          Accounts.ThirdPartySignUp(param)
            .then((e) => {
              window.alert('회원가입 성공');
              tryKakaoLogin(param);
            })
            .catch((e) => {
              window.alert('회원가입 실패');
              Router.replace('/');
            });
        } else {
          Router.replace('/');
        }
      }
    });
};

export default kakaoLoginHandler;
