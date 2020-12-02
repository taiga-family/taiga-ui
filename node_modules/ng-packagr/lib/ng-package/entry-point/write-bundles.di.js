"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const injection_js_1 = require("injection-js");
const transform_di_1 = require("../../graph/transform.di");
const write_bundles_transform_1 = require("./write-bundles.transform");
exports.WRITE_BUNDLES_TRANSFORM_TOKEN = new injection_js_1.InjectionToken(`ng.v5.writeBundlesTransform`);
exports.WRITE_BUNDLES_TRANSFORM = transform_di_1.provideTransform({
    provide: exports.WRITE_BUNDLES_TRANSFORM_TOKEN,
    useFactory: () => write_bundles_transform_1.writeBundlesTransform,
});
//# sourceMappingURL=write-bundles.di.js.map