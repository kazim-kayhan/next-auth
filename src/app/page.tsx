import LoginButton from '@/components/ui/auth/login-button';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Poppins } from 'next/font/google';

const poppins = Poppins({ subsets: ['latin'], weight: ['600'] });

export default function Home() {
  return (
    <main className='h-full flex flex-col justify-center items-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary to-secondary'>
      <div className='space-y-6 text-center'>
        <h1 className={cn('text-6xl font-bold text-foreground drop-shadow-md', poppins.className)}>
          🔐Next Auth V5
        </h1>
        <p className='text-2xl text-foreground'>Generated by Kazim Kayhan</p>
        <LoginButton>
          <Button variant='secondary' size='lg'>
            Sign in
          </Button>
        </LoginButton>
      </div>
    </main>
  );
}
