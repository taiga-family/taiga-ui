/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { NodeContext } from './preboot.interfaces';
/**
 * Attempt to generate key from node position in the DOM
 */
export declare function getNodeKeyForPreboot(nodeContext: NodeContext): string;
