import { createRouter } from '../createRouter';

export const appRouter = createRouter().query('health-check', {
  resolve: () => {
    return 'Running fine';
  },
});

export type AppRouter = typeof appRouter;
