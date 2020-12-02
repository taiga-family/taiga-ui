/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { TaskConfiguration, TaskConfigurationGenerator } from '../../src';
import { NodePackageTaskOptions } from './options';
export declare class NodePackageLinkTask implements TaskConfigurationGenerator<NodePackageTaskOptions> {
    packageName?: string | undefined;
    workingDirectory?: string | undefined;
    quiet: boolean;
    constructor(packageName?: string | undefined, workingDirectory?: string | undefined);
    toConfiguration(): TaskConfiguration<NodePackageTaskOptions>;
}
