import Link from 'next/link';

export default function NotFound() {
  return (
    <main className='grid min-h-full place-items-center bg-background px-6 py-24 sm:py-32 lg:px-8'>
      <div className='text-center'>
        <p className='text-base font-semibold text-primary'>404</p>
        <h1 className='mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-5xl'>
          Page not found
        </h1>
        <p className='mt-6 text-base leading-7 text-muted-foreground'>
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div className='mt-10 flex items-center justify-center gap-x-6'>
          <Link
            href='/admin'
            className='rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-foreground shadow-sm hover:text-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary'
          >
            Go back to Dashboard
          </Link>
        </div>
      </div>
    </main>
  );
}
