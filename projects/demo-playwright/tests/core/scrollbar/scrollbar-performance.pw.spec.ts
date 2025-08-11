import fs from 'node:fs';

import {expect, test} from '@playwright/test';
import path from 'path';

/**
 * TuiScrollbar Performance Analysis Suite
 *
 * This suite measures performance impact using Chrome DevTools Protocol (CDP) tracing
 * to capture Layout and RecalculateStyles events during scrollbar interactions.
 *
 * Statistical methodology:
 * - Multiple runs per variant for statistical significance
 * - Outlier detection and filtering
 * - Confidence intervals and standard deviation calculation
 *
 * Related documentation:
 * - Chrome DevTools Protocol Tracing: https://chromedevtools.github.io/devtools-protocol/tot/Tracing/
 * - Playwright CDP Session: https://playwright.dev/docs/api/class-cdpsession
 * - Performance Timeline API: https://w3c.github.io/performance-timeline/
 * - CSS Overflow Module: https://drafts.csswg.org/css-overflow-3/
 */

// ========================================================================================
// Configuration and Types
// ========================================================================================

const CONFIG = {
    outputDir: path.join(__dirname, '..', '..', 'tests-results'),
    baseUrl: 'http://localhost:3333/components/scrollbar',
    // Statistical significance analysis suggests 50-100 runs for robust confidence intervals
    // 25 runs = good baseline, 50 runs = production-ready, 100+ runs = publication-quality
    runsPerVariant: Number(process.env.TUI_PERF_RUNS || '50'),
    // Confidence level for statistical analysis (95% = 1.96, 99% = 2.576)
    confidenceLevel: 1.96,
} as const;

interface PerformanceEvent {
    name: string;
    ts: number;
    dur?: number;
    args?: any;
    cat?: string;
}

interface PerformanceMetrics {
    layoutCount: number;
    recalcStyleCount: number;
    layoutDuration: number;
    recalcStyleDuration: number;
}

interface StatisticalSummary extends PerformanceMetrics {
    confidence: {
        layoutCount: [number, number];
        layoutDuration: [number, number];
        recalcStyleCount: [number, number];
        recalcStyleDuration: [number, number];
    };
    standardDeviation: {
        layoutCount: number;
        layoutDuration: number;
        recalcStyleCount: number;
        recalcStyleDuration: number;
    };
}

interface TestVariant {
    name: string;
    description: string;
    config: {
        debounceMs: number;
        throttleMs: number;
        scheduler: 'idle' | 'immediate' | 'microtask' | 'raf';
        pipeline?: 'audit' | 'throttle';
        useGpuAcceleration?: boolean;
        distinctMode?: 'derived' | 'full';
        precision?: number;
    };
}

interface TestResult {
    variant: TestVariant;
    runs: PerformanceMetrics[];
    summary: StatisticalSummary;
    timestamp: number;
}

// ========================================================================================
// Performance Measurement Core
// ========================================================================================

class PerformanceMeasurer {
    /**
     * Extracts performance metrics from CDP trace events
     * Filters for relevant devtools.timeline events
     */
    public static extractMetrics(
        events: readonly PerformanceEvent[],
    ): PerformanceMetrics {
        const metrics = {
            layoutCount: 0,
            recalcStyleCount: 0,
            layoutDuration: 0,
            recalcStyleDuration: 0,
        };

        for (const event of events) {
            // Focus on main thread timeline events
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
                    metrics.recalcStyleCount++;
                    metrics.recalcStyleDuration += durationMs;
                    break;
            }
        }

