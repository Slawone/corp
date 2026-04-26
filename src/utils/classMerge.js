import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cn = (...inputs) => {
  const classNames = twMerge(clsx(...inputs));
  return classNames || undefined;
};
