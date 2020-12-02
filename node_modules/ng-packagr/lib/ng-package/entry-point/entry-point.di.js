"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const injection_js_1 = require("injection-js");
const transform_di_1 = require("../../graph/transform.di");
const compile_ngc_di_1 = require("./compile-ngc.di");
const write_bundles_di_1 = require("./write-bundles.di");
const write_package_di_1 = require("./write-package.di");
const entry_point_transform_1 = require("./entry-point.transform");
exports.ENTRY_POINT_TRANSFORM_TOKEN = new injection_js_1.InjectionToken(`ng.v5.entryPointTransform`);
exports.ENTRY_POINT_TRANSFORM = transform_di_1.provideTransform({
    provide: exports.ENTRY_POINT_TRANSFORM_TOKEN,
    useFactory: entry_point_transform_1.entryPointTransformFactory,
    deps: [compile_ngc_di_1.COMPILE_NGC_TOKEN, write_bundles_di_1.WRITE_BUNDLES_TRANSFORM_TOKEN, write_package_di_1.WRITE_PACKAGE_TRANSFORM_TOKEN],
});
exports.ENTRY_POINT_PROVIDERS = [
    exports.ENTRY_POINT_TRANSFORM,
    compile_ngc_di_1.COMPILE_NGC_TRANSFORM,
    write_bundles_di_1.WRITE_BUNDLES_TRANSFORM,
    write_package_di_1.WRITE_PACKAGE_TRANSFORM,
];
//# sourceMappingURL=entry-point.di.js.map