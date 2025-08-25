import {type CDPSession, type Page} from '@playwright/test';
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
    layoutAvgPerOp: number;
    recalcAvgPerOp: number;
    layoutMedianPerOp: number;
    recalcMedianPerOp: number;
}

/**
 * Performance collector
 * Based on the sophisticated CDP tracing from scrollbar-performance.pw.spec.ts
 */
export class PerformanceCollector {
    private static readonly activeCollections = new Map<
        string,
        {
            client: CDPSession;
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

    private static startStopLock: Promise<void> = Promise.resolve();
    private static dirReady = false;

    public static async startTestCollection(
        page: Page,
        testName: string,
        testFile?: string,
    ): Promise<void> {
        try {
            await this.withLock(async () => {
                await this.stabilizePage(page);
                const client = await page.context().newCDPSession(page);
                const events: PerformanceEvent[] = [];

                client.on('Tracing.dataCollected', (data: any) => {
                    if (data.value && Array.isArray(data.value)) {
                        for (const ev of data.value as PerformanceEvent[]) {
                            if (this.isRelevantEvent(ev)) {
                                events.push(ev);
                            }
                        }
                    }
                });
                await client.send('Runtime.enable');
                await client.send('Runtime.runIfWaitingForDebugger');
                await client.send('Tracing.start', {
                    transferMode: 'ReportEvents',
                    traceConfig: {
                        recordMode: 'recordContinuously',
                        includedCategories: [
                            'devtools.timeline',
                            'toplevel',
                            'blink.user_timing',
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
                await page.waitForTimeout(25);
                await page.evaluate(async () => {
                    await new Promise<void>((resolve) =>
                        requestAnimationFrame(() => resolve()),
                    );
                });
                await this.warmUpMeasurement(page);
                await this.ensureActivityBurst(page);

                this.activeCollections.set(testName, {
                    client,
                    events,
                    startTime: Date.now(),
                    testFile,
                });

                if (process.env.PERF_COLLECTOR_DEBUG === '1') {
                    console.info(
                        '[PerformanceCollector][debug] start collected (pre-loop)',
                        {
                            events: events.length,
                            test: testName,
                        },
                    );
                }
            });
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

            await this.withLock(async () => {
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
            });

            // Extract metrics using filtered events for more stable results
            const metrics = this.extractStableMetrics(collection.events);

            if (!tracingCompleted && collection.events.length === 0) {
                console.warn(
                    `Tracing finished without completion event and no events captured for test: ${testName}`,
                );
            }

            const rawEvents = collection.events.length;
            const totalOps = metrics.layoutCount + metrics.recalcStyleCount;
            const opsPerKEvents = rawEvents > 0 ? (totalOps / rawEvents) * 1000 : 0;

            // Save metrics to file
            await this.saveTestMetrics({
                metrics,
                testName,
                url: page.url(),
                startTime: collection.startTime,
                testFile: collection.testFile,
                extras: {rawEvents, opsPerKEvents},
            });

            console.info(`📊 Test performance metrics for [${testName}]:`, {
                rawEvents,
                layout: `${metrics.layoutCount} ops (${metrics.layoutDuration.toFixed(2)}ms)`,
                recalc: `${metrics.recalcStyleCount} ops (${metrics.recalcStyleDuration.toFixed(2)}ms)`,
                opsPerKEvents: Number(opsPerKEvents.toFixed(2)),
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

    private static async withLock<T>(fn: () => Promise<T>): Promise<T> {
        const run = this.startStopLock.then(fn, fn);

        this.startStopLock = run.then(
            () => undefined,
            () => undefined,
        );

        return run;
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
            layoutAvgPerOp: 0,
            recalcAvgPerOp: 0,
            layoutMedianPerOp: 0,
            recalcMedianPerOp: 0,
        };
        // Optional per-event duration floor; defaults to 0 so we don't lose micro work
        const perEventMin = Number(process.env.PERF_EVENT_MIN_DURATION_MS || '0');
        const layoutDurations: number[] = [];
        const recalcDurations: number[] = [];

        for (const event of events) {
            const durationMs = event.dur ? event.dur / 1000 : 0;

            switch (event.name) {
                case 'Layout':
                    metrics.layoutCount++;

                    if (durationMs >= perEventMin) {
                        metrics.layoutDuration += durationMs;
                        layoutDurations.push(durationMs);
                    }

                    break;
                case 'RecalculateStyles':
                case 'ScheduleStyleRecalculation':
                case 'UpdateLayoutTree':
                    metrics.recalcStyleCount++;

                    if (durationMs >= perEventMin) {
                        metrics.recalcStyleDuration += durationMs;
                        recalcDurations.push(durationMs);
                    }

                    break;
                default:
                    break;
            }
        }

        metrics.layoutDuration = Math.round(metrics.layoutDuration * 1000) / 1000;
        metrics.recalcStyleDuration =
            Math.round(metrics.recalcStyleDuration * 1000) / 1000;

        metrics.layoutAvgPerOp = metrics.layoutCount
            ? Math.round((metrics.layoutDuration / metrics.layoutCount) * 1000) / 1000
            : 0;

        metrics.recalcAvgPerOp = metrics.recalcStyleCount
            ? Math.round(
                  (metrics.recalcStyleDuration / metrics.recalcStyleCount) * 1000,
              ) / 1000
            : 0;

        metrics.layoutMedianPerOp = this.median(layoutDurations);
        metrics.recalcMedianPerOp = this.median(recalcDurations);

        if (process.env.PERF_COLLECTOR_DEBUG === '1') {
            console.info('[PerformanceCollector][debug] events', {
                total: events.length,
                layoutCount: metrics.layoutCount,
                recalcStyleCount: metrics.recalcStyleCount,
                layoutDuration: metrics.layoutDuration,
                recalcStyleDuration: metrics.recalcStyleDuration,
                layoutAvgPerOp: metrics.layoutAvgPerOp,
                recalcAvgPerOp: metrics.recalcAvgPerOp,
                layoutMedianPerOp: metrics.layoutMedianPerOp,
                recalcMedianPerOp: metrics.recalcMedianPerOp,
                perEventMin,
            });
        }

        return metrics;
    }

    // groupEventsByTimeWindows removed as unused (previous implementation deleted)

    private static median(arr: readonly number[]): number {
        const len = arr.length;

        if (len === 0) {
            return 0;
        }

        const sorted = [...arr].sort((a, b) => a - b);
        const mid = Math.floor(len / 2);
        const value =
            len % 2 === 0 ? (sorted[mid - 1]! + sorted[mid]!) / 2 : sorted[mid]!;

        return Math.round(value * 1000) / 1000;
    }

    /**
     * Saves test-specific metrics to file
     */
    private static async saveTestMetrics(params: {
        metrics: PerformanceMetrics;
        testName: string;
        url: string;
        startTime: number;
        testFile: string | undefined;
        extras?: {rawEvents: number; opsPerKEvents: number};
    }): Promise<void> {
        const {metrics, testName, url, startTime, testFile, extras} = params;
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
                layoutAvgPerOp: Number(metrics.layoutAvgPerOp.toFixed(3)),
                recalcAvgPerOp: Number(metrics.recalcAvgPerOp.toFixed(3)),
                layoutMedianPerOp: Number(metrics.layoutMedianPerOp.toFixed(3)),
                recalcMedianPerOp: Number(metrics.recalcMedianPerOp.toFixed(3)),
                rawEvents: extras?.rawEvents ?? 0,
                opsPerKEvents: Number((extras?.opsPerKEvents ?? 0).toFixed(2)),
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
            await page.waitForLoadState('networkidle');
            await page.evaluate(async () => {
                await new Promise<void>((resolve) =>
                    requestAnimationFrame(() => requestAnimationFrame(() => resolve())),
                );
            });
            await page.waitForTimeout(20);
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

    private static async ensureActivityBurst(page: Page): Promise<void> {
        try {
            await page.evaluate(async () => {
                const host = document.body;
                const container = document.createElement('div');

                container.style.cssText =
                    'position:absolute;left:-9999px;top:-9999px;width:10px;height:10px;';
                host.appendChild(container);

                for (let i = 0; i < 6; i++) {
                    const el = document.createElement('div');

                    el.textContent = `burst-${i}`;
                    el.style.cssText =
                        'display:block;width:100%;height:4px;transform:translateZ(0);';
                    container.appendChild(el);
                    void el.offsetHeight;
                    el.style.transform = `scale(${1 + i * 0.002})`;
                    void el.clientTop;
                    el.style.transform = '';
                }

                // Force two animation frames to flush timeline events
                await new Promise<void>((resolve) =>
                    requestAnimationFrame(() => requestAnimationFrame(() => resolve())),
                );
                container.remove();
            });
        } catch {
            // Silent
        }
    }
}
