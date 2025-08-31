'use client';

import { useEffect } from 'react';
import * as amplitude from '@amplitude/analytics-browser';
import { sessionReplayPlugin } from '@amplitude/plugin-session-replay-browser';

export function AmplitudeProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Add Session Replay to the Amplitude instance
    amplitude.add(sessionReplayPlugin({ sampleRate: 1 }));
    
    // Initialize amplitude with the provided API key and autocapture settings
    amplitude.init('71c4276fdc59ce0affee428d2c977367', {
      autocapture: true,
    });
  }, []);

  return <>{children}</>;
}
