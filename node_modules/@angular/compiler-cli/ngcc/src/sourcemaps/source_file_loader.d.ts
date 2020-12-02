/// <amd-module name="@angular/compiler-cli/ngcc/src/sourcemaps/source_file_loader" />
import { AbsoluteFsPath, FileSystem } from '../../../src/ngtsc/file_system';
import { Logger } from '../logging/logger';
import { RawSourceMap } from './raw_source_map';
import { SourceFile } from './source_file';
/**
 * This class can be used to load a source file, its associated source map and any upstream sources.
 *
 * Since a source file might reference (or include) a source map, this class can load those too.
 * Since a source map might reference other source files, these are also loaded as needed.
 *
 * This is done recursively. The result is a "tree" of `SourceFile` objects, each containing
 * mappings to other `SourceFile` objects as necessary.
 */
export declare class SourceFileLoader {
    private fs;
    private logger;
    private currentPaths;
    constructor(fs: FileSystem, logger: Logger);
    /**
     * Load a source file, compute its source map, and recursively load any referenced source files.
     *
     * @param sourcePath The path to the source file to load.
     * @param contents The contents of the source file to load.
     * @param mapAndPath The raw source-map and the path to the source-map file.
     * @returns a SourceFile object created from the `contents` and provided source-map info.
     */
    loadSourceFile(sourcePath: AbsoluteFsPath, contents: string, mapAndPath: MapAndPath): SourceFile;
    /**
     * The overload used internally to load source files referenced in a source-map.
     *
     * In this case there is no guarantee that it will return a non-null SourceMap.
     *
     * @param sourcePath The path to the source file to load.
     * @param contents The contents of the source file to load, if provided inline.
     * If it is not known the contents will be read from the file at the `sourcePath`.
     * @param mapAndPath The raw source-map and the path to the source-map file.
     *
     * @returns a SourceFile if the content for one was provided or able to be loaded from disk,
     * `null` otherwise.
     */
    loadSourceFile(sourcePath: AbsoluteFsPath, contents?: string | null, mapAndPath?: null): SourceFile | null;
    /**
     * Find the source map associated with the source file whose `sourcePath` and `contents` are
     * provided.
     *
     * Source maps can be inline, as part of a base64 encoded comment, or external as a separate file
     * whose path is indicated in a comment or implied from the name of the source file itself.
     */
    private loadSourceMap;
    /**
     * Iterate over each of the "sources" for this source file's source map, recursively loading each
     * source file and its associated source map.
     */
    private processSources;
    /**
     * Load the contents of the source file from disk.
     *
     * @param sourcePath The path to the source file.
     */
    private readSourceFile;
    /**
     * Load the source map from the file at `mapPath`, parsing its JSON contents into a `RawSourceMap`
     * object.
     *
     * @param mapPath The path to the source-map file.
     */
    private readRawSourceMap;
    /**
     * Track source file paths if we have loaded them from disk so that we don't get into an infinite
     * recursion.
     */
    private trackPath;
}
/** A small helper structure that is returned from `loadSourceMap()`. */
interface MapAndPath {
    /** The path to the source map if it was external or `null` if it was inline. */
    mapPath: AbsoluteFsPath | null;
    /** The raw source map itself. */
    map: RawSourceMap;
}
export {};
