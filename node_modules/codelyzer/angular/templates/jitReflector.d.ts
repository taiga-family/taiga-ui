import { CompileReflector, ExternalReference } from '@angular/compiler';
import { Component } from '@angular/core';
export declare const MODULE_SUFFIX = "";
export declare class JitReflector implements CompileReflector {
    tryAnnotations: any;
    private reflectionCapabilities;
    constructor();
    guards(): {};
    componentModuleUrl(type: any, cmpMetadata: Component): string;
    parameters(typeOrFunc: any): any[][];
    annotations(typeOrFunc: any): any[];
    shallowAnnotations(typeOrFunc: any): any[];
    propMetadata(typeOrFunc: any): {
        [key: string]: any[];
    };
    hasLifecycleHook(type: any, lcProperty: string): boolean;
    resolveExternalReference(ref: ExternalReference): any;
}
