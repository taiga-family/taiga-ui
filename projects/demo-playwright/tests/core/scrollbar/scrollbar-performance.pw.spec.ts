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
    // Save under projects/demo-playwright/tests-results (single canonical folder)
    outputDir: path.join(__dirname, '..', '..', '..', 'tests-results'),
    baseUrl: 'http://localhost:3333/components/scrollbar',
    // Statistical significance analysis suggests 50-100 runs for robust confidence intervals
    // 25 runs = good baseline, 50 runs = production-ready, 100+ runs = publication-quality
    // Default to 10 for CI speed, can be increased with ITERATIONS_PER_CONFIGURATION env var
    runsPerVariant: Number(process.env.ITERATIONS_PER_CONFIGURATION || '10'),
    // Confidence level for statistical analysis (95% = 1.96, 99% = 2.576)
    confidenceLevel: 1.96,
} as const;

// Limits removed: no threshold-based assertions or warnings during perf runs

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
        scheduler: 'microtask' | 'raf';
        useGpuAcceleration?: boolean;
    };
}

interface TestResult {
    variant: TestVariant;
    runs: PerformanceMetrics[];
    summary: StatisticalSummary;
    timestamp: number;
}

interface ParsedVariantKey {
    family: 'events' | 'events+transform(gpu)' | 'other' | 'raf';
    debounceMs?: number;
    throttleMs: number;
}

interface Recommendation {
    family: 'events' | 'events+transform(gpu)' | 'raf';
    name: string;
    debounceMs?: number;
    throttleMs: number;
    score: number;
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
            const {debounceMs, throttleMs, scheduler, useGpuAcceleration} = config;

            // Clear all previous settings first
            sessionStorage.removeItem('tui-scrollbar-raf');

            sessionStorage.removeItem('tui-scrollbar-transform');
            sessionStorage.setItem('tui-scrollbar-debounce', debounceMs.toString());
            sessionStorage.setItem('tui-scrollbar-throttle', throttleMs.toString());
            // Align scroll-controls timings for fair comparisons
            sessionStorage.setItem('tui-scroll-controls-debounce', debounceMs.toString());
            sessionStorage.setItem('tui-scroll-controls-throttle', throttleMs.toString());

            // Set RAF mode for baseline test
            if (scheduler === 'raf') {
                sessionStorage.setItem('tui-scrollbar-raf', '1');
            }

            if (useGpuAcceleration !== undefined) {
                sessionStorage.setItem(
                    'tui-scrollbar-transform',
                    useGpuAcceleration ? '1' : '0',
                );
            }
        }, variant.config);

        await page.reload();
        await page.waitForLoadState('networkidle');

        // Validate configuration was applied
        const configCheck = await page.evaluate(() => ({
            rafMode: sessionStorage.getItem('tui-scrollbar-raf'),

            debounce: sessionStorage.getItem('tui-scrollbar-debounce'),
            throttle: sessionStorage.getItem('tui-scrollbar-throttle'),
            scDebounce: sessionStorage.getItem('tui-scroll-controls-debounce'),
            scThrottle: sessionStorage.getItem('tui-scroll-controls-throttle'),
            transform: sessionStorage.getItem('tui-scrollbar-transform'),
        }));

        console.info(
            `    🔧 Config applied: RAF=${configCheck.rafMode}/${configCheck.rafScrollControls}, debounce=${configCheck.debounce}/${configCheck.scDebounce}ms, throttle=${configCheck.throttle}/${configCheck.scThrottle}ms, transform=${configCheck.transform}`,
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
        const median: any = {};

        for (const metric of metrics) {
            const values = filteredRuns.map((run) => run[metric]);
            const mean = values.reduce((a, b) => a + b, 0) / values.length;
            const stdDev = this.standardDeviation(values);
            const med = this.median(values);
            const marginOfError =
                (CONFIG.confidenceLevel * stdDev) / Math.sqrt(values.length);

            summary[metric] = mean;
            standardDeviation[metric] = stdDev;
            median[metric] = med;
            confidence[metric] = [mean - marginOfError, mean + marginOfError];
        }

        return {...summary, confidence, standardDeviation, median};
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

    private static median(values: number[]): number {
        if (!values.length) {
            return 0;
        }

        const arr = [...values].sort((a, b) => a - b);
        const mid = Math.floor(arr.length / 2);

        return arr.length % 2 === 0 ? (arr[mid - 1]! + arr[mid]!) / 2 : arr[mid]!;
    }
}

