"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
exports.transformFromPromise = (transformFn) => rxjs_1.pipe(operators_1.switchMap(graph => {
    const transformResult = transformFn(graph);
    if (transformResult instanceof Promise) {
        return rxjs_1.from(transformResult).pipe(operators_1.map(result => (result ? result : graph)));
    }
    else {
        return rxjs_1.of(transformResult ? transformResult : graph);
    }
}));
//# sourceMappingURL=transform.js.map