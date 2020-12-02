/// <amd-module name="@angular/compiler-cli/ngcc/src/writing/in_place_file_writer" />
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { AbsoluteFsPath, FileSystem } from '../../../src/ngtsc/file_system';
import { Logger } from '../logging/logger';
import { EntryPoint, EntryPointJsonProperty } from '../packages/entry_point';
import { EntryPointBundle } from '../packages/entry_point_bundle';
import { FileToWrite } from '../rendering/utils';
import { FileWriter } from './file_writer';
export declare const NGCC_BACKUP_EXTENSION = ".__ivy_ngcc_bak";
/**
 * This FileWriter overwrites the transformed file, in-place, while creating
 * a back-up of the original file with an extra `.__ivy_ngcc_bak` extension.
 */
export declare class InPlaceFileWriter implements FileWriter {
    protected fs: FileSystem;
    protected logger: Logger;
    protected errorOnFailedEntryPoint: boolean;
    constructor(fs: FileSystem, logger: Logger, errorOnFailedEntryPoint: boolean);
    writeBundle(_bundle: EntryPointBundle, transformedFiles: FileToWrite[], _formatProperties?: EntryPointJsonProperty[]): void;
    revertBundle(_entryPoint: EntryPoint, transformedFilePaths: AbsoluteFsPath[], _formatProperties: EntryPointJsonProperty[]): void;
    protected writeFileAndBackup(file: FileToWrite): void;
    protected revertFileAndBackup(filePath: AbsoluteFsPath): void;
}
