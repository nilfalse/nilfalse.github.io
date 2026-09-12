import clsx from 'clsx';
import type { LinkProps } from 'react-router';
import { Link as ReactRouterLink } from 'react-router';

import classes from './Link.module.css';

interface Props extends LinkProps {}

export function Link({ children, ...props }: Props) {
  return (
    <ReactRouterLink
      {...props}
      className={clsx(classes['link'], props.className)}
    >
      {children}
    </ReactRouterLink>
  );
}
