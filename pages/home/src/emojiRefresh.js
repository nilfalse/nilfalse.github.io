import { useEffect, useLayoutEffect, useState } from 'react';

import './emojiRefresh.css';

export function EmojiRefresh({ children }) {
  const list = useEmojiList();
  const emoji = useEmoji(list);

  if (navigator.userAgent.includes('ReactSnap')) {
    return <div className="emoji-refresh" />;
  }

  if (emoji != null) {
    return (
      <div className="emoji-refresh">
        <span>{String.fromCodePoint(...emoji.codepoint)}</span>
        <small className="emoji-refresh__description">
          {emoji.description}
        </small>
      </div>
    );
  }

  return <div className="emoji-refresh">👋</div>;
}

function useEmoji(list) {
  const [emoji, setEmoji] = useState(null);

  useLayoutEffect(() => {
    if (emoji != null) {
      return;
    }

    if (list == null) {
      return;
    }

    setEmoji(list[getRandomInt(0, list.length - 1)]);
  }, [emoji, list]);

  return emoji;
}

function useEmojiList() {
  const cachedList = localStorage.getItem('emoji_list');

  const [list] = useState(cachedList != null ? JSON.parse(cachedList) : null);

  useEffect(() => {
    if (navigator.userAgent.includes('ReactSnap')) {
      return;
    }

    if (list == null) {
      import('./data/emoji').then(({ emoji }) => {
        localStorage.setItem('emoji_list', JSON.stringify(emoji));
      });
    }
  }, [list]);

  return list;
}

function getRandomInt(min, max) {
  return min + Math.floor(Math.random() * (max - min + 1));
}
