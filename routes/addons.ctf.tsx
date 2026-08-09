import { Remoji } from '../components/Remoji.tsx';
import type { Route } from './+types/addons.ctf';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Capture The Flag - IP to Country Browser Extension' },
    { name: 'description', content: 'Capture The Flag is a privacy-focused, Open Source browser extension that can show website country flag and inspect its cloud provider setup.' },
  ];
}

export default function Home() {
  return <Remoji />;
}
