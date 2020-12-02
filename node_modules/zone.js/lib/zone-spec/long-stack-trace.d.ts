/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @fileoverview
 * @suppress {globalThis}
 */
/// <amd-module name="zone.js/lib/zone-spec/long-stack-trace" />
declare const NEWLINE = "\n";
declare const IGNORE_FRAMES: {
    [k: string]: true;
};
declare const creationTrace = "__creationTrace__";
declare const ERROR_TAG = "STACKTRACE TRACKING";
declare const SEP_TAG = "__SEP_TAG__";
declare let sepTemplate: string;
declare class LongStackTrace {
    error: Error;
    timestamp: Date;
}
declare function getStacktraceWithUncaughtError(): Error;
declare function getStacktraceWithCaughtError(): Error;
declare const error: Error;
declare const caughtError: Error;
declare const getStacktrace: typeof getStacktraceWithUncaughtError;
declare function getFrames(error: Error): string[];
declare function addErrorStack(lines: string[], error: Error): void;
declare function renderLongStackTrace(frames: LongStackTrace[], stack?: string): string;
declare function stackTracesEnabled(): boolean;
declare type LongStackTraceZoneSpec = ZoneSpec & {
    longStackTraceLimit: number;
};
declare function captureStackTraces(stackTraces: string[][], count: number): void;
declare function computeIgnoreFrames(): void;
