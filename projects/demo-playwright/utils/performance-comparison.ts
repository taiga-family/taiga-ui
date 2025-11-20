import {mkdirSync} from 'node:fs';
import {appendFile, readdir, readFile, stat, writeFile} from 'node:fs/promises';
import {dirname, join, resolve} from 'node:path';

/**
 * Core performance metrics collected via CDP
 */
interface PerformanceMetrics {
    layoutCount: number;
    layoutDuration: number;
    recalcStyleCount: number;
    recalcStyleDuration: number;
    // Newly added richer per-operation metrics (produced directly by collector)
    layoutAvgPerOp?: number; // arithmetic mean layout duration per operation (ms)
    recalcAvgPerOp?: number; // arithmetic mean recalc style duration per operation (ms)
    layoutMedianPerOp?: number; // median layout duration per op (ms) – robust against outliers
    recalcMedianPerOp?: number; // median recalc style duration per op (ms)
    layoutDurationPerOp?: number; // legacy derived avg (kept for backward compat)
    recalcStyleDurationPerOp?: number; // legacy derived avg
    layoutCountCoV?: number;
    layoutDurationCoV?: number;
    recalcStyleCountCoV?: number;
    recalcStyleDurationCoV?: number;
    layoutDurationPerOpCoV?: number;
    recalcStyleDurationPerOpCoV?: number;
}

interface PerformanceData {
    timestamp: number;
    testStartTime?: number;
    testDuration?: number;
    url: string;
    testName: string;
    source: string;
    metrics: PerformanceMetrics;
    customExtras?: Record<string, any>;
}

interface MetricsComparison {
    testName: string;
    component: string;
    baseline?: PerformanceMetrics;
    current: PerformanceMetrics;
    customExtras?: Record<string, any>;
    baselineExtras?: Record<string, any>;
    pattern?: string; // classification of change pattern
    diff: {
        layoutCount: number;
        layoutDuration: number;
        recalcStyleCount: number;
        recalcStyleDuration: number;
    };
    changes: {
        layoutCount: number; // percentage change
        layoutDuration: number;
        recalcStyleCount: number;
        recalcStyleDuration: number;
        layoutDurationPerOp?: number;
        recalcStyleDurationPerOp?: number;
        layoutMedianPerOp?: number;
        recalcMedianPerOp?: number;
        layoutAvgPerOp?: number;
        recalcAvgPerOp?: number;
    };
}

/**
 * Complete performance comparison report
 */
interface ComparisonReport {
    summary: {
        totalTests: number;
        testsWithBaseline: number;
        testsWithSignificantChanges: number;
        averageLayoutChange: number;
        averageRecalcChange: number;
        averageLayoutCountChange: number;
        averageRecalcCountChange: number;
        overallLayoutDurationChange: number; // signed percent change (layout duration total)
        overallRecalcDurationChange: number; // signed percent change (recalc style duration total)
        overallNetDurationChange: number; // signed percent change (layout+recalc durations combined)
        maxLayoutCountChange: number; // max absolute per-test layout op count change (%), signed value with largest magnitude
        maxRecalcCountChange: number; // max absolute per-test recalc op count change (%), signed
        maxLayoutDurationChange: number; // max absolute per-test layout duration change (%), signed
        maxRecalcDurationChange: number; // max absolute per-test recalc duration change (%), signed
    };
    details: MetricsComparison[];
}
/**
 * Utility class for analyzing and comparing performance metrics between baseline and current runs
 */
export class PerformanceComparison {
    public static readonly defaultChangeThreshold = 8; // Minimum % change to show in table (filters noise)
    public static readonly defaultCountPercentThreshold = 15; // % op count increase considered significant
    public static readonly defaultPerOpPercentThreshold = 15; // % per-op duration increase considered significant

    /**
     * Reads and aggregates performance metrics from JSON files in a directory
     */
    public static async aggregateMetrics(
        metricsPath: string,
    ): Promise<Map<string, PerformanceData>> {
        const metrics = new Map<string, PerformanceData>();
        // Multi-run aggregation: collect all files per test name
        const group: Record<string, PerformanceData[]> = {};

        try {
            const files = await readdir(metricsPath);
            const performanceFiles = this.filterPerformanceFiles(files);

            if (performanceFiles.length === 0) {
                console.warn(`No performance files found in ${metricsPath}`);

                return metrics;
            }

            console.info(
                `Found ${performanceFiles.length} performance files in ${metricsPath}`,
            );

            for (const file of performanceFiles) {
                try {
                    const content = await readFile(resolve(metricsPath, file), 'utf8');
                    const data: PerformanceData = JSON.parse(content);
                    const key = data.testName;

                    if (!group[key]) {
                        group[key] = [];
                    }

                    group[key].push(data);
                } catch (error) {
                    console.warn(
                        `Failed to parse performance file ${file}: ${error instanceof Error ? error.message : String(error)}`,
                    );
                }
            }

            // Aggregate groups using median with outlier filtering
            for (const [testName, runs] of Object.entries(group)) {
                const rs = runs.filter((r) => !!r);

                if (rs.length === 0) {
                    continue;
                }

                if (rs.length === 1) {
                    metrics.set(testName, rs[0]!);
                    continue;
                }

                const warmupSkip = Number(process.env.PERFORMANCE_WARMUP_SKIP || '1');
                const sortedByStart = rs
                    .slice()
                    .sort((a, b) => (a.testStartTime || 0) - (b.testStartTime || 0));
                const usable = sortedByStart.slice(
                    Math.min(warmupSkip, sortedByStart.length - 1),
                );
                const agg = this.aggregateRuns(usable.map((r) => r.metrics));
                const last = usable[usable.length - 1]!;
                // Aggregate custom extras (currently only mobileOpen latency) across usable runs
                let aggregatedExtras: Record<string, any> | undefined;
                const mobileRuns = usable
                    .map((r) => r.customExtras?.mobileOpen)
                    .filter(
                        (
                            m,
                        ): m is {
                            runs?: number;
                            medianFirstOption?: number;
                            avgFirstOption?: number;
                            samples?: number[];
                        } => !!m,
                    );

                if (mobileRuns.length) {
                    const samples = mobileRuns.flatMap((m) => m.samples || []);
                    const runsCount = mobileRuns.reduce(
                        (a, m) =>
                            a +
                            (typeof m.runs === 'number'
                                ? m.runs
                                : m.samples?.length || 0),
                        0,
                    );
                    const avgFirstOption = samples.length
                        ? samples.reduce((a, b) => a + b, 0) / samples.length
                        : mobileRuns.reduce(
                              (a, m) =>
                                  a +
                                  (typeof m.avgFirstOption === 'number'
                                      ? m.avgFirstOption
                                      : 0),
                              0,
                          ) / mobileRuns.length;
                    const medianFirstOption = (() => {
                        const arr = samples.slice().sort((a, b) => a - b);

                        if (!arr.length) {
                            return mobileRuns[0]?.medianFirstOption;
                        }

                        const mid = Math.floor(arr.length / 2);

                        if (arr.length % 2 === 0) {
                            return (arr[mid - 1]! + arr[mid]!) / 2;
                        }

                        return arr[mid]!;
                    })();

                    aggregatedExtras = {
                        mobileOpen: {
                            runs: runsCount || samples.length,
                            medianFirstOption,
                            avgFirstOption,
                            samples,
                        },
                    };
                }

                metrics.set(testName, {
                    timestamp: Date.now(),
                    testStartTime: last.testStartTime,
                    testDuration: last.testDuration,
                    url: last.url,
                    testName: last.testName,
                    source: usable[0]!.source,
                    metrics: agg,
                    customExtras: aggregatedExtras,
                });
            }
        } catch (error) {
            if (error instanceof Error && 'code' in error && error.code === 'ENOENT') {
                throw new Error(
                    `Metrics directory not found: ${metricsPath}. Make sure performance tests have been run.`,
                );
            }

            throw new Error(
                `Failed to read metrics from ${metricsPath}: ${error instanceof Error ? error.message : String(error)}`,
            );
        }

        return metrics;
    }

