/// <amd-module name="@angular/compiler-cli/ngcc/src/packages/transformer" />
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import * as ts from 'typescript';
import { ParsedConfiguration } from '../../..';
import { FileSystem } from '../../../src/ngtsc/file_system';
import { ModuleWithProvidersAnalyses } from '../analysis/module_with_providers_analyzer';
import { ExportInfo } from '../analysis/private_declarations_analyzer';
import { SwitchMarkerAnalyses } from '../analysis/switch_marker_analyzer';
import { CompiledFile } from '../analysis/types';
import { NgccReflectionHost } from '../host/ngcc_host';
import { Logger } from '../logging/logger';
import { RenderingFormatter } from '../rendering/rendering_formatter';
import { FileToWrite } from '../rendering/utils';
import { EntryPointBundle } from './entry_point_bundle';
export declare type TransformResult = {
    success: true;
    diagnostics: ts.Diagnostic[];
    transformedFiles: FileToWrite[];
} | {
    success: false;
    diagnostics: ts.Diagnostic[];
};
/**
 * A Package is stored in a directory on disk and that directory can contain one or more package
 * formats - e.g. fesm2015, UMD, etc. Additionally, each package provides typings (`.d.ts` files).
 *
 * Each of these formats exposes one or more entry points, which are source files that need to be
 * parsed to identify the decorated exported classes that need to be analyzed and compiled by one or
 * more `DecoratorHandler` objects.
 *
 * Each entry point to a package is identified by a `package.json` which contains properties that
 * indicate what formatted bundles are accessible via this end-point.
 *
 * Each bundle is identified by a root `SourceFile` that can be parsed and analyzed to
 * identify classes that need to be transformed; and then finally rendered and written to disk.
 *
 * Along with the source files, the corresponding source maps (either inline or external) and
 * `.d.ts` files are transformed accordingly.
 *
 * - Flat file packages have all the classes in a single file.
 * - Other packages may re-export classes from other non-entry point files.
 * - Some formats may contain multiple "modules" in a single file.
 */
export declare class Transformer {
    private fs;
    private logger;
    private tsConfig;
    constructor(fs: FileSystem, logger: Logger, tsConfig?: ParsedConfiguration | null);
    /**
     * Transform the source (and typings) files of a bundle.
     * @param bundle the bundle to transform.
     * @returns information about the files that were transformed.
     */
    transform(bundle: EntryPointBundle): TransformResult;
    getHost(bundle: EntryPointBundle): NgccReflectionHost;
    getRenderingFormatter(host: NgccReflectionHost, bundle: EntryPointBundle): RenderingFormatter;
    analyzeProgram(reflectionHost: NgccReflectionHost, bundle: EntryPointBundle): ProgramAnalyses;
}
export declare function hasErrors(diagnostics: ts.Diagnostic[]): boolean;
interface ProgramAnalyses {
    decorationAnalyses: Map<ts.SourceFile, CompiledFile>;
    switchMarkerAnalyses: SwitchMarkerAnalyses;
    privateDeclarationsAnalyses: ExportInfo[];
    moduleWithProvidersAnalyses: ModuleWithProvidersAnalyses | null;
    diagnostics: ts.Diagnostic[];
}
export {};
