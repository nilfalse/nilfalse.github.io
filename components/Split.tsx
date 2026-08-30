import clsx from 'clsx';
import type { PropsWithChildren } from 'react';

import flexbox from './flexbox.module.css';

interface Props extends PropsWithChildren {
  spaced?: boolean;
}

export function Split({ children, spaced }: Props) {
  const className = clsx(flexbox['split'], {
    [flexbox['spaced'] as string]: spaced,
  });

  return <div className={className}>{children}</div>;
}
