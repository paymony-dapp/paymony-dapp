import { z } from 'zod';
import { TimeInterval } from '../../utils/types';

export const createPlanSchema = z.object({
  amount: z.number().positive().min(0.1),
  billingCycle: z.nativeEnum(TimeInterval),
});
