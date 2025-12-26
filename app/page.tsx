import Form from '@/features/Form';
import { Suspense } from 'react';

export default async function Home() {
  return (
    <main>
      <h1>꺼드럭 판별기</h1>
      <p>나는 꺼드럭거릴까?</p>

      <Suspense fallback={<div>Loading...</div>}>
        <Form />
      </Suspense>

      <span></span>
    </main>
  );
}

export const dynamic = 'force-dynamic';
