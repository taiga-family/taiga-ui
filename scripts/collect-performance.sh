#!/bin/bash

# Performance collection script for CI integration
# Usage: ./collect-performance.sh [baseline|current] [output-dir] [grep-pattern] [change-threshold]

set -e

MODE=${1:-current}
OUTPUT_DIR=${2:-./performance-data}
GREP_PATTERN=${3:-"Performance"}
CHANGE_THRESHOLD=${4:-1}

echo "🚀 Starting performance collection (mode: $MODE, threshold: $CHANGE_THRESHOLD%)"

# Create output directory
mkdir -p "$OUTPUT_DIR"

# Set environment variable for collection
export COLLECT_PERFORMANCE=1

# For baseline collection, we need to make sure we're on the right branch
if [ "$MODE" = "baseline" ]; then
    echo "📊 Collecting baseline performance metrics from main branch"
    # In CI, this would already be checked out to the base branch
else
    echo "📊 Collecting current performance metrics from PR branch"
fi

# Run tests with performance collection
# Only run tests that actually use PerformanceCollector to avoid noise
echo "🔍 Running performance tests..."
npx nx e2e demo-playwright -- \
    --project=chromium \
    --grep="$GREP_PATTERN" \
    --reporter=line || echo "⚠️ Some tests may have failed, continuing with performance collection"

# Move collected performance files to output directory
echo "📁 Organizing performance data..."
if ls ./projects/demo-playwright/performance-*.json 1> /dev/null 2>&1; then
    mv ./projects/demo-playwright/performance-*.json "$OUTPUT_DIR/"
    echo "✅ Performance data collected: $(ls -1 "$OUTPUT_DIR"/*.json | wc -l) files"
else
    echo "⚠️ No performance data files found"
fi

echo "🎯 Performance collection complete for mode: $MODE (threshold: $CHANGE_THRESHOLD%)"
