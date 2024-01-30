import CardWrapper from './card-wrapper';

type Props = {};

const LoginForm = (props: Props) => {
  return (
    <CardWrapper
      headerLabel='Welcome Back'
      backButtonLabel="Don't have an account?"
      backButtonHref='/auth/register'
      showSocialButtons
    >
      LoginForm
    </CardWrapper>
  );
};

export default LoginForm;
