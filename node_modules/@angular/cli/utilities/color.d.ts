/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import * as ansiColors from 'ansi-colors';
export declare const supportsColor: boolean;
export declare function removeColor(text: string): string;
declare const colors: typeof ansiColors;
export { colors };