        return metrics;
    }

    /**
     * Statistical analysis with outlier detection and confidence intervals
     */
    public static calculateStatistics(runs: PerformanceMetrics[]): StatisticalSummary {
        // Remove outliers using IQR method
        const filteredRuns = this.removeOutliers(runs);

        const metrics = [
            'layoutCount',
            'layoutDuration',
            'recalcStyleCount',
            'recalcStyleDuration',
        ] as const;
        const summary: any = {};
        const confidence: any = {};
        const standardDeviation: any = {};

        for (const metric of metrics) {
            const values = filteredRuns.map((run) => run[metric]);
            const mean = values.reduce((a, b) => a + b, 0) / values.length;
            const stdDev = this.standardDeviation(values);
            const marginOfError =
                (CONFIG.confidenceLevel * stdDev) / Math.sqrt(values.length);

            summary[metric] = mean;
            standardDeviation[metric] = stdDev;
            confidence[metric] = [mean - marginOfError, mean + marginOfError];
        }

        return {...summary, confidence, standardDeviation};
    }

    private static removeOutliers(runs: PerformanceMetrics[]): PerformanceMetrics[] {
        if (runs.length < 4) {
            return runs;
        }

        // Use layoutDuration as primary metric for outlier detection
        const durations = runs.map((run) => run.layoutDuration);

        durations.sort((a, b) => a - b);

        const q1 = durations[Math.floor(durations.length * 0.25)];
        const q3 = durations[Math.floor(durations.length * 0.75)];
        const iqr = q3 - q1;
        const lowerBound = q1 - 1.5 * iqr;
        const upperBound = q3 + 1.5 * iqr;

        return runs.filter(
            (run) => run.layoutDuration >= lowerBound && run.layoutDuration <= upperBound,
        );
    }

    private static standardDeviation(values: number[]): number {
        const mean = values.reduce((a, b) => a + b, 0) / values.length;
        const variance =
            values.reduce((a, b) => a + Math.pow(b - mean, 2), 0) / values.length;

        return Math.sqrt(variance);
    }

    /**
     * Sets up controlled test environment
     */
    public static async setupTestEnvironment(page: any): Promise<any> {
        const client = await page.context().newCDPSession(page);

        // Ensure consistent performance conditions
        await client.send('Emulation.setCPUThrottlingRate', {rate: 1});

        await page.waitForLoadState('networkidle');
        await page.waitForTimeout(500); // Stabilization time

        return client;
    }

    /**
     * Standardized scroll test scenario
     */
    public static async executeScrollScenario(page: any): Promise<void> {
        // Focus on complex examples that trigger layout/recalc
        const exampleIndices = [8, 9, 10, 11, 12, 13]; // Table, image grid, CSS grid, flexbox, positioning

        for (const index of exampleIndices) {
            const example = page.locator('tui-doc-example').nth(index);

            await example.scrollIntoViewIfNeeded();

            const scrollContainer = example.locator('tui-scrollbar');

            // Simulate realistic user scrolling patterns
            for (let i = 0; i < 10; i++) {
                await scrollContainer.evaluate(
                    (el, scrollAmount) => {
                        el.scrollTop += scrollAmount;
                    },
                    50 + Math.random() * 50,
                ); // Variable scroll amounts

                await page.waitForTimeout(16); // ~60fps
            }

            await page.waitForTimeout(50); // Brief pause between examples
        }
    }

    /**
     * Applies test variant configuration
     */
    public static async applyVariantConfig(
        page: any,
        variant: TestVariant,
    ): Promise<void> {
        await page.addInitScript((config) => {
            const {
                debounceMs,
                throttleMs,
                scheduler,
                pipeline,
                useGpuAcceleration,
                distinctMode,
                precision,
            } = config;

            sessionStorage.setItem('tui-scrollbar-debounce', debounceMs.toString());
            sessionStorage.setItem('tui-scrollbar-throttle', throttleMs.toString());
            sessionStorage.setItem('tui-scrollbar-scheduler', scheduler);

            if (pipeline) {
                sessionStorage.setItem('tui-scrollbar-pipeline', pipeline);
            }

            if (useGpuAcceleration !== undefined) {
                sessionStorage.setItem(
                    'tui-scrollbar-transform',
                    useGpuAcceleration ? '1' : '0',
                );
            }

            if (distinctMode) {
                sessionStorage.setItem('tui-scrollbar-distinct', distinctMode);
            }

            if (precision) {
                sessionStorage.setItem('tui-scrollbar-precision', precision.toString());
            }
        }, variant.config);

        await page.reload();
        await page.waitForLoadState('networkidle');
    }

    /**
     * Captures performance trace with proper CDP parameters
     */
    public static async capturePerformanceTrace(page: any): Promise<PerformanceEvent[]> {
        const client = await this.setupTestEnvironment(page);
        const events: PerformanceEvent[] = [];

        // Set up event collection
        client.on('Tracing.dataCollected', (data: any) => {
            if (data.value && Array.isArray(data.value)) {
                events.push(...data.value);
            }
        });

        // Start tracing with correct parameters for current CDP version
        await client.send('Tracing.start', {
            traceConfig: {
                includedCategories: ['devtools.timeline', 'blink.user_timing'],
                excludedCategories: ['disabled-by-default*'],
            },
        });

        // Execute test scenario
        await this.executeScrollScenario(page);

        // Stop tracing and wait for completion
        await new Promise<void>((resolve) => {
            client.once('Tracing.tracingComplete', () => resolve());
            client.send('Tracing.end');
        });

        await client.detach();

        return events;
    }
}

// ========================================================================================
// Test Variants Configuration
// ========================================================================================

