import {readdir, readFile, writeFile} from 'fs/promises';
import {resolve} from 'path';

interface PerformanceMetrics {
    layoutCount: number;
    layoutDuration: number;
    recalcStyleCount: number;
    recalcStyleDuration: number;
}

interface PerformanceData {
    timestamp: number;
    testStartTime?: number;
    testDuration?: number;
    url: string;
    testName: string;
    source: string;
    metrics: PerformanceMetrics;
}

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
 * Performance comparison utility for CI integration
 * Compares performance metrics between baseline (main) and current (PR) branch
 */
export class PerformanceComparison {
    public static readonly DEFAULT_CHANGE_THRESHOLD = 1; // Default 1% threshold
    /**
     * Aggregates performance metrics from multiple JSON files
     */
    public static async aggregateMetrics(
        metricsPath: string,
    ): Promise<Map<string, PerformanceData>> {
        const metrics = new Map<string, PerformanceData>();

        try {
            const files = await readdir(metricsPath);
            const performanceFiles = files.filter(
                (file) => file.startsWith('performance-test-') && file.endsWith('.json'),
            );

            for (const file of performanceFiles) {
                try {
                    const content = await readFile(resolve(metricsPath, file), 'utf8');
                    const data: PerformanceData = JSON.parse(content);

                    // Use test name as key for comparison
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
     * Compares current metrics against baseline
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
            const currentMetrics = currentData.metrics;
            const baselineMetrics = baselineData?.metrics;

            // Extract component name from source path
            const extractComponentName = (source: string): string => {
                // Try to extract the directory just before the test file, e.g. 'mobile-dialog' from '.../components/mobile-dialog/test/mobile-dialog.component.spec.ts'
                const match = /components\/(.+?)\//.exec(source);

                if (match?.[1]) {
                    return match[1];
                }

                // fallback: try to get the file name without extension
                const fileName = source.split('/').pop() || source;

                return fileName.replace(/\..*$/, '') || 'unknown';
            };

            const component = extractComponentName(currentData.source);

            const comparison: MetricsComparison = {
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
                    layoutCount: baselineMetrics?.layoutCount
                        ? ((currentMetrics.layoutCount - baselineMetrics.layoutCount) /
                              baselineMetrics.layoutCount) *
                          100
                        : 0,
                    layoutDuration: baselineMetrics?.layoutDuration
                        ? ((currentMetrics.layoutDuration -
                              baselineMetrics.layoutDuration) /
                              baselineMetrics.layoutDuration) *
                          100
                        : 0,
                    recalcStyleCount: baselineMetrics?.recalcStyleCount
                        ? ((currentMetrics.recalcStyleCount -
                              baselineMetrics.recalcStyleCount) /
                              baselineMetrics.recalcStyleCount) *
                          100
                        : 0,
                    recalcStyleDuration: baselineMetrics?.recalcStyleDuration
                        ? ((currentMetrics.recalcStyleDuration -
                              baselineMetrics.recalcStyleDuration) /
                              baselineMetrics.recalcStyleDuration) *
                          100
                        : 0,
                },
            };

            details.push(comparison);

            // Track significant changes (>10% change in duration metrics)
            if (
                Math.abs(comparison.changes.layoutDuration) > 10 ||
                Math.abs(comparison.changes.recalcStyleDuration) > 10
            ) {
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

        let markdown = '## 📊 Performance Metrics Comparison\n\n';

        // Summary section
        markdown += '### Summary\n';
        markdown += `- **Total tests with performance data:** ${summary.totalTests}\n`;
        markdown += `- **Tests with baseline comparison:** ${summary.testsWithBaseline}\n`;
        markdown += `- **Tests with significant changes (>10%):** ${summary.testsWithSignificantChanges}\n`;
        markdown += `- **Average layout duration change:** ${summary.averageLayoutChange.toFixed(1)}%\n`;
        markdown += `- **Average recalc duration change:** ${summary.averageRecalcChange.toFixed(1)}%\n\n`;

        if (summary.testsWithSignificantChanges === 0 && summary.testsWithBaseline > 0) {
            markdown += '✅ **No significant performance regressions detected!**\n\n';
        } else if (summary.testsWithSignificantChanges > 0) {
            markdown += `⚠️ **${summary.testsWithSignificantChanges} test(s) show significant performance changes**\n\n`;
        }

        // Filter details to only show tests with meaningful changes
        const filteredDetails = details.filter((detail) => {
            // Show new tests (no baseline)
            if (!detail.baseline) {
                return true;
            }

            // Show tests with changes above threshold
            return (
                Math.abs(detail.changes.layoutDuration) >= changeThreshold ||
                Math.abs(detail.changes.recalcStyleDuration) >= changeThreshold ||
                Math.abs(detail.changes.layoutCount) >= changeThreshold ||
                Math.abs(detail.changes.recalcStyleCount) >= changeThreshold
            );
        });

        // Details section
        if (filteredDetails.length > 0) {
            markdown += '### Detailed Results\n\n';
            markdown += `*Showing only tests with changes ≥ ${changeThreshold}% (${filteredDetails.length} of ${details.length} tests)*\n\n`;
            markdown +=
                '| Component | Test Name | Layout Ops | Layout Duration | Recalc Ops | Recalc Duration |\n';
            markdown +=
                '|-----------|-----------|------------|-----------------|------------|------------------|\n';

            for (const detail of filteredDetails) {
                const {component, testName, baseline, current, changes} = detail;

                // Format changes with colors
                const formatChange = (
                    current: number,
                    change: number,
                    unit = '',
                ): string => {
                    if (!baseline) {
                        return `${current.toFixed(1)}${unit} (new)`;
                    }

                    if (Math.abs(change) < 1) {
                        return `${current.toFixed(1)}${unit}`;
                    }

                    const icon = change > 0 ? '📈' : '📉';
                    const sign = change > 0 ? '+' : '';

                    return `${current.toFixed(1)}${unit} (${sign}${change.toFixed(1)}% ${icon})`;
                };

                markdown += `| ${component} | ${testName} `;
                markdown += `| ${formatChange(current.layoutCount, changes.layoutCount)} `;
                markdown += `| ${formatChange(current.layoutDuration, changes.layoutDuration, 'ms')} `;
                markdown += `| ${formatChange(current.recalcStyleCount, changes.recalcStyleCount)} `;
                markdown += `| ${formatChange(current.recalcStyleDuration, changes.recalcStyleDuration, 'ms')} |\n`;
            }
        } else if (details.length > 0) {
            markdown += '### Detailed Results\n\n';
            markdown += `*No tests found with changes ≥ ${changeThreshold}% (${details.length} tests checked)*\n\n`;
        }

        if (summary.totalTests === 0) {
            markdown += '_No performance metrics collected in this run._\n';
        }

        markdown += '\n---\n';
        markdown +=
            '*Performance metrics collected using PerformanceCollector with CDP tracing*';

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
}

/**
 * CLI entry point for performance comparison
 * Usage: npx ts-node performance-comparison.ts <baseline-path> <current-path> <output-path> [change-threshold]
 */
if (require.main === module) {
    const [, , baselinePath, currentPath, outputPath, thresholdArg] = process.argv;

    if (!baselinePath || !currentPath || !outputPath) {
        console.error(
            'Usage: npx ts-node performance-comparison.ts <baseline-path> <current-path> <output-path> [change-threshold]',
        );
        process.exit(1);
    }

    const changeThreshold = thresholdArg
        ? parseFloat(thresholdArg)
        : PerformanceComparison.DEFAULT_CHANGE_THRESHOLD;

    PerformanceComparison.compareAndReport(
        baselinePath,
        currentPath,
        outputPath,
        changeThreshold,
    ).catch((error: unknown) => {
        console.error('Performance comparison failed:', error);
        process.exit(1);
    });
}