    /**
     * Compares current metrics against baseline metrics
     */
    public static compareMetrics(
        baseline: Map<string, PerformanceData>,
        current: Map<string, PerformanceData>,
        _changeThreshold: number = this.defaultChangeThreshold,
    ): ComparisonReport {
        const details: MetricsComparison[] = [];
        let totalLayoutChange = 0;
        let totalRecalcChange = 0;
        let totalLayoutCountChange = 0;
        let totalRecalcCountChange = 0;
        let baselineNetDurationTotal = 0; // sum of (layout+recalc) baseline durations
        let currentNetDurationTotal = 0; // sum of (layout+recalc) current durations
        let baselineLayoutDurationTotal = 0;
        let currentLayoutDurationTotal = 0;
        let baselineRecalcDurationTotal = 0;
        let currentRecalcDurationTotal = 0;
        let maxLayoutCountChange = 0;
        let maxRecalcCountChange = 0;
        let maxLayoutDurationChange = 0;
        let maxRecalcDurationChange = 0;

        for (const [testName, currentData] of current) {
            const baselineData = baseline.get(testName);
            const comparison = this.createMetricsComparison(
                testName,
                currentData,
                baselineData,
            );

            details.push(comparison);

            totalLayoutChange += Math.abs(comparison.changes.layoutDuration);
            totalRecalcChange += Math.abs(comparison.changes.recalcStyleDuration);
            totalLayoutCountChange += Math.abs(comparison.changes.layoutCount);
            totalRecalcCountChange += Math.abs(comparison.changes.recalcStyleCount);

            if (baselineData) {
                baselineNetDurationTotal +=
                    (baselineData.metrics.layoutDuration || 0) +
                    (baselineData.metrics.recalcStyleDuration || 0);
                baselineLayoutDurationTotal += baselineData.metrics.layoutDuration || 0;
                baselineRecalcDurationTotal +=
                    baselineData.metrics.recalcStyleDuration || 0;
            }

            currentNetDurationTotal +=
                (currentData.metrics.layoutDuration || 0) +
                (currentData.metrics.recalcStyleDuration || 0);
            currentLayoutDurationTotal += currentData.metrics.layoutDuration || 0;
            currentRecalcDurationTotal += currentData.metrics.recalcStyleDuration || 0;

            if (
                Math.abs(comparison.changes.layoutCount) > Math.abs(maxLayoutCountChange)
            ) {
                maxLayoutCountChange = comparison.changes.layoutCount;
            }

            if (
                Math.abs(comparison.changes.recalcStyleCount) >
                Math.abs(maxRecalcCountChange)
            ) {
                maxRecalcCountChange = comparison.changes.recalcStyleCount;
            }

            if (
                Math.abs(comparison.changes.layoutDuration) >
                Math.abs(maxLayoutDurationChange)
            ) {
                maxLayoutDurationChange = comparison.changes.layoutDuration;
            }

            if (
                Math.abs(comparison.changes.recalcStyleDuration) >
                Math.abs(maxRecalcDurationChange)
            ) {
                maxRecalcDurationChange = comparison.changes.recalcStyleDuration;
            }
        }

        const testsWithBaseline = details.filter((d) => d.baseline).length;
        const testsWithSignificantChanges = details.filter((d) =>
            this.isRegressionCandidate(d, 0),
        ).length;

        return {
            summary: {
                totalTests: details.length,
                testsWithBaseline,
                testsWithSignificantChanges,
                averageLayoutChange:
                    details.length > 0 ? totalLayoutChange / details.length : 0,
                averageRecalcChange:
                    details.length > 0 ? totalRecalcChange / details.length : 0,
                averageLayoutCountChange:
                    details.length > 0 ? totalLayoutCountChange / details.length : 0,
                averageRecalcCountChange:
                    details.length > 0 ? totalRecalcCountChange / details.length : 0,
                overallLayoutDurationChange:
                    baselineLayoutDurationTotal > 0
                        ? ((currentLayoutDurationTotal - baselineLayoutDurationTotal) /
                              baselineLayoutDurationTotal) *
                          100
                        : 0,
                overallRecalcDurationChange:
                    baselineRecalcDurationTotal > 0
                        ? ((currentRecalcDurationTotal - baselineRecalcDurationTotal) /
                              baselineRecalcDurationTotal) *
                          100
                        : 0,
                overallNetDurationChange:
                    baselineNetDurationTotal > 0
                        ? ((currentNetDurationTotal - baselineNetDurationTotal) /
                              baselineNetDurationTotal) *
                          100
                        : 0,
                maxLayoutCountChange,
                maxRecalcCountChange,
                maxLayoutDurationChange,
                maxRecalcDurationChange,
            },
            details: details.sort((a, b) => a.testName.localeCompare(b.testName)),
        };
    }

    /**
     * Generates a markdown report for GitHub comments
     */
    public static generateMarkdownReport(
        report: ComparisonReport,
        changeThreshold: number = this.defaultChangeThreshold,
    ): string {
        const {summary, details} = report;
        const netPctThreshold = Number(process.env.PERF_NET_PERCENT_THRESHOLD || '10');
        const overallNetRegressed = summary.overallNetDurationChange >= netPctThreshold;
        const filteredDetails = this.filterDetailsByThreshold(
            details,
            changeThreshold,
            overallNetRegressed,
        );

        let markdown = '## 📊 Performance Metrics Comparison\n\n';

        const statusLine = this.generateStatusLine(summary);

        if (statusLine) {
            markdown += `${statusLine}\n\n`;
        }

        const headline = this.generateHeadlineOverallDelta(summary);

        if (headline) {
            markdown += `${headline}\n\n`;
        }

        markdown += this.generateSummarySection(summary);

        // Append custom latency section if any test has mobileOpen extras
        const latencySection = this.generateLatencySection(details);

        if (latencySection) {
            markdown += `\n${latencySection}\n`;
        }

        if (filteredDetails.length > 0) {
            markdown += this.generateDetailsSection(
                filteredDetails,
                details,
                changeThreshold,
                overallNetRegressed,
            );
        }

        markdown += this.generateFooter(summary.totalTests);

        return markdown;
    }

    /**
     * Main comparison function for CI integration
     */
    public static async compareAndReport(
        baselinePath: string,
        currentPath: string,
        outputPath: string,
        changeThreshold: number = this.defaultChangeThreshold,
    ): Promise<ComparisonReport> {
        console.info('🔍 Aggregating baseline metrics...');

        let baseline: Map<string, PerformanceData>;

        try {
            baseline = await this.aggregateMetrics(baselinePath);
        } catch (error) {
            console.warn(
                `⚠️ Could not load baseline metrics: ${error instanceof Error ? error.message : String(error)}`,
            );
            baseline = new Map();
        }

        console.info('🔍 Aggregating current metrics...');

        let current: Map<string, PerformanceData>;

        try {
            current = await this.aggregateMetrics(currentPath);
        } catch (error) {
            throw new Error(
                `Failed to load current metrics: ${error instanceof Error ? error.message : String(error)}`,
            );
        }

        if (current.size === 0) {
            console.info(
                `ℹ️ No performance data found in current metrics path: ${currentPath}. Creating empty report.`,
            );

            const emptyReport: ComparisonReport = {
                summary: {
                    totalTests: 0,
                    testsWithBaseline: 0,
                    testsWithSignificantChanges: 0,
                    averageLayoutChange: 0,
                    averageRecalcChange: 0,
                    averageLayoutCountChange: 0,
                    averageRecalcCountChange: 0,
                    overallLayoutDurationChange: 0,
                    overallRecalcDurationChange: 0,
                    overallNetDurationChange: 0,
                    maxLayoutCountChange: 0,
                    maxRecalcCountChange: 0,
                    maxLayoutDurationChange: 0,
                    maxRecalcDurationChange: 0,
                },
                details: [],
            };

            const markdown = this.generateEmptyMarkdownReport();
            const outputDir = dirname(outputPath);

            try {
                mkdirSync(outputDir, {recursive: true});
            } catch (error) {
                throw new Error(
                    `Failed to create output directory '${outputDir}': ${error instanceof Error ? error.message : String(error)}`,
                );
            }

            try {
                await writeFile(outputPath, markdown);
            } catch (error) {
                throw new Error(
                    `Failed to write performance report to '${outputPath}': ${error instanceof Error ? error.message : String(error)}`,
                );
            }

            console.info(`✅ Empty performance report saved to: ${outputPath}`);

            return emptyReport;
        }

        console.info('📊 Comparing metrics...');

        const report = this.compareMetrics(baseline, current, changeThreshold);
        const markdown = this.generateMarkdownReport(report, changeThreshold);
        const outputDir = dirname(outputPath);

        try {
            mkdirSync(outputDir, {recursive: true});
        } catch (error) {
            throw new Error(
                `Failed to create output directory '${outputDir}': ${error instanceof Error ? error.message : String(error)}`,
            );
        }

        try {
            await writeFile(outputPath, markdown);
        } catch (error) {
            throw new Error(
                `Failed to write performance report to '${outputPath}': ${error instanceof Error ? error.message : String(error)}`,
            );
        }

        console.info(`✅ Performance comparison report saved to: ${outputPath}`);
        console.info(
            `📈 Summary: ${report.summary.totalTests} tests, ${report.summary.testsWithBaseline} with baseline, ${report.summary.testsWithSignificantChanges} with significant changes`,
        );

        // Hard regression gate: fail build if any test's layout, recalc, or combined (layout+recalc)
        // duration increased by >= PERF_HARD_FAIL_PERCENT (default 50%). Improvements and new tests are ignored.
        // If PERF_HARD_FAIL_DEFER === 'true', do not throw immediately: append offenders to report file and
        // write a sentinel file so a later CI step can still mark the job red after posting the PR comment.
        const HARD_FAIL_PCT = Number(process.env.PERF_HARD_FAIL_PERCENT || '50');
        const DEFER_FAIL =
            (process.env.PERF_HARD_FAIL_DEFER || 'false').toLowerCase() === 'true';
        const SENTINEL_PATH =
            process.env.PERF_HARD_FAIL_SENTINEL || `${outputDir}/hard-fail.txt`;
        const offenders = report.details.filter((d) => {
            if (!d.baseline) {
                return false;
            }

            const baseLayout = d.baseline.layoutDuration || 0;
            const baseRecalc = d.baseline.recalcStyleDuration || 0;
            const curLayout = d.current.layoutDuration || 0;
            const curRecalc = d.current.recalcStyleDuration || 0;
            const netBase = baseLayout + baseRecalc;
            const netCur = curLayout + curRecalc;

            return (
                (baseLayout > 0 &&
                    ((curLayout - baseLayout) / baseLayout) * 100 >= HARD_FAIL_PCT) ||
                (baseRecalc > 0 &&
                    ((curRecalc - baseRecalc) / baseRecalc) * 100 >= HARD_FAIL_PCT) ||
                (netBase > 0 && ((netCur - netBase) / netBase) * 100 >= HARD_FAIL_PCT)
            );
        });

        if (offenders.length) {
            console.error('❌ Hard performance regression threshold breached.');

            for (const o of offenders) {
                const baseLayout = o.baseline!.layoutDuration || 0;
                const baseRecalc = o.baseline!.recalcStyleDuration || 0;
                const curLayout = o.current.layoutDuration || 0;
                const curRecalc = o.current.recalcStyleDuration || 0;
                const netBase = baseLayout + baseRecalc;
                const netCur = curLayout + curRecalc;
                const pct = (cur: number, base: number): string =>
                    base > 0 ? (((cur - base) / base) * 100).toFixed(1) : 'n/a';
                // Keep detailed lines only in console (do not duplicate in markdown)

                console.error(
                    `  • ${o.testName}: layout ${baseLayout.toFixed(1)}→${curLayout.toFixed(1)} ms (${pct(curLayout, baseLayout)}%), recalc ${baseRecalc.toFixed(1)}→${curRecalc.toFixed(1)} ms (${pct(curRecalc, baseRecalc)}%), net ${netBase.toFixed(1)}→${netCur.toFixed(1)} ms (${pct(netCur, netBase)}%)`,
                );
            }

            if (DEFER_FAIL) {
                // Insert single-line banner after the main heading; table already contains per-test rows
                try {
                    const heading = '## 📊 Performance Metrics Comparison';
                    let updated = markdown;

                    if (updated.includes(heading)) {
                        updated = updated.replace(
                            heading,
                            `${heading}\n\n❌ Hard Gate Offenders (${offenders.length} offender${offenders.length === 1 ? '' : 's'}; threshold ${HARD_FAIL_PCT}% - deferred)`,
                        );
                    } else {
                        updated = `❌ Hard Gate Offenders (${offenders.length} offender${offenders.length === 1 ? '' : 's'}; threshold ${HARD_FAIL_PCT}% - deferred)\n\n${updated}`;
                    }

                    await writeFile(outputPath, updated);
                    // create sentinel
                    await writeFile(SENTINEL_PATH, `fail (${offenders.length})`);
                    console.error(
                        `⚠️ Hard gate deferred (PERF_HARD_FAIL_DEFER=true). Sentinel written to ${SENTINEL_PATH}`,
                    );
                } catch (e) {
                    console.error('Failed to append offenders or write sentinel:', e);
                }
            } else {
                throw new Error(
                    `Performance hard gate failed: ${offenders.length} test(s) regressed by >= ${HARD_FAIL_PCT}% in layout, recalc, or net duration`,
                );
            }
        }

        return report;
    }

