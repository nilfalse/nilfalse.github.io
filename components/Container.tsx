import clsx from 'clsx';
import type { ElementType, PropsWithChildren } from 'react';

import classes from './Container.module.css';
import flexbox from './flexbox.module.css';

interface Props extends PropsWithChildren {
  className?: string | undefined;
  center?: boolean;
  wide?: boolean;
  spaced?: boolean;
  as?: ElementType;
}

export function Container(props: Props) {
  const { as: Tag = 'div' } = props;

  const className = clsx(
    classes['container'],
    {
      [flexbox['center'] as string]: props.center ?? true,
      [classes['wide'] as string]: props.wide,
      [classes['spaced'] as string]: props.spaced,
    },
    props.className,
  );

  return <Tag className={className}>{props.children}</Tag>;
}
