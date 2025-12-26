import { GoogleGenAI } from '@google/genai';
const apiKey = process.env.GEMINI_API_KEY;
const ai = new GoogleGenAI({ apiKey });

export async function POST(request: Request) {
  const { prompt } = await request.json();
  const options = {
    model: 'gemini-2.5-flash',
    contents: prompt,
  };

  const countTokensResponse = await ai.models.countTokens(options);
  console.log('입력 토큰 :', countTokensResponse.totalTokens);

  const response = await ai.models.generateContent({
    ...options,
    config: {
      systemInstruction: `한국어로 대답하기`,
      responseMimeType: 'application/json',
    },
  });
  console.log('응답 토큰 :', response.usageMetadata);

  return new Response(response.text);
}
