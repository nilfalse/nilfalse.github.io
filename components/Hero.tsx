import clsx from 'clsx';
import type { CSSProperties, ElementType, PropsWithChildren } from 'react';

import classes from './Hero.module.css';
import flexbox from './flexbox.module.css';

interface Props extends PropsWithChildren {
  as?: ElementType;
  accent?: string;
}

export function Hero(props: Props) {
  const { children, as: Tag = 'section', accent } = props;

  const classNames = clsx(
    classes['hero'],
    flexbox['center'],
    accent && classes['accent'],
  );

  return (
    <Tag
      className={classNames}
      style={{ '--hero-accent': accent } as CSSProperties}
    >
      {children}
    </Tag>
  );
}
