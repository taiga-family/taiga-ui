/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/// <amd-module name="@angular/compiler-cli/src/ngtsc/metadata/src/inheritance" />
import { Reference } from '../../imports';
import { DirectiveMeta, MetadataReader } from '../../metadata';
import { ClassDeclaration } from '../../reflection';
/**
 * Given a reference to a directive, return a flattened version of its `DirectiveMeta` metadata
 * which includes metadata from its entire inheritance chain.
 *
 * The returned `DirectiveMeta` will either have `baseClass: null` if the inheritance chain could be
 * fully resolved, or `baseClass: 'dynamic'` if the inheritance chain could not be completely
 * followed.
 */
export declare function flattenInheritedDirectiveMetadata(reader: MetadataReader, dir: Reference<ClassDeclaration>): DirectiveMeta;
