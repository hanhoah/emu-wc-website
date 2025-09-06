import { NextRequest, NextResponse } from 'next/server';

// Simplified middleware - no locale redirects since we removed [locale] structure
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // If someone tries to access /en paths, redirect to root paths
  if (pathname.startsWith('/en')) {
    const newPath = pathname.replace(/^\/en/, '') || '/';
    return NextResponse.redirect(new URL(newPath, request.url));
  }
  
  // If someone tries to access /de or /ru paths, redirect to root paths  
  if (pathname.startsWith('/de') || pathname.startsWith('/ru')) {
    const newPath = pathname.replace(/^\/(de|ru)/, '') || '/';
    return NextResponse.redirect(new URL(newPath, request.url));
  }
  
  return NextResponse.next();
}

export const config = {
  // Match all routes except static files and API routes
  matcher: ['/((?!api|_next|.*\\..*).*)']
};