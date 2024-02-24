import { Loader } from 'lucide-react';

interface ContentLoadingProps {
  className?: string;
}

function ContentLoading({ className }: ContentLoadingProps) {
  return (
    <div
      className={`flex min-h-[350px] flex-col items-center justify-center rounded-md border border-none p-8 text-center animate-in fade-in-50 ${className}`}
    >
      <div className='flex flex-row items-center gap-2'>
        <Loader className='size-4 animate-spin' />
        <p className='text-sm'>Loading results ...</p>
      </div>
    </div>
  );
}

export default ContentLoading;
