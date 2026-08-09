import { useSyncExternalStore } from 'react';

export function useScrollTop() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

function subscribe(callback: () => void) {
  window.addEventListener('scroll', callback, false);

  return () => window.removeEventListener('scroll', callback, false);
}

function getSnapshot() {
  return document.documentElement.scrollTop;
}

function getServerSnapshot() {
  return 0;
}
