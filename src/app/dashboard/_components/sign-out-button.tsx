import { signOut } from '@/auth'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ExitIcon } from '@radix-ui/react-icons'

function SignOutButton () {
  return (
    <form
      action={async () => {
        'use server'
        await signOut()
      }}
    >
      <Button
        variant='link'
        type='submit'
        className={cn(
          'text-muted-foreground hover:bg-primary hover:text-foreground',
          'group flex w-full justify-start gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 hover:no-underline'
        )}
      >
        <ExitIcon
          className={cn(
            'rotate-180 text-muted-foreground group-hover:text-foreground',
            'size-5 shrink-0'
          )}
          aria-hidden='true'
        />
        Sign out
      </Button>
    </form>
  )
}

export default SignOutButton
