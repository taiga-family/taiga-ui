/**
 * @license Angular v9.1.12
 * (c) 2010-2020 Google LLC. https://angular.io/
 * License: MIT
 */

import { EventManager } from '@angular/platform-browser';
import { HttpBackend } from '@angular/common/http';
import { HttpEvent } from '@angular/common/http';
import { HttpRequest } from '@angular/common/http';
import { InjectionToken } from '@angular/core';
import { Injector } from '@angular/core';
import { NgModuleFactory } from '@angular/core';
import { NgZone } from '@angular/core';
import { Observable } from 'rxjs';
import { PlatformRef } from '@angular/core';
import { Provider } from '@angular/core';
import { Renderer2 } from '@angular/core';
import { RendererFactory2 } from '@angular/core';
import { RendererType2 } from '@angular/core';
import { StaticProvider } from '@angular/core';
import { TransferState } from '@angular/platform-browser';
import { Type } from '@angular/core';
import { Version } from '@angular/core';
import { XhrFactory } from '@angular/common/http';
import { ɵAnimationEngine } from '@angular/animations/browser';
import { ɵAnimationRendererFactory } from '@angular/platform-browser/animations';
import { ɵSharedStylesHost } from '@angular/platform-browser';

/**
 * A function that will be executed when calling `renderModuleFactory` or `renderModule` just
 * before current platform state is rendered to string.
 *
 * @publicApi
 */
export declare const BEFORE_APP_SERIALIZED: InjectionToken<(() => void | Promise<void>)[]>;

/**
 * The DI token for setting the initial config for the platform.
 *
 * @publicApi
 */
export declare const INITIAL_CONFIG: InjectionToken<PlatformConfig>;

/**
 * Config object passed to initialize the platform.
 *
 * @publicApi
 */
export declare interface PlatformConfig {
    document?: string;
    url?: string;
}

/**
 * The server platform that supports the runtime compiler.
 *
 * @publicApi
 */
export declare const platformDynamicServer: (extraProviders?: StaticProvider[] | undefined) => PlatformRef;

/**
 * @publicApi
 */
export declare const platformServer: (extraProviders?: StaticProvider[] | undefined) => PlatformRef;


/**
 * Representation of the current platform state.
 *
 * @publicApi
 */
export declare class PlatformState {
    private _doc;
    constructor(_doc: any);
    /**
     * Renders the current state of the platform to string.
     */
    renderToString(): string;
    /**
     * Returns the current DOM state.
     */
    getDocument(): any;
}

/**
 * Renders a Module to string.
 *
 * `document` is the full document HTML of the page to render, as a string.
 * `url` is the URL for the current render request.
 * `extraProviders` are the platform level providers for the current render request.
 *
 * Do not use this in a production server environment. Use pre-compiled {@link NgModuleFactory} with
 * {@link renderModuleFactory} instead.
 *
 * @publicApi
 */
export declare function renderModule<T>(module: Type<T>, options: {
    document?: string;
    url?: string;
    extraProviders?: StaticProvider[];
}): Promise<string>;

/**
 * Renders a {@link NgModuleFactory} to string.
 *
 * `document` is the full document HTML of the page to render, as a string.
 * `url` is the URL for the current render request.
 * `extraProviders` are the platform level providers for the current render request.
 *
 * @publicApi
 */
export declare function renderModuleFactory<T>(moduleFactory: NgModuleFactory<T>, options: {
    document?: string;
    url?: string;
    extraProviders?: StaticProvider[];
}): Promise<string>;

/**
 * The ng module for the server.
 *
 * @publicApi
 */
export declare class ServerModule {
}

/**
 * NgModule to install on the server side while using the `TransferState` to transfer state from
 * server to client.
 *
 * @publicApi
 */
export declare class ServerTransferStateModule {
}

/**
 * @publicApi
 */
export declare const VERSION: Version;

declare class ZoneClientBackend extends ZoneMacroTaskWrapper<HttpRequest<any>, HttpEvent<any>> implements HttpBackend {
    private backend;
    constructor(backend: HttpBackend);
    handle(request: HttpRequest<any>): Observable<HttpEvent<any>>;
    protected delegate(request: HttpRequest<any>): Observable<HttpEvent<any>>;
}

declare abstract class ZoneMacroTaskWrapper<S, R> {
    wrap(request: S): Observable<R>;
    protected abstract delegate(request: S): Observable<R>;
}

export declare function ɵangular_packages_platform_server_platform_server_a(renderer: RendererFactory2, engine: ɵAnimationEngine, zone: NgZone): ɵAnimationRendererFactory;

export declare function ɵangular_packages_platform_server_platform_server_b(doc: Document, appId: string, transferStore: TransferState): () => void;

export declare class ɵangular_packages_platform_server_platform_server_c extends ɵSharedStylesHost {
    private doc;
    private transitionId;
    private head;
    constructor(doc: any, transitionId: string);
    private _addStyle;
    onStylesAdded(additions: Set<string>): void;
}


export declare class ɵangular_packages_platform_server_platform_server_d {
    private doc;
    constructor(doc: any);
    supports(eventName: string): boolean;
    addEventListener(element: HTMLElement, eventName: string, handler: Function): Function;
    addGlobalEventListener(element: string, eventName: string, handler: Function): Function;
}

export declare class ɵangular_packages_platform_server_platform_server_e implements XhrFactory {
    build(): XMLHttpRequest;
}

export declare function ɵangular_packages_platform_server_platform_server_f(backend: HttpBackend, injector: Injector): ZoneClientBackend;

export declare const ɵangular_packages_platform_server_platform_server_g: Provider[];

export declare const ɵINTERNAL_SERVER_PLATFORM_PROVIDERS: StaticProvider[];

export declare const ɵSERVER_RENDER_PROVIDERS: Provider[];

export declare class ɵServerRendererFactory2 implements RendererFactory2 {
    private eventManager;
    private ngZone;
    private document;
    private sharedStylesHost;
    private rendererByCompId;
    private defaultRenderer;
    private schema;
    constructor(eventManager: EventManager, ngZone: NgZone, document: any, sharedStylesHost: ɵSharedStylesHost);
    createRenderer(element: any, type: RendererType2 | null): Renderer2;
    begin(): void;
    end(): void;
}

export { }
