import DownloadIcon from '@/assets/Download.svg';

interface ITextareaProps {
  label?: string;
  isAddImage?: boolean;
  placeholder?: string;
  name?: string;
  value?: string;
  onChange?: () => void;
  images?: string[];
  onClickImages?: () => void;
}

const Textarea = ({
  label,
  isAddImage,
  placeholder,
  name,
  value,
  onChange,
  images,
  onClickImages,
}: ITextareaProps) => {
  return (
    <div className='flex flex-col w-full gap-2 '>
      <div className='flex items-start justify-between'>
        <div className='text-base'>{label}</div>
        {isAddImage && (
          <label>
            <div className='flex items-center gap-2 text-base cursor-pointer'>
              <span>첨부파일추가</span>
              <img src={DownloadIcon} alt='DownloadIcon' />
            </div>
            <input
              accept='image/*'
              className='hidden'
              type='file'
              onChange={onClickImages}
            />
          </label>
        )}
      </div>

      <div className='relative'>
        <textarea
          className='text-base placeholder:text-base placeholder:text-gray-700 min-h-[200px] resize-none w-full p-2 bg-background rounded-md outline-none'
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
        <div className='absolute right-3 bottom-3'>{value?.length}/200</div>
      </div>

      <div>
        {images?.map((item) => (
          <img src={item} />
        ))}
      </div>
    </div>
  );
};

export default Textarea;
