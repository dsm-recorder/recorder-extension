import DownloadIcon from '@/assets/Download.svg';
import { InputType } from '@/interface/type';
import { imageState } from '@/page/MainPage';
import DeleteIcon from '@/assets/Delete.svg';

interface ITextareaProps {
  label?: string;
  isAddImage?: boolean;
  placeholder?: string;
  name?: string;
  value?: string;
  onChange?: (e: InputType) => void;
  images?: imageState[];
  setImages?: React.Dispatch<React.SetStateAction<imageState[]>>;
}

const Textarea = ({
  label,
  isAddImage,
  placeholder,
  name,
  value,
  onChange,
  images,
  setImages,
}: ITextareaProps) => {
  const onChangeAddImages = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (files && setImages) {
      if (files.length === 0) {
        return;
      } else {
        const reader = new FileReader();
        reader.readAsDataURL(files[0]);
        reader.onload = () => {
          setImages([
            ...images!,
            { renderer: reader.result as string, value: files[0] },
          ]);
        };
      }
    }
  };

  const onClickDeleteImage = (item: imageState) => {
    const replaceImages = images?.filter((element) => element !== item);
    setImages && setImages(replaceImages!);
  };

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
              onChange={onChangeAddImages}
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

      <div className='grid items-center grid-cols-4 gap-2 justify-items-center'>
        {images?.map((item) => (
          <div key={item.renderer} className='relative'>
            <img src={item.renderer} alt='img' />
            <img
              src={DeleteIcon}
              className='absolute cursor-pointer right-1 top-1'
              onClick={() => onClickDeleteImage(item)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Textarea;
