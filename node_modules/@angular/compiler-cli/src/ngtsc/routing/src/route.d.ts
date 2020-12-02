/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/// <amd-module name="@angular/compiler-cli/src/ngtsc/routing/src/route" />
import * as ts from 'typescript';
import { ModuleResolver } from '../../imports';
export declare abstract class RouterEntryPoint {
    abstract readonly filePath: string;
    abstract readonly moduleName: string;
    abstract readonly name: string;
}
export declare class RouterEntryPointManager {
    private moduleResolver;
    private map;
    constructor(moduleResolver: ModuleResolver);
    resolveLoadChildrenIdentifier(loadChildrenIdentifier: string, context: ts.SourceFile): RouterEntryPoint | null;
    fromNgModule(sf: ts.SourceFile, moduleName: string): RouterEntryPoint;
}
export declare function entryPointKeyFor(filePath: string, moduleName: string): string;
