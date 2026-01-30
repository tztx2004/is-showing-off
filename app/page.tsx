import Form from '@/features/Form';
import { Suspense } from 'react';

export default async function Home() {
  return (
    <main className='flex flex-col items-center justify-center min-h-screen bg-[#f3f4f6] p-4 text-[#111827]'>
      <div className='max-w-md w-full bg-white rounded-3xl shadow-2xl p-8 border-4 border-black transform transition-all hover:scale-[1.01]'>
        <header className='text-center mb-8'>
          <h1 className='text-6xl font-bold mb-2 tracking-tight drop-shadow-sm'>
            꺼드럭 판별기
          </h1>
          <p className='text-2xl text-gray-600 font-medium'>
            니가 얼마나 꺼드럭거리는지 알려줌
          </p>
        </header>

        <div className='bg-gray-50 rounded-2xl p-6 border-2 border-dashed border-gray-300'>
          <Suspense
            fallback={
              <div className='flex items-center justify-center py-10'>
                <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-black'></div>
              </div>
            }
          >
            <Form />
          </Suspense>
        </div>

        <footer className='mt-8 text-center text-gray-400 text-sm'>
          © 2026 꺼드럭 탐지 시스템
        </footer>
      </div>
    </main>
  );
}

export const dynamic = 'force-dynamic';
