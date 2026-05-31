/**
 * Analytics abstraction layer.
 * 
 * Event Schema:
 * track('Event Name', { prop1: 'value', prop2: 123 })
 * 
 * To swap providers, modify the logic inside the track function.
 * Note: No PII is collected. No cookies. No cross-site tracking.
 */

declare global {
  interface Window {
    plausible?: (event: string, options?: { props: Record<string, string | number> }) => void;
  }
}

export function track(event: string, props?: Record<string, string | number>) {
  if (typeof window !== 'undefined' && window.plausible) {
    window.plausible(event, props ? { props } : undefined);
  } else if (import.meta.env.DEV) {
    console.debug('[Analytics]', event, props);
  }
}

