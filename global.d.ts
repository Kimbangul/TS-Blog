declare namespace NodeJS {
  interface Process {
    env: ProcessEnv;
  }
  interface ProcessEnv {
    NEXT_PUBLIC_KAKAO_REST_API_KEY: string;
    NEXT_PUBLIC_LOGIN_CALLBACK_URL: string;
    NEXT_PUBLIC_API_URL: string;
    [key: string]: string;
  }
}
