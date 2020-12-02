/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/// <amd-module name="@angular/compiler-cli/src/ngtsc/metadata/src/util" />
import * as ts from 'typescript';
import { Reference } from '../../imports';
import { ClassDeclaration, ReflectionHost } from '../../reflection';
import { DirectiveMeta, MetadataReader, NgModuleMeta, PipeMeta, TemplateGuardMeta } from './api';
export declare function extractReferencesFromType(checker: ts.TypeChecker, def: ts.TypeNode, ngModuleImportedFrom: string | null, resolutionContext: string): Reference<ClassDeclaration>[];
export declare function readStringType(type: ts.TypeNode): string | null;
export declare function readStringMapType(type: ts.TypeNode): {
    [key: string]: string;
};
export declare function readStringArrayType(type: ts.TypeNode): string[];
export declare function extractDirectiveGuards(node: ClassDeclaration, reflector: ReflectionHost): {
    ngTemplateGuards: TemplateGuardMeta[];
    hasNgTemplateContextGuard: boolean;
    coercedInputFields: Set<string>;
};
/**
 * A `MetadataReader` that reads from an ordered set of child readers until it obtains the requested
 * metadata.
 *
 * This is used to combine `MetadataReader`s that read from different sources (e.g. from a registry
 * and from .d.ts files).
 */
export declare class CompoundMetadataReader implements MetadataReader {
    private readers;
    constructor(readers: MetadataReader[]);
    getDirectiveMetadata(node: Reference<ClassDeclaration<ts.Declaration>>): DirectiveMeta | null;
    getNgModuleMetadata(node: Reference<ClassDeclaration<ts.Declaration>>): NgModuleMeta | null;
    getPipeMetadata(node: Reference<ClassDeclaration<ts.Declaration>>): PipeMeta | null;
}
/** Returns whether a class declaration has the necessary class fields to make it injectable. */
export declare function hasInjectableFields(clazz: ClassDeclaration, host: ReflectionHost): boolean;
