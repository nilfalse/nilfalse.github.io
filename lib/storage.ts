import { memoize } from 'lodash-es';

export function getItem<T>(key: string): T | null {
  const item = localStorage.getItem(key);
  if (item == null) {
    return null;
  }

  try {
    return _parse(item);
  } catch {
    return null;
  }
}

export function setItem<T>(key: string, value: T) {
  localStorage.setItem(key, JSON.stringify(value));
}

const _parse = memoize((item: string) => JSON.parse(item));
