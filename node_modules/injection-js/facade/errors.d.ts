import { DebugContext } from './lang';
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
export declare const ERROR_TYPE = "ngType";
export declare const ERROR_COMPONENT_TYPE = "ngComponentType";
export declare const ERROR_DEBUG_CONTEXT = "ngDebugContext";
export declare const ERROR_ORIGINAL_ERROR = "ngOriginalError";
export declare const ERROR_LOGGER = "ngErrorLogger";
export declare function getType(error: Error): Function;
export declare function getDebugContext(error: Error): DebugContext;
export declare function getOriginalError(error: Error): Error;
export declare function getErrorLogger(error: Error): (console: Console, ...values: any[]) => void;
export declare function wrappedError(message: string, originalError: any): Error;
