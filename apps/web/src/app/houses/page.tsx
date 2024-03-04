import type { Houses } from '@repo/validators/houses';
import { getBaseApiUrl } from '../../utils/api';

const getHouses = async () => {
  const reqUrl = `${getBaseApiUrl()}/houses`;
  const res = await fetch(reqUrl, { cache: 'no-cache' });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
};

const Page = async () => {
  const res = (await getHouses()) as Houses;

  return (
    <main className="flex min-h-screen flex-col items-center justify-center space-y-8 p-24">
      {res.map((house) => {
        return <div key={house.id}>{JSON.stringify(house)}</div>;
      })}
    </main>
  );
};

export default Page;
