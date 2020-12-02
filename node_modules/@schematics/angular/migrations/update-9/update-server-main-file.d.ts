/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Rule } from '@angular-devkit/schematics';
/**
 * Update the `main.server.ts` file by adding exports to `renderModule` and `renderModuleFactory` which are
 * now required for Universal and App-Shell for Ivy and `bundleDependencies`.
 */
export declare function updateServerMainFile(): Rule;
