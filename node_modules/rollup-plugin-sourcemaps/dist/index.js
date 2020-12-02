import fs from 'fs';
import { promisify } from 'util';
import pluginUtils from '@rollup/pluginutils';
import sourceMapResolve from 'source-map-resolve';

const { createFilter } = pluginUtils;
const { resolveSourceMap, resolveSources } = sourceMapResolve;
const promisifiedResolveSourceMap = promisify(resolveSourceMap);
const promisifiedResolveSources = promisify(resolveSources);
function sourcemaps({ include, exclude, readFile = fs.readFile, } = {}) {
    const filter = createFilter(include, exclude);
    const promisifiedReadFile = promisify(readFile);
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

export default sourcemaps;
//# sourceMappingURL=index.js.map
