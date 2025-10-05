import {auth} from '@/auth/setup';
import PAGES from '@/shared/config/pages.config';
import {NextResponse} from 'next/server';

export default auth(req => {
  if (!req.auth && req.nextUrl.pathname.startsWith('/app')) {
    const newUrl = new URL(PAGES.login, req.nextUrl.origin);
    return NextResponse.redirect(newUrl);
  }

  return NextResponse.next();
});

export const config = {
  matcher: ['/((?!api|_next|favicon.ico).*)'],
};
