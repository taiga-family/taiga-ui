"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const rollup = require("rollup");
const nodeResolve = require("@rollup/plugin-node-resolve");
const sourcemaps = require("rollup-plugin-sourcemaps");
const commonJs = require("@rollup/plugin-commonjs");
const rollupJson = require("@rollup/plugin-json");
const log = require("../utils/log");
const external_module_id_strategy_1 = require("./external-module-id-strategy");
const umd_module_id_strategy_1 = require("./umd-module-id-strategy");
const path_1 = require("../utils/path");
/** Runs rollup over the given entry file, writes a bundle file. */
function rollupBundleFile(opts) {
    return __awaiter(this, void 0, void 0, function* () {
        log.debug(`rollup (v${rollup.VERSION}) ${opts.entry} to ${opts.dest} (${opts.format})`);
        const externalModuleIdStrategy = new external_module_id_strategy_1.ExternalModuleIdStrategy(opts.format, opts.dependencyList);
        // Create the bundle
        const bundle = yield rollup.rollup({
            context: 'this',
            external: moduleId => externalModuleIdStrategy.isExternalDependency(moduleId),
            inlineDynamicImports: false,
            input: opts.entry,
            plugins: [
                // @ts-ignore
                rollupJson(),
                // @ts-ignore
                nodeResolve(),
                // @ts-ignore
                commonJs(),
                // @ts-ignore
                sourcemaps(),
                { transform: opts.transform },
            ],
            onwarn: warning => {
                if (typeof warning === 'string') {
                    log.warn(warning);
                }
                else {
                    if (warning.code === 'THIS_IS_UNDEFINED') {
                        return;
                    }
                    log.warn(warning.message);
                }
            },
            preserveSymlinks: true,
            // Disable treeshaking when generating bundles
            // see: https://github.com/angular/angular/pull/32069
            treeshake: false,
        });
        // Output the bundle to disk
        yield bundle.write({
            name: opts.moduleName,
            format: opts.format,
            amd: opts.amd,
            file: opts.dest,
            banner: '',
            globals: moduleId => umd_module_id_strategy_1.umdModuleIdStrategy(moduleId, opts.umdModuleIds || {}),
            sourcemap: true,
            sourcemapPathTransform: (sourcePath) => {
                sourcePath = path_1.ensureUnixPath(sourcePath);
                // relocate sourcemaps
                if (!sourcePath) {
                    return sourcePath;
                }
                // the replace here is because during the compilation one of the `/` gets lost sometimes
                const sourceRoot = path_1.ensureUnixPath(opts.sourceRoot);
                const mapRootUrl = sourceRoot.replace('//', '/');
                if (sourcePath.indexOf(mapRootUrl) >= 0) {
                    return `${sourceRoot}${sourcePath.substr(sourcePath.indexOf(mapRootUrl) + mapRootUrl.length)}`;
                }
                else if (sourcePath.indexOf(sourceRoot) >= 0) {
                    return sourcePath.substr(sourcePath.indexOf(mapRootUrl));
                }
                else {
                    return sourcePath;
                }
            },
        });
    });
}
exports.rollupBundleFile = rollupBundleFile;
//# sourceMappingURL=rollup.js.map