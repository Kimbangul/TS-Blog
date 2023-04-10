import { NextPage } from 'next';
import { useEffect } from 'react';

import { Accounts } from 'src/api';
import { useRouter } from 'next/router';
import useStore from 'store/useStore';

import Footer from 'components/common/layout/Footer';
import Header from 'components/common/layout/Header';
import AuthVerifyDoneContainer from 'components/auth/AuthVerifyDoneContainer';

const index = () => {
  return (
    <>
      <Header />
      <AuthVerifyDoneContainer />
      <Footer />
    </>
  );
};

export default index;
