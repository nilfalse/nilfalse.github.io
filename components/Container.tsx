import clsx from 'clsx';
import type { ElementType, PropsWithChildren } from 'react';

import classes from './Container.module.css';
import flexbox from './flexbox.module.css';

interface Props extends PropsWithChildren {
  className?: string | undefined;
  center?: boolean;
  nopad?: boolean;
  wide?: boolean;
  vertical?: boolean;
  split?: boolean;
  spaced?: boolean;
  as?: ElementType;
}

export function Container(props: Props) {
  const Tag = props.as ?? 'div';

  const className = clsx(
    classes['container'],
    {
      [flexbox['center'] as string]: props.center,
      [classes['pad'] as string]: !props.nopad,
      [classes['wide'] as string]: props.wide,
      [flexbox['col'] as string]: props.vertical,
      [flexbox['split'] as string]: props.split,
      [flexbox['spaced'] as string]: props.spaced,
    },
    props.className,
  );

  return <Tag className={className}>{props.children}</Tag>;
}
