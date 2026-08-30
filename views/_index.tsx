import { Button } from '../components/Button.tsx';
import { Container } from '../components/Container.tsx';
import { Link } from '../components/Link.tsx';
import { Split } from '../components/Split.tsx';
import typography from '../components/Typography.module.css';
import { H1, H2, P } from '../components/Typography.tsx';
import { Hero } from '../components/Hero.tsx';
import { Remoji } from '../components/Remoji.tsx';
import flexbox from '../components/flexbox.module.css';
import fx from '../components/fx.module.css';
import CTFLogo from '../images/logo_ctf.svg?react';
import classes from './_index.module.css';

function Hello() {
  return (
    <Hero as="header" accent="var(--color-webext)">
      <Container>
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
    <section className={`${classes['webext']} ${flexbox['center']}`}>
      <Container center={false}>
        <Split spaced>
          <Link
            href="/addons/ctf"
            className={`${flexbox['center']} ${flexbox['col']} ${classes['link']}`}
          >
            <H2>Capture The Flag</H2>
            <CTFLogo className={classes['logo']} />
          </Link>

          <div className={flexbox['center']}>
            <div className={`${typography['center']} ${classes['descr']}`}>
              <P>Cloud insights web extension</P>

              <div className={classes['cta']}>
                <Button href="/addons/ctf">Learn more</Button>
              </div>
            </div>
          </div>
        </Split>
      </Container>
    </section>
  );
}

export default function () {
  return (
    <>
      <Hello />
      <Webext />
    </>
  );
}
