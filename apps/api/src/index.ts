import type {
  FastifyInstance,
  FastifyBaseLogger,
  RawReplyDefaultExpression,
  RawRequestDefaultExpression,
  RawServerDefault,
} from 'fastify';
import fastify from 'fastify';
import fastifyCompress from '@fastify/compress';
import fastifyHelmet from '@fastify/helmet';
import type { TypeBoxTypeProvider } from '@fastify/type-provider-typebox';
import rootRoutes from './routes/root.js';
import housesRoutes from './routes/houses.js';
import env from './lib/env.js';

export type FastifyTypebox = FastifyInstance<
  RawServerDefault,
  RawRequestDefaultExpression<RawServerDefault>,
  RawReplyDefaultExpression<RawServerDefault>,
  FastifyBaseLogger,
  TypeBoxTypeProvider
>;

const app = fastify({
  logger: true,
}).withTypeProvider<TypeBoxTypeProvider>();

await app.register(fastifyHelmet, {
  contentSecurityPolicy: false,
});

await app.register(fastifyCompress);

await app.register(rootRoutes);
await app.register(housesRoutes);

const start = async () => {
  try {
    await app.listen(
      {
        host: env.HOST,
        port: env.PORT,
      },
      () => {
        console.log(
          `fastify server is running on http://${env.HOST}:${env.PORT}/`,
        );
      },
    );
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();
