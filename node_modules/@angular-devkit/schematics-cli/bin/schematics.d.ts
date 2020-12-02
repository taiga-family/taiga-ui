#!/usr/bin/env node
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import 'symbol-observable';
import { ProcessOutput } from '@angular-devkit/core/node';
export interface MainOptions {
    args: string[];
    stdout?: ProcessOutput;
    stderr?: ProcessOutput;
}
export declare function main({ args, stdout, stderr, }: MainOptions): Promise<0 | 1>;
