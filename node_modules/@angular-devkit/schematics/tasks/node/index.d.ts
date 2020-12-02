/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { TaskExecutorFactory } from '../../src';
import { NodePackageTaskFactoryOptions } from '../node-package/options';
import { RepositoryInitializerTaskFactoryOptions } from '../repo-init/options';
export declare class BuiltinTaskExecutor {
    static readonly NodePackage: TaskExecutorFactory<NodePackageTaskFactoryOptions>;
    static readonly RepositoryInitializer: TaskExecutorFactory<RepositoryInitializerTaskFactoryOptions>;
    static readonly RunSchematic: TaskExecutorFactory<{}>;
    static readonly TslintFix: TaskExecutorFactory<{}>;
}
