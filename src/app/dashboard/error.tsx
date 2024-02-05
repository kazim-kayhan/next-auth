'use client';

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Terminal } from 'lucide-react';
import { useEffect } from 'react';


export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Alert>
      <Terminal className='h-4 w-4' />
      <AlertTitle>Something went wrong!</AlertTitle>
      <AlertDescription className='py-4'>{error?.message}</AlertDescription>
      <Button className='mx-auto' onClick={() => reset()}>
        Try Again
      </Button>
    </Alert>
  );
}
