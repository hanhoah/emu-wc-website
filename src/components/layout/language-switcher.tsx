"use client";

import { usePathname, useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';
import { locales } from '@/i18n';
import { useCallback, useState } from 'react';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const switchLocale = useCallback((newLocale: string) => {
    // If we're on a page with a locale prefix
    let pathWithoutLocale = pathname;
    
    // Remove any existing locale prefix from the pathname
    for (const loc of locales) {
      if (pathname.startsWith(`/${loc}/`) || pathname === `/${loc}`) {
        pathWithoutLocale = pathname.replace(`/${loc}`, '') || '/';
        break;
      }
    }
    
    // If no locale was found in the path and we're not at root,
    // we're probably on a non-localized path (defaultLocale)
    if (pathWithoutLocale === pathname && pathname !== '/') {
      pathWithoutLocale = pathname;
    }
    
    // Generate the new path with the new locale
    const newPath = newLocale === 'en' 
      ? pathWithoutLocale 
      : `/${newLocale}${pathWithoutLocale}`;
    
    console.log(`Switching from ${locale} to ${newLocale}, new path: ${newPath}`);
    
    // Close the dropdown
    setIsOpen(false);
    
    // Use window.location for hard navigation to ensure page reload with new locale
    window.location.href = newPath;
  }, [locale, pathname, router]);

  const getLanguageName = (localeCode: string) => {
    switch(localeCode) {
      case 'en': return 'English';
      case 'de': return 'Deutsch';
      case 'ru': return 'Русский';
      default: return localeCode;
    }
  };

  return (
    <div className="relative">
      <button 
        className="flex items-center text-gray-700 hover:text-primary-main"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{getLanguageName(locale)}</span>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className={`h-4 w-4 ml-1 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      {isOpen && (
        <div className="absolute right-0 mt-2 py-2 w-32 bg-white rounded-md shadow-lg z-10">
          {locales.map((l) => (
            <button
              key={l}
              onClick={() => switchLocale(l)}
              className={`block w-full text-left px-4 py-2 text-sm ${
                l === locale ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              {getLanguageName(l)}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}