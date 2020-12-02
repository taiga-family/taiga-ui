/// <amd-module name="@angular/compiler-cli/ngcc/src/rendering/dts_renderer" />
import * as ts from 'typescript';
import { FileSystem } from '../../../src/ngtsc/file_system';
import { Reexport } from '../../../src/ngtsc/imports';
import { CompileResult } from '../../../src/ngtsc/transform';
import { ModuleWithProvidersAnalyses, ModuleWithProvidersInfo } from '../analysis/module_with_providers_analyzer';
import { ExportInfo, PrivateDeclarationsAnalyses } from '../analysis/private_declarations_analyzer';
import { DecorationAnalyses } from '../analysis/types';
import { NgccReflectionHost } from '../host/ngcc_host';
import { Logger } from '../logging/logger';
import { EntryPointBundle } from '../packages/entry_point_bundle';
import { RenderingFormatter } from './rendering_formatter';
import { FileToWrite } from './utils';
/**
 * A structure that captures information about what needs to be rendered
 * in a typings file.
 *
 * It is created as a result of processing the analysis passed to the renderer.
 *
 * The `renderDtsFile()` method consumes it when rendering a typings file.
 */
declare class DtsRenderInfo {
    classInfo: DtsClassInfo[];
    moduleWithProviders: ModuleWithProvidersInfo[];
    privateExports: ExportInfo[];
    reexports: Reexport[];
}
/**
 * Information about a class in a typings file.
 */
export interface DtsClassInfo {
    dtsDeclaration: ts.Declaration;
    compilation: CompileResult[];
}
/**
 * A base-class for rendering an `AnalyzedFile`.
 *
 * Package formats have output files that must be rendered differently. Concrete sub-classes must
 * implement the `addImports`, `addDefinitions` and `removeDecorators` abstract methods.
 */
export declare class DtsRenderer {
    private dtsFormatter;
    private fs;
    private logger;
    private host;
    private bundle;
    constructor(dtsFormatter: RenderingFormatter, fs: FileSystem, logger: Logger, host: NgccReflectionHost, bundle: EntryPointBundle);
    renderProgram(decorationAnalyses: DecorationAnalyses, privateDeclarationsAnalyses: PrivateDeclarationsAnalyses, moduleWithProvidersAnalyses: ModuleWithProvidersAnalyses | null): FileToWrite[];
    renderDtsFile(dtsFile: ts.SourceFile, renderInfo: DtsRenderInfo): FileToWrite[];
    private getTypingsFilesToRender;
}
export {};