    /**
     * Generates a markdown report when no performance data is available
     */
    public static generateEmptyMarkdownReport(): string {
        return '## 📊 Performance Metrics Comparison\n\n_No performance metrics collected in this shard._\n\n# Tests completed successfully :white_check_mark:\n\nGood job :fire:';
    }

    // --- Latency (custom extras) section helpers ---
    private static generateLatencySection(details: MetricsComparison[]): string {
        return this.renderLatencyRows(details);
    }

    private static renderLatencyRows(details: MetricsComparison[]): string {
        const LAT_PCT_THRESHOLD = Number(
            process.env.PERF_LATENCY_PERCENT_THRESHOLD || '15',
        );
        const rows: string[] = [];

        for (const d of details) {
            const cur = d.customExtras?.mobileOpen;

            if (
                !cur ||
                (typeof cur.medianFirstOption !== 'number' &&
                    typeof cur.avgFirstOption !== 'number')
            ) {
                continue;
            }

            const base = d.baselineExtras?.mobileOpen;
            let baselineMedian: number | undefined;

            if (base) {
                if (typeof base.medianFirstOption === 'number') {
                    baselineMedian = base.medianFirstOption;
                } else if (typeof base.avgFirstOption === 'number') {
                    baselineMedian = base.avgFirstOption;
                }
            }

            const currentMedian =
                typeof cur.medianFirstOption === 'number'
                    ? cur.medianFirstOption
                    : cur.avgFirstOption;

            const deltaMs =
                baselineMedian !== undefined ? currentMedian - baselineMedian : undefined;
            const deltaPct =
                baselineMedian && baselineMedian !== 0
                    ? (deltaMs! / baselineMedian) * 100
                    : undefined;
            let badge = '';
            let curStr = currentMedian.toFixed(2);
            const baseStr =
                baselineMedian !== undefined ? baselineMedian.toFixed(2) : '—';
            let deltaMsStr =
                deltaMs !== undefined
                    ? `${deltaMs >= 0 ? '+' : ''}${deltaMs.toFixed(2)}`
                    : 'new';
            let deltaPctStr =
                deltaPct !== undefined
                    ? `${deltaPct >= 0 ? '+' : ''}${deltaPct.toFixed(1)}%`
                    : 'new';

            if (deltaPct !== undefined) {
                const absPct = Math.abs(deltaPct);

                if (absPct >= LAT_PCT_THRESHOLD) {
                    badge = deltaPct > 0 ? '❌' : '✅';
                }
            }

            if (badge) {
                curStr = `**${curStr}**`;

                if (deltaMsStr !== 'new') {
                    deltaMsStr = `**${deltaMsStr}**`;
                }

                if (deltaPctStr !== 'new') {
                    deltaPctStr = `**${deltaPctStr}** ${badge}`;
                }
            }

            const runs = Number(cur.runs) || cur.samples?.length || 0;

            // Unified format: one metric column showing current (deltaMs, deltaPct) and baseline value in parentheses
            let combined: string;

            if (baselineMedian !== undefined) {
                combined = `${curStr} (${baseStr}, ${deltaMsStr}, ${deltaPctStr})`;
            } else {
                combined = `${curStr} (new)`;
            }

            rows.push(`| ${d.testName} | ${combined} | ${runs} |`);
        }

        if (!rows.length) {
            return '';
        }

        rows.sort((a, b) => {
            const extract = (line: string): number => {
                const parts = line.split('|').map((p) => p.trim());
                const curCol = parts[3];
                const match = /\d+(?:\.\d+)?/.exec(curCol || '');

                return match ? parseFloat(match[0]) : Number.POSITIVE_INFINITY;
            };

            return extract(a) - extract(b);
        });

        const header = '### ⚡ Interaction to Next Point (INP)';
        const tableHead =
            '| Test | Median (baseline, Δ ms, Δ %) | Runs |\n|------|--------------------------------|-----:|';

        return `${header}\n\n${tableHead}\n${rows.join('\n')}\n`;
    }

    /**
     * Filters files to include only performance JSON files
     */
    private static filterPerformanceFiles(files: string[]): string[] {
        return files.filter((file) => {
            if (!file.endsWith('.json')) {
                return false;
            }

            return (
                file.startsWith('test-') ||
                file.startsWith('trace-') ||
                file.startsWith('performance-test-') ||
                file.startsWith('performance-trace-')
            );
        });
    }

    /**
     * Extracts component name from test source path or test name
     */
    private static extractComponentName(source: string, testName: string): string {
        // Handle CDP tracing sources that don't have file paths
        if (source === 'CDP-tracing-per-test' || source === 'CDP-tracing') {
            return this.extractComponentFromTestName(testName);
        }

        // Extract from test file path: "tests/core/scrollbar/file.spec.ts" → "scrollbar"
        const testFolderMatch = /\/([^/]+)\/[^/]*\.spec\.ts$/.exec(source);

        if (testFolderMatch?.[1]) {
            return testFolderMatch[1];
        }

        // Extract from component path: ".../components/mobile-dialog/..." → "mobile-dialog"
        const componentMatch = /components\/(.+?)\//.exec(source);

        if (componentMatch?.[1]) {
            return componentMatch[1];
        }

        // Fallback: use filename without extension
        const fileName = source.split('/').pop() || source;

        return fileName.replace(/\..*$/, '') || 'unknown';
    }

    /**
     * Extracts component name from test name when source path is not available
     */
    private static extractComponentFromTestName(testName: string): string {
        const words = testName.toLowerCase().split(/[\s\-_]+/);

        // Look for known component keywords
        const componentKeywords = [
            'scrollbar',
            'button',
            'input',
            'dialog',
            'modal',
            'table',
            'chart',
            'calendar',
        ];

        for (const keyword of componentKeywords) {
            if (words.some((word) => word.includes(keyword))) {
                return keyword;
            }
        }

        // Fallback: use first meaningful word from test name
        const meaningfulWords = words.filter(
            (word) =>
                word.length > 2 &&
                ![
                    'and',
                    'are',
                    'but',
                    'can',
                    'for',
                    'has',
                    'is',
                    'or',
                    'should',
                    'spec',
                    'test',
                    'the',
                    'will',
                    'with',
                ].includes(word),
        );

        return meaningfulWords[0] || 'unknown';
    }

