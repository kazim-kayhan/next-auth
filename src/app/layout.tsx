import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], weight: ['500'] });

export const metadata: Metadata = {
  title: 'Next Auth V5',
  description: 'Generated by Kazim Kayhan',
};

export default function RootLayout({
  children,
}: Readonly<{ 
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={cn(
          inter.className,
          'bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary to-secondary'
        )}
      >
        {children}
      </body>
    </html>
  );
}
