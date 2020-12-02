/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Observable } from 'rxjs';
import { Path, PathFragment } from '../path';
import { FileBuffer, Host, HostCapabilities, HostWatchOptions, ReadonlyHost, Stats } from './interface';
import { SimpleMemoryHost } from './memory';
export interface CordHostCreate {
    kind: 'create';
    path: Path;
    content: FileBuffer;
}
export interface CordHostOverwrite {
    kind: 'overwrite';
    path: Path;
    content: FileBuffer;
}
export interface CordHostRename {
    kind: 'rename';
    from: Path;
    to: Path;
}
export interface CordHostDelete {
    kind: 'delete';
    path: Path;
}
export declare type CordHostRecord = CordHostCreate | CordHostOverwrite | CordHostRename | CordHostDelete;
/**
 * A Host that records changes to the underlying Host, while keeping a record of Create, Overwrite,
 * Rename and Delete of files.
 *
 * This is fully compatible with Host, but will keep a staging of every changes asked. That staging
 * follows the principle of the Tree (e.g. can create a file that already exists).
 *
 * Using `create()` and `overwrite()` will force those operations, but using `write` will add
 * the create/overwrite records IIF the files does/doesn't already exist.
 */
export declare class CordHost extends SimpleMemoryHost {
    protected _back: ReadonlyHost;
    protected _filesToCreate: Set<Path>;
    protected _filesToRename: Map<Path, Path>;
    protected _filesToRenameRevert: Map<Path, Path>;
    protected _filesToDelete: Set<Path>;
    protected _filesToOverwrite: Set<Path>;
    constructor(_back: ReadonlyHost);
    get backend(): ReadonlyHost;
    get capabilities(): HostCapabilities;
    /**
     * Create a copy of this host, including all actions made.
     * @returns {CordHost} The carbon copy.
     */
    clone(): CordHost;
    /**
     * Commit the changes recorded to a Host. It is assumed that the host does have the same structure
     * as the host that was used for backend (could be the same host).
     * @param host The host to create/delete/rename/overwrite files to.
     * @param force Whether to skip existence checks when creating/overwriting. This is
     *   faster but might lead to incorrect states. Because Hosts natively don't support creation
     *   versus overwriting (it's only writing), we check for existence before completing a request.
     * @returns An observable that completes when done, or error if an error occured.
     */
    commit(host: Host, force?: boolean): Observable<void>;
    records(): CordHostRecord[];
    /**
     * Specialized version of {@link CordHost#write} which forces the creation of a file whether it
     * exists or not.
     * @param {} path
     * @param {FileBuffer} content
     * @returns {Observable<void>}
     */
    create(path: Path, content: FileBuffer): Observable<void>;
    overwrite(path: Path, content: FileBuffer): Observable<void>;
    write(path: Path, content: FileBuffer): Observable<void>;
    read(path: Path): Observable<FileBuffer>;
    delete(path: Path): Observable<void>;
    rename(from: Path, to: Path): Observable<void>;
    list(path: Path): Observable<PathFragment[]>;
    exists(path: Path): Observable<boolean>;
    isDirectory(path: Path): Observable<boolean>;
    isFile(path: Path): Observable<boolean>;
    stat(path: Path): Observable<Stats | null> | null;
    watch(path: Path, options?: HostWatchOptions): null;
    willCreate(path: Path): boolean;
    willOverwrite(path: Path): boolean;
    willDelete(path: Path): boolean;
    willRename(path: Path): boolean;
    willRenameTo(path: Path, to: Path): boolean;
}
