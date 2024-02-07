'use client';

import { Button } from '@/components/ui/button';
import { DEFAULT_LOGIN_REDIRECT } from '@/routes';
import { signIn } from 'next-auth/react';
import GithubIcon from './icons/github';
import GoogleIcon from './icons/google';
type Props = {};

const SocialButtons = (props: Props) => {
  const onClick = (provider: 'github' | 'google') => {
    signIn(provider, { callbackUrl: DEFAULT_LOGIN_REDIRECT });
  };
  return (
    <div className='flex items-center w-full gap-x-2'>
      <Button size='lg' variant='outline' className='w-full' onClick={() => onClick('google')}>
        <GoogleIcon className='size-5' />
      </Button>
      <Button size='lg' variant='outline' className='w-full' onClick={() => onClick('github')}>
        <GithubIcon className='size-5' />
      </Button>
    </div>
  );
};

export default SocialButtons;
