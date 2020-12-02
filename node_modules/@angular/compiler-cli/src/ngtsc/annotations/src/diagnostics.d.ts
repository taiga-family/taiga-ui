/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/// <amd-module name="@angular/compiler-cli/src/ngtsc/annotations/src/diagnostics" />
import * as ts from 'typescript';
import { Reference } from '../../imports';
import { InjectableClassRegistry, MetadataReader } from '../../metadata';
import { PartialEvaluator } from '../../partial_evaluator';
import { ClassDeclaration, ReflectionHost } from '../../reflection';
import { LocalModuleScopeRegistry } from '../../scope';
/**
 * Gets the diagnostics for a set of provider classes.
 * @param providerClasses Classes that should be checked.
 * @param providersDeclaration Node that declares the providers array.
 * @param registry Registry that keeps track of the registered injectable classes.
 */
export declare function getProviderDiagnostics(providerClasses: Set<Reference<ClassDeclaration>>, providersDeclaration: ts.Expression, registry: InjectableClassRegistry): ts.Diagnostic[];
export declare function getDirectiveDiagnostics(node: ClassDeclaration, reader: MetadataReader, evaluator: PartialEvaluator, reflector: ReflectionHost, scopeRegistry: LocalModuleScopeRegistry, kind: string): ts.Diagnostic[] | null;
export declare function checkInheritanceOfDirective(node: ClassDeclaration, reader: MetadataReader, reflector: ReflectionHost, evaluator: PartialEvaluator): ts.Diagnostic | null;
