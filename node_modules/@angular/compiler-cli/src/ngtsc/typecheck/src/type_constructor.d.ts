/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/// <amd-module name="@angular/compiler-cli/src/ngtsc/typecheck/src/type_constructor" />
import * as ts from 'typescript';
import { ClassDeclaration, ReflectionHost } from '../../reflection';
import { TypeCtorMetadata } from './api';
export declare function generateTypeCtorDeclarationFn(node: ClassDeclaration<ts.ClassDeclaration>, meta: TypeCtorMetadata, nodeTypeRef: ts.EntityName, typeParams: ts.TypeParameterDeclaration[] | undefined, reflector: ReflectionHost): ts.Statement;
/**
 * Generate an inline type constructor for the given class and metadata.
 *
 * An inline type constructor is a specially shaped TypeScript static method, intended to be placed
 * within a directive class itself, that permits type inference of any generic type parameters of
 * the class from the types of expressions bound to inputs or outputs, and the types of elements
 * that match queries performed by the directive. It also catches any errors in the types of these
 * expressions. This method is never called at runtime, but is used in type-check blocks to
 * construct directive types.
 *
 * An inline type constructor for NgFor looks like:
 *
 * static ngTypeCtor<T>(init: Pick<NgForOf<T>, 'ngForOf'|'ngForTrackBy'|'ngForTemplate'>):
 *   NgForOf<T>;
 *
 * A typical constructor would be:
 *
 * NgForOf.ngTypeCtor(init: {
 *   ngForOf: ['foo', 'bar'],
 *   ngForTrackBy: null as any,
 *   ngForTemplate: null as any,
 * }); // Infers a type of NgForOf<string>.
 *
 * Any inputs declared on the type for which no property binding is present are assigned a value of
 * type `any`, to avoid producing any type errors for unset inputs.
 *
 * Inline type constructors are used when the type being created has bounded generic types which
 * make writing a declared type constructor (via `generateTypeCtorDeclarationFn`) difficult or
 * impossible.
 *
 * @param node the `ClassDeclaration<ts.ClassDeclaration>` for which a type constructor will be
 * generated.
 * @param meta additional metadata required to generate the type constructor.
 * @returns a `ts.MethodDeclaration` for the type constructor.
 */
export declare function generateInlineTypeCtor(node: ClassDeclaration<ts.ClassDeclaration>, meta: TypeCtorMetadata): ts.MethodDeclaration;
export declare function requiresInlineTypeCtor(node: ClassDeclaration<ts.ClassDeclaration>, host: ReflectionHost): boolean;
