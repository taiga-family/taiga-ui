/// <amd-module name="@angular/compiler-cli/ngcc/src/packages/entry_point_manifest" />
import { AbsoluteFsPath, FileSystem, PathSegment } from '../../../src/ngtsc/file_system';
import { EntryPointWithDependencies } from '../dependencies/dependency_host';
import { Logger } from '../logging/logger';
import { NgccConfiguration } from './configuration';
/**
 * Manages reading and writing a manifest file that contains a list of all the entry-points that
 * were found below a given basePath.
 *
 * This is a super-set of the entry-points that are actually processed for a given run of ngcc,
 * since some may already be processed, or excluded if they do not have the required format.
 */
export declare class EntryPointManifest {
    private fs;
    private config;
    private logger;
    constructor(fs: FileSystem, config: NgccConfiguration, logger: Logger);
    /**
     * Try to get the entry-point info from a manifest file for the given `basePath` if it exists and
     * is not out of date.
     *
     * Reasons for the manifest to be out of date are:
     *
     * * the file does not exist
     * * the ngcc version has changed
     * * the package lock-file (i.e. yarn.lock or package-lock.json) has changed
     * * the project configuration has changed
     * * one or more entry-points in the manifest are not valid
     *
     * @param basePath The path that would contain the entry-points and the manifest file.
     * @returns an array of entry-point information for all entry-points found below the given
     * `basePath` or `null` if the manifest was out of date.
     */
    readEntryPointsUsingManifest(basePath: AbsoluteFsPath): EntryPointWithDependencies[] | null;
    /**
     * Write a manifest file at the given `basePath`.
     *
     * The manifest includes the current ngcc version and hashes of the package lock-file and current
     * project config. These will be used to check whether the manifest file is out of date. See
     * `readEntryPointsUsingManifest()`.
     *
     * @param basePath The path where the manifest file is to be written.
     * @param entryPoints A collection of entry-points to record in the manifest.
     */
    writeEntryPointManifest(basePath: AbsoluteFsPath, entryPoints: EntryPointWithDependencies[]): void;
    private getEntryPointManifestPath;
    private computeLockFileHash;
}
/**
 * A specialized implementation of the `EntryPointManifest` that can be used to invalidate the
 * current manifest file.
 *
 * It always returns `null` from the `readEntryPointsUsingManifest()` method, which forces a new
 * manifest to be created, which will overwrite the current file when `writeEntryPointManifest()`
 * is called.
 */
export declare class InvalidatingEntryPointManifest extends EntryPointManifest {
    readEntryPointsUsingManifest(_basePath: AbsoluteFsPath): EntryPointWithDependencies[] | null;
}
export declare type EntryPointPaths = [string, string, Array<AbsoluteFsPath>?, Array<AbsoluteFsPath | PathSegment>?, Array<AbsoluteFsPath>?];
/**
 * The JSON format of the manifest file that is written to disk.
 */
export interface EntryPointManifestFile {
    ngccVersion: string;
    configFileHash: string;
    lockFileHash: string;
    entryPointPaths: EntryPointPaths[];
}
