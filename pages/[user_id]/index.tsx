import { NextPage } from 'next';
import axios from 'axios';

import Footer from 'components/common/layout/Footer';
import Header from 'components/common/layout/Header';
import Main from 'components/main/Main';
import Page from 'components/common/layout/Page';

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Page>
        <Main />
      </Page>
      <Footer />
    </>
  );
};

// export async function getServerSideProps() {
//   const res = await axios.get('https://api.honeycombpizza.link/velog/kimbangul');
//   const data = await res.data;
//   return { props: { data } };
// }

type HomePropsType = {
  id: string;
  url: string;
};

type Post = {
  date: string;
  headline: string;
  href: string;
  context?: string;
  tags?: string;
};

export default Home;
