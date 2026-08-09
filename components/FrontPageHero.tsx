import type { PropsWithChildren } from 'react';

import classes from './FrontPageHero.module.css';
import flexbox from './flexbox.module.css';

export function FrontPageHero({ children }: PropsWithChildren) {
  return (
    <div className={classes['hero']}>
      <div className={`${classes['content']} ${flexbox['center']}`}>
        {children}
      </div>

      {/* <div className={classes['pad']} /> */}
    </div>
  );
}

export function FrontPageHeroPad() {
  return <div className={classes['pad']} />;
}
