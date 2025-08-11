#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Check if Chart.js and canvas dependencies are available
let Chart, ChartjsNodeCanvas;

try {
    const {ChartJSNodeCanvas} = require('chartjs-node-canvas');

    ChartjsNodeCanvas = ChartJSNodeCanvas;
    Chart = require('chart.js/auto');
} catch (error) {
    console.log('⚠️  Chart.js dependencies not installed. Installing...');
    console.log('Run: npm install chartjs-node-canvas chart.js');
    process.exit(1);
}

const resultsDir = path.join(__dirname, '../tests-results');
const docsDir = path.join(__dirname, '../../../docs/scrollbar-performance');
const jsonFile = path.join(resultsDir, 'scrollbar-trace-recalc.json');

function sanitizeFilename(str) {
    return str.replaceAll(/[^a-z0-9]/gi, '-').toLowerCase();
}

function movingAverage(data, windowSize = 3) {
    const result = [];

    for (let i = 0; i < data.length; i++) {
        const start = Math.max(0, i - Math.floor(windowSize / 2));
        const end = Math.min(data.length, i + Math.ceil(windowSize / 2));
        const window = data.slice(start, end);
        const average = window.reduce((sum, val) => sum + val, 0) / window.length;

        result.push(average);
    }

    return result;
}

async function generateChart(config, filename) {
    const width = 800;
    const height = 600;
    const chartJSNodeCanvas = new ChartjsNodeCanvas({
        width,
        height,
        backgroundColour: 'white',
    });

    try {
        const buffer = await chartJSNodeCanvas.renderToBuffer(config);

        // Save to both locations
        const tempPath = path.join(resultsDir, filename);
        const docsPath = path.join(docsDir, filename);

        fs.writeFileSync(tempPath, buffer);

        // Ensure docs directory exists
        if (!fs.existsSync(docsDir)) {
            fs.mkdirSync(docsDir, {recursive: true});
        }

        fs.writeFileSync(docsPath, buffer);

        console.log(`✅ Generated: ${filename} (saved to both tests-results and docs)`);

        return true;
    } catch (error) {
        console.error(`❌ Failed to generate ${filename}:`, error.message);

        return false;
    }
}

async function generateChartsFromResults() {
    if (!fs.existsSync(jsonFile)) {
        console.log(`❌ Results file not found: ${jsonFile}`);
        console.log('Run performance tests first to generate data.');

        return;
    }

    const data = JSON.parse(fs.readFileSync(jsonFile, 'utf8'));

    console.log('📊 Generating charts from performance results...');
    console.log(`Found ${Object.keys(data).length} variants in results`);

    // Chart 1: Combined Layout and RecalcStyle counts
    const variants = Object.keys(data);
    const layoutCounts = variants.map((v) => data[v].totals?.layout || 0);
    const recalcCounts = variants.map((v) => data[v].totals?.recalc || 0);

    await generateChart(
        {
            type: 'bar',
            data: {
                labels: variants.map((v) => v.split('-').slice(0, 2).join(' ')),
                datasets: [
                    {
                        label: 'Layout Operations',
                        data: layoutCounts,
                        backgroundColor: 'rgba(75, 192, 192, 0.8)',
                        borderColor: 'rgba(75, 192, 192, 1)',
                        borderWidth: 1,
                    },
                    {
                        label: 'RecalcStyle Operations',
                        data: recalcCounts,
                        backgroundColor: 'rgba(255, 99, 132, 0.8)',
                        borderColor: 'rgba(255, 99, 132, 1)',
                        borderWidth: 1,
                    },
                ],
            },
            options: {
                responsive: false,
                plugins: {
                    title: {
                        display: true,
                        text: 'Layout and RecalcStyle Operations by Variant',
                    },
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Operation Count',
                        },
                    },
                    x: {
                        title: {
                            display: true,
                            text: 'Optimization Variant',
                        },
                    },
                },
            },
        },
        'layout-recalc-totals.png',
    );

    // Chart 2: Duration comparison
    const layoutDurations = variants.map((v) => data[v].totals?.layoutMs || 0);
    const recalcDurations = variants.map((v) => data[v].totals?.recalcMs || 0);

    await generateChart(
        {
            type: 'bar',
            data: {
                labels: variants.map((v) => v.split('-').slice(0, 2).join(' ')),
                datasets: [
                    {
                        label: 'Layout Duration (ms)',
                        data: layoutDurations,
                        backgroundColor: 'rgba(54, 162, 235, 0.8)',
                        borderColor: 'rgba(54, 162, 235, 1)',
                        borderWidth: 1,
                    },
                    {
                        label: 'RecalcStyle Duration (ms)',
                        data: recalcDurations,
                        backgroundColor: 'rgba(255, 206, 86, 0.8)',
                        borderColor: 'rgba(255, 206, 86, 1)',
                        borderWidth: 1,
                    },
                ],
            },
            options: {
                responsive: false,
                plugins: {
                    title: {
                        display: true,
                        text: 'Layout and RecalcStyle Duration by Variant',
                    },
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Duration (milliseconds)',
                        },
                    },
                    x: {
                        title: {
                            display: true,
                            text: 'Optimization Variant',
                        },
                    },
                },
            },
        },
        'duration-totals.png',
    );

    // Chart 3: Throttle time sweep (if available)
    const throttleVariants = variants.filter((v) => v.includes('throttle'));

    if (throttleVariants.length > 0) {
        const throttleTimes = throttleVariants
            .map((v) => {
                const match = /throttle-(\d+)/.exec(v);

                return match ? parseInt(match[1]) : 0;
            })
            .sort((a, b) => a - b);

        const throttleLayoutCounts = throttleTimes.map((time) => {
            const variant = throttleVariants.find((v) => v.includes(`throttle-${time}`));

            return variant ? data[variant].totals?.layout || 0 : 0;
        });

        // Apply smoothing
        const smoothedCounts = movingAverage(throttleLayoutCounts, 3);

        await generateChart(
            {
                type: 'line',
                data: {
                    labels: throttleTimes,
                    datasets: [
                        {
                            label: 'Layout Operations',
                            data: smoothedCounts,
                            fill: false,
                            borderColor: 'rgba(75, 192, 192, 1)',
                            backgroundColor: 'rgba(75, 192, 192, 0.2)',
                            tension: 0.4,
                        },
                    ],
                },
                options: {
                    responsive: false,
                    plugins: {
                        title: {
                            display: true,
                            text: 'Layout Operations vs Throttle Time (Smoothed)',
                        },
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            title: {
                                display: true,
                                text: 'Layout Operations',
                            },
                        },
                        x: {
                            title: {
                                display: true,
                                text: 'Throttle Time (ms)',
                            },
                        },
                    },
                },
            },
            'throttle-sweep.png',
        );
    }

    console.log('🎉 Chart generation completed!');
}

// Run the generator
generateChartsFromResults().catch(console.error);
