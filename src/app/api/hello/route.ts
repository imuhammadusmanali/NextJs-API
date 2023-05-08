import { limiter } from '../config/limiter';

export async function GET() {
  const remaining = await limiter.removeTokens(1);
  console.log('remaining', remaining);

  return new Response('Hello NextJs!');
}
