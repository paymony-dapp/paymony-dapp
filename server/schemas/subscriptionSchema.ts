import { z } from 'zod';
import { generateAvatar } from '../../utils/generateAvatar';
import { TimeInterval } from '../../utils/types';

// Validates payload for creating a subscription
export const createSubscriptionSchema = z.object({
  title: z.string().max(30, 'Title is too long'),
  amount: z.number().positive('Amount cannot be negative'),
  signingAddress: z.string(),
  receivingAddress: z.string(), 
  hex: z.string(),
  billingCycle: z.nativeEnum(TimeInterval),
  imageUrl: z.string().url('Invalid image url').default(generateAvatar()),
  category: z.string().default('Subscription'),
  remindMe: z.boolean().default(false),
  subscriberAddress: z.string(),
});

export const getSubscriptionSchema = z.object({
  id: z.string(),
  signingAddress: z.string(),
  receivingAddress: z.string(),
  billingCycle: z.nativeEnum(TimeInterval),
  imageUrl: z.string(),
  category: z.string(),
  remindMe: z.boolean(),
  active: z.boolean(),
  txHash: z.string(),
});

export const getMultipleSubscriptionsSchema = z.array(getSubscriptionSchema);

export type CreateSubscriptionType = z.infer<typeof createSubscriptionSchema>;
export type GetSubscriptionType = z.infer<typeof getSubscriptionSchema>;
export type GetMultipleSubscriptionType = z.infer<
  typeof getMultipleSubscriptionsSchema
>;
