import ArrowIcon from '@/assets/Arrow.svg';
import { DropdownMenu, PrTypeGenerator } from '@/constant/Header';
import { GetPrRecrdState, prType } from '@/interface/type';

const Header = ({
  prRecord,
  setPrRecord,
  onChangePrRecord,
}: GetPrRecrdState) => {
  const onSelectPrRecord = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPrRecord({ ...prRecord, type: e.target.value as prType });
  };

  return (
    <div className='flex items-center justify-between w-full mt-3'>
      <div className='relative'>
        <select
          value={prRecord.type}
          onChange={onSelectPrRecord}
          className='w-32 pl-2 text-sm text-gray-500 rounded-md outline-none appearance-none h-9 bg-background'
        >
          {DropdownMenu.map((prType) => (
            <option value={prType}>{PrTypeGenerator[prType]}</option>
          ))}
        </select>
        <img
          className='absolute right-2 top-3'
          src={ArrowIcon}
          alt='ArrowIcon'
        />
      </div>
      <div className='flex flex-col items-center gap-3'>
        <span className='text-sm'>중요도: {prRecord.importance}</span>
        <input
          name='importance'
          value={prRecord.importance}
          onChange={onChangePrRecord}
          type='range'
          min='0'
          max='100'
          step='1'
          className='w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-400'
        />
      </div>
    </div>
  );
};

export default Header;
