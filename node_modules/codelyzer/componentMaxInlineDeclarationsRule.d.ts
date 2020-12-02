import { IRuleMetadata, RuleFailure } from 'tslint/lib';
import { AbstractRule } from 'tslint/lib/rules';
import { SourceFile } from 'typescript/lib/typescript';
export declare type PropertyType = 'animations' | 'styles' | 'template';
export declare type PropertyPair = {
    [key in PropertyType]?: number;
};
export declare const getAnimationsFailure: (value: number, limit?: number) => string;
export declare const getStylesFailure: (value: number, limit?: number) => string;
export declare const getTemplateFailure: (value: number, limit?: number) => string;
export declare class Rule extends AbstractRule {
    static readonly metadata: IRuleMetadata;
    static readonly FAILURE_STRING: string;
    apply(sourceFile: SourceFile): RuleFailure[];
    isEnabled(): boolean;
}