    /**
     * Calculates percentage change between two values
     */
    private static calculatePercentageChange(baseline: number, current: number): number {
        if (baseline === 0) {
            return 0;
        }

        return ((current - baseline) / baseline) * 100;
    }

    /**
     * Creates a metrics comparison object for a single test
     */
    private static createMetricsComparison(
        testName: string,
        currentData: PerformanceData,
        baselineData?: PerformanceData,
    ): MetricsComparison {
        const currentMetrics = currentData.metrics;
        const baselineMetrics = baselineData?.metrics;
        const component = this.extractComponentName(currentData.source, testName);
        // Prefer collector-provided per-op metrics; fall back to on-the-fly division
        const derivePerOp = (tot: number, count: number): number =>
            count > 0 ? tot / count : 0;
        const currentLayoutAvg =
            currentMetrics.layoutAvgPerOp ??
            derivePerOp(currentMetrics.layoutDuration, currentMetrics.layoutCount);
        const currentRecalcAvg =
            currentMetrics.recalcAvgPerOp ??
            derivePerOp(
                currentMetrics.recalcStyleDuration,
                currentMetrics.recalcStyleCount,
            );
        const baselineLayoutAvg =
            baselineMetrics?.layoutAvgPerOp ??
            (baselineMetrics
                ? derivePerOp(baselineMetrics.layoutDuration, baselineMetrics.layoutCount)
                : 0);
        const baselineRecalcAvg =
            baselineMetrics?.recalcAvgPerOp ??
            (baselineMetrics
                ? derivePerOp(
                      baselineMetrics.recalcStyleDuration,
                      baselineMetrics.recalcStyleCount,
                  )
                : 0);
        const currentLayoutMedian = currentMetrics.layoutMedianPerOp ?? currentLayoutAvg;
        const currentRecalcMedian = currentMetrics.recalcMedianPerOp ?? currentRecalcAvg;
        const baselineLayoutMedian =
            baselineMetrics?.layoutMedianPerOp ?? baselineLayoutAvg;
        const baselineRecalcMedian =
            baselineMetrics?.recalcMedianPerOp ?? baselineRecalcAvg;

        return {
            testName,
            component,
            baseline: baselineMetrics,
            current: currentMetrics,
            customExtras: currentData.customExtras,
            baselineExtras: baselineData?.customExtras,
            diff: {
                layoutCount:
                    currentMetrics.layoutCount - (baselineMetrics?.layoutCount || 0),

                layoutDuration:
                    currentMetrics.layoutDuration -
                    (baselineMetrics?.layoutDuration || 0),

                recalcStyleCount:
                    currentMetrics.recalcStyleCount -
                    (baselineMetrics?.recalcStyleCount || 0),

                recalcStyleDuration:
                    currentMetrics.recalcStyleDuration -
                    (baselineMetrics?.recalcStyleDuration || 0),
            },
            changes: {
                layoutCount: this.calculatePercentageChange(
                    baselineMetrics?.layoutCount || 0,
                    currentMetrics.layoutCount,
                ),
                layoutDuration: this.calculatePercentageChange(
                    baselineMetrics?.layoutDuration || 0,
                    currentMetrics.layoutDuration,
                ),
                recalcStyleCount: this.calculatePercentageChange(
                    baselineMetrics?.recalcStyleCount || 0,
                    currentMetrics.recalcStyleCount,
                ),
                recalcStyleDuration: this.calculatePercentageChange(
                    baselineMetrics?.recalcStyleDuration || 0,
                    currentMetrics.recalcStyleDuration,
                ),
                layoutDurationPerOp: this.calculatePercentageChange(
                    baselineLayoutAvg || 0,
                    currentLayoutAvg || 0,
                ),
                recalcStyleDurationPerOp: this.calculatePercentageChange(
                    baselineRecalcAvg || 0,
                    currentRecalcAvg || 0,
                ),
                layoutMedianPerOp: this.calculatePercentageChange(
                    baselineLayoutMedian || 0,
                    currentLayoutMedian || 0,
                ),
                recalcMedianPerOp: this.calculatePercentageChange(
                    baselineRecalcMedian || 0,
                    currentRecalcMedian || 0,
                ),
                layoutAvgPerOp: this.calculatePercentageChange(
                    baselineLayoutAvg || 0,
                    currentLayoutAvg || 0,
                ),
                recalcAvgPerOp: this.calculatePercentageChange(
                    baselineRecalcAvg || 0,
                    currentRecalcAvg || 0,
                ),
            },
        };
    }

    /**
     * Checks if a comparison has significant duration changes using threshold (env or default)
     */
    // Legacy duration change helper removed (obsolete unified threshold)

    /**
     * Filters test details to only show meaningful changes
     */
    private static filterDetailsByThreshold(
        details: MetricsComparison[],
        changeThreshold: number,
        overallNetRegressed = false,
    ): MetricsComparison[] {
        return details.filter((d) =>
            this.shouldDisplayRow(d, changeThreshold, overallNetRegressed),
        );
    }

    /**
     * Decide if a test row should be visible (looser than regression gating).
     */
    private static shouldDisplayRow(
        detail: MetricsComparison,
        changeThreshold: number,
        overallNetRegressed: boolean,
    ): boolean {
        if (!detail.baseline) {
            return true;
        }

        const absMsFloor = Number(process.env.PERF_VISIBILITY_ABS_MS_FLOOR || '3');
        const hardNetAbsMsFloor = Number(
            process.env.PERF_NET_VISIBILITY_ABS_MS_FLOOR || '0',
        );

        if (this.isRegressionCandidate(detail, changeThreshold)) {
            return true;
        }

        const layoutPct = Math.abs(detail.changes.layoutDuration);
        const recalcPct = Math.abs(detail.changes.recalcStyleDuration);
        const layoutMsAbs = Math.abs(detail.diff.layoutDuration);
        const recalcMsAbs = Math.abs(detail.diff.recalcStyleDuration);
        const layoutMedianPct = Math.abs(detail.changes.layoutMedianPerOp || 0);
        const recalcMedianPct = Math.abs(detail.changes.recalcMedianPerOp || 0);
        const netMs = detail.diff.layoutDuration + detail.diff.recalcStyleDuration;
        const baselineNet =
            (detail.baseline.layoutDuration || 0) +
            (detail.baseline.recalcStyleDuration || 0);
        const netPct = baselineNet > 0 ? (netMs / baselineNet) * 100 : 0;
        const netPctAbs = Math.abs(netPct);
        const netMsAbs = Math.abs(netMs);
        const NET_ABS_MS_THRESHOLD = Number(
            process.env.PERF_NET_ABS_MS_THRESHOLD || '15',
        );

        // Improvements can create noise; apply stricter visibility gating for negative net changes
        if (netMs < 0) {
            const improvementPctThreshold = Number(
                process.env.PERF_IMPROVEMENT_VISIBILITY_PCT ||
                    String(changeThreshold + 4),
            );
            const improvementAbsMsFloor = Number(
                process.env.PERF_IMPROVEMENT_ABS_MS_FLOOR || '10',
            );

            if (
                netPctAbs >= improvementPctThreshold &&
                netMsAbs >= improvementAbsMsFloor
            ) {
                return true; // material improvement
            }

            // Suppress minor improvements even if individual sub-metrics exceeded raw threshold
            return false;
        }

        // Regression / neutral direction: refined multi-signal logic with extra gating to cut noise
        const componentAbsMsFloor = Number(
            process.env.PERF_COMPONENT_ABS_MS_FLOOR || absMsFloor.toString(),
        );
        const componentMinNetPct = Number(
            process.env.PERF_COMPONENT_MIN_NET_PCT || String(changeThreshold / 2),
        );
        const componentMetricAbsMsFloor = Number(
            process.env.PERF_COMPONENT_METRIC_ABS_MS_FLOOR || '0',
        );
        const ultraShortBaselineNet = 40; // ms

        if (
            baselineNet > 0 &&
            baselineNet < ultraShortBaselineNet &&
            (netPctAbs < 20 || netMsAbs < 8)
        ) {
            return false;
        }

        const componentTriggered =
            (layoutPct >= changeThreshold &&
                layoutMsAbs >= componentAbsMsFloor &&
                layoutMsAbs >= componentMetricAbsMsFloor) ||
            (recalcPct >= changeThreshold &&
                recalcMsAbs >= componentAbsMsFloor &&
                recalcMsAbs >= componentMetricAbsMsFloor);

        if (componentTriggered) {
            // Show if overall net also reaches main threshold
            if (
                netPctAbs >= changeThreshold &&
                netMsAbs >= Math.min(absMsFloor, NET_ABS_MS_THRESHOLD)
            ) {
                return true;
            }

            // Otherwise require a minimum (lower) net percent plus absolute net ms guard
            if (netMs > 0) {
                if (
                    netPct >= componentMinNetPct &&
                    netMsAbs >= NET_ABS_MS_THRESHOLD &&
                    netMsAbs >= absMsFloor
                ) {
                    return true;
                }

                return false; // suppress partial component-only increase with weak net effect
            }
            // Net non-positive handled earlier (improvements path) so treat as noise

            return false;
        }

        // Per-op median increases must also satisfy a meaningful net contribution
        const perOpTriggered =
            (layoutMedianPct >= changeThreshold || recalcMedianPct >= changeThreshold) &&
            netMsAbs >= absMsFloor;

        if (perOpTriggered) {
            if (
                netPctAbs >= changeThreshold ||
                (netMs > 0 &&
                    netPct >= componentMinNetPct &&
                    netMsAbs >= NET_ABS_MS_THRESHOLD)
            ) {
                return true;
            }

            return false;
        }

        // Pure net change path (no individual component signals)
        if (
            netPctAbs >= changeThreshold &&
            netMsAbs >= Math.min(absMsFloor, NET_ABS_MS_THRESHOLD) &&
            (hardNetAbsMsFloor === 0 || netMsAbs >= hardNetAbsMsFloor)
        ) {
            return true;
        }

        const contributorsEnabled =
            (process.env.PERF_ENABLE_NET_CONTRIBUTORS || 'false').toLowerCase() ===
            'true';

        if (contributorsEnabled && overallNetRegressed) {
            const minNetMs = Number(process.env.PERF_NET_CONTRIBUTOR_ABS_MS_FLOOR || '3');

            if (netMs > 0 && netMsAbs >= minNetMs) {
                return true;
            }
        }

        return false;
    }

