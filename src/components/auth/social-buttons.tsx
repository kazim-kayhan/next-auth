'use client';

import { Button } from '@/components/ui/button';
import GithubIcon from './icons/github';
import GoogleIcon from './icons/google';

type Props = {};

const SocialButtons = (props: Props) => {
  return (
    <div className='flex items-center w-full gap-x-2'>
      <Button size='lg' variant='outline' className='w-full' onClick={() => {}}>
        <GoogleIcon className='size-5' />
      </Button>
      <Button size='lg' variant='outline' className='w-full' onClick={() => {}}>
        <GithubIcon className='size-5' />
      </Button>
    </div>
  );
};

export default SocialButtons;
