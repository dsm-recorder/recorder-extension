import DownloadIcon from '@/assets/Download.svg';
import { InputType, PostPrRecordRequst } from '@/interface/type';
import DeleteIcon from '@/assets/Delete.svg';
import { GetUploadedImg } from '@/api/images';

interface ITextareaProps {
  label: string;
  isAddImage: boolean;
  placeholder: string;
  name: string;
  value: PostPrRecordRequst;
  content: string;
  setValue: React.Dispatch<React.SetStateAction<PostPrRecordRequst>>;
  onChange: (e: InputType) => void;
}

const Textarea = ({
  label,
  isAddImage,
  placeholder,
  name,
  value,
  content,
  setValue,
  onChange,
}: ITextareaProps) => {
  const onChangeAddImages = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (files) {
      if (files.length === 0) {
        return;
      } else {
        GetUploadedImg(files[0]).then((response) =>
          setValue({
            ...value,
            attachmentUrls: [...value.attachmentUrls, response.url],
          })
        );
      }
    }
  };

  const onClickDeleteImage = (item: string) => {
    const replaceImages = value.attachmentUrls.filter(
      (element) => element !== item
    );
    setValue && setValue({ ...value, attachmentUrls: replaceImages });
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
          value={content}
          onChange={onChange}
          placeholder={placeholder}
        />
        <div className='absolute right-3 bottom-3'>
          {value.content.length}/200
        </div>
      </div>

      {isAddImage && (
        <div className='grid items-center grid-cols-4 gap-2 justify-items-center'>
          {value.attachmentUrls.map((item) => (
            <div key={item} className='relative'>
              <img src={item} alt='img' />
              <img
                src={DeleteIcon}
                className='absolute cursor-pointer right-1 top-1'
                onClick={() => onClickDeleteImage(item)}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Textarea;
