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
const ng = require("@angular/compiler-cli");
const log = require("../utils/log");
const redirect_write_file_compiler_host_1 = require("../ts/redirect-write-file-compiler-host");
const cache_compiler_host_1 = require("../ts/cache-compiler-host");
const nodes_1 = require("../ng-package/nodes");
const ngcc_transform_compiler_host_1 = require("../ts/ngcc-transform-compiler-host");
const create_emit_callback_1 = require("./create-emit-callback");
const ctor_parameters_1 = require("../ts/ctor-parameters");
function compileSourceFiles(graph, tsConfig, moduleResolutionCache, stylesheetProcessor, extraOptions, declarationDir, ngccProcessor) {
    return __awaiter(this, void 0, void 0, function* () {
        log.debug(`ngc (v${ng.VERSION.full})`);
        const tsConfigOptions = Object.assign(Object.assign({}, tsConfig.options), extraOptions);
        const entryPoint = graph.find(nodes_1.isEntryPointInProgress());
        let tsCompilerHost = cache_compiler_host_1.cacheCompilerHost(graph, entryPoint, tsConfigOptions, moduleResolutionCache, stylesheetProcessor);
        if (declarationDir) {
            tsCompilerHost = redirect_write_file_compiler_host_1.redirectWriteFileCompilerHost(tsCompilerHost, tsConfigOptions.basePath, declarationDir);
        }
        if (tsConfigOptions.enableIvy && ngccProcessor) {
            tsCompilerHost = ngcc_transform_compiler_host_1.ngccTransformCompilerHost(tsCompilerHost, tsConfigOptions, ngccProcessor, moduleResolutionCache);
        }
        // ng.CompilerHost
        const ngCompilerHost = ng.createCompilerHost({
            options: tsConfigOptions,
            tsHost: tsCompilerHost,
        });
        const scriptTarget = tsConfigOptions.target;
        const cache = entryPoint.cache;
        const oldProgram = cache.oldPrograms && cache.oldPrograms[scriptTarget];
        const ngProgram = ng.createProgram({
            rootNames: tsConfig.rootNames,
            options: tsConfigOptions,
            host: ngCompilerHost,
            oldProgram,
        });
        yield ngProgram.loadNgStructureAsync();
        log.debug(`ngc program structure is reused: ${oldProgram ? oldProgram.getTsProgram().structureIsReused : 'No old program'}`);
        cache.oldPrograms = Object.assign(Object.assign({}, cache.oldPrograms), { [scriptTarget]: ngProgram });
        const allDiagnostics = [
            ...ngProgram.getTsOptionDiagnostics(),
            ...ngProgram.getNgOptionDiagnostics(),
            ...ngProgram.getTsSyntacticDiagnostics(),
            ...ngProgram.getTsSemanticDiagnostics(),
            ...ngProgram.getNgSemanticDiagnostics(),
            ...ngProgram.getNgStructuralDiagnostics(),
        ];
        const beforeTs = [];
        if (!tsConfigOptions.annotateForClosureCompiler) {
            beforeTs.push(ctor_parameters_1.downlevelConstructorParameters(() => ngProgram.getTsProgram().getTypeChecker()));
        }
        // if we have an error we don't want to transpile.
        const hasError = ng.exitCodeFromResult(allDiagnostics) > 0;
        if (!hasError) {
            const emitFlags = tsConfigOptions.declaration ? tsConfig.emitFlags : ng.EmitFlags.JS;
            // certain errors are only emitted by a compilation hence append to previous diagnostics
            const { diagnostics } = ngProgram.emit({
                emitFlags,
                // For Ivy we don't need a custom emitCallback to have tsickle transforms
                emitCallback: tsConfigOptions.enableIvy ? undefined : create_emit_callback_1.createEmitCallback(tsConfigOptions),
                customTransformers: {
                    beforeTs,
                },
            });
            allDiagnostics.push(...diagnostics);
        }
        if (allDiagnostics.length === 0) {
            return;
        }
        const exitCode = ng.exitCodeFromResult(allDiagnostics);
        const formattedDiagnostics = ng.formatDiagnostics(allDiagnostics);
        if (exitCode !== 0) {
            throw new Error(formattedDiagnostics);
        }
        else {
            log.msg(formattedDiagnostics);
        }
    });
}
exports.compileSourceFiles = compileSourceFiles;
//# sourceMappingURL=compile-source-files.js.map