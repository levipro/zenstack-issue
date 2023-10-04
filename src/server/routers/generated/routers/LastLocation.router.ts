/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, type ProcReturns, type PrismaClient, db } from '.';
import $Schema from '@zenstackhq/runtime/zod/input';
import { checkRead, checkMutate } from '../helper';

export default function createRouter<Router extends RouterFactory<BaseConfig>, Proc extends ProcBuilder<BaseConfig>>(
    router: Router,
    procedure: Proc,
) {
    return router({
        aggregate: procedure
            .input($Schema.LastLocationInputSchema.aggregate)
            .query(({ ctx, input }) => checkRead(db(ctx).lastLocation.aggregate(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.LastLocationInputSchema)['aggregate'],
            ReturnType<PrismaClient['lastLocation']['aggregate']>
        >,

        createMany: procedure
            .input($Schema.LastLocationInputSchema.createMany)
            .mutation(async ({ ctx, input }) =>
                checkMutate(db(ctx).lastLocation.createMany(input as any)),
            ) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.LastLocationInputSchema)['createMany'],
            ReturnType<PrismaClient['lastLocation']['createMany']>
        >,

        create: procedure
            .input($Schema.LastLocationInputSchema.create)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).lastLocation.create(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.LastLocationInputSchema)['create'],
            ReturnType<PrismaClient['lastLocation']['create']>
        >,

        deleteMany: procedure
            .input($Schema.LastLocationInputSchema.deleteMany)
            .mutation(async ({ ctx, input }) =>
                checkMutate(db(ctx).lastLocation.deleteMany(input as any)),
            ) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.LastLocationInputSchema)['deleteMany'],
            ReturnType<PrismaClient['lastLocation']['deleteMany']>
        >,

        delete: procedure
            .input($Schema.LastLocationInputSchema.delete)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).lastLocation.delete(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.LastLocationInputSchema)['delete'],
            ReturnType<PrismaClient['lastLocation']['delete']>
        >,

        findFirst: procedure
            .input($Schema.LastLocationInputSchema.findFirst)
            .query(({ ctx, input }) => checkRead(db(ctx).lastLocation.findFirst(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.LastLocationInputSchema)['findFirst'],
            ReturnType<PrismaClient['lastLocation']['findFirst']>
        >,

        findFirstOrThrow: procedure
            .input($Schema.LastLocationInputSchema.findFirst)
            .query(({ ctx, input }) => checkRead(db(ctx).lastLocation.findFirstOrThrow(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.LastLocationInputSchema)['findFirst'],
            ReturnType<PrismaClient['lastLocation']['findFirstOrThrow']>
        >,

        findMany: procedure
            .input($Schema.LastLocationInputSchema.findMany)
            .query(({ ctx, input }) => checkRead(db(ctx).lastLocation.findMany(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.LastLocationInputSchema)['findMany'],
            ReturnType<PrismaClient['lastLocation']['findMany']>
        >,

        findUnique: procedure
            .input($Schema.LastLocationInputSchema.findUnique)
            .query(({ ctx, input }) => checkRead(db(ctx).lastLocation.findUnique(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.LastLocationInputSchema)['findUnique'],
            ReturnType<PrismaClient['lastLocation']['findUnique']>
        >,

        findUniqueOrThrow: procedure
            .input($Schema.LastLocationInputSchema.findUnique)
            .query(({ ctx, input }) => checkRead(db(ctx).lastLocation.findUniqueOrThrow(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.LastLocationInputSchema)['findUnique'],
            ReturnType<PrismaClient['lastLocation']['findUniqueOrThrow']>
        >,

        groupBy: procedure
            .input($Schema.LastLocationInputSchema.groupBy)
            .query(({ ctx, input }) => checkRead(db(ctx).lastLocation.groupBy(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.LastLocationInputSchema)['groupBy'],
            ReturnType<PrismaClient['lastLocation']['groupBy']>
        >,

        updateMany: procedure
            .input($Schema.LastLocationInputSchema.updateMany)
            .mutation(async ({ ctx, input }) =>
                checkMutate(db(ctx).lastLocation.updateMany(input as any)),
            ) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.LastLocationInputSchema)['updateMany'],
            ReturnType<PrismaClient['lastLocation']['updateMany']>
        >,

        update: procedure
            .input($Schema.LastLocationInputSchema.update)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).lastLocation.update(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.LastLocationInputSchema)['update'],
            ReturnType<PrismaClient['lastLocation']['update']>
        >,

        upsert: procedure
            .input($Schema.LastLocationInputSchema.upsert)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).lastLocation.upsert(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.LastLocationInputSchema)['upsert'],
            ReturnType<PrismaClient['lastLocation']['upsert']>
        >,

        count: procedure
            .input($Schema.LastLocationInputSchema.count)
            .query(({ ctx, input }) => checkRead(db(ctx).lastLocation.count(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.LastLocationInputSchema)['count'],
            ReturnType<PrismaClient['lastLocation']['count']>
        >,
    });
}
