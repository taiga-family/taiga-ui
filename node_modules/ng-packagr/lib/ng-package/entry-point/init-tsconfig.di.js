"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const injection_js_1 = require("injection-js");
const transform_di_1 = require("../../graph/transform.di");
const tsconfig_1 = require("../../ts/tsconfig");
const init_tsconfig_transform_1 = require("./init-tsconfig.transform");
exports.provideTsConfig = (values) => {
    return {
        provide: exports.DEFAULT_TS_CONFIG_TOKEN,
        useFactory: () => {
            return tsconfig_1.createDefaultTsConfig(values);
        },
        deps: [],
    };
};
exports.DEFAULT_TS_CONFIG_TOKEN = new injection_js_1.InjectionToken('ng.v5.defaultTsConfig');
exports.DEFAULT_TS_CONFIG_PROVIDER = exports.provideTsConfig();
exports.INIT_TS_CONFIG_TOKEN = new injection_js_1.InjectionToken('ng.v5.initTsConfigTransform');
exports.INIT_TS_CONFIG_TRANSFORM = transform_di_1.provideTransform({
    provide: exports.INIT_TS_CONFIG_TOKEN,
    useFactory: init_tsconfig_transform_1.initTsConfigTransformFactory,
    deps: [exports.DEFAULT_TS_CONFIG_TOKEN],
});
//# sourceMappingURL=init-tsconfig.di.js.map