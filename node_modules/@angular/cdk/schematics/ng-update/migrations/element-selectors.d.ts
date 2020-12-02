/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/// <amd-module name="@angular/cdk/schematics/ng-update/migrations/element-selectors" />
import * as ts from 'typescript';
import { ResolvedResource } from '../../update-tool/component-resource-collector';
import { Migration } from '../../update-tool/migration';
import { UpgradeData } from '../upgrade-data';
/**
 * Migration that walks through every string literal, template and stylesheet in order
 * to migrate outdated element selectors to the new one.
 */
export declare class ElementSelectorsMigration extends Migration<UpgradeData> {
    /** Change data that upgrades to the specified target version. */
    data: any;
    enabled: any;
    visitNode(node: ts.Node): void;
    visitTemplate(template: ResolvedResource): void;
    visitStylesheet(stylesheet: ResolvedResource): void;
    private _visitStringLiteralLike;
    private _replaceSelector;
}
