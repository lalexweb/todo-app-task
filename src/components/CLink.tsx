import Link, {LinkProps} from 'next/link';
import {HTMLAttributes, PropsWithChildren} from 'react';
import {UrlObject} from 'url';

type CLinkProps = PropsWithChildren<
  Omit<LinkProps, 'href'> &
    HTMLAttributes<HTMLElement> & {
      target?: string;
      href: string | UrlObject | undefined | null;
    }
>;

export default function CLink({children, href, ...props}: CLinkProps) {
  return (
    <Link
      {...props}
      href={href || ''}
      prefetch={props.prefetch ?? false}
    >
      {children}
    </Link>
  );
}
