import { NgPackageConfig } from '../../../ng-package.schema';
import { CssUrl } from '../../styles/stylesheet-processor';
/** A list of output absolute paths for various formats */
export interface DestinationFiles {
    /** Absolute path of this entry point `declarations` */
    declarations: string;
    /** Absolute path of this entry point `metadata` */
    metadata: string;
    /** Absolute path of this entry point `FESM5` module */
    fesm5: string;
    /** Absolute path of this entry point `FESM5` module */
    fesm2015: string;
    /** Absolute path of this entry point `ESM5` module */
    esm5: string;
    /** Absolute path of this entry point `ESM2015` module */
    esm2015: string;
    /** Absolute path of this entry point `UMD` bundle */
    umd: string;
    /** Absolute path of this entry point `UMD` Minifief bundle */
    umdMinified: string;
}
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
export declare class NgEntryPoint {
    /** Values from the `package.json` file of this entry point. */
    readonly packageJson: any;
    /** Values from either the `ngPackage` option (from `package.json`) or values from `ng-package.json`. */
    readonly ngPackageJson: NgPackageConfig;
    /** Absolute directory path of this entry point's `package.json` location. */
    readonly basePath: string;
    /** XX: additional auto-configured data passed for scondary entry point's. Needs better docs. */
    private readonly secondaryData?;
    constructor(
    /** Values from the `package.json` file of this entry point. */
    packageJson: any, 
    /** Values from either the `ngPackage` option (from `package.json`) or values from `ng-package.json`. */
    ngPackageJson: NgPackageConfig, 
    /** Absolute directory path of this entry point's `package.json` location. */
    basePath: string, 
    /** XX: additional auto-configured data passed for scondary entry point's. Needs better docs. */
    secondaryData?: {
        [key: string]: any;
    });
    /** Absolute file path of the entry point's source code entry file. */
    get entryFilePath(): string;
    /** Whether or not the entrypoint is secondary */
    get isSecondaryEntryPoint(): boolean;
    /** Absolute directory path of this entry point's 'package.json'. */
    get destinationPath(): string;
    get destinationFiles(): DestinationFiles;
    $get(key: string): any;
    get entryFile(): string;
    get cssUrl(): CssUrl;
    get umdModuleIds(): {
        [key: string]: string;
    };
    get jsxConfig(): string;
    get flatModuleFile(): string;
    get styleIncludePaths(): string[];
    get languageLevel(): string[];
    /**
     * The module ID is an "identifier of a module used in the import statements, e.g.
     * '@angular/core'. The ID often maps directly to a path on the filesystem, but this
     * is not always the case due to various module resolution strategies."
     */
    get moduleId(): string;
    /**
     * The UMD module ID registers a module on the old-fashioned JavaScript global scope.
     * Used by UMD bundles only.
     * Example: `@my/foo/bar` registers as `global['my']['foo']['bar']`.
     */
    get umdId(): string;
    /**
     * The AMD ID reflects a named module that is distributed in the UMD bundles.
     * @link http://requirejs.org/docs/whyamd.html#namedmodules
     */
    get amdId(): string;
    private flattenModuleId;
    /**
     * Enables the `"sideEffects": false` flag in `package.json`.
     * The flag is enabled and set to `false` by default which results in more aggressive optimizations applied by webpack v4 builds consuming the library.
     * To override the default behaviour, you need to set `"sideEffects": true` explicitly in your `package.json`.
     *
     * @link https://github.com/webpack/webpack/tree/master/examples/side-effects
     */
    get sideEffects(): boolean | string[];
}
