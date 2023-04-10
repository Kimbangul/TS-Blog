import { useRouter } from 'next/router';
import Input from 'components/common/Input';
import Button from 'components/common/Button';
import kakaoLoginHandler from 'src/utils/kakaoLoginHandler';

const Login = (props: LoginProps) => {
  const router = useRouter();

  return (
    <form onSubmit={props.onEmailLogin}>
      <h2 className='Login__title'>로그인</h2>
      <div className='Login__input-container'>
        <div className='Login__input-item'>
          <Input type='email' label='이메일 입력' name='email' required/>
        </div>
      </div>
      <Button type='submit' className='Button--square'>
        로그인
      </Button>
      <Button
        className='Button--square'
        style={{ backgroundColor: '#F7E600', color: '#3A1D1D' }}
        onClick={kakaoLoginHandler}
      >
        카카오계정으로 로그인
      </Button>
      <div className='Login__desc'>
        <button className='Login__desc-button' onClick={props.onClickBtn}>
          회원가입
        </button>
      </div>
    </form>
  );
};

type LoginProps = {
  onClickBtn: () => void;
  onEmailLogin: React.FormEventHandler;
};

export default Login;
