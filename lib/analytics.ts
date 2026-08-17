// Lightweight conversion-event tracking for the truck repair landing page.
// Pushes to window.dataLayer (the standard Google Tag Manager / GA4 queue).
// This is safe to call even before GTM is installed — the array push is a
// no-op until a GTM container is actually loaded on the site.
//
// No Google Ads conversion ID exists anywhere in this repo today, so none is
// hardcoded here. Once the business provides a real Conversion ID/Label,
// wire it into trackGoogleAdsConversion() below and load the gtag.js script
// in app/layout.tsx (or via a GTM container) — do not fabricate one.

type EventParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export function trackEvent(eventName: string, params?: EventParams): void {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: eventName, ...params });
}

// Placeholder only — intentionally a no-op until real IDs are supplied.
// Example once available:
//   window.gtag?.('event', 'conversion', {
//     send_to: 'AW-XXXXXXXXX/XXXXXXXXXXXXXXXXXXXX',
//   });
export function trackGoogleAdsConversion(_label: string): void {
  if (typeof window === 'undefined') return;
  if (process.env.NODE_ENV !== 'production') {
    console.info(`[analytics] Google Ads conversion "${_label}" not sent — no conversion ID configured yet.`);
  }
}
