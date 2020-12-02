import { IRuleMetadata, RuleFailure } from 'tslint';
import { AbstractRule } from 'tslint/lib/rules';
import { SourceFile } from 'typescript';
export declare class Rule extends AbstractRule {
    static readonly metadata: IRuleMetadata;
    static readonly FAILURE_STRING = "Classes decorated with @Injectable should use the 'providedIn' property";
    apply(sourceFile: SourceFile): RuleFailure[];
}
