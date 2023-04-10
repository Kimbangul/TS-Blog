import Footer from 'components/common/layout/Footer';
import Header from 'components/common/layout/Header';
import Setting from 'components/setting/Setting';
import Page from 'components/common/layout/Page';

export default function index() {
  return (
    <>
      <Header />
      <Page>
        <Setting />
      </Page>
      <Footer />
    </>
  );
}
