/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/// <amd-module name="@angular/cdk/schematics/ng-update/html-parsing/elements" />
/**
 * Parses a HTML fragment and traverses all AST nodes in order find elements that
 * include the specified attribute.
 */
export declare function findElementsWithAttribute(html: string, attributeName: string): any[];
/**
 * Finds elements with explicit tag names that also contain the specified attribute. Returns the
 * attribute start offset based on the specified HTML.
 */
export declare function findAttributeOnElementWithTag(html: string, name: string, tagNames: string[]): number[];
/**
 * Finds elements that contain the given attribute and contain at least one of the other
 * specified attributes. Returns the primary attribute's start offset based on the specified HTML.
 */
export declare function findAttributeOnElementWithAttrs(html: string, name: string, attrs: string[]): number[];
/** Gets the start offset of the given attribute from a Parse5 element. */
export declare function getStartOffsetOfAttribute(element: any, attributeName: string): number;
