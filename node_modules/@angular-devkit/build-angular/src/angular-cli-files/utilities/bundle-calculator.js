"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("../../browser/schema");
const stats_1 = require("../utilities/stats");
var ThresholdType;
(function (ThresholdType) {
    ThresholdType["Max"] = "maximum";
    ThresholdType["Min"] = "minimum";
})(ThresholdType || (ThresholdType = {}));
var ThresholdSeverity;
(function (ThresholdSeverity) {
    ThresholdSeverity["Warning"] = "warning";
    ThresholdSeverity["Error"] = "error";
})(ThresholdSeverity = exports.ThresholdSeverity || (exports.ThresholdSeverity = {}));
var DifferentialBuildType;
(function (DifferentialBuildType) {
    DifferentialBuildType["ORIGINAL"] = "es2015";
    DifferentialBuildType["DOWNLEVEL"] = "es5";
})(DifferentialBuildType || (DifferentialBuildType = {}));
function* calculateThresholds(budget) {
    if (budget.maximumWarning) {
        yield {
            limit: calculateBytes(budget.maximumWarning, budget.baseline, 1),
            type: ThresholdType.Max,
            severity: ThresholdSeverity.Warning,
        };
    }
    if (budget.maximumError) {
        yield {
            limit: calculateBytes(budget.maximumError, budget.baseline, 1),
            type: ThresholdType.Max,
            severity: ThresholdSeverity.Error,
        };
    }
    if (budget.minimumWarning) {
        yield {
            limit: calculateBytes(budget.minimumWarning, budget.baseline, -1),
            type: ThresholdType.Min,
            severity: ThresholdSeverity.Warning,
        };
    }
    if (budget.minimumError) {
        yield {
            limit: calculateBytes(budget.minimumError, budget.baseline, -1),
            type: ThresholdType.Min,
            severity: ThresholdSeverity.Error,
        };
    }
    if (budget.warning) {
        yield {
            limit: calculateBytes(budget.warning, budget.baseline, -1),
            type: ThresholdType.Min,
            severity: ThresholdSeverity.Warning,
        };
        yield {
            limit: calculateBytes(budget.warning, budget.baseline, 1),
            type: ThresholdType.Max,
            severity: ThresholdSeverity.Warning,
        };
    }
    if (budget.error) {
        yield {
            limit: calculateBytes(budget.error, budget.baseline, -1),
            type: ThresholdType.Min,
            severity: ThresholdSeverity.Error,
        };
        yield {
            limit: calculateBytes(budget.error, budget.baseline, 1),
            type: ThresholdType.Max,
            severity: ThresholdSeverity.Error,
        };
    }
}
exports.calculateThresholds = calculateThresholds;
/**
 * Calculates the sizes for bundles in the budget type provided.
 */
function calculateSizes(budget, stats, processResults) {
    if (budget.type === schema_1.Type.AnyComponentStyle) {
        // Component style size information is not available post-build, this must
        // be checked mid-build via the `AnyComponentStyleBudgetChecker` plugin.
        throw new Error('Can not calculate size of AnyComponentStyle. Use `AnyComponentStyleBudgetChecker` instead.');
    }
    const calculatorMap = {
        all: AllCalculator,
        allScript: AllScriptCalculator,
        any: AnyCalculator,
        anyScript: AnyScriptCalculator,
        bundle: BundleCalculator,
        initial: InitialCalculator,
    };
    const ctor = calculatorMap[budget.type];
    const { chunks, assets } = stats;
    if (!chunks) {
        throw new Error('Webpack stats output did not include chunk information.');
    }
    if (!assets) {
        throw new Error('Webpack stats output did not include asset information.');
    }
    const calculator = new ctor(budget, chunks, assets, processResults);
    return calculator.calculate();
}
class Calculator {
    constructor(budget, chunks, assets, processResults) {
        this.budget = budget;
        this.chunks = chunks;
        this.assets = assets;
        this.processResults = processResults;
    }
    /** Calculates the size of the given chunk for the provided build type. */
    calculateChunkSize(chunk, buildType) {
        // Look for a process result containing different builds for this chunk.
        const processResult = this.processResults
            .find((processResult) => processResult.name === chunk.id.toString());
        if (processResult) {
            // Found a differential build, use the correct size information.
            const processResultFile = getDifferentialBuildResult(processResult, buildType);
            return processResultFile && processResultFile.size || 0;
        }
        else {
            // No differential builds, get the chunk size by summing its assets.
            return chunk.files
                .filter(file => !file.endsWith('.map'))
                .map(file => {
                const asset = this.assets.find((asset) => asset.name === file);
                if (!asset) {
                    throw new Error(`Could not find asset for file: ${file}`);
                }
                return asset.size;
            })
                .reduce((l, r) => l + r, 0);
        }
    }
}
/**
 * A named bundle.
 */
class BundleCalculator extends Calculator {
    calculate() {
        const budgetName = this.budget.name;
        if (!budgetName) {
            return [];
        }
        // The chunk may or may not have differential builds. Compute the size for
        // each then check afterwards if they are all the same.
        const buildSizes = Object.values(DifferentialBuildType).map((buildType) => {
            const size = this.chunks
                .filter(chunk => chunk.names.indexOf(budgetName) !== -1)
                .map(chunk => this.calculateChunkSize(chunk, buildType))
                .reduce((l, r) => l + r, 0);
            return { size, label: `${this.budget.name}-${buildType}` };
        });
        // If this bundle was not actually generated by a differential build, then
        // merge the results into a single value.
        if (allEquivalent(buildSizes.map((buildSize) => buildSize.size))) {
            return mergeDifferentialBuildSizes(buildSizes, budgetName);
        }
        else {
            return buildSizes;
        }
    }
}
/**
 * The sum of all initial chunks (marked as initial).
 */
