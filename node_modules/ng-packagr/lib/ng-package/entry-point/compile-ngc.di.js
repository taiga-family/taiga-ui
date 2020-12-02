"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const injection_js_1 = require("injection-js");
const transform_di_1 = require("../../graph/transform.di");
const compile_ngc_transform_1 = require("./compile-ngc.transform");
exports.COMPILE_NGC_TOKEN = new injection_js_1.InjectionToken(`ng.v5.compileNgcTransform`);
exports.COMPILE_NGC_TRANSFORM = transform_di_1.provideTransform({
    provide: exports.COMPILE_NGC_TOKEN,
    useFactory: () => compile_ngc_transform_1.compileNgcTransform,
});
//# sourceMappingURL=compile-ngc.di.js.map