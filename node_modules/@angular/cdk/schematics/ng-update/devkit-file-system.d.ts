/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/// <amd-module name="@angular/cdk/schematics/ng-update/devkit-file-system" />
import { Tree, UpdateRecorder } from '@angular-devkit/schematics';
import { FileSystem } from '../update-tool/file-system';
/**
 * File system that leverages the virtual tree from the CLI devkit. This file
 * system is commonly used by `ng update` migrations that run as part of the
 * Angular CLI.
 */
export declare class DevkitFileSystem implements FileSystem {
    private _tree;
    private _workspaceFsPath;
    private _updateRecorderCache;
    constructor(_tree: Tree, _workspaceFsPath: string);
    resolve(fsFilePath: string): string;
    edit(fsFilePath: string): UpdateRecorder;
    commitEdits(): void;
    exists(fsFilePath: string): boolean;
    overwrite(fsFilePath: string, content: string): void;
    create(fsFilePath: string, content: string): void;
    delete(fsFilePath: string): void;
    read(fsFilePath: string): string | null;
}
