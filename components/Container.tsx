import type { ElementType, PropsWithChildren } from 'react';

import classes from './Container.module.css';
import flexbox from './flexbox.module.css';

interface Props extends PropsWithChildren {
  className?: string | undefined;
  as?: ElementType;
}

export function Container(props: Props) {
  const { children, className = '', as: Tag = 'div' } = props;

  return (
    <Tag
      className={`${classes['container']} ${flexbox['center']} ${className}`}
    >
      {children}
    </Tag>
  );
}
