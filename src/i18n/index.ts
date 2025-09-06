import { getRequestConfig } from 'next-intl/server';
 
export const locales = ['en', 'de', 'ru'];
export const defaultLocale = 'en';

export default getRequestConfig(async ({ locale }) => {
  // Load messages for the current locale
  const messages = (await import(`./locales/${locale}.json`)).default;
  
  return {
    messages,
    // You can add timeZone, formats, etc. here if needed
  };
});