/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { JsonAstArray, JsonAstKeyValue, JsonAstNode, JsonAstObject, JsonValue } from '../../json';
import { ProjectDefinition, TargetDefinition, WorkspaceDefinition } from '../definitions';
export declare const JsonWorkspaceSymbol: unique symbol;
export interface JsonWorkspaceDefinition extends WorkspaceDefinition {
    [JsonWorkspaceSymbol]: JsonWorkspaceMetadata;
}
interface ChangeValues {
    json: JsonValue;
    project: ProjectDefinition;
    target: TargetDefinition;
    projectcollection: Iterable<[string, ProjectDefinition]>;
    targetcollection: Iterable<[string, TargetDefinition]>;
}
export interface JsonChange<T extends keyof ChangeValues = keyof ChangeValues> {
    op: T extends 'json' | 'project' | 'target' ? 'add' | 'remove' | 'replace' : 'add';
    path: string;
    node: JsonAstNode | JsonAstKeyValue;
    value?: ChangeValues[T];
    type: T;
}
export declare class JsonWorkspaceMetadata {
    readonly filePath: string;
    readonly ast: JsonAstObject;
    readonly raw: string;
    readonly changes: JsonChange[];
    constructor(filePath: string, ast: JsonAstObject, raw: string);
    get hasChanges(): boolean;
    get changeCount(): number;
    findChangesForPath(path: string): JsonChange[];
    addChange<T extends keyof ChangeValues = keyof ChangeValues>(op: 'add' | 'remove' | 'replace', path: string, node: JsonAstArray | JsonAstObject | JsonAstKeyValue, value?: ChangeValues[T], type?: T): void;
    reset(): void;
}
export {};
