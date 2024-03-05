import { Type } from '@sinclair/typebox';
import type { FastifyTypebox } from '../index.js';

const rootRoutes = async (fastify: FastifyTypebox) => {
  fastify.get(
    '/',
    {
      schema: {
        response: {
          200: Type.Object({
            api: Type.String(),
            version: Type.Number(),
          }),
        },
      },
    },
    async (_request, _reply) => {
      return { api: 'wizard-world-app-api', version: 1 };
    },
  );
};

export default rootRoutes;
