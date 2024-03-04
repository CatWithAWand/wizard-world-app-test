import { cleanEnv, str, url } from 'envalid';

const env = cleanEnv(process.env, {
  NODE_ENV: str({
    choices: ['development', 'production'],
    default: 'development',
  }),
  NEXT_PUBLIC_API_URL: url({
    default: 'http://localhost:5000',
  }),
});

export default env;
