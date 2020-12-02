/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Compiler } from 'webpack';
import { Budget } from '../../browser/schema';
export interface BundleBudgetPluginOptions {
    budgets: Budget[];
}
export declare class BundleBudgetPlugin {
    private options;
    constructor(options: BundleBudgetPluginOptions);
    apply(compiler: Compiler): void;
    private runChecks;
}
