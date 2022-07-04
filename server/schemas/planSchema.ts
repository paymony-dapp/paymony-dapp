import { z } from 'zod';
import { PlanInterval } from '../../utils/types';

export const createPlanSchema = z.object({
  amount: z.number().positive().min(0.1),
  billingCycle: z.nativeEnum(PlanInterval),
  category: z.string().max(50, 'Category name is too long'),
  description: z.string(),
  isPublic: z.boolean().default(false),
  userWallet: z.string(),
  name: z.string(),
});

export const getPlanSchema = createPlanSchema.extend({
  id: z.string(),
  active: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const getMultiplePlansSchema = z.array(getPlanSchema);

export type createPlanType = z.TypeOf<typeof createPlanSchema>;
export type getPlanType = z.TypeOf<typeof getPlanSchema>;
export type getMultiplePlansType = getPlanType[];
