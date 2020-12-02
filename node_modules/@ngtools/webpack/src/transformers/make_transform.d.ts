/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import * as ts from 'typescript';
import { StandardTransform } from './interfaces';
export declare function makeTransform(standardTransform: StandardTransform, getTypeChecker?: () => ts.TypeChecker): ts.TransformerFactory<ts.SourceFile>;
