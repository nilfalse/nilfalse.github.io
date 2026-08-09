import LogoCTF from '../images/logo_ctf.svg?react';

import classes from './FrontPageSectionCTF.module.css';

const URL = '/addons/ctf';

export function FrontPageSectionCTF() {
  return (
    <div className={classes['section']}>
      <div className={classes['catcher']}>
        <header>
          <h2 className={classes['header']}>Capture The Flag</h2>
        </header>

        <a href={URL} className={classes['link']}>
          Capture&nbsp;The&nbsp;Flag
        </a>

        <LogoCTF width="180px" height="180px" />
      </div>

      <div className={classes['details']}>
        <p className={classes['description']}>Cloud insights web extension</p>

        <a href={URL} className={classes['cta']}>
          Learn More
        </a>
      </div>
    </div>
  );
}
