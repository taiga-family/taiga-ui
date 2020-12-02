/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { BuilderContext } from '@angular-devkit/architect';
import { json } from '@angular-devkit/core';
import { Schema as BrowserBuilderSchema } from '../browser/schema';
import { Schema as ServerBuilderSchema } from '../server/schema';
export interface I18nOptions {
    inlineLocales: Set<string>;
    sourceLocale: string;
    locales: Record<string, {
        file: string;
        format?: string;
        translation?: unknown;
        dataPath?: string;
        integrity?: string;
        baseHref?: string;
    }>;
    flatOutput?: boolean;
    readonly shouldInline: boolean;
    veCompatLocale?: string;
}
export declare function createI18nOptions(metadata: json.JsonObject, inline?: boolean | string[]): I18nOptions;
export declare function configureI18nBuild<T extends BrowserBuilderSchema | ServerBuilderSchema>(context: BuilderContext, options: T): Promise<{
    buildOptions: T;
    i18n: I18nOptions;
}>;
