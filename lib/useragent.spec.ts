import { describe, it, expect, beforeEach, vi } from 'vitest';
import { getBrowser } from './useragent.ts';

beforeEach(() => {
  vi.restoreAllMocks();

  Object.defineProperty(globalThis, 'document', {
    value: { documentElement: { style: {} } },
    writable: true,
    configurable: true,
  });

  Object.defineProperty(globalThis, 'navigator', {
    value: { userAgent: '', userAgentData: undefined },
    writable: true,
    configurable: true,
  });
});

describe('Firefox', () => {
  it('should detect desktop Firefox via UA', () => {
    vi.spyOn(navigator, 'userAgent', 'get').mockReturnValue(
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:123.0) Gecko/21000101 Firefox/123.0',
    );
    expect(getBrowser()).toBe('firefox');
  });

  it('should detect iOS Firefox via UA', () => {
    vi.spyOn(navigator, 'userAgent', 'get').mockReturnValue(
      'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) FxiOS/123.0 Mobile/15E148 Safari/605.1.15',
    );
    expect(getBrowser()).toBe('firefox');
  });

  it('should detect Firefox via feature detection fallback', () => {
    vi.spyOn(navigator, 'userAgent', 'get').mockReturnValue(
      'Unknown Engine String',
    );
    Object.defineProperty(document.documentElement, 'style', {
      value: { MozAppearance: 'none' },
      configurable: true,
    });
    expect(getBrowser()).toBe('firefox');
  });
});

describe('Microsoft Edge', () => {
  it('should detect Edge via modern Client Hints API', () => {
    Object.defineProperty(navigator, 'userAgentData', {
      value: {
        brands: [
          { brand: 'Not A(Brand', version: '99' },
          { brand: 'Chromium', version: '122' },
          { brand: 'Microsoft Edge', version: '122' },
        ],
      },
      configurable: true,
    });
    expect(getBrowser()).toBe('edge');
  });

  it('should detect Edge via legacy UA fallback string', () => {
    vi.spyOn(navigator, 'userAgent', 'get').mockReturnValue(
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36 Edg/122.0.0.0',
    );
    expect(getBrowser()).toBe('edge');
  });
});

describe('Chromium detection', () => {
  it('should detect generic Chromium via modern Client Hints API', () => {
    Object.defineProperty(navigator, 'userAgentData', {
      value: {
        brands: [
          { brand: 'Chromium', version: '122' },
          { brand: 'Google Chrome', version: '122' },
        ],
      },
      configurable: true,
    });
    expect(getBrowser()).toBe('chromium');
  });

  it('should detect Google Chrome via UA fallback string', () => {
    vi.spyOn(navigator, 'userAgent', 'get').mockReturnValue(
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
    );
    expect(getBrowser()).toBe('chromium');
  });

  it('should detect Chrome on iOS (CriOS)', () => {
    vi.spyOn(navigator, 'userAgent', 'get').mockReturnValue(
      'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/122.0.0.0 Mobile/15E148 Safari/605.1.15',
    );
    expect(getBrowser()).toBe('chromium');
  });
});

describe('Unsupported browsers', () => {
  it('should return null for actual Apple Safari', () => {
    vi.spyOn(navigator, 'userAgent', 'get').mockReturnValue(
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.3.1 Safari/605.1.15',
    );
    expect(getBrowser()).toBeNull();
  });

  it('should return null for totally unrecognized user-agents', () => {
    vi.spyOn(navigator, 'userAgent', 'get').mockReturnValue(
      'MyCustomScraperBot/1.0',
    );
    expect(getBrowser()).toBeNull();
  });
});
