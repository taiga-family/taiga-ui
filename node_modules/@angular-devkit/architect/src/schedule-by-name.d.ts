/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { analytics, experimental, json, logging } from '@angular-devkit/core';
import { BuilderRun, Target } from './api';
export declare function scheduleByName(name: string, buildOptions: json.JsonObject, options: {
    target?: Target;
    scheduler: experimental.jobs.Scheduler;
    logger: logging.LoggerApi;
    workspaceRoot: string | Promise<string>;
    currentDirectory: string | Promise<string>;
    analytics?: analytics.Analytics;
}): Promise<BuilderRun>;
export declare function scheduleByTarget(target: Target, overrides: json.JsonObject, options: {
    scheduler: experimental.jobs.Scheduler;
    logger: logging.LoggerApi;
    workspaceRoot: string | Promise<string>;
    currentDirectory: string | Promise<string>;
    analytics?: analytics.Analytics;
}): Promise<BuilderRun>;
