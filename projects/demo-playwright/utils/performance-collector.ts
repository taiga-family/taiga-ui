import {type Page} from '@playwright/test';
import {mkdirSync} from 'fs';
import {writeFile} from 'fs/promises';
import {join, resolve} from 'path';

/**
 * Performance event from CDP tracing
 */
interface PerformanceEvent {
    name: string;
    ts: number;
    dur?: number;
    args?: any;
    cat?: string;
}

/**
 * Simplified performance metrics
 */
interface PerformanceMetrics {
    layoutCount: number;
    recalcStyleCount: number;
    layoutDuration: number;
    recalcStyleDuration: number;
}

/**
 * Performance collector
 * Based on the sophisticated CDP tracing from scrollbar-performance.pw.spec.ts
 */
export class PerformanceCollector {
    private static readonly activeCollections = new Map<
        string,
        {
            client: any;
            events: PerformanceEvent[];
            startTime: number;
            testFile?: string;
        }
    >();

    private static readonly OUTPUT_DIR = resolve(
        process.cwd(),
        'projects/demo-playwright/tests-results',
        'performance',
    );

    private static dirReady = false;

    /**
     * Starts performance collection for a specific test
     */
    public static async startTestCollection(
        page: Page,
        testName: string,
        testFile?: string,
    ): Promise<void> {
        try {
            // console.log(`🎯 Starting CDP tracing for test: ${testName}`);

            // Stabilize page state before starting measurements
            await this.stabilizePage(page);

            const client = await page.context().newCDPSession(page);
            const events: PerformanceEvent[] = [];

            // Set up event collection with better error handling
            client.on('Tracing.dataCollected', (data: any) => {
                if (data.value && Array.isArray(data.value)) {
                    // Filter events to reduce noise from background activities
                    const filteredEvents = data.value.filter((event: PerformanceEvent) =>
                        this.isRelevantEvent(event),
                    );

                    events.push(...filteredEvents);
                }
            });

            // Ensure runtime is optimized before starting measurement
            await client.send('Runtime.enable');
            await client.send('Runtime.runIfWaitingForDebugger');

            // Force garbage collection to stabilize memory state
            await this.stabilizeGarbageCollection(client);

            // Start tracing with enhanced parameters for stability
            await client.send('Tracing.start', {
                traceConfig: {
                    includedCategories: [
                        'devtools.timeline',
                        'blink.user_timing',
                        'blink_style',
                        'blink',
                    ],
                    excludedCategories: [
                        'disabled-by-default*',
                        'devtools.screenshot',
                        'v8.execute',
                        'v8.compile',
                        'v8.gc',
                    ],
                },
            });

            // Warm up the measurement system with a small operation
            await this.warmUpMeasurement(page);

            // Store the active collection with test file info
            this.activeCollections.set(testName, {
                client,
                events,
                startTime: Date.now(),
                testFile,
            });

            // console.log(`✅ Performance collection started for test: ${testName}`);
        } catch (error) {
            console.warn(
                `Failed to start performance collection for test ${testName}:`,
                error,
            );
        }
    }

    /**
     * Stops performance collection for a specific test and saves metrics
     */
    public static async stopTestCollection(page: Page, testName: string): Promise<void> {
        try {
            const collection = this.activeCollections.get(testName);

            if (!collection) {
                console.warn(`No active collection found for test: ${testName}`);

                return;
            }

            // console.log(`🛑 Stopping CDP tracing for test: ${testName}`);

            // Allow any pending events to be collected
            await page.waitForTimeout(10);

            // Stop tracing and wait for completion with timeout protection
            await Promise.race([
                new Promise<void>((resolve) => {
                    collection.client.once('Tracing.tracingComplete', () => resolve());
                    collection.client.send('Tracing.end');
                }),
                // Timeout after 5 seconds to prevent hanging
                new Promise<void>((resolve) => {
                    setTimeout(() => {
                        console.warn(`Tracing completion timeout for test: ${testName}`);
                        resolve();
                    }, 5000);
                }),
            ]);

            await collection.client.detach();

            // Extract metrics using filtered events for more stable results
            const metrics = this.extractStableMetrics(collection.events);

            // Save metrics to file
            await this.saveTestMetrics(
                metrics,
                testName,
                page.url(),
                collection.startTime,
                collection.testFile,
            );

            console.info(`📊 Test performance metrics for [${testName}]:`, {
                layout: `${metrics.layoutCount} ops (${metrics.layoutDuration.toFixed(2)}ms)`,
                recalc: `${metrics.recalcStyleCount} ops (${metrics.recalcStyleDuration.toFixed(2)}ms)`,
            });

            // Clean up
            this.activeCollections.delete(testName);
        } catch (error) {
            console.warn(
                `Failed to stop performance collection for test ${testName}:`,
                error,
            );
        }
    }

