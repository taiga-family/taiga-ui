"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const core_1 = require("@angular-devkit/core");
const node_1 = require("@angular-devkit/core/node");
const compiler_cli_1 = require("@angular/compiler-cli");
const child_process_1 = require("child_process");
const fs = require("fs");
const path = require("path");
const ts = require("typescript");
const benchmark_1 = require("./benchmark");
const compiler_host_1 = require("./compiler_host");
const diagnostics_1 = require("./diagnostics");
const entry_resolver_1 = require("./entry_resolver");
const interfaces_1 = require("./interfaces");
const lazy_routes_1 = require("./lazy_routes");
const ngcc_processor_1 = require("./ngcc_processor");
const paths_plugin_1 = require("./paths-plugin");
const resource_loader_1 = require("./resource_loader");
const transformers_1 = require("./transformers");
const ast_helpers_1 = require("./transformers/ast_helpers");
const ctor_parameters_1 = require("./transformers/ctor-parameters");
const remove_ivy_jit_support_calls_1 = require("./transformers/remove-ivy-jit-support-calls");
const type_checker_1 = require("./type_checker");
const type_checker_messages_1 = require("./type_checker_messages");
const utils_1 = require("./utils");
const virtual_file_system_decorator_1 = require("./virtual_file_system_decorator");
const webpack_input_host_1 = require("./webpack-input-host");
class AngularCompilerPlugin {
    constructor(options) {
        this._discoverLazyRoutes = true;
        this._useFactories = false;
        // Contains `moduleImportPath#exportName` => `fullModulePath`.
        this._lazyRoutes = {};
        this._transformers = [];
        this._platformTransformers = null;
        this._JitMode = false;
        this._emitSkipped = true;
        this._unusedFiles = new Set();
        this._typeDeps = new Set();
        this._changedFileExtensions = new Set(['ts', 'tsx', 'html', 'css', 'js', 'json']);
        this._nodeModulesRegExp = /[\\\/]node_modules[\\\/]/;
        // Webpack plugin.
        this._firstRun = true;
        this._warnings = [];
        this._errors = [];
        // TypeChecker process.
        this._forkTypeChecker = true;
        this._forkedTypeCheckerInitialized = false;
        this._mainFields = [];
        this._options = Object.assign({}, options);
        this._setupOptions(this._options);
    }
    get options() { return this._options; }
    get done() { return this._donePromise; }
    get entryModule() {
        if (!this._entryModule) {
            return null;
        }
        const splitted = this._entryModule.split(/(#[a-zA-Z_]([\w]+))$/);
        const path = splitted[0];
        const className = !!splitted[1] ? splitted[1].substring(1) : 'default';
        return { path, className };
    }
    get typeChecker() {
        const tsProgram = this._getTsProgram();
        return tsProgram ? tsProgram.getTypeChecker() : null;
    }
    /** @deprecated  From 8.0.2 */
    static isSupported() {
        return compiler_cli_1.VERSION && parseInt(compiler_cli_1.VERSION.major) >= 8;
    }
    _setupOptions(options) {
        benchmark_1.time('AngularCompilerPlugin._setupOptions');
        this._logger = options.logger || node_1.createConsoleLogger();
        // Fill in the missing options.
        if (!options.hasOwnProperty('tsConfigPath')) {
            throw new Error('Must specify "tsConfigPath" in the configuration of @ngtools/webpack.');
        }
        // TS represents paths internally with '/' and expects the tsconfig path to be in this format
        this._tsConfigPath = utils_1.forwardSlashPath(options.tsConfigPath);
        // Check the base path.
        const maybeBasePath = path.resolve(process.cwd(), this._tsConfigPath);
        let basePath = maybeBasePath;
        if (fs.statSync(maybeBasePath).isFile()) {
            basePath = path.dirname(basePath);
        }
        if (options.basePath !== undefined) {
            basePath = path.resolve(process.cwd(), options.basePath);
        }
        // Parse the tsconfig contents.
        const config = compiler_cli_1.readConfiguration(this._tsConfigPath);
        if (config.errors && config.errors.length) {
            throw new Error(compiler_cli_1.formatDiagnostics(config.errors));
        }
        this._rootNames = config.rootNames;
        this._compilerOptions = { ...config.options, ...options.compilerOptions };
        this._basePath = config.options.basePath || basePath || '';
        // Overwrite outDir so we can find generated files next to their .ts origin in compilerHost.
        this._compilerOptions.outDir = '';
        this._compilerOptions.suppressOutputPathCheck = true;
        // Default plugin sourceMap to compiler options setting.
        if (!options.hasOwnProperty('sourceMap')) {
            options.sourceMap = this._compilerOptions.sourceMap || false;
        }
        // Force the right sourcemap options.
        if (options.sourceMap) {
            this._compilerOptions.sourceMap = true;
            this._compilerOptions.inlineSources = true;
            this._compilerOptions.inlineSourceMap = false;
            this._compilerOptions.mapRoot = undefined;
            // We will set the source to the full path of the file in the loader, so we don't
            // need sourceRoot here.
            this._compilerOptions.sourceRoot = undefined;
        }
        else {
            this._compilerOptions.sourceMap = false;
            this._compilerOptions.sourceRoot = undefined;
            this._compilerOptions.inlineSources = undefined;
            this._compilerOptions.inlineSourceMap = undefined;
            this._compilerOptions.mapRoot = undefined;
            this._compilerOptions.sourceRoot = undefined;
        }
        // We want to allow emitting with errors so that imports can be added
        // to the webpack dependency tree and rebuilds triggered by file edits.
        this._compilerOptions.noEmitOnError = false;
        // Set JIT (no code generation) or AOT mode.
        if (options.skipCodeGeneration !== undefined) {
            this._JitMode = options.skipCodeGeneration;
        }
        // Process i18n options.
        if (options.i18nInFile !== undefined) {
            this._compilerOptions.i18nInFile = options.i18nInFile;
        }
        if (options.i18nInFormat !== undefined) {
            this._compilerOptions.i18nInFormat = options.i18nInFormat;
        }
        if (options.i18nOutFile !== undefined) {
            this._compilerOptions.i18nOutFile = options.i18nOutFile;
        }
        if (options.i18nOutFormat !== undefined) {
            this._compilerOptions.i18nOutFormat = options.i18nOutFormat;
        }
        if (options.locale !== undefined) {
            this._compilerOptions.i18nInLocale = options.locale;
            this._compilerOptions.i18nOutLocale = options.locale;
            this._normalizedLocale = this._validateLocale(options.locale);
        }
        if (options.missingTranslation !== undefined) {
            this._compilerOptions.i18nInMissingTranslations =
                options.missingTranslation;
        }
        // Process forked type checker options.
        if (options.forkTypeChecker !== undefined) {
            this._forkTypeChecker = options.forkTypeChecker;
        }
        // this._forkTypeChecker = false;
        // Add custom platform transformers.
        if (options.platformTransformers !== undefined) {
            this._platformTransformers = options.platformTransformers;
        }
        // Determine if lazy route discovery via Compiler CLI private API should be attempted.
        // The default is to discover routes, but it can be overriden.
        if (options.discoverLazyRoutes !== undefined) {
            this._discoverLazyRoutes = options.discoverLazyRoutes;
        }
        if (this._discoverLazyRoutes === false && this.options.additionalLazyModuleResources
            && this.options.additionalLazyModuleResources.length > 0) {
            this._warnings.push(new Error(`Lazy route discovery is disabled but additional Lazy Module Resources were`
                + ` provided. These will be ignored.`));
        }
        if (this._discoverLazyRoutes === false && this.options.additionalLazyModules
            && Object.keys(this.options.additionalLazyModules).length > 0) {
            this._warnings.push(new Error(`Lazy route discovery is disabled but additional lazy modules were provided.`
                + `These will be ignored.`));
        }
        if (!this._JitMode && !this._compilerOptions.enableIvy) {
            // Only attempt to use factories when AOT and not Ivy.
            this._useFactories = true;
        }
        // Default ContextElementDependency to the one we can import from here.
        // Failing to use the right ContextElementDependency will throw the error below:
        // "No module factory available for dependency type: ContextElementDependency"
        // Hoisting together with peer dependencies can make it so the imported
        // ContextElementDependency does not come from the same Webpack instance that is used
        // in the compilation. In that case, we can pass the right one as an option to the plugin.
        this._contextElementDependencyConstructor = options.contextElementDependencyConstructor
            || require('webpack/lib/dependencies/ContextElementDependency');
        // Use entryModule if available in options, otherwise resolve it from mainPath after program
        // creation.
        if (this._options.entryModule) {
            this._entryModule = this._options.entryModule;
        }
        else if (this._compilerOptions.entryModule) {
            this._entryModule = path.resolve(this._basePath, this._compilerOptions.entryModule); // temporary cast for type issue
        }
        // Set platform.
        this._platform = options.platform || interfaces_1.PLATFORM.Browser;
        // Make transformers.
        this._makeTransformers();
        benchmark_1.timeEnd('AngularCompilerPlugin._setupOptions');
    }
    _getTsProgram() {
        if (!this._program) {
            return undefined;
        }
        return this._JitMode ? this._program : this._program.getTsProgram();
    }
    updateChangedFileExtensions(extension) {
        if (extension) {
            this._changedFileExtensions.add(extension);
        }
    }
    _getChangedCompilationFiles() {
        return this._compilerHost.getChangedFilePaths()
            .filter(k => {
            for (const ext of this._changedFileExtensions) {
                if (k.endsWith(ext)) {
                    return true;
                }
            }
            return false;
        });
    }
    async _createOrUpdateProgram() {
        // Get the root files from the ts config.
        // When a new root name (like a lazy route) is added, it won't be available from
        // following imports on the existing files, so we need to get the new list of root files.
        const config = compiler_cli_1.readConfiguration(this._tsConfigPath);
        this._rootNames = config.rootNames;
        // Update the forked type checker with all changed compilation files.
        // This includes templates, that also need to be reloaded on the type checker.
        if (this._forkTypeChecker && this._typeCheckerProcess && !this._firstRun) {
            this._updateForkedTypeChecker(this._rootNames, this._getChangedCompilationFiles());
        }
        const oldTsProgram = this._getTsProgram();
        if (this._JitMode) {
            // Create the TypeScript program.
            benchmark_1.time('AngularCompilerPlugin._createOrUpdateProgram.ts.createProgram');
            this._program = ts.createProgram(this._rootNames, this._compilerOptions, this._compilerHost, oldTsProgram);
            benchmark_1.timeEnd('AngularCompilerPlugin._createOrUpdateProgram.ts.createProgram');
        }
        else {
            benchmark_1.time('AngularCompilerPlugin._createOrUpdateProgram.ng.createProgram');
            // Create the Angular program.
            this._program = compiler_cli_1.createProgram({
                rootNames: this._rootNames,
                options: this._compilerOptions,
                host: this._compilerHost,
                oldProgram: this._program,
            });
            benchmark_1.timeEnd('AngularCompilerPlugin._createOrUpdateProgram.ng.createProgram');
            benchmark_1.time('AngularCompilerPlugin._createOrUpdateProgram.ng.loadNgStructureAsync');
            await this._program.loadNgStructureAsync();
            benchmark_1.timeEnd('AngularCompilerPlugin._createOrUpdateProgram.ng.loadNgStructureAsync');
        }
        const newTsProgram = this._getTsProgram();
        const newProgramSourceFiles = newTsProgram === null || newTsProgram === void 0 ? void 0 : newTsProgram.getSourceFiles();
        const localDtsFiles = new Set(newProgramSourceFiles === null || newProgramSourceFiles === void 0 ? void 0 : newProgramSourceFiles.filter(f => f.isDeclarationFile && !this._nodeModulesRegExp.test(f.fileName)).map(f => this._compilerHost.denormalizePath(f.fileName)));
        if (!oldTsProgram) {
            // Add all non node package dts files as depedencies when not having an old program
            for (const dts of localDtsFiles) {
                this._typeDeps.add(dts);
            }
        }
        else if (oldTsProgram && newProgramSourceFiles) {
            // The invalidation should only happen if we have an old program
            // as otherwise we will invalidate all the sourcefiles.
            const oldFiles = new Set(oldTsProgram.getSourceFiles().map(sf => sf.fileName));
            const newProgramFiles = new Set(newProgramSourceFiles.map(sf => sf.fileName));
            for (const dependency of this._typeDeps) {
                // Remove type dependencies of no longer existing files
                if (!newProgramFiles.has(utils_1.forwardSlashPath(dependency))) {
                    this._typeDeps.delete(dependency);
                }
            }
            for (const fileName of newProgramFiles) {
                if (oldFiles.has(fileName)) {
                    continue;
                }
                this._compilerHost.invalidate(fileName);
                const denormalizedFileName = this._compilerHost.denormalizePath(fileName);
                if (localDtsFiles.has(denormalizedFileName)) {
                    // Add new dts file as a type depedency
                    this._typeDeps.add(denormalizedFileName);
                }
            }
        }
        // If there's still no entryModule try to resolve from mainPath.
        if (!this._entryModule && this._mainPath) {
            benchmark_1.time('AngularCompilerPlugin._make.resolveEntryModuleFromMain');
            this._entryModule = entry_resolver_1.resolveEntryModuleFromMain(this._mainPath, this._compilerHost, this._getTsProgram());
            if (this._discoverLazyRoutes && !this.entryModule && !this._compilerOptions.enableIvy) {
                this._warnings.push('Lazy routes discovery is not enabled. '
                    + 'Because there is neither an entryModule nor a '
                    + 'statically analyzable bootstrap code in the main file.');
            }
            benchmark_1.timeEnd('AngularCompilerPlugin._make.resolveEntryModuleFromMain');
        }
    }
    _findLazyRoutesInAst(changedFilePaths) {
        benchmark_1.time('AngularCompilerPlugin._findLazyRoutesInAst');
        const result = {};
        for (const filePath of changedFilePaths) {
            const fileLazyRoutes = lazy_routes_1.findLazyRoutes(filePath, this._compilerHost, undefined, this._compilerOptions);
            for (const routeKey of Object.keys(fileLazyRoutes)) {
                const route = fileLazyRoutes[routeKey];
                result[routeKey] = route;
            }
        }
        benchmark_1.timeEnd('AngularCompilerPlugin._findLazyRoutesInAst');
        return result;
    }
    _listLazyRoutesFromProgram() {
        let entryRoute;
        let ngProgram;
        if (this._JitMode) {
            if (!this.entryModule) {
                return {};
            }
            benchmark_1.time('AngularCompilerPlugin._listLazyRoutesFromProgram.createProgram');
            ngProgram = compiler_cli_1.createProgram({
                rootNames: this._rootNames,
                options: { ...this._compilerOptions, genDir: '', collectAllErrors: true, enableIvy: false },
                host: this._compilerHost,
            });
            benchmark_1.timeEnd('AngularCompilerPlugin._listLazyRoutesFromProgram.createProgram');
            entryRoute = utils_1.workaroundResolve(this.entryModule.path) + '#' + this.entryModule.className;
        }
        else {
            ngProgram = this._program;
        }
        benchmark_1.time('AngularCompilerPlugin._listLazyRoutesFromProgram.listLazyRoutes');
        // entryRoute will only be defined in JIT.
        // In AOT all routes within the program are returned.
        const lazyRoutes = ngProgram.listLazyRoutes(entryRoute);
        benchmark_1.timeEnd('AngularCompilerPlugin._listLazyRoutesFromProgram.listLazyRoutes');
        return lazyRoutes.reduce((acc, curr) => {
            const ref = curr.route;
            if (ref in acc && acc[ref] !== curr.referencedModule.filePath) {
                throw new Error(+`Duplicated path in loadChildren detected: "${ref}" is used in 2 loadChildren, `
                    + `but they point to different modules "(${acc[ref]} and `
                    + `"${curr.referencedModule.filePath}"). Webpack cannot distinguish on context and `
                    + 'would fail to load the proper one.');
            }
            acc[ref] = curr.referencedModule.filePath;
            return acc;
        }, {});
    }
    // Process the lazy routes discovered, adding then to _lazyRoutes.
    // TODO: find a way to remove lazy routes that don't exist anymore.
    // This will require a registry of known references to a lazy route, removing it when no
    // module references it anymore.
    _processLazyRoutes(discoveredLazyRoutes) {
        Object.keys(discoveredLazyRoutes)
            .forEach(lazyRouteKey => {
            const [lazyRouteModule, moduleName] = lazyRouteKey.split('#');
            if (!lazyRouteModule) {
                return;
            }
            const lazyRouteTSFile = utils_1.forwardSlashPath(discoveredLazyRoutes[lazyRouteKey]);
            let modulePath, moduleKey;
            if (this._useFactories) {
                modulePath = lazyRouteTSFile.replace(/(\.d)?\.tsx?$/, '');
                modulePath += '.ngfactory.js';
                const factoryModuleName = moduleName ? `#${moduleName}NgFactory` : '';
                moduleKey = `${lazyRouteModule}.ngfactory${factoryModuleName}`;
            }
            else {
                modulePath = lazyRouteTSFile;
                moduleKey = `${lazyRouteModule}${moduleName ? '#' + moduleName : ''}`;
            }
            modulePath = utils_1.workaroundResolve(modulePath);
            if (moduleKey in this._lazyRoutes) {
                if (this._lazyRoutes[moduleKey] !== modulePath) {
                    // Found a duplicate, this is an error.
                    this._warnings.push(new Error(`Duplicated path in loadChildren detected during a rebuild. `
                        + `We will take the latest version detected and override it to save rebuild time. `
                        + `You should perform a full build to validate that your routes don't overlap.`));
                }
            }
            else {
                // Found a new route, add it to the map.
                this._lazyRoutes[moduleKey] = modulePath;
            }
        });
    }
    _createForkedTypeChecker() {
        // Bootstrap type checker is using local CLI.
        const g = typeof global !== 'undefined' ? global : {}; // tslint:disable-line:no-any
        const typeCheckerFile = g['_DevKitIsLocal']
            ? './type_checker_bootstrap.js'
            : './type_checker_worker.js';
        const debugArgRegex = /--inspect(?:-brk|-port)?|--debug(?:-brk|-port)/;
        const execArgv = process.execArgv.filter((arg) => {
            // Remove debug args.
            // Workaround for https://github.com/nodejs/node/issues/9435
            return !debugArgRegex.test(arg);
        });
        // Signal the process to start listening for messages
        // Solves https://github.com/angular/angular-cli/issues/9071
        const forkArgs = [type_checker_1.AUTO_START_ARG];
        const forkOptions = { execArgv };
        this._typeCheckerProcess = child_process_1.fork(path.resolve(__dirname, typeCheckerFile), forkArgs, forkOptions);
        // Handle child messages.
        this._typeCheckerProcess.on('message', message => {
            switch (message.kind) {
                case type_checker_messages_1.MESSAGE_KIND.Log:
                    const logMessage = message;
                    this._logger.log(logMessage.level, `\n${logMessage.message}`);
                    break;
                default:
                    throw new Error(`TypeChecker: Unexpected message received: ${message}.`);
            }
        });
        // Handle child process exit.
        this._typeCheckerProcess.once('exit', (_, signal) => {
            this._typeCheckerProcess = null;
            // If process exited not because of SIGTERM (see _killForkedTypeChecker), than something
            // went wrong and it should fallback to type checking on the main thread.
            if (signal !== 'SIGTERM') {
                this._forkTypeChecker = false;
                const msg = 'AngularCompilerPlugin: Forked Type Checker exited unexpectedly. ' +
                    'Falling back to type checking on main thread.';
                this._warnings.push(msg);
            }
        });
    }
    _killForkedTypeChecker() {
        if (this._typeCheckerProcess && !this._typeCheckerProcess.killed) {
            try {
                this._typeCheckerProcess.kill();
            }
            catch (_a) { }
            this._typeCheckerProcess = null;
        }
    }
    _updateForkedTypeChecker(rootNames, changedCompilationFiles) {
        if (this._typeCheckerProcess) {
            if (!this._forkedTypeCheckerInitialized) {
                let hostReplacementPaths = {};
                if (this._options.hostReplacementPaths
                    && typeof this._options.hostReplacementPaths != 'function') {
                    hostReplacementPaths = this._options.hostReplacementPaths;
                }
                this._typeCheckerProcess.send(new type_checker_messages_1.InitMessage(this._compilerOptions, this._basePath, this._JitMode, this._rootNames, hostReplacementPaths));
                this._forkedTypeCheckerInitialized = true;
            }
            this._typeCheckerProcess.send(new type_checker_messages_1.UpdateMessage(rootNames, changedCompilationFiles));
        }
    }
    _checkUnusedFiles(compilation) {
        // Only do the unused TS files checks when under Ivy
        // since previously we did include unused files in the compilation
        // See: https://github.com/angular/angular-cli/pull/15030
        // Don't do checks for compilations with errors, since that can result in a partial compilation.
        if (!this._compilerOptions.enableIvy || compilation.errors.length > 0) {
            return;
        }
        // Bail if there's no TS program. Nothing to do in that case.
        const program = this._getTsProgram();
        if (!program) {
            return;
        }
        // Exclude the following files from unused checks
        // - ngfactories & ngstyle might not have a correspondent
        //   JS file example `@angular/core/core.ngfactory.ts`.
        // - __ng_typecheck__.ts will never be requested.
        const fileExcludeRegExp = /(\.(ngfactory|ngstyle|ngsummary)\.ts|ng_typecheck__\.ts)$/;
        // Start all the source file names we care about.
        // Ignore matches to the regexp above, files we've already reported once before, and
        // node_modules.
        const sourceFiles = program.getSourceFiles()
            .map(x => this._compilerHost.denormalizePath(x.fileName))
            .filter(f => !(fileExcludeRegExp.test(f) || this._unusedFiles.has(f)
            || this._nodeModulesRegExp.test(f)));
        // Make a set with the sources, but exclude .d.ts files since those are type-only.
        const unusedSourceFileNames = new Set(sourceFiles.filter(f => !f.endsWith('.d.ts')));
        // Separately keep track of type-only deps.
        const typeDepFileNames = new Set(sourceFiles);
        // This function removes a source file name and all its dependencies from the set.
        const removeSourceFile = (fileName, originalModule = false) => {
            if (unusedSourceFileNames.has(fileName) || (originalModule && typeDepFileNames.has(fileName))) {
                unusedSourceFileNames.delete(fileName);
                if (originalModule) {
                    typeDepFileNames.delete(fileName);
                }
                this.getDependencies(fileName, false).forEach(f => removeSourceFile(f));
            }
        };
        // Go over all the modules in the webpack compilation and remove them from the sets.
        compilation.modules.forEach(m => m.resource ? removeSourceFile(m.resource, true) : null);
        // Anything that remains is unused, because it wasn't referenced directly or transitively
        // on the files in the compilation.
        for (const fileName of unusedSourceFileNames) {
            compilation.warnings.push(`${fileName} is part of the TypeScript compilation but it's unused.\n` +
                `Add only entry points to the 'files' or 'include' properties in your tsconfig.`);
            this._unusedFiles.add(fileName);
            // Remove the truly unused from the type dep list.
            typeDepFileNames.delete(fileName);
        }
        // At this point we know what the type deps are.
        // These are the TS files that weren't part of the compilation modules, aren't unused, but were
        // part of the TS original source list.
        // Next build we add them to the TS entry points so that they trigger rebuilds.
        for (const fileName of typeDepFileNames) {
            this._typeDeps.add(fileName);
        }
    }
    // Registration hook for webpack plugin.
    // tslint:disable-next-line:no-big-function
    apply(compiler) {
        // The below is require by NGCC processor
        // since we need to know which fields we need to process
        compiler.hooks.environment.tap('angular-compiler', () => {
            const { options } = compiler;
            const mainFields = options.resolve && options.resolve.mainFields;
            if (mainFields) {
                this._mainFields = utils_1.flattenArray(mainFields);
            }
        });
        // cleanup if not watching
        compiler.hooks.thisCompilation.tap('angular-compiler', compilation => {
            compilation.hooks.finishModules.tap('angular-compiler', () => {
                this._checkUnusedFiles(compilation);
                let rootCompiler = compiler;
                while (rootCompiler.parentCompilation) {
                    // tslint:disable-next-line:no-any
                    rootCompiler = compiler.parentCompilation;
                }
                // only present for webpack 4.23.0+, assume true otherwise
                const watchMode = rootCompiler.watchMode === undefined ? true : rootCompiler.watchMode;
                if (!watchMode) {
                    this._program = undefined;
                    this._transformers = [];
                    this._resourceLoader = undefined;
                    this._compilerHost.reset();
                }
            });
        });
        // Decorate inputFileSystem to serve contents of CompilerHost.
        // Use decorated inputFileSystem in watchFileSystem.
        compiler.hooks.environment.tap('angular-compiler', () => {
            // The webpack types currently do not include these
            const compilerWithFileSystems = compiler;
            let host = this._options.host || new webpack_input_host_1.WebpackInputHost(compilerWithFileSystems.inputFileSystem);
            let replacements;
            if (this._options.hostReplacementPaths) {
                if (typeof this._options.hostReplacementPaths == 'function') {
                    const replacementResolver = this._options.hostReplacementPaths;
                    replacements = path => core_1.normalize(replacementResolver(core_1.getSystemPath(path)));
                    host = new class extends core_1.virtualFs.ResolverHost {
                        _resolve(path) {
                            return core_1.normalize(replacementResolver(core_1.getSystemPath(path)));
                        }
                    }(host);
                }
                else {
                    replacements = new Map();
                    const aliasHost = new core_1.virtualFs.AliasHost(host);
                    for (const from in this._options.hostReplacementPaths) {
                        const normalizedFrom = core_1.resolve(core_1.normalize(this._basePath), core_1.normalize(from));
                        const normalizedWith = core_1.resolve(core_1.normalize(this._basePath), core_1.normalize(this._options.hostReplacementPaths[from]));
                        aliasHost.aliases.set(normalizedFrom, normalizedWith);
                        replacements.set(normalizedFrom, normalizedWith);
                    }
                    host = aliasHost;
                }
            }
            let ngccProcessor;
            if (this._compilerOptions.enableIvy) {
                ngccProcessor = new ngcc_processor_1.NgccProcessor(this._mainFields, compilerWithFileSystems.inputFileSystem, this._warnings, this._errors, this._basePath, this._compilerOptions, this._tsConfigPath);
                ngccProcessor.process();
            }
            // Use an identity function as all our paths are absolute already.
            this._moduleResolutionCache = ts.createModuleResolutionCache(this._basePath, x => x);
            // Create the webpack compiler host.
            const webpackCompilerHost = new compiler_host_1.WebpackCompilerHost(this._compilerOptions, this._basePath, host, true, this._options.directTemplateLoading, ngccProcessor, this._moduleResolutionCache);
            // Create and set a new WebpackResourceLoader in AOT
            if (!this._JitMode) {
                this._resourceLoader = new resource_loader_1.WebpackResourceLoader();
                webpackCompilerHost.setResourceLoader(this._resourceLoader);
            }
            // Use the WebpackCompilerHost with a resource loader to create an AngularCompilerHost.
            this._compilerHost = compiler_cli_1.createCompilerHost({
                options: this._compilerOptions,
                tsHost: webpackCompilerHost,
            });
            // Resolve mainPath if provided.
            if (this._options.mainPath) {
                this._mainPath = this._compilerHost.resolve(this._options.mainPath);
            }
            const inputDecorator = new virtual_file_system_decorator_1.VirtualFileSystemDecorator(compilerWithFileSystems.inputFileSystem, this._compilerHost);
            compilerWithFileSystems.inputFileSystem = inputDecorator;
            compilerWithFileSystems.watchFileSystem = new virtual_file_system_decorator_1.VirtualWatchFileSystemDecorator(inputDecorator, replacements);
        });
        if (this._discoverLazyRoutes) {
            // Add lazy modules to the context module for @angular/core
            compiler.hooks.contextModuleFactory.tap('angular-compiler', cmf => {
                const angularCorePackagePath = require.resolve('@angular/core/package.json', {
                    paths: [this._basePath],
                });
                // APFv6 does not have single FESM anymore. Instead of verifying if we're pointing to
                // FESMs, we resolve the `@angular/core` path and verify that the path for the
                // module starts with it.
                // This may be slower but it will be compatible with both APF5, 6 and potential future
                // versions (until the dynamic import appears outside of core I suppose).
                // We resolve symbolic links in order to get the real path that would be used in webpack.
                const angularCoreResourceRoot = fs.realpathSync(path.dirname(angularCorePackagePath));
                cmf.hooks.afterResolve.tapPromise('angular-compiler', async (result) => {
                    // Alter only existing request from Angular or the additional lazy module resources.
                    const isLazyModuleResource = (resource) => resource.startsWith(angularCoreResourceRoot) ||
                        (this.options.additionalLazyModuleResources &&
                            this.options.additionalLazyModuleResources.includes(resource));
                    if (!result || !this.done || !isLazyModuleResource(result.resource)) {
                        return result;
                    }
                    await this.done;
                    // This folder does not exist, but we need to give webpack a resource.
                    // TODO: check if we can't just leave it as is (angularCoreModuleDir).
                    result.resource = path.join(this._basePath, '$$_lazy_route_resource');
                    // tslint:disable-next-line:no-any
                    result.dependencies.forEach((d) => d.critical = false);
                    // tslint:disable-next-line:no-any
                    result.resolveDependencies = (_fs, options, callback) => {
                        const dependencies = Object.keys(this._lazyRoutes)
                            .map((key) => {
                            const modulePath = this._lazyRoutes[key];
                            if (modulePath !== null) {
                                const name = key.split('#')[0];
                                return new this._contextElementDependencyConstructor(modulePath, name);
                            }
                            else {
                                return null;
                            }
                        })
                            .filter(x => !!x);
                        if (this._options.nameLazyFiles) {
                            options.chunkName = '[request]';
                        }
                        callback(null, dependencies);
                    };
                    return result;
                });
            });
        }
        // Create and destroy forked type checker on watch mode.
        compiler.hooks.watchRun.tap('angular-compiler', () => {
            if (this._forkTypeChecker && !this._typeCheckerProcess) {
                this._createForkedTypeChecker();
            }
        });
        compiler.hooks.watchClose.tap('angular-compiler', () => this._killForkedTypeChecker());
        // Remake the plugin on each compilation.
        compiler.hooks.make.tapPromise('angular-compiler', compilation => this._donePromise = this._make(compilation));
        compiler.hooks.invalid.tap('angular-compiler', () => this._firstRun = false);
        compiler.hooks.afterEmit.tap('angular-compiler', compilation => {
            // tslint:disable-next-line:no-any
            compilation._ngToolsWebpackPluginInstance = null;
        });
        compiler.hooks.done.tap('angular-compiler', () => {
            this._donePromise = null;
        });
        compiler.hooks.afterResolvers.tap('angular-compiler', compiler => {
            if (this._compilerOptions.enableIvy) {
                // When Ivy is enabled we need to add the fields added by NGCC
                // to take precedence over the provided mainFields.
                // NGCC adds fields in package.json suffixed with '_ivy_ngcc'
                // Example: module -> module_ivy_ngcc
                // tslint:disable-next-line:no-any
                compiler.resolverFactory.hooks.resolveOptions
                    .for('normal')
                    // tslint:disable-next-line:no-any
                    .tap('WebpackOptionsApply', (resolveOptions) => {
                    const originalMainFields = resolveOptions.mainFields;
                    const ivyMainFields = originalMainFields.map(f => `${f}_ivy_ngcc`);
                    return {
                        ...resolveOptions,
                        mainFields: [...ivyMainFields, ...originalMainFields],
                    };
                });
            }
            // tslint:disable-next-line:no-any
            compiler.resolverFactory.hooks.resolver
                .for('normal')
                // tslint:disable-next-line:no-any
                .tap('angular-compiler', (resolver) => {
                new paths_plugin_1.TypeScriptPathsPlugin(this._compilerOptions).apply(resolver);
            });
            compiler.hooks.normalModuleFactory.tap('angular-compiler', nmf => {
                // Virtual file system.
                // TODO: consider if it's better to remove this plugin and instead make it wait on the
                // VirtualFileSystemDecorator.
                // Wait for the plugin to be done when requesting `.ts` files directly (entry points), or
                // when the issuer is a `.ts` or `.ngfactory.js` file.
                nmf.hooks.beforeResolve.tapPromise('angular-compiler', async (request) => {
                    if (this.done && request) {
                        const name = request.request;
                        const issuer = request.contextInfo.issuer;
                        if (name.endsWith('.ts') || name.endsWith('.tsx')
                            || (issuer && /\.ts|ngfactory\.js$/.test(issuer))) {
                            try {
                                await this.done;
                            }
                            catch (_a) { }
                        }
                    }
                    return request;
                });
            });
        });
    }
    async _make(compilation) {
        benchmark_1.time('AngularCompilerPlugin._make');
        // tslint:disable-next-line:no-any
        if (compilation._ngToolsWebpackPluginInstance) {
            throw new Error('An @ngtools/webpack plugin already exist for this compilation.');
        }
        // If there is no compiler host at this point, it means that the environment hook did not run.
        // This happens in child compilations that inherit the parent compilation file system.
        // Node: child compilations also do not run most webpack compiler hooks, including almost all
        // we use here. The child compiler will always run as if it was the first build.
        if (this._compilerHost === undefined) {
            const inputFs = compilation.compiler.inputFileSystem;
            if (!inputFs.getWebpackCompilerHost) {
                throw new Error('AngularCompilerPlugin is running in a child compilation, but could' +
                    'not find a WebpackCompilerHost in the parent compilation.');
            }
            // Use the existing WebpackCompilerHost to ensure builds and rebuilds work.
            this._compilerHost = compiler_cli_1.createCompilerHost({
                options: this._compilerOptions,
                tsHost: inputFs.getWebpackCompilerHost(),
            });
        }
        // Set a private variable for this plugin instance.
        // tslint:disable-next-line:no-any
        compilation._ngToolsWebpackPluginInstance = this;
        // Update the resource loader with the new webpack compilation.
        if (this._resourceLoader) {
            this._resourceLoader.update(compilation);
        }
        try {
            await this._update();
            this.pushCompilationErrors(compilation);
        }
        catch (err) {
            compilation.errors.push(err);
            this.pushCompilationErrors(compilation);
        }
        benchmark_1.timeEnd('AngularCompilerPlugin._make');
    }
    pushCompilationErrors(compilation) {
        compilation.errors.push(...this._errors);
        compilation.warnings.push(...this._warnings);
        this._errors = [];
        this._warnings = [];
    }
    _makeTransformers() {
        const isAppPath = (fileName) => !fileName.endsWith('.ngfactory.ts') && !fileName.endsWith('.ngstyle.ts');
        const isMainPath = (fileName) => fileName === (this._mainPath ? utils_1.workaroundResolve(this._mainPath) : this._mainPath);
        const getEntryModule = () => this.entryModule
            ? { path: utils_1.workaroundResolve(this.entryModule.path), className: this.entryModule.className }
            : this.entryModule;
        const getLazyRoutes = () => this._lazyRoutes;
        const getTypeChecker = () => this._getTsProgram().getTypeChecker();
        if (this._JitMode) {
            // Replace resources in JIT.
            this._transformers.push(transformers_1.replaceResources(isAppPath, getTypeChecker, this._options.directTemplateLoading));
            // Downlevel constructor parameters for DI support
            // This is required to support forwardRef in ES2015 due to TDZ issues
            this._transformers.push(ctor_parameters_1.downlevelConstructorParameters(getTypeChecker));
        }
        else {
            if (!this._compilerOptions.enableIvy) {
                // Remove unneeded angular decorators in VE.
                // In Ivy they are removed in ngc directly.
                this._transformers.push(transformers_1.removeDecorators(isAppPath, getTypeChecker));
            }
            else {
                // Default for both options is to emit (undefined means true)
                const removeClassMetadata = this._options.emitClassMetadata === false;
                const removeNgModuleScope = this._options.emitNgModuleScope === false;
                if (removeClassMetadata || removeNgModuleScope) {
                    this._transformers.push(remove_ivy_jit_support_calls_1.removeIvyJitSupportCalls(removeClassMetadata, removeNgModuleScope, getTypeChecker));
                }
            }
            // Import ngfactory in loadChildren import syntax
            if (this._useFactories) {
                // Only transform imports to use factories with View Engine.
                this._transformers.push(transformers_1.importFactory(msg => this._warnings.push(msg), getTypeChecker));
            }
        }
        if (this._platformTransformers !== null) {
            this._transformers.push(...this._platformTransformers);
        }
        else {
            if (this._platform === interfaces_1.PLATFORM.Browser) {
                // If we have a locale, auto import the locale data file.
                // This transform must go before replaceBootstrap because it looks for the entry module
                // import, which will be replaced.
                if (this._normalizedLocale) {
                    this._transformers.push(transformers_1.registerLocaleData(isAppPath, getEntryModule, this._normalizedLocale));
                }
                if (!this._JitMode) {
                    // Replace bootstrap in browser non JIT Mode.
                    this._transformers.push(transformers_1.replaceBootstrap(isAppPath, getEntryModule, getTypeChecker, this._useFactories));
                }
            }
            else if (this._platform === interfaces_1.PLATFORM.Server) {
                // The export lazy module map is required only for string based lazy loading
                // which is not supported in Ivy
                if (!this._compilerOptions.enableIvy) {
                    this._transformers.push(transformers_1.exportLazyModuleMap(isMainPath, getLazyRoutes));
                }
                if (this._useFactories) {
                    this._transformers.push(transformers_1.exportNgFactory(isMainPath, getEntryModule), transformers_1.replaceServerBootstrap(isMainPath, getEntryModule, getTypeChecker));
                }
            }
        }
    }
    _getChangedTsFiles() {
        return this._getChangedCompilationFiles()
            .filter(k => (k.endsWith('.ts') || k.endsWith('.tsx')) && !k.endsWith('.d.ts'))
            .filter(k => this._compilerHost.fileExists(k));
    }
    async _update() {
        benchmark_1.time('AngularCompilerPlugin._update');
        // We only want to update on TS and template changes, but all kinds of files are on this
        // list, like package.json and .ngsummary.json files.
        const changedFiles = this._getChangedCompilationFiles();
        // If nothing we care about changed and it isn't the first run, don't do anything.
        if (changedFiles.length === 0 && !this._firstRun) {
            return;
        }
        // Make a new program and load the Angular structure.
        await this._createOrUpdateProgram();
        if (this._discoverLazyRoutes) {
            // Try to find lazy routes if we have an entry module.
            // We need to run the `listLazyRoutes` the first time because it also navigates libraries
            // and other things that we might miss using the (faster) findLazyRoutesInAst.
            // Lazy routes modules will be read with compilerHost and added to the changed files.
            let lazyRouteMap = {};
            if (!this._JitMode || this._firstRun) {
                lazyRouteMap = this._listLazyRoutesFromProgram();
            }
            else {
                const changedTsFiles = this._getChangedTsFiles();
                if (changedTsFiles.length > 0) {
                    lazyRouteMap = this._findLazyRoutesInAst(changedTsFiles);
                }
            }
            // Find lazy routes
            lazyRouteMap = {
                ...lazyRouteMap,
                ...this._options.additionalLazyModules,
            };
            this._processLazyRoutes(lazyRouteMap);
        }
        // Emit files.
        benchmark_1.time('AngularCompilerPlugin._update._emit');
        const { emitResult, diagnostics } = this._emit();
        benchmark_1.timeEnd('AngularCompilerPlugin._update._emit');
        // Report any diagnostics.
        diagnostics_1.reportDiagnostics(diagnostics, this._compilerHost, msg => this._errors.push(new Error(msg)), msg => this._warnings.push(msg));
        this._emitSkipped = !emitResult || emitResult.emitSkipped;
        // Reset changed files on successful compilation.
        if (!this._emitSkipped && this._errors.length === 0) {
            this._compilerHost.resetChangedFileTracker();
        }
        benchmark_1.timeEnd('AngularCompilerPlugin._update');
    }
    writeI18nOutFile() {
        function _recursiveMkDir(p) {
            if (!fs.existsSync(p)) {
                _recursiveMkDir(path.dirname(p));
                fs.mkdirSync(p);
            }
        }
        // Write the extracted messages to disk.
        if (this._compilerOptions.i18nOutFile) {
            const i18nOutFilePath = path.resolve(this._basePath, this._compilerOptions.i18nOutFile);
            const i18nOutFileContent = this._compilerHost.readFile(i18nOutFilePath);
            if (i18nOutFileContent) {
                _recursiveMkDir(path.dirname(i18nOutFilePath));
                fs.writeFileSync(i18nOutFilePath, i18nOutFileContent);
            }
        }
    }
    getCompiledFile(fileName) {
        const outputFile = fileName.replace(/.tsx?$/, '.js');
        let outputText;
        let sourceMap;
        let errorDependencies = [];
        if (this._emitSkipped) {
            const text = this._compilerHost.readFile(outputFile);
            if (text) {
                // If the compilation didn't emit files this time, try to return the cached files from the
                // last compilation and let the compilation errors show what's wrong.
                outputText = text;
                sourceMap = this._compilerHost.readFile(outputFile + '.map');
            }
            else {
                // There's nothing we can serve. Return an empty string to prevent lenghty webpack errors,
                // add the rebuild warning if it's not there yet.
                // We also need to all changed files as dependencies of this file, so that all of them
                // will be watched and trigger a rebuild next time.
                outputText = '';
                const program = this._getTsProgram();
                errorDependencies = (program ? program.getSourceFiles().map(x => x.fileName) : [])
                    // These paths are used by the loader so we must denormalize them.
                    .map((p) => this._compilerHost.denormalizePath(p));
            }
        }
        else {
            // Check if the TS input file and the JS output file exist.
            if (((fileName.endsWith('.ts') || fileName.endsWith('.tsx'))
                && !this._compilerHost.fileExists(fileName))
                || !this._compilerHost.fileExists(outputFile, false)) {
                let msg = `${fileName} is missing from the TypeScript compilation. `
                    + `Please make sure it is in your tsconfig via the 'files' or 'include' property.`;
                if (this._nodeModulesRegExp.test(fileName)) {
                    msg += '\nThe missing file seems to be part of a third party library. '
                        + 'TS files in published libraries are often a sign of a badly packaged library. '
                        + 'Please open an issue in the library repository to alert its author and ask them '
                        + 'to package the library using the Angular Package Format (https://goo.gl/jB3GVv).';
                }
                throw new Error(msg);
            }
            outputText = this._compilerHost.readFile(outputFile) || '';
            sourceMap = this._compilerHost.readFile(outputFile + '.map');
        }
        return { outputText, sourceMap, errorDependencies };
    }
    getDependencies(fileName, includeResources = true) {
        const resolvedFileName = this._compilerHost.resolve(fileName);
        const sourceFile = this._compilerHost.getSourceFile(resolvedFileName, ts.ScriptTarget.Latest);
        if (!sourceFile) {
            return [];
        }
        const options = this._compilerOptions;
        const host = this._compilerHost;
        const cache = this._moduleResolutionCache;
        const esImports = ast_helpers_1.collectDeepNodes(sourceFile, [
            ts.SyntaxKind.ImportDeclaration,
            ts.SyntaxKind.ExportDeclaration,
        ])
            .map(decl => {
            if (!decl.moduleSpecifier) {
                return null;
            }
            const moduleName = decl.moduleSpecifier.text;
            const resolved = ts.resolveModuleName(moduleName, resolvedFileName, options, host, cache);
            if (resolved.resolvedModule) {
                return resolved.resolvedModule.resolvedFileName;
            }
            else {
                return null;
            }
        })
            .filter(x => x);
        let resourceImports = [];
        const resourceDependencies = [];
        if (includeResources) {
            resourceImports = transformers_1.findResources(sourceFile)
                .map(resourcePath => core_1.resolve(core_1.dirname(resolvedFileName), core_1.normalize(resourcePath)));
            for (const resource of resourceImports) {
                for (const dep of this.getResourceDependencies(this._compilerHost.denormalizePath(resource))) {
                    resourceDependencies.push(dep);
                }
            }
        }
        // These paths are meant to be used by the loader so we must denormalize them.
        const uniqueDependencies = new Set([
            ...esImports,
            ...resourceImports,
            ...resourceDependencies,
        ].map((p) => p && this._compilerHost.denormalizePath(p)));
        return [...uniqueDependencies];
    }
    getResourceDependencies(fileName) {
        if (!this._resourceLoader) {
            return [];
        }
        // The source loader uses TS-style forward slash paths for all platforms.
        const resolvedFileName = utils_1.forwardSlashPath(fileName);
        return this._resourceLoader.getResourceDependencies(resolvedFileName);
    }
    getTypeDependencies(fileName) {
        // We currently add all type deps directly to the main path.
        // If there's no main path or the lookup isn't the main path, bail.
        if (!this._mainPath || this._compilerHost.resolve(fileName) != this._mainPath) {
            return [];
        }
        // Note: this set is always for the previous build, not the current build.
        // It should be better than not having rebuilds on type deps but isn't 100% correct.
        return Array.from(this._typeDeps);
    }
    // This code mostly comes from `performCompilation` in `@angular/compiler-cli`.
    // It skips the program creation because we need to use `loadNgStructureAsync()`,
    // and uses CustomTransformers.
    _emit() {
        benchmark_1.time('AngularCompilerPlugin._emit');
        const program = this._program;
        const allDiagnostics = [];
        const diagMode = (this._firstRun || !this._forkTypeChecker) ?
            diagnostics_1.DiagnosticMode.All : diagnostics_1.DiagnosticMode.Syntactic;
        let emitResult;
        try {
            if (this._JitMode) {
                const tsProgram = program;
                const changedTsFiles = new Set();
                if (this._firstRun) {
                    // Check parameter diagnostics.
                    benchmark_1.time('AngularCompilerPlugin._emit.ts.getOptionsDiagnostics');
                    allDiagnostics.push(...tsProgram.getOptionsDiagnostics());
                    benchmark_1.timeEnd('AngularCompilerPlugin._emit.ts.getOptionsDiagnostics');
                }
                else {
                    // generate a list of changed files for emit
                    // not needed on first run since a full program emit is required
                    for (const changedFile of this._compilerHost.getChangedFilePaths()) {
                        if (!/.(tsx|ts|json|js)$/.test(changedFile)) {
                            continue;
                        }
                        // existing type definitions are not emitted
                        if (changedFile.endsWith('.d.ts')) {
                            continue;
                        }
                        changedTsFiles.add(changedFile);
                    }
                }
                allDiagnostics.push(...diagnostics_1.gatherDiagnostics(tsProgram, this._JitMode, 'AngularCompilerPlugin._emit.ts', diagMode));
                if (!diagnostics_1.hasErrors(allDiagnostics)) {
                    if (this._firstRun || changedTsFiles.size > 20 || !this._hadFullJitEmit) {
                        emitResult = tsProgram.emit(undefined, undefined, undefined, undefined, { before: this._transformers });
                        this._hadFullJitEmit = !emitResult.emitSkipped;
                        allDiagnostics.push(...emitResult.diagnostics);
                    }
                    else {
                        for (const changedFile of changedTsFiles) {
                            const sourceFile = tsProgram.getSourceFile(changedFile);
                            if (!sourceFile) {
                                continue;
                            }
                            const timeLabel = `AngularCompilerPlugin._emit.ts+${sourceFile.fileName}+.emit`;
                            benchmark_1.time(timeLabel);
                            emitResult = tsProgram.emit(sourceFile, undefined, undefined, undefined, { before: this._transformers });
                            allDiagnostics.push(...emitResult.diagnostics);
                            benchmark_1.timeEnd(timeLabel);
                        }
                    }
                }
            }
            else {
                const angularProgram = program;
                // Check Angular structural diagnostics.
                benchmark_1.time('AngularCompilerPlugin._emit.ng.getNgStructuralDiagnostics');
                allDiagnostics.push(...angularProgram.getNgStructuralDiagnostics());
                benchmark_1.timeEnd('AngularCompilerPlugin._emit.ng.getNgStructuralDiagnostics');
                if (this._firstRun) {
                    // Check TypeScript parameter diagnostics.
                    benchmark_1.time('AngularCompilerPlugin._emit.ng.getTsOptionDiagnostics');
                    allDiagnostics.push(...angularProgram.getTsOptionDiagnostics());
                    benchmark_1.timeEnd('AngularCompilerPlugin._emit.ng.getTsOptionDiagnostics');
                    // Check Angular parameter diagnostics.
                    benchmark_1.time('AngularCompilerPlugin._emit.ng.getNgOptionDiagnostics');
                    allDiagnostics.push(...angularProgram.getNgOptionDiagnostics());
                    benchmark_1.timeEnd('AngularCompilerPlugin._emit.ng.getNgOptionDiagnostics');
                }
                allDiagnostics.push(...diagnostics_1.gatherDiagnostics(angularProgram, this._JitMode, 'AngularCompilerPlugin._emit.ng', diagMode));
                if (!diagnostics_1.hasErrors(allDiagnostics)) {
                    benchmark_1.time('AngularCompilerPlugin._emit.ng.emit');
                    const extractI18n = !!this._compilerOptions.i18nOutFile;
                    const emitFlags = extractI18n ? compiler_cli_1.EmitFlags.I18nBundle : compiler_cli_1.EmitFlags.Default;
                    emitResult = angularProgram.emit({
                        emitFlags, customTransformers: {
                            beforeTs: this._transformers,
                        },
                    });
                    allDiagnostics.push(...emitResult.diagnostics);
                    if (extractI18n) {
                        this.writeI18nOutFile();
                    }
                    benchmark_1.timeEnd('AngularCompilerPlugin._emit.ng.emit');
                }
            }
        }
        catch (e) {
            benchmark_1.time('AngularCompilerPlugin._emit.catch');
            // This function is available in the import below, but this way we avoid the dependency.
            // import { isSyntaxError } from '@angular/compiler';
            function isSyntaxError(error) {
                return error['ngSyntaxError']; // tslint:disable-line:no-any
            }
            let errMsg;
            let code;
            if (isSyntaxError(e)) {
                // don't report the stack for syntax errors as they are well known errors.
                errMsg = e.message;
                code = compiler_cli_1.DEFAULT_ERROR_CODE;
            }
            else {
                errMsg = e.stack;
                // It is not a syntax error we might have a program with unknown state, discard it.
                this._program = undefined;
                code = compiler_cli_1.UNKNOWN_ERROR_CODE;
            }
            allDiagnostics.push({ category: ts.DiagnosticCategory.Error, messageText: errMsg, code, source: compiler_cli_1.SOURCE });
            benchmark_1.timeEnd('AngularCompilerPlugin._emit.catch');
        }
        benchmark_1.timeEnd('AngularCompilerPlugin._emit');
        return { program, emitResult, diagnostics: allDiagnostics };
    }
    _validateLocale(locale) {
        // Get the path of the common module.
        const commonPath = path.dirname(require.resolve('@angular/common/package.json'));
        // Check if the locale file exists
        if (!fs.existsSync(path.resolve(commonPath, 'locales', `${locale}.js`))) {
            // Check for an alternative locale (if the locale id was badly formatted).
            const locales = fs.readdirSync(path.resolve(commonPath, 'locales'))
                .filter(file => file.endsWith('.js'))
                .map(file => file.replace('.js', ''));
            let newLocale;
            const normalizedLocale = locale.toLowerCase().replace(/_/g, '-');
            for (const l of locales) {
                if (l.toLowerCase() === normalizedLocale) {
                    newLocale = l;
                    break;
                }
            }
            if (newLocale) {
                locale = newLocale;
            }
            else {
                // Check for a parent locale
                const parentLocale = normalizedLocale.split('-')[0];
                if (locales.indexOf(parentLocale) !== -1) {
                    locale = parentLocale;
                }
                else {
                    this._warnings.push(`AngularCompilerPlugin: Unable to load the locale data file ` +
                        `"@angular/common/locales/${locale}", ` +
                        `please check that "${locale}" is a valid locale id.
            If needed, you can use "registerLocaleData" manually.`);
                    return null;
                }
            }
        }
        return locale;
    }
}
exports.AngularCompilerPlugin = AngularCompilerPlugin;
