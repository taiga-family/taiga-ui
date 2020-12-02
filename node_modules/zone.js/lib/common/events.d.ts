/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @fileoverview
 * @suppress {missingRequire}
 */
/// <amd-module name="zone.js/lib/common/events" />
export declare const zoneSymbolEventNames: any;
export declare const globalSources: any;
export interface PatchEventTargetOptions {
    vh?: (nativeDelegate: any, delegate: any, target: any, args: any) => boolean;
    add?: string;
    rm?: string;
    prepend?: string;
    listeners?: string;
    rmAll?: string;
    useG?: boolean;
    chkDup?: boolean;
    rt?: boolean;
    diff?: (task: any, delegate: any) => boolean;
    supportPassive?: boolean;
    eventNameToString?: (eventName: any) => string;
    transferEventName?: (eventName: string) => string;
}
export declare function patchEventTarget(_global: any, apis: any[], patchOptions?: PatchEventTargetOptions): any[];
export declare function findEventTasks(target: any, eventName: string): Task[];
export declare function patchEventPrototype(global: any, api: _ZonePrivate): void;
