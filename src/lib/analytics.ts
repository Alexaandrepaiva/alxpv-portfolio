import * as amplitude from '@amplitude/analytics-browser';

interface QueuedEvent {
  eventName: string;
  properties?: Record<string, any>;
}

export class Analytics {
  private static eventQueue: QueuedEvent[] = [];
  private static isInitialized = false;
  private static initializationPromise: Promise<void> | null = null;
  private static isDisabled = false;
  private static isDevelopmentMode = process.env.NODE_ENV === 'development';

  /**
   * Check if analytics is ready to track events
   */
  private static isReady(): boolean {
    return this.isInitialized && !this.isDisabled && typeof window !== 'undefined';
  }

  /**
   * Wait for initialization to complete
   */
  private static async waitForInitialization(): Promise<void> {
    if (this.initializationPromise) {
      await this.initializationPromise;
    }
  }

  /**
   * Process any queued events
   */
  private static processQueuedEvents(): void {
    while (this.eventQueue.length > 0) {
      const event = this.eventQueue.shift();
      if (event) {
        this.trackImmediate(event.eventName, event.properties);
      }
    }
  }

  /**
   * Log event locally in development mode
   */
  private static logEventLocally(eventName: string, properties?: Record<string, any>): void {
    console.group(`📊 Analytics Event: ${eventName}`);
    console.log('Event Name:', eventName);
    if (properties && Object.keys(properties).length > 0) {
      console.log('Properties:', properties);
    }
    console.log('Timestamp:', new Date().toISOString());
    console.groupEnd();
  }

  /**
   * Track event immediately without queuing
   */
  private static trackImmediate(eventName: string, properties?: Record<string, any>): void {
    if (this.isDisabled) {
      return;
    }

    // In development mode, only log locally
    if (this.isDevelopmentMode) {
      this.logEventLocally(eventName, properties);
      return;
    }

    // In production mode, send to Amplitude
    try {
      amplitude.track(eventName, properties || {});
    } catch (error) {
      // In production, silently fail to avoid console spam
      console.warn('Analytics tracking failed:', eventName);
    }
  }

  /**
   * Mark analytics as initialized and process queued events
   */
  static markAsInitialized(): void {
    this.isInitialized = true;
    this.processQueuedEvents();
  }

  /**
   * Mark analytics as disabled (when no API key is provided)
   */
  static markAsDisabled(): void {
    this.isDisabled = true;
    this.isInitialized = true;
    // In development mode, we still want to log events locally
    if (!this.isDevelopmentMode) {
      // Clear the queue since we won't be processing events in production
      this.eventQueue = [];
    }
  }

  /**
   * Set initialization promise
   */
  static setInitializationPromise(promise: Promise<void>): void {
    this.initializationPromise = promise;
  }

  /**
   * Track an event with optional properties
   * @param eventName - The name of the event to track
   * @param properties - Optional properties to include with the event
   */
  static track(eventName: string, properties?: Record<string, any>): void {
    if (!eventName || typeof eventName !== 'string') {
      return;
    }

    // In development mode, always log locally regardless of initialization status
    if (this.isDevelopmentMode) {
      this.logEventLocally(eventName, properties);
      return;
    }

    // In production mode, follow normal flow
    if (this.isReady()) {
      this.trackImmediate(eventName, properties);
      return;
    }

    // Queue event if not ready (production only)
    if (!this.isDisabled) {
      this.eventQueue.push({ eventName, properties });
    }
  }

  /**
   * Track an event with a label property
   * @param eventName - The name of the event to track
   * @param label - The label to include with the event
   * @param additionalProperties - Any additional properties to include
   */
  static trackWithLabel(eventName: string, label: string, additionalProperties?: Record<string, any>): void {
    const properties = { label, ...additionalProperties };
    this.track(eventName, properties);
  }
}
