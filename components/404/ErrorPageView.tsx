import Button from 'components/common/Button';
import Emoji from 'components/common/Emoji';

const ErrorPageView: React.FC<ErrorPagePropsType> = ({ onClickButton }) => {
  return (
    <div className='Error'>
      <div className='Error__inner'>
        <div className='Error__emoji'>
          <Emoji symbol='🛸' />
        </div>
        <h1 className='Error__title'>404 Not Found.</h1>
        <p className='Error__desc'>존재하지 않는 페이지입니다.</p>
        <div className='Error__button-container'>
          <Button className='Error__button' onClick={onClickButton}>
            홈으로 이동하기
          </Button>
        </div>
      </div>
    </div>
  );
};

interface ErrorPagePropsType {
  onClickButton: () => void;
}

export default ErrorPageView;
