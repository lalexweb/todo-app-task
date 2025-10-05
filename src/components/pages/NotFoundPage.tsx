import CLink from '@/components/CLink';
import {Button} from '@/components/ui/Button';
import PAGES from '@/shared/config/pages.config';
import locales from '@/shared/locales';
import {Home} from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="flex items-center justify-center w-full pt-20">
      <div className="flex flex-col items-center gap-4 max-w-md">
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-6xl font-bold text-muted-foreground">404</h1>

          <h2 className="text-2xl font-semibold">{locales.pages.notFound.title}</h2>

          <p className="text-muted-foreground">{locales.pages.notFound.description}</p>
        </div>

        <Button
          as={CLink}
          size="lg"
          href={PAGES.main}
        >
          <Home className="size-4 aspect-square flex-shrink-0" />

          {locales.pages.notFound.button}
        </Button>
      </div>
    </div>
  );
}
