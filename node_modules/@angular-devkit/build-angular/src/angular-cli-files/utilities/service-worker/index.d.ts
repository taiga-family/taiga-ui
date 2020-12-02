/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Path, virtualFs } from '@angular-devkit/core';
export declare function augmentAppWithServiceWorker(host: virtualFs.Host, projectRoot: Path, appRoot: Path, outputPath: Path, baseHref: string, ngswConfigPath?: string): Promise<void>;
