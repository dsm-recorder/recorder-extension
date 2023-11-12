import { goTo } from 'react-chrome-extension-router';
import LogoImg from '@/assets/Logo.png';
import MainPage from './MainPage';

const LoginPage = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full gap-5 h-4/5'>
      <img className='w-20 h-20' src={LogoImg} alt='LogoImg' />
      <div className='text-base'>웹에서 로그인하여 서비스를 이용해보세요!</div>
      <button
        className='px-5 py-2 text-lg font-bold text-white rounded-md bg-green'
        onClick={() => goTo(MainPage)}
      >
        로그인
      </button>
    </div>
  );
};

export default LoginPage;
