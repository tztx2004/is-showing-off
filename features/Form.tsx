'use client';

import { useState } from 'react';

export default function Form() {
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  return (
    <div className='flex flex-col gap-6'>
      <form
        action={async (formData) => {
          setLoading(true);
          try {
            const prompt = formData.get('prompt');
            const response = await fetch('/api/getGroq', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ prompt }),
            });
            const data = await response.json();
            setResult(data.content);
          } catch (error) {
            console.error(error);
            setResult('에러 났다. 꺼드럭거리지 말고 다시 해라.');
          } finally {
            setLoading(false);
          }
        }}
        className='flex flex-col gap-3'
      >
        <input
          name='prompt'
          type='text'
          placeholder='꺼드럭 거려보소'
          className='w-full px-4 py-3 text-2xl border-2 border-black rounded-xl focus:outline-none focus:ring-2 focus:ring-black transition-all bg-white'
          required
        />
        <button
          type='submit'
          disabled={loading}
          className='w-full py-3 bg-black text-white text-2xl font-bold rounded-xl hover:bg-gray-800 active:transform active:scale-95 transition-all disabled:bg-gray-400'
        >
          {loading ? '탐지 중...' : '판별 시작'}
        </button>
      </form>

      {result && (
        <div className='mt-4 p-5 bg-yellow-100 border-2 border-yellow-400 rounded-xl animate-bounce-short'>
          <p className='text-3xl text-center break-keep leading-tight'>
            "{result}"
          </p>
        </div>
      )}
    </div>
  );
}
