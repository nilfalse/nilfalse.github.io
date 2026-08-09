import favicon from '../images/ctf/favicon.ico';
import cssUrl from '../views/addons.ctf.css?url';
import View from '../views/addons.ctf.tsx';
import type { Route } from './+types/addons.ctf.ts';

const description =
  'Capture The Flag is a privacy-focused, Open Source browser extension that can show website country flag and inspect its cloud provider setup.';

export const meta: Route.MetaFunction = () => [
  { title: 'Capture The Flag - IP to Country Browser Extension' },
  { name: 'description', content: description },
];

export const links: Route.LinksFunction = () => [
  { rel: 'icon', href: favicon },
  { rel: 'stylesheet', href: cssUrl },
];

export default View;
