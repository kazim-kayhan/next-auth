import { Skeleton } from '../ui/skeleton'

export function CardSkeleton () {
  return (
    <div className='rounded-md border p-4'>
      <div className='flex w-full flex-row items-center gap-3'>
        <Skeleton className='size-10 rounded-full' />
        <Skeleton className='h-5 w-3/4' />
      </div>
      <div className='mt-4 flex flex-col gap-3'>
        <Skeleton className='h-4 w-[65%] ' />
      </div>
      <div className='mt-8 flex flex-col gap-3'>
        <Skeleton className='h-4 w-[30%] ' />
      </div>
    </div>
  )
}
