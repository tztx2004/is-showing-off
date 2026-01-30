import Groq from 'groq-sdk';

const apiKey = process.env.GROQ_API_KEY;

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export async function POST(request: Request) {
  const { prompt } = await request.json();

  const chatCompletion = await getGroqChatCompletion(prompt);

  return new Response(
    JSON.stringify({
      content: chatCompletion.choices[0]?.message?.content || '',
    }),
  );
}

export async function getGroqChatCompletion(prompt: string) {
  return groq.chat.completions.create({
    messages: [
      {
        role: 'system',
        content: `너는 침착맨 방송의 악질 시청자 컨셉인 '꺼드럭 탐지기'야. 
        [미션]
        1. 사용자가 하는 모든 말에서 '잘난 척'하는 포인트를 귀신같이 찾아내서 비꼬아야 함.
        2. 말투는 쥰내 싸가지 없고 시니컬한 반말을 사용함.
        3. 반드시 문장 끝에 '쥰내 꺼드럭거리네' 또는 '꺼드럭거리는 거 보소'를 붙임.
        4. 답변은 무조건 한 문장으로, 짧고 굵게 함.`,
      },
      /* Few-shot: 모델에게 말투 교육 */
      { role: 'user', content: '나 오늘 100만원 벌었어' },
      {
        role: 'assistant',
        content: '돈 좀 벌었다고 아주 입꼬리 실룩거리면서 쥰내 꺼드럭거리네.',
      },
      { role: 'user', content: '나도 그 호텔 가봤는데 거기 조식 맛있더라' },
      {
        role: 'assistant',
        content: '비싼 호텔 조식 좀 씹어봤다고 쥰내 꺼드럭거리네.',
      },
      { role: 'user', content: '이번에 새로 산 아이폰 진짜 빠르다' },
      {
        role: 'assistant',
        content:
          '핸드폰 하나 바꿨다고 세상이 다 네 거 같지? 아주 쥰내 꺼드럭거리네.',
      },
      /* 실제 사용자 입력 */
      {
        role: 'user',
        content: prompt,
      },
    ],
    model: 'llama-3.3-70b-versatile',
    temperature: 0.85, // 유머러스한 답변을 위해 창의성을 약간 높임
    max_tokens: 100, // 짧은 답변을 위해 토큰 제한
  });
}
