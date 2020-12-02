"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const constants = require("./constants");
const resolver_1 = require("./resolver");
const utils_1 = require("./utils");
/**
 * Create the TypeScript language service
 */
function makeServicesHost(scriptRegex, log, loader, instance, enableFileCaching, projectReferences) {
    const { compiler, compilerOptions, appendTsTsxSuffixesIfRequired, files, loaderOptions: { resolveModuleName: customResolveModuleName, resolveTypeReferenceDirective: customResolveTypeReferenceDirective } } = instance;
    const newLine = compilerOptions.newLine === constants.CarriageReturnLineFeedCode
        ? constants.CarriageReturnLineFeed
        : compilerOptions.newLine === constants.LineFeedCode
            ? constants.LineFeed
            : constants.EOL;
    // make a (sync) resolver that follows webpack's rules
    const resolveSync = resolver_1.makeResolver(loader._compiler.options);
    const readFileWithFallback = (filePath, encoding) => compiler.sys.readFile(filePath, encoding) || utils_1.readFile(filePath, encoding);
    const fileExists = (filePathToCheck) => compiler.sys.fileExists(filePathToCheck) ||
        utils_1.readFile(filePathToCheck) !== undefined;
    const moduleResolutionHost = {
        fileExists,
        readFile: readFileWithFallback,
        realpath: compiler.sys.realpath,
        directoryExists: compiler.sys.directoryExists
    };
    const clearCache = enableFileCaching ? addCache(moduleResolutionHost) : null;
    // loader.context seems to work fine on Linux / Mac regardless causes problems for @types resolution on Windows for TypeScript < 2.3
    const getCurrentDirectory = () => loader.context;
    const resolvers = makeResolvers(compiler, compilerOptions, moduleResolutionHost, customResolveTypeReferenceDirective, customResolveModuleName, resolveSync, appendTsTsxSuffixesIfRequired, scriptRegex, instance);
    const servicesHost = {
        getProjectVersion: () => `${instance.version}`,
        getProjectReferences: () => projectReferences,
        getScriptFileNames: () => [...files.keys()].filter(filePath => filePath.match(scriptRegex)),
        getScriptVersion: (fileName) => {
            fileName = path.normalize(fileName);
            const file = files.get(fileName);
            return file === undefined ? '' : file.version.toString();
        },
        getScriptSnapshot: (fileName) => {
            // This is called any time TypeScript needs a file's text
            // We either load from memory or from disk
            fileName = path.normalize(fileName);
            let file = files.get(fileName);
            if (file === undefined) {
                const text = utils_1.readFile(fileName);
                if (text === undefined) {
                    return undefined;
                }
                file = { version: 0, text };
                files.set(fileName, file);
            }
            return compiler.ScriptSnapshot.fromString(file.text);
        },
        /**
         * getDirectories is also required for full import and type reference completions.
         * Without it defined, certain completions will not be provided
         */
        getDirectories: compiler.sys.getDirectories,
        /**
         * For @types expansion, these two functions are needed.
         */
        directoryExists: moduleResolutionHost.directoryExists,
        useCaseSensitiveFileNames: () => compiler.sys.useCaseSensitiveFileNames,
        realpath: moduleResolutionHost.realpath,
        // The following three methods are necessary for @types resolution from TS 2.4.1 onwards see: https://github.com/Microsoft/TypeScript/issues/16772
        fileExists: moduleResolutionHost.fileExists,
        readFile: moduleResolutionHost.readFile,
        readDirectory: compiler.sys.readDirectory,
        getCurrentDirectory,
        getCompilationSettings: () => compilerOptions,
        getDefaultLibFileName: (options) => compiler.getDefaultLibFilePath(options),
        getNewLine: () => newLine,
        trace: log.log,
        log: log.log,
        // used for (/// <reference types="...">) see https://github.com/Realytics/fork-ts-checker-webpack-plugin/pull/250#issuecomment-485061329
        resolveTypeReferenceDirectives: resolvers.resolveTypeReferenceDirectives,
        resolveModuleNames: resolvers.resolveModuleNames,
        getCustomTransformers: () => instance.transformers
    };
    return { servicesHost, clearCache };
}
exports.makeServicesHost = makeServicesHost;
function makeResolvers(compiler, compilerOptions, moduleResolutionHost, customResolveTypeReferenceDirective, customResolveModuleName, resolveSync, appendTsTsxSuffixesIfRequired, scriptRegex, instance) {
    const resolveTypeReferenceDirective = makeResolveTypeReferenceDirective(compiler, compilerOptions, moduleResolutionHost, customResolveTypeReferenceDirective);
    const resolveTypeReferenceDirectives = (typeDirectiveNames, containingFile, _redirectedReference) => typeDirectiveNames.map(directive => resolveTypeReferenceDirective(directive, containingFile)
        .resolvedTypeReferenceDirective);
    const resolveModuleName = makeResolveModuleName(compiler, compilerOptions, moduleResolutionHost, customResolveModuleName);
    const resolveModuleNames = (moduleNames, containingFile, _reusedNames, _redirectedReference) => {
        const resolvedModules = moduleNames.map(moduleName => resolveModule(resolveSync, resolveModuleName, appendTsTsxSuffixesIfRequired, scriptRegex, moduleName, containingFile));
        populateDependencyGraphs(resolvedModules, instance, containingFile);
        return resolvedModules;
    };
    return {
        resolveTypeReferenceDirectives,
        resolveModuleNames
    };
}
/**
 * Create the TypeScript Watch host
 */
