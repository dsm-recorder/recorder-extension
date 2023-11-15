import CheckIcon from '@/assets/Check.svg';

const SuccessPage = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full h-full gap-3'>
      <img className='w-24 h-24' src={CheckIcon} alt='CheckIcon' />
      <div className='text-2xl font-bold'>PR기록 완료</div>
      <div className='text-xs font-medium text-center'>
        깃허브 PR 페이지에서만 사용가능합니다!
        <br />
        기록을 작성하실 PR 페이지로 이동해주세요
      </div>
    </div>
  );
};

export default SuccessPage;
