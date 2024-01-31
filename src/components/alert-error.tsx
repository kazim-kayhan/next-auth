import { ExclamationTriangleIcon } from '@radix-ui/react-icons';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';

type Props = {
  message: string;
};

const AlertError = ({ message }: Props) => {
  return (
    <Alert variant='destructive'>
      <ExclamationTriangleIcon className='h-4 w-4' />
      <AlertTitle>Woops!</AlertTitle>
      <AlertDescription>{message}</AlertDescription>
    </Alert>
  );
};

export default AlertError;
