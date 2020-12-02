/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { TaskConfiguration, TaskConfigurationGenerator } from '../../src';
import { RepositoryInitializerTaskOptions } from './options';
export interface CommitOptions {
    message?: string;
    name?: string;
    email?: string;
}
export declare class RepositoryInitializerTask implements TaskConfigurationGenerator<RepositoryInitializerTaskOptions> {
    workingDirectory?: string | undefined;
    commitOptions?: CommitOptions | undefined;
    constructor(workingDirectory?: string | undefined, commitOptions?: CommitOptions | undefined);
    toConfiguration(): TaskConfiguration<RepositoryInitializerTaskOptions>;
}
