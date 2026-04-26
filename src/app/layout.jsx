import { Oswald } from 'next/font/local';
import { ThemeProvider } from "next-themes";
import { cn } from '@/utils';
import { Header } from "@/widgets";
import './globals.css';

const oswald = Oswald({
  variable: '--font-oswald',
  subsets: ['cyrillic'],
  src: [
    {
      path: './_fonts/Oswald-Light.woff2',
      weight: '300',
    },
    {
      path: './_fonts/Oswald-Regular.woff2',
      weight: '400',
    },
    {
      path: './_fonts/Oswald-Medium.woff2',
      weight: '500',
    },
    {
      path: './_fonts/Oswald-Bold.woff2',
      weight: '700',
    },
  ],
});

export const metadata = {
  title: 'Argo.tech | Больше, чем система хранения данных',
  description:
    'ARGO.TECH с 2016 разрабатывает СХД и прикладные ИИ‑решения для бизнеса и госсектора. Все продукты компании в реестре и имеют поддержку до 10 лет.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru" className={cn(oswald.variable, "h-full antialiased")} suppressHydrationWarning>
      <body className="min-h-full flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        > 
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
