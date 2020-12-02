/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/// <amd-module name="@angular/language-service/src/language_service" />
import * as tss from 'typescript/lib/tsserverlibrary';
import * as ng from './types';
import { TypeScriptServiceHost } from './typescript_host';
/**
 * Create an instance of an Angular `LanguageService`.
 *
 * @publicApi
 */
export declare function createLanguageService(host: TypeScriptServiceHost): LanguageServiceImpl;
declare class LanguageServiceImpl implements ng.LanguageService {
    private readonly host;
    constructor(host: TypeScriptServiceHost);
    getSemanticDiagnostics(fileName: string): tss.Diagnostic[];
    getCompletionsAtPosition(fileName: string, position: number, _options?: tss.GetCompletionsAtPositionOptions): tss.CompletionInfo | undefined;
    getDefinitionAndBoundSpan(fileName: string, position: number): tss.DefinitionInfoAndBoundSpan | undefined;
    getQuickInfoAtPosition(fileName: string, position: number): tss.QuickInfo | undefined;
}
export {};
