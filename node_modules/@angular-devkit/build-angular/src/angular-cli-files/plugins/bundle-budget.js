"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bundle_calculator_1 = require("../utilities/bundle-calculator");
class BundleBudgetPlugin {
    constructor(options) {
        this.options = options;
    }
    apply(compiler) {
        const { budgets } = this.options;
        if (!budgets || budgets.length === 0) {
            return;
        }
        compiler.hooks.afterEmit.tap('BundleBudgetPlugin', (compilation) => {
            this.runChecks(budgets, compilation);
        });
    }
    runChecks(budgets, compilation) {
        // No process bundle results because this plugin is only used when differential
        // builds are disabled.
        const processResults = [];
        const stats = compilation.getStats().toJson();
        for (const { severity, message } of bundle_calculator_1.checkBudgets(budgets, stats, processResults)) {
            switch (severity) {
                case bundle_calculator_1.ThresholdSeverity.Warning:
                    compilation.warnings.push(`budgets: ${message}`);
                    break;
                case bundle_calculator_1.ThresholdSeverity.Error:
                    compilation.errors.push(`budgets: ${message}`);
                    break;
            }
        }
    }
}
exports.BundleBudgetPlugin = BundleBudgetPlugin;
