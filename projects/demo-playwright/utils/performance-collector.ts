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
                transferMode: 'ReportEvents',
                traceConfig: {
                    recordMode: 'recordContinuously',
                    includedCategories: [
                        'devtools.timeline',
                        'toplevel',
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

            // Give tracing a brief moment to initialize before we start generating work
            await page.waitForTimeout(30);

            // Barrier: ensure at least one frame tick after tracing starts so we don't miss very early events
            await page.evaluate(async () => {
                await new Promise<void>((resolve) =>
                    requestAnimationFrame(() => resolve()),
                );
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

            // Allow pending layout/style events to flush: two RAFs + configurable idle wait
            await page.evaluate(async () => {
                await new Promise<void>((resolve) =>
                    requestAnimationFrame(() => requestAnimationFrame(() => resolve())),
                );
            });

            const flushWait = Number(process.env.PERF_TRACE_FLUSH_WAIT_MS || '70');

            await page.waitForTimeout(flushWait);

            // Stop tracing with graceful fallback: avoid noisy warnings if completion event not emitted
            let tracingCompleted = false;

            // If nothing captured yet, inject a tiny deterministic synthetic workload to guarantee at least one layout/style slice
            if (collection.events.length === 0) {
                await page.evaluate(() => {
                    const host = document.body;
                    const probe = document.createElement('div');

                    probe.style.cssText =
                        'position:absolute;left:-9999px;top:-9999px;width:1px;height:1px;outline:1px solid transparent;';
                    host.appendChild(probe);
                    // Force style + layout
                    probe.className = 'perf-probe';
                    void probe.offsetHeight;
                    probe.style.transform = 'translateZ(0)';
                    void probe.offsetWidth;
                    probe.style.transform = '';
                    // Mutate style to ensure RecalculateStyles
                    probe.style.borderLeft = '1px solid rgba(0,0,0,0)';
                    void probe.clientTop;
                    probe.remove();
                });
                // Allow the synthetic operations to appear in the trace
                await page.evaluate(async () => {
                    await new Promise<void>((resolve) =>
                        requestAnimationFrame(() => resolve()),
                    );
                });
                await page.waitForTimeout(40);

                // If still empty after first synthetic batch, run a stronger fallback
                if (collection.events.length === 0) {
                    await page.evaluate(() => {
                        const host = document.body;

                        for (let i = 0; i < 5; i++) {
                            const el = document.createElement('div');

                            el.style.cssText =
                                'position:absolute;left:-9999px;top:-9999px;width:2px;height:2px;';
                            host.appendChild(el);
                            void el.offsetHeight;
                            el.style.transform = 'scale(1.01)';
                            void el.clientTop;
                            el.remove();
                        }
                    });
                    await page.evaluate(async () => {
                        await new Promise<void>((resolve) =>
                            requestAnimationFrame(() => resolve()),
                        );
                    });
                    await page.waitForTimeout(40);
                }
            }

            await new Promise<void>((resolve) => {
                const timeoutMs = 2000;
                const timer = setTimeout(() => resolve(), timeoutMs);

                collection.client.once('Tracing.tracingComplete', () => {
                    tracingCompleted = true;
                    clearTimeout(timer);
                    resolve();
                });

                collection.client.send('Tracing.end').catch(() => {
                    clearTimeout(timer);
                    resolve();
                });
            });

            await collection.client.detach();

            // Extract metrics using filtered events for more stable results
            const metrics = this.extractStableMetrics(collection.events);

            if (!tracingCompleted && collection.events.length === 0) {
                console.warn(
                    `Tracing finished without completion event and no events captured for test: ${testName}`,
                );
            }

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
        const metrics: PerformanceMetrics = {
            layoutCount: 0,
            recalcStyleCount: 0,
            layoutDuration: 0,
            recalcStyleDuration: 0,
        };
        // Optional per-event duration floor; defaults to 0 so we don't lose micro work
        const perEventMin = Number(process.env.PERF_EVENT_MIN_DURATION_MS || '0');

        for (const event of events) {
            if (!event.cat?.includes('devtools.timeline')) {
                continue;
            }

            const durationMs = event.dur ? event.dur / 1000 : 0;

            if (event.name === 'Layout') {
                metrics.layoutCount++;

                if (durationMs >= perEventMin) {
                    metrics.layoutDuration += durationMs;
                }
            } else if (
                event.name === 'RecalculateStyles' ||
                event.name === 'UpdateLayoutTree'
            ) {
                metrics.recalcStyleCount++;

                if (durationMs >= perEventMin) {
                    metrics.recalcStyleDuration += durationMs;
                }
            }
        }

        metrics.layoutDuration = Math.round(metrics.layoutDuration * 1000) / 1000;
        metrics.recalcStyleDuration =
            Math.round(metrics.recalcStyleDuration * 1000) / 1000;

        if (process.env.PERF_COLLECTOR_DEBUG === '1') {
            console.info('[PerformanceCollector][debug] events', {
                total: events.length,
                layoutCount: metrics.layoutCount,
                recalcStyleCount: metrics.recalcStyleCount,
                layoutDuration: metrics.layoutDuration,
                recalcStyleDuration: metrics.recalcStyleDuration,
                perEventMin,
            });
        }

        return metrics;
    }

    // groupEventsByTimeWindows removed as unused (previous implementation deleted)

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
            'ScheduleStyleRecalculation',
            'UpdateLayoutTree',
            'InvalidateLayout',
            'LayoutShift',
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
