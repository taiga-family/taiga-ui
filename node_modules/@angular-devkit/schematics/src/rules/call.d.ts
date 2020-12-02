/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { BaseException } from '@angular-devkit/core';
import { Observable } from 'rxjs';
import { Rule, SchematicContext, Source } from '../engine/interface';
import { Tree } from '../tree/interface';
/**
 * When a rule or source returns an invalid value.
 */
export declare class InvalidRuleResultException extends BaseException {
    constructor(value?: {});
}
export declare class InvalidSourceResultException extends BaseException {
    constructor(value?: {});
}
export declare function callSource(source: Source, context: SchematicContext): Observable<Tree>;
export declare function callRule(rule: Rule, input: Tree | Observable<Tree>, context: SchematicContext): Observable<Tree>;
