import Footer from 'components/common/layout/Footer';
import Header from 'components/common/layout/Header';
import Page from 'components/common/layout/Page';
import CategoryPage from 'components/category/CategoryPage';

export default function Home() {
  return (
    <>
      <Header />
      <Page>
        <CategoryPage />
      </Page>
      <Footer />
    </>
  );
}
