import type { Metadata } from 'next';
import { Noto_Sans_KR } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';

const noto_sans_kr = Noto_Sans_KR({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Tistory PS Helper',
  description: 'Tistory PS Helper',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(noto_sans_kr.className, ' text-slate-900')}>
        {children}
      </body>
    </html>
  );
}
