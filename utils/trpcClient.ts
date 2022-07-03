import { createReactQueryHooks } from '@trpc/react';
import { createTRPCClient } from '@trpc/client';
import { AppRouter } from '../server/routes/app.route';
import { API_URL } from './config';

export const trpcHookClient = createReactQueryHooks<AppRouter>();
export const trpcApiClient = createTRPCClient<AppRouter>({
  url: API_URL,
});
