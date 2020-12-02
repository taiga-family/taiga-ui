/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { BaseException } from '@angular-devkit/core';
import { FileOperator, Rule } from '../engine/interface';
export declare const TEMPLATE_FILENAME_RE: RegExp;
export declare class OptionIsNotDefinedException extends BaseException {
    constructor(name: string);
}
export declare class UnknownPipeException extends BaseException {
    constructor(name: string);
}
export declare class InvalidPipeException extends BaseException {
    constructor(name: string);
}
export declare type PathTemplateValue = boolean | string | number | undefined;
export declare type PathTemplatePipeFunction = (x: string) => PathTemplateValue;
export declare type PathTemplateData = {
    [key: string]: PathTemplateValue | PathTemplateData | PathTemplatePipeFunction;
};
export interface PathTemplateOptions {
    interpolationStart: string;
    interpolationEnd: string;
    pipeSeparator?: string;
}
export declare function applyContentTemplate<T>(options: T): FileOperator;
export declare function contentTemplate<T>(options: T): Rule;
export declare function applyPathTemplate<T extends PathTemplateData>(data: T, options?: PathTemplateOptions): FileOperator;
export declare function pathTemplate<T extends PathTemplateData>(options: T): Rule;
/**
 * Remove every `.template` suffix from file names.
 */
export declare function renameTemplateFiles(): Rule;
export declare function template<T>(options: T): Rule;
export declare function applyTemplates<T>(options: T): Rule;
