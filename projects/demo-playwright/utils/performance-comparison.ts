import {mkdirSync} from 'fs';
import {appendFile, readdir, readFile, stat, writeFile} from 'fs/promises';
import {dirname, join, resolve} from 'path';

/**
 * Core performance metrics collected via CDP
 */
interface PerformanceMetrics {
    layoutCount: number;
    layoutDuration: number;
    recalcStyleCount: number;
    recalcStyleDuration: number;
    layoutDurationPerOp?: number;
    recalcStyleDurationPerOp?: number;
    layoutCountCoV?: number;
    layoutDurationCoV?: number;
    recalcStyleCountCoV?: number;
    recalcStyleDurationCoV?: number;
    layoutDurationPerOpCoV?: number;
    recalcStyleDurationPerOpCoV?: number;
}

/**
 * Performance data structure saved to JSON files
 */
interface PerformanceData {
    timestamp: number;
    testStartTime?: number;
    testDuration?: number;
    url: string;
    testName: string;
    source: string;
    metrics: PerformanceMetrics;
}

/**
 * Comparison between baseline and current metrics for a single test
 */
interface MetricsComparison {
    testName: string;
    component: string;
    baseline?: PerformanceMetrics;
    current: PerformanceMetrics;
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
    public static readonly DEFAULT_CHANGE_THRESHOLD = 6; // Minimum % change to show in table (filters noise)
    public static readonly DEFAULT_COUNT_PERCENT_THRESHOLD = 15; // % op count increase considered significant
    public static readonly DEFAULT_PER_OP_PERCENT_THRESHOLD = 9; // % per-op duration increase considered significant

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

