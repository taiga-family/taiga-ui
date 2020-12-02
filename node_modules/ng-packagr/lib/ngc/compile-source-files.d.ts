import * as ng from '@angular/compiler-cli';
import * as ts from 'typescript';
import { StylesheetProcessor } from '../styles/stylesheet-processor';
import { BuildGraph } from '../graph/build-graph';
import { NgccProcessor } from './ngcc-processor';
export declare function compileSourceFiles(graph: BuildGraph, tsConfig: ng.ParsedConfiguration, moduleResolutionCache: ts.ModuleResolutionCache, stylesheetProcessor: StylesheetProcessor, extraOptions?: Partial<ng.CompilerOptions>, declarationDir?: string, ngccProcessor?: NgccProcessor): Promise<void>;
