import { CssSelector } from '@angular/compiler';
import { IOptions, RuleFailure } from 'tslint';
import { AbstractRule } from 'tslint/lib/rules';
import { SourceFile } from 'typescript';
export declare const OPTION_STYLE_CAMEL_CASE = "camelCase";
export declare const OPTION_STYLE_KEBAB_CASE = "kebab-case";
export declare const OPTION_TYPE_ATTRIBUTE = "attribute";
export declare const OPTION_TYPE_ATTRS = "attrs";
export declare const OPTION_TYPE_ELEMENT = "element";
export declare type SelectorStyle = typeof OPTION_STYLE_CAMEL_CASE | typeof OPTION_STYLE_KEBAB_CASE;
export declare type SelectorType = typeof OPTION_TYPE_ATTRIBUTE | typeof OPTION_TYPE_ELEMENT;
export declare type SelectorTypeInternal = typeof OPTION_TYPE_ATTRS | typeof OPTION_TYPE_ELEMENT;
export declare abstract class SelectorPropertyBase extends AbstractRule {
    abstract readonly handleType: string;
    internalTypes: ReadonlyArray<SelectorType>;
    prefixes: ReadonlyArray<string>;
    style: SelectorStyle;
    types: ReadonlyArray<SelectorTypeInternal>;
    constructor(options: IOptions);
    abstract getPrefixFailure(prefixes: ReadonlyArray<string>): string;
    abstract getStyleFailure(style: SelectorStyle): string;
    abstract getTypeFailure(types: ReadonlyArray<SelectorType>): string;
    getValidSelectors(selectors: CssSelector[]): ReadonlyArray<string>;
    validatePrefixes(selectors: ReadonlyArray<string>): boolean;
    validateStyle(selectors: ReadonlyArray<string>): boolean;
    validateTypes(selectors: ReadonlyArray<string>): boolean;
    apply(sourceFile: SourceFile): RuleFailure[];
}
