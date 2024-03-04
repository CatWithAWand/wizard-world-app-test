import type { Static } from '@sinclair/typebox';
import { Type } from '@sinclair/typebox';

export const houseSchema = Type.Object({
  id: Type.String(),
  name: Type.String(),
  houseColours: Type.String(),
  founder: Type.String(),
  animal: Type.String(),
  element: Type.String(),
  ghost: Type.String(),
  commonRoom: Type.String(),
  heads: Type.Array(
    Type.Object({
      id: Type.String(),
      firstName: Type.String(),
      lastName: Type.String(),
    }),
  ),
  traits: Type.Array(
    Type.Object({
      id: Type.String(),
      name: Type.String(),
    }),
  ),
});

export const housesSchema = Type.Array(houseSchema);

// Static data types
export type House = Static<typeof houseSchema>;
export type Houses = Static<typeof housesSchema>;
