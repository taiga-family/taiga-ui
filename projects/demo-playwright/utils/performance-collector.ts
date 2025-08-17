import {type Page} from '@playwright/test';
import {writeFile} from 'fs/promises';
import {resolve} from 'path';

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
        }
    >();

    /**
     * Starts performance collection for a specific test
     */
    public static async startTestCollection(page: Page, testName: string): Promise<void> {
        try {
            // eslint-disable-next-line no-console
            console.log(`🎯 Starting CDP tracing for test: ${testName}`);

            const client = await page.context().newCDPSession(page);
            const events: PerformanceEvent[] = [];

            // Set up event collection (same as scrollbar-performance.pw.spec.ts)
            client.on('Tracing.dataCollected', (data: any) => {
                if (data.value && Array.isArray(data.value)) {
                    events.push(...data.value);
                }
            });

            // Start tracing with the same parameters as scrollbar-performance.pw.spec.ts
            await client.send('Tracing.start', {
                traceConfig: {
                    includedCategories: [
                        'devtools.timeline',
                        'blink.user_timing',
                        'blink_style',
                        'blink',
                    ],
                    excludedCategories: ['disabled-by-default*'],
                },
            });

            // Store the active collection
            this.activeCollections.set(testName, {
                client,
                events,
                startTime: Date.now(),
            });

            // eslint-disable-next-line no-console
            console.log(`✅ Performance collection started for test: ${testName}`);
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

            // eslint-disable-next-line no-console
            console.log(`🛑 Stopping CDP tracing for test: ${testName}`);

            // Stop tracing and wait for completion
            await new Promise<void>((resolve) => {
                collection.client.once('Tracing.tracingComplete', () => resolve());
                collection.client.send('Tracing.end');
            });

            await collection.client.detach();

            // Extract metrics using the same logic as scrollbar-performance.pw.spec.ts
            const metrics = this.extractMetrics(collection.events);

            // Save metrics to file
            await this.saveTestMetrics(
                metrics,
                testName,
                page.url(),
                collection.startTime,
            );

            // eslint-disable-next-line no-console
            console.log(`📊 Test performance metrics for [${testName}]:`, {
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
     * Captures performance metrics during basic page operations
     * This is a simplified version of the PerformanceMeasurer from scrollbar-performance.pw.spec.ts
     */
    public static async capturePageLoadMetrics(page: Page, url: string): Promise<void> {
        try {
            // eslint-disable-next-line no-console
            console.log('🎯 Starting CDP tracing for page load metrics...');

            const client = await page.context().newCDPSession(page);
            const events: PerformanceEvent[] = [];

            // Set up event collection (same as scrollbar-performance.pw.spec.ts)
            client.on('Tracing.dataCollected', (data: any) => {
                if (data.value && Array.isArray(data.value)) {
                    events.push(...data.value);
                }
            });

            // Start tracing with the same parameters as scrollbar-performance.pw.spec.ts
            await client.send('Tracing.start', {
                traceConfig: {
                    includedCategories: [
                        'devtools.timeline',
                        'blink.user_timing',
                        'blink_style',
                        'blink',
                    ],
                    excludedCategories: ['disabled-by-default*'],
                },
            });

            // Perform some basic operations to generate layout/recalc events
            await this.executeBasicPageOperations(page);

            // Stop tracing and wait for completion
            await new Promise<void>((resolve) => {
                client.once('Tracing.tracingComplete', () => resolve());
                client.send('Tracing.end');
            });

            await client.detach();

            // Extract metrics using the same logic as scrollbar-performance.pw.spec.ts
            const metrics = this.extractMetrics(events);

            // Save metrics to file
            await this.saveMetrics(metrics, url);

            // eslint-disable-next-line no-console
            console.log('📊 CDP tracing metrics collected:', {
                layout: `${metrics.layoutCount} ops (${metrics.layoutDuration.toFixed(2)}ms)`,
                recalc: `${metrics.recalcStyleCount} ops (${metrics.recalcStyleDuration.toFixed(2)}ms)`,
            });
        } catch (error) {
            console.warn('CDP tracing performance collection failed:', error);
        }
    }

    /**
     * Executes basic page operations to trigger layout/recalc events
     * Simplified version of executeScrollScenario from scrollbar-performance.pw.spec.ts
     */
    private static async executeBasicPageOperations(page: Page): Promise<void> {
        // Wait for page to be stable
        await page.waitForTimeout(100);

        // Try to find and interact with common elements that might trigger layout/recalc
        try {
            // Look for tui-scrollbar elements (if any)
            const scrollbars = page.locator('tui-scrollbar');
            const scrollbarCount = await scrollbars.count();

            if (scrollbarCount > 0) {
                // eslint-disable-next-line no-console
                console.log(
                    `🔍 Found ${scrollbarCount} scrollbar elements, testing interactions...`,
                );

                for (let i = 0; i < Math.min(3, scrollbarCount); i++) {
                    const scrollbar = scrollbars.nth(i);

                    // Scroll operations that should trigger layout
                    await scrollbar.evaluate((el: HTMLElement) => {
                        if (el) {
                            el.scrollTop = 50;
                            el.scrollTop = 100;
                            el.scrollTop = 0;
                        }
                    });

                    // Style changes that should trigger recalc
                    await scrollbar.evaluate((el: HTMLElement) => {
                        if (el) {
                            const originalHeight = el.style.height;

                            el.style.height = '300px';
                            el.style.height = '350px';
                            el.style.height = originalHeight;
                        }
                    });
                }
            }

            // General DOM operations to trigger layout/recalc
            await page.evaluate(() => {
                // Add some dynamic content
                const testDiv = document.createElement('div');

                testDiv.innerHTML = 'Performance test content';
                testDiv.style.height = '50px';
                testDiv.style.width = '100px';
                testDiv.style.backgroundColor = '#f0f0f0';
                document.body.appendChild(testDiv);

                // Trigger style recalc by reading computed styles
                const computed = window.getComputedStyle(testDiv);

                // eslint-disable-next-line no-console
                console.log('Test element computed height:', computed.height);

                // Modify styles to trigger recalc
                testDiv.style.padding = '10px';
                testDiv.style.margin = '5px';

                // Force layout by reading dimensions
                const rect = testDiv.getBoundingClientRect();

                // eslint-disable-next-line no-console
                console.log('Test element rect:', rect.width, rect.height);

                // Clean up
                testDiv.remove();
            });

            await page.waitForTimeout(50);
        } catch (error) {
            console.warn('Basic page operations failed:', error);
        }
    }

    /**
     * Extracts performance metrics from CDP trace events
     * Same logic as scrollbar-performance.pw.spec.ts extractMetrics method
     */
    private static extractMetrics(
        events: readonly PerformanceEvent[],
    ): PerformanceMetrics {
        const metrics = {
            layoutCount: 0,
            recalcStyleCount: 0,
            layoutDuration: 0,
            recalcStyleDuration: 0,
        };

        for (const event of events) {
            // Focus on main thread timeline events (same filter as scrollbar-performance.pw.spec.ts)
            if (!event.cat?.includes('devtools.timeline')) {
                continue;
            }

            const durationMs = event.dur ? event.dur / 1000 : 0;

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

        return metrics;
    }

    /**
     * Saves test-specific metrics to file
     */
    private static async saveTestMetrics(
        metrics: PerformanceMetrics,
        testName: string,
        url: string,
        startTime: number,
    ): Promise<void> {
        const performanceData = {
            timestamp: Date.now(),
            testStartTime: startTime,
            testDuration: Date.now() - startTime,
            url: url,
            testName: testName,
            source: 'CDP-tracing-per-test',
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

        const filename = `performance-test-${safeTestName}-${Date.now()}.json`;
        const outputPath = resolve(
            process.cwd(),
            'projects/demo-playwright/tests-results',
            filename,
        );

        await writeFile(outputPath, JSON.stringify(performanceData, null, 2));
        // eslint-disable-next-line no-console
        console.log(`💾 Test performance data saved to: ${filename}`);
    }

    /**
     * Saves metrics to file in the same format as other performance tests
     */
    private static async saveMetrics(
        metrics: PerformanceMetrics,
        url: string,
    ): Promise<void> {
        const performanceData = {
            timestamp: Date.now(),
            url: url,
            testName: 'cdp-trace',
            source: 'CDP-tracing',
            metrics: {
                layoutCount: metrics.layoutCount,
                layoutDuration: Number(metrics.layoutDuration.toFixed(3)),
                recalcStyleCount: metrics.recalcStyleCount,
                recalcStyleDuration: Number(metrics.recalcStyleDuration.toFixed(3)),
            },
        };

        const filename = `performance-trace-${Date.now()}.json`;
        const outputPath = resolve(
            process.cwd(),
            'projects/demo-playwright/tests-results',
            filename,
        );

        await writeFile(outputPath, JSON.stringify(performanceData, null, 2));
        // eslint-disable-next-line no-console
        console.log('💾 CDP tracing data saved to:', filename);
    }
}
