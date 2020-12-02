/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { InjectionToken } from '@angular/core';
/**
 * Used to provide a table to some of the sub-components without causing a circular dependency.
 * @docs-private
 */
export declare const CDK_TABLE: InjectionToken<any>;
/** Configurable options for `CdkTextColumn`. */
export interface TextColumnOptions<T> {
    /**
     * Default function that provides the header text based on the column name if a header
     * text is not provided.
     */
    defaultHeaderTextTransform?: (name: string) => string;
    /** Default data accessor to use if one is not provided. */
    defaultDataAccessor?: (data: T, name: string) => string;
}
/** Injection token that can be used to specify the text column options. */
export declare const TEXT_COLUMN_OPTIONS: InjectionToken<TextColumnOptions<any>>;
