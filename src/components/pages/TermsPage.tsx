'use client';

import locales from '@/shared/locales';
import {TosPage} from '@/shared/types/main';
import DOMPurify from 'isomorphic-dompurify';
import {useMemo} from 'react';

interface TermsPageProps {
  data: TosPage;
}

export default function TermsPage({data}: TermsPageProps) {
  const sanitizedContent = useMemo(() => {
    return DOMPurify.sanitize(data.content, {
      ALLOWED_TAGS: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'br', 'strong', 'em', 'u', 'b', 'i', 'ul', 'ol', 'li', 'a', 'span', 'div', 'blockquote', 'hr', 'pre', 'code'],
      ALLOWED_ATTR: ['href', 'target', 'rel', 'class', 'id'],
      ALLOW_DATA_ATTR: false,
    });
  }, [data.content]);

  return (
    <div className="container">
      <div className="flex flex-col gap-4">
        <h1 className="font-bold text-2xl md:text-3xl">{locales.pages.terms.title}</h1>

        <div
          className="[&_h1]:text-2xl [&_h1]:md:text-3xl [&_h1]:font-bold [&_h1]:mb-4 [&_h1]:md:mb-6 [&_h1]:text-foreground [&_h2]:text-lg [&_h2]:md:text-2xl [&_h2]:font-semibold [&_h2]:mt-6 [&_h2]:md:mt-8 [&_h2]:mb-3 [&_h2]:md:mb-4 [&_h2]:text-foreground [&_h3]:text-base [&_h3]:md:text-xl [&_h3]:font-semibold [&_h3]:mt-4 [&_h3]:md:mt-6 [&_h3]:mb-2 [&_h3]:md:mb-3 [&_h3]:text-foreground [&_p]:mb-3 [&_p]:md:mb-4 [&_p]:leading-relaxed [&_p]:text-sm [&_p]:md:text-base [&_p]:text-foreground [&_strong]:font-semibold [&_em]:italic [&_ul]:list-disc [&_ul]:pl-4 [&_ul]:md:pl-6 [&_ul]:mb-3 [&_ul]:md:mb-4 [&_ol]:list-decimal [&_ol]:pl-4 [&_ol]:md:pl-6 [&_ol]:mb-3 [&_ol]:md:mb-4 [&_li]:mb-1 [&_li]:md:mb-2 [&_li]:text-sm [&_li]:md:text-base [&_a]:text-primary [&_a]:no-underline hover:[&_a]:underline [&_a]:font-medium [&_address]:not-italic [&_address]:font-normal [&_address]:mb-3 [&_address]:md:mb-4 [&_address]:text-sm [&_address]:md:text-base [&_hr]:my-6 [&_hr]:md:my-8 [&_hr]:border-border [&_blockquote]:border-l-2 [&_blockquote]:md:border-l-4 [&_blockquote]:border-primary [&_blockquote]:pl-3 [&_blockquote]:md:pl-4 [&_blockquote]:italic [&_blockquote]:my-3 [&_blockquote]:md:my-4 [&_blockquote]:text-sm [&_blockquote]:md:text-base"
          dangerouslySetInnerHTML={{
            __html: sanitizedContent,
          }}
        />
      </div>
    </div>
  );
}
