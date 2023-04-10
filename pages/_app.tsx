import 'src/styles/style.scss';
import type { AppProps } from 'next/app';

import { QueryClient, QueryClientProvider, QueryCache } from 'react-query';

import HeadInfo from 'components/common/HeadInfo';
import ThemeProvider from 'components/common/layout/ThemeProvider';
import { useMyInfo } from 'src/hooks/query';
import { useEffect } from 'react';
import { autorun } from 'mobx';
import useStore from 'store/useStore';
import { observer } from 'mobx-react';
import useInitialStyle from 'src/hooks/useInitialStyle';

const queryClient = new QueryClient({
  queryCache: new QueryCache({
    // onError: (error) => {
    //   console.log('onError', error);
    // },
    // onSuccess: (data) => {
    //   console.log('onSuccess', data);
    // },
  }),
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

const QueryProvider: React.FC<{ children?: React.ReactNode }> = observer((props) => {
  const myInfo = useMyInfo();
  return <>{props.children}</>;
});

export default function App({ Component, pageProps }: AppProps) {
  useInitialStyle();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <HeadInfo />
        <ThemeProvider>
          <QueryProvider>
            <Component {...pageProps} />
          </QueryProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
}
