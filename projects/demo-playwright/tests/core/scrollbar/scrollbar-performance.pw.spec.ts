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
    // Default to 10 for CI speed, can be increased with TUI_PERF_RUNS env var
    runsPerVariant: Number(process.env.TUI_PERF_RUNS || '10'),
    // Confidence level for statistical analysis (95% = 1.96, 99% = 2.576)
    confidenceLevel: 1.96,
} as const;

const LIMITS = {
    maxLayoutCount: Number(process.env.TUI_PERF_MAX_LAYOUT_COUNT || '500'),
    maxLayoutDurationMs: Number(process.env.TUI_PERF_MAX_LAYOUT_MS || '200'),
    maxRecalcCount: Number(process.env.TUI_PERF_MAX_RECALC_COUNT || '2000'),
    maxRecalcDurationMs: Number(process.env.TUI_PERF_MAX_RECALC_MS || '150'),
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
        disableMutation?: boolean;
        useOriginalScrollControls?: boolean;
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
     * Standardized scroll test scenario - designed to trigger Layout/RecalcStyle events
     */
    public static async executeScrollScenario(page: any): Promise<void> {
        // Focus on examples that trigger layout/recalc
        const exampleIndices = [0, 1, 8, 9, 10, 11, 12, 13]; // Include basic examples + complex ones

        for (const index of exampleIndices) {
            const example = page.locator('tui-doc-example').nth(index);

            await example.scrollIntoViewIfNeeded();
            await page.waitForTimeout(100); // Let initial layout settle

            const scrollContainer = example.locator('tui-scrollbar');

            // Test both scroll position changes AND content changes
            for (let i = 0; i < 15; i++) {
                // Scroll to trigger scrollbar updates
                await scrollContainer.evaluate(
                    (el: HTMLElement, scrollAmount: number) => {
                        el.scrollTop += scrollAmount;
                    },
                    50, // Fixed scroll amount for consistent results
                );

                // Add dynamic content to trigger dimension recalculations
                if (i % 3 === 0) {
                    await page.evaluate((iterIndex: number) => {
                        const containers = document.querySelectorAll('tui-scrollbar');

                        containers.forEach((container, idx) => {
                            if (idx === 0) {
                                // Only modify the first one to avoid too much noise
                                const div = document.createElement('div');

                                div.innerHTML = `Dynamic content ${iterIndex}`;
                                div.style.height = '20px';
                                container.appendChild(div);
                            }
                        });
                    }, i);
                }

                await page.waitForTimeout(8); // Faster than 16ms to stress test
            }

            // Phase 3: Style-only churn (no geometry changes)
            // Inject lightweight style once to ensure class toggles do not affect layout
            await page.addStyleTag({
                content: `
                    :root { --tui-perf-hue: 200; }
                    .t-style-toggle { color: hsl(var(--tui-perf-hue), 70%, 45%) !important; filter: saturate(1.05); }
                `,
            });

            for (let j = 0; j < 5; j++) {
                // Toggle classes on a batch of descendants to force RecalculateStyle
                await page.evaluate((exIdx: number) => {
                    const ex = document.querySelectorAll('tui-doc-example')[exIdx] as
                        | HTMLElement
                        | undefined;

                    if (!ex) {
                        return;
                    }

                    const container = ex.querySelector('tui-scrollbar');

                    if (!container) {
                        return;
                    }

                    const nodes = container.querySelectorAll('*');
                    let toggled = 0;

                    nodes.forEach((node) => {
                        if (node instanceof HTMLElement && toggled < 200) {
                            node.classList.toggle('t-style-toggle');
                            toggled++;
                        }
                    });
                }, index);

                // Flip a CSS variable to invalidate computed styles broadly without layout
                await page.evaluate(() => {
                    const root = document.documentElement;
                    const current = getComputedStyle(root)
                        .getPropertyValue('--tui-perf-hue')
                        .trim();

                    root.style.setProperty(
                        '--tui-perf-hue',
                        current === '200' ? '340' : '200',
                    );
                });

                await page.waitForTimeout(30);
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
        await page.addInitScript((config: TestVariant['config']) => {
            const {
                debounceMs,
                throttleMs,
                scheduler,
                pipeline,
                useGpuAcceleration,
                distinctMode,
                precision,
                disableMutation,
            } = config;

            // Clear all previous settings first
            sessionStorage.removeItem('tui-scrollbar-raf');
            sessionStorage.removeItem('tui-scroll-controls-raf');
            sessionStorage.removeItem('tui-scrollbar-no-mutation');
            sessionStorage.removeItem('tui-scrollbar-transform');
            sessionStorage.removeItem('tui-scrollbar-pipeline');

            sessionStorage.setItem('tui-scrollbar-debounce', debounceMs.toString());
            sessionStorage.setItem('tui-scrollbar-throttle', throttleMs.toString());
            // Align scroll-controls timings for fair comparisons
            sessionStorage.setItem('tui-scroll-controls-debounce', debounceMs.toString());
            sessionStorage.setItem('tui-scroll-controls-throttle', throttleMs.toString());
            sessionStorage.setItem('tui-scrollbar-scheduler', scheduler);

            // Set RAF mode for baseline test
            if (scheduler === 'raf') {
                sessionStorage.setItem('tui-scrollbar-raf', '1');

                // Optionally enable RAF for scroll-controls for a true baseline
                if (config.useOriginalScrollControls) {
                    sessionStorage.setItem('tui-scroll-controls-raf', '1');
                }
            }

            // Disable MutationObserver if requested
            if (disableMutation) {
                sessionStorage.setItem('tui-scrollbar-no-mutation', '1');
            }

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

        // Validate configuration was applied
        const configCheck = await page.evaluate(() => ({
            rafMode: sessionStorage.getItem('tui-scrollbar-raf'),
            rafScrollControls: sessionStorage.getItem('tui-scroll-controls-raf'),
            debounce: sessionStorage.getItem('tui-scrollbar-debounce'),
            throttle: sessionStorage.getItem('tui-scrollbar-throttle'),
            scDebounce: sessionStorage.getItem('tui-scroll-controls-debounce'),
            scThrottle: sessionStorage.getItem('tui-scroll-controls-throttle'),
            transform: sessionStorage.getItem('tui-scrollbar-transform'),
            noMutation: sessionStorage.getItem('tui-scrollbar-no-mutation'),
        }));

        console.info(
            `    🔧 Config applied: RAF=${configCheck.rafMode}/${configCheck.rafScrollControls}, debounce=${configCheck.debounce}/${configCheck.scDebounce}ms, throttle=${configCheck.throttle}/${configCheck.scThrottle}ms, transform=${configCheck.transform}, noMutation=${configCheck.noMutation}`,
        );
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
                includedCategories: [
                    'devtools.timeline',
                    'blink.user_timing',
                    'blink_style',
                    'blink',
                ],
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
                case 'UpdateLayoutTree':
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

        const q1 = durations[Math.floor(durations.length * 0.25)] ?? 0;
        const q3 = durations[Math.floor(durations.length * 0.75)] ?? 0;
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
}

// ========================================================================================
// Test Variants Configuration (Delay Sweep)
// ========================================================================================

function buildRange(start: number, end: number, step: number): number[] {
    const out: number[] = [];

    for (let v = start; v <= end; v += step) {
        out.push(v);
    }

    return out;
}

const RAW_DELAY_VALUES: number[] = [
    0,
    ...buildRange(10, 20, 2),
    ...buildRange(20, 50, 5),
    ...buildRange(50, 100, 10),
    ...buildRange(100, 300, 50),
];

// Deduplicate overlapping edges (20, 50, 100) and sort
const DELAY_VALUES: number[] = Array.from(new Set(RAW_DELAY_VALUES)).sort(
    (a, b) => a - b,
);

function makeVariant(arch: 'events' | 'gpu' | 'raf', delayMs: number): TestVariant {
    const base = {
        debounceMs: delayMs,
        throttleMs: delayMs,
    } as const;

    switch (arch) {
        case 'events':
            return {
                name: `sweep-events-${delayMs}ms`,
                description: 'Event-driven (Resize + Mutation) with unified timings',
                config: {
                    ...base,
                    scheduler: 'microtask',
                },
            };
        case 'raf':
            return {
                name: `sweep-raf-${delayMs}ms`,
                description:
                    'RAF in BOTH scroll-controls and directive (baseline polling) with unified timings',
                config: {
                    ...base,
                    scheduler: 'raf',
                    useOriginalScrollControls: true,
                },
            };
        case 'gpu':
        default:
            return {
                name: `sweep-gpu-${delayMs}ms`,
                description:
                    'Event-driven + GPU transforms (transform/scale) with unified timings',
                config: {
                    ...base,
                    scheduler: 'microtask',
                    useGpuAcceleration: true,
                },
            };
    }
}

const TEST_VARIANTS: readonly TestVariant[] = [
    ...DELAY_VALUES.map((d) => makeVariant('raf', d)),
    ...DELAY_VALUES.map((d) => makeVariant('events', d)),
    ...DELAY_VALUES.map((d) => makeVariant('gpu', d)),
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

        // Also print compact CI-friendly summary table
        this.printSummaryTable();
    }

    private static printSummaryTable(): void {
        const rows = Array.from(this.results.values()).map(({variant, summary}) => ({
            name: variant.name,
            layoutCount: summary.layoutCount,
            layoutMs: summary.layoutDuration,
            recalcCount: summary.recalcStyleCount,
            recalcMs: summary.recalcStyleDuration,
        }));

        if (!rows.length) {
            return;
        }

        const headers = [
            'Variant',
            'Layout (ops)',
            'Layout (ms)',
            'Recalc (ops)',
            'Recalc (ms)',
        ];
        const data = rows.map((r) => [
            r.name,
            r.layoutCount.toFixed(1),
            r.layoutMs.toFixed(2),
            r.recalcCount.toFixed(1),
            r.recalcMs.toFixed(2),
        ]);

        const colWidths: number[] = headers.map((h, i) =>
            Math.max(h.length, ...data.map((row) => row[i]!.length)),
        );

        const pad = (text: string, i: number): string => text.padEnd(colWidths[i]!, ' ');

        console.info('\n===== Scrollbar Performance Summary =====');
        console.info(headers.map((h, i) => pad(h, i)).join('  '));
        console.info(colWidths.map((w) => '-'.repeat(w)).join('  '));

        for (const row of data) {
            console.info(row.map((cell, i) => pad(cell, i)).join('  '));
        }

        console.info('========================================\n');
    }
}

// ========================================================================================
// Test Suite
// ========================================================================================

test.describe('TuiScrollbar Performance Analysis @perf', () => {
    // Allow opting into parallel mode for faster local runs
    if (process.env.TUI_PERF_PARALLEL === '1') {
        test.describe.configure({mode: 'parallel'});
    } else {
        // Default: serial for stable CDP tracing and consistent timings in CI
        test.describe.configure({mode: 'serial'});
    }

    test.setTimeout(120000); // 2 minutes per test

    test.beforeEach(async ({page, browserName}) => {
        // eslint-disable-next-line playwright/no-skipped-test
        test.skip(browserName !== 'chromium', 'Perf/CDP suite runs only on Chromium');
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

            // Performance regression checks (configurable via env for local runs)
            expect(summary.layoutCount).toBeLessThan(LIMITS.maxLayoutCount);
            expect(summary.layoutDuration).toBeLessThan(LIMITS.maxLayoutDurationMs);
            expect(summary.recalcStyleCount).toBeLessThan(LIMITS.maxRecalcCount);
            expect(summary.recalcStyleDuration).toBeLessThan(LIMITS.maxRecalcDurationMs);

            console.info(
                `    📈 Layout: ${summary.layoutCount.toFixed(1)} ± ${summary.standardDeviation.layoutCount.toFixed(1)} operations`,
            );
            console.info(
                `    ⏱️  Duration: ${summary.layoutDuration.toFixed(2)} ± ${summary.standardDeviation.layoutDuration.toFixed(2)}ms`,
            );
            console.info(
                `    🎯 Confidence: [${summary.confidence.layoutCount[0].toFixed(1)}, ${summary.confidence.layoutCount[1].toFixed(1)}] operations`,
            );
            // RecalculateStyles metrics
            console.info(
                `    🧩 Recalc: ${summary.recalcStyleCount.toFixed(1)} ± ${summary.standardDeviation.recalcStyleCount.toFixed(1)} operations`,
            );
            console.info(
                `    🧮 Recalc Duration: ${summary.recalcStyleDuration.toFixed(2)} ± ${summary.standardDeviation.recalcStyleDuration.toFixed(2)}ms`,
            );
            console.info(
                `    🎯 Recalc CI: [${summary.confidence.recalcStyleCount[0].toFixed(1)}, ${summary.confidence.recalcStyleCount[1].toFixed(1)}] operations`,
            );
        });
    }

    test.afterAll(async () => {
        await ResultsManager.saveResults();
    });
});
