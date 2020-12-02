/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
export interface TemplateTag<R = string> {
    (template: TemplateStringsArray, ...substitutions: any[]): R;
}
export declare function oneLine(strings: TemplateStringsArray, ...values: any[]): string;
export declare function indentBy(indentations: number): TemplateTag;
export declare function stripIndent(strings: TemplateStringsArray, ...values: any[]): string;
export declare function stripIndents(strings: TemplateStringsArray, ...values: any[]): string;
export declare function trimNewlines(strings: TemplateStringsArray, ...values: any[]): string;
