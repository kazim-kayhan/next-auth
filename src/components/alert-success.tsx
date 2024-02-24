import { cn } from '@/lib/utils';
import { CheckCircledIcon } from '@radix-ui/react-icons';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';

type Props = {
  message: string | undefined;
};

const AlertSuccess = ({ message }: Props) => {
  return (
    <Alert variant='default' className={cn(message ? 'block' : 'hidden')}>
      <CheckCircledIcon className='size-4' />
      <AlertTitle>Success!</AlertTitle>
      <AlertDescription>{message}</AlertDescription>
    </Alert>
  );
};

export default AlertSuccess;
