/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { analytics, experimental, json, logging } from '@angular-devkit/core';
import { Observable } from 'rxjs';
import { BuilderRun, Target } from './api';
import { ArchitectHost } from './internal';
export interface ScheduleOptions {
    logger?: logging.Logger;
    analytics?: analytics.Analytics;
}
export declare class Architect {
    private _host;
    private readonly _scheduler;
    private readonly _jobCache;
    private readonly _infoCache;
    constructor(_host: ArchitectHost, registry?: json.schema.SchemaRegistry, additionalJobRegistry?: experimental.jobs.Registry);
    has(name: experimental.jobs.JobName): Observable<boolean>;
    scheduleBuilder(name: string, options: json.JsonObject, scheduleOptions?: ScheduleOptions): Promise<BuilderRun>;
    scheduleTarget(target: Target, overrides?: json.JsonObject, scheduleOptions?: ScheduleOptions): Promise<BuilderRun>;
}
