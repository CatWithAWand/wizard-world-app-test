import type { Houses } from '@repo/validators/houses';
import { getBaseApiUrl } from '../utils/api';
import { Suspense } from 'react';
import Loading from './loading';
import HouseCard from '../components/HouseCard';

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
      <Suspense fallback={<Loading />}>
        {res.map((house) => {
          return <HouseCard key={house.id} house={house} />;
        })}
      </Suspense>
    </main>
  );
};

export default Page;
