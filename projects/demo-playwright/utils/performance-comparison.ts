import {appendFile, readdir, readFile, stat, writeFile} from 'fs/promises';
import {join, resolve} from 'path';

/**
 * Core performance metrics collected via CDP
 */
interface PerformanceMetrics {
    layoutCount: number;
    layoutDuration: number;
    recalcStyleCount: number;
    recalcStyleDuration: number;
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
    };
    details: MetricsComparison[];
}

/**
 * Utility class for analyzing and comparing performance metrics between baseline and current runs
 */
export class PerformanceComparison {
    public static readonly DEFAULT_CHANGE_THRESHOLD = 1; // Default 1% threshold

    /**
     * Reads and aggregates performance metrics from JSON files in a directory
     */
    public static async aggregateMetrics(
        metricsPath: string,
    ): Promise<Map<string, PerformanceData>> {
        const metrics = new Map<string, PerformanceData>();

        try {
            const files = await readdir(metricsPath);
            const performanceFiles = this.filterPerformanceFiles(files);

            for (const file of performanceFiles) {
                try {
                    const content = await readFile(resolve(metricsPath, file), 'utf8');
                    const data: PerformanceData = JSON.parse(content);

                    metrics.set(data.testName, data);
                } catch (error) {
                    console.warn(`Failed to parse performance file ${file}:`, error);
                }
            }
        } catch (error) {
            console.warn(`Failed to read metrics from ${metricsPath}:`, error);
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
        let testsWithSignificantChanges = 0;
        let totalLayoutChange = 0;
        let totalRecalcChange = 0;

        for (const [testName, currentData] of current) {
            const baselineData = baseline.get(testName);
            const comparison = this.createMetricsComparison(
                testName,
                currentData,
                baselineData,
            );

            details.push(comparison);

            // Track significant changes (>10% change in duration metrics)
            if (this.hasSignificantDurationChanges(comparison)) {
                testsWithSignificantChanges++;
            }

            totalLayoutChange += Math.abs(comparison.changes.layoutDuration);
            totalRecalcChange += Math.abs(comparison.changes.recalcStyleDuration);
        }

        const testsWithBaseline = details.filter((d) => d.baseline).length;

        return {
            summary: {
                totalTests: details.length,
                testsWithBaseline,
                testsWithSignificantChanges,
                averageLayoutChange:
                    details.length > 0 ? totalLayoutChange / details.length : 0,
                averageRecalcChange:
                    details.length > 0 ? totalRecalcChange / details.length : 0,
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

        markdown += this.generateSummarySection(summary);
        markdown += this.generateDetailsSection(
            filteredDetails,
            details,
            changeThreshold,
        );
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
        changeThreshold: number = this.DEFAULT_CHANGE_THRESHOLD,
    ): Promise<ComparisonReport> {
        // eslint-disable-next-line no-console
        console.log('🔍 Aggregating baseline metrics...');

        const baseline = await this.aggregateMetrics(baselinePath);

        // eslint-disable-next-line no-console
        console.log('🔍 Aggregating current metrics...');

        const current = await this.aggregateMetrics(currentPath);

        // eslint-disable-next-line no-console
        console.log('📊 Comparing metrics...');

        const report = this.compareMetrics(baseline, current, changeThreshold);

        // Generate markdown report
        const markdown = this.generateMarkdownReport(report, changeThreshold);

        // Save report
        await writeFile(outputPath, markdown);

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
            },
        };
    }

    /**
     * Checks if a comparison has significant duration changes (>10%)
     */
    private static hasSignificantDurationChanges(comparison: MetricsComparison): boolean {
        return (
            Math.abs(comparison.changes.layoutDuration) > 10 ||
            Math.abs(comparison.changes.recalcStyleDuration) > 10
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
            // Always include tests without baseline data
            if (!detail.baseline) {
                return true;
            }

            // Include tests with significant operation count changes
            return (
                Math.abs(detail.changes.layoutCount) >= changeThreshold ||
                Math.abs(detail.changes.recalcStyleCount) >= changeThreshold
            );
        });
    }

    /**
     * Generates the summary section of the markdown report
     */
    private static generateSummarySection(summary: ComparisonReport['summary']): string {
        let section = '### Summary\n';

        section += `- **Total tests with performance data:** ${summary.totalTests}\n`;
        section += `- **Tests with baseline comparison:** ${summary.testsWithBaseline}\n`;
        section += `- **Tests with significant changes (>10%):** ${summary.testsWithSignificantChanges}\n`;
        section += `- **Average layout duration change:** ${summary.averageLayoutChange.toFixed(1)}%\n`;
        section += `- **Average recalc duration change:** ${summary.averageRecalcChange.toFixed(1)}%\n\n`;

        if (summary.testsWithSignificantChanges === 0 && summary.testsWithBaseline > 0) {
            section += '✅ **No significant performance regressions detected!**\n\n';
        } else if (summary.testsWithSignificantChanges > 0) {
            section += `⚠️ **${summary.testsWithSignificantChanges} test(s) show significant performance changes**\n\n`;
        }

        return section;
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
            if (allDetails.length > 0) {
                return `### Detailed Results\n\n*No tests found with changes ≥ ${changeThreshold}% (${allDetails.length} tests checked)*\n\n`;
            }

            return '';
        }

