import type { Metadata } from 'next';
import { Nanum_Pen_Script } from 'next/font/google';
import './global.css';

const nanumPenScript = Nanum_Pen_Script({
  weight: ['400'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://is-showing-off.vercel.app'),
  title: {
    template: '%s | 꺼드럭 판별기',
    default: '꺼드럭 판별기',
  },
  description:
    '니가 얼마나 꺼드럭거리는지 AI가 팩트폭격 해준다. 쥰내 꺼드럭거리네.',
  keywords: ['꺼드럭', '판별기', 'AI', '팩트폭력', '침착맨', '일침'],
  authors: [{ name: 'Chan' }],
  openGraph: {
    title: '꺼드럭 판별기',
    description: '니가 얼마나 꺼드럭거리는지 AI가 팩트폭격 해준다.',
    url: 'https://is-showing-off.vercel.app',
    siteName: '꺼드럭 판별기',
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '꺼드럭 판별기',
    description: '니가 얼마나 꺼드럭거리는지 AI가 팩트폭격 해준다.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko' className={nanumPenScript.className}>
      <body>{children}</body>
    </html>
  );
}
