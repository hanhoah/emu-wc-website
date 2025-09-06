"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";

const currentYear = new Date().getFullYear();

export default function ClientFooter() {
  const locale = useLocale();
  
  let t;
  try {
    t = useTranslations('footer');
  } catch (error) {
    // Fallback if translations are not available
    return <SimpleFallbackFooter locale={locale} />;
  }

  return (
    <footer className="bg-gray-100 pt-12 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-primary-main mb-4">EMU WC</h3>
            <p className="text-gray-600 mb-4">
              {t('companyInfo')}
            </p>
            <div className="text-gray-600">
              <p>Email: info@emu-wc.com</p>
              <p>Phone: +86 18850581035</p>
              <p>Germany: +49 1629366271</p>
            </div>
          </div>
          
          {/* Products */}
          <div>
            <h4 className="font-bold mb-4">{t('products')}</h4>
            <ul className="space-y-2">
              <li>
                <Link href={`/${locale}/products/smart-cover`} className="text-gray-600 hover:text-primary-main">
                  {t('smartCover')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/products/smart-toilet`} className="text-gray-600 hover:text-primary-main">
                  {t('smartToilet')}
                </Link>
              </li>
            </ul>
          </div>
          
          {/* About EMU */}
          <div>
            <h4 className="font-bold mb-4">{t('aboutEmu')}</h4>
            <ul className="space-y-2">
              <li>
                <Link href={`/${locale}/about-us`} className="text-gray-600 hover:text-primary-main">
                  {t('ourCompany')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/terms-of-service`} className="text-gray-600 hover:text-primary-main">
                  {t('termsOfService')}
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h4 className="font-bold mb-4">{t('support')}</h4>
            <ul className="space-y-2">
              <li>
                <Link href={`/${locale}/blog`} className="text-gray-600 hover:text-primary-main">
                  Blog
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/contact`} className="text-gray-600 hover:text-primary-main">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/faq`} className="text-gray-600 hover:text-primary-main">
                  {t('faq')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/project`} className="text-gray-600 hover:text-primary-main">
                  {t('project')}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Footer */}
        <div className="border-t border-gray-200 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm">
            {t('copyright', { year: currentYear })}
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="https://www.instagram.com/emuwc/" className="text-gray-600 hover:text-primary-main">
              Instagram
            </Link>
            <Link href="https://www.youtube.com/@EMUWC" className="text-gray-600 hover:text-primary-main">
              YouTube
            </Link>
            <Link href="https://www.tiktok.com/@emu.wc" className="text-gray-600 hover:text-primary-main">
              TikTok
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Simple fallback footer if translations fail
function SimpleFallbackFooter({ locale }: { locale: string }) {
  return (
    <footer className="bg-gray-100 pt-12 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold text-primary-main mb-4">EMU WC</h3>
            <p className="text-gray-600 mb-4">
              Premium Bathroom Solutions since 2016.
            </p>
            <div className="text-gray-600">
              <p>Email: info@emu-wc.com</p>
              <p>Phone: +86 18850581035</p>
              <p>Germany: +49 1629366271</p>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Products</h4>
            <ul className="space-y-2">
              <li>
                <Link href={`/${locale}/products/smart-cover`} className="text-gray-600 hover:text-primary-main">
                  Smart Cover
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/products/smart-toilet`} className="text-gray-600 hover:text-primary-main">
                  Smart Toilet
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">About EMU</h4>
            <ul className="space-y-2">
              <li>
                <Link href={`/${locale}/about-us`} className="text-gray-600 hover:text-primary-main">
                  Our Company
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/terms-of-service`} className="text-gray-600 hover:text-primary-main">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <Link href={`/${locale}/blog`} className="text-gray-600 hover:text-primary-main">
                  Blog
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/contact`} className="text-gray-600 hover:text-primary-main">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/faq`} className="text-gray-600 hover:text-primary-main">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/project`} className="text-gray-600 hover:text-primary-main">
                  Project
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Xiamen EMU Intelligent Technology Co., Ltd. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="https://www.instagram.com/emuwc/" className="text-gray-600 hover:text-primary-main">
              Instagram
            </Link>
            <Link href="https://www.youtube.com/@EMUWC" className="text-gray-600 hover:text-primary-main">
              YouTube
            </Link>
            <Link href="https://www.tiktok.com/@emu.wc" className="text-gray-600 hover:text-primary-main">
              TikTok
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}