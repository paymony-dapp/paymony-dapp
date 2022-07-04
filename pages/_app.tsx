import '../styles/index.css';
import type { AppProps } from 'next/app';
import { withTRPC } from '@trpc/next';
import { API_URL } from '../utils/config';
import { httpLink } from '@trpc/client/links/httpLink';
import App from 'next/app';
import { AppRouter } from '../server/routes/app.route';
import superjson from 'superjson';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
export default withTRPC<AppRouter>({
  config({ ctx }) {
    const url = API_URL;

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
      transformer: superjson,
      links: [
        httpLink({
          url,
        }),
      ],
    };
  },
})(MyApp);
