import * as ts from 'typescript';
import { WebpackCompilerHost } from '../compiler_host';
export declare function createTypescriptContext(content: string, additionalFiles?: Record<string, string>, useLibs?: boolean, extraCompilerOptions?: ts.CompilerOptions): {
    compilerHost: WebpackCompilerHost;
    program: ts.Program;
};
export declare function transformTypescript(content: string | undefined, transformers: ts.TransformerFactory<ts.SourceFile>[], program?: ts.Program, compilerHost?: WebpackCompilerHost): string | undefined;
