import { Skeleton } from '../ui/skeleton';
import { CardSkeleton } from './card-skeleton';

const CardsSkeleton = () => {
  return (
    <div className='flex flex-col gap-6'>
      <Skeleton className='h-10 w-28' />
      <div className='grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3'>
        <CardSkeleton />
        <CardSkeleton />
      </div>
    </div>
  );
};

export default CardsSkeleton;
