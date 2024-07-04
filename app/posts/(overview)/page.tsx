import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Post',
};

export default async function Page() {
  return (
    <>
      <h1 className="text-3xl font-bold">Posts Page</h1>
    </>
  );
}
