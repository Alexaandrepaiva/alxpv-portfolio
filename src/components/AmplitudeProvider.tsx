'use client';

import { useEffect } from 'react';
import * as amplitude from '@amplitude/analytics-browser';
import { sessionReplayPlugin } from '@amplitude/plugin-session-replay-browser';
import { Analytics } from '~/lib/analytics';

export function AmplitudeProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const initializeAmplitude = async () => {
      try {
        // Create a promise for initialization tracking
        const initPromise = (async () => {
          // Add Session Replay plugin with error handling
          try {
            amplitude.add(sessionReplayPlugin({ sampleRate: 1 }));
          } catch (error) {
            if (process.env.NODE_ENV === 'development') {
              console.warn('Session replay plugin failed to load:', error);
            }
          }

          // Initialize amplitude with more robust configuration
          await amplitude.init('71c4276fdc59ce0affee428d2c977367', {
            autocapture: true,
            defaultTracking: {
              attribution: false,
              pageViews: false,
              sessions: false,
              formInteractions: false,
              fileDownloads: false,
            },
            // Configure flush settings for better performance
            flushQueueSize: 10,
            flushIntervalMillis: 1000,
          });
        })();

        // Set the initialization promise in Analytics
        Analytics.setInitializationPromise(initPromise);

        // Wait for initialization to complete
        await initPromise;

        // Mark Analytics as ready
        Analytics.markAsInitialized();
      } catch (error) {
        if (process.env.NODE_ENV === 'development') {
          console.warn('Amplitude initialization failed:', error);
        }
        // Even if initialization fails, mark as "ready" to allow queued events to be processed
        Analytics.markAsInitialized();
      }
    };

    initializeAmplitude();
  }, []);

  return <>{children}</>;
}
