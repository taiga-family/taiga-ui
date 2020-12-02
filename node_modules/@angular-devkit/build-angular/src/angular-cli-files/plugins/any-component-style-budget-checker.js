"use strict";
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const schema_1 = require("../../../src/browser/schema");
const bundle_calculator_1 = require("../utilities/bundle-calculator");
const PLUGIN_NAME = 'AnyComponentStyleBudgetChecker';
/**
 * Check budget sizes for component styles by emitting a warning or error if a
 * budget is exceeded by a particular component's styles.
 */
class AnyComponentStyleBudgetChecker {
    constructor(budgets) {
        this.budgets = budgets.filter((budget) => budget.type === schema_1.Type.AnyComponentStyle);
    }
    apply(compiler) {
        compiler.hooks.compilation.tap(PLUGIN_NAME, (compilation) => {
            compilation.hooks.afterOptimizeChunkAssets.tap(PLUGIN_NAME, () => {
                // In AOT compilations component styles get processed in child compilations.
                // tslint:disable-next-line: no-any
                const parentCompilation = compilation.compiler.parentCompilation;
                if (!parentCompilation) {
                    return;
                }
                const cssExtensions = [
                    '.css',
                    '.scss',
                    '.less',
                    '.styl',
                    '.sass',
                ];
                const componentStyles = Object.keys(compilation.assets)
                    .filter((name) => cssExtensions.includes(path.extname(name)))
                    .map((name) => ({
                    size: compilation.assets[name].size(),
                    label: name,
                }));
                const thresholds = flatMap(this.budgets, (budget) => bundle_calculator_1.calculateThresholds(budget));
                for (const { size, label } of componentStyles) {
                    for (const { severity, message } of bundle_calculator_1.checkThresholds(thresholds[Symbol.iterator](), size, label)) {
                        switch (severity) {
                            case bundle_calculator_1.ThresholdSeverity.Warning:
                                compilation.warnings.push(message);
                                break;
                            case bundle_calculator_1.ThresholdSeverity.Error:
                                compilation.errors.push(message);
                                break;
                            default:
                                assertNever(severity);
                                break;
                        }
                    }
                }
            });
        });
    }
}
exports.AnyComponentStyleBudgetChecker = AnyComponentStyleBudgetChecker;
function assertNever(input) {
    throw new Error(`Unexpected call to assertNever() with input: ${JSON.stringify(input, null /* replacer */, 4 /* tabSize */)}`);
}
function flatMap(list, mapper) {
    return [].concat(...list.map(mapper).map((iterator) => Array.from(iterator)));
}
