import { useEffect, useState } from 'react';

import type { BrowserName } from '../lib/useragent.ts';
import { getBrowser } from '../lib/useragent.ts';

export function useUseragent() {
  const [ua, set] = useState<BrowserName>(null);

  useEffect(function () {
    set(getBrowser());
  }, []);

  return ua;
}