    /**
     * Extracts performance metrics from CDP trace events with stability improvements
     */
    private static extractStableMetrics(
        events: readonly PerformanceEvent[],
    ): PerformanceMetrics {
        const metrics = {
            layoutCount: 0,
            recalcStyleCount: 0,
            layoutDuration: 0,
            recalcStyleDuration: 0,
        };

        // Filter events by time window to avoid capturing pre-test activity
        const relevantEvents = events.filter((event) => {
            // Only process events from devtools.timeline for main measurements
            if (!event.cat?.includes('devtools.timeline')) {
                return false;
            }

            // Filter out extremely short events that might be noise
            const durationMs = event.dur ? event.dur / 1000 : 0;

            // Increased minimum threshold to filter out GC-related micro-events
            return durationMs >= 0.5; // Minimum 0.5ms to filter noise and GC artifacts
        });

        // Group events by time to detect and filter potential GC interference
        const timeWindows = this.groupEventsByTimeWindows(relevantEvents, 10); // 10ms windows

        for (const window of timeWindows) {
            // Skip time windows with suspiciously high event density (likely GC interference)
            if (window.length > 20) {
                continue;
            }

            for (const event of window) {
                const durationMs = event.dur ? event.dur / 1000 : 0;

                // Filter out abnormally long events that might be GC-affected
                if (durationMs > 100) {
                    continue;
                }

                switch (event.name) {
                    case 'Layout':
                        metrics.layoutCount++;
                        metrics.layoutDuration += durationMs;
                        break;
                    case 'RecalculateStyles':
                    case 'UpdateLayoutTree':
                        metrics.recalcStyleCount++;
                        metrics.recalcStyleDuration += durationMs;
                        break;
                }
            }
        }

        // Round to reduce floating point variance
        metrics.layoutDuration = Math.round(metrics.layoutDuration * 1000) / 1000;
        metrics.recalcStyleDuration =
            Math.round(metrics.recalcStyleDuration * 1000) / 1000;

        return metrics;
    }

    /**
     * Groups events into time windows to detect patterns and filter noise
     */
    private static groupEventsByTimeWindows(
        events: readonly PerformanceEvent[],
        windowSizeMs: number,
    ): PerformanceEvent[][] {
        if (events.length === 0) {
            return [];
        }

        const windows: PerformanceEvent[][] = [];
        const windowSizeMicroseconds = windowSizeMs * 1000;

        // Sort events by timestamp
        const sortedEvents = [...events].sort((a, b) => a.ts - b.ts);

        if (sortedEvents.length === 0) {
            return [];
        }

        const startTime = sortedEvents[0]!.ts;

        let currentWindow: PerformanceEvent[] = [];
        let currentWindowStart = startTime;

        for (const event of sortedEvents) {
            // Check if event belongs to current window
            if (event.ts < currentWindowStart + windowSizeMicroseconds) {
                currentWindow.push(event);
            } else {
                // Start new window
                if (currentWindow.length > 0) {
                    windows.push(currentWindow);
                }

                currentWindow = [event];
                currentWindowStart = event.ts;
            }
        }

        // Add final window
        if (currentWindow.length > 0) {
            windows.push(currentWindow);
        }

        return windows;
    }

    /**
     * Saves test-specific metrics to file
     */
    private static async saveTestMetrics(
        metrics: PerformanceMetrics,
        testName: string,
        url: string,
        startTime: number,
        testFile?: string,
    ): Promise<void> {
        const performanceData = {
            timestamp: Date.now(),
            testStartTime: startTime,
            testDuration: Date.now() - startTime,
            url: url,
            testName: testName,
            source: testFile || 'CDP-tracing-per-test',
            metrics: {
                layoutCount: metrics.layoutCount,
                layoutDuration: Number(metrics.layoutDuration.toFixed(3)),
                recalcStyleCount: metrics.recalcStyleCount,
                recalcStyleDuration: Number(metrics.recalcStyleDuration.toFixed(3)),
            },
        };

        // Create safe filename from test name
        const safeTestName = testName
            .toLowerCase()
            .replaceAll(/[^a-z0-9]/g, '-')
            .replaceAll(/-+/g, '-')
            .replaceAll(/^-|-$/g, '');

        const filename = `test-${safeTestName}-${Date.now()}.json`;

        this.ensureDirOnce();
        const outputPath = join(this.OUTPUT_DIR, filename);

        await writeFile(outputPath, JSON.stringify(performanceData, null, 2));
        // console.log(`💾 Test performance data saved to: ${filename}`);
    }

