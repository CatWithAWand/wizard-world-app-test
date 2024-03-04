// Ideally the database should have its own package under @repo/packages/database
// however for simplicity and this project's specific scope its mocked very crudely
import type { House } from '@repo/validators/houses';
import data from './data.js';

interface FindManyOptions {
  limit?: number;
}

const houses = {
  findById: (id: string): House | undefined => {
    return data.houses.find((house) => house.id === id);
  },
  findUnique: (predicate: (house: House) => boolean): House | undefined => {
    return data.houses.find(predicate);
  },
  findMany: (
    predicate: (house: House) => boolean,
    options?: FindManyOptions,
  ): House[] => {
    const results: House[] = [];
    const limit = options?.limit;

    for (const house of data.houses) {
      if (predicate(house)) {
        results.push(house);
        if (limit !== undefined && results.length >= limit) {
          // Stop collecting items once the limit is reached
          break;
        }
      }
    }

    return results;
  },
  updateOne: (id: string, changes: Partial<House>): House | undefined => {
    const houseIndex = data.houses.findIndex((house: House) => house.id === id);

    if (houseIndex === -1) return undefined;

    const updatedHouse = {
      ...data.houses[houseIndex],
      ...changes,
    } as House;
    data.houses[houseIndex] = updatedHouse;

    return updatedHouse;
  },
  create: (newHouse: House): House => {
    data.houses.push(newHouse);

    return newHouse;
  },
  delete: (id: string): boolean => {
    const houseIndex = data.houses.findIndex((house: House) => house.id === id);
    if (houseIndex === -1) return false;

    data.houses.splice(houseIndex, 1);

    return true;
  },
  count: (): number => {
    return data.houses.length;
  },
};

export default {
  houses,
};
