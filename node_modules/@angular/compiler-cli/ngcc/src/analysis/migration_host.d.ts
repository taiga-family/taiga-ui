/// <amd-module name="@angular/compiler-cli/ngcc/src/analysis/migration_host" />
import { AbsoluteFsPath } from '../../../src/ngtsc/file_system';
import { MetadataReader } from '../../../src/ngtsc/metadata';
import { PartialEvaluator } from '../../../src/ngtsc/partial_evaluator';
import { ClassDeclaration, Decorator } from '../../../src/ngtsc/reflection';
import { HandlerFlags } from '../../../src/ngtsc/transform';
import { NgccReflectionHost } from '../host/ngcc_host';
import { MigrationHost } from '../migrations/migration';
import { NgccTraitCompiler } from './ngcc_trait_compiler';
/**
 * The standard implementation of `MigrationHost`, which is created by the `DecorationAnalyzer`.
 */
export declare class DefaultMigrationHost implements MigrationHost {
    readonly reflectionHost: NgccReflectionHost;
    readonly metadata: MetadataReader;
    readonly evaluator: PartialEvaluator;
    private compiler;
    private entryPointPath;
    constructor(reflectionHost: NgccReflectionHost, metadata: MetadataReader, evaluator: PartialEvaluator, compiler: NgccTraitCompiler, entryPointPath: AbsoluteFsPath);
    injectSyntheticDecorator(clazz: ClassDeclaration, decorator: Decorator, flags?: HandlerFlags): void;
    getAllDecorators(clazz: ClassDeclaration): Decorator[] | null;
    isInScope(clazz: ClassDeclaration): boolean;
}
