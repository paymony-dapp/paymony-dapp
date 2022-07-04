import { createRouter } from '../createRouter';
import { createSubscriptionSchema } from '../schemas/subscriptionSchema';
import { subscriptionService } from '../services/subscription';

export const subscriptionRouter = createRouter()
  .mutation('create', {
    input: createSubscriptionSchema,
    async resolve({ input }) {
      await subscriptionService.createSubscription(input);
    },
  })
  .query('detail', {
    input: String,
    async resolve({ input: subId }) {
      const sub = await subscriptionService.getSubcription(subId);
      return sub;
    },
  })
  .query('mySubs', {
    input: String,
    async resolve({ input: address }) {
      const subs = await subscriptionService.getWalletSubscriptions(address);
      return subs;
    },
  });
