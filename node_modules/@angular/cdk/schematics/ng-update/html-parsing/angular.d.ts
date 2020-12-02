/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/// <amd-module name="@angular/cdk/schematics/ng-update/html-parsing/angular" />
/** Finds the specified Angular @Input in the given elements with tag name. */
export declare function findInputsOnElementWithTag(html: string, inputName: string, tagNames: string[]): number[];
/** Finds the specified Angular @Input in elements that have one of the specified attributes. */
export declare function findInputsOnElementWithAttr(html: string, inputName: string, attrs: string[]): number[];
/** Finds the specified Angular @Output in the given elements with tag name. */
export declare function findOutputsOnElementWithTag(html: string, outputName: string, tagNames: string[]): number[];
/** Finds the specified Angular @Output in elements that have one of the specified attributes. */
export declare function findOutputsOnElementWithAttr(html: string, outputName: string, attrs: string[]): number[];
