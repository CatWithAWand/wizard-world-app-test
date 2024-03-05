import type { Houses } from '@repo/validators/houses';
import { getBaseApiUrl } from '../utils/api';

const getHouses = async ({ name }: { name?: string }): Promise<Houses> => {
  let reqUrl = `${getBaseApiUrl()}/houses`;

  if (name) reqUrl = `${reqUrl}?name=${name}`;

  const res = await fetch(reqUrl, { cache: 'no-cache' });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
};

export { getHouses };
