import env from '../lib/env';

const getBaseApiUrl = () => {
  return env.NODE_ENV === 'production' || 'VERCEL' in process.env
    ? env.NEXT_PUBLIC_API_URL
    : 'http://localhost:5000';
};

export { getBaseApiUrl };
