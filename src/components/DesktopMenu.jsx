import Link from 'next/link';
import { cn } from '@/utils';

export const DesktopMenu = ({items, className}) => {
  return (
    <nav className={cn("md:flex items-center gap-6 transition-colors", className)}>
      {items.map((item) => (
        <Link key={item.label} href={item.href} className='link'>
          {item.label}
        </Link>
      ))}
    </nav>
  )
}
