/// <amd-module name="@angular/compiler-cli/ngcc/src/execution/analyze_entry_points" />
import { FileSystem } from '../../../src/ngtsc/file_system';
import { EntryPointFinder } from '../entry_point_finder/interface';
import { Logger } from '../logging/logger';
import { EntryPointJsonProperty } from '../packages/entry_point';
import { AnalyzeEntryPointsFn } from './api';
/**
 * Create the function for performing the analysis of the entry-points.
 */
export declare function getAnalyzeEntryPointsFn(logger: Logger, finder: EntryPointFinder, fileSystem: FileSystem, supportedPropertiesToConsider: EntryPointJsonProperty[], compileAllFormats: boolean, propertiesToConsider: string[], inParallel: boolean): AnalyzeEntryPointsFn;
