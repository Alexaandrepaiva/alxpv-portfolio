'use client';

import { useEffect } from 'react';
import * as amplitude from '@amplitude/analytics-browser';
import { sessionReplayPlugin } from '@amplitude/plugin-session-replay-browser';
import { Analytics } from '~/lib/analytics';
import { env } from '../../env';

export function AmplitudeProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const initializeAmplitude = async () => {
      try {
        // In development mode, just mark as initialized for local logging
        if (process.env.NODE_ENV === 'development') {
          console.log('📊 Analytics initialized in development mode (local logging only)');
          Analytics.markAsInitialized();
          return;
        }

        // In production mode, check for API key and initialize Amplitude
        const apiKey = env.NEXT_PUBLIC_AMPLITUDE_API_KEY;
        
        if (!apiKey) {
          console.warn('Amplitude API key not found in production. Analytics will be disabled.');
          Analytics.markAsDisabled();
          return;
        }

        // Create a promise for initialization tracking
        const initPromise = (async () => {
          // Add Session Replay plugin with error handling
          try {
            amplitude.add(sessionReplayPlugin({ sampleRate: 1 }));
          } catch (error) {
            console.warn('Session Replay plugin failed to load:', error);
          }

          // Initialize amplitude with more robust configuration
          await amplitude.init(apiKey, {
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
        console.warn('Amplitude initialization failed:', error);
        // Even if initialization fails, mark as "ready" to allow queued events to be processed
        Analytics.markAsInitialized();
      }
    };

    initializeAmplitude();
  }, []);

  return <>{children}</>;
}
