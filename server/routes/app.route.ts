import { createRouter } from '../createRouter';

/**
 *  Main tprc router for the api interactions for the entire app
 *
 */
export const appRouter = createRouter().query('health-check', {
  resolve: () => {
    return 'Running fine';
  },
});

export type AppRouter = typeof appRouter;
