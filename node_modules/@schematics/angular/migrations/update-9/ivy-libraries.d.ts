/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Rule } from '@angular-devkit/schematics';
/**
 * Updates a pre version 9 library to version 9 Ivy library.
 *
 * The main things that this migrations does are:
 * - Creates a production configuration for VE compilations.
 * - Create a prod tsconfig for which disables Ivy and enables VE compilations.
 */
export declare function updateLibraries(): Rule;
