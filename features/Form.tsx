export default function Form() {
  return (
    <form
      action={async (formData) => {
        'use server';
        const prompt = formData.get('prompt');
        console.log('formData', prompt);
        const response = await fetch('http://localhost:3000/api/getGemini', {
          method: 'POST',
          body: JSON.stringify({ prompt }),
        });
        const data = await response.text();
        console.log(data);
      }}
    >
      <input name='prompt' type='text' placeholder='꺼드럭 거려보소' />
      <button type='submit'>꺼드럭 거리기</button>
    </form>
  );
}
