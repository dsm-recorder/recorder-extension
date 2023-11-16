import { instance } from '..';

const ROUTER = '/projects';

export const GetRepositoryId = async (
  repositoryName: string,
  accessToken: string
) => {
  const { data } = await instance.get<{ projectId: string }>(
    `${ROUTER}/id?repositoryName=${repositoryName}`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  return data;
};
