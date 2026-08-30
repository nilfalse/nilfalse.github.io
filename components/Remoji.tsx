import clsx from 'clsx';

import type { Emoji } from '../data/emoji.ts';
import { useRandom } from '../use/useRandom.ts';
import { useStoredResource } from '../use/useStoredResource.ts';

import classes from './Remoji.module.css';

function fetchList() {
  return import('../data/emoji.ts').then(({ list }) => list);
}

interface Props {
  className?: string | undefined;
}

export function Remoji({ className }: Props) {
  const CACHE_KEY = 'remoji';

  const list = useStoredResource(CACHE_KEY, fetchList, []);
  const random = useRandom(list);

  const fallback: Emoji = {
    codepoint: ['👋'.codePointAt(0) as number],
    description: 'waving hand',
  };

  return (
    <div className={clsx(classes['remoji'], className)}>
      <Emoji emoji={fallback} suppressHydrationWarning />
      <script>
        {'(function(){' +
          `if(localStorage.getItem(${JSON.stringify(CACHE_KEY)}))` +
          `document.currentScript.previousElementSibling.style.display='none'` +
          '}())'}
      </script>

      <Emoji emoji={random} />
    </div>
  );
}

interface EmojiProps {
  emoji: Emoji | undefined;
  suppressHydrationWarning?: boolean;
}

function Emoji(props: EmojiProps) {
  const { emoji, suppressHydrationWarning } = props;

  if (!emoji) {
    return null;
  }

  return (
    <div suppressHydrationWarning={suppressHydrationWarning}>
      <span className={classes['emoji']}>
        {String.fromCodePoint(...emoji.codepoint)}
      </span>
      <small>{emoji.description}</small>
    </div>
  );
}
