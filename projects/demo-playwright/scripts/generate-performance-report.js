#!/usr/bin/env node

/**
 * Performance Report Generator for TuiScrollbar
 * 
 * This script generates comprehensive performance reports with:
 * - Side-by-side comparison tables
 * - Beautiful charts and visualizations
 * - Statistical analysis
 * - Markdown reports with embedded visualizations
 */

const fs = require('fs');
const path = require('path');
const { ChartJSNodeCanvas } = require('chartjs-node-canvas');

// ========================================================================================
// Configuration
// ========================================================================================

const CONFIG = {
    inputFile: path.join(__dirname, '..', 'tests-results', 'scrollbar-performance-results.json'),
    outputDir: path.join(__dirname, '..', 'tests-results'),
    chartSize: { width: 1000, height: 600 },
    colors: {
        primary: '#3B82F6',
        success: '#10B981', 
        warning: '#F59E0B',
        danger: '#EF4444',
        info: '#6366F1',
        background: '#F8FAFC',
    },
};

// ========================================================================================
// Data Processing
// ========================================================================================

class DataProcessor {
    static loadResults() {
        if (!fs.existsSync(CONFIG.inputFile)) {
            throw new Error(`Results file not found: ${CONFIG.inputFile}`);
        }
        
        const data = fs.readFileSync(CONFIG.inputFile, 'utf8');
        return JSON.parse(data);
    }

    static extractCoreVariants(results) {
        const coreVariantNames = [
            'baseline-raf-polling',
            'optimized-event-driven', 
            'gpu-accelerated',
            'audit-pipeline',
            'high-precision'
        ];

        return Object.entries(results)
            .filter(([name]) => coreVariantNames.includes(name))
            .reduce((acc, [name, data]) => {
                acc[name] = data;
                return acc;
            }, {});
    }

    static extractThrottleSweep(results) {
        return Object.entries(results)
            .filter(([name]) => name.startsWith('throttle-sweep-'))
            .sort(([a], [b]) => {
                const aMs = parseInt(a.match(/throttle-sweep-(\d+)ms/)[1]);
                const bMs = parseInt(b.match(/throttle-sweep-(\d+)ms/)[1]);
                return aMs - bMs;
            })
            .reduce((acc, [name, data]) => {
                acc[name] = data;
                return acc;
            }, {});
    }

    static calculateImprovements(baseline, optimized) {
        const improvements = {};
        
        for (const [metric, baseValue] of Object.entries(baseline.averages)) {
            const optValue = optimized.averages[metric];
            const improvement = ((baseValue - optValue) / baseValue) * 100;
            improvements[metric] = {
                baseline: baseValue,
                optimized: optValue,
                improvement: improvement,
                isImprovement: improvement > 0
            };
        }
        
        return improvements;
    }
}

// ========================================================================================
// Chart Generation
// ========================================================================================

class ChartGenerator {
    constructor() {
        this.canvas = new ChartJSNodeCanvas(CONFIG.chartSize);
    }

    async generateComparisonChart(coreVariants) {
        const labels = Object.keys(coreVariants).map(name => 
            name.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
        );

        const layoutData = Object.values(coreVariants).map(v => v.averages.layoutCount);
        const recalcData = Object.values(coreVariants).map(v => v.averages.recalcStyleCount);

        const chartConfig = {
            type: 'bar',
            data: {
                labels,
                datasets: [
                    {
                        label: 'Layout Events',
                        data: layoutData,
                        backgroundColor: CONFIG.colors.primary,
                        borderColor: CONFIG.colors.primary,
                        borderWidth: 1
                    },
                    {
                        label: 'RecalcStyle Events', 
                        data: recalcData,
                        backgroundColor: CONFIG.colors.success,
                        borderColor: CONFIG.colors.success,
                        borderWidth: 1
                    }
                ]
            },
            options: {
                responsive: true,
                plugins: {
                    title: {
                        display: true,
                        text: 'Performance Comparison: Layout vs RecalcStyle Events',
                        font: { size: 20, weight: 'bold' }
                    },
                    legend: {
                        display: true,
                        position: 'top'
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Number of Events'
                        }
                    },
                    x: {
                        ticks: {
                            maxRotation: 30,
                            minRotation: 30
                        }
                    }
                }
            }
        };

