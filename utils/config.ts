export const PUBLIC_URL = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : 'http://localhost:3000';

export const API_ROUTE = 'api/trpc';
export const API_URL = `${PUBLIC_URL}/${API_ROUTE}`;

export const TURUNIT = 10000000000;
