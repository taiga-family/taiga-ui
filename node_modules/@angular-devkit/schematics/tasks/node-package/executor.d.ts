/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { BaseException } from '@angular-devkit/core';
import { TaskExecutor } from '../../src';
import { NodePackageTaskFactoryOptions, NodePackageTaskOptions } from './options';
export declare class UnknownPackageManagerException extends BaseException {
    constructor(name: string);
}
export default function (factoryOptions?: NodePackageTaskFactoryOptions): TaskExecutor<NodePackageTaskOptions>;
