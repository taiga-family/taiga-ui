/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { TaskConfiguration, TaskConfigurationGenerator } from '../../src';
import { NodePackageTaskOptions } from './options';
export declare class NodePackageInstallTaskOptions {
    packageManager: string;
    packageName: string;
    workingDirectory: string;
    quiet: boolean;
    hideOutput: boolean;
}
export declare class NodePackageInstallTask implements TaskConfigurationGenerator<NodePackageTaskOptions> {
    quiet: boolean;
    hideOutput: boolean;
    workingDirectory?: string;
    packageManager?: string;
    packageName?: string;
    constructor(workingDirectory?: string);
    constructor(options: Partial<NodePackageInstallTaskOptions>);
    toConfiguration(): TaskConfiguration<NodePackageTaskOptions>;
}
