'use client';

import Link from 'next/link';
import { menuItems } from '@/data';
import { scrolls } from '@/utils';
import { DesktopMenu, Logo, ThemeToggle } from '@/components';

export const Header = () => {
  return (
    <header className="padding-x sticky top-0 z-50 h-15 md:h-20 w-full">
      <div className="h-full block-container flex items-center gap-10">
        <Link href={'/'}>
          <Logo className={'w-30 h-auto fill-foreground'} />
        </Link>
        {/* menu */}
        <DesktopMenu items={menuItems} className={'hidden'} />
        <div className="ml-auto flex items-center gap-2">
          <button
            className="button button-secondary"
            onClick={() => scrolls.scrollToBottom()}
          >
            Контакты
          </button>
          <ThemeToggle />
        </div>
        {/* contacts button */}
        {/* theme button */}
      </div>
    </header>
  );
};
