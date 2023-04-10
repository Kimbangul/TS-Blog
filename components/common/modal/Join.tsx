import Input from 'components/common/Input';
import Button from '../Button';
import kakaoLoginHandler from 'src/utils/kakaoLoginHandler';

type JoinParamType = {
  onEmailLogin: React.FormEventHandler;
};

const Join: React.FC<JoinParamType> = ({ onEmailLogin }) => {
  return (
    <form onSubmit={onEmailLogin}>
      <h2 className='Join__title'>회원가입</h2>
      <div className='Join__input-container'>
        <div className='Join__input-item'>
          <Input type='email' label='이메일 입력' name='email' required/>
        </div>
      </div>
      <Button className='Button--square' type='submit'>
        회원가입
      </Button>
      {/* <Button
        className='Button--square'
        style={{ backgroundColor: '#F7E600', color: '#3A1D1D' }}
        onClick={kakaoLoginHandler}
      >
        카카오계정으로 회원가입
      </Button> */}
    </form>
  );
};

export default Join;
