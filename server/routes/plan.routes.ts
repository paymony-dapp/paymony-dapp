import { PUBLIC_URL } from '../../utils/config';
import { prismaClient } from '../../utils/prismaClient';
import { createRouter } from '../createRouter';
import * as trpc from '@trpc/server';
import { getPlanSchema } from '../schemas/planSchema';
import { z } from 'zod';

export const planRouter = createRouter().query('findByLink', {
  input: String,
  async resolve({ input }) {
    const plan = await prismaClient.plan.findFirst({
      where: {
        accessUrl: input,
      },
    });

    if (!plan) {
      throw new trpc.TRPCError({
        message: 'Plan not found',
        code: 'NOT_FOUND',
      });
    }

    return plan;
  },
});
