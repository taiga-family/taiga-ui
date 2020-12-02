import { WorkspaceDefinition } from './definitions';
import { WorkspaceHost } from './host';
/**
 * Supported workspace formats
 */
export declare enum WorkspaceFormat {
    JSON = 0
}
/**
 * @private
 */
export declare function _test_addWorkspaceFile(name: string, format: WorkspaceFormat): void;
/**
 * @private
 */
export declare function _test_removeWorkspaceFile(name: string): void;
/**
 * Reads and constructs a `WorkspaceDefinition`.  If the function is provided with a path to a
 * directory instead of a file, a search of the directory's files will commence to attempt to
 * locate a known workspace file.  Currently the following are considered known workspace files:
 * - `angular.json`
 * - `.angular.json`
 *
 * @param path The path to either a workspace file or a directory containing a workspace file.
 * @param host The `WorkspaceHost` to use to access the file and directory data.
 * @param format An optional `WorkspaceFormat` value. Used if the path specifies a non-standard
 * file name that would prevent automatically discovering the format.
 *
 *
 * @return An `Promise` of the read result object with the `WorkspaceDefinition` contained within
 * the `workspace` property.
 */
export declare function readWorkspace(path: string, host: WorkspaceHost, format?: WorkspaceFormat): Promise<{
    workspace: WorkspaceDefinition;
}>;
/**
 * Writes a `WorkspaceDefinition` to the underlying storage via the provided `WorkspaceHost`.
 * If the `WorkspaceDefinition` was created via the `readWorkspace` function, metadata will be
 * used to determine the path and format of the Workspace.  In all other cases, the `path` and
 * `format` options must be specified as they would be otherwise unknown.
 *
 * @param workspace The `WorkspaceDefinition` that will be written.
 * @param host The `WorkspaceHost` to use to access/write the file and directory data.
 * @param path The path to a file location for the output. Required if `readWorkspace` was not
 * used to create the `WorkspaceDefinition`.  Optional otherwise; will override the
 * `WorkspaceDefinition` metadata if provided.
 * @param format The `WorkspaceFormat` to use for output. Required if `readWorkspace` was not
 * used to create the `WorkspaceDefinition`.  Optional otherwise; will override the
 * `WorkspaceDefinition` metadata if provided.
 *
 *
 * @return An `Promise` of type `void`.
 */
export declare function writeWorkspace(workspace: WorkspaceDefinition, host: WorkspaceHost, path?: string, format?: WorkspaceFormat): Promise<void>;
