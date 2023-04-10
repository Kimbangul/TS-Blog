import Footer from 'components/common/layout/Footer';
import Header from 'components/common/layout/Header';
import ErrorPageContainer from 'components/404/ErrorPageContainer';

export default function index() {
  return (
    <>
      <Header />
      <ErrorPageContainer />
      <Footer />
    </>
  );
}
