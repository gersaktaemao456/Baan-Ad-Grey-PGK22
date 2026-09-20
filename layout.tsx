import './globals.css';
import type { Metadata } from 'next';
import { Kanit } from 'next/font/google';

const kanit = Kanit({
  subsets: ['latin', 'thai'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-kanit',
});

export const metadata: Metadata = {
  title: 'Baan Ad Grey PGK — ครบ จบ ในที่เดียว',
  description: 'บริการบัญชีในเครื่องใช้ควบคู่ การตลาดสายเทา และทีมซัพพอร์ต 24 ชั่วโมง สำหรับคนทำงานยุคใหม่',
  openGraph: {
    images: [
      {
        url: 'https://bolt.new/static/og_default.png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: [
      {
        url: 'https://bolt.new/static/og_default.png',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th" className={`dark ${kanit.variable}`} suppressHydrationWarning>
      <body className={`${kanit.className} min-h-screen bg-background antialiased`}>{children}</body>
    </html>
  );
}
