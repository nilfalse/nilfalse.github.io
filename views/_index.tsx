import { Button } from '../components/Button.tsx';
import { Container } from '../components/Container.tsx';
import { Link } from '../components/Link.tsx';
import typography from '../components/Typography.module.css';
import { H1, H2, P } from '../components/Typography.tsx';
import { Hero } from '../components/Hero.tsx';
import { Remoji } from '../components/Remoji.tsx';
import flexbox from '../components/flexbox.module.css';
import fx from '../components/fx.module.css';
import CTFLogo from '../images/ctf/logo/logo.svg?react';
import classes from './_index.module.css';

export default function () {
  return (
    <>
      <Hello />
      <Webext />
    </>
  );
}

function Hello() {
  return (
    <Hero height="70vh" accent="var(--color-webext)">
      <Container as="header" center>
        <H1 className={`${classes['hello']} ${typography['center']}`}>
          <span className={fx['shining']}>Hello, World</span>
          <Remoji className={classes['remoji']} />
        </H1>
      </Container>
    </Hero>
  );
}

function Webext() {
  return (
    <main className={`${classes['webext']} ${flexbox['center']}`}>
      <Container as="section" split spaced>
        <div className={flexbox['center']}>
          <Link
            to="/addons/ctf"
            className={`${flexbox['center']} ${flexbox['col']} ${classes['link']}`}
          >
            <H2>Capture The Flag</H2>
            <CTFLogo className={classes['logo']} />
          </Link>
        </div>

        <div className={flexbox['center']}>
          <div className={`${typography['center']} ${classes['descr']}`}>
            <P>Cloud insights browser extension</P>

            <div className={classes['cta']}>
              <Button to="/addons/ctf">Learn more</Button>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
