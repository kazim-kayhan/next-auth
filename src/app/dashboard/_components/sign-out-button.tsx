import { signOut } from '@/auth';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ExitIcon } from '@radix-ui/react-icons';

function SignOutButton() {
  return (
    <form
      action={async () => {
        'use server';
        await signOut();
      }}
    >
      <Button
        variant='link'
        type='submit'
        className={cn(
          'text-muted-foreground hover:text-foreground hover:bg-primary',
          'flex gap-x-3 w-full justify-start rounded-md p-2 text-sm leading-6 font-semibold hover:no-underline group'
        )}
      >
        <ExitIcon
          className={cn(
            'text-muted-foreground group-hover:text-foreground rotate-180',
            'size-5 shrink-0'
          )}
          aria-hidden='true'
        />
        Sign out
      </Button>
    </form>
  );
}

export default SignOutButton;
