import clsx from 'clsx';
import type { AnchorHTMLAttributes } from 'react';

import classes from './Link.module.css';

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {}

export function Link({ children, ...props }: Props) {
  return (
    <a {...props} className={clsx(classes['link'], props.className)}>
      {children}
    </a>
  );
}
