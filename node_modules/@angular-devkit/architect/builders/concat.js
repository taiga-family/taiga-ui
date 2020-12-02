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
        allRuns.push(...options.targets.map(({ target: targetStr, overrides }) => {
            const [project, target, configuration] = targetStr.split(/:/g, 3);
            return () => context.scheduleTarget({ project, target, configuration }, overrides || {});
        }));
    }
    if (options.builders) {
        allRuns.push(...options.builders.map(({ builder, options }) => {
            return () => context.scheduleBuilder(builder, options || {});
        }));
    }
    let stop = null;
    let i = 0;
    context.reportProgress(i++, allRuns.length);
    return rxjs_1.from(allRuns).pipe(operators_1.concatMap(fn => stop ? rxjs_1.of(null) : rxjs_1.from(fn()).pipe(operators_1.switchMap(run => run === null ? rxjs_1.of(null) : run.output.pipe(operators_1.first())))), operators_1.map(output => {
        context.reportProgress(i++, allRuns.length);
        if (output === null || stop !== null) {
            return stop || { success: false };
        }
        else if (output.success === false) {
            return stop = output;
        }
        else {
            return output;
        }
    }), operators_1.last());
});
