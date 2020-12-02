/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/// <amd-module name="@angular/compiler-cli/src/ngtsc/entry_point/src/reference_graph" />
import * as ts from 'typescript';
export declare class ReferenceGraph<T = ts.Declaration> {
    private references;
    add(from: T, to: T): void;
    transitiveReferencesOf(target: T): Set<T>;
    pathFrom(source: T, target: T): T[] | null;
    private collectPathFrom;
    private collectTransitiveReferences;
}
