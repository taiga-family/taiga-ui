/// <reference types="q" />
import { Promise } from 'q';
/**
 * Utility function that filters a stack trace to be more readable. It removes
 * Jasmine test frames and webdriver promise resolution.
 * @param {string} text Original stack trace.
 * @return {string}
 */
export declare function filterStackTrace(text: string): string;
/**
 * Internal helper for abstraction of polymorphic filenameOrFn properties.
 * @param {object} filenameOrFn The filename or function that we will execute.
 * @param {Array.<object>}} args The args to pass into filenameOrFn.
 * @return {q.Promise} A promise that will resolve when filenameOrFn completes.
 */
export declare function runFilenameOrFn_(configDir: string, filenameOrFn: any, args?: any[]): Promise<any>;
/**
 * Joins two logs of test results, each following the format of <framework>.run
 * @param {object} log1
 * @param {object} log2
 * @return {object} The joined log
 */
export declare function joinTestLogs(log1: any, log2: any): any;
/**
 * Returns false if an error indicates a missing or stale element, re-throws
 * the error otherwise
 *
 * @param {*} The error to check
 * @throws {*} The error it was passed if it doesn't indicate a missing or stale
 *   element
 * @return {boolean} false, if it doesn't re-throw the error
 */
export declare function falseIfMissing(error: any): boolean;
/**
 * Return a boolean given boolean value.
 *
 * @param {boolean} value
 * @returns {boolean} given value
 */
export declare function passBoolean(value: boolean): boolean;
