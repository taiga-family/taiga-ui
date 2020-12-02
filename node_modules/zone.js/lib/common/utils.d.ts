/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Suppress closure compiler errors about unknown 'Zone' variable
 * @fileoverview
 * @suppress {undefinedVars,globalThis,missingRequire}
 */
/// <amd-module name="zone.js/lib/common/utils" />
/** Object.getOwnPropertyDescriptor */
export declare const ObjectGetOwnPropertyDescriptor: (o: any, p: string | number | symbol) => PropertyDescriptor | undefined;
/** Object.defineProperty */
export declare const ObjectDefineProperty: (o: any, p: string | number | symbol, attributes: PropertyDescriptor & ThisType<any>) => any;
/** Object.getPrototypeOf */
export declare const ObjectGetPrototypeOf: (o: any) => any;
/** Object.create */
export declare const ObjectCreate: {
    (o: object | null): any;
    (o: object | null, properties: PropertyDescriptorMap & ThisType<any>): any;
};
/** Array.prototype.slice */
export declare const ArraySlice: (start?: number | undefined, end?: number | undefined) => any[];
/** addEventListener string const */
export declare const ADD_EVENT_LISTENER_STR = "addEventListener";
/** removeEventListener string const */
export declare const REMOVE_EVENT_LISTENER_STR = "removeEventListener";
/** zoneSymbol addEventListener */
export declare const ZONE_SYMBOL_ADD_EVENT_LISTENER: string;
/** zoneSymbol removeEventListener */
export declare const ZONE_SYMBOL_REMOVE_EVENT_LISTENER: string;
/** true string const */
export declare const TRUE_STR = "true";
/** false string const */
export declare const FALSE_STR = "false";
/** Zone symbol prefix string const. */
export declare const ZONE_SYMBOL_PREFIX: string;
export declare function wrapWithCurrentZone<T extends Function>(callback: T, source: string): T;
export declare function scheduleMacroTaskWithCurrentZone(source: string, callback: Function, data?: TaskData, customSchedule?: (task: Task) => void, customCancel?: (task: Task) => void): MacroTask;
export declare const zoneSymbol: (name: string) => string;
export declare function bindArguments(args: any[], source: string): any[];
export declare function patchPrototype(prototype: any, fnNames: string[]): void;
export declare function isPropertyWritable(propertyDesc: any): boolean;
export declare const isWebWorker: boolean;
export declare const isNode: boolean;
export declare const isBrowser: boolean;
export declare const isMix: boolean;
export declare function patchProperty(obj: any, prop: string, prototype?: any): void;
export declare function patchOnProperties(obj: any, properties: string[] | null, prototype?: any): void;
export declare function patchClass(className: string): void;
export declare function copySymbolProperties(src: any, dest: any): void;
export declare function setShouldCopySymbolProperties(flag: boolean): void;
export declare function patchMethod(target: any, name: string, patchFn: (delegate: Function, delegateName: string, name: string) => (self: any, args: any[]) => any): Function | null;
export interface MacroTaskMeta extends TaskData {
    name: string;
    target: any;
    cbIdx: number;
    args: any[];
}
export declare function patchMacroTask(obj: any, funcName: string, metaCreator: (self: any, args: any[]) => MacroTaskMeta): void;
export interface MicroTaskMeta extends TaskData {
    name: string;
    target: any;
    cbIdx: number;
    args: any[];
}
export declare function patchMicroTask(obj: any, funcName: string, metaCreator: (self: any, args: any[]) => MicroTaskMeta): void;
export declare function attachOriginToPatched(patched: Function, original: any): void;
export declare function isIE(): boolean;
export declare function isIEOrEdge(): boolean;
