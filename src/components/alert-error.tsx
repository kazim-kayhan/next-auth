import { cn } from '@/lib/utils';
import { ExclamationTriangleIcon } from '@radix-ui/react-icons';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';

type Props = {
  message: string | undefined;
};

const AlertError = ({ message }: Props) => {
  return (
    <Alert variant='destructive' className={cn(message ? 'block' : 'hidden')}>
      <ExclamationTriangleIcon className='size-4' />
      <AlertTitle>Woops!</AlertTitle>
      <AlertDescription>{message}</AlertDescription>
    </Alert>
  );
};

export default AlertError;
