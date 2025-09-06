import '../globals.css';
import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import { locales } from '@/i18n';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { useTranslations } from 'next-intl';
import { notFound } from 'next/navigation';
import { IntlProvider } from '@/components/intl-provider';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
});

type Props = {
  params: { locale: string };
  children: React.ReactNode;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  // Validate that the locale is supported
  if (!locales.includes(locale)) {
    return notFound();
  }

  // Import translations for metadata
  const messages = (await import(`../../i18n/locales/${locale}.json`)).default;
  
  return {
    title: messages.site.title,
    description: messages.site.description,
  };
}

export default function LocaleLayout({ children, params: { locale } }: Props) {
  // Validate that the locale is supported
  if (!locales.includes(locale)) {
    return notFound();
  }

  // For Phase 1, always use English regardless of the URL
  const effectiveLocale = 'en';

  return (
    <html lang={effectiveLocale} className={`${inter.variable} ${playfair.variable}`}>
      <body className="flex flex-col min-h-screen">
        <IntlProvider locale={effectiveLocale}>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </IntlProvider>
      </body>
    </html>
  );
}