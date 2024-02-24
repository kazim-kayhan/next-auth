import { RefreshCcw } from 'lucide-react';
import { Button } from '../ui/button';
import { EmptyPlaceholder } from './empty-placeholder';

function EmptyResult({ refetch }: { refetch: any }) {
  return (
    <EmptyPlaceholder>
      <EmptyPlaceholder.Icon name='alert' />
      <EmptyPlaceholder.Title>No Result Found</EmptyPlaceholder.Title>
      <EmptyPlaceholder.Description>
        We could not find any result matching your query.
      </EmptyPlaceholder.Description>
      <Button variant='outline' onClick={() => refetch()}>
        <RefreshCcw className='mr-2 size-4' />
        Try Again
      </Button>
    </EmptyPlaceholder>
  );
}

export default EmptyResult;
