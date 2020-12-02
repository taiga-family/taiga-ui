/// <amd-module name="@angular/compiler-cli/ngcc/src/analysis/switch_marker_analyzer" />
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import * as ts from 'typescript';
import { AbsoluteFsPath } from '../../../src/ngtsc/file_system';
import { NgccReflectionHost, SwitchableVariableDeclaration } from '../host/ngcc_host';
export interface SwitchMarkerAnalysis {
    sourceFile: ts.SourceFile;
    declarations: SwitchableVariableDeclaration[];
}
export declare type SwitchMarkerAnalyses = Map<ts.SourceFile, SwitchMarkerAnalysis>;
export declare const SwitchMarkerAnalyses: MapConstructor;
/**
 * This Analyzer will analyse the files that have an R3 switch marker in them
 * that will be replaced.
 */
export declare class SwitchMarkerAnalyzer {
    private host;
    private packagePath;
    constructor(host: NgccReflectionHost, packagePath: AbsoluteFsPath);
    /**
     * Analyze the files in the program to identify declarations that contain R3
     * switch markers.
     * @param program The program to analyze.
     * @return A map of source files to analysis objects. The map will contain only the
     * source files that had switch markers, and the analysis will contain an array of
     * the declarations in that source file that contain the marker.
     */
    analyzeProgram(program: ts.Program): SwitchMarkerAnalyses;
}
