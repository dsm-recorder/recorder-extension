import { useState } from 'react';
import { goTo } from 'react-chrome-extension-router';
import LogoImg from '@/assets/Logo.png';
import MainPage from './MainPage';
import Button from '@/components/button/Button';

const LoginPage = () => {
  const [tabInfo, setTabInfo] = useState({ url: [''], title: '' });

  const getCurrentTabId = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      setTabInfo({
        url: tabs[0].url!.split('/'),
        title: tabs[0].title!,
      });
    });
  };

  const getAccessToken = () => {
    chrome.cookies.get(
      { url: 'http://localhost:3000', name: 'accessToken' },
      (cookie) => {
        if (cookie) {
          chrome.storage.sync.set({ token: cookie.value });
          goTo(MainPage, tabInfo);
        } else {
          alert('웹페이지에서 로그인 후 이용해 주세요'),
            window.open('http://localhost:3000');
        }
      }
    );
  };

  document.addEventListener('DOMContentLoaded', () => getCurrentTabId());
  // when click, get current page link

  return (
    <div className='flex flex-col items-center justify-center w-full gap-5 h-4/5'>
      <img className='w-20 h-20' src={LogoImg} alt='LogoImg' />
      <div className='text-base'>웹에서 로그인하여 서비스를 이용해보세요!</div>
      <Button onClick={getAccessToken}>로그인</Button>
    </div>
  );
};

export default LoginPage;
