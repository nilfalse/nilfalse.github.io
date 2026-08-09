import clsx from 'clsx';
import type { PropsWithChildren } from 'react';

import classes from './Typography.module.css';

interface Props extends PropsWithChildren {
  className?: string | undefined;
  center?: boolean;
}

export function H1(props: Props) {
  const className = clsx(
    classes['h1'],
    { [classes['center'] as string]: props.center },
    props.className,
  );

  return <h1 className={className}>{props.children}</h1>;
}

export function H2(props: Props) {
  const className = clsx(
    classes['h2'],
    { [classes['center'] as string]: props.center },
    props.className,
  );

  return <h2 className={className}>{props.children}</h2>;
}

interface ParagraphProps extends Props {
  footnote?: boolean;
}

export function P(props: ParagraphProps) {
  const className = clsx(
    classes['p'],
    {
      [classes['center'] as string]: props.center,
      [classes['footnote'] as string]: props.footnote,
    },
    props.className,
  );

  return <p className={className}>{props.children}</p>;
}
