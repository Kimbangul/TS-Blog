import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Main = () => {
  const router = useRouter();
  useEffect(() => {
    router.replace('/farrar');
    return;
  }, [router]);

  return <></>;
};

export default Main;
