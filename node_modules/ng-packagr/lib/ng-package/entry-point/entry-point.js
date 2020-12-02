"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
/**
 * An entry point - quoting Angular Package Format - is:
 *
 * > a module intended to be imported by the user. It is referenced by a unique module ID and
 * > exports the public API referenced by that module ID. An example is `@angular/core` or
 * > `@angular/core/testing`. Both entry points exist in the `@angular/core` package, but they
 * > export different symbols. A package can have many entry points.
 *
 * #### Public API, source file tree and build output
 *
 * An entry point serves as the root of a source tree.
 * The entry point's public API references one TypeScript source file (`*.ts`).
 * That source file, e.g. `public_api.ts`, references other source files who in turn may reference
 * other source files, thus creating a tree of source code files.
 * The source files may be TypeScript (`*.ts`), Templates (`.html`) or Stylesheets
 * (`.css`, `.scss`, ..), or other formats.
 *
 * The compilation process for an entry point is a series of transformations applied to the source
 * files, e.g. TypeScript compilation, Inlining of Stylesheets and Templates, and so on.
 * As a result of the compilation process, an entry point is transpiled to a set of artefacts
 * (the build output) which include a FESM'15 Bundle, a FESM'5 Bundle, AoT metadata, TypeScript
 * type definitions, and so on.
 *
 * #### Representation in the domain
 *
 * The set of artefacts is reflected by `NgArtefacts`;
 * one `NgEntryPoint` relates to one `NgArtefacts`.
 * The parent package of an entry point is reflected by `NgPackage`.
 */
class NgEntryPoint {
    constructor(
    /** Values from the `package.json` file of this entry point. */
    packageJson, 
    /** Values from either the `ngPackage` option (from `package.json`) or values from `ng-package.json`. */
    ngPackageJson, 
    /** Absolute directory path of this entry point's `package.json` location. */
    basePath, 
    /** XX: additional auto-configured data passed for scondary entry point's. Needs better docs. */
    secondaryData) {
        this.packageJson = packageJson;
        this.ngPackageJson = ngPackageJson;
        this.basePath = basePath;
        this.secondaryData = secondaryData;
    }
    /** Absolute file path of the entry point's source code entry file. */
    get entryFilePath() {
        return path.resolve(this.basePath, this.entryFile);
    }
    /** Whether or not the entrypoint is secondary */
    get isSecondaryEntryPoint() {
        return !!this.secondaryData;
    }
    /** Absolute directory path of this entry point's 'package.json'. */
    get destinationPath() {
        if (this.secondaryData) {
            return this.secondaryData.destinationPath;
        }
        else {
            return path.resolve(this.basePath, this.$get('dest'));
        }
    }
    get destinationFiles() {
        let primaryDestPath = this.destinationPath;
        let secondaryDir = '';
        if (this.secondaryData) {
            primaryDestPath = this.secondaryData.primaryDestinationPath;
            secondaryDir = path.relative(primaryDestPath, this.secondaryData.destinationPath);
        }
        const flatModuleFile = this.flatModuleFile;
        const pathJoinWithDest = (...paths) => path.join(primaryDestPath, ...paths);
        return {
            metadata: pathJoinWithDest(secondaryDir, `${flatModuleFile}.metadata.json`),
            declarations: pathJoinWithDest(secondaryDir, `${flatModuleFile}.d.ts`),
            esm2015: pathJoinWithDest('esm2015', secondaryDir, `${flatModuleFile}.js`),
            esm5: pathJoinWithDest('esm5', secondaryDir, `${flatModuleFile}.js`),
            fesm2015: pathJoinWithDest('fesm2015', `${flatModuleFile}.js`),
            fesm5: pathJoinWithDest('fesm5', `${flatModuleFile}.js`),
            umd: pathJoinWithDest('bundles', `${flatModuleFile}.umd.js`),
            umdMinified: pathJoinWithDest('bundles', `${flatModuleFile}.umd.min.js`),
        };
    }
    $get(key) {
        const parts = key.split('.');
        let value = this.ngPackageJson;
        for (const key of parts) {
            if (typeof value === 'object' && value.hasOwnProperty(key)) {
                value = value[key];
            }
            else {
                return undefined;
            }
        }
        return value;
    }
    get entryFile() {
        return this.$get('lib.entryFile');
    }
    get cssUrl() {
        return this.$get('lib.cssUrl');
    }
    get umdModuleIds() {
        return this.$get('lib.umdModuleIds');
    }
    get jsxConfig() {
        return this.$get('lib.jsx');
    }
    get flatModuleFile() {
        return this.$get('lib.flatModuleFile') || this.flattenModuleId('-');
    }
    get styleIncludePaths() {
        const includePaths = this.$get('lib.styleIncludePaths') || [];
        return includePaths.map(includePath => path.isAbsolute(includePath) ? includePath : path.resolve(this.basePath, includePath));
    }
    get languageLevel() {
        return this.$get('lib.languageLevel');
    }
    /**
     * The module ID is an "identifier of a module used in the import statements, e.g.
     * '@angular/core'. The ID often maps directly to a path on the filesystem, but this
     * is not always the case due to various module resolution strategies."
     */
    get moduleId() {
        if (this.secondaryData) {
            return this.secondaryData.moduleId;
        }
        else {
            return this.packageJson['name'];
        }
    }
    /**
     * The UMD module ID registers a module on the old-fashioned JavaScript global scope.
     * Used by UMD bundles only.
     * Example: `@my/foo/bar` registers as `global['my']['foo']['bar']`.
     */
    get umdId() {
        return this.$get('lib.umdId') || this.flattenModuleId();
    }
    /**
     * The AMD ID reflects a named module that is distributed in the UMD bundles.
     * @link http://requirejs.org/docs/whyamd.html#namedmodules
     */
    get amdId() {
        return this.$get('lib.amdId') || this.moduleId;
    }
    flattenModuleId(separator = '.') {
        if (this.moduleId.startsWith('@')) {
            return this.moduleId
                .substring(1)
                .split('/')
                .join(separator);
        }
        else {
            return this.moduleId.split('/').join(separator);
        }
    }
    /**
     * Enables the `"sideEffects": false` flag in `package.json`.
     * The flag is enabled and set to `false` by default which results in more aggressive optimizations applied by webpack v4 builds consuming the library.
     * To override the default behaviour, you need to set `"sideEffects": true` explicitly in your `package.json`.
     *
     * @link https://github.com/webpack/webpack/tree/master/examples/side-effects
     */
    get sideEffects() {
        return this.packageJson['sideEffects'] || false;
    }
}
exports.NgEntryPoint = NgEntryPoint;
//# sourceMappingURL=entry-point.js.map