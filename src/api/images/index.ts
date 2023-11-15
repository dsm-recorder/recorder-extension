import { instance } from '..';

const ROUTER = '/images';

export const GetUploadedImg = async (param: File) => {
  const form = new FormData();
  form.append('image', param);

  const { data } = await instance.post<{ url: string }>(ROUTER, form, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return data;
};
