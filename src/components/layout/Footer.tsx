import CLink from '@/components/CLink';
import PAGES from '@/shared/config/pages.config';
import locales from '@/shared/locales';

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container">
        <div className="flex flex-col gap-4 md:gap-10 md:flex-row md:items-center md:justify-between py-4">
          <div className="flex flex-col gap-2">
            <CLink
              className="font-bold"
              href={PAGES.main}
            >
              Todo App
            </CLink>

            <p className="text-muted-foreground text-sm">{locales.layout.footer.description}</p>
          </div>

          <div className="flex flex-col gap-2 md:items-end">
            <div className="flex flex-wrap gap-x-2 gap-y-1 text-sm">
              <CLink
                className="text-muted-foreground hover:text-foreground def-transition"
                href={PAGES.terms}
              >
                Terms of Service
              </CLink>

              <CLink
                className="text-muted-foreground hover:text-foreground def-transition"
                href={PAGES.terms}
              >
                Terms of Service
              </CLink>

              <CLink
                className="text-muted-foreground hover:text-foreground def-transition"
                href={PAGES.terms}
              >
                Terms of Service
              </CLink>
            </div>

            <p className="text-xs text-muted-foreground">© Todo App. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
