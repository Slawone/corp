'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { menuItems } from '@/data';
import { scrolls } from '@/utils';
import { DesktopMenu, Logo, MobileMenu, ThemeToggle } from '@/components';

export const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    handleScroll(); // инициализация
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
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
            className="button button-secondary hidden! md:flex!"
            onClick={() => scrolls.scrollToBottom()}
          >
            Контакты
          </button>
          <button
            className="md:hidden border-none"
            onClick={() => setOpen(!open)}
          >
            <Menu />
          </button>
          <ThemeToggle />
        </div>
        {/* contacts button */}
        {/* theme button */}
      </div>
      <MobileMenu items={menuItems} open={open} onClick={() => setOpen(!open)} />
    </header>
  );
};
