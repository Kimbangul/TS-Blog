import { useRouter } from 'next/router';
import { useMyInfo } from 'src/hooks/query';
import AuthVerifyDoneView from 'components/auth/AuthVerifyDoneView';

const AuthVerifyDoneContainer = () => {
  // const data = useMyInfo();
  // console.log(data);
  const router = useRouter();

  const onClickButton = () => {
    router.push('/');
    return;
  };

  return <AuthVerifyDoneView onClickButton={onClickButton} />;
};

export default AuthVerifyDoneContainer;
