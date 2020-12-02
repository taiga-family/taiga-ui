"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ts = require("typescript");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const nodes_1 = require("../nodes");
const cache_compiler_host_1 = require("../../ts/cache-compiler-host");
const log_1 = require("../../utils/log");
const path_1 = require("../../utils/path");
exports.analyseSourcesTransform = rxjs_1.pipe(operators_1.map(graph => {
    const entryPoints = graph.filter(nodes_1.isEntryPoint);
    const dirtyEntryPoints = entryPoints.filter(x => x.state !== 'done');
    for (const entryPoint of dirtyEntryPoints) {
        analyseEntryPoint(graph, entryPoint, entryPoints);
    }
    return graph;
}));
/**
 * Analyses an entrypoint, searching for TypeScript dependencies and additional resources (Templates and Stylesheets).
 *
 * @param graph Build graph
 * @param entryPoint Current entry point that should be analysed.
 * @param entryPoints List of all entry points.
 */
function analyseEntryPoint(graph, entryPoint, entryPoints) {
    const { oldPrograms, analysesSourcesFileCache, moduleResolutionCache } = entryPoint.cache;
    const oldProgram = oldPrograms && oldPrograms['analysis'];
    const { moduleId } = entryPoint.data.entryPoint;
    const packageNode = graph.find(nodes_1.isPackage);
    const primaryModuleId = packageNode.data.primary.moduleId;
    log_1.debug(`Analysing sources for ${moduleId}`);
    const tsConfigOptions = Object.assign(Object.assign({}, entryPoint.data.tsConfig.options), { skipLibCheck: true, types: [] });
    const compilerHost = cache_compiler_host_1.cacheCompilerHost(graph, entryPoint, tsConfigOptions, moduleResolutionCache, undefined, analysesSourcesFileCache);
    compilerHost.resolveModuleNames = (moduleNames, containingFile) => {
        return moduleNames.map(moduleName => {
            if (!moduleName.startsWith('.')) {
                return undefined;
            }
            const { resolvedModule } = ts.resolveModuleName(moduleName, path_1.ensureUnixPath(containingFile), tsConfigOptions, compilerHost, moduleResolutionCache);
            return resolvedModule;
        });
    };
    const program = ts.createProgram(entryPoint.data.tsConfig.rootNames, tsConfigOptions, compilerHost, oldProgram);
    // this is a workaround due to the below
    // https://github.com/angular/angular/issues/24010
    const potentialDependencies = new Set();
    program
        .getSourceFiles()
        .filter(x => !/node_modules|\.ngfactory|\.ngstyle|(\.d\.ts$)/.test(x.fileName))
        .forEach(sourceFile => {
        sourceFile.statements
            .filter(x => ts.isImportDeclaration(x) || ts.isExportDeclaration(x))
            .forEach((node) => {
            const { moduleSpecifier } = node;
            if (!moduleSpecifier || !ts.isStringLiteral(moduleSpecifier)) {
                return;
            }
            const moduleName = moduleSpecifier.text;
            if (moduleName === primaryModuleId || moduleName.startsWith(`${primaryModuleId}/`)) {
                potentialDependencies.add(moduleName);
            }
        });
    });
    log_1.debug(`tsc program structure is reused: ${oldProgram ? oldProgram.structureIsReused : 'No old program'}`);
    entryPoint.cache.oldPrograms = Object.assign(Object.assign({}, entryPoint.cache.oldPrograms), { ['analysis']: program });
    const entryPointsMapped = {};
    for (const dep of entryPoints) {
        entryPointsMapped[dep.data.entryPoint.moduleId] = dep;
    }
    for (const moduleName of potentialDependencies) {
        const dep = entryPointsMapped[moduleName];
        if (dep) {
            log_1.debug(`Found entry point dependency: ${moduleId} -> ${moduleName}`);
            if (moduleId === moduleName) {
                throw new Error(`Entry point ${moduleName} has a circular dependency on itself.`);
            }
            if (dep.some(n => entryPoint === n)) {
                throw new Error(`Entry point ${moduleName} has a circular dependency on ${moduleId}.`);
            }
            entryPoint.dependsOn(dep);
        }
        else {
            throw new Error(`Entry point ${moduleName} which is required by ${moduleId} doesn't exists.`);
        }
    }
}
//# sourceMappingURL=analyse-sources.transform.js.map