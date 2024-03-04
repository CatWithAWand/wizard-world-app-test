import { cleanEnv, str, host, port } from 'envalid';

const env = cleanEnv(process.env, {
  NODE_ENV: str({
    choices: ['development', 'production'],
    default: 'development',
  }),
  HOST: host({
    default: 'RENDER' in process.env ? '0.0.0.0' : 'localhost',
  }),
  PORT: port({
    default: 5000,
  }),
});

export default env;