    /**
     * Determines if a test comparison is a regression candidate based on practical gating:
     * 1) Operation count increased beyond threshold AND per-op duration did not decrease enough to offset
     * 2) Per-op duration increased beyond threshold while counts stayed roughly stable (< threshold)
     */
    private static isRegressionCandidate(
        detail: MetricsComparison,
        _legacyThreshold: number,
    ): boolean {
        if (!detail.baseline) {
            return true;
        }

        // Split thresholds: counts vs per-op durations.
        // If env vars absent or invalid, fall back to explicit tuned defaults (not the legacy unified one).
        const countEnv = Number(process.env.PERF_COUNT_PERCENT_THRESHOLD || '');
        const perOpEnv = Number(process.env.PERF_PER_OP_PERCENT_THRESHOLD || '');
        const countPct =
            !Number.isNaN(countEnv) && countEnv > 0
                ? countEnv
                : PerformanceComparison.defaultCountPercentThreshold;
        const perOpPct =
            !Number.isNaN(perOpEnv) && perOpEnv > 0
                ? perOpEnv
                : PerformanceComparison.defaultPerOpPercentThreshold;

        const baseline = detail.baseline;
        const diff = detail.diff;
        const lc = detail.changes.layoutCount;
        const rc = detail.changes.recalcStyleCount;
        const lp = detail.changes.layoutDurationPerOp || 0;
        const rp = detail.changes.recalcStyleDurationPerOp || 0;
        const lpm = detail.changes.layoutMedianPerOp || 0;
        const rpm = detail.changes.recalcMedianPerOp || 0;
        const absLayoutCountDelta = Math.abs(diff.layoutCount || 0);
        const absRecalcCountDelta = Math.abs(diff.recalcStyleCount || 0);
        const layoutAbsDelta = Math.abs(diff.layoutDuration);
        const recalcAbsDelta = Math.abs(diff.recalcStyleDuration);
        const ABS_DELTA_FLOOR = Number(process.env.PERF_ABS_DELTA_FLOOR_MS || '5');
        const MIN_BASELINE_DURATION = Number(
            process.env.PERF_MIN_BASELINE_DURATION_MS || '10',
        );
        const MIN_BASELINE_LAYOUT_COUNT = Number(
            process.env.PERF_MIN_BASELINE_LAYOUT_COUNT || '10',
        );
        const MIN_ABSOLUTE_COUNT_DELTA = Number(
            process.env.PERF_MIN_ABSOLUTE_COUNT_DELTA || '4',
        );
        const NET_COST_FLOOR = Number(
            process.env.PERF_MIN_NET_DURATION_DELTA_MS ||
                process.env.PERF_ABS_DELTA_FLOOR_MS ||
                '5',
        );

        const ignoreLayoutTiny =
            baseline.layoutDuration < MIN_BASELINE_DURATION &&
            baseline.layoutCount < MIN_BASELINE_LAYOUT_COUNT;
        const isThemeSwitchTest = detail.testName === 'scrollbar-theme-switching-stress';

        const layoutCountIncrease =
            lc > countPct && absLayoutCountDelta >= MIN_ABSOLUTE_COUNT_DELTA;
        const recalcCountIncrease =
            rc > countPct && absRecalcCountDelta >= MIN_ABSOLUTE_COUNT_DELTA;
        const layoutPerOpNotImproved = lp >= -perOpPct || lpm >= -perOpPct;
        const recalcPerOpNotImproved = rp >= -perOpPct || rpm >= -perOpPct;
        const countsStable = Math.abs(lc) < countPct && Math.abs(rc) < countPct;
        // Absolute per-op median delta floors to suppress large percent swings on tiny baselines
        const perOpAbsFloor = Number(process.env.PERF_PER_OP_ABS_MS_FLOOR || '0.2');
        const currentLayoutMedian = detail.current?.layoutMedianPerOp;
        const baselineLayoutMedian = baseline.layoutMedianPerOp;
        const currentRecalcMedian = detail.current?.recalcMedianPerOp;
        const baselineRecalcMedian = baseline.recalcStyleDurationPerOp;
        const layoutMedianAbsDelta =
            baselineLayoutMedian !== undefined && currentLayoutMedian !== undefined
                ? Math.abs(currentLayoutMedian - baselineLayoutMedian)
                : 0;
        const recalcMedianAbsDelta =
            baselineRecalcMedian !== undefined && currentRecalcMedian !== undefined
                ? Math.abs(currentRecalcMedian - baselineRecalcMedian)
                : 0;
        const perOpIncreaseLayout =
            (lp > perOpPct || lpm > perOpPct) && layoutMedianAbsDelta >= perOpAbsFloor;
        const perOpIncreaseRecalc =
            (rp > perOpPct || rpm > perOpPct) && recalcMedianAbsDelta >= perOpAbsFloor;

        const maxCov = Number(process.env.PERF_MAX_COV || '0.15');
        const isStable = (cov?: number): boolean => cov === undefined || cov <= maxCov;
        // Eligibility
        const layoutEligible =
            !isThemeSwitchTest &&
            !ignoreLayoutTiny &&
            baseline.layoutDuration >= MIN_BASELINE_DURATION &&
            layoutAbsDelta >= ABS_DELTA_FLOOR;
        const recalcEligible =
            baseline.recalcStyleDuration >= MIN_BASELINE_DURATION &&
            recalcAbsDelta >= ABS_DELTA_FLOOR;

        const layoutCountDriven =
            layoutEligible && layoutCountIncrease && layoutPerOpNotImproved;
        const recalcCountDriven =
            recalcEligible && recalcCountIncrease && recalcPerOpNotImproved;
        const perOpOnlyLayout = layoutEligible && countsStable && perOpIncreaseLayout;
        const perOpOnlyRecalc = recalcEligible && countsStable && perOpIncreaseRecalc;
        const netCost = diff.layoutDuration + diff.recalcStyleDuration; // ms delta (approx)
        const netBaseTotal = baseline.layoutDuration + baseline.recalcStyleDuration;
        const netCostPct = netBaseTotal > 0 ? (netCost / netBaseTotal) * 100 : 0;

        // Unified net gating thresholds
        const NET_PCT_THRESHOLD = Number(process.env.PERF_NET_PERCENT_THRESHOLD || '10');
        const NET_ABS_MS_THRESHOLD = Number(
            process.env.PERF_NET_ABS_MS_THRESHOLD || '15',
        );
        // Dynamic net threshold scaling based on observed baseline duration variability (optional)
        let effectiveNetPctThreshold = NET_PCT_THRESHOLD;

        if ((process.env.PERF_ENABLE_DYNAMIC_NET || 'false').toLowerCase() === 'true') {
            const covMultiplier = Number(process.env.PERF_NET_COV_MULTIPLIER || '2');
            const covMargin = Number(process.env.PERF_NET_COV_MARGIN_PCT || '2');
            const baselineDurationCov = Math.max(
                baseline.layoutDurationCoV ?? 0,
                baseline.recalcStyleDurationCoV ?? 0,
            );
            const dynamicPct = baselineDurationCov * covMultiplier * 100 + covMargin;

            if (dynamicPct > effectiveNetPctThreshold) {
                effectiveNetPctThreshold = Math.round(dynamicPct);
            }
        }

        const varianceOk =
            isStable(baseline.layoutCountCoV) &&
            isStable(baseline.recalcStyleCountCoV) &&
            isStable(baseline.layoutDurationCoV) &&
            isStable(baseline.recalcStyleDurationCoV) &&
            isStable(baseline.layoutDurationPerOpCoV) &&
            isStable(baseline.recalcStyleDurationPerOpCoV);

        const gated =
            layoutCountDriven || recalcCountDriven || perOpOnlyLayout || perOpOnlyRecalc;

        const passesNet =
            netCost > 0 &&
            netCost >= NET_COST_FLOOR &&
            netCost >= NET_ABS_MS_THRESHOLD &&
            netCostPct >= effectiveNetPctThreshold;

        // Classify pattern (stored for later reporting if needed)
        if (gated) {
            if (layoutCountDriven || recalcCountDriven) {
                detail.pattern = 'count-driven';
            } else if (perOpOnlyLayout || perOpOnlyRecalc) {
                detail.pattern = 'per-op-increase';
            }
        } else if (netCost > 0) {
            detail.pattern = 'net-increase-non-gated';
        } else if (netCost <= 0) {
            detail.pattern = 'improvement';
        }

        return gated && passesNet && varianceOk;
    }

