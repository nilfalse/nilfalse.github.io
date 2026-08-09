import type { Config } from '@react-router/dev/config';

export default {
  appDirectory: '.',

  ssr: false,
  prerender: {
    paths: ['/', '/addons/ctf'],
    concurrency: 3,
  },

  subResourceIntegrity: true,
} satisfies Config;
