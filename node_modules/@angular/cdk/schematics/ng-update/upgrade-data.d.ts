/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/// <amd-module name="@angular/cdk/schematics/ng-update/upgrade-data" />
import { Migration } from '../update-tool/migration';
import { ValueOfChanges, VersionChanges } from '../update-tool/version-changes';
import { AttributeSelectorUpgradeData, ClassNameUpgradeData, ConstructorChecksUpgradeData, CssSelectorUpgradeData, ElementSelectorUpgradeData, InputNameUpgradeData, MethodCallUpgradeData, OutputNameUpgradeData, PropertyNameUpgradeData } from './data';
/** Upgrade data for the Angular CDK. */
export declare const cdkUpgradeData: UpgradeData;
/**
 * Interface that describes the upgrade data that needs to be defined when using the CDK
 * upgrade rules.
 */
export interface UpgradeData {
    attributeSelectors: VersionChanges<AttributeSelectorUpgradeData>;
    classNames: VersionChanges<ClassNameUpgradeData>;
    constructorChecks: VersionChanges<ConstructorChecksUpgradeData>;
    cssSelectors: VersionChanges<CssSelectorUpgradeData>;
    elementSelectors: VersionChanges<ElementSelectorUpgradeData>;
    inputNames: VersionChanges<InputNameUpgradeData>;
    methodCallChecks: VersionChanges<MethodCallUpgradeData>;
    outputNames: VersionChanges<OutputNameUpgradeData>;
    propertyNames: VersionChanges<PropertyNameUpgradeData>;
}
/**
 * Gets the reduced upgrade data for the specified data key. The function reads out the
 * target version and upgrade data object from the migration and resolves the specified
 * data portion that is specifically tied to the target version.
 */
export declare function getVersionUpgradeData<T extends keyof UpgradeData, U = ValueOfChanges<UpgradeData[T]>>(migration: Migration<UpgradeData>, dataName: T): U[];
