import Emoji from 'components/common/Emoji';
import Button from 'components/common/Button';

const AuthVerifyDoneView: React.FC<VerifyDonePropsType> = ({ onClickButton }) => {
  return (
    <div className='VerifyDone'>
      <div className='VerifyDone__inner'>
        <div className='VerifyDone__emoji'>
          <Emoji symbol='🥳' />
        </div>
        <h1 className='VerifyDone__title'>Login successful!</h1>
        <p className='VerifyDone__desc'>로그인이 성공적으로 완료되었어요!</p>
        <div className='VerifyDone__button-container'>
          <Button className='VerifyDone__button' onClick={onClickButton}>
            블로그로 이동하기
          </Button>
        </div>
      </div>
    </div>
  );
};

interface VerifyDonePropsType {
  onClickButton: () => void;
}

export default AuthVerifyDoneView;
