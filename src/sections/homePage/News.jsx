'use client';

import { Badge } from '@/components';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export const News = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const iconSrc =
    mounted && resolvedTheme === 'dark'
      ? '/icons/max-light.svg'
      : '/icons/max-dark.svg';

  return (
    <section className="padding-x">
      <div className="block-container padding-y flex items-center justify-center flex-wrap gap-4">
        <Badge text={'New'} />
        <p className="">Мы обновляем сайт. Следите за новостями: </p>
        <a
          href="https://max.ru/join/ A9BI2uNQbcqGW2DuMSXPXK1BlxoEZkYoez2rA5vA84U"
          target="_blank"
          className="button button-primary"
        >
          <Image src={iconSrc} width={16} height={16} alt="MAX" />
          <span>Max</span>
        </a>
      </div>
    </section>
  );
};