class InitialCalculator extends Calculator {
    calculate() {
        const buildSizes = Object.values(DifferentialBuildType).map((buildType) => {
            return {
                label: `initial-${buildType}`,
                size: this.chunks
                    .filter(chunk => chunk.initial)
                    .map(chunk => this.calculateChunkSize(chunk, buildType))
                    .reduce((l, r) => l + r, 0),
            };
        });
        // If this bundle was not actually generated by a differential build, then
        // merge the results into a single value.
        if (allEquivalent(buildSizes.map((buildSize) => buildSize.size))) {
            return mergeDifferentialBuildSizes(buildSizes, 'initial');
        }
        else {
            return buildSizes;
        }
    }
}
/**
 * The sum of all the scripts portions.
 */
class AllScriptCalculator extends Calculator {
    calculate() {
        const size = this.assets
            .filter(asset => asset.name.endsWith('.js'))
            .map(asset => asset.size)
            .reduce((total, size) => total + size, 0);
        return [{ size, label: 'total scripts' }];
    }
}
/**
 * All scripts and assets added together.
 */
class AllCalculator extends Calculator {
    calculate() {
        const size = this.assets
            .filter(asset => !asset.name.endsWith('.map'))
            .map(asset => asset.size)
            .reduce((total, size) => total + size, 0);
        return [{ size, label: 'total' }];
    }
}
/**
 * Any script, individually.
 */
class AnyScriptCalculator extends Calculator {
    calculate() {
        return this.assets
            .filter(asset => asset.name.endsWith('.js'))
            .map(asset => ({
            size: asset.size,
            label: asset.name,
        }));
    }
}
/**
 * Any script or asset (images, css, etc).
 */
class AnyCalculator extends Calculator {
    calculate() {
        return this.assets
            .filter(asset => !asset.name.endsWith('.map'))
            .map(asset => ({
            size: asset.size,
            label: asset.name,
        }));
    }
}
/**
 * Calculate the bytes given a string value.
 */
function calculateBytes(input, baseline, factor = 1) {
    const matches = input.match(/^\s*(\d+(?:\.\d+)?)\s*(%|(?:[mM]|[kK]|[gG])?[bB])?\s*$/);
    if (!matches) {
        return NaN;
    }
    const baselineBytes = baseline && calculateBytes(baseline) || 0;
    let value = Number(matches[1]);
    switch (matches[2] && matches[2].toLowerCase()) {
        case '%':
            value = baselineBytes * value / 100;
            break;
        case 'kb':
            value *= 1024;
            break;
        case 'mb':
            value *= 1024 * 1024;
            break;
        case 'gb':
            value *= 1024 * 1024 * 1024;
            break;
    }
    if (baselineBytes === 0) {
        return value;
    }
    return baselineBytes + value * factor;
}
function* checkBudgets(budgets, webpackStats, processResults) {
    // Ignore AnyComponentStyle budgets as these are handled in `AnyComponentStyleBudgetChecker`.
    const computableBudgets = budgets.filter((budget) => budget.type !== schema_1.Type.AnyComponentStyle);
    for (const budget of computableBudgets) {
        const sizes = calculateSizes(budget, webpackStats, processResults);
        for (const { size, label } of sizes) {
            yield* checkThresholds(calculateThresholds(budget), size, label);
        }
    }
}
exports.checkBudgets = checkBudgets;
function* checkThresholds(thresholds, size, label) {
    for (const threshold of thresholds) {
        switch (threshold.type) {
            case ThresholdType.Max: {
                if (size <= threshold.limit) {
                    continue;
                }
                const sizeDifference = stats_1.formatSize(size - threshold.limit);
                yield {
                    severity: threshold.severity,
                    message: `Exceeded maximum budget for ${label}. Budget ${stats_1.formatSize(threshold.limit)} was not met by ${sizeDifference} with a total of ${stats_1.formatSize(size)}.`,
                };
                break;
            }
            case ThresholdType.Min: {
                if (size >= threshold.limit) {
                    continue;
                }
                const sizeDifference = stats_1.formatSize(threshold.limit - size);
                yield {
                    severity: threshold.severity,
                    message: `Failed to meet minimum budget for ${label}. Budget ${stats_1.formatSize(threshold.limit)} was not met by ${sizeDifference} with a total of ${stats_1.formatSize(size)}.`,
                };
                break;
            }
            default: {
                assertNever(threshold.type);
                break;
            }
        }
    }
}
exports.checkThresholds = checkThresholds;
/** Returns the {@link ProcessBundleFile} for the given {@link DifferentialBuildType}. */
function getDifferentialBuildResult(processResult, buildType) {
    switch (buildType) {
        case DifferentialBuildType.ORIGINAL: return processResult.original || null;
        case DifferentialBuildType.DOWNLEVEL: return processResult.downlevel || null;
    }
}
/**
 * Merges the given differential builds into a single, non-differential value.
 *
 * Preconditions: All the sizes should be equivalent, or else they represent
 * differential builds.
 */
function mergeDifferentialBuildSizes(buildSizes, margeLabel) {
    if (buildSizes.length === 0) {
        return [];
    }
    // Only one size.
    return [{
            label: margeLabel,
            size: buildSizes[0].size,
        }];
}
/** Returns whether or not all items in the list are equivalent to each other. */
function allEquivalent(items) {
    if (items.length === 0) {
        return true;
    }
    const first = items[0];
    for (const item of items.slice(1)) {
        if (item !== first) {
            return false;
        }
    }
    return true;
}
function assertNever(input) {
    throw new Error(`Unexpected call to assertNever() with input: ${JSON.stringify(input, null /* replacer */, 4 /* tabSize */)}`);
}
