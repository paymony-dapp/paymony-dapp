import { prismaClient } from '../../utils/prismaClient';
import { createRouter } from '../createRouter';
import * as trpc from '@trpc/server';
import { z } from 'zod';

export const planRouter = createRouter()
  .query('findByLink', {
    input: z.object({
      accessUrl: z.string(),
    }),
    async resolve({ input: { accessUrl } }) {
      const plan = await prismaClient.plan.findFirst({
        where: {
          accessUrl,
        },
      });

      if (!plan) {
        throw new trpc.TRPCError({
          message: `Plan not found`,
          code: 'NOT_FOUND',
        });
      }

      return plan;
    },
  })
  .query('plans', {
    async resolve() {
      const plans = await prismaClient.plan.findMany();
      return plans;
    },
  });
