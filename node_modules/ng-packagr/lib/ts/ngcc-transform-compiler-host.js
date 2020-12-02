"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ts = require("typescript");
function ngccTransformCompilerHost(compilerHost, compilerOptions, ngccProcessor, moduleResolutionCache) {
    return Object.assign(Object.assign({}, compilerHost), { resolveModuleNames: (moduleNames, containingFile) => {
            return moduleNames.map(moduleName => {
                const { resolvedModule } = ts.resolveModuleName(moduleName, containingFile, compilerOptions, compilerHost, moduleResolutionCache);
                if (resolvedModule) {
                    ngccProcessor.processModule(moduleName, resolvedModule);
                }
                return resolvedModule;
            });
        }, resolveTypeReferenceDirectives: (typeReferenceDirectiveNames, containingFile, redirectedReference) => {
            return typeReferenceDirectiveNames.map(moduleName => {
                const { resolvedTypeReferenceDirective } = ts.resolveTypeReferenceDirective(moduleName, containingFile, compilerOptions, compilerHost, redirectedReference);
                if (resolvedTypeReferenceDirective) {
                    ngccProcessor.processModule(moduleName, resolvedTypeReferenceDirective);
                }
                return resolvedTypeReferenceDirective;
            });
        } });
}
exports.ngccTransformCompilerHost = ngccTransformCompilerHost;
//# sourceMappingURL=ngcc-transform-compiler-host.js.map