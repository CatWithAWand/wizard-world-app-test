import { Button } from '@repo/ui/button';
import { getBaseApiUrl } from '../utils/api';

const getTestResponse = async () => {
  const reqUrl = `${getBaseApiUrl()}/test`;
  const res = await fetch(reqUrl, { cache: 'no-cache' });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
};

const Page = async () => {
  const res = await getTestResponse();
  const data = JSON.stringify(res);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center space-y-8 p-24">
      <div>Hello world!</div>
      <div>
        From backend: <span>{data}</span>
      </div>
      <Button disabled>Button</Button>
    </main>
  );
};

export default Page;