    private static generateSummarySection(summary: ComparisonReport['summary']): string {
        const lines: string[] = [];
        const formatAvg = (label: string, value: number): string => {
            const v = Number(value.toFixed(1));
            const sign = v > 0 ? '+' : '';
            let icon: string;

            if (v < 0) {
                icon = '✅';
            } else if (v > 0) {
                icon = '❌';
            } else {
                icon = '✅';
            }

            return `- ${label}: ${sign}${v.toFixed(1)}% ${icon}`;
        };

        if (summary.testsWithBaseline > 0) {
            const layoutTotal = summary.overallLayoutDurationChange;
            const recalcTotal = summary.overallRecalcDurationChange;
            const layoutPrefix = layoutTotal > 0 ? '+' : '';
            const recalcPrefix = recalcTotal > 0 ? '+' : '';
            const layoutIcon = layoutTotal <= 0 ? '✅' : '❌';
            const recalcIcon = recalcTotal <= 0 ? '✅' : '❌';

            lines.push(
                `- Overall layout duration: ${layoutPrefix}${layoutTotal.toFixed(1)}% ${layoutIcon}`,
            );
            lines.push(
                `- Overall recalc duration: ${recalcPrefix}${recalcTotal.toFixed(1)}% ${recalcIcon}`,
            );
        }

        lines.push(
            formatAvg('Max layout duration change', summary.maxLayoutDurationChange),
        );
        lines.push(
            formatAvg('Max recalc duration change', summary.maxRecalcDurationChange),
        );
        lines.push(formatAvg('Max layout ops change', summary.maxLayoutCountChange));
        lines.push(formatAvg('Max recalc ops change', summary.maxRecalcCountChange));
        const body = lines.join('\n');

        return [
            '<details>',
            '<summary>Summary</summary>',
            '',
            body,
            '',
            '</details>',
            '',
        ].join('\n');
    }

    private static generateStatusLine(summary: ComparisonReport['summary']): string {
        if (summary.testsWithBaseline === 0) {
            return '';
        }

        const net = summary.overallNetDurationChange;
        const NET_PCT_THRESHOLD = Number(process.env.PERF_NET_PERCENT_THRESHOLD || '10');

        if (summary.testsWithSignificantChanges > 0) {
            return `⚠️ ${summary.testsWithSignificantChanges} test(s) show significant performance changes`;
        }

        if (net > NET_PCT_THRESHOLD) {
            return `⚠️ Aggregate net rendering cost increased ${net > 0 ? '+' : ''}${net.toFixed(1)}% (distributed across many tests)`;
        }

        if (net > 0) {
            return `ℹ️ Small net rendering cost increase: +${net.toFixed(1)}% (below gating thresholds)`;
        }

        return '✅ No significant performance regressions detected!';
    }

    private static generateHeadlineOverallDelta(
        summary: ComparisonReport['summary'],
    ): string {
        if (summary.testsWithBaseline === 0) {
            return '';
        }

        const delta = summary.overallNetDurationChange;
        const neutralBand = Number(process.env.PERF_HEADLINE_NEUTRAL_PCT || '15');
        const sign = delta > 0 ? '+' : '';
        const abs = Math.abs(delta);

        let verdict: string;

        if (abs <= neutralBand) {
            verdict = 'neutral';
        } else if (delta < 0) {
            verdict = 'optimization';
        } else {
            verdict = 'regression';
        }

        let icon = 'ℹ️';

        if (verdict === 'optimization') {
            icon = '✅';
        } else if (verdict === 'regression') {
            icon = '❌';
        }

        return `Overall Rendering Cost Δ: ${sign}${delta.toFixed(2)}% ${icon} (neutral ±${neutralBand}%) – ${verdict}`;
    }

    /**
     * Generates the details section of the markdown report
     */
    private static generateDetailsSection(
        filteredDetails: MetricsComparison[],
        allDetails: MetricsComparison[],
        changeThreshold: number,
        overallNetRegressed: boolean,
    ): string {
        if (filteredDetails.length === 0) {
            return '';
        }

        let section = '\n';

        section += '<details open>\n';
        const suppressedCount = allDetails.length - filteredDetails.length;

        section += `<summary>Visible tests (≥ ${changeThreshold}%): ${filteredDetails.length} of ${allDetails.length}</summary>\n\n`;
        section +=
            '| Test Name | Layout Ops | Layout ms | Recalc Ops | Recalc ms | Layout ms/op (median) | Recalc ms/op (median) | Net Δ ms | Net Δ % |\n';
        section +=
            '|-----------|------------|-----------|-----------|-----------|------------------------|-------------------------|---------|---------|\n';
        // Removed extra blank line to keep markdown table intact

        for (const detail of filteredDetails) {
            section += `${this.generateTableRow(detail, changeThreshold, overallNetRegressed)}\n`;
        }

        section += '</details>\n\n';

        const showSuppressed =
            (process.env.PERF_SHOW_SUPPRESSED_COUNT || 'false').toLowerCase() === 'true';

        if (showSuppressed && suppressedCount > 0) {
            section += `_(${suppressedCount} additional test${suppressedCount === 1 ? '' : 's'} suppressed as noise: below absolute ms floor or isolated count fluctuations without material net cost.)_\n\n`;
        }

        return section;
    }

    /**
     * Final multi-line verdict appended after the details table
     */
    // generateFinalVerdictSection removed

    /**
     * Generates a single table row for a test comparison
     */
    private static generateTableRow(
        detail: MetricsComparison,
        changeThreshold: number,
        _overallNetRegressed: boolean,
    ): string {
        const {testName, baseline, current} = detail;

        const trim = (v: string): string => (v.endsWith('.0') ? v.slice(0, -2) : v);

        const fmt = (v: number, decimals = 1): string => {
            if (Number.isInteger(v)) {
                return String(v);
            }

            return trim(v.toFixed(decimals));
        };

        const currentLayoutAvg =
            current.layoutAvgPerOp ??
            (current.layoutCount > 0 ? current.layoutDuration / current.layoutCount : 0);
        const baselineLayoutAvg =
            baseline?.layoutAvgPerOp ??
            (baseline?.layoutCount
                ? baseline.layoutDuration / baseline.layoutCount
                : undefined);
        const currentRecalcAvg =
            current.recalcAvgPerOp ??
            (current.recalcStyleCount > 0
                ? current.recalcStyleDuration / current.recalcStyleCount
                : 0);
        const baselineRecalcAvg =
            baseline?.recalcAvgPerOp ??
            (baseline?.recalcStyleCount
                ? baseline.recalcStyleDuration / baseline.recalcStyleCount
                : undefined);

        const currentLayoutMedian = current.layoutMedianPerOp ?? currentLayoutAvg;
        const baselineLayoutMedian = baseline?.layoutMedianPerOp ?? baselineLayoutAvg;
        const currentRecalcMedian = current.recalcMedianPerOp ?? currentRecalcAvg;
        const baselineRecalcMedian = baseline?.recalcMedianPerOp ?? baselineRecalcAvg;

        const formatCell = (base: number | undefined, cur: number, unit = ''): string => {
            if (base === undefined) {
                return `${fmt(cur)}${unit} (new)`;
            }

            const diff = cur - base;
            const pct = base !== 0 ? (diff / base) * 100 : 0;
            const pctSign = pct > 0 ? '+' : '';
            const pctStr = `${pctSign}${pct.toFixed(1)}%`;
            const diffAbs = Math.abs(diff);
            let diffStr = '0';

            if (diffAbs !== 0) {
                diffStr = `${diff > 0 ? '+' : '-'}${fmt(diffAbs, unit ? 2 : 1)}`;
            }

            const severe = Math.abs(pct) >= changeThreshold;
            let emoji = '';

            if (pct > 0) {
                emoji = severe ? '❌' : '';
            } else if (pct < 0 && Math.abs(pct) >= changeThreshold) {
                emoji = '✅';
            }

            const core = `${fmt(cur)}${unit} (${diffStr}${unit}, ${pctStr})`;

            if (severe) {
                return `**${core}**${emoji ? ` ${emoji}` : ''}`;
            }

            return `${core}${emoji ? ` ${emoji}` : ''}`;
        };

        const netMs =
            current.layoutDuration +
            current.recalcStyleDuration -
            ((baseline?.layoutDuration || 0) + (baseline?.recalcStyleDuration || 0));
        const baseNet =
            (baseline?.layoutDuration || 0) + (baseline?.recalcStyleDuration || 0);
        const netPct = baseNet > 0 ? (netMs / baseNet) * 100 : 0;
        let netEmoji = '';

        if (baseline) {
            if (netMs > 0) {
                const netThreshold = Number(
                    process.env.PERF_NET_PERCENT_THRESHOLD || '10',
                );

                netEmoji = Math.abs(netPct) >= netThreshold ? '❌' : '';
            } else if (netMs < 0 && Math.abs(netPct) >= changeThreshold) {
                netEmoji = '✅';
            }
        }

        const netCell = baseline ? `${netMs > 0 ? '+' : ''}${netMs.toFixed(2)}ms` : 'new';
        const netPctCell = baseline
            ? `${netPct > 0 ? '+' : ''}${netPct.toFixed(1)}%${
                  netEmoji ? ` ${netEmoji}` : ''
              }`
            : 'new';

        return `| ${testName} | ${formatCell(baseline?.layoutCount, current.layoutCount)} | ${formatCell(baseline?.layoutDuration, current.layoutDuration, 'ms')} | ${formatCell(baseline?.recalcStyleCount, current.recalcStyleCount)} | ${formatCell(baseline?.recalcStyleDuration, current.recalcStyleDuration, 'ms')} | ${formatCell(baselineLayoutMedian, currentLayoutMedian, 'ms')} | ${formatCell(baselineRecalcMedian, currentRecalcMedian, 'ms')} | ${netCell} | ${netPctCell} |`;
    }

