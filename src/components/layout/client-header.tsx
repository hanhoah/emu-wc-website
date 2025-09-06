"use client";

import Link from "next/link";
import ClientNavigation from "./client-navigation";
import LanguageSwitcher from "@/components/layout/language-switcher";
import { useLocale } from "next-intl";
import { defaultLocale } from "@/config/i18n";

export default function ClientHeader() {
  let locale;
  
  try {
    locale = useLocale();
  } catch (error) {
    // Fallback to default locale
    locale = defaultLocale;
  }

  return (
    <header className="bg-white shadow-sm">
      <div className="container-custom flex justify-between items-center py-4">
        <Link href={`/${locale}`} className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-primary-main">EMU WC</span>
        </Link>
        
        <div className="flex items-center space-x-4">
          <ClientNavigation />
          <div className="ml-4 border-l pl-4 border-gray-200">
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </header>
  );
}