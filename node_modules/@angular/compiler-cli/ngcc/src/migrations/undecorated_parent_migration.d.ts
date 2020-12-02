/// <amd-module name="@angular/compiler-cli/ngcc/src/migrations/undecorated_parent_migration" />
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import * as ts from 'typescript';
import { ClassDeclaration } from '../../../src/ngtsc/reflection';
import { Migration, MigrationHost } from './migration';
/**
 * Ensure that the parents of directives and components that have no constructor are also decorated
 * as a `Directive`.
 *
 * Example:
 *
 * ```
 * export class BasePlain {
 *   constructor(private vcr: ViewContainerRef) {}
 * }
 *
 * @Directive({selector: '[blah]'})
 * export class DerivedDir extends BasePlain {}
 * ```
 *
 * When compiling `DerivedDir` which extends the undecorated `BasePlain` class, the compiler needs
 * to generate a directive def (`ɵdir`) for `DerivedDir`. In particular, it needs to generate a
 * factory function that creates instances of `DerivedDir`.
 *
 * As `DerivedDir` has no constructor, the factory function for `DerivedDir` must delegate to the
 * factory function for `BasePlain`. But for this to work, `BasePlain` must have a factory function,
 * itself.
 *
 * This migration adds a `Directive` decorator to such undecorated parent classes, to ensure that
 * the compiler will create the necessary factory function.
 *
 * The resulting code looks like:
 *
 * ```
 * @Directive()
 * export class BasePlain {
 *   constructor(private vcr: ViewContainerRef) {}
 * }
 *
 * @Directive({selector: '[blah]'})
 * export class DerivedDir extends BasePlain {}
 * ```
 */
export declare class UndecoratedParentMigration implements Migration {
    apply(clazz: ClassDeclaration, host: MigrationHost): ts.Diagnostic | null;
}
