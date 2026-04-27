'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/utils';

export const DesktopMenu = ({ items, className }) => {
  const pathname = usePathname();

  return (
    <nav className={cn('md:flex items-center gap-6', className)}>
      {items.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          className={cn('link', pathname === item.href ? 'active-link' : '')}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
};
