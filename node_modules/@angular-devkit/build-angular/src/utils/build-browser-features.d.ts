/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import * as ts from 'typescript';
export declare class BuildBrowserFeatures {
    private projectRoot;
    private scriptTarget;
    private readonly _es6TargetOrLater;
    readonly supportedBrowsers: string[];
    constructor(projectRoot: string, scriptTarget: ts.ScriptTarget);
    /**
     * True, when one or more browsers requires ES5
     * support and the scirpt target is ES2015 or greater.
     */
    isDifferentialLoadingNeeded(): boolean;
    /**
     * True, when one or more browsers requires ES5 support
     */
    isEs5SupportNeeded(): boolean;
    /**
     * True, when a browser feature is supported partially or fully.
     */
    isFeatureSupported(featureId: string): boolean;
}
