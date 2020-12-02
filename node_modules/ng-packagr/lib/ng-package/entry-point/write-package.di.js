"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const injection_js_1 = require("injection-js");
const transform_di_1 = require("../../graph/transform.di");
const write_package_transform_1 = require("./write-package.transform");
exports.WRITE_PACKAGE_TRANSFORM_TOKEN = new injection_js_1.InjectionToken(`ng.v5.writePackageTransform`);
exports.WRITE_PACKAGE_TRANSFORM = transform_di_1.provideTransform({
    provide: exports.WRITE_PACKAGE_TRANSFORM_TOKEN,
    useFactory: () => write_package_transform_1.writePackageTransform,
});
//# sourceMappingURL=write-package.di.js.map