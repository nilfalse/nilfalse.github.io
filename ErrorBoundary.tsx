import { isRouteErrorResponse } from 'react-router';

import { Container } from './components/Container.tsx';
import { Hero } from './components/Hero.tsx';
import { H1 } from './components/Typography.tsx';

import type { Route } from './+types/root.ts';

import fx from './components/fx.module.css';

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  console.error(error);

  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      return <Message text="Not found" />;
    }
    if (error.statusText) {
      return <Message text={error.statusText} />;
    }
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    return <Message text={error.message} />;
  }

  return <Message text="Something went wrong" />;
}

function Message(props: { text: string }) {
  return (
    <Hero>
      <Container as="header" center>
        <H1 className={fx['shining']}>{props.text}</H1>
      </Container>
    </Hero>
  );
}
