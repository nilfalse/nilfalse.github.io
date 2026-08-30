import View from '../views/addons.ctf.tsx';
import type { Route } from './+types/addons.ctf.ts';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Capture The Flag - IP to Country Browser Extension' },
    { name: 'description', content: 'Capture The Flag is a privacy-focused, Open Source browser extension that can show website country flag and inspect its cloud provider setup.' },
  ];
}

export default View
