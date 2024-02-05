import { cn } from '@/lib/utils';
import Image from 'next/image';

type LogoProps = {
  className?: string;
};

const Logo = ({ className }: LogoProps) => {
  return (
    <Image
      src='/logo.png'
      className={cn('object-cover text-black', className)}
      width={180}
      height={160}
      alt='logo'
    />
  );
};

export default Logo;