        const buffer = await this.canvas.renderToBuffer(chartConfig);
        const outputPath = path.join(CONFIG.outputDir, 'performance-comparison.png');
        fs.writeFileSync(outputPath, buffer);
        
        console.log(`📊 Generated comparison chart: ${outputPath}`);
        return outputPath;
    }

    async generateThrottleSweepChart(throttleData) {
        const labels = Object.keys(throttleData).map(name => {
            const match = name.match(/throttle-sweep-(\d+)ms/);
            return match ? `${match[1]}ms` : name;
        });

        const layoutDurations = Object.values(throttleData).map(v => v.averages.layoutDuration);

        const chartConfig = {
            type: 'line',
            data: {
                labels,
                datasets: [{
                    label: 'Layout Duration (ms)',
                    data: layoutDurations,
                    borderColor: CONFIG.colors.info,
                    backgroundColor: CONFIG.colors.info + '20',
                    borderWidth: 3,
                    tension: 0.4,
                    fill: true
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    title: {
                        display: true,
                        text: 'Throttle Time Impact on Layout Performance',
                        font: { size: 20, weight: 'bold' }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Layout Duration (ms)'
                        }
                    },
                    x: {
                        title: {
                            display: true,
                            text: 'Throttle Time'
                        }
                    }
                }
            }
        };

        const buffer = await this.canvas.renderToBuffer(chartConfig);
        const outputPath = path.join(CONFIG.outputDir, 'throttle-sweep-analysis.png');
        fs.writeFileSync(outputPath, buffer);
        
        console.log(`📈 Generated throttle sweep chart: ${outputPath}`);
        return outputPath;
    }
}

// ========================================================================================
// Report Generation
// ========================================================================================

class ReportGenerator {
    static generateMarkdownReport(results, chartPaths) {
        const coreVariants = DataProcessor.extractCoreVariants(results);
        const baseline = coreVariants['baseline-raf-polling'];
        const optimized = coreVariants['optimized-event-driven'];
        const improvements = DataProcessor.calculateImprovements(baseline, optimized);

        const report = `# TuiScrollbar Performance Analysis Report

*Generated on ${new Date().toLocaleString()}*

## Executive Summary

This report presents the performance analysis results for the TuiScrollbar component optimization project. The testing compared various optimization strategies using Chrome DevTools Protocol (CDP) tracing.

## Key Findings

### 🎯 Overall Performance Improvement

<div style="display: flex; gap: 2rem; margin: 2rem 0;">

<div style="flex: 1;">

#### ❌ Before Optimization (RAF Polling)
\`\`\`typescript
// Continuous polling every frame
protected readonly refresh$ = animationFrame.pipe(
    map(() => this.scrollbars),
    distinctUntilChanged(),
);
\`\`\`

| Metric | Value |
|--------|-------|
| Layout Events | **${baseline.averages.layoutCount}** |
| RecalcStyle Events | **${baseline.averages.recalcStyleCount}** |
| Layout Duration | **${baseline.averages.layoutDuration.toFixed(2)} ms** |
| RecalcStyle Duration | **${baseline.averages.recalcStyleDuration.toFixed(2)} ms** |

</div>

<div style="flex: 1;">

#### ✅ After Optimization (Event-Driven)
\`\`\`typescript
// React only to actual changes
protected readonly refresh$ = merge(
    resizeObserver$.pipe(debounceTime(50)),
    mutationObserver$.pipe(debounceTime(50)),
    scrollEvent$.pipe(throttleTime(10))
).pipe(distinctUntilChanged());
\`\`\`

| Metric | Value | Improvement |
|--------|-------|-------------|
| Layout Events | **${optimized.averages.layoutCount}** | ${improvements.layoutCount.improvement > 0 ? '🟢' : '🔴'} **${Math.abs(improvements.layoutCount.improvement).toFixed(0)}% ${improvements.layoutCount.improvement > 0 ? '↓' : '↑'}** |
| RecalcStyle Events | **${optimized.averages.recalcStyleCount}** | ${improvements.recalcStyleCount.improvement > 0 ? '🟢' : '🔴'} **${Math.abs(improvements.recalcStyleCount.improvement).toFixed(0)}% ${improvements.recalcStyleCount.improvement > 0 ? '↓' : '↑'}** |
| Layout Duration | **${optimized.averages.layoutDuration.toFixed(2)} ms** | ${improvements.layoutDuration.improvement > 0 ? '🟢' : '🔴'} **${Math.abs(improvements.layoutDuration.improvement).toFixed(0)}% ${improvements.layoutDuration.improvement > 0 ? '↓' : '↑'}** |
| RecalcStyle Duration | **${optimized.averages.recalcStyleDuration.toFixed(2)} ms** | ${improvements.recalcStyleDuration.improvement > 0 ? '🟢' : '🔴'} **${Math.abs(improvements.recalcStyleDuration.improvement).toFixed(0)}% ${improvements.recalcStyleDuration.improvement > 0 ? '↓' : '↑'}** |

</div>

</div>

## Detailed Analysis

### Performance Comparison Chart

![Performance Comparison](./performance-comparison.png)

### Throttle Time Analysis

![Throttle Sweep Analysis](./throttle-sweep-analysis.png)

### Statistical Validity

All tests were executed with **${baseline.runs} independent runs** to ensure statistical reliability:

| Variant | Runs | Layout Events (Avg ± StdDev) |
|---------|------|------------------------------|
${Object.entries(coreVariants).map(([name, data]) => 
    `| ${name.replace(/-/g, ' ')} | ${data.runs} | ${data.averages.layoutCount} ± ${data.statistics.layoutCount.stdDev.toFixed(1)} |`
).join('\n')}

## Recommendations

### 1. **Adopt Event-Driven Architecture**
Replace RAF polling with reactive event handling for **${Math.abs(improvements.layoutCount.improvement).toFixed(0)}%** reduction in layout operations.

### 2. **Optimize Throttling Strategy**  
Use 10-16ms throttling for optimal balance between responsiveness and performance.

### 3. **Enable GPU Acceleration**
Apply CSS transforms instead of layout properties for additional performance gains.

### 4. **Implement Continuous Monitoring**
Integrate performance testing into CI/CD pipeline to prevent regressions.

## Technical Implementation

The optimized scrollbar implementation achieves significant performance improvements through:

- **Smart Event Handling**: Only react to actual changes instead of polling
- **Debounced Observers**: Group rapid changes to reduce processing overhead  
- **Efficient Throttling**: Balance update frequency with browser capabilities
- **GPU Acceleration**: Leverage hardware acceleration for smooth animations

---

*This report was generated automatically from ${Object.keys(results).length} test variants with comprehensive CDP tracing.*
`;

        return report;
    }

