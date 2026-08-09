import { Container } from '../components/Container.tsx';
import { H1, H2 } from '../components/Typography.tsx';
import { Hero } from '../components/Hero.tsx';
import { Remoji } from '../components/Remoji.tsx';
import flexbox from '../components/flexbox.module.css';
import fx from '../components/fx.module.css';
import classes from './_index.module.css';
import { Button } from '../components/Button.tsx';

export function Index() {
  return (
    <>
      <Hero as="header" accent="var(--color-webext)">
        <Container>
          <H1 className={classes['hello']}>
            <span className={fx['shining']}>Hello, World</span> <Remoji />
          </H1>
        </Container>
      </Hero>
      <section className={`${classes['webext']} ${flexbox['center']}`}>
        <Container>
          <Button text="Learn more"></Button>
        </Container>
      </section>
    </>
  );
}
