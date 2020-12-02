import * as ts from 'typescript';
import * as ng from '@angular/compiler-cli';
import { StylesheetProcessor } from '../styles/stylesheet-processor';
import { EntryPointNode } from '../ng-package/nodes';
import { BuildGraph } from '../graph/build-graph';
import { FileCache } from '../file-system/file-cache';
export declare function cacheCompilerHost(graph: BuildGraph, entryPoint: EntryPointNode, compilerOptions: ng.CompilerOptions, moduleResolutionCache: ts.ModuleResolutionCache, stylesheetProcessor?: StylesheetProcessor, sourcesFileCache?: FileCache): ng.CompilerHost;
