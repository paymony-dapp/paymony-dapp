import '../styles/index.css';
import type { AppProps } from 'next/app';
import { withTRPC } from '@trpc/next';
import { API_URL } from '../utils/config';
import { httpBatchLink } from '@trpc/client/links/httpBatchLink';
import App from 'next/app';
import { AppRouter } from '../server/routes/app.route';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
export default withTRPC<AppRouter>({
  config({ ctx }) {
    const url = API_URL;

    const links = [
      httpBatchLink({
        maxBatchSize: 10,
        url,
      }),
    ];

    return {
      queryClientConfig: {
        defaultOptions: {
          queries: {
            staleTime: 3600,
          },
        },
      },
      headers() {
        if (ctx?.req) {
          return {
            ...ctx.req.headers,
            'x-ssr': 1,
          };
        }
        return {};
      },
      links,
    };
  },
})(MyApp);
