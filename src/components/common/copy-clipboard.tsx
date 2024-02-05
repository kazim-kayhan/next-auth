'use client';

import { cn } from '@/lib/utils';
import { CopyIcon } from 'lucide-react';
import { toast } from 'sonner';

interface CopyClipboardProps {
  value: string;
  className?: string;
}

function CopyClipboard({ value, className }: CopyClipboardProps) {
  const onCopy = () => {
    navigator.clipboard.writeText(value);
    toast.success('Value copied  🎉');
  };
  return (
    <button
      type='button'
      className={cn(
        'flex h-7 w-7 items-center justify-center rounded-full text-muted-foreground hover:bg-muted',
        className
      )}
      onClick={() => onCopy()}
    >
      <CopyIcon size={15} />
    </button>
  );
}

export default CopyClipboard;
