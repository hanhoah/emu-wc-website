import { getRequestConfig } from 'next-intl/server';
import { locales } from './index';

export default getRequestConfig(async ({ locale: _locale }) => {
  // Get the actual locale (fixing the deprecated locale parameter warning)
  const locale = _locale || 'en';
  
  // Load messages for the current locale
  const messages = (await import(`./locales/${locale}.json`)).default;
  
  return {
    locale,
    messages,
    // You can add timeZone, formats, etc. here if needed
  };
});