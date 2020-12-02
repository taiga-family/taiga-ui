/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/// <amd-module name="zone.js/lib/zone-spec/sync-test" />
declare class SyncTestZoneSpec implements ZoneSpec {
    runZone: Zone;
    constructor(namePrefix: string);
    name: string;
    onScheduleTask(delegate: ZoneDelegate, current: Zone, target: Zone, task: Task): Task;
}
