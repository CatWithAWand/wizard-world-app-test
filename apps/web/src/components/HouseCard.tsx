import type { House } from '@repo/validators/houses';
import colors from 'color-name';

type HouseCardProps = {
  house: House;
};

const parseColours = (colours: string) => {
  const colourArr = colours
    .toLowerCase()
    .split(' ')
    .filter((w) => w !== 'and');

  const hasUnsupportedColour = colourArr.some((colour) => !(colour in colors));

  if (hasUnsupportedColour || colourArr.length !== 2) return ['white', 'black'];

  return colourArr;
};

const HouseCard = ({ house }: HouseCardProps) => {
  const { name, animal, founder, houseColours } = house;
  const colours = parseColours(houseColours);

  return (
    <div
      className={`flex w-80 flex-col items-center justify-center rounded-lg border-[1px] border-neutral-200
      bg-white px-3.5 py-4 shadow-md`}
    >
      <div className="mb-3.5 flex w-full flex-row items-center justify-between">
        <div className="text-lg font-black leading-4">{name}</div>
        <div className="text-xs">{animal}</div>
      </div>
      <div
        style={{
          background: `linear-gradient(90deg, ${colours[0]} 0%, ${colours[1]} 100%);`,
        }}
        className="mb-[0.7rem] h-4 w-full rounded-[0.25rem]"
      ></div>
      <div className="flex w-full flex-row items-center justify-start text-xs leading-none">
        <div>
          Founder: <span className="font-black">{founder}</span>
        </div>
      </div>
    </div>
  );
};

export default HouseCard;
