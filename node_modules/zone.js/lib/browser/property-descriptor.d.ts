/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @fileoverview
 * @suppress {globalThis}
 */
/// <amd-module name="zone.js/lib/browser/property-descriptor" />
export declare const eventNames: string[];
export interface IgnoreProperty {
    target: any;
    ignoreProperties: string[];
}
export declare function filterProperties(target: any, onProperties: string[], ignoreProperties: IgnoreProperty[]): string[];
export declare function patchFilteredProperties(target: any, onProperties: string[], ignoreProperties: IgnoreProperty[], prototype?: any): void;
export declare function propertyDescriptorPatch(api: _ZonePrivate, _global: any): void;
