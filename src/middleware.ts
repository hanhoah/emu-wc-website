import { NextRequest, NextResponse } from 'next/server';
import { defaultLocale } from './i18n';

// For phase 1, we'll force all traffic to English
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // If the path is the root, redirect to English
  if (pathname === '/') {
    return NextResponse.redirect(new URL('/en', request.url));
  }
  
  // If the request is for a non-English locale, redirect to English
  if (pathname.startsWith('/de') || pathname.startsWith('/ru')) {
    // Remove the locale prefix
    const newPath = pathname.replace(/^\/(de|ru)/, '') || '/';
    return NextResponse.redirect(new URL(`/en${newPath}`, request.url));
  }
  
  // Make sure all requests that aren't to a locale path go to English
  if (!pathname.startsWith('/en') && 
      !pathname.startsWith('/de') && 
      !pathname.startsWith('/ru') && 
      !pathname.startsWith('/api') && 
      !pathname.startsWith('/_next') && 
      !pathname.includes('.')) {
    return NextResponse.redirect(new URL(`/en${pathname}`, request.url));
  }
  
  return NextResponse.next();
}

export const config = {
  // Match all routes except static files and API routes
  matcher: ['/((?!api|_next|.*\\..*).*)']
};