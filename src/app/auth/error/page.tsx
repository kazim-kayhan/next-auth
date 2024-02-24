import CardWrapper from '@/components/auth/card-wrapper';
import { ExclamationTriangleIcon } from '@radix-ui/react-icons';

type Props = {};

const AuthErrorPage = (props: Props) => {
  return (
    <CardWrapper
      headerLabel='Oops! Something went wrong'
      backButtonHref='/auth/login'
      backButtonLabel='Back to Login'
    >
      <div className='flex size-full flex-col items-center justify-center'>
        <ExclamationTriangleIcon className='text-destructive' />
      </div>
    </CardWrapper>
  );
};

export default AuthErrorPage;
