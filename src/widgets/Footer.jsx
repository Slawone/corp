'use client';

import Image from 'next/image';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { cn } from '@/utils';

export const Footer = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const iconSrc =
    mounted && resolvedTheme === 'dark'
      ? '/icons/max-dark.svg'
      : '/icons/max-light.svg';

  return (
    <footer className="padding-x">
      <div className="block-container padding-y md:flex">
        <div className="">
          <h4 className="mb-2.5 md:mb-5">Компания</h4>
          <ul className="flex flex-col gap-2.5">
            <li>
              <p>ООО «АРГО ТЕХНОЛОДЖИ ИСТ»</p>
            </li>
            <li>
              <p>ИНН: 5010052504</p>
            </li>
            <li>
              <p>ОКВЭД: 62.01</p>
            </li>
            <li>
              <p>
                Адрес: 111250, город Москва, <br />
                проезд Завода Серп и Молот, дом 6, корпус 1, <br />
                эт. 7, комн. 709
              </p>
            </li>
            <li>
              <p>
                <a href="tel:+74994300054" className="lg:pointer-events-none">
                  8 <span>(499)</span> 430 00 54
                </a>
              </p>
            </li>
            <li>
              <p>
                <a href="mailto:info@argo.tech">E-mail: info@argo.tech</a>
              </p>
            </li>
          </ul>
        </div>
        <div className="">
          <h4 className="mb-2.5 md:mb-5">Социальные сети</h4>
          <ul className="flex flex-col gap-2.5">
            <li>
              <p>
                <a
                  className="flex items-center gap-2"
                  href="https://max.ru/join/A9BI2uNQbcqGW2DuMSXPXK1BlxoEZkYoez2rA5vA84U"
                  target="_blank"
                >
                  <Image src={iconSrc} width={16} height={16} alt="MAX" />
                  Max
                </a>
              </p>
            </li>
            <li>
              <p>
                <a
                  href="https://companies.rbc.ru/id/1165007052583-argotech/"
                  target="_blank"
                >
                  РБК Компании
                </a>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
