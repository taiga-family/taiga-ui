/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { logging } from '@angular-devkit/core';
import { PackageManager } from '../lib/config/schema';
import { NgAddSaveDepedency } from '../utilities/package-metadata';
export declare function installPackage(packageName: string, logger: logging.Logger, packageManager?: PackageManager, save?: Exclude<NgAddSaveDepedency, false>, extraArgs?: string[], cwd?: string): void;
export declare function installTempPackage(packageName: string, logger: logging.Logger, packageManager?: PackageManager, extraArgs?: string[]): string;
export declare function runTempPackageBin(packageName: string, logger: logging.Logger, packageManager?: PackageManager, args?: string[]): number;
