/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { JsonAstArray, JsonAstNode, JsonAstObject, JsonValue } from '@angular-devkit/core';
import { UpdateRecorder } from '@angular-devkit/schematics';
export declare function appendPropertyInAstObject(recorder: UpdateRecorder, node: JsonAstObject, propertyName: string, value: JsonValue, indent: number): void;
export declare function insertPropertyInAstObjectInOrder(recorder: UpdateRecorder, node: JsonAstObject, propertyName: string, value: JsonValue, indent: number): void;
export declare function removePropertyInAstObject(recorder: UpdateRecorder, node: JsonAstObject, propertyName: string): void;
export declare function appendValueInAstArray(recorder: UpdateRecorder, node: JsonAstArray, value: JsonValue, indent?: number): void;
export declare function findPropertyInAstObject(node: JsonAstObject, propertyName: string): JsonAstNode | null;
