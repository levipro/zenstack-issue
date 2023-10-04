import { initTRPC } from "@trpc/server";
import { fastifyTRPCPlugin } from "@trpc/server/adapters/fastify";
import * as dotenv from "dotenv";
import fastify from "fastify";
import cors from "@fastify/cors";

import { createContext } from "./context";
import { createRouter } from "./server/routers/generated/routers";

dotenv.config();

const tr = initTRPC.context().create();
export const appRouter = createRouter(tr.router, tr.procedure);
export type AppRouter = typeof appRouter;

const server = fastify({
  maxParamLength: 5000,
});

const start = async () => {
  try {
    await server.register(fastifyTRPCPlugin, {
      prefix: "/trpc",
      trpcOptions: { router: appRouter, createContext },
    });
    await server.register(cors, {
      origin: true,
      credentials: true,
    });

    await server.listen({
      port: 3001,
      host: "0.0.0.0",
    });
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

start();
