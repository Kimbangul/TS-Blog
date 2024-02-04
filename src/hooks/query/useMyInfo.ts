import { useQuery } from 'react-query';
import { Users } from 'src/api';
import useStore from 'store/useStore';

const useMyInfo = () => {
  const { status, data, error, refetch } = useQuery(
    'userInfo',
    () => {
      if (!sessionStorage.getItem('access')) {
        return null;
      }

      const data = Users.getMyInfo();
      return data;
    },
    {
      onSuccess: (data) => {
        console.log(data);
      },
      onError: (e) => {
        console.log(e);
      },
      enabled: !!useStore.headerStore.isLogin,
    }
  );

  return { status, data, error, refetch };
};

export default useMyInfo;
