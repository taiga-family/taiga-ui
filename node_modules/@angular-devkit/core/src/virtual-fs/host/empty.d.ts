/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Observable } from 'rxjs';
import { Path, PathFragment } from '../path';
import { FileBuffer, HostCapabilities, ReadonlyHost, Stats } from './interface';
export declare class Empty implements ReadonlyHost {
    readonly capabilities: HostCapabilities;
    read(path: Path): Observable<FileBuffer>;
    list(path: Path): Observable<PathFragment[]>;
    exists(path: Path): Observable<boolean>;
    isDirectory(path: Path): Observable<boolean>;
    isFile(path: Path): Observable<boolean>;
    stat(path: Path): Observable<Stats<{}> | null>;
}
