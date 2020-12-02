/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import * as webpack from 'webpack';
import { ProcessBundleResult } from '../../../src/utils/process-bundle';
import { Budget } from '../../browser/schema';
interface Threshold {
    limit: number;
    type: ThresholdType;
    severity: ThresholdSeverity;
}
declare enum ThresholdType {
    Max = "maximum",
    Min = "minimum"
}
export declare enum ThresholdSeverity {
    Warning = "warning",
    Error = "error"
}
export declare function calculateThresholds(budget: Budget): IterableIterator<Threshold>;
export declare function checkBudgets(budgets: Budget[], webpackStats: webpack.Stats.ToJsonOutput, processResults: ProcessBundleResult[]): IterableIterator<{
    severity: ThresholdSeverity;
    message: string;
}>;
export declare function checkThresholds(thresholds: IterableIterator<Threshold>, size: number, label?: string): IterableIterator<{
    severity: ThresholdSeverity;
    message: string;
}>;
export {};
