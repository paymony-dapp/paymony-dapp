import { createRouter } from '../createRouter';
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
  .merge('users.', userRouter);

export type AppRouter = typeof appRouter;
