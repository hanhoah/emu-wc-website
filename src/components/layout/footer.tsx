"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-100 pt-12 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <Link href="/" className="block mb-4">
              <Image 
                src="/images/emulogo2-460x103.png" 
                alt="EMU WC Logo" 
                width={150} 
                height={33} 
                className="h-auto"
              />
            </Link>
            <p className="text-gray-600 mb-4">
              Premium Bathroom & Toilet Solutions since 2016.
            </p>
            <div className="text-gray-600">
              <p>Email: info@emu-wc.com</p>
              <p>Phone: +86 18850581035</p>
              <p className="flex items-center">
                <a 
                  href="https://wa.me/491629366271" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-600 hover:text-primary-main"
                >
                  <Image 
                    src="/icons/whatsapp.svg" 
                    alt="WhatsApp" 
                    width={16} 
                    height={16} 
                    className="mr-1"
                  />
                  <span>WhatsApp: +49 1629366271</span>
                </a>
              </p>
              <p>Address: Zone A, 2/F, Building 1, Jiapin Industry Zone, No. 132 Guankou Middle Road, Jimei District, Xiamen, China</p>
            </div>
          </div>
          
          {/* Products */}
          <div>
            <h4 className="font-bold mb-4">Products</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/products/smart-cover" className="text-gray-600 hover:text-primary-main">
                  Smart Cover
                </Link>
              </li>
              <li>
                <Link href="/products/smart-toilet" className="text-gray-600 hover:text-primary-main">
                  Smart Toilet
                </Link>
              </li>
            </ul>
          </div>
          
          {/* About EMU */}
          <div>
            <h4 className="font-bold mb-4">About EMU</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about-us" className="text-gray-600 hover:text-primary-main">
                  Our Company
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-gray-600 hover:text-primary-main">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h4 className="font-bold mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/blog" className="text-gray-600 hover:text-primary-main">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-primary-main">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-600 hover:text-primary-main">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/project" className="text-gray-600 hover:text-primary-main">
                  Project
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Footer */}
        <div className="border-t border-gray-200 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm">
            © {currentYear} Xiamen EMU Intelligent Technology Co., Ltd. All rights reserved.
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