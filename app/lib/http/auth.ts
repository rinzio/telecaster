import { Auth, Doctor } from '@/app/lib/definitions';

import { HTTP } from './axios';

// TODO: Validate email
const LOGIN = async (data: {
  email: string;
  password: string;
}): Promise<Auth.Response> => {
  const response = HTTP.post('/auth/login', {
    username: data.email,
    password: data.password,
  });
  const body = (await response).data;

  if (!response) {
    throw new Error('Could not login');
  }

  return body;
};

const ME = async (): Promise<Doctor.Response> => {
  const response = HTTP.get('/auth/me');
  return (await response).data;
};

const Auth_ = {
  LOGIN,
  ME,
};

export default Auth_;