    // Aggregate multiple run metrics into robust median with outlier filtering
    private static aggregateRuns(runs: PerformanceMetrics[]): PerformanceMetrics {
        const values = <K extends keyof PerformanceMetrics>(k: K): number[] =>
            runs
                .map((r) => r[k]!)
                .filter((v) => typeof v === 'number' && !Number.isNaN(v));
        const median = (arr: number[]): number => {
            if (arr.length === 0) {
                return 0;
            }

            const sorted = [...arr].sort((a, b) => a - b);
            const mid = Math.floor(sorted.length / 2);

            if (sorted.length % 2) {
                return sorted[mid]!;
            }

            const a = sorted[mid - 1]!;
            const b = sorted[mid]!;

            return (a + b) / 2;
        };
        const mad = (arr: number[], med: number): number => {
            const deviations = arr.map((v) => Math.abs(v - med));

            return median(deviations);
        };
        const filterOutliers = (arr: number[]): number[] => {
            if (arr.length < 4) {
                return arr;
            } // not enough data to filter

            const sorted = [...arr].sort((a, b) => a - b);
            const q1 = sorted[Math.floor((sorted.length - 1) * 0.25)]!;
            const q3 = sorted[Math.floor((sorted.length - 1) * 0.75)]!;
            const iqr = q3 - q1;
            const med = median(sorted);
            const m = mad(sorted, med) || 1e-9;
            const lowerIQR = q1 - 1.5 * iqr;
            const upperIQR = q3 + 1.5 * iqr;

            return sorted.filter(
                (v) => v >= lowerIQR && v <= upperIQR && Math.abs(v - med) <= 3 * m,
            );
        };
        const aggValue = (arr: number[]): number => {
            const filtered = filterOutliers(arr);

            return median(filtered);
        };
        const layoutCount = Math.round(aggValue(values('layoutCount')));
        const recalcStyleCount = Math.round(aggValue(values('recalcStyleCount')));
        const layoutDuration = Number(aggValue(values('layoutDuration')).toFixed(3));
        const recalcStyleDuration = Number(
            aggValue(values('recalcStyleDuration')).toFixed(3),
        );
        const result: PerformanceMetrics = {
            layoutCount,
            recalcStyleCount,
            layoutDuration,
            recalcStyleDuration,
        };

        if (layoutCount > 0) {
            result.layoutDurationPerOp = Number(
                (layoutDuration / layoutCount).toFixed(5),
            );
        }

        if (recalcStyleCount > 0) {
            result.recalcStyleDurationPerOp = Number(
                (recalcStyleDuration / recalcStyleCount).toFixed(5),
            );
        }

        // Compute CoV for variance gating
        const mean = (arr: number[]): number => {
            if (!arr.length) {
                return 0;
            }

            return arr.reduce((a, b) => a + b, 0) / arr.length;
        };
        const sdev = (arr: number[]): number => {
            if (arr.length < 2) {
                return 0;
            }

            const m = mean(arr);

            if (m === 0) {
                return 0;
            }

            const variance =
                arr.reduce((acc, v) => acc + (v - m) * (v - m), 0) / (arr.length - 1);

            return Math.sqrt(variance);
        };
        const coeffVar = (arr: number[]): number => {
            if (!arr.length) {
                return 0;
            }

            const m = mean(arr);

            if (m === 0) {
                return 0;
            }

            return sdev(arr) / m;
        };

        result.layoutCountCoV = coeffVar(values('layoutCount'));
        result.layoutDurationCoV = coeffVar(values('layoutDuration'));
        result.recalcStyleCountCoV = coeffVar(values('recalcStyleCount'));
        result.recalcStyleDurationCoV = coeffVar(values('recalcStyleDuration'));

        if (result.layoutDurationPerOp !== undefined) {
            const perOpLayoutArray = runs.map((r) =>
                r.layoutCount > 0 ? r.layoutDuration / r.layoutCount : 0,
            );

            result.layoutDurationPerOpCoV = coeffVar(perOpLayoutArray);
        }

        if (result.recalcStyleDurationPerOp !== undefined) {
            const perOpRecalcArray = runs.map((r) =>
                r.recalcStyleCount > 0 ? r.recalcStyleDuration / r.recalcStyleCount : 0,
            );

            result.recalcStyleDurationPerOpCoV = coeffVar(perOpRecalcArray);
        }

        return result;
    }

    /**
     * Generates the footer section of the markdown report
     */
    private static generateFooter(totalTests: number): string {
        if (totalTests === 0) {
            return '_No performance metrics collected in this run._';
        }

        return '';
    }
}

/**
 * Utility class for aggregating multiple performance markdown reports into a single report
 */
export class PerformanceReportAggregator {
    /**
     * Aggregates multiple markdown reports into a single grouped table
     */
    public static async aggregateMarkdownReports(
        inputDir: string,
        outputFile: string,
    ): Promise<void> {
        const threshold = Number(process.env.PERF_AGGREGATE_VISIBILITY_THRESHOLD || '30');
        const githubOutputPath = process.env.GITHUB_OUTPUT;

        let mdFiles: string[];

        try {
            mdFiles = await this.findMarkdownFiles(inputDir);
        } catch (error) {
            throw new Error(
                `Failed to search for markdown files in '${inputDir}': ${error instanceof Error ? error.message : String(error)}`,
            );
        }

        if (mdFiles.length === 0) {
            console.info(
                `No markdown files found in '${inputDir}', writing empty report`,
            );
            await this.writeEmptyReport(outputFile, githubOutputPath);

            return;
        }

        console.info(`Found ${mdFiles.length} markdown files to aggregate`);

        let tableRows: Set<string>;
        let emptyShardCount: number;

        try {
            const result =
                await PerformanceReportAggregator.extractTableRowsAndEmptyShards(mdFiles);

            tableRows = result.tableRows;
            emptyShardCount = result.emptyShardCount;
        } catch (error) {
            throw new Error(
                `Failed to extract table rows from markdown files: ${error instanceof Error ? error.message : String(error)}`,
            );
        }

        if (tableRows.size === 0 && emptyShardCount === 0) {
            console.info(
                `No significant changes found (threshold: ${threshold}%), writing no-changes report`,
            );
            await this.writeNoChangesReport(outputFile, threshold, githubOutputPath);

            return;
        }

        console.info(`Aggregating ${tableRows.size} table rows into final report`);

        if (emptyShardCount > 0) {
            console.info(`Note: ${emptyShardCount} shard(s) had no performance data`);
        }

        await this.writeAggregatedReport(
            outputFile,
            tableRows,
            emptyShardCount,
            githubOutputPath,
        );
    }

    /**
     * Recursively finds all markdown files in a directory
     */
    private static async findMarkdownFiles(dir: string, maxDepth = 2): Promise<string[]> {
        const walk = async (current: string, depth: number): Promise<string[]> => {
            if (depth > maxDepth) {
                return [];
            }

            const entries = await readdir(current, {withFileTypes: true});
            const files: string[] = [];

            for (const entry of entries) {
                const fullPath = join(current, entry.name);

                if (entry.isDirectory()) {
                    files.push(...(await walk(fullPath, depth + 1)));
                } else if (entry.isFile() && entry.name.endsWith('.md')) {
                    files.push(fullPath);
                }
            }

            return files;
        };

        try {
            const dirStat = await stat(dir);

            if (!dirStat.isDirectory()) {
                return [];
            }
        } catch {
            return [];
        }

        return walk(dir, 0);
    }