// ========================================================================================
// Test Variants Configuration (Targeted Ranges)
// ========================================================================================

function range(start: number, end: number, step: number): number[] {
    const out: number[] = [];

    for (let v = start; v <= end; v += step) {
        out.push(v);
    }

    return out;
}

// Debounce for Resize/Mutation (ms)
const DEBOUNCE_VALUES: number[] = range(50, 100, 10); // 50,60,70,80,90,100

// Throttle for Scroll (ms)
const SCROLL_THROTTLE_VALUES: number[] = range(0, 16, 2); // 0..16 by 2

// RAF throttle (ms) baseline + extended sweep (include 12,14,16 and current prod 100)
const RAF_THROTTLE_VALUES: number[] = Array.from(
    new Set([100, 12, 14, 16, ...range(0, 10, 2)]),
).sort((a, b) => a - b);

function makeEventVariant(
    debounceMs: number,
    throttleMs: number,
    withGpu: boolean,
): TestVariant {
    const title = withGpu ? 'events+transform(gpu)' : 'events';

    return {
        name: `${title}-debounce${debounceMs}ms-throttling${throttleMs}ms`,
        description: `${title} with separate debounce (RO/MO) and throttle (scroll)`,
        config: {
            debounceMs,
            throttleMs,
            scheduler: 'microtask',
            ...(withGpu ? {useGpuAcceleration: true} : {}),
        },
    };
}

function makeRafVariant(throttleMs: number): TestVariant {
    return {
        name: `raf-throttling${throttleMs}ms`,
        description:
            'RAF in BOTH scroll-controls and directive (baseline polling), throttle on RAF stream',
        config: {
            debounceMs: 0,
            throttleMs,
            scheduler: 'raf',
        },
    };
}

const TEST_VARIANTS: readonly TestVariant[] = [
    // RAF baseline
    ...RAF_THROTTLE_VALUES.map((t) => makeRafVariant(t)),
    // Event-driven without GPU
    ...DEBOUNCE_VALUES.flatMap((d) =>
        SCROLL_THROTTLE_VALUES.map((t) => makeEventVariant(d, t, false)),
    ),
    // Event-driven with GPU transforms
    ...DEBOUNCE_VALUES.flatMap((d) =>
        SCROLL_THROTTLE_VALUES.map((t) => makeEventVariant(d, t, true)),
    ),
];

// ========================================================================================
// Results Management
// ========================================================================================

class ResultsManager {
    private static readonly results = new Map<string, TestResult>();

    public static addResult(result: TestResult): void {
        this.results.set(result.variant.name, result);
    }

    public static getResultByName(name: string): TestResult | undefined {
        return this.results.get(name);
    }

