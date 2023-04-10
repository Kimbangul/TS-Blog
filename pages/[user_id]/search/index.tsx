import Footer from 'components/common/layout/Footer';
import Header from 'components/common/layout/Header';
import Page from 'components/common/layout/Page';
import SearchContainer from 'components/search/SearchContainer';

export default function index() {
  return (
    <>
      <Header />
      <Page>
        <SearchContainer />
      </Page>
      <Footer />
    </>
  );
}
