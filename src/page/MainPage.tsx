import Button from '@/components/button/Button';
import Header from '@/components/header/Header';
import Textarea from '@/components/textarea/Textarea';
import { useInput } from '@/hook/useInput';
import { TextareaLabel } from '@/constant/Header';
import { PostPrRecordRequst } from '@/interface/type';
import { useState } from 'react';

export type imageState = {
  renderer: string;
  value: File;
};

const MainPage = () => {
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

  const [images, setImages] = useState<imageState[]>([]);

  return (
    <div className='flex flex-col w-full h-full gap-5 p-3 overflow-scroll'>
      <Header
        prRecord={prRecord}
        setPrRecord={setPrRecord}
        onChangePrRecord={onChangePrRecord}
      />
      <div className='text-lg break-keep'>
        marge: (#13) 오가니제이션과 오가니제이션 레포지토리 조회 api #20
      </div>
      <Textarea
        isAddImage={true}
        images={images}
        setImages={setImages}
        label={TextareaLabel[prRecord.type]}
        placeholder='이 Pr에 대해 설명을 해주세요'
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
      <Button>기록 완료</Button>
    </div>
  );
};

export default MainPage;
