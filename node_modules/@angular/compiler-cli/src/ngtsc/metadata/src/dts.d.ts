/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/// <amd-module name="@angular/compiler-cli/src/ngtsc/metadata/src/dts" />
import * as ts from 'typescript';
import { Reference } from '../../imports';
import { ClassDeclaration, ReflectionHost } from '../../reflection';
import { DirectiveMeta, MetadataReader, NgModuleMeta, PipeMeta } from './api';
/**
 * A `MetadataReader` that can read metadata from `.d.ts` files, which have static Ivy properties
 * from an upstream compilation already.
 */
export declare class DtsMetadataReader implements MetadataReader {
    private checker;
    private reflector;
    constructor(checker: ts.TypeChecker, reflector: ReflectionHost);
    /**
     * Read the metadata from a class that has already been compiled somehow (either it's in a .d.ts
     * file, or in a .ts file with a handwritten definition).
     *
     * @param ref `Reference` to the class of interest, with the context of how it was obtained.
     */
    getNgModuleMetadata(ref: Reference<ClassDeclaration>): NgModuleMeta | null;
    /**
     * Read directive (or component) metadata from a referenced class in a .d.ts file.
     */
    getDirectiveMetadata(ref: Reference<ClassDeclaration>): DirectiveMeta | null;
    /**
     * Read pipe metadata from a referenced class in a .d.ts file.
     */
    getPipeMetadata(ref: Reference<ClassDeclaration>): PipeMeta | null;
}
