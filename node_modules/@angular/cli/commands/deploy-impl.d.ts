/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { ArchitectCommand, ArchitectCommandOptions } from '../models/architect-command';
import { Arguments } from '../models/interface';
import { Schema as DeployCommandSchema } from './deploy';
export declare class DeployCommand extends ArchitectCommand<DeployCommandSchema> {
    readonly target = "deploy";
    readonly missingTargetError = "\n\nCannot find \"deploy\" target for the specified project.\n\nYou should add a package that implements deployment capabilities for your\nfavorite platform.\n\nFor example:\n  ng add @angular/fire\n  ng add @azure/ng-deploy\n  ng add @zeit/ng-deploy\n\nFind more packages on npm https://www.npmjs.com/search?q=ng%20deploy\n";
    run(options: ArchitectCommandOptions & Arguments): Promise<number>;
    initialize(options: DeployCommandSchema & Arguments): Promise<void>;
    reportAnalytics(paths: string[], options: DeployCommandSchema & Arguments, dimensions?: (boolean | number | string)[], metrics?: (boolean | number | string)[]): Promise<void>;
}
