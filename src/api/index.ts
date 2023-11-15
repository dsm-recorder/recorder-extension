import axios, { AxiosError } from 'axios';

export const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 10000,
});

instance.interceptors.response.use(
  async (response) => response,
  async (error: AxiosError<AxiosError>) => {
    if (
      axios.isAxiosError(error) &&
      error.response &&
      error.response.data.message === 'jwt expired'
    ) {
      alert('토큰이 만료되었습니다. 다시 로그인 해주세요');
      window.open('http://localhost:3000');
    }
  }
);
