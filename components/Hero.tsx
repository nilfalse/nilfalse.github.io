import clsx from 'clsx';
import type { CSSProperties, ElementType, PropsWithChildren } from 'react';

import classes from './Hero.module.css';
import flexbox from './flexbox.module.css';

interface Props extends PropsWithChildren {
  className?: string | undefined;
  accent?: string;
  height?: string;
  padding?: string;
  as?: ElementType;
}

export function Hero(props: Props) {
  const { accent, as: Tag = 'article' } = props;

  const classNames = clsx(
    classes['hero'],
    flexbox['center'],
    accent && classes['accent'],
    props.className,
  );

  const style = {
    '--hero-accent': accent,
    '--hero-height': props.height,
    '--hero-padding': props.padding,
  } as CSSProperties;

  return (
    <Tag className={classNames} style={style}>
      {props.children}
    </Tag>
  );
}
