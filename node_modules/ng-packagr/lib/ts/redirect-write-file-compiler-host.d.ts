import * as ts from 'typescript';
/**
 * Returns a TypeScript compiler host that redirects `writeFile` output to the given `declarationDir`.
 *
 * @param compilerHost Original compiler host
 * @param baseDir Project base directory
 * @param declarationDir Declarations target directory
 */
export declare function redirectWriteFileCompilerHost(compilerHost: ts.CompilerHost, baseDir: string, declarationDir: string): ts.CompilerHost;
