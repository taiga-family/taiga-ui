/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/// <amd-module name="@angular/compiler-cli/ngcc/src/execution/cluster/worker" />
import { Logger } from '../../logging/logger';
import { CreateCompileFn } from '../api';
export declare function startWorker(logger: Logger, createCompileFn: CreateCompileFn): Promise<void>;
