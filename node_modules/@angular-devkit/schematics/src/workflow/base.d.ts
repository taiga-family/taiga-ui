/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { schema, virtualFs } from '@angular-devkit/core';
import { Observable, Subject } from 'rxjs';
import { Engine, EngineHost } from '../engine';
import { DryRunEvent } from '../sink/dryrun';
import { Sink } from '../sink/sink';
import { LifeCycleEvent, RequiredWorkflowExecutionContext, Workflow, WorkflowExecutionContext } from './interface';
export interface BaseWorkflowOptions {
    host: virtualFs.Host;
    engineHost: EngineHost<{}, {}>;
    registry?: schema.CoreSchemaRegistry;
    force?: boolean;
    dryRun?: boolean;
}
/**
 * Base class for workflows. Even without abstract methods, this class should not be used without
 * surrounding some initialization for the registry and host. This class only adds life cycle and
 * dryrun/force support. You need to provide any registry and task executors that you need to
 * support.
 * See {@see NodeWorkflow} implementation for how to make a specialized subclass of this.
 * TODO: add default set of CoreSchemaRegistry transforms. Once the job refactor is done, use that
 *       as the support for tasks.
 *
 * @public
 */
export declare abstract class BaseWorkflow implements Workflow {
    protected _engine: Engine<{}, {}>;
    protected _engineHost: EngineHost<{}, {}>;
    protected _registry: schema.CoreSchemaRegistry;
    protected _host: virtualFs.Host;
    protected _reporter: Subject<DryRunEvent>;
    protected _lifeCycle: Subject<LifeCycleEvent>;
    protected _context: WorkflowExecutionContext[];
    protected _force: boolean;
    protected _dryRun: boolean;
    constructor(options: BaseWorkflowOptions);
    get context(): Readonly<WorkflowExecutionContext>;
    get engine(): Engine<{}, {}>;
    get engineHost(): EngineHost<{}, {}>;
    get registry(): schema.SchemaRegistry;
    get reporter(): Observable<DryRunEvent>;
    get lifeCycle(): Observable<LifeCycleEvent>;
    protected _createSinks(): Sink[];
    execute(options: Partial<WorkflowExecutionContext> & RequiredWorkflowExecutionContext): Observable<void>;
}
