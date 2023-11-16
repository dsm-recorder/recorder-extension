import { goTo } from 'react-chrome-extension-router';
import Button from '@/components/button/Button';
import Header from '@/components/header/Header';
import Textarea from '@/components/textarea/Textarea';
import SuccessPage from './SuccessPage';
import NotAllowedPage from './NotAllowedPage';
import { useInput } from '@/hook/useInput';
import { TextareaLabel } from '@/constant/Header';
import { PostPrRecordRequst } from '@/interface/type';
import { GetRepositoryId } from '@/api/projects';
import { PostPrRecord } from '@/api/pr-records';

export type imageState = {
  renderer: string;
  value: File;
};

interface IMainPageProps {
  tabInfo: {
    url: string[];
    title: string;
  };
  token: string;
}

const MainPage = ({ tabInfo, token }: IMainPageProps) => {
  const [prTitle, prNumber, repoName] = tabInfo.title.split('·');
  const {
    form: prRecord,
    setForm: setPrRecord,
    onChange: onChangePrRecord,
  } = useInput<PostPrRecordRequst>({
    title: prTitle,
    content: '',
    solution: null,
    type: 'NEW_FEATURE',
    importance: 50,
    attachmentUrls: [],
  });

  if (tabInfo.url[2] !== 'github.com' || tabInfo.url[5] !== 'pull') {
    return <NotAllowedPage />;
  }

  const onClick = async () => {
    try {
      const repositoryId = await GetRepositoryId(repoName.trim(), token);
      await PostPrRecord(repositoryId.projectId, prRecord, token).then(() =>
        goTo(SuccessPage)
      );
    } catch (err) {
      alert('프로젝트 등록을 먼저 하셔야 합니다. 등록 후 시도해주세요');
    }
  };

  return (
    <div className='flex flex-col w-full h-full gap-5 p-3 overflow-scroll'>
      <Header
        prRecord={prRecord}
        setPrRecord={setPrRecord}
        onChangePrRecord={onChangePrRecord}
      />
      <div className='text-lg break-keep'>
        {prTitle}
        <br />
        {prNumber}
      </div>
      <Textarea
        isAddImage={true}
        label={TextareaLabel[prRecord.type]}
        placeholder='이 PR에 대해 설명해주세요'
        name='content'
        value={prRecord}
        content={prRecord.content}
        setValue={setPrRecord}
        onChange={onChangePrRecord}
      />
      {prRecord.type === 'BUG_FIX' && (
        <Textarea
          isAddImage={false}
          label='버그 해결 방법'
          placeholder='어떻게 해결하였는지 작성하세요'
          name='solution'
          value={prRecord}
          content={prRecord.solution}
          setValue={setPrRecord}
          onChange={onChangePrRecord}
        />
      )}
      <Button onClick={onClick}>기록 완료</Button>
    </div>
  );
};

export default MainPage;
