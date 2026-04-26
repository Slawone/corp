import { Oswald } from 'next/font/local';
import './globals.css';

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["cyrillic"],
  src: [
    {
      path: './fonts/Oswald-Light.woff2',
      weight: '300',
    },
    {
      path: './fonts/Oswald-Regular.woff2',
      weight: '400',
    },
    {
      path: './fonts/Oswald-Medium.woff2',
      weight: '500',
    },
    {
      path: './fonts/Oswald-Bold.woff2',
      weight: '700',
    },
  ],
});

export const metadata = {
  title: 'Argo.tech | Больше, чем система хранения данных',
  description: 'ARGO.TECH с 2016 разрабатывает СХД и прикладные ИИ‑решения для бизнеса и госсектора. Все продукты компании в реестре и имеют поддержку до 10 лет.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru" className={`${oswald.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
