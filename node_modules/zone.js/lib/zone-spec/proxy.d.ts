/// <amd-module name="zone.js/lib/zone-spec/proxy" />
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
declare class ProxyZoneSpec implements ZoneSpec {
    private defaultSpecDelegate;
    name: string;
    private _delegateSpec;
    properties: {
        [k: string]: any;
    };
    propertyKeys: string[] | null;
    lastTaskState: HasTaskState | null;
    isNeedToTriggerHasTask: boolean;
    private tasks;
    static get(): ProxyZoneSpec;
    static isLoaded(): boolean;
    static assertPresent(): ProxyZoneSpec;
    constructor(defaultSpecDelegate?: ZoneSpec | null);
    setDelegate(delegateSpec: ZoneSpec | null): void;
    getDelegate(): ZoneSpec | null;
    resetDelegate(): void;
    tryTriggerHasTask(parentZoneDelegate: ZoneDelegate, currentZone: Zone, targetZone: Zone): void;
    removeFromTasks(task: Task): void;
    getAndClearPendingTasksInfo(): string;
    onFork(parentZoneDelegate: ZoneDelegate, currentZone: Zone, targetZone: Zone, zoneSpec: ZoneSpec): Zone;
    onIntercept(parentZoneDelegate: ZoneDelegate, currentZone: Zone, targetZone: Zone, delegate: Function, source: string): Function;
    onInvoke(parentZoneDelegate: ZoneDelegate, currentZone: Zone, targetZone: Zone, delegate: Function, applyThis: any, applyArgs?: any[], source?: string): any;
    onHandleError(parentZoneDelegate: ZoneDelegate, currentZone: Zone, targetZone: Zone, error: any): boolean;
    onScheduleTask(parentZoneDelegate: ZoneDelegate, currentZone: Zone, targetZone: Zone, task: Task): Task;
    onInvokeTask(parentZoneDelegate: ZoneDelegate, currentZone: Zone, targetZone: Zone, task: Task, applyThis: any, applyArgs: any): any;
    onCancelTask(parentZoneDelegate: ZoneDelegate, currentZone: Zone, targetZone: Zone, task: Task): any;
    onHasTask(delegate: ZoneDelegate, current: Zone, target: Zone, hasTaskState: HasTaskState): void;
}