const TEST_VARIANTS: readonly TestVariant[] = [
    {
        name: 'baseline-raf',
        description: 'Baseline implementation using requestAnimationFrame polling',
        config: {
            debounceMs: 100,
            throttleMs: 16,
            scheduler: 'raf',
        },
    },
    {
        name: 'optimized-event-driven',
        description: 'Event-driven architecture with observers',
        config: {
            debounceMs: 50,
            throttleMs: 10,
            scheduler: 'microtask',
        },
    },
    {
        name: 'gpu-accelerated',
        description: 'Event-driven with GPU-accelerated transforms',
        config: {
            debounceMs: 50,
            throttleMs: 10,
            scheduler: 'microtask',
            useGpuAcceleration: true,
        },
    },
];

// ========================================================================================
// Results Management
// ========================================================================================

class ResultsManager {
    private static readonly results = new Map<string, TestResult>();

    public static addResult(result: TestResult): void {
        this.results.set(result.variant.name, result);
    }

    public static async saveResults(): Promise<void> {
        const outputPath = path.join(
            CONFIG.outputDir,
            'scrollbar-performance-results.json',
        );
        const aggregatedResults = {
            metadata: {
                runsPerVariant: CONFIG.runsPerVariant,
                confidenceLevel: CONFIG.confidenceLevel,
                timestamp: new Date().toISOString(),
                variants: TEST_VARIANTS.length,
            },
            results: Object.fromEntries(this.results),
        };

        if (!fs.existsSync(CONFIG.outputDir)) {
            fs.mkdirSync(CONFIG.outputDir, {recursive: true});
        }

        await fs.promises.writeFile(
            outputPath,
            JSON.stringify(aggregatedResults, null, 2),
            'utf8',
        );

        console.info(`✅ Performance results saved to: ${outputPath}`);
        console.info(
            `📊 Tested ${this.results.size} variants with ${CONFIG.runsPerVariant} runs each`,
        );
        console.info(
            `📈 Statistical significance: ${CONFIG.confidenceLevel}σ confidence intervals`,
        );
    }
}

// ========================================================================================
// Test Suite
// ========================================================================================

test.describe('TuiScrollbar Performance Analysis', () => {
    test.setTimeout(120000); // 2 minutes per test

    test.beforeEach(async ({page}) => {
        await page.goto(CONFIG.baseUrl);
        await page.waitForLoadState('networkidle');
    });

    for (const variant of TEST_VARIANTS) {
        test(`Performance: ${variant.name}`, async ({page}) => {
            console.info(`🧪 Testing variant: ${variant.name}`);
            console.info(`📝 Description: ${variant.description}`);

            await PerformanceMeasurer.applyVariantConfig(page, variant);

            const runs: PerformanceMetrics[] = [];

            // Multiple runs for statistical significance
            for (let run = 0; run < CONFIG.runsPerVariant; run++) {
                console.info(`  📊 Run ${run + 1}/${CONFIG.runsPerVariant}`);

                try {
                    const events =
                        await PerformanceMeasurer.capturePerformanceTrace(page);
                    const metrics = PerformanceMeasurer.extractMetrics(events);

                    runs.push(metrics);

                    // Basic sanity checks
                    expect(metrics.layoutCount).toBeGreaterThanOrEqual(0);
                    expect(metrics.layoutDuration).toBeGreaterThanOrEqual(0);
                    expect(metrics.recalcStyleCount).toBeGreaterThanOrEqual(0);
                    expect(metrics.recalcStyleDuration).toBeGreaterThanOrEqual(0);
                } catch (error) {
                    console.warn(`❌ Run ${run + 1} failed:`, error);
                    // Continue with other runs - some variance is expected
                }

                // Brief pause between runs
                await page.waitForTimeout(200);
            }

            expect(runs.length).toBeGreaterThan(CONFIG.runsPerVariant * 0.8); // Allow some failures

            const summary = PerformanceMeasurer.calculateStatistics(runs);

            const result: TestResult = {
                variant,
                runs,
                summary,
                timestamp: Date.now(),
            };

            ResultsManager.addResult(result);

            // Performance regression checks
            expect(summary.layoutCount).toBeLessThan(500); // Reasonable upper bound
            expect(summary.layoutDuration).toBeLessThan(200); // ms
            expect(summary.recalcStyleCount).toBeLessThan(400);
            expect(summary.recalcStyleDuration).toBeLessThan(150);

            console.info(
                `    📈 Layout: ${summary.layoutCount.toFixed(1)} ± ${summary.standardDeviation.layoutCount.toFixed(1)} operations`,
            );
            console.info(
                `    ⏱️  Duration: ${summary.layoutDuration.toFixed(2)} ± ${summary.standardDeviation.layoutDuration.toFixed(2)}ms`,
            );
            console.info(
                `    🎯 Confidence: [${summary.confidence.layoutCount[0].toFixed(1)}, ${summary.confidence.layoutCount[1].toFixed(1)}] operations`,
            );
        });
    }

    test.afterAll(async () => {
        await ResultsManager.saveResults();
    });
});
