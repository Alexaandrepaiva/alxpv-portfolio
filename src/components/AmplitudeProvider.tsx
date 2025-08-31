'use client';

import { useEffect } from 'react';
import * as amplitude from '@amplitude/analytics-browser';
import { sessionReplayPlugin } from '@amplitude/plugin-session-replay-browser';
import { Analytics } from '~/lib/analytics';
import { env } from '~/env';

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
              const errorMessage = error instanceof Error ? error.message : String(error);
              console.group('🔍 Session Replay Plugin Failed');
              console.warn('Error Message:', errorMessage);
              console.warn('Full Error:', error);
              console.groupEnd();
            }
          }

          // Initialize amplitude with more robust configuration
          await amplitude.init(env.NEXT_PUBLIC_AMPLITUDE_API_KEY, {
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
          const errorMessage = error instanceof Error ? error.message : String(error);
          const errorStack = error instanceof Error ? error.stack : undefined;
          
          console.group('🔍 Amplitude Initialization Failed');
          console.warn('Error Message:', errorMessage);
          console.warn('Full Error:', error);
          if (errorStack) {
            console.warn('Stack Trace:', errorStack);
          }
          console.groupEnd();
        }
        // Even if initialization fails, mark as "ready" to allow queued events to be processed
        Analytics.markAsInitialized();
      }
    };

    initializeAmplitude();
  }, []);

  return <>{children}</>;
}
