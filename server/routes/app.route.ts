import { createRouter } from '../createRouter';
import { planRouter } from './plan.routes';
import { subscriptionRouter } from './sub.routes';
import { userRouter } from './user.routes';

/**
 *  Main tprc router for the api interactions for the entire app
 *
 */
export const appRouter = createRouter()
  .query('health-check', {
    resolve: () => {
      return 'Running fine';
    },
  })
  .merge('users.', userRouter)
  .merge('subscriptions.', subscriptionRouter)
  .merge('plans.', planRouter);

export type AppRouter = typeof appRouter;
