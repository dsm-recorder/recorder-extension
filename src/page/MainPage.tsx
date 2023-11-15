import { useState } from 'react';
import { goTo } from 'react-chrome-extension-router';
import Button from '@/components/button/Button';
import Header from '@/components/header/Header';
import Textarea from '@/components/textarea/Textarea';
import SuccessPage from './SuccessPage';
import NotAllowedPage from './NotAllowedPage';
import { useInput } from '@/hook/useInput';
import { TextareaLabel } from '@/constant/Header';
import { PostPrRecordRequst } from '@/interface/type';

export type imageState = {
  renderer: string;
  value: File;
};

interface IMainPageProps {
  tabInfo: {
    url: string[];
    title: string;
  };
  cookie: string;
}

const MainPage = ({ tabInfo, cookie }: IMainPageProps) => {
  const {
    form: prRecord,
    setForm: setPrRecord,
    onChange: onChangePrRecord,
  } = useInput<PostPrRecordRequst>({
    title: '',
    content: '',
    solution: '',
    type: 'NEW_FEATURE',
    importance: 50,
  });
  console.log(tabInfo, cookie);
  const [images, setImages] = useState<imageState[]>([]);
  const [prTitle] = tabInfo.title.split('·');

  if (tabInfo.url[2] !== 'github.com' || tabInfo.url[5] !== 'pull') {
    return <NotAllowedPage />;
  }
  return (
    <div className='flex flex-col w-full h-full gap-5 p-3 overflow-scroll'>
      <Header
        prRecord={prRecord}
        setPrRecord={setPrRecord}
        onChangePrRecord={onChangePrRecord}
      />
      <div className='text-lg break-keep'>{prTitle}</div>
      <Textarea
        isAddImage={true}
        images={images}
        setImages={setImages}
        label={TextareaLabel[prRecord.type]}
        placeholder='이 PR에 대해 설명해주세요'
        name='content'
        value={prRecord.content}
        onChange={onChangePrRecord}
      />
      {prRecord.type === 'BUG_FIX' && (
        <Textarea
          label='버그 해결 방법'
          placeholder='어떻게 해결하였는지 작성하세요'
          name='solution'
          value={prRecord.solution}
          onChange={onChangePrRecord}
        />
      )}
      <Button onClick={() => goTo(SuccessPage)}>기록 완료</Button>
    </div>
  );
};

export default MainPage;