    static async saveReport(content) {
        const outputPath = path.join(CONFIG.outputDir, 'performance-analysis-report.md');
        fs.writeFileSync(outputPath, content, 'utf8');
        
        console.log(`📝 Generated performance report: ${outputPath}`);
        return outputPath;
    }
}

// ========================================================================================
// Main Execution
// ========================================================================================

async function main() {
    try {
        console.log('🚀 Generating TuiScrollbar Performance Report...\n');

        // Load test results
        console.log('📖 Loading performance test results...');
        const results = DataProcessor.loadResults();
        console.log(`✅ Loaded ${Object.keys(results).length} test variants\n`);

        // Generate charts
        console.log('📊 Generating performance charts...');
        const chartGenerator = new ChartGenerator();
        
        const coreVariants = DataProcessor.extractCoreVariants(results);
        const throttleData = DataProcessor.extractThrottleSweep(results);
        
        const comparisonChart = await chartGenerator.generateComparisonChart(coreVariants);
        const throttleChart = await chartGenerator.generateThrottleSweepChart(throttleData);
        
        console.log('✅ Charts generated successfully\n');

        // Generate markdown report
        console.log('📝 Generating markdown report...');
        const report = ReportGenerator.generateMarkdownReport(results, {
            comparison: comparisonChart,
            throttle: throttleChart
        });
        
        const reportPath = await ReportGenerator.saveReport(report);
        console.log('✅ Report generated successfully\n');

        // Summary
        console.log('🎉 Performance analysis complete!');
        console.log(`📊 Charts: ${path.dirname(comparisonChart)}`);
        console.log(`📝 Report: ${reportPath}`);

    } catch (error) {
        console.error('❌ Error generating performance report:', error.message);
        process.exit(1);
    }
}

// Execute if run directly
if (require.main === module) {
    main();
}

module.exports = {
    DataProcessor,
    ChartGenerator, 
    ReportGenerator,
    CONFIG
};


