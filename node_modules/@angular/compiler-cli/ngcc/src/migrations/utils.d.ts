/// <amd-module name="@angular/compiler-cli/ngcc/src/migrations/utils" />
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import * as ts from 'typescript';
import { ClassDeclaration, Decorator } from '../../../src/ngtsc/reflection';
import { MigrationHost } from './migration';
export declare function isClassDeclaration(clazz: ts.Declaration): clazz is ClassDeclaration;
/**
 * Returns true if the `clazz` is decorated as a `Directive` or `Component`.
 */
export declare function hasDirectiveDecorator(host: MigrationHost, clazz: ClassDeclaration): boolean;
/**
 * Returns true if the `clazz` is decorated as a `Pipe`.
 */
export declare function hasPipeDecorator(host: MigrationHost, clazz: ClassDeclaration): boolean;
/**
 * Returns true if the `clazz` has its own constructor function.
 */
export declare function hasConstructor(host: MigrationHost, clazz: ClassDeclaration): boolean;
/**
 * Create an empty `Directive` decorator that will be associated with the `clazz`.
 */
export declare function createDirectiveDecorator(clazz: ClassDeclaration, metadata?: {
    selector: string | null;
    exportAs: string[] | null;
}): Decorator;
/**
 * Create an empty `Component` decorator that will be associated with the `clazz`.
 */
export declare function createComponentDecorator(clazz: ClassDeclaration, metadata: {
    selector: string | null;
    exportAs: string[] | null;
}): Decorator;
/**
 * Create an empty `Injectable` decorator that will be associated with the `clazz`.
 */
export declare function createInjectableDecorator(clazz: ClassDeclaration): Decorator;
