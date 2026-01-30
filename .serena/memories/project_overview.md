# Project Overview
"꺼드럭 판별기" (Ggeodeureok Detector) is a playful Next.js application that evaluates user inputs to determine if they are "showing off" (꺼드럭거리다), using a cynical and sarcastic AI persona inspired by "Chimchakman" (Calmdownman) stream viewers.

# Tech Stack
- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **AI**: Groq SDK (Llama 3.3 70B)
- **Package Manager**: pnpm

# Codebase Structure
- `app/`: Next.js App Router files
  - `api/getGroq/route.ts`: API endpoint for AI responses
- `features/`: Reusable components (e.g., `Form.tsx`)
- `public/`: Static assets
- `global.css`: Tailwind and reset styles

# Styles & Conventions
- Use Functional Components with TypeScript
- Tailwind CSS for styling
- Ko-kr (Korean) as the primary language
- Font: Nanum Pen Script
