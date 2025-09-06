"use client";

import { ReactNode, useEffect, useState } from "react";
import { NextIntlClientProvider } from "next-intl";

type IntlProviderProps = {
  locale: string;
  children: ReactNode;
};

export function IntlProvider({ locale, children }: IntlProviderProps) {
  const [messages, setMessages] = useState<Record<string, any> | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadMessages() {
      try {
        const localeMessages = (await import(`../i18n/locales/${locale}.json`)).default;
        setMessages(localeMessages);
      } catch (error) {
        console.error(`Failed to load messages for locale: ${locale}`, error);
      } finally {
        setLoading(false);
      }
    }

    loadMessages();
  }, [locale]);

  if (loading || !messages) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}