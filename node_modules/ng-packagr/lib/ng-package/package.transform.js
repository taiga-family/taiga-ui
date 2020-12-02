"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const depth_1 = require("../graph/depth");
const node_1 = require("../graph/node");
const log = require("../utils/log");
const rimraf_1 = require("../utils/rimraf");
const nodes_1 = require("./nodes");
const discover_packages_1 = require("./discover-packages");
const file_watcher_1 = require("../file-system/file-watcher");
const array_1 = require("../utils/array");
const copy_1 = require("../utils/copy");
const path_1 = require("../utils/path");
/**
 * A transformation for building an npm package:
 *
 *  - discoverPackages
 *  - options
 *  - initTsConfig
 *  - analyzeTsSources (thereby extracting template and stylesheet files)
 *  - for each entry point
 *    - run the entryPontTransform
 *  - writeNpmPackage
 *
 * @param project Project token, reference to `ng-package.json`
 * @param options ng-packagr options
 * @param initTsConfigTransform Transformation initializing the tsconfig of each entry point.
 * @param analyseSourcesTransform Transformation analyzing the typescript source files of each entry point.
 * @param entryPointTransform Transformation for asset rendering and compilation of a single entry point.
 */
exports.packageTransformFactory = (project, options, initTsConfigTransform, analyseSourcesTransform, entryPointTransform) => (source$) => {
    const pkgUri = nodes_1.ngUrl(project);
    const buildTransform = options.watch
        ? watchTransformFactory(project, options, analyseSourcesTransform, entryPointTransform)
        : buildTransformFactory(project, analyseSourcesTransform, entryPointTransform);
    return source$.pipe(operators_1.tap(() => log.info(`Building Angular Package`)), 
    // Discover packages and entry points
    operators_1.switchMap(graph => {
        const pkg = discover_packages_1.discoverPackages({ project });
        return rxjs_1.from(pkg).pipe(operators_1.map(value => {
            const ngPkg = new nodes_1.PackageNode(pkgUri);
            ngPkg.data = value;
            return graph.put(ngPkg);
        }));
    }), 
    // Clean the primary dest folder (should clean all secondary sub-directory, as well)
    operators_1.switchMap(graph => {
        const { dest, deleteDestPath } = graph.get(pkgUri).data;
        return rxjs_1.from(deleteDestPath ? rimraf_1.rimraf(dest) : Promise.resolve());
    }, (graph, _) => graph), 
    // Add entry points to graph
    operators_1.map(graph => {
        const ngPkg = graph.get(pkgUri);
        const entryPoints = [ngPkg.data.primary, ...ngPkg.data.secondaries].map(entryPoint => {
            const { destinationFiles, moduleId } = entryPoint;
            const node = new nodes_1.EntryPointNode(nodes_1.ngUrl(moduleId), ngPkg.cache.sourcesFileCache);
            node.data = { entryPoint, destinationFiles };
            node.state = 'dirty';
            ngPkg.dependsOn(node);
            return node;
        });
        return graph.put(entryPoints);
    }), 
    // Initialize the tsconfig for each entry point
    initTsConfigTransform, 
    // perform build
    buildTransform);
};
const watchTransformFactory = (project, _options, analyseSourcesTransform, entryPointTransform) => (source$) => {
    const CompleteWaitingForFileChange = '\nCompilation complete. Watching for file changes...';
    const FileChangeDetected = '\nFile change detected. Starting incremental compilation...';
    const FailedWaitingForFileChange = '\nCompilation failed. Watching for file changes...';
    return source$.pipe(operators_1.switchMap(graph => {
        const { data, cache } = graph.find(nodes_1.isPackage);
        return file_watcher_1.createFileWatch(data.src, [data.dest]).pipe(operators_1.tap(fileChange => {
            const { filePath, event } = fileChange;
            const { sourcesFileCache } = cache;
            const cachedSourceFile = sourcesFileCache.get(filePath);
            if (!cachedSourceFile) {
                if (event === 'unlink' || event === 'add') {
                    cache.globCache = regenerateGlobCache(sourcesFileCache);
                }
                return;
            }
            const { declarationFileName } = cachedSourceFile;
            const uriToClean = [filePath, declarationFileName].map(x => nodes_1.fileUrl(path_1.ensureUnixPath(x)));
            let nodesToClean = graph.filter(node => uriToClean.some(uri => uri === node.url));
            nodesToClean = array_1.flatten([
                ...nodesToClean,
                // if a non ts file changes we need to clean up it's direct dependees
                // this is mainly done for resources such as html and css
                ...nodesToClean.filter(x => !x.url.endsWith('.ts')).map(x => x.dependees),
            ]);
            // delete node that changes
            nodesToClean.forEach(node => {
                sourcesFileCache.delete(nodes_1.fileUrlPath(node.url));
            });
            const entryPoints = graph.filter(nodes_1.isEntryPoint);
            entryPoints.forEach(entryPoint => {
                const isDirty = entryPoint.dependents.some(x => nodesToClean.some(node => node.url === x.url));
                if (isDirty) {
                    entryPoint.state = 'dirty';
                    const { metadata } = entryPoint.data.destinationFiles;
                    sourcesFileCache.delete(metadata);
                }
            });
            // Regenerate glob cache
            if (event === 'unlink' || event === 'add') {
                cache.globCache = regenerateGlobCache(sourcesFileCache);
            }
        }), operators_1.debounceTime(200), operators_1.tap(() => log.msg(FileChangeDetected)), operators_1.startWith(undefined), operators_1.mapTo(graph));
    }), operators_1.switchMap(graph => {
        return rxjs_1.of(graph).pipe(buildTransformFactory(project, analyseSourcesTransform, entryPointTransform), operators_1.tap(() => log.msg(CompleteWaitingForFileChange)), operators_1.catchError(error => {
            log.error(error);
            log.msg(FailedWaitingForFileChange);
            return rxjs_1.NEVER;
        }));
    }));
};
const buildTransformFactory = (project, analyseSourcesTransform, entryPointTransform) => (source$) => {
    const pkgUri = nodes_1.ngUrl(project);
    return source$.pipe(
    // Analyse dependencies and external resources for each entry point
    analyseSourcesTransform, 
    // Next, run through the entry point transformation (assets rendering, code compilation)
    scheduleEntryPoints(entryPointTransform), 
    // Write npm package to dest folder
    writeNpmPackage(pkgUri), operators_1.tap(graph => {
        const ngPkg = graph.get(pkgUri);
        log.success('\n------------------------------------------------------------------------------');
        log.success(`Built Angular Package
 - from: ${ngPkg.data.src}
 - to:   ${ngPkg.data.dest}`);
        log.success('------------------------------------------------------------------------------');
    }));
};
const writeNpmPackage = (pkgUri) => rxjs_1.pipe(operators_1.switchMap(graph => {
    const { data } = graph.get(pkgUri);
    const filesToCopy = Promise.all([`${data.src}/LICENSE`, `${data.src}/README.md`, `${data.src}/CHANGELOG.md`].map(src => copy_1.copyFile(src, path.join(data.dest, path.basename(src)), { dereference: true })));
    return rxjs_1.from(filesToCopy).pipe(operators_1.map(() => graph));
}));
const scheduleEntryPoints = (epTransform) => rxjs_1.pipe(operators_1.concatMap(graph => {
    // Calculate node/dependency depth and determine build order
    const depthBuilder = new depth_1.DepthBuilder();
    const entryPoints = graph.filter(nodes_1.isEntryPoint);
    entryPoints.forEach(entryPoint => {
        const deps = entryPoint.filter(nodes_1.isEntryPoint).map(ep => ep.url);
        depthBuilder.add(entryPoint.url, deps);
    });
    // The array index is the depth.
    const groups = depthBuilder.build();
    // Build entry points with lower depth values first.
    return rxjs_1.from(array_1.flatten(groups)).pipe(operators_1.map(epUrl => graph.find(nodes_1.byEntryPoint().and(ep => ep.url === epUrl))), operators_1.filter(entryPoint => entryPoint.state !== 'done'), operators_1.concatMap(ep => rxjs_1.of(ep).pipe(
    // Mark the entry point as 'in-progress'
    operators_1.tap(entryPoint => (entryPoint.state = node_1.STATE_IN_PROGESS)), operators_1.mapTo(graph), epTransform)), operators_1.takeLast(1), // don't use last as sometimes it this will cause 'no elements in sequence',
    operators_1.defaultIfEmpty(graph));
}));
function regenerateGlobCache(sourcesFileCache) {
    const cache = {};
    sourcesFileCache.forEach((value, key) => {
        // ignore node_modules and file which don't exists as they are not used by globbing in our case
        if (value.exists && !key.includes('node_modules')) {
            cache[key] = 'FILE';
        }
    });
    return cache;
}
//# sourceMappingURL=package.transform.js.map