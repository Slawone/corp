import { cn } from '@/utils';

export const Badge = ({ text, className }) => {
  return (
    <p
      className={cn(
        'text-accent uppercase border rounded-full px-4 py-0.5 md:px-4 md:py-1 lg:px-5',
        className
      )}
    >
      {text}
    </p>
  );
};
