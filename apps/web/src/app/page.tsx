import { Suspense } from 'react';
import Search from '../components/Search';
import CardGrid, { CardGridSkeleton } from '../components/CardGrid';

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

const HousesPage = async ({ searchParams }: Props) => {
  const name = typeof searchParams.name === 'string' ? searchParams.name : '';

  return (
    <main className="flex min-h-screen flex-col items-center justify-start px-4 pt-16 sm:px-24 sm:pt-24">
      <h2 className="mb-20 text-2xl font-black">Wizard Houses</h2>

      <div className="mb-8 flex w-full items-center justify-center">
        <Search />
      </div>

      <Suspense fallback={<CardGridSkeleton number={8} />}>
        <CardGrid name={name} />
      </Suspense>
    </main>
  );
};

export default HousesPage;
