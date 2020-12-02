/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { PrebootOptions } from '../common/preboot.interfaces';
export declare const initFunctionName = "prebootInitFn";
export declare const defaultOptions: PrebootOptions;
/**
 * Get the event recorder code based on all functions in event.recorder.ts
 * and the getNodeKeyForPreboot function.
 */
export declare function getEventRecorderCode(): string;
/**
 * Used by the server side version of preboot. The main purpose is to get the
 * inline code that can be inserted into the server view.
 * Returns the definitions of the prebootInit function called in code returned by
 * getInlineInvocation for each server node separately.
 *
 * @param customOptions PrebootRecordOptions that override the defaults
 * @returns Generated inline preboot code with just functions definitions
 * to be used separately
 */
export declare function getInlineDefinition(customOptions?: PrebootOptions): string;
/**
 * Used by the server side version of preboot. The main purpose is to get the
 * inline code that can be inserted into the server view.
 * Invokes the prebootInit function defined in getInlineDefinition with proper
 * parameters. Each appRoot should get a separate inlined code from a separate
 * call to getInlineInvocation but only one inlined code from getInlineDefinition.
 *
 * @returns Generated inline preboot code with just invocations of functions from
 * getInlineDefinition
 */
export declare function getInlineInvocation(): string;
/**
 * Throw an error if issues with any options
 * @param opts
 */
export declare function validateOptions(opts: PrebootOptions): void;
/**
 * Object.assign() is not fully supporting in TypeScript, so
 * this is just a simple implementation of it
 *
 * @param target The target object
 * @param optionSets Any number of addition objects that are added on top of the
 * target
 * @returns A new object that contains all the merged values
 */
export declare function assign(target: Object, ...optionSets: any[]): Object;
/**
 * Stringify an object and include functions. This is needed since we are
 * letting users pass in options that include custom functions for things like
 * the freeze handler or action when an event occurs
 *
 * @param obj This is the object you want to stringify that includes some
 * functions
 * @returns The stringified version of an object
 */
export declare function stringifyWithFunctions(obj: Object): string;
