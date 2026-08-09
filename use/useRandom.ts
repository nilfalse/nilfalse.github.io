import { useMemo } from 'react';

import { getRandomInt } from '../lib/random.ts';

export function useRandom<T>(list: T[]) {
  return useMemo(() => {
    if (!list || list.length === 0) {
      return undefined;
    }

    return list[getRandomInt(0, list.length - 1)];
  }, [list]);
}
