"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
class ExternalModuleIdStrategy {
    constructor(moduleFormat, dependencyList) {
        this.moduleFormat = moduleFormat;
        this.dependencyList = dependencyList;
    }
    /** Return true when moduleId is to be treated as external  */
    isExternalDependency(moduleId) {
        // more information about why we don't check for 'node_modules' path
        // https://github.com/rollup/rollup-plugin-node-resolve/issues/110#issuecomment-350353632
        if (path.isAbsolute(moduleId) || moduleId.startsWith('.') || moduleId.startsWith('/')) {
            // if it's either 'absolute', marked to embed, starts with a '.' or '/' or is the umd bundle and is tslib
            return false;
        }
        const externals = this.getNonBundledDependencies();
        if (Array.isArray(externals)
            ? !externals.some(x => x === moduleId || moduleId.startsWith(`${x}/`))
            : !externals.test(moduleId)) {
            return false;
        }
        return true;
    }
    /**
     * Returns a array of strings or a RegExp of non-bundled dependencies.
     */
    getNonBundledDependencies() {
        const { bundledDependencies = [], dependencies = [] } = this.dependencyList;
        // return catch all for when there are no 'bundledDependencies' is very important for secondary entry
        // as if this is not the case everything will be bundled in the secondary entry point
        // since no dependencies are defined.
        if (this.moduleFormat !== 'umd') {
            return /./; // catch all as external
        }
        // tslib should always be embeeded for umd modules
        if (bundledDependencies.length === 0) {
            return /^((?!tslib).)*$/;
        }
        // filter out dependencies that are meant to be external
        return dependencies.filter(x => bundledDependencies.indexOf(x) < 0);
    }
}
exports.ExternalModuleIdStrategy = ExternalModuleIdStrategy;
//# sourceMappingURL=external-module-id-strategy.js.map