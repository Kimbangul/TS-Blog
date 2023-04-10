import { useRouter } from 'next/router';
import ErrorPageView from 'components/404/ErrorPageView';

const ErrorPageContainer = () => {
  const router = useRouter();

  const onClickHomeBtn = () => {
    router.push('/');
    return;
  };

  return <ErrorPageView onClickButton={onClickHomeBtn} />;
};

export default ErrorPageContainer;
