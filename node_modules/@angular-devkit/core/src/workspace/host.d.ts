/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { virtualFs } from '../virtual-fs';
export interface WorkspaceHost {
    readFile(path: string): Promise<string>;
    writeFile(path: string, data: string): Promise<void>;
    isDirectory(path: string): Promise<boolean>;
    isFile(path: string): Promise<boolean>;
}
export declare function createWorkspaceHost(host: virtualFs.Host): WorkspaceHost;
