/// <reference types="user-agent-data-types" />

export type BrowserName = 'firefox' | 'edge' | 'chromium' | null;

export function getBrowser(): BrowserName {
  const ua = navigator.userAgent || '';

  if (
    ua.includes('Firefox') ||
    ua.includes('FxiOS') ||
    'MozAppearance' in document.documentElement.style
  ) {
    return 'firefox';
  }

  if (navigator.userAgentData && navigator.userAgentData.brands) {
    if (
      navigator.userAgentData.brands.some((b) => b.brand === 'Microsoft Edge')
    ) {
      return 'edge';
    }

    if (navigator.userAgentData.brands.some((b) => b.brand === 'Chromium')) {
      return 'chromium';
    }
  }

  if (ua.includes('Edg/') || ua.includes('Edge/')) {
    return 'edge';
  }

  if (ua.includes('Chrome') || ua.includes('CriOS')) {
    return 'chromium';
  }

  return null;
}
