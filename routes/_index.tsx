import View from '../views/_index.tsx';
import type { Route } from './+types/_index.ts';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'nilfalse' },
    { name: 'description', content: 'Apps and tools by nilfalse' },
  ];
}

export default View;
