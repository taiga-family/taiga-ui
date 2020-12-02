import { IOptions, RuleFailure } from 'tslint';
import { AbstractRule } from 'tslint/lib/rules';
import { SourceFile } from 'typescript';
export interface MetadataPropertyConfig {
    readonly errorMessage: string;
    readonly propertyName: string;
}
export declare class MetadataPropertyBase extends AbstractRule {
    private readonly config;
    constructor(config: MetadataPropertyConfig, options: IOptions);
    apply(sourceFile: SourceFile): RuleFailure[];
}
