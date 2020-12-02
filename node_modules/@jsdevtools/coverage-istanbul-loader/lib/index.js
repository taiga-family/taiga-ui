"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable: no-default-export
const convert = __importStar(require("convert-source-map"));
const istanbul_lib_instrument_1 = require("istanbul-lib-instrument");
const loaderUtils = __importStar(require("loader-utils"));
const merge_source_map_1 = __importDefault(require("merge-source-map"));
const path = __importStar(require("path"));
const schema_utils_1 = __importDefault(require("schema-utils"));
const optionsSchema = __importStar(require("./options-schema.json"));
const options_js_1 = require("./options.js");
/**
 * Adds code coverage instrumentation using Istanbul.
 *
 * If the source code has an existing source map, then it is used to re-map the instrumented
 * code back to the original source.
 */
function default_1(source, sourceMap) {
    let options = loaderUtils.getOptions(this);
    options = Object.assign(options_js_1.defaultOptions, options);
    schema_utils_1.default(optionsSchema, options, "Coverage Istanbul Loader");
    if (!sourceMap) {
        // Check for an inline source map
        const inlineSourceMap = convert.fromSource(source)
            || convert.fromMapFileSource(source, path.dirname(this.resourcePath));
        if (inlineSourceMap) {
            // Use the inline source map
            sourceMap = inlineSourceMap.sourcemap;
        }
    }
    // Instrument the code
    let instrumenter = istanbul_lib_instrument_1.createInstrumenter(options);
    instrumenter.instrument(source, this.resourcePath, done.bind(this), sourceMap);
    function done(error, instrumentedSource) {
        // Get the source map for the instrumented code
        let instrumentedSourceMap = instrumenter.lastSourceMap();
        if (sourceMap && instrumentedSourceMap) {
            // Re-map the source map to the original source code
            instrumentedSourceMap = merge_source_map_1.default(sourceMap, instrumentedSourceMap);
        }
        this.callback(error, instrumentedSource, instrumentedSourceMap);
    }
}
exports.default = default_1;
//# sourceMappingURL=index.js.map