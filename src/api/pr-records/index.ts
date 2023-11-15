import { PostPrRecordRequst } from '@/interface/type';
import { instance } from '..';

const ROUTER = '/pr-records';

export const PostPrRecord = async (
  projectId: string,
  param: PostPrRecordRequst,
  accessToken: string
) => {
  return await instance.post(`${ROUTER}/${projectId}`, param, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};