    private static ensureDirOnce(): void {
        if (this.dirReady) {
            return;
        }

        try {
            mkdirSync(this.OUTPUT_DIR, {recursive: true});
            this.dirReady = true;
        } catch {}
    }

    /**
     * Stabilizes page state before performance measurement to reduce variance
     */
    private static async stabilizePage(page: Page): Promise<void> {
        try {
            // Wait for any pending animations or transitions to complete
            await page.waitForLoadState('networkidle');

            // Force garbage collection to stabilize memory state
            await page.evaluate(() => {
                // Force GC if available (in --expose-gc environments)
                if (typeof (globalThis as any).gc === 'function') {
                    (globalThis as any).gc();
                } else {
                    // Alternative: create memory pressure to encourage GC
                    const tempArrays = [];

                    for (let i = 0; i < 50; i++) {
                        tempArrays.push(new Array(5000).fill(0));
                    }

                    tempArrays.length = 0;
                }
            });

            // Wait for any pending layout operations
            await page.evaluate(async () => {
                return new Promise<void>((resolve) => {
                    // Force any pending layout calculations
                    void document.body.offsetHeight;

                    // Wait for next frame to ensure all rendering is complete
                    requestAnimationFrame(() => {
                        requestAnimationFrame(() => resolve());
                    });
                });
            });

            // Additional stabilization wait for GC to complete
            await page.waitForTimeout(100);
        } catch (error) {
            console.warn('Page stabilization failed:', error);
        }
    }

    /**
     * Filters events to reduce noise from background activities
     */
    private static isRelevantEvent(event: PerformanceEvent): boolean {
        // Skip events that are likely noise
        if (!event.name || !event.ts) {
            return false;
        }

        // Filter out GC-related events that can cause measurement variance
        const gcEvents = [
            'V8.GCScavenger',
            'V8.GCIncrementalMarking',
            'V8.GCCompactor',
            'V8.GCMarkAndSweep',
            'MinorGC',
            'MajorGC',
        ];

        if (gcEvents.includes(event.name)) {
            return false;
        }

        // Focus on layout and style events that are relevant to our measurements
        const relevantEvents = [
            'Layout',
            'RecalculateStyles',
            'UpdateLayoutTree',
            'Paint',
            'CompositeLayers',
        ];

        // Include devtools.timeline events for main measurements
        if (event.cat?.includes('devtools.timeline')) {
            return relevantEvents.includes(event.name);
        }

        // Include blink events that are style-related
        if (event.cat?.includes('blink')) {
            return event.name.includes('Style') || event.name.includes('Layout');
        }

        return false;
    }

    /**
     * Stabilizes garbage collection state before performance measurement
     */
    private static async stabilizeGarbageCollection(client: any): Promise<void> {
        try {
            // Force a major garbage collection to clear memory and stabilize heap
            await client.send('Runtime.evaluate', {
                expression: `
                    // Force garbage collection if available
                    if (typeof gc === 'function') {
                        gc();
                    } else {
                        // Alternative approach: create memory pressure to trigger GC
                        const arrays = [];
                        for (let i = 0; i < 100; i++) {
                            arrays.push(new Array(10000).fill(0));
                        }
                        arrays.length = 0;
                    }
                `,
                awaitPromise: false,
                returnByValue: false,
            });

            // Wait for GC to complete
            await new Promise((resolve) => setTimeout(resolve, 100));

            // Get heap usage to ensure GC has completed (for monitoring)
            try {
                await client.send('Runtime.evaluate', {
                    expression:
                        'performance.memory ? performance.memory.usedJSHeapSize : 0',
                    returnByValue: true,
                });
            } catch {
                // Ignore heap monitoring errors
            }

            // Additional small delay for GC stabilization
            await new Promise((resolve) => setTimeout(resolve, 50));

            // console.log(`🧹 GC stabilization completed, heap usage: ${heapUsage.result?.value || 'unknown'}`);
        } catch (error) {
            console.warn('GC stabilization failed, continuing with measurement:', error);
        }
    }

    /**
     * Performs a small warm-up operation to stabilize V8 optimization
     */
    private static async warmUpMeasurement(page: Page): Promise<void> {
        try {
            // Perform a minimal DOM operation to warm up the measurement system
            await page.evaluate(() => {
                // Create a small test element
                const warmupDiv = document.createElement('div');

                warmupDiv.style.position = 'absolute';
                warmupDiv.style.left = '-9999px';
                warmupDiv.style.width = '1px';
                warmupDiv.style.height = '1px';
                document.body.appendChild(warmupDiv);

                // Force a layout calculation
                void warmupDiv.offsetHeight;

                // Clean up immediately
                warmupDiv.remove();
            });
        } catch {
            // Ignore warmup errors to avoid disrupting the main test
        }
    }
}
