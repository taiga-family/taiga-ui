/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { RawSourceMap } from 'source-map';
export interface Options {
    sideEffectFreeModules?: string[];
    angularCoreModules?: string[];
}
export default function optimizer(options: Options): {
    name: string;
    transform: (content: string, id: string) => {
        code: string;
        map: RawSourceMap;
    } | null;
};
