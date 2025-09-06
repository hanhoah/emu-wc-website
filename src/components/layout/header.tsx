"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import LanguageSwitcher from './language-switcher';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Temporary hard-coded navigation until we fix the useTranslations hook
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (path: string) => {
    if (activeDropdown === path) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(path);
    }
  };
  
  const navigationItems = [
    { label: "Home", path: "/" },
    { 
      label: "Products",
      path: "/products",
      children: [
        { label: "Smart Cover", path: "/products/smart-cover" },
        { label: "Smart Toilet", path: "/products/smart-toilet" },
      ],
    },
    { label: "About Us", path: "/about-us" },
    { label: "Blog", path: "/blog" },
    { label: "Contact", path: "/contact" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="container-custom flex justify-between items-center py-4">
        <Link href="/" className="flex items-center">
          <Image 
            src="/images/emulogo2-460x103.png" 
            alt="EMU WC Logo" 
            width={184} 
            height={41} 
            priority
            className="h-auto"
          />
        </Link>
        
        <nav className="flex items-center">
          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-8">
            {navigationItems.map((item) => (
              <li key={item.path} className="relative group">
                <div className="flex items-center cursor-pointer" onClick={() => item.children ? toggleDropdown(item.path) : null}>
                  <Link 
                    href={item.path}
                    className="text-gray-700 hover:text-primary-main transition-colors"
                    onClick={(e) => item.children && e.preventDefault()}
                  >
                    {item.label}
                  </Link>
                  
                  {item.children && (
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className={`h-4 w-4 ml-1 transition-transform ${activeDropdown === item.path ? 'rotate-180' : ''}`}
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleDropdown(item.path);
                      }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </div>
                
                {/* Dropdown for items with children */}
                {item.children && activeDropdown === item.path && (
                  <ul className="absolute left-0 mt-2 w-48 bg-white shadow-md rounded-md py-2 z-10">
                    {item.children.map((child) => (
                      <li key={child.path}>
                        <Link 
                          href={child.path}
                          className="block px-4 py-2 text-gray-700 hover:bg-primary-main/10 hover:text-primary-main"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            {/* Language switcher removed for Phase 1 */}
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
                      className="block text-gray-700 hover:text-primary-main"
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
                              className="block text-gray-600 hover:text-primary-main"
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
                {/* Language switcher removed for Phase 1 */}
              </ul>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}