import { cn } from '@/lib/utils'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ subsets: ['latin'], weight: ['600'] })

type Props = {
  label: string
}

const Header = ({ label }: Props) => {
  return (
    <div className='flex w-full flex-col items-center justify-center gap-y-4'>
      <h1
        className={cn('text-3xl font-semibold text-foreground drop-shadow-md', poppins.className)}
      >
        🔐Next Auth
      </h1>
      <p className='text-muted-foreground'>{label}</p>
    </div>
  )
}

export default Header
