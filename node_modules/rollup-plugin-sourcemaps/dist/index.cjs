'use strict';

var fs = require('fs');
var util = require('util');
var pluginUtils = require('@rollup/pluginutils');
var sourceMapResolve = require('source-map-resolve');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var fs__default = /*#__PURE__*/_interopDefaultLegacy(fs);
var pluginUtils__default = /*#__PURE__*/_interopDefaultLegacy(pluginUtils);
var sourceMapResolve__default = /*#__PURE__*/_interopDefaultLegacy(sourceMapResolve);

const { createFilter } = pluginUtils__default['default'];
const { resolveSourceMap, resolveSources } = sourceMapResolve__default['default'];
const promisifiedResolveSourceMap = util.promisify(resolveSourceMap);
const promisifiedResolveSources = util.promisify(resolveSources);
function sourcemaps({ include, exclude, readFile = fs__default['default'].readFile, } = {}) {
    const filter = createFilter(include, exclude);
    const promisifiedReadFile = util.promisify(readFile);
    return {
        name: 'sourcemaps',
        async load(id) {
            if (!filter(id)) {
                return null;
            }
            let code;
            try {
                code = (await promisifiedReadFile(id)).toString();
            }
            catch (_a) {
                this.warn('Failed reading file');
                return null;
            }
            let map;
            try {
                const result = await promisifiedResolveSourceMap(code, id, readFile);
                // The code contained no sourceMappingURL
                if (result === null) {
                    return code;
                }
                map = result.map;
            }
            catch (_b) {
                this.warn('Failed resolving source map');
                return code;
            }
            // Resolve sources if they're not included
            if (map.sourcesContent === undefined) {
                try {
                    const { sourcesContent } = await promisifiedResolveSources(map, id, readFile);
                    if (sourcesContent.every(item => typeof item === 'string')) {
                        map.sourcesContent = sourcesContent;
                    }
                }
                catch (_c) {
                    this.warn('Failed resolving sources for source map');
                }
            }
            return { code, map };
        },
    };
}

module.exports = sourcemaps;
//# sourceMappingURL=index.cjs.map
