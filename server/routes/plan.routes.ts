import { prismaClient } from '../../utils/prismaClient';
import { createRouter } from '../createRouter';
import * as trpc from '@trpc/server';
import { z } from 'zod';
import { PlanService } from '../services/plans';
import { createPlanSchema } from '../schemas/planSchema';

const planService = new PlanService();

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
      const plans = await planService.getAllPlans();
      return plans;
    },
  })
  .query('create', {
    input: createPlanSchema,
    async resolve({ input }) {
      const planLink = await planService.createPlan(input);
      return planLink;
    },
  })
  .mutation('toggle', {
    input: String,
    async resolve({ input: planId }) {
      const toggleSuccess = await planService.togglePlanActivation(planId);
      if (!toggleSuccess) {
        throw new trpc.TRPCError({
          code: 'NOT_FOUND',
          message: 'Plan does not exist',
        });
      }
    },
  })
  .query('detail', {
    input: String,
    async resolve({ input: planId }) {
      const plan = await planService.getPlanById(planId);
      if (!plan) {
        throw new trpc.TRPCError({
          code: 'NOT_FOUND',
          message: `Plan with id ${planId} not found`,
        });
      }
    },
  });
