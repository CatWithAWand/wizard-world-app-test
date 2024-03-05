import type { Static } from '@sinclair/typebox';
import type { FastifyTypebox } from '../index.js';
import { housesSchema, queryStringSchema } from '@repo/validators/houses';

import db from '../database/db.js';

const housesRoutes = async (fastify: FastifyTypebox) => {
  fastify.get(
    '/houses',
    {
      schema: {
        querystring: queryStringSchema,
        response: {
          200: housesSchema,
        },
      },
    },
    async (request, _reply) => {
      const { name } = request.query as Static<typeof queryStringSchema>;

      if (name) {
        return db.houses.findMany((house) =>
          house.name.toLowerCase().includes(name.toLowerCase()),
        );
      }

      return db.houses.findMany(() => true);
    },
  );
};

export default housesRoutes;
