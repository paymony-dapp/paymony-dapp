export const API_ROUTE = 'api/trpc';
export const API_URL = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/${API_ROUTE}`
  : `http://localhost:3000/${API_ROUTE}`;
