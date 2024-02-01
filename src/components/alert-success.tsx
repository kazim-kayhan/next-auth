import { CheckCircledIcon } from '@radix-ui/react-icons';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';
import { cn } from '@/lib/utils';

type Props = {
  message: string | undefined;
};

const AlertSuccess = ({ message }: Props) => {
  return (
    <Alert variant='default' className={cn(message ? 'block' : 'hidden')}>
      <CheckCircledIcon className='h-4 w-4' />
      <AlertTitle>WOW!</AlertTitle>
      <AlertDescription>{message}</AlertDescription>
    </Alert>
  );
};

export default AlertSuccess;
