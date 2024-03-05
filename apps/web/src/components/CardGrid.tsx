import HouseCard, { HouseCardSkeleton } from './HouseCard';
import { getHouses } from '../lib/houses';

type CardGridProps = {
  name?: string;
};

const CardGrid = async ({ name }: CardGridProps) => {
  const houses = await getHouses({ name: name || '' });

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {houses.map((house) => {
        return <HouseCard key={house.id} house={house} />;
      })}
    </div>
  );
};

export const CardGridSkeleton = ({ number }: { number: number }) => (
  <div className="flex flex-wrap justify-center gap-4">
    {Array(number)
      .fill(0)
      .map((_el, index) => (
        <HouseCardSkeleton key={index} />
      ))}
  </div>
);

export default CardGrid;
