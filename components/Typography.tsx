import type { PropsWithChildren } from 'react';

import classes from './Typography.module.css';

interface Props extends PropsWithChildren {
  className?: string | undefined;
}

export function H1(props: Props) {
  const { children, className = '' } = props;

  return <h1 className={`${classes['h1']} ${className}`}>{children}</h1>;
}

export function H2(props: Props) {
  const { className = '' } = props;

  return <h2 className={`${classes['h2']} ${className}`}>{props.children}</h2>;
}