function makeWatchHost(scriptRegex, log, loader, instance, projectReferences) {
    const { compiler, compilerOptions, appendTsTsxSuffixesIfRequired, files, otherFiles, loaderOptions: { resolveModuleName: customResolveModuleName, resolveTypeReferenceDirective: customResolveTypeReferenceDirective } } = instance;
    const newLine = compilerOptions.newLine === constants.CarriageReturnLineFeedCode
        ? constants.CarriageReturnLineFeed
        : compilerOptions.newLine === constants.LineFeedCode
            ? constants.LineFeed
            : constants.EOL;
    // make a (sync) resolver that follows webpack's rules
    const resolveSync = resolver_1.makeResolver(loader._compiler.options);
    const readFileWithFallback = (filePath, encoding) => compiler.sys.readFile(filePath, encoding) || utils_1.readFile(filePath, encoding);
    const moduleResolutionHost = {
        fileExists,
        readFile: readFileWithFallback,
        realpath: compiler.sys.realpath
    };
    // loader.context seems to work fine on Linux / Mac regardless causes problems for @types resolution on Windows for TypeScript < 2.3
    const getCurrentDirectory = () => loader.context;
    const watchedFiles = {};
    const watchedDirectories = {};
    const watchedDirectoriesRecursive = {};
    const resolvers = makeResolvers(compiler, compilerOptions, moduleResolutionHost, customResolveTypeReferenceDirective, customResolveModuleName, resolveSync, appendTsTsxSuffixesIfRequired, scriptRegex, instance);
    const watchHost = {
        rootFiles: getRootFileNames(),
        options: compilerOptions,
        useCaseSensitiveFileNames: () => compiler.sys.useCaseSensitiveFileNames,
        getNewLine: () => newLine,
        getCurrentDirectory,
        getDefaultLibFileName: options => compiler.getDefaultLibFilePath(options),
        fileExists,
        readFile: readFileWithCachingText,
        directoryExists: dirPath => compiler.sys.directoryExists(path.normalize(dirPath)),
        getDirectories: dirPath => compiler.sys.getDirectories(path.normalize(dirPath)),
        readDirectory: (dirPath, extensions, exclude, include, depth) => compiler.sys.readDirectory(path.normalize(dirPath), extensions, exclude, include, depth),
        realpath: dirPath => compiler.sys.resolvePath(path.normalize(dirPath)),
        trace: logData => log.log(logData),
        watchFile,
        watchDirectory,
        // used for (/// <reference types="...">) see https://github.com/Realytics/fork-ts-checker-webpack-plugin/pull/250#issuecomment-485061329
        resolveTypeReferenceDirectives: resolvers.resolveTypeReferenceDirectives,
        resolveModuleNames: resolvers.resolveModuleNames,
        invokeFileWatcher,
        invokeDirectoryWatcher,
        updateRootFileNames: () => {
            instance.changedFilesList = false;
            if (instance.watchOfFilesAndCompilerOptions !== undefined) {
                instance.watchOfFilesAndCompilerOptions.updateRootFileNames(getRootFileNames());
            }
        },
        createProgram: projectReferences === undefined
            ? compiler.createAbstractBuilder
            : createBuilderProgramWithReferences
    };
    return watchHost;
    function getRootFileNames() {
        return [...files.keys()].filter(filePath => filePath.match(scriptRegex));
    }
    function readFileWithCachingText(fileName, encoding) {
        fileName = path.normalize(fileName);
        const file = files.get(fileName) || otherFiles.get(fileName);
        if (file !== undefined) {
            return file.text;
        }
        const text = readFileWithFallback(fileName, encoding);
        if (text === undefined) {
            return undefined;
        }
        otherFiles.set(fileName, { version: 0, text });
        return text;
    }
    function fileExists(fileName) {
        const filePath = path.normalize(fileName);
        return files.has(filePath) || compiler.sys.fileExists(filePath);
    }
    function invokeWatcherCallbacks(callbacks, fileName, eventKind) {
        if (callbacks !== undefined) {
            // The array copy is made to ensure that even if one of the callback removes the callbacks,
            // we dont miss any callbacks following it
            const cbs = callbacks.slice();
            for (const cb of cbs) {
                cb(fileName, eventKind);
            }
        }
    }
    function invokeFileWatcher(fileName, eventKind) {
        fileName = path.normalize(fileName);
        invokeWatcherCallbacks(watchedFiles[fileName], fileName, eventKind);
    }
    function invokeDirectoryWatcher(directory, fileAddedOrRemoved) {
        directory = path.normalize(directory);
        invokeWatcherCallbacks(watchedDirectories[directory], fileAddedOrRemoved);
        invokeRecursiveDirectoryWatcher(directory, fileAddedOrRemoved);
    }
    function invokeRecursiveDirectoryWatcher(directory, fileAddedOrRemoved) {
        directory = path.normalize(directory);
        invokeWatcherCallbacks(watchedDirectoriesRecursive[directory], fileAddedOrRemoved);
        const basePath = path.dirname(directory);
        if (directory !== basePath) {
            invokeRecursiveDirectoryWatcher(basePath, fileAddedOrRemoved);
        }
    }
    function createWatcher(file, callbacks, callback) {
        file = path.normalize(file);
        const existing = callbacks[file];
        if (existing === undefined) {
            callbacks[file] = [callback];
        }
        else {
            existing.push(callback);
        }
        return {
            close: () => {
                // tslint:disable-next-line:no-shadowed-variable
                const existing = callbacks[file];
                if (existing !== undefined) {
                    utils_1.unorderedRemoveItem(existing, callback);
                }
            }
        };
    }
    function watchFile(fileName, callback, _pollingInterval) {
        return createWatcher(fileName, watchedFiles, callback);
    }
    function watchDirectory(fileName, callback, recursive) {
        return createWatcher(fileName, recursive === true ? watchedDirectoriesRecursive : watchedDirectories, callback);
    }
    function createBuilderProgramWithReferences(rootNames, options, host, oldProgram, configFileParsingDiagnostics) {
        const program = compiler.createProgram({
            rootNames: rootNames,
            options: options,
            host,
            oldProgram: oldProgram && oldProgram.getProgram(),
            configFileParsingDiagnostics,
            projectReferences
        });
        const builderProgramHost = host;
        return compiler.createAbstractBuilder(program, builderProgramHost, oldProgram, configFileParsingDiagnostics);
    }
}
exports.makeWatchHost = makeWatchHost;
function makeResolveTypeReferenceDirective(compiler, compilerOptions, moduleResolutionHost, customResolveTypeReferenceDirective) {
    if (customResolveTypeReferenceDirective === undefined) {
        return (directive, containingFile) => compiler.resolveTypeReferenceDirective(directive, containingFile, compilerOptions, moduleResolutionHost);
    }
    return (directive, containingFile) => customResolveTypeReferenceDirective(directive, containingFile, compilerOptions, moduleResolutionHost, compiler.resolveTypeReferenceDirective);
}
function isJsImplementationOfTypings(resolvedModule, tsResolution) {
    return (resolvedModule.resolvedFileName.endsWith('js') &&
        /\.d\.ts$/.test(tsResolution.resolvedFileName));
}
function resolveModule(resolveSync, resolveModuleName, appendTsTsxSuffixesIfRequired, scriptRegex, moduleName, containingFile) {
    let resolutionResult;
    try {
        const originalFileName = resolveSync(undefined, path.normalize(path.dirname(containingFile)), moduleName);
        const resolvedFileName = appendTsTsxSuffixesIfRequired(originalFileName);
        if (resolvedFileName.match(scriptRegex) !== null) {
            resolutionResult = { resolvedFileName, originalFileName };
        }
        // tslint:disable-next-line:no-empty
    }
    catch (e) { }
    const tsResolution = resolveModuleName(moduleName, containingFile);
    if (tsResolution.resolvedModule !== undefined) {
        const resolvedFileName = path.normalize(tsResolution.resolvedModule.resolvedFileName);
        const tsResolutionResult = {
            originalFileName: resolvedFileName,
            resolvedFileName,
            isExternalLibraryImport: tsResolution.resolvedModule.isExternalLibraryImport
        };
        return resolutionResult === undefined ||
            resolutionResult.resolvedFileName ===
                tsResolutionResult.resolvedFileName ||
            isJsImplementationOfTypings(resolutionResult, tsResolutionResult)
            ? tsResolutionResult
            : resolutionResult;
    }
    return resolutionResult;
}
function makeResolveModuleName(compiler, compilerOptions, moduleResolutionHost, customResolveModuleName) {
    if (customResolveModuleName === undefined) {
        return (moduleName, containingFile) => compiler.resolveModuleName(moduleName, containingFile, compilerOptions, moduleResolutionHost);
    }
    return (moduleName, containingFile) => customResolveModuleName(moduleName, containingFile, compilerOptions, moduleResolutionHost, compiler.resolveModuleName);
}
function populateDependencyGraphs(resolvedModules, instance, containingFile) {
    resolvedModules = resolvedModules.filter(mod => mod !== null && mod !== undefined);
    instance.dependencyGraph[path.normalize(containingFile)] = resolvedModules;
    resolvedModules.forEach(resolvedModule => {
        if (instance.reverseDependencyGraph[resolvedModule.resolvedFileName] ===
            undefined) {
            instance.reverseDependencyGraph[resolvedModule.resolvedFileName] = {};
        }
        instance.reverseDependencyGraph[resolvedModule.resolvedFileName][path.normalize(containingFile)] = true;
    });
}
const cacheableFunctions = [
    'fileExists',
    'directoryExists',
    'realpath'
];
function addCache(servicesHost) {
    const clearCacheFunctions = [];
    cacheableFunctions.forEach((functionToCache) => {
        const originalFunction = servicesHost[functionToCache];
        if (originalFunction !== undefined) {
            const cache = createCache(originalFunction);
            servicesHost[functionToCache] = cache.getCached;
            clearCacheFunctions.push(cache.clear);
        }
    });
    return () => clearCacheFunctions.forEach(clear => clear());
}
function createCache(originalFunction) {
    const cache = new Map();
    return {
        clear: () => {
            cache.clear();
        },
        getCached: (arg) => {
            let res = cache.get(arg);
            if (res !== undefined) {
                return res;
            }
            res = originalFunction(arg);
            cache.set(arg, res);
            return res;
        }
    };
}
