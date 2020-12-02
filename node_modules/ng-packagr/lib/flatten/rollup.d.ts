import * as rollup from 'rollup';
import { DependencyList } from './external-module-id-strategy';
import { TransformHook } from 'rollup';
/**
 * Options used in `ng-packagr` for writing flat bundle files.
 *
 * These options are passed through to rollup.
 */
export interface RollupOptions {
    moduleName: string;
    entry: string;
    format: rollup.ModuleFormat;
    dest: string;
    sourceRoot: string;
    umdModuleIds?: {
        [key: string]: string;
    };
    amd?: {
        id: string;
    };
    transform?: TransformHook;
    dependencyList?: DependencyList;
}
/** Runs rollup over the given entry file, writes a bundle file. */
export declare function rollupBundleFile(opts: RollupOptions): Promise<void>;
