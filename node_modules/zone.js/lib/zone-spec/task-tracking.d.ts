/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/// <amd-module name="zone.js/lib/zone-spec/task-tracking" />
/**
 * A `TaskTrackingZoneSpec` allows one to track all outstanding Tasks.
 *
 * This is useful in tests. For example to see which tasks are preventing a test from completing
 * or an automated way of releasing all of the event listeners at the end of the test.
 */
declare class TaskTrackingZoneSpec implements ZoneSpec {
    name: string;
    microTasks: Task[];
    macroTasks: Task[];
    eventTasks: Task[];
    properties: {
        [key: string]: any;
    };
    static get(): any;
    private getTasksFor;
    onScheduleTask(parentZoneDelegate: ZoneDelegate, currentZone: Zone, targetZone: Zone, task: Task): Task;
    onCancelTask(parentZoneDelegate: ZoneDelegate, currentZone: Zone, targetZone: Zone, task: Task): any;
    onInvokeTask(parentZoneDelegate: ZoneDelegate, currentZone: Zone, targetZone: Zone, task: Task, applyThis: any, applyArgs: any): any;
    clearEvents(): void;
}
