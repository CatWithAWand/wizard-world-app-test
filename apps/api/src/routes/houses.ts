import { housesSchema } from '@repo/validators/houses';
import type { FastifyTypebox } from '../index.js';

import db from '../database/db.js';

const housesRoutes = async (fastify: FastifyTypebox) => {
  fastify.get(
    '/houses',
    {
      schema: {
        response: {
          200: housesSchema,
        },
      },
    },
    async (_request, _reply) => {
      return db.houses.findMany(() => true);
    },
  );
};

export default housesRoutes;
