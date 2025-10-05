'use client';

import CLink from '@/components/CLink';
import {Button} from '@/components/ui/Button';
import PAGES from '@/shared/config/pages.config';
import locales from '@/shared/locales';
import {LogIn, LogOut, SunMoon} from 'lucide-react';
import {signOut, useSession} from 'next-auth/react';
import {useTheme} from 'next-themes';
import {useState} from 'react';

export default function Header() {
  const session = useSession();
  const {theme, setTheme} = useTheme();

  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleLogout = async () => {
    if (isLoggingOut) return;

    setIsLoggingOut(true);
    await signOut();
  };

  const handleToggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <header className="sticky top-0 z-10 w-full border-b bg-background">
      <div className="container flex h-14 items-center justify-between gap-2">
        <CLink
          className="font-bold"
          href={PAGES.main}
        >
          Todo App
        </CLink>

        <nav className="flex gap-2">
          <Button
            size="icon"
            variant="outline"
            onClick={handleToggleTheme}
          >
            <SunMoon className="size-4 aspect-square flex-shrink-0" />
          </Button>

          {session.status === 'authenticated' ? (
            <Button
              variant="outline"
              onClick={handleLogout}
              loading={isLoggingOut}
            >
              <LogOut className="size-4 aspect-square flex-shrink-0" />
              <span>{locales.common.logout}</span>
            </Button>
          ) : (
            <Button
              as={CLink}
              href={PAGES.login}
            >
              <LogIn className="size-4 aspect-square flex-shrink-0" />
              <span>{locales.common.login}</span>
            </Button>
          )}
        </nav>
      </div>
    </header>
  );
}
