import type { Metadata } from 'next';
import { Nanum_Pen_Script } from 'next/font/google';
import './global.css';

const nanumPenScript = Nanum_Pen_Script({
  weight: ['400'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: '꺼드럭 판별기',
  description: '쥰내 꺼드럭거리네',
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