    /**
     * Extracts table data rows from markdown files and counts empty shards
     */
    private static async extractTableRowsAndEmptyShards(files: string[]): Promise<{
        tableRows: Set<string>;
        emptyShardCount: number;
    }> {
        const rowSet = new Set<string>();
        let processedFiles = 0;
        let skippedFiles = 0;
        let emptyShardCount = 0;

        for (const file of files) {
            try {
                const content = await readFile(file, 'utf8');
                const lines = content.split(/\r?\n/);
                let hasTableData = false;

                for (const line of lines) {
                    if (this.isTableDataRow(line)) {
                        rowSet.add(line);
                        hasTableData = true;
                    }
                }

                // Check if this was an empty shard report
                if (
                    !hasTableData &&
                    content.includes('No performance metrics collected in this shard')
                ) {
                    emptyShardCount++;
                }

                processedFiles++;
            } catch (error) {
                skippedFiles++;
                console.warn(
                    `Skipped unreadable file ${file}: ${error instanceof Error ? error.message : String(error)}`,
                );
            }
        }

        console.info(
            `Processed ${processedFiles} files, skipped ${skippedFiles} files, found ${rowSet.size} unique table rows, ${emptyShardCount} empty shards`,
        );

        return {tableRows: rowSet, emptyShardCount};
    }

    /**
     * Checks if a line is a table data row (not header or separator)
     */
    private static isTableDataRow(line: string): boolean {
        if (!line.startsWith('|')) {
            return false;
        }

        if (this.isTableHeaderRow(line) || this.isTableSeparatorRow(line)) {
            return false;
        }

        const parts = line.split('|');

        // Accept legacy rows (with durations) length>=8 and compact rows length>=6
        return parts.length >= 6;
    }

    /**
     * Checks if a line is a table header row
     */
    private static isTableHeaderRow(line: string): boolean {
        return line.startsWith('| Component | Test Name |');
    }

    /**
     * Checks if a line is a table separator row
     */
    private static isTableSeparatorRow(line: string): boolean {
        return /^\|[\s|-]+\|$/.test(line);
    }

    /**
     * Extracts component name from a table row
     */
    private static getComponentFromRow(row: string): string {
        const parts = row.split('|');

        return parts[1]?.trim() || '';
    }

    /**
     * Sorts and groups table rows by component
     */
    private static sortAndGroupRows(rows: Set<string>): string[] {
        const sortedRows = Array.from(rows).sort((a, b) => {
            const componentA = this.getComponentFromRow(a).toLowerCase();
            const componentB = this.getComponentFromRow(b).toLowerCase();

            if (componentA !== componentB) {
                return componentA.localeCompare(componentB);
            }

            return a.localeCompare(b);
        });

        // Insert spacer rows between different components
        const groupedRows: string[] = [];
        let previousComponent = '';

        for (const row of sortedRows) {
            const currentComponent = this.getComponentFromRow(row);

            if (previousComponent && currentComponent !== previousComponent) {
                groupedRows.push('|  |  |  |  |  |  |'); // Spacer row
            }

            groupedRows.push(row);
            previousComponent = currentComponent;
        }

        return groupedRows;
    }

    /**
     * Writes an empty report when no markdown files are found
     */
    private static async writeEmptyReport(
        outputFile: string,
        githubOutputPath?: string,
    ): Promise<void> {
        const content =
            '## 📊 Performance Metrics Comparison\n\n_No performance metrics collected in this run._\n';

        // Ensure output directory exists
        const outputDir = dirname(outputFile);

        try {
            mkdirSync(outputDir, {recursive: true});
        } catch (error) {
            throw new Error(
                `Failed to create output directory '${outputDir}': ${error instanceof Error ? error.message : String(error)}`,
            );
        }

        try {
            await writeFile(outputFile, content);
        } catch (error) {
            throw new Error(
                `Failed to write empty report to '${outputFile}': ${error instanceof Error ? error.message : String(error)}`,
            );
        }

        if (githubOutputPath) {
            try {
                await appendFile(githubOutputPath, 'performance_data_exists=false\n');
            } catch (error) {
                console.warn(
                    `Failed to write to GitHub output: ${error instanceof Error ? error.message : String(error)}`,
                );
            }
        }
    }

    /**
     * Writes a report when no significant changes are found
     */
    private static async writeNoChangesReport(
        outputFile: string,
        threshold: number,
        githubOutputPath?: string,
    ): Promise<void> {
        const content = `## 📊 Performance Metrics Comparison\n\n*No tests found with changes ≥ ${threshold}%*\n`;

        // Ensure output directory exists
        const outputDir = dirname(outputFile);

        try {
            mkdirSync(outputDir, {recursive: true});
        } catch (error) {
            throw new Error(
                `Failed to create output directory '${outputDir}': ${error instanceof Error ? error.message : String(error)}`,
            );
        }

        try {
            await writeFile(outputFile, content);
        } catch (error) {
            throw new Error(
                `Failed to write no-changes report to '${outputFile}': ${error instanceof Error ? error.message : String(error)}`,
            );
        }

        if (githubOutputPath) {
            try {
                await appendFile(githubOutputPath, 'performance_data_exists=true\n');
            } catch (error) {
                console.warn(
                    `Failed to write to GitHub output: ${error instanceof Error ? error.message : String(error)}`,
                );
            }
        }
    }

    /**
     * Writes the final aggregated report with grouped table
     */
    private static async writeAggregatedReport(
        outputFile: string,
        tableRows: Set<string>,
        emptyShardCount: number,
        githubOutputPath?: string,
    ): Promise<void> {
        const groupedRows = this.sortAndGroupRows(tableRows);
        const parts: string[] = [];

        parts.push('## 📊 Aggregated Performance Results');
        parts.push('');

        if (emptyShardCount > 0) {
            parts.push(`_(${emptyShardCount} shard(s) produced no visible changes)_`);
            parts.push('');
        }

        for (const [groupKey, rows] of Object.entries(groupedRows)) {
            parts.push(`### ${groupKey}`);
            parts.push('');
            parts.push(
                '| Test Name | Layout Ops | Layout ms | Recalc Ops | Recalc ms | Layout ms/op (median) | Recalc ms/op (median) | Net Δ ms | Net Δ % |',
            );
            parts.push(
                '|-----------|------------|-----------|-----------|-----------|------------------------|-------------------------|---------|---------|',
            );

            for (const row of rows) {
                parts.push(row);
            }

            parts.push('');
        }

        const content = parts.join('\n');
        const outputDir = dirname(outputFile);

        try {
            mkdirSync(outputDir, {recursive: true});
        } catch (error) {
            throw new Error(
                `Failed to create output directory '${outputDir}': ${error instanceof Error ? error.message : String(error)}`,
            );
        }

        try {
            await writeFile(outputFile, content);
        } catch (error) {
            throw new Error(
                `Failed to write aggregated report to '${outputFile}': ${error instanceof Error ? error.message : String(error)}`,
            );
        }

        if (githubOutputPath) {
            try {
                await appendFile(githubOutputPath, 'performance_data_exists=true\n');
            } catch (error) {
                console.warn(
                    `Failed to write to GitHub output: ${error instanceof Error ? error.message : String(error)}`,
                );
            }
        }
    }
}

async function main(): Promise<void> {
    const [, , arg1, arg2, arg3] = process.argv; // legacy change-threshold arg deprecated

    if (arg1 === 'aggregate-md' || arg1 === '--aggregate-md') {
        // Aggregate markdown mode
        const inputDir = arg2 || './performance/diff';
        const outputFile = arg3 || './performance-report.md';

        try {
            await PerformanceReportAggregator.aggregateMarkdownReports(
                inputDir,
                outputFile,
            );
            console.info(`✅ Markdown reports aggregated successfully to: ${outputFile}`);
        } catch (error) {
            console.error(
                '❌ Failed to aggregate markdown reports:',
                error instanceof Error ? error.message : String(error),
            );
            process.exit(1);
        }
    } else {
        // Performance comparison mode
        const baselinePath = arg1;
        const currentPath = arg2;
        const outputPath = arg3;

        if (!baselinePath || !currentPath || !outputPath) {
            console.error(
                'Usage:\n' +
                    '  npx ts-node performance-comparison.ts <baseline-path> <current-path> <output-path>\n' +
                    '  npx ts-node performance-comparison.ts aggregate-md [input-dir] [output-file]',
            );
            process.exit(1);
        }

        const envVis = Number(process.env.PERF_VISIBILITY_THRESHOLD || '');
        const changeThreshold =
            !Number.isNaN(envVis) && envVis > 0
                ? envVis
                : PerformanceComparison.defaultChangeThreshold;

        try {
            await PerformanceComparison.compareAndReport(
                baselinePath,
                currentPath,
                outputPath,
                changeThreshold,
            );
        } catch (error) {
            console.error(
                '❌ Performance comparison failed:',
                error instanceof Error ? error.message : String(error),
            );
            console.error('\n💡 Common issues:');
            console.error(
                '  - Make sure both baseline and current performance data directories exist',
            );
            console.error('  - Verify that performance tests have been run successfully');
            console.error('  - Check that the output directory is writable');
            console.error('  - Ensure JSON files in the metrics directories are valid');
            process.exit(1);
        }
    }
}

// Run CLI if this file is executed directly
if (require.main === module) {
    main().catch((error: unknown) => {
        console.error('Unexpected error:', error);
        process.exit(1);
    });
}
