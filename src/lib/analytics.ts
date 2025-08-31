import * as amplitude from '@amplitude/analytics-browser';

interface QueuedEvent {
  eventName: string;
  properties?: Record<string, any>;
}

export class Analytics {
  private static eventQueue: QueuedEvent[] = [];
  private static isInitialized = false;
  private static initializationPromise: Promise<void> | null = null;

  /**
   * Check if analytics is ready to track events
   */
  private static isReady(): boolean {
    return this.isInitialized && typeof window !== 'undefined';
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
   * Track event immediately without queuing
   */
  private static trackImmediate(eventName: string, properties?: Record<string, any>): void {
    try {
      amplitude.track(eventName, properties || {});
    } catch (error) {
      // Silently fail to avoid console spam
      if (process.env.NODE_ENV === 'development') {
        console.warn('Analytics tracking failed:', eventName, error);
      }
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

    if (this.isReady()) {
      this.trackImmediate(eventName, properties);
      return;
    }

    // Queue event if not ready
    this.eventQueue.push({ eventName, properties });
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