            // eslint-disable-next-line no-console
            console.log(
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

                    group[key]!.push(data);
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

                metrics.set(testName, {
                    timestamp: Date.now(),
                    testStartTime: last.testStartTime,
                    testDuration: last.testDuration,
                    url: last.url,
                    testName: last.testName,
                    source: usable[0]!.source,
                    metrics: agg,
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
        _changeThreshold: number = this.DEFAULT_CHANGE_THRESHOLD,
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
        const gatingThreshold = Number(process.env.PERFORMANCE_CHANGE_THRESHOLD || '10');
        const testsWithSignificantChanges = details.filter((d) =>
            this.isRegressionCandidate(d, gatingThreshold),
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
        changeThreshold: number = this.DEFAULT_CHANGE_THRESHOLD,
    ): string {
        const {summary, details} = report;
        const filteredDetails = this.filterDetailsByThreshold(details, changeThreshold);

        let markdown = '## 📊 Performance Metrics Comparison\n\n';

        const statusLine = this.generateStatusLine(summary);

        if (statusLine) {
            markdown += `${statusLine}\n\n`;
        }

        // Show final verdict early, then summary, then per-test details
        markdown += this.generateFinalVerdictSection(summary, changeThreshold);
        markdown += this.generateSummarySection(summary);

        if (summary.testsWithSignificantChanges > 0) {
            markdown += this.generateDetailsSection(
                filteredDetails,
                details,
                changeThreshold,
            );
        }

        markdown += this.generateFooter(summary.totalTests);

        return markdown;
    }

    /**
     * Generates a markdown report when no performance data is available
     */
    public static generateEmptyMarkdownReport(): string {
        return '## 📊 Performance Metrics Comparison\n\n_No performance metrics collected in this shard._\n\n# Tests completed successfully :white_check_mark:\n\nGood job :fire:';
    }

    /**
     * Main comparison function for CI integration
     */
    public static async compareAndReport(
        baselinePath: string,
        currentPath: string,
        outputPath: string,
        changeThreshold: number = this.DEFAULT_CHANGE_THRESHOLD,
    ): Promise<ComparisonReport> {
        // eslint-disable-next-line no-console
        console.log('🔍 Aggregating baseline metrics...');

        let baseline: Map<string, PerformanceData>;

        try {
            baseline = await this.aggregateMetrics(baselinePath);
        } catch (error) {
            console.warn(
                `⚠️ Could not load baseline metrics: ${error instanceof Error ? error.message : String(error)}`,
            );
            baseline = new Map();
        }

        // eslint-disable-next-line no-console
        console.log('🔍 Aggregating current metrics...');

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

            // Create an empty report
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

            // Generate markdown report for empty case
            const markdown = this.generateEmptyMarkdownReport();

            // Ensure output directory exists
            const outputDir = dirname(outputPath);

            try {
                mkdirSync(outputDir, {recursive: true});
            } catch (error) {
                throw new Error(
                    `Failed to create output directory '${outputDir}': ${error instanceof Error ? error.message : String(error)}`,
                );
            }

            // Save report
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

        // eslint-disable-next-line no-console
        console.log('📊 Comparing metrics...');

        const report = this.compareMetrics(baseline, current, changeThreshold);

        // Generate markdown report
        const markdown = this.generateMarkdownReport(report, changeThreshold);

        // Ensure output directory exists
        const outputDir = dirname(outputPath);

        try {
            mkdirSync(outputDir, {recursive: true});
        } catch (error) {
            throw new Error(
                `Failed to create output directory '${outputDir}': ${error instanceof Error ? error.message : String(error)}`,
            );
        }

        // Save report
        try {
            await writeFile(outputPath, markdown);
        } catch (error) {
            throw new Error(
                `Failed to write performance report to '${outputPath}': ${error instanceof Error ? error.message : String(error)}`,
            );
        }

        // eslint-disable-next-line no-console
        console.log(`✅ Performance comparison report saved to: ${outputPath}`);

        // eslint-disable-next-line no-console
        console.log(
            `📈 Summary: ${report.summary.totalTests} tests, ${report.summary.testsWithBaseline} with baseline, ${report.summary.testsWithSignificantChanges} with significant changes`,
        );

        return report;
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
        // Normalized per operation durations (guard divide by zero)
        const currentLayoutPerOp =
            currentMetrics.layoutCount > 0
                ? currentMetrics.layoutDuration / currentMetrics.layoutCount
                : 0;
        const currentRecalcPerOp =
            currentMetrics.recalcStyleCount > 0
                ? currentMetrics.recalcStyleDuration / currentMetrics.recalcStyleCount
                : 0;
        const baselineLayoutPerOp =
            baselineMetrics && baselineMetrics.layoutCount > 0
                ? baselineMetrics.layoutDuration / baselineMetrics.layoutCount
                : 0;
        const baselineRecalcPerOp =
            baselineMetrics && baselineMetrics.recalcStyleCount > 0
                ? baselineMetrics.recalcStyleDuration / baselineMetrics.recalcStyleCount
                : 0;

        return {
            testName,
            component,
            baseline: baselineMetrics,
            current: currentMetrics,
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
                    baselineLayoutPerOp || 0,
                    currentLayoutPerOp || 0,
                ),
                recalcStyleDurationPerOp: this.calculatePercentageChange(
                    baselineRecalcPerOp || 0,
                    currentRecalcPerOp || 0,
                ),
            },
        };
    }

    /**
     * Checks if a comparison has significant duration changes using threshold (env or default)
     */
    private static hasSignificantDurationChanges(comparison: MetricsComparison): boolean {
        const threshold = Number(process.env.PERFORMANCE_CHANGE_THRESHOLD || '10');

        return (
            Math.abs(comparison.changes.layoutDuration) > threshold ||
            Math.abs(comparison.changes.recalcStyleDuration) > threshold
        );
    }

    /**
     * Filters test details to only show meaningful changes
     */
    private static filterDetailsByThreshold(
        details: MetricsComparison[],
        changeThreshold: number,
    ): MetricsComparison[] {
        return details.filter((detail) => {
            if (!detail.baseline) {
                return true;
            } // show new tests

            return this.isRegressionCandidate(detail, changeThreshold);
        });
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
                : PerformanceComparison.DEFAULT_COUNT_PERCENT_THRESHOLD;
        const perOpPct =
            !Number.isNaN(perOpEnv) && perOpEnv > 0
                ? perOpEnv
                : PerformanceComparison.DEFAULT_PER_OP_PERCENT_THRESHOLD;

        const baseline = detail.baseline;
        const diff = detail.diff;
        const lc = detail.changes.layoutCount;
        const rc = detail.changes.recalcStyleCount;
        const lp = detail.changes.layoutDurationPerOp || 0;
        const rp = detail.changes.recalcStyleDurationPerOp || 0;
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
        const layoutPerOpNotImproved = lp >= -perOpPct;
        const recalcPerOpNotImproved = rp >= -perOpPct;
        const countsStable = Math.abs(lc) < countPct && Math.abs(rc) < countPct;
        const perOpIncreaseLayout = lp > perOpPct;
        const perOpIncreaseRecalc = rp > perOpPct;

        const ignoreDurations = process.env.PERF_IGNORE_DURATION_REGRESSIONS === '1';
        const maxCov = Number(process.env.PERF_MAX_COV || '0.15');
        const isStable = (cov?: number): boolean => cov === undefined || cov <= maxCov;

        // Eligibility when we still consider duration changes
        const layoutEligible =
            !isThemeSwitchTest &&
            !ignoreLayoutTiny &&
            baseline.layoutDuration >= MIN_BASELINE_DURATION &&
            layoutAbsDelta >= ABS_DELTA_FLOOR;
        const recalcEligible =
            baseline.recalcStyleDuration >= MIN_BASELINE_DURATION &&
            recalcAbsDelta >= ABS_DELTA_FLOOR;

        if (ignoreDurations) {
            const layoutEligibleCounts =
                !isThemeSwitchTest && baseline.layoutCount >= MIN_BASELINE_LAYOUT_COUNT;
            const recalcEligibleCounts =
                baseline.recalcStyleCount >= MIN_BASELINE_LAYOUT_COUNT;
            const layoutDelta = diff.layoutDuration;
            const recalcDelta = diff.recalcStyleDuration;
            const netCost = layoutDelta + recalcDelta; // recalc improvement reduces net cost

            const layoutCountGate =
                layoutEligibleCounts &&
                lc > countPct &&
                absLayoutCountDelta >= MIN_ABSOLUTE_COUNT_DELTA &&
                layoutDelta >= ABS_DELTA_FLOOR;
            const recalcCountGate =
                recalcEligibleCounts &&
                rc > countPct &&
                absRecalcCountDelta >= MIN_ABSOLUTE_COUNT_DELTA &&
                recalcDelta >= ABS_DELTA_FLOOR;

            const varianceOk =
                isStable(baseline.layoutCountCoV) &&
                isStable(baseline.recalcStyleCountCoV);

            return (
                (layoutCountGate || recalcCountGate) &&
                netCost > 0 &&
                netCost >= NET_COST_FLOOR &&
                varianceOk
            );
        }

        const layoutCountDriven =
            layoutEligible && layoutCountIncrease && layoutPerOpNotImproved;
        const recalcCountDriven =
            recalcEligible && recalcCountIncrease && recalcPerOpNotImproved;
        const perOpOnlyLayout = layoutEligible && countsStable && perOpIncreaseLayout;
        const perOpOnlyRecalc = recalcEligible && countsStable && perOpIncreaseRecalc;
        const netCost = diff.layoutDuration + diff.recalcStyleDuration;

        const varianceOk =
            isStable(baseline.layoutCountCoV) &&
            isStable(baseline.recalcStyleCountCoV) &&
            isStable(baseline.layoutDurationCoV) &&
            isStable(baseline.recalcStyleDurationCoV) &&
            isStable(baseline.layoutDurationPerOpCoV) &&
            isStable(baseline.recalcStyleDurationPerOpCoV);

        const gated =
            layoutCountDriven || recalcCountDriven || perOpOnlyLayout || perOpOnlyRecalc;

        return gated && netCost > 0 && netCost >= NET_COST_FLOOR && varianceOk;
    }

    /**
     * Generates the summary section of the markdown report
     */
    private static generateSummarySection(summary: ComparisonReport['summary']): string {
        // Build bullet lines then wrap in a collapsible details block
        const lines: string[] = [];
        // Keep old bullet formatting logic (only icons & percentages)
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

        // Order of importance (excluding Net which is in Final Result):
        // 1. Overall layout duration
        // 2. Overall recalc duration
        // 3. Max layout duration change
        // 4. Max recalc duration change
        // 5. Max layout ops change
        // 6. Max recalc ops change
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
        if (summary.testsWithSignificantChanges === 0 && summary.testsWithBaseline > 0) {
            return '✅ No significant performance regressions detected!';
        }

        if (summary.testsWithSignificantChanges > 0) {
            return `⚠️ ${summary.testsWithSignificantChanges} test(s) show significant performance changes`;
        }

        return '';
    }

    /**
     * Generates the details section of the markdown report
     */
    private static generateDetailsSection(
        filteredDetails: MetricsComparison[],
        allDetails: MetricsComparison[],
        changeThreshold: number,
    ): string {
        if (filteredDetails.length === 0) {
            return '';
        }

        let section = '\n';

        section += '<details open>\n';
        section += `<summary>Tests with changes ≥ ${changeThreshold}% (${filteredDetails.length} of ${allDetails.length})</summary>\n\n`;
        section +=
            '| Test Name | Layout Ops | Layout Duration | Recalc Ops | Recalc Duration |\n';
        section +=
            '|-----------|------------|----------------|-----------|-----------------|\n';
        // Removed extra blank line to keep markdown table intact

        for (const detail of filteredDetails) {
            section += this.generateTableRow(detail, changeThreshold);
        }

        section += '</details>\n\n';

        return section;
    }

    /**
     * Final multi-line verdict appended after the details table
     */
    private static generateFinalVerdictSection(
        summary: ComparisonReport['summary'],
        changeThreshold: number,
    ): string {
        if (summary.testsWithBaseline === 0) {
            return '';
        }

        const netDur = summary.overallNetDurationChange;
        const netIcon = netDur > 0 ? '❌' : '✅';
        const verdictFail = summary.testsWithSignificantChanges > 0 && netDur > 0;
        const verdict = verdictFail ? '❌' : '✅';
        const reason = verdictFail
            ? `${summary.testsWithSignificantChanges} test(s) exceeded the ${changeThreshold}% gating criteria`
            : 'No significant net regression';

        const explanation =
            'Net rendering cost = combined layout + style recalculation duration change (positive = slower, negative = faster).';

        return [
            '',
            'Final Result',
            '',
            `- Net rendering cost: ${netDur > 0 ? '+' : ''}${netDur.toFixed(1)}% ${netIcon}`,
            `- ${explanation}`,
            `- Verdict: ${verdict} (${reason})`,
            '',
        ].join('\n');
    }

    /**
     * Generates a single table row for a test comparison
     */
    private static generateTableRow(
        detail: MetricsComparison,
        changeThreshold: number,
    ): string {
        const {testName, baseline, current, changes} = detail;

        const trim = (v: string): string => (v.endsWith('.0') ? v.slice(0, -2) : v);
        const fmtVal = (v: number, decimals = 1): string => {
            if (Number.isInteger(v)) {
                return String(v);
            }

            return trim(v.toFixed(decimals));
        };
        const formatChange = (
            baselineValue: number | undefined,
            currentValue: number,
            change: number,
            unit = '',
        ): string => {
            if (baselineValue === undefined) {
                return `${fmtVal(currentValue)}${unit} (new)`;
            }

            if (Math.abs(change) < changeThreshold) {
                return `${fmtVal(currentValue)}${unit}`;
            }

            const isSignificant = Math.abs(change) >= 10;
            const sign = change > 0 ? '+' : '';
            const changeStr = trim(change.toFixed(1));
            const indicator = change > 0 ? '❌' : '✅';
            const percentWithIndicator = `${sign}${changeStr}% ${indicator}`;
            const beforeAfterCore = `${fmtVal(baselineValue)}${unit} ← ${percentWithIndicator} → ${fmtVal(currentValue)}${unit}`;

            return isSignificant ? `**${beforeAfterCore}**` : beforeAfterCore;
        };

        return `| ${testName} | ${formatChange(baseline?.layoutCount, current.layoutCount, changes.layoutCount)} | ${formatChange(baseline?.layoutDuration, current.layoutDuration, changes.layoutDuration, '')} | ${formatChange(baseline?.recalcStyleCount, current.recalcStyleCount, changes.recalcStyleCount)} | ${formatChange(baseline?.recalcStyleDuration, current.recalcStyleDuration, changes.recalcStyleDuration, '')} |\n`;
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
        const mean = (arr: number[]): number =>
            arr.length ? arr.reduce((a, b) => a + b, 0) / arr.length : 0;
        const std = (arr: number[]): number => {
            if (arr.length < 2) {
                return 0;
            }

            const m = mean(arr);
            const variance =
                arr.reduce((acc, v) => acc + (v - m) * (v - m), 0) / arr.length;

            return Math.sqrt(variance);
        };
        const cov = (arr: number[]): number => {
            const m = mean(arr);

            if (m === 0) {
                return 0;
            }

            return std(arr) / m;
        };

        result.layoutCountCoV = cov(values('layoutCount'));
        result.layoutDurationCoV = cov(values('layoutDuration'));
        result.recalcStyleCountCoV = cov(values('recalcStyleCount'));
        result.recalcStyleDurationCoV = cov(values('recalcStyleDuration'));

        if (result.layoutDurationPerOp !== undefined) {
            const perOpLayoutArray = runs.map((r) =>
                r.layoutCount > 0 ? r.layoutDuration / r.layoutCount : 0,
            );

            result.layoutDurationPerOpCoV = cov(perOpLayoutArray);
        }

        if (result.recalcStyleDurationPerOp !== undefined) {
            const perOpRecalcArray = runs.map((r) =>
                r.recalcStyleCount > 0 ? r.recalcStyleDuration / r.recalcStyleCount : 0,
            );

            result.recalcStyleDurationPerOpCoV = cov(perOpRecalcArray);
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
        const threshold = Number(process.env.PERFORMANCE_CHANGE_THRESHOLD || '30');
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
            // eslint-disable-next-line no-console
            console.log(`No markdown files found in '${inputDir}', writing empty report`);
            await this.writeEmptyReport(outputFile, githubOutputPath);

            return;
        }

        // eslint-disable-next-line no-console
        console.log(`Found ${mdFiles.length} markdown files to aggregate`);

        let tableRows: Set<string>;
        let emptyShardCount: number;

        try {
            const result = await this.extractTableRowsAndEmptyShards(mdFiles);

            tableRows = result.tableRows;
            emptyShardCount = result.emptyShardCount;
        } catch (error) {
            throw new Error(
                `Failed to extract table rows from markdown files: ${error instanceof Error ? error.message : String(error)}`,
            );
        }

        if (tableRows.size === 0 && emptyShardCount === 0) {
            // eslint-disable-next-line no-console
            console.log(
                `No significant changes found (threshold: ${threshold}%), writing no-changes report`,
            );
            await this.writeNoChangesReport(outputFile, threshold, githubOutputPath);

            return;
        }

        // eslint-disable-next-line no-console
        console.log(`Aggregating ${tableRows.size} table rows into final report`);

        if (emptyShardCount > 0) {
            // eslint-disable-next-line no-console
            console.log(`Note: ${emptyShardCount} shard(s) had no performance data`);
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
     * Extracts table data rows from markdown files
     */
    private static async extractTableRows(files: string[]): Promise<Set<string>> {
        const rowSet = new Set<string>();
        let processedFiles = 0;
        let skippedFiles = 0;

        for (const file of files) {
            try {
                const content = await readFile(file, 'utf8');
                const lines = content.split(/\r?\n/);
                let rowsFromFile = 0;

                for (const line of lines) {
                    if (this.isTableDataRow(line)) {
                        rowSet.add(line);
                        rowsFromFile++;
                    }
                }

                processedFiles++;

                if (rowsFromFile > 0) {
                    // eslint-disable-next-line no-console
                    console.log(`Extracted ${rowsFromFile} table rows from ${file}`);
                }
            } catch (error) {
                skippedFiles++;
                console.warn(
                    `Skipped unreadable file ${file}: ${error instanceof Error ? error.message : String(error)}`,
                );
            }
        }

        // eslint-disable-next-line no-console
        console.log(
            `Processed ${processedFiles} files, skipped ${skippedFiles} files, found ${rowSet.size} unique table rows`,
        );

        return rowSet;
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

        // eslint-disable-next-line no-console
        console.log(
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

        let content = '## 📊 Performance Metrics Comparison\n\n';

        if (emptyShardCount > 0) {
            content += '### Summary\n\n';
            content += `- **Performance data found:** ${tableRows.size > 0 ? 'Yes' : 'No'}\n`;
            content += `- **Shards with no performance data:** ${emptyShardCount}\n\n`;
        }

        if (tableRows.size > 0) {
            content += '### Aggregated Results\n\n';
            content +=
                '| Component | Test Name | Layout Ops | Layout Duration | Recalc Ops | Recalc Duration |\n';
            content +=
                '|-----------|-----------|------------|-----------------|------------|------------------|\n';

            for (const row of groupedRows) {
                content += `${row}\n`;
            }
        } else {
            content += '_No performance changes detected across all shards._\n\n';
            content += '# Tests completed successfully :white_check_mark:\n\n';
            content += 'Good job :fire:\n\n';
        }

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

/**
 * CLI entry point for performance comparison and markdown aggregation
 */
async function main(): Promise<void> {
    const [, , arg1, arg2, arg3, arg4] = process.argv;

    if (arg1 === 'aggregate-md' || arg1 === '--aggregate-md') {
        // Aggregate markdown mode
        const inputDir = arg2 || './performance/diff';
        const outputFile = arg3 || './performance-report.md';

        try {
            await PerformanceReportAggregator.aggregateMarkdownReports(
                inputDir,
                outputFile,
            );
            // eslint-disable-next-line no-console
            console.log(`✅ Markdown reports aggregated successfully to: ${outputFile}`);
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
        const thresholdArg = arg4;

        if (!baselinePath || !currentPath || !outputPath) {
            console.error(
                'Usage:\n' +
                    '  npx ts-node performance-comparison.ts <baseline-path> <current-path> <output-path> [change-threshold]\n' +
                    '  npx ts-node performance-comparison.ts aggregate-md [input-dir] [output-file]',
            );
            process.exit(1);
        }

        const changeThreshold = thresholdArg
            ? parseFloat(thresholdArg)
            : PerformanceComparison.DEFAULT_CHANGE_THRESHOLD;

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
