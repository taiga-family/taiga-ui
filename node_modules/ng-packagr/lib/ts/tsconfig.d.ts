import * as ng from '@angular/compiler-cli';
import { EntryPointNode } from '../ng-package/nodes';
/**
 * Reads the default TypeScript configuration.
 */
export declare function readDefaultTsConfig(fileName?: string): ng.ParsedConfiguration;
/**
 * Creates a parsed TypeScript configuration object.
 *
 * @param values File path or parsed configuration.
 */
export declare function createDefaultTsConfig(values?: ng.ParsedConfiguration | string): ng.ParsedConfiguration;
/**
 * Initializes TypeScript Compiler options and Angular Compiler options by overriding the
 * default config with entry point-specific values.
 */
export declare const initializeTsConfig: (defaultTsConfig: ng.ParsedConfiguration, entryPoints: EntryPointNode[]) => void;
/**
 * Set the paths for entrypoint dependencies.
 *
 * This doesn't mutate the object.
 *
 * @param parsedTsConfig - A parsed tsconfig
 * @param entryPoints - A list of entryPoints
 * @param pointToSource Point the path mapping to either the source code or emitted declarations.
 * Typically for analysis one should point to the source files while for a compilation once should use the emitted declarations
 */
export declare function setDependenciesTsConfigPaths(parsedTsConfig: ng.ParsedConfiguration, entryPoints: EntryPointNode[], pointToSource?: boolean): ng.ParsedConfiguration;
