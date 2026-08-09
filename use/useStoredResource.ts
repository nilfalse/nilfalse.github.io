import { noop } from 'lodash-es';
import { useEffect, useEffectEvent, useSyncExternalStore } from 'react';

import * as storage from '../lib/storage.ts';

export function useStoredResource<T>(
  key: string,
  factory: () => Promise<T>,
  fallback: T,
) {
  const load = useEffectEvent(factory);

  const value = useSyncExternalStore(
    () => noop,
    () => storage.getItem<T>(key) ?? fallback,
    () => fallback,
  );

  useEffect(() => {
    if (storage.getItem<T | undefined>(key) != null) {
      return;
    }

    let cancelled = false;
    load()
      .then((result) => {
        if (cancelled) {
          return;
        }

        storage.setItem(key, result);
      })
      .catch((err) => {
        if (!cancelled) {
          console.error(`useStoredResource(${key}):`, err);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [key]);

  return value;
}
