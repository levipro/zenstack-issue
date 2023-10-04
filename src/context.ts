import { inferAsyncReturnType } from "@trpc/server";
import { CreateFastifyContextOptions } from "@trpc/server/adapters/fastify";
import { withPresets } from "@zenstackhq/runtime";

import { prisma } from "./db";

export const createContext = ({ req, res }: CreateFastifyContextOptions) => {
  const user = { name: req.headers.username ?? "anonymous", id: 4 };

  return {
    req,
    res,
    user,
    prisma: withPresets(prisma, { user }),
  };
};

export type Context = inferAsyncReturnType<typeof createContext>;