    public static async saveResults(): Promise<void> {
        const outputPath = path.join(
            CONFIG.outputDir,
            'scrollbar-performance-results.json',
        );
        const recommendation = this.computeRecommendation();
        const aggregatedResults = {
            metadata: {
                runsPerVariant: CONFIG.runsPerVariant,
                confidenceLevel: CONFIG.confidenceLevel,
                timestamp: new Date().toISOString(),
                variants: TEST_VARIANTS.length,
            },
            results: Object.fromEntries(this.results),
            recommendation,
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

        // Create a simple SVG chart artifact highlighting the recommendation
        try {
            const svgPath = path.join(
                CONFIG.outputDir,
                'scrollbar-performance-recommendation.svg',
            );

            await this.writeRecommendationSvg(svgPath, recommendation);
            console.info(`🖼  Wrote recommendation chart: ${svgPath}`);
        } catch (e) {
            console.warn('Failed to write recommendation SVG:', e);
        }
    }

    private static printSummaryTable(): void {
        const rows = Array.from(this.results.values()).map(({variant, summary}) => ({
            name: variant.name,
            layoutCountMean: summary.layoutCount,
            layoutCountMedian: (summary as any).median?.layoutCount as number,
            recalcCountMean: summary.recalcStyleCount,
            recalcCountMedian: (summary as any).median?.recalcStyleCount as number,
        }));

        if (!rows.length) {
            return;
        }

        const headers = [
            'Variant',
            'Layout (ops) mean',
            'Layout (ops) median',
            'Recalc (ops) mean',
            'Recalc (ops) median',
        ];
        const data = rows.map((r) => [
            r.name,
            r.layoutCountMean.toFixed(1),
            (r.layoutCountMedian ?? r.layoutCountMean).toFixed(1),
            r.recalcCountMean.toFixed(1),
            (r.recalcCountMedian ?? r.recalcCountMean).toFixed(1),
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

    private static parseVariantKey(name: string): ParsedVariantKey {
        if (name.startsWith('raf-throttling')) {
            const m = /^raf-throttling(\d+)ms$/.exec(name);

            return {family: 'raf', throttleMs: Number(m?.[1] || 0)};
        }

        const evGpu = /^events\+transform\(gpu\)-debounce(\d+)ms-throttling(\d+)ms$/.exec(
            name,
        );

        if (evGpu) {
            return {
                family: 'events+transform(gpu)',
                debounceMs: Number(evGpu[1]!),
                throttleMs: Number(evGpu[2]!),
            };
        }

        const ev = /^events-debounce(\d+)ms-throttling(\d+)ms$/.exec(name);

        if (ev) {
            return {
                family: 'events',
                debounceMs: Number(ev[1]!),
                throttleMs: Number(ev[2]!),
            };
        }

        return {family: 'other', throttleMs: 0};
    }

    private static compositeScore(s: StatisticalSummary): number {
        const med = (s as any).median as
            | {layoutDuration: number; recalcStyleDuration: number}
            | undefined;
        const layout = med?.layoutDuration ?? s.layoutDuration;
        const recalc = med?.recalcStyleDuration ?? s.recalcStyleDuration;

        return layout + recalc;
    }

    private static pickElbow(
        rows: ReadonlyArray<{name: string; key: ParsedVariantKey; score: number}>,
    ): {name: string; key: ParsedVariantKey; score: number} {
        let pick = rows[0]!;

        for (let i = 1; i < rows.length; i++) {
            const prev = rows[i - 1]!;
            const curr = rows[i]!;
            const improvement = (prev.score - curr.score) / prev.score;

            if (improvement < 0.05) {
                pick = curr;
                break;
            }

            pick = curr;
        }

        return pick;
    }

    private static computeRecommendation(): Recommendation | undefined {
        const entries = Array.from(this.results.values());

        if (!entries.length) {
            return undefined;
        }

        // Group by family
        const groups = new Map<string, TestResult[]>();

        for (const r of entries) {
            const key = this.parseVariantKey(r.variant.name).family;

            if (key === 'other') {
                continue;
            }

            groups.set(key, [...(groups.get(key) || []), r]);
        }

        const candidates: Recommendation[] = [];

        for (const [family, arr] of groups) {
            if (family === 'raf') {
                // Elbow along throttle for RAF
                const rows = arr
                    .map((x) => ({
                        key: this.parseVariantKey(x.variant.name),
                        score: this.compositeScore(x.summary),
                        name: x.variant.name,
                    }))
                    .sort((a, b) => a.key.throttleMs - b.key.throttleMs);

                const pick = this.pickElbow(rows);

                candidates.push({
                    family: 'raf',
                    name: pick.name,
                    throttleMs: pick.key.throttleMs,
                    score: pick.score,
                });
            } else {
                // For events families, do elbow along throttle for each debounce, then pick best
                const byDebounce = new Map<
                    number,
                    Array<{name: string; key: ParsedVariantKey; score: number}>
                >();

                for (const x of arr) {
                    const key = this.parseVariantKey(x.variant.name);

                    if (key.debounceMs === undefined) {
                        continue;
                    }

                    const score = this.compositeScore(x.summary);
                    const list = byDebounce.get(key.debounceMs) || [];

                    list.push({name: x.variant.name, key, score});
                    byDebounce.set(key.debounceMs, list);
                }

                let best:
                    | {name: string; key: ParsedVariantKey; score: number}
                    | undefined;

                for (const [, list] of byDebounce) {
                    const rows = list.sort((a, b) => a.key.throttleMs - b.key.throttleMs);
                    const pick = this.pickElbow(rows);

                    if (!best || pick.score < best.score) {
                        best = pick;
                    }
                }

                if (best) {
                    candidates.push({
                        family: family as Recommendation['family'],
                        name: best.name,
                        debounceMs: best.key.debounceMs,
                        throttleMs: best.key.throttleMs,
                        score: best.score,
                    });
                }
            }
        }

        // Overall best by score
        candidates.sort((a, b) => a.score - b.score);
        const winner = candidates[0];

        return winner;
    }

    private static async writeRecommendationSvg(
        outPath: string,
        rec?: Recommendation,
    ): Promise<void> {
        // Build a simple line plot of composite score vs throttle for the recommended family
        if (!rec) {
            return;
        }

        const entries = Array.from(this.results.values());
        const family = rec.family;
        const list = entries.filter((r) => {
            const k = this.parseVariantKey(r.variant.name);

            if (k.family !== family) {
                return false;
            }

            if (family === 'raf') {
                return true;
            }

            return k.debounceMs === rec.debounceMs;
        });
        const points = list
            .map((x) => ({
                k: this.parseVariantKey(x.variant.name),
                s: this.compositeScore(x.summary),
            }))
            .sort((a, b) => a.k.throttleMs - b.k.throttleMs);

        const w = 800;
        const h = 400;
        const pad = 50;
        const xs = points.map((p) => p.k.throttleMs);
        const ys = points.map((p) => p.s);
        const xmin = Math.min(...xs);
        const xmax = Math.max(...xs);
        const ymin = Math.min(...ys);
        const ymax = Math.max(...ys);
        const xscale = (x: number): number =>
            pad + ((x - xmin) / (xmax - xmin || 1)) * (w - 2 * pad);
        const yscale = (y: number): number =>
            h - pad - ((y - ymin) / (ymax - ymin || 1)) * (h - 2 * pad);

        const pathD = points
            .map((p, i) => `${i ? 'L' : 'M'}${xscale(p.k.throttleMs)},${yscale(p.s)}`)
            .join(' ');

        const recX = xscale(rec.throttleMs);
        const recY = yscale(
            points.find((p) => p.k.throttleMs === rec.throttleMs)?.s ?? ymin,
        );

        const svg =
            '<?xml version="1.0" encoding="UTF-8"?>\n' +
            `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}">\n` +
            `  <rect x="0" y="0" width="${w}" height="${h}" fill="#fff"/>\n` +
            '  <g stroke="#ccc">\n' +
            `    <line x1="${pad}" y1="${h - pad}" x2="${w - pad}" y2="${h - pad}"/>\n` +
            `    <line x1="${pad}" y1="${pad}" x2="${pad}" y2="${h - pad}"/>\n` +
            '  </g>\n' +
            `  <path d="${pathD}" fill="none" stroke="#007acc" stroke-width="2"/>\n` +
            `  ${points
                .map(
                    (p) =>
                        `<circle cx="${xscale(p.k.throttleMs)}" cy="${yscale(
                            p.s,
                        )}" r="3" fill="#007acc"/>`,
                )
                .join('')}\n` +
            `  <circle cx="${recX}" cy="${recY}" r="6" fill="red"/>\n` +
            `  <text x="${pad}" y="20" font-family="monospace" font-size="14">${family} recommended: throttle=${rec.throttleMs}ms$${
                rec.debounceMs ? `, debounce=${rec.debounceMs}ms` : ''
            }</text>\n` +
            '</svg>';

        await fs.promises.writeFile(outPath, svg, 'utf8');
    }
}

// ========================================================================================
// Test Suite
// ========================================================================================

test.describe('TuiScrollbar Performance Analysis @scrollbar', {tag: '@scrollbar'}, () => {
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

    // Log planned configurations once before tests start
    test.beforeAll(() => {
        console.info('Planned configurations:');

        for (const v of TEST_VARIANTS) {
            console.info(`  - ${v.name}`);
        }
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

            // Threshold-based assertions removed: metrics are reported, not enforced

            console.info(
                `    📈 Layout: ${summary.layoutCount.toFixed(1)} ± ${summary.standardDeviation.layoutCount.toFixed(1)} operations`,
            );
            console.info(
                `    ⏱️  Duration: ${summary.layoutDuration.toFixed(2)} ± ${summary.standardDeviation.layoutDuration.toFixed(2)}ms`,
            );
            console.info(
                `    🎯 Confidence: [${summary.confidence.layoutCount[0].toFixed(1)}, ${summary.confidence.layoutCount[1].toFixed(1)}] operations`,
            );
            // Additional medians and CIs per metric
            const medianLayoutOps = (summary as any).median?.layoutCount as
                | number
                | undefined;
            const medianLayoutMs = (summary as any).median?.layoutDuration as
                | number
                | undefined;
            const medianRecalcOps = (summary as any).median?.recalcStyleCount as
                | number
                | undefined;
            const medianRecalcMs = (summary as any).median?.recalcStyleDuration as
                | number
                | undefined;

            console.info(
                `    ▫️ Layout ops median: ${(medianLayoutOps ?? summary.layoutCount).toFixed(1)}`,
            );
            console.info(
                `    ▫️ Layout ms median: ${(medianLayoutMs ?? summary.layoutDuration).toFixed(2)}ms`,
            );
            console.info(
                `    🎯 Layout ms CI: [${summary.confidence.layoutDuration[0].toFixed(2)}, ${summary.confidence.layoutDuration[1].toFixed(2)}] ms`,
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
            console.info(
                `    ▫️ Recalc ops median: ${(medianRecalcOps ?? summary.recalcStyleCount).toFixed(1)}`,
            );
            console.info(
                `    ▫️ Recalc ms median: ${(medianRecalcMs ?? summary.recalcStyleDuration).toFixed(2)}ms`,
            );
            console.info(
                `    🎯 Recalc ms CI: [${summary.confidence.recalcStyleDuration[0].toFixed(2)}, ${summary.confidence.recalcStyleDuration[1].toFixed(2)}] ms`,
            );
        });
    }

    test.afterAll(async () => {
        await ResultsManager.saveResults();
        const rec = (ResultsManager as any).computeRecommendation?.();

        if (rec) {
            const baselineName = 'raf-throttling100ms';
            const baseline = ResultsManager.getResultByName(baselineName);
            const recResult = ResultsManager.getResultByName(rec.name);

            if (baseline && recResult) {
                const pick = (s: any, k: 'layoutCount' | 'recalcStyleCount'): number =>
                    s.median && typeof s.median[k] === 'number' ? s.median[k] : s[k];

                const bLayoutOps = pick(baseline.summary as any, 'layoutCount');
                const bRecalcOps = pick(baseline.summary as any, 'recalcStyleCount');
                const rLayoutOps = pick(recResult.summary as any, 'layoutCount');
                const rRecalcOps = pick(recResult.summary as any, 'recalcStyleCount');

                const dLayoutOps = bLayoutOps - rLayoutOps;
                const dRecalcOps = bRecalcOps - rRecalcOps;
                const pLayoutOps = bLayoutOps ? (dLayoutOps / bLayoutOps) * 100 : 0;
                const pRecalcOps = bRecalcOps ? (dRecalcOps / bRecalcOps) * 100 : 0;

                console.info(
                    `⭐ Recommendation: ${rec.family} → ${rec.name} (debounce=${
                        rec.debounceMs ?? '-'
                    }ms, throttling=${rec.throttleMs}ms); vs baseline ${baselineName}: layout ops ${rLayoutOps.toFixed(
                        1,
                    )} (${dLayoutOps >= 0 ? '-' : '+'}${Math.abs(dLayoutOps).toFixed(1)}, ${
                        pLayoutOps >= 0 ? '-' : '+'
                    }${Math.abs(pLayoutOps).toFixed(1)}%), recalc ops ${rRecalcOps.toFixed(1)} (${dRecalcOps >= 0 ? '-' : '+'}${Math.abs(
                        dRecalcOps,
                    ).toFixed(1)}, ${
                        pRecalcOps >= 0 ? '-' : '+'
                    }${Math.abs(pRecalcOps).toFixed(1)}%)`,
                );
            } else {
                console.info(
                    `⭐ Recommendation: ${rec.family} → ${rec.name} (debounce=${
                        rec.debounceMs ?? '-'
                    }ms, throttling=${rec.throttleMs}ms)`,
                );
            }
        }
    });
});
