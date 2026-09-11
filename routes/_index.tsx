import favicon from '~/images/favicon.ico';
import View from '~/views/_index.tsx';

import type { Route } from './+types/_index.ts';

export const meta: Route.MetaFunction = () => [
  { title: 'nilfalse' },
  { name: 'description', content: 'Apps and tools by nilfalse' },
];

export const links: Route.LinksFunction = () => [
  { rel: 'icon', href: favicon },
];

export default View;
