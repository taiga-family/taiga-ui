"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
/**
 * A package being built. Quoting Angular Package Format, a package is:
 *
 * > the smallest set of files that are published to NPM and installed together, for example
 * > `@angular/core`. (..) The package is installed with `npm install @angular/core`.
 *
 * #### Package and Entry Points
 *
 * A package is composed of several (one or more) entry points.
 * A package must contain at least the primary entry point but can have many secondary entry
 * points.
 * The module ID of the primary entry point, e.g. `@angular/core`, matches the package name, e.g.
 * the package name is given to the command `npm install @angular/core`.
 * The source code files within a package are referenced by the entry points.
 *
 * #### Representation in the domain
 *
 * A _Package_ is reflected by `NgPackage`.
 * An _Entry Point_ is reflected by `NgEntryPoint`.
 * One `NgPackage` relates to one (or many) `NgEentryPoint`,
 * one `NgEntryPoint` relates to one `NgPackage`.
 *
 * #### Watch Out
 *
 * The user's configuration `ngPackage` suggests that it reflects a `NgPackage`.
 * However, the values given in the `lib` property reflect an `NgEntryPoint`.
 * In case the package contains only one entry point, `ngPackage.lib` reflects the primary entry
 * point.
 *
 * @link https://docs.google.com/document/d/1CZC2rcpxffTDfRDs6p1cfbmKNLA6x5O-NtkJglDaBVs/edit#
 */
class NgPackage {
    constructor(basePath, 
    /**
     * A reference to the primary entry point.
     */
    primary, 
    /**
     * An array of seconary entry points.
     */
    secondaries = []) {
        this.basePath = basePath;
        this.primary = primary;
        this.secondaries = secondaries;
    }
    /** Absolute path of the package's source folder, derived from the user's (primary) package location. */
    get src() {
        return this.basePath;
    }
    /** Delete output path before build */
    get deleteDestPath() {
        return this.primary.$get('deleteDestPath');
    }
    /** Absolute path of the package's destination directory. */
    get dest() {
        return this.absolutePathFromPrimary('dest');
    }
    get keepLifecycleScripts() {
        return this.primary.$get('keepLifecycleScripts') === true;
    }
    get assets() {
        return this.primary.$get('assets');
    }
    get whitelistedNonPeerDependencies() {
        // XX: default array values from JSON schema not recognized
        const defValue = ['tslib'];
        const value = this.primary.$get('whitelistedNonPeerDependencies') || defValue;
        // Always append 'tslib' and dedupe
        return value.concat('tslib').filter((value, index, self) => self.indexOf(value) === index);
    }
    absolutePathFromPrimary(key) {
        return path.resolve(this.basePath, this.primary.$get(key));
    }
    entryPoint(moduleId) {
        return [this.primary, ...this.secondaries].find(entryPoint => entryPoint.moduleId === moduleId);
    }
}
exports.NgPackage = NgPackage;
//# sourceMappingURL=package.js.map