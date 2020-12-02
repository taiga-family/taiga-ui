/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Architect, BuilderOutput, ScheduleOptions, Target } from '@angular-devkit/architect';
import { TestProjectHost, TestingArchitectHost } from '@angular-devkit/architect/testing';
import { Path, json, virtualFs, workspaces } from '@angular-devkit/core';
export declare const veEnabled: boolean;
export declare const workspaceRoot: Path;
export declare const host: TestProjectHost;
export declare const outputPath: Path;
export declare const browserTargetSpec: {
    project: string;
    target: string;
};
export declare const devServerTargetSpec: {
    project: string;
    target: string;
};
export declare const extractI18nTargetSpec: {
    project: string;
    target: string;
};
export declare const karmaTargetSpec: {
    project: string;
    target: string;
};
export declare const tslintTargetSpec: {
    project: string;
    target: string;
};
export declare const protractorTargetSpec: {
    project: string;
    target: string;
};
export declare function createArchitect(workspaceRoot: Path): Promise<{
    workspace: workspaces.WorkspaceDefinition;
    architectHost: TestingArchitectHost;
    architect: Architect;
}>;
export interface BrowserBuildOutput {
    output: BuilderOutput;
    files: {
        [file: string]: Promise<string>;
    };
}
export declare function browserBuild(architect: Architect, host: virtualFs.Host, target: Target, overrides?: json.JsonObject, scheduleOptions?: ScheduleOptions): Promise<BrowserBuildOutput>;
export declare const lazyModuleFiles: {
    [path: string]: string;
};
export declare const lazyModuleStringImport: {
    [path: string]: string;
};
export declare const lazyModuleFnImport: {
    [path: string]: string;
};
