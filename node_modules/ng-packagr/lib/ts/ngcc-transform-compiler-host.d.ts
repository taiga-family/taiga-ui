import * as ts from 'typescript';
import { NgccProcessor } from '../ngc/ngcc-processor';
export declare function ngccTransformCompilerHost(compilerHost: ts.CompilerHost, compilerOptions: ts.CompilerOptions, ngccProcessor: NgccProcessor, moduleResolutionCache: ts.ModuleResolutionCache): ts.CompilerHost;