        let section = '### Detailed Results\n\n';

        section += `*Showing only tests with changes ≥ ${changeThreshold}% (${filteredDetails.length} of ${allDetails.length} tests)*\n\n`;
        section +=
            '| Component | Test Name | Layout Ops | Layout Duration | Recalc Ops | Recalc Duration |\n';
        section +=
            '|-----------|-----------|------------|-----------------|------------|------------------|\n';

        for (const detail of filteredDetails) {
            section += this.generateTableRow(detail, changeThreshold);
        }

        return section;
    }

    /**
     * Generates a single table row for a test comparison
     */
    private static generateTableRow(
        detail: MetricsComparison,
        changeThreshold: number,
    ): string {
        const {component, testName, baseline, current, changes} = detail;

        const formatChange = (
            baselineValue: number | undefined,
            currentValue: number,
            change: number,
            unit = '',
        ): string => {
            if (!baselineValue) {
                return `${currentValue.toFixed(1)}${unit} (new)`;
            }

            if (Math.abs(change) < changeThreshold) {
                return `${currentValue.toFixed(1)}${unit}`;
            }

            const isSignificant = Math.abs(change) >= 10; // Bold for changes >= 10%
            const sign = change > 0 ? '+' : '';
            const beforeAfter = `${baselineValue.toFixed(1)}${unit} ← **${sign}${change.toFixed(1)}%** → ${currentValue.toFixed(1)}${unit}`;

            return isSignificant ? `**${beforeAfter}**` : beforeAfter;
        };

        return (
            `| ${component} | ${testName} ` +
            `| ${formatChange(baseline?.layoutCount, current.layoutCount, changes.layoutCount)} ` +
            `| ${formatChange(baseline?.layoutDuration, current.layoutDuration, changes.layoutDuration, 'ms')} ` +
            `| ${formatChange(baseline?.recalcStyleCount, current.recalcStyleCount, changes.recalcStyleCount)} ` +
            `| ${formatChange(baseline?.recalcStyleDuration, current.recalcStyleDuration, changes.recalcStyleDuration, 'ms')} |\n`
        );
    }

    /**
     * Generates the footer section of the markdown report
     */
    private static generateFooter(totalTests: number): string {
        if (totalTests === 0) {
            return '_No performance metrics collected in this run._\n\n---\n*Performance metrics collected using PerformanceCollector with CDP tracing*';
        }

        return '\n---\n*Performance metrics collected using PerformanceCollector with CDP tracing*';
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

        const mdFiles = await this.findMarkdownFiles(inputDir);

        if (mdFiles.length === 0) {
            await this.writeEmptyReport(outputFile, githubOutputPath);

            return;
        }

        const tableRows = await this.extractTableRows(mdFiles);

        if (tableRows.size === 0) {
            await this.writeNoChangesReport(outputFile, threshold, githubOutputPath);

            return;
        }

        await this.writeAggregatedReport(outputFile, tableRows, githubOutputPath);
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

        for (const file of files) {
            try {
                const content = await readFile(file, 'utf8');
                const lines = content.split(/\r?\n/);

                for (const line of lines) {
                    if (this.isTableDataRow(line)) {
                        rowSet.add(line);
                    }
                }
            } catch {
                // Ignore unreadable files
            }
        }

        return rowSet;
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

        return parts.length >= 8; // At least 6 cells + leading/trailing pipes
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

        await writeFile(outputFile, content);

        if (githubOutputPath) {
            await appendFile(githubOutputPath, 'performance_data_exists=false\n');
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

        await writeFile(outputFile, content);

        if (githubOutputPath) {
            await appendFile(githubOutputPath, 'performance_data_exists=true\n');
        }
    }

    /**
     * Writes the final aggregated report with grouped table
     */
    private static async writeAggregatedReport(
        outputFile: string,
        tableRows: Set<string>,
        githubOutputPath?: string,
    ): Promise<void> {
        const groupedRows = this.sortAndGroupRows(tableRows);

        let content = '## 📊 Performance Metrics Comparison\n\n';

        content += '### Detailed Results (aggregated)\n\n';
        content +=
            '| Component | Test Name | Layout Ops | Layout Duration | Recalc Ops | Recalc Duration |\n';
        content +=
            '|-----------|-----------|------------|-----------------|------------|------------------|\n';

        for (const row of groupedRows) {
            content += `${row}\n`;
        }

        content +=
            '\n---\n*Performance metrics collected using PerformanceCollector with CDP tracing*\n';

        await writeFile(outputFile, content);

        if (githubOutputPath) {
            await appendFile(githubOutputPath, 'performance_data_exists=true\n');
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
        } catch (error) {
            console.error('Failed to aggregate markdown reports:', error);
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
            console.error('Performance comparison failed:', error);
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
