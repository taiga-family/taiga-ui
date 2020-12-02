/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Type } from '../facade/type';
import { PlatformReflectionCapabilities } from './platform_reflection_capabilities';
import { GetterFn, MethodFn, SetterFn } from './types';
/**
 * Attention: This regex has to hold even if the code is minified!
 */
export declare const DELEGATE_CTOR: RegExp;
export declare class ReflectionCapabilities implements PlatformReflectionCapabilities {
    private _reflect;
    constructor(reflect?: any);
    isReflectionEnabled(): boolean;
    factory<T>(t: Type<T>): (args: any[]) => T;
    private _ownParameters;
    parameters(type: Type<any>): any[][];
    private _ownAnnotations;
    annotations(typeOrFunc: Type<any>): any[];
    private _ownPropMetadata;
    propMetadata(typeOrFunc: any): {
        [key: string]: any[];
    };
    hasLifecycleHook(type: any, lcProperty: string): boolean;
    getter(name: string): GetterFn;
    setter(name: string): SetterFn;
    method(name: string): MethodFn;
    importUri(type: any): string;
    resourceUri(type: any): string;
    resolveIdentifier(name: string, moduleUrl: string, members: string[], runtime: any): any;
    resolveEnum(enumIdentifier: any, name: string): any;
}
