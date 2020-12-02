"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const injection_js_1 = require("injection-js");
const transform_di_1 = require("../../graph/transform.di");
const analyse_sources_transform_1 = require("./analyse-sources.transform");
exports.ANALYSE_SOURCES_TOKEN = new injection_js_1.InjectionToken(`ng.v5.analyseSourcesTransform`);
exports.ANALYSE_SOURCES_TRANSFORM = transform_di_1.provideTransform({
    provide: exports.ANALYSE_SOURCES_TOKEN,
    useFactory: () => analyse_sources_transform_1.analyseSourcesTransform,
});
//# sourceMappingURL=analyse-sources.di.js.map