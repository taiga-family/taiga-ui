/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/// <amd-module name="@angular/cdk/schematics/ng-update/migrations/class-names" />
import * as ts from 'typescript';
import { Migration } from '../../update-tool/migration';
import { ClassNameUpgradeData } from '../data';
import { UpgradeData } from '../upgrade-data';
/**
 * Migration that walks through every identifier that is part of Angular Material or thr CDK
 * and replaces the outdated name with the new one if specified in the upgrade data.
 */
export declare class ClassNamesMigration extends Migration<UpgradeData> {
    /** Change data that upgrades to the specified target version. */
    data: ClassNameUpgradeData[];
    /**
     * List of identifier names that have been imported from `@angular/material` or `@angular/cdk`
     * in the current source file and therefore can be considered trusted.
     */
    trustedIdentifiers: Set<string>;
    /** List of namespaces that have been imported from `@angular/material` or `@angular/cdk`. */
    trustedNamespaces: Set<string>;
    enabled: boolean;
    visitNode(node: ts.Node): void;
    /** Method that is called for every identifier inside of the specified project. */
    private _visitIdentifier;
    /** Creates a failure and replacement for the specified identifier. */
    private _createFailureWithReplacement;
}
