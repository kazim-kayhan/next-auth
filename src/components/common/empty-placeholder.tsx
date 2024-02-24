import * as React from 'react';

import { cn } from '@/lib/utils';
import { AlertTriangleIcon, CircleIcon, GoalIcon, ShieldAlertIcon } from 'lucide-react';

const Icons = {
  goal: GoalIcon,
  shieldSlash: ShieldAlertIcon,
  alert: AlertTriangleIcon,
  circleIcon: CircleIcon,
};

interface EmptyPlaceholderProps extends React.HTMLAttributes<HTMLDivElement> {
  childrenClassName?: string;
}

export function EmptyPlaceholder({
  className,
  childrenClassName,
  children,
  ...props
}: EmptyPlaceholderProps) {
  return (
    <div
      className={cn(
        'flex max-h-96 min-h-[250px] flex-col items-center justify-center overflow-y-auto rounded-md  p-8 text-center animate-in fade-in-50',
        className
      )}
      {...props}
    >
      <div
        className={cn(
          'mx-auto flex max-w-[420px] flex-col items-center justify-center text-center',
          childrenClassName
        )}
      >
        {children}
      </div>
    </div>
  );
}

interface EmptyPlaceholderIconProps extends Partial<React.SVGProps<SVGSVGElement>> {
  name: keyof typeof Icons;
}

EmptyPlaceholder.Icon = function EmptyPlaceHolderIcon({
  name,
  className,
  ...props
}: EmptyPlaceholderIconProps) {
  const myRef = React.useRef<SVGSVGElement>(null) as any;
  const Icon = Icons[name];

  if (!Icon) {
    return null;
  }

  return (
    <div className='flex size-20 items-center justify-center rounded-full bg-muted'>
      <Icon ref={myRef} className={cn('h-10 w-10', className)} {...props} />
    </div>
  );
};

interface EmptyPlaceholderTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}

EmptyPlaceholder.Title = function EmptyPlaceholderTitle({
  className,
  ...props
}: EmptyPlaceholderTitleProps) {
  return <h2 className={cn('mt-6 text-base font-semibold', className)} {...props} />;
};

interface EmptyPlaceholderDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {}

EmptyPlaceholder.Description = function EmptyPlaceholderDescription({
  className,
  ...props
}: EmptyPlaceholderDescriptionProps) {
  return (
    <p
      className={cn(
        'mb-8 mt-2 text-center text-sm font-normal leading-6 text-muted-foreground',
        className
      )}
      {...props}
    />
  );
};
