import { Type } from '@sinclair/typebox';
import type { FastifyTypebox } from '../index.js';

const testRoutes = async (fastify: FastifyTypebox) => {
  fastify.get(
    '/test',
    {
      schema: {
        response: {
          200: Type.Object({
            hello: Type.String(),
          }),
        },
      },
    },
    async (_request, _reply) => {
      return { hello: 'world' };
    },
  );
};

export default testRoutes;
