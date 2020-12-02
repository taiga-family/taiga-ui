/// <amd-module name="@angular/compiler-cli/src/ngtsc/transform/src/utils" />
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import * as ts from 'typescript';
import { ImportManager } from '../../translator';
/**
 * Adds extra imports in the import manage for this source file, after the existing imports
 * and before the module body.
 * Can optionally add extra statements (e.g. new constants) before the body as well.
 */
export declare function addImports(importManager: ImportManager, sf: ts.SourceFile, extraStatements?: ts.Statement[]): ts.SourceFile;
