import { CheckCircledIcon } from '@radix-ui/react-icons';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';

type Props = {
  message: string;
};

const AlertSuccess = ({ message }: Props) => {
  return (
    <Alert variant='default'>
      <CheckCircledIcon className='h-4 w-4' />
      <AlertTitle>WOW!</AlertTitle>
      <AlertDescription>{message}</AlertDescription>
    </Alert>
  );
};

export default AlertSuccess;
