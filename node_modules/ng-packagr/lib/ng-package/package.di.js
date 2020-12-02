"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const injection_js_1 = require("injection-js");
const transform_di_1 = require("../graph/transform.di");
const project_di_1 = require("../project.di");
const entry_point_di_1 = require("./entry-point/entry-point.di");
const package_transform_1 = require("./package.transform");
const analyse_sources_di_1 = require("./entry-point/analyse-sources.di");
const init_tsconfig_di_1 = require("./entry-point/init-tsconfig.di");
const options_di_1 = require("./options.di");
exports.PACKAGE_TRANSFORM_TOKEN = new injection_js_1.InjectionToken(`ng.v5.packageTransform`);
exports.PACKAGE_TRANSFORM = transform_di_1.provideTransform({
    provide: exports.PACKAGE_TRANSFORM_TOKEN,
    useFactory: package_transform_1.packageTransformFactory,
    deps: [project_di_1.PROJECT_TOKEN, options_di_1.OPTIONS_TOKEN, init_tsconfig_di_1.INIT_TS_CONFIG_TOKEN, analyse_sources_di_1.ANALYSE_SOURCES_TOKEN, entry_point_di_1.ENTRY_POINT_TRANSFORM_TOKEN],
});
exports.PACKAGE_PROVIDERS = [
    exports.PACKAGE_TRANSFORM,
    options_di_1.DEFAULT_OPTIONS_PROVIDER,
    init_tsconfig_di_1.DEFAULT_TS_CONFIG_PROVIDER,
    init_tsconfig_di_1.INIT_TS_CONFIG_TRANSFORM,
    analyse_sources_di_1.ANALYSE_SOURCES_TRANSFORM,
];
//# sourceMappingURL=package.di.js.map