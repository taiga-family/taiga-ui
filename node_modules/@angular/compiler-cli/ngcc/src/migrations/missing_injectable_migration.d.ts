/// <amd-module name="@angular/compiler-cli/ngcc/src/migrations/missing_injectable_migration" />
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import * as ts from 'typescript';
import { ClassDeclaration, Decorator } from '../../../src/ngtsc/reflection';
import { Migration, MigrationHost } from './migration';
/**
 * Ensures that classes that are provided as an Angular service in either `NgModule.providers` or
 * `Directive.providers`/`Component.viewProviders` are decorated with one of the `@Injectable`,
 * `@Directive`, `@Component` or `@Pipe` decorators, adding an `@Injectable()` decorator when none
 * are present.
 *
 * At least one decorator is now mandatory, as otherwise the compiler would not compile an
 * injectable definition for the service. This is unlike View Engine, where having just an unrelated
 * decorator may have been sufficient for the service to become injectable.
 *
 * In essence, this migration operates on classes that are themselves an NgModule, Directive or
 * Component. Their metadata is statically evaluated so that their "providers"/"viewProviders"
 * properties can be analyzed. For any provider that refers to an undecorated class, the class will
 * be migrated to have an `@Injectable()` decorator.
 *
 * This implementation mirrors the "missing-injectable" schematic.
 */
export declare class MissingInjectableMigration implements Migration {
    apply(clazz: ClassDeclaration, host: MigrationHost): ts.Diagnostic | null;
}
/**
 * Determines the original name of a decorator if it is from '@angular/core'. For other decorators,
 * null is returned.
 */
export declare function getAngularCoreDecoratorName(decorator: Decorator): string | null;
