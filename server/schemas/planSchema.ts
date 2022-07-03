import { z } from 'zod';
import { TimeInterval } from '../../utils/types';

export const createPlanSchema = z.object({
  amount: z.number().positive().min(0.1),
  billingCycle: z.nativeEnum(TimeInterval),
  category: z.string().max(50, 'Category name is too long'),
  description: z.string(),
  isPublic: z.boolean().default(false),
  userWallet: z.string(),
});

export const getPlanSchema = createPlanSchema.extend({
  id: z.string(),
  active: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date(),
});
