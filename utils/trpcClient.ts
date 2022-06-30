import { createReactQueryHooks } from '@trpc/react';
import { AppRouter } from '../server/routes/app.route';

export const trpcClient = createReactQueryHooks<AppRouter>();
