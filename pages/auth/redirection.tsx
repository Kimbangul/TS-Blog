import { NextPage } from 'next';
import { useEffect, useCallback } from 'react';

import { Accounts, TokenResponseType } from 'src/api';
import { useRouter } from 'next/router';
import { getKakaoAccessCode, tryKakaoLogin } from 'src/utils/kakaoLoginHandler';

export const TokenHandler = {
  setToken({ access, refresh }: TokenResponseType) {
    sessionStorage.setItem('access', access);
    sessionStorage.setItem('bangul_coo_key', refresh);
  },
};
const Redirection: NextPage<{ code: string; state?: 'kakao' }> = ({ code, state }) => {
  const router = useRouter();
  const AuthenticationFailHandler = useCallback(() => {
    alert('유효하지 않은 코드입니다.');
    router.push('/');
  }, [router]);

  useEffect(() => {
    if (!code) return;
    if (!state) {
      Accounts.VerifyCode({ code })
        .then(({ data }) => {
          // 토큰 저장
          TokenHandler.setToken(data);
          router.replace('/auth/done');
        })
        .catch(AuthenticationFailHandler);
    } else {
      if (state === 'kakao') {
        getKakaoAccessCode({ code }).then((res) => {
          tryKakaoLogin({ type: state, token: res.access_token });
        });
      }
    }
  }, [code, state, router, AuthenticationFailHandler]);
  return <></>;
};
const CodeWrapper: (comp: NextPage<Code>) => NextPage<Code> = (Component: NextPage<Code>) => {
  const Inner: NextPage<Code> = ({ code, state }) => {
    return <Component code={code} state={state} />;
  };
  Inner.getInitialProps = async ({ query }) => {
    return query as Code;
  };
  return Inner;
};

type Code = {
  code: string;
  state?: 'kakao';
};

export default CodeWrapper(Redirection);
