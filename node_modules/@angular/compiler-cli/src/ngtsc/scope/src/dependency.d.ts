/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/// <amd-module name="@angular/compiler-cli/src/ngtsc/scope/src/dependency" />
import { AliasingHost, Reference } from '../../imports';
import { MetadataReader } from '../../metadata';
import { ClassDeclaration } from '../../reflection';
import { ExportScope } from './api';
export interface DtsModuleScopeResolver {
    resolve(ref: Reference<ClassDeclaration>): ExportScope | null;
}
/**
 * Reads Angular metadata from classes declared in .d.ts files and computes an `ExportScope`.
 *
 * Given an NgModule declared in a .d.ts file, this resolver can produce a transitive `ExportScope`
 * of all of the directives/pipes it exports. It does this by reading metadata off of Ivy static
 * fields on directives, components, pipes, and NgModules.
 */
export declare class MetadataDtsModuleScopeResolver implements DtsModuleScopeResolver {
    private dtsMetaReader;
    private aliasingHost;
    /**
     * Cache which holds fully resolved scopes for NgModule classes from .d.ts files.
     */
    private cache;
    /**
     * @param dtsMetaReader a `MetadataReader` which can read metadata from `.d.ts` files.
     */
    constructor(dtsMetaReader: MetadataReader, aliasingHost: AliasingHost | null);
    /**
     * Resolve a `Reference`'d NgModule from a .d.ts file and produce a transitive `ExportScope`
     * listing the directives and pipes which that NgModule exports to others.
     *
     * This operation relies on a `Reference` instead of a direct TypeScrpt node as the `Reference`s
     * produced depend on how the original NgModule was imported.
     */
    resolve(ref: Reference<ClassDeclaration>): ExportScope | null;
    private maybeAlias;
}
