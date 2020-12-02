"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const src_1 = require("../src");
exports.default = src_1.createBuilder((options, context) => {
    const allRuns = [];
    context.reportProgress(0, (options.targets ? options.targets.length : 0)
        + (options.builders ? options.builders.length : 0));
    if (options.targets) {
        allRuns.push(...options.targets.map(({ target: targetStr, overrides }, i) => {
            const [project, target, configuration] = targetStr.split(/:/g, 3);
            return context.scheduleTarget({ project, target, configuration }, overrides || {})
                .then(run => [i, run]);
        }));
    }
    if (options.builders) {
        allRuns.push(...options.builders.map(({ builder, options }, i) => {
            return context.scheduleBuilder(builder, options || {})
                .then(run => [i, run]);
        }));
    }
    const allResults = allRuns.map(() => null);
    let n = 0;
    context.reportProgress(n++, allRuns.length);
    return rxjs_1.from(allRuns).pipe(operators_1.mergeMap(runPromise => rxjs_1.from(runPromise)), operators_1.mergeMap(([i, run]) => run.output.pipe(operators_1.map(output => [i, output]))), operators_1.mergeMap(([i, output]) => {
        allResults[i] = output;
        context.reportProgress(n++, allRuns.length);
        if (allResults.some(x => x === null)) {
            // Some builders aren't done running yet.
            return rxjs_1.EMPTY;
        }
        else {
            return rxjs_1.of({
                success: allResults.every(x => x ? x.success : false),
            });
        }
    }));
});
