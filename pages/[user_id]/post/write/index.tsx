import Footer from 'components/common/layout/Footer';
import Header from 'components/common/layout/Header';
import Page from 'components/common/layout/Page';
import PostWrite from 'components/post/PostWrite';

export default function index() {
  return (
    <>
      <Header />
      <Page>
        <PostWrite />
      </Page>
      <Footer />
    </>
  );
}
