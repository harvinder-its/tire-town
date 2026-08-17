'use client';

import { trackEvent } from '@/lib/analytics';

export default function MobileStickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 md:hidden bg-black border-t border-gray-800 flex pb-[env(safe-area-inset-bottom)]">
      <a
        href="tel:+14039693600"
        onClick={() => trackEvent('truck_repair_sticky_cta_click', { type: 'call' })}
        className="flex-1 py-4 text-center font-bold text-white bg-black active:bg-gray-900 border-r border-gray-800"
      >
        Call Now
      </a>
      <a
        href="#request-service"
        onClick={() => trackEvent('truck_repair_sticky_cta_click', { type: 'request' })}
        className="flex-1 py-4 text-center font-bold text-black bg-yellow-500 active:bg-yellow-400"
      >
        Request Service
      </a>
    </div>
  );
}
