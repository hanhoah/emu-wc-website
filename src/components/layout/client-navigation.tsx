"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";

export default function ClientNavigation() {
  const t = useTranslations('navigation');
  const locale = useLocale();
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Get navigation items or use hardcoded fallbacks
  const getNavigationItems = () => {
    try {
      return [
        { label: t('home'), path: `/${locale}` },
        { 
          label: t('products'),
          path: `/${locale}/products`,
          children: [
            { label: t('smartCover'), path: `/${locale}/products/smart-cover` },
            { label: t('smartToilet'), path: `/${locale}/products/smart-toilet` },
          ],
        },
        { label: t('aboutUs'), path: `/${locale}/about-us` },
        { label: t('blog'), path: `/${locale}/blog` },
        { label: t('contact'), path: `/${locale}/contact` },
      ];
    } catch (error) {
      // Fallback to English if translations fail
      return [
        { label: "Home", path: `/${locale}` },
        { 
          label: "Products",
          path: `/${locale}/products`,
          children: [
            { label: "Smart Cover", path: `/${locale}/products/smart-cover` },
            { label: "Smart Toilet", path: `/${locale}/products/smart-toilet` },
          ],
        },
        { label: "About Us", path: `/${locale}/about-us` },
        { label: "Blog", path: `/${locale}/blog` },
        { label: "Contact", path: `/${locale}/contact` },
      ];
    }
  };

  const navigationItems = getNavigationItems();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="flex items-center">
      {/* Desktop Navigation */}
      <ul className="hidden md:flex space-x-8">
        {navigationItems.map((item) => (
          <li key={item.path} className="relative group">
            <Link 
              href={item.path}
              className={`text-gray-700 hover:text-primary-main transition-colors ${
                pathname === item.path ? "text-primary-main font-medium" : ""
              }`}
            >
              {item.label}
            </Link>
            
            {/* Dropdown for items with children */}
            {item.children && (
              <ul className="absolute left-0 mt-2 w-48 bg-white shadow-md rounded-md py-2 z-10 hidden group-hover:block">
                {item.children.map((child) => (
                  <li key={child.path}>
                    <Link 
                      href={child.path}
                      className={`block px-4 py-2 text-gray-700 hover:bg-primary-main/10 hover:text-primary-main ${
                        pathname === child.path ? "bg-primary-main/10 text-primary-main" : ""
                      }`}
                    >
                      {child.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
      
      {/* Mobile Menu Button */}
      <button 
        onClick={toggleMobileMenu}
        className="md:hidden text-gray-700 hover:text-primary-main"
        aria-label="Toggle mobile menu"
      >
        {isMobileMenuOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <Menu className="h-6 w-6" />
        )}
      </button>
      
      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white shadow-md py-4 md:hidden z-20">
          <ul className="flex flex-col space-y-4 px-6">
            {navigationItems.map((item) => (
              <li key={item.path}>
                <Link 
                  href={item.path}
                  className={`block text-gray-700 hover:text-primary-main ${
                    pathname === item.path ? "text-primary-main font-medium" : ""
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
                
                {/* Children items in mobile view */}
                {item.children && (
                  <ul className="ml-4 mt-2 space-y-2">
                    {item.children.map((child) => (
                      <li key={child.path}>
                        <Link 
                          href={child.path}
                          className={`block text-gray-600 hover:text-primary-main ${
                            pathname === child.path ? "text-primary-main" : ""
                          }`}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}