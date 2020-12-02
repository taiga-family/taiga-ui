import { DependencyList } from './external-module-id-strategy';
export interface FlattenOpts {
    entryFile: string;
    destFile: string;
    flatModuleFile: string;
    /** ECMAScript module ID defined by the FESM bundles. */
    esmModuleId: string;
    /** UMD ID defined by the UMD bundle. */
    umdModuleId: string;
    /** Specifies the location where debugger should locate the sourcemaps  */
    sourceRoot: string;
    /** AMD ID defined in the UMD bundle. */
    amdId?: string;
    /** Map of external UMD module IDs (dependencies).  */
    umdModuleIds?: {
        [key: string]: string;
    };
    /** A list of external dependencies that will not be embedded in the bundle. */
    externals?: string[] | RegExp;
    /** List of dependency which are found in package.json */
    dependencyList: DependencyList;
}
export declare function flattenToFesm(opts: FlattenOpts): Promise<void>;
export declare function flattenToUmd(opts: FlattenOpts): Promise<void>;
export declare function flattenToUmdMin(entryFile: string, outputFile: string): Promise<string>;
