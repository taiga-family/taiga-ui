/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/// <amd-module name="@angular/cdk/schematics/ng-add/index" />
import { Rule } from '@angular-devkit/schematics';
/**
 * Schematic factory entry-point for the `ng-add` schematic. The ng-add schematic will be
 * automatically executed if developers run `ng add @angular/cdk`.
 *
 * By default, the CLI already installs the package that has been specified with `ng add`.
 * We just store the version in the `package.json` in case the package manager didn't. Also
 * this ensures that there will be no error that says that the CDK does not support `ng add`.
 */
export default function (): Rule;
