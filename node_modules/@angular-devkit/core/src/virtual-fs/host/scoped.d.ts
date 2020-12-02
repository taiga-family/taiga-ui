/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Path } from '../path';
import { Host } from './interface';
import { ResolverHost } from './resolver';
export declare class ScopedHost<T extends object> extends ResolverHost<T> {
    protected _root: Path;
    constructor(delegate: Host<T>, _root?: Path);
    protected _resolve(path: Path): Path;
}
