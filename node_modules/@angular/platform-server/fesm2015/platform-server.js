/**
 * @license Angular v9.1.12
 * (c) 2010-2020 Google LLC. https://angular.io/
 * License: MIT
 */

import { ɵsetRootDomAdapter, DOCUMENT, ɵgetDOM, ɵPLATFORM_SERVER_ID, PlatformLocation, ViewportScroller, ɵNullViewportScroller } from '@angular/common';
import { Injectable, Inject, Injector, InjectionToken, Optional, ViewEncapsulation, NgZone, PLATFORM_ID, PLATFORM_INITIALIZER, ɵALLOW_MULTIPLE_PLATFORMS, RendererFactory2, NgModule, Testability, ɵsetDocument, createPlatformFactory, platformCore, APP_ID, ApplicationRef, ɵisPromise, Version } from '@angular/core';
import { ɵBrowserDomAdapter, ɵflattenStyles, EventManager, ɵSharedStylesHost, ɵNAMESPACE_URIS, ɵshimContentAttribute, ɵshimHostAttribute, ɵTRANSITION_ID, EVENT_MANAGER_PLUGINS, BrowserModule, ɵescapeHtml, TransferState } from '@angular/platform-browser';
import { ɵAnimationEngine } from '@angular/animations/browser';
import { ɵHttpInterceptingHandler, XhrFactory, HttpHandler, HttpBackend, HttpClientModule } from '@angular/common/http';
import { ɵplatformCoreDynamic } from '@angular/platform-browser-dynamic';
import { ɵAnimationRendererFactory, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Observable, Subject } from 'rxjs';
import { parse } from 'url';
import { DomElementSchemaRegistry } from '@angular/compiler';
import { first } from 'rxjs/operators';

/**
 * @fileoverview added by tsickle
 * Generated from: packages/platform-server/src/domino_adapter.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 * @type {?}
 */
const domino = require('domino');
/**
 * @param {?} methodName
 * @return {?}
 */
function _notImplemented(methodName) {
    return new Error('This method is not implemented in DominoAdapter: ' + methodName);
}
/**
 * @return {?}
 */
function setDomTypes() {
    // Make all Domino types available as types in the global env.
    Object.assign(global, domino.impl);
    ((/** @type {?} */ (global)))['KeyboardEvent'] = domino.impl.Event;
}
/**
 * Parses a document string to a Document object.
 * @param {?} html
 * @param {?=} url
 * @return {?}
 */
function parseDocument(html, url = '/') {
    /** @type {?} */
    let window = domino.createWindow(html, url);
    /** @type {?} */
    let doc = window.document;
    return doc;
}
/**
 * Serializes a document to string.
 * @param {?} doc
 * @return {?}
 */
function serializeDocument(doc) {
    return ((/** @type {?} */ (doc))).serialize();
}
/**
 * DOM Adapter for the server platform based on https://github.com/fgnass/domino.
 */
class DominoAdapter extends ɵBrowserDomAdapter {
    /**
     * @return {?}
     */
    static makeCurrent() {
        setDomTypes();
        ɵsetRootDomAdapter(new DominoAdapter());
    }
    /**
     * @param {?} error
     * @return {?}
     */
    log(error) {
        // tslint:disable-next-line:no-console
        console.log(error);
    }
    /**
     * @param {?} error
     * @return {?}
     */
    logGroup(error) {
        console.error(error);
    }
    /**
     * @return {?}
     */
    logGroupEnd() { }
    /**
     * @return {?}
     */
    supportsDOMEvents() {
        return false;
    }
    /**
     * @return {?}
     */
    createHtmlDocument() {
        return parseDocument('<html><head><title>fakeTitle</title></head><body></body></html>');
    }
    /**
     * @return {?}
     */
    getDefaultDocument() {
        if (!DominoAdapter.defaultDoc) {
            DominoAdapter.defaultDoc = domino.createDocument();
        }
        return DominoAdapter.defaultDoc;
    }
    /**
     * @param {?} node
     * @return {?}
     */
    isElementNode(node) {
        return node ? node.nodeType === DominoAdapter.defaultDoc.ELEMENT_NODE : false;
    }
    /**
     * @param {?} node
     * @return {?}
     */
    isShadowRoot(node) {
        return node.shadowRoot == node;
    }
    /**
     * @param {?} el
     * @param {?} name
     * @return {?}
     */
    getProperty(el, name) {
        if (name === 'href') {
            // Domino tries to resolve href-s which we do not want. Just return the
            // attribute value.
            return el.getAttribute('href');
        }
        else if (name === 'innerText') {
            // Domino does not support innerText. Just map it to textContent.
            return el.textContent;
        }
        return ((/** @type {?} */ (el)))[name];
    }
    /**
     * @param {?} doc
     * @param {?} target
     * @return {?}
     */
    getGlobalEventTarget(doc, target) {
        if (target === 'window') {
            return doc.defaultView;
        }
        if (target === 'document') {
            return doc;
        }
        if (target === 'body') {
            return doc.body;
        }
        return null;
    }
    /**
     * @param {?} doc
     * @return {?}
     */
    getBaseHref(doc) {
        /** @type {?} */
        const base = (/** @type {?} */ (doc.documentElement)).querySelector('base');
        /** @type {?} */
        let href = '';
        if (base) {
            href = (/** @type {?} */ (base.getAttribute('href')));
        }
        // TODO(alxhub): Need relative path logic from BrowserDomAdapter here?
        return href;
    }
    /**
     * @param {?} el
     * @param {?} evt
     * @return {?}
     */
    dispatchEvent(el, evt) {
        el.dispatchEvent(evt);
        // Dispatch the event to the window also.
        /** @type {?} */
        const doc = el.ownerDocument || el;
        /** @type {?} */
        const win = ((/** @type {?} */ (doc))).defaultView;
        if (win) {
            win.dispatchEvent(evt);
        }
    }
    /**
     * @return {?}
     */
    getHistory() {
        throw _notImplemented('getHistory');
    }
    /**
     * @return {?}
     */
    getLocation() {
        throw _notImplemented('getLocation');
    }
    /**
     * @return {?}
     */
    getUserAgent() {
        return 'Fake user agent';
    }
    /**
     * @return {?}
     */
    performanceNow() {
        return Date.now();
    }
    /**
     * @return {?}
     */
    supportsCookies() {
        return false;
    }
    /**
     * @param {?} name
     * @return {?}
     */
    getCookie(name) {
        throw _notImplemented('getCookie');
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    DominoAdapter.defaultDoc;
}

/**
 * @fileoverview added by tsickle
 * Generated from: packages/platform-server/src/platform_state.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Representation of the current platform state.
 *
 * \@publicApi
 */
class PlatformState {
    /**
     * @param {?} _doc
     */
    constructor(_doc) {
        this._doc = _doc;
    }
    /**
     * Renders the current state of the platform to string.
     * @return {?}
     */
    renderToString() {
        return serializeDocument(this._doc);
    }
    /**
     * Returns the current DOM state.
     * @return {?}
     */
    getDocument() {
        return this._doc;
    }
}
PlatformState.decorators = [
    { type: Injectable }
];
/** @nocollapse */
PlatformState.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    PlatformState.prototype._doc;
}

/**
 * @fileoverview added by tsickle
 * Generated from: packages/platform-server/src/http.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** @type {?} */
const xhr2 = require('xhr2');
class ServerXhr {
    /**
     * @return {?}
     */
    build() {
        return new xhr2.XMLHttpRequest();
    }
}
ServerXhr.decorators = [
    { type: Injectable }
];
/**
 * @abstract
 * @template S, R
 */
class ZoneMacroTaskWrapper {
    /**
     * @param {?} request
     * @return {?}
     */
    wrap(request) {
        return new Observable((/**
         * @param {?} observer
         * @return {?}
         */
        (observer) => {
            /** @type {?} */
            let task = (/** @type {?} */ (null));
            /** @type {?} */
            let scheduled = false;
            /** @type {?} */
            let sub = null;
            /** @type {?} */
            let savedResult = null;
            /** @type {?} */
            let savedError = null;
            /** @type {?} */
            const scheduleTask = (/**
             * @param {?} _task
             * @return {?}
             */
            (_task) => {
                task = _task;
                scheduled = true;
                /** @type {?} */
                const delegate = this.delegate(request);
                sub = delegate.subscribe((/**
                 * @param {?} res
                 * @return {?}
                 */
                res => savedResult = res), (/**
                 * @param {?} err
                 * @return {?}
                 */
                err => {
                    if (!scheduled) {
                        throw new Error('An http observable was completed twice. This shouldn\'t happen, please file a bug.');
                    }
                    savedError = err;
                    scheduled = false;
                    task.invoke();
                }), (/**
                 * @return {?}
                 */
                () => {
                    if (!scheduled) {
                        throw new Error('An http observable was completed twice. This shouldn\'t happen, please file a bug.');
                    }
                    scheduled = false;
                    task.invoke();
                }));
            });
            /** @type {?} */
            const cancelTask = (/**
             * @param {?} _task
             * @return {?}
             */
            (_task) => {
                if (!scheduled) {
                    return;
                }
                scheduled = false;
                if (sub) {
                    sub.unsubscribe();
                    sub = null;
                }
            });
            /** @type {?} */
            const onComplete = (/**
             * @return {?}
             */
            () => {
                if (savedError !== null) {
                    observer.error(savedError);
                }
                else {
                    observer.next(savedResult);
                    observer.complete();
                }
            });
            // MockBackend for Http is synchronous, which means that if scheduleTask is by
            // scheduleMacroTask, the request will hit MockBackend and the response will be
            // sent, causing task.invoke() to be called.
            /** @type {?} */
            const _task = Zone.current.scheduleMacroTask('ZoneMacroTaskWrapper.subscribe', onComplete, {}, (/**
             * @return {?}
             */
            () => null), cancelTask);
            scheduleTask(_task);
            return (/**
             * @return {?}
             */
            () => {
                if (scheduled && task) {
                    task.zone.cancelTask(task);
                    scheduled = false;
                }
                if (sub) {
                    sub.unsubscribe();
                    sub = null;
                }
            });
        }));
    }
}
if (false) {
    /**
     * @abstract
     * @protected
     * @param {?} request
     * @return {?}
     */
    ZoneMacroTaskWrapper.prototype.delegate = function (request) { };
}
class ZoneClientBackend extends ZoneMacroTaskWrapper {
    /**
     * @param {?} backend
     */
    constructor(backend) {
        super();
        this.backend = backend;
    }
    /**
     * @param {?} request
     * @return {?}
     */
    handle(request) {
        return this.wrap(request);
    }
    /**
     * @protected
     * @param {?} request
     * @return {?}
     */
    delegate(request) {
        return this.backend.handle(request);
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    ZoneClientBackend.prototype.backend;
}
/**
 * @param {?} backend
 * @param {?} injector
 * @return {?}
 */
function zoneWrappedInterceptingHandler(backend, injector) {
    /** @type {?} */
    const realBackend = new ɵHttpInterceptingHandler(backend, injector);
    return new ZoneClientBackend(realBackend);
}
/** @type {?} */
const SERVER_HTTP_PROVIDERS = [
    { provide: XhrFactory, useClass: ServerXhr },
    { provide: HttpHandler, useFactory: zoneWrappedInterceptingHandler, deps: [HttpBackend, Injector] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: packages/platform-server/src/tokens.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Config object passed to initialize the platform.
 *
 * \@publicApi
 * @record
 */
function PlatformConfig() { }
if (false) {
    /** @type {?|undefined} */
    PlatformConfig.prototype.document;
    /** @type {?|undefined} */
    PlatformConfig.prototype.url;
}
/**
 * The DI token for setting the initial config for the platform.
 *
 * \@publicApi
 * @type {?}
 */
const INITIAL_CONFIG = new InjectionToken('Server.INITIAL_CONFIG');
/**
 * A function that will be executed when calling `renderModuleFactory` or `renderModule` just
 * before current platform state is rendered to string.
 *
 * \@publicApi
 * @type {?}
 */
const BEFORE_APP_SERIALIZED = new InjectionToken('Server.RENDER_MODULE_HOOK');

/**
 * @fileoverview added by tsickle
 * Generated from: packages/platform-server/src/location.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} urlStr
 * @return {?}
 */
function parseUrl(urlStr) {
    /** @type {?} */
    const parsedUrl = parse(urlStr);
    return {
        hostname: parsedUrl.hostname || '',
        protocol: parsedUrl.protocol || '',
        port: parsedUrl.port || '',
        pathname: parsedUrl.pathname || '',
        search: parsedUrl.search || '',
        hash: parsedUrl.hash || '',
    };
}
/**
 * Server-side implementation of URL state. Implements `pathname`, `search`, and `hash`
 * but not the state stack.
 */
class ServerPlatformLocation {
    /**
     * @param {?} _doc
     * @param {?} _config
     */
    constructor(_doc, _config) {
        this._doc = _doc;
        this.href = '/';
        this.hostname = '/';
        this.protocol = '/';
        this.port = '/';
        this.pathname = '/';
        this.search = '';
        this.hash = '';
        this._hashUpdate = new Subject();
        /** @type {?} */
        const config = (/** @type {?} */ (_config));
        if (!!config && !!config.url) {
            /** @type {?} */
            const parsedUrl = parseUrl(config.url);
            this.hostname = parsedUrl.hostname;
            this.protocol = parsedUrl.protocol;
            this.port = parsedUrl.port;
            this.pathname = parsedUrl.pathname;
            this.search = parsedUrl.search;
            this.hash = parsedUrl.hash;
        }
    }
    /**
     * @return {?}
     */
    getBaseHrefFromDOM() {
        return (/** @type {?} */ (ɵgetDOM().getBaseHref(this._doc)));
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    onPopState(fn) {
        // No-op: a state stack is not implemented, so
        // no events will ever come.
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    onHashChange(fn) {
        this._hashUpdate.subscribe(fn);
    }
    /**
     * @return {?}
     */
    get url() {
        return `${this.pathname}${this.search}${this.hash}`;
    }
    /**
     * @private
     * @param {?} value
     * @param {?} oldUrl
     * @return {?}
     */
    setHash(value, oldUrl) {
        if (this.hash === value) {
            // Don't fire events if the hash has not changed.
            return;
        }
        ((/** @type {?} */ (this))).hash = value;
        /** @type {?} */
        const newUrl = this.url;
        scheduleMicroTask((/**
         * @return {?}
         */
        () => this._hashUpdate.next((/** @type {?} */ ({ type: 'hashchange', state: null, oldUrl, newUrl })))));
    }
    /**
     * @param {?} state
     * @param {?} title
     * @param {?} newUrl
     * @return {?}
     */
    replaceState(state, title, newUrl) {
        /** @type {?} */
        const oldUrl = this.url;
        /** @type {?} */
        const parsedUrl = parseUrl(newUrl);
        ((/** @type {?} */ (this))).pathname = parsedUrl.pathname;
        ((/** @type {?} */ (this))).search = parsedUrl.search;
        this.setHash(parsedUrl.hash, oldUrl);
    }
    /**
     * @param {?} state
     * @param {?} title
     * @param {?} newUrl
     * @return {?}
     */
    pushState(state, title, newUrl) {
        this.replaceState(state, title, newUrl);
    }
    /**
     * @return {?}
     */
    forward() {
        throw new Error('Not implemented');
    }
    /**
     * @return {?}
     */
    back() {
        throw new Error('Not implemented');
    }
    // History API isn't available on server, therefore return undefined
    /**
     * @return {?}
     */
    getState() {
        return undefined;
    }
}
ServerPlatformLocation.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ServerPlatformLocation.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [INITIAL_CONFIG,] }] }
];
if (false) {
    /** @type {?} */
    ServerPlatformLocation.prototype.href;
    /** @type {?} */
    ServerPlatformLocation.prototype.hostname;
    /** @type {?} */
    ServerPlatformLocation.prototype.protocol;
    /** @type {?} */
    ServerPlatformLocation.prototype.port;
    /** @type {?} */
    ServerPlatformLocation.prototype.pathname;
    /** @type {?} */
    ServerPlatformLocation.prototype.search;
    /** @type {?} */
    ServerPlatformLocation.prototype.hash;
    /**
     * @type {?}
     * @private
     */
    ServerPlatformLocation.prototype._hashUpdate;
    /**
     * @type {?}
     * @private
     */
    ServerPlatformLocation.prototype._doc;
}
/**
 * @param {?} fn
 * @return {?}
 */
function scheduleMicroTask(fn) {
    Zone.current.scheduleMicroTask('scheduleMicrotask', fn);
}

/**
 * @fileoverview added by tsickle
 * Generated from: packages/platform-server/src/server_events.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ServerEventManagerPlugin /* extends EventManagerPlugin which is private */ {
    /**
     * @param {?} doc
     */
    constructor(doc) {
        this.doc = doc;
    }
    // Handle all events on the server.
    /**
     * @param {?} eventName
     * @return {?}
     */
    supports(eventName) {
        return true;
    }
    /**
     * @param {?} element
     * @param {?} eventName
     * @param {?} handler
     * @return {?}
     */
    addEventListener(element, eventName, handler) {
        return ɵgetDOM().onAndCancel(element, eventName, handler);
    }
    /**
     * @param {?} element
     * @param {?} eventName
     * @param {?} handler
     * @return {?}
     */
    addGlobalEventListener(element, eventName, handler) {
        /** @type {?} */
        const target = ɵgetDOM().getGlobalEventTarget(this.doc, element);
        if (!target) {
            throw new Error(`Unsupported event target ${target} for event ${eventName}`);
        }
        return this.addEventListener(target, eventName, handler);
    }
}
ServerEventManagerPlugin.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ServerEventManagerPlugin.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    ServerEventManagerPlugin.prototype.doc;
}

/**
 * @fileoverview added by tsickle
 * Generated from: packages/platform-server/src/server_renderer.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const EMPTY_ARRAY = [];
/** @type {?} */
const DEFAULT_SCHEMA = new DomElementSchemaRegistry();
class ServerRendererFactory2 {
    /**
     * @param {?} eventManager
     * @param {?} ngZone
     * @param {?} document
     * @param {?} sharedStylesHost
     */
    constructor(eventManager, ngZone, document, sharedStylesHost) {
        this.eventManager = eventManager;
        this.ngZone = ngZone;
        this.document = document;
        this.sharedStylesHost = sharedStylesHost;
        this.rendererByCompId = new Map();
        this.schema = DEFAULT_SCHEMA;
        this.defaultRenderer = new DefaultServerRenderer2(eventManager, document, ngZone, this.schema);
    }
    /**
     * @param {?} element
     * @param {?} type
     * @return {?}
     */
    createRenderer(element, type) {
        if (!element || !type) {
            return this.defaultRenderer;
        }
        switch (type.encapsulation) {
            case ViewEncapsulation.Native:
            case ViewEncapsulation.Emulated: {
                /** @type {?} */
                let renderer = this.rendererByCompId.get(type.id);
                if (!renderer) {
                    renderer = new EmulatedEncapsulationServerRenderer2(this.eventManager, this.document, this.ngZone, this.sharedStylesHost, this.schema, type);
                    this.rendererByCompId.set(type.id, renderer);
                }
                ((/** @type {?} */ (renderer))).applyToHost(element);
                return renderer;
            }
            default: {
                if (!this.rendererByCompId.has(type.id)) {
                    /** @type {?} */
                    const styles = ɵflattenStyles(type.id, type.styles, []);
                    this.sharedStylesHost.addStyles(styles);
                    this.rendererByCompId.set(type.id, this.defaultRenderer);
                }
                return this.defaultRenderer;
            }
        }
    }
    /**
     * @return {?}
     */
    begin() { }
    /**
     * @return {?}
     */
    end() { }
}
ServerRendererFactory2.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ServerRendererFactory2.ctorParameters = () => [
    { type: EventManager },
    { type: NgZone },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: ɵSharedStylesHost }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    ServerRendererFactory2.prototype.rendererByCompId;
    /**
     * @type {?}
     * @private
     */
    ServerRendererFactory2.prototype.defaultRenderer;
    /**
     * @type {?}
     * @private
     */
    ServerRendererFactory2.prototype.schema;
    /**
     * @type {?}
     * @private
     */
    ServerRendererFactory2.prototype.eventManager;
    /**
     * @type {?}
     * @private
     */
    ServerRendererFactory2.prototype.ngZone;
    /**
     * @type {?}
     * @private
     */
    ServerRendererFactory2.prototype.document;
    /**
     * @type {?}
     * @private
     */
    ServerRendererFactory2.prototype.sharedStylesHost;
}
class DefaultServerRenderer2 {
    /**
     * @param {?} eventManager
     * @param {?} document
     * @param {?} ngZone
     * @param {?} schema
     */
    constructor(eventManager, document, ngZone, schema) {
        this.eventManager = eventManager;
        this.document = document;
        this.ngZone = ngZone;
        this.schema = schema;
        this.data = Object.create(null);
    }
    /**
     * @return {?}
     */
    destroy() { }
    /**
     * @param {?} name
     * @param {?=} namespace
     * @param {?=} debugInfo
     * @return {?}
     */
    createElement(name, namespace, debugInfo) {
        if (namespace) {
            /** @type {?} */
            const doc = this.document || ɵgetDOM().getDefaultDocument();
            // TODO(FW-811): Ivy may cause issues here because it's passing around
            // full URIs for namespaces, therefore this lookup will fail.
            return doc.createElementNS(ɵNAMESPACE_URIS[namespace], name);
        }
        return ɵgetDOM().createElement(name, this.document);
    }
    /**
     * @param {?} value
     * @param {?=} debugInfo
     * @return {?}
     */
    createComment(value, debugInfo) {
        return ɵgetDOM().getDefaultDocument().createComment(value);
    }
    /**
     * @param {?} value
     * @param {?=} debugInfo
     * @return {?}
     */
    createText(value, debugInfo) {
        /** @type {?} */
        const doc = ɵgetDOM().getDefaultDocument();
        return doc.createTextNode(value);
    }
    /**
     * @param {?} parent
     * @param {?} newChild
     * @return {?}
     */
    appendChild(parent, newChild) {
        parent.appendChild(newChild);
    }
    /**
     * @param {?} parent
     * @param {?} newChild
     * @param {?} refChild
     * @return {?}
     */
    insertBefore(parent, newChild, refChild) {
        if (parent) {
            parent.insertBefore(newChild, refChild);
        }
    }
    /**
     * @param {?} parent
     * @param {?} oldChild
     * @return {?}
     */
    removeChild(parent, oldChild) {
        if (parent) {
            parent.removeChild(oldChild);
        }
    }
    /**
     * @param {?} selectorOrNode
     * @param {?=} debugInfo
     * @return {?}
     */
    selectRootElement(selectorOrNode, debugInfo) {
        /** @type {?} */
        let el;
        if (typeof selectorOrNode === 'string') {
            el = this.document.querySelector(selectorOrNode);
            if (!el) {
                throw new Error(`The selector "${selectorOrNode}" did not match any elements`);
            }
        }
        else {
            el = selectorOrNode;
        }
        while (el.firstChild) {
            el.removeChild(el.firstChild);
        }
        return el;
    }
    /**
     * @param {?} node
     * @return {?}
     */
    parentNode(node) {
        return node.parentNode;
    }
    /**
     * @param {?} node
     * @return {?}
     */
    nextSibling(node) {
        return node.nextSibling;
    }
    /**
     * @param {?} el
     * @param {?} name
     * @param {?} value
     * @param {?=} namespace
     * @return {?}
     */
    setAttribute(el, name, value, namespace) {
        if (namespace) {
            // TODO(FW-811): Ivy may cause issues here because it's passing around
            // full URIs for namespaces, therefore this lookup will fail.
            el.setAttributeNS(ɵNAMESPACE_URIS[namespace], namespace + ':' + name, value);
        }
        else {
            el.setAttribute(name, value);
        }
    }
    /**
     * @param {?} el
     * @param {?} name
     * @param {?=} namespace
     * @return {?}
     */
    removeAttribute(el, name, namespace) {
        if (namespace) {
            // TODO(FW-811): Ivy may cause issues here because it's passing around
            // full URIs for namespaces, therefore this lookup will fail.
            el.removeAttributeNS(ɵNAMESPACE_URIS[namespace], name);
        }
        else {
            el.removeAttribute(name);
        }
    }
    /**
     * @param {?} el
     * @param {?} name
     * @return {?}
     */
    addClass(el, name) {
        el.classList.add(name);
    }
    /**
     * @param {?} el
     * @param {?} name
     * @return {?}
     */
    removeClass(el, name) {
        el.classList.remove(name);
    }
    /**
     * @param {?} el
     * @param {?} style
     * @param {?} value
     * @param {?} flags
     * @return {?}
     */
    setStyle(el, style, value, flags) {
        style = style.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
        /** @type {?} */
        const styleMap = _readStyleAttribute(el);
        styleMap[style] = value == null ? '' : value;
        _writeStyleAttribute(el, styleMap);
    }
    /**
     * @param {?} el
     * @param {?} style
     * @param {?} flags
     * @return {?}
     */
    removeStyle(el, style, flags) {
        // IE requires '' instead of null
        // see https://github.com/angular/angular/issues/7916
        this.setStyle(el, style, '', flags);
    }
    // The value was validated already as a property binding, against the property name.
    // To know this value is safe to use as an attribute, the security context of the
    // attribute with the given name is checked against that security context of the
    // property.
    /**
     * @private
     * @param {?} tagName
     * @param {?} propertyName
     * @return {?}
     */
    _isSafeToReflectProperty(tagName, propertyName) {
        return this.schema.securityContext(tagName, propertyName, true) ===
            this.schema.securityContext(tagName, propertyName, false);
    }
    /**
     * @param {?} el
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    setProperty(el, name, value) {
        checkNoSyntheticProp(name, 'property');
        if (name === 'innerText') {
            // Domino does not support innerText. Just map it to textContent.
            el.textContent = value;
        }
        ((/** @type {?} */ (el)))[name] = value;
        // Mirror property values for known HTML element properties in the attributes.
        // Skip `innerhtml` which is conservatively marked as an attribute for security
        // purposes but is not actually an attribute.
        /** @type {?} */
        const tagName = ((/** @type {?} */ (el.tagName))).toLowerCase();
        if (value != null && (typeof value === 'number' || typeof value == 'string') &&
            name.toLowerCase() !== 'innerhtml' && this.schema.hasElement(tagName, EMPTY_ARRAY) &&
            this.schema.hasProperty(tagName, name, EMPTY_ARRAY) &&
            this._isSafeToReflectProperty(tagName, name)) {
            this.setAttribute(el, name, value.toString());
        }
    }
    /**
     * @param {?} node
     * @param {?} value
     * @return {?}
     */
    setValue(node, value) {
        node.textContent = value;
    }
    /**
     * @param {?} target
     * @param {?} eventName
     * @param {?} callback
     * @return {?}
     */
    listen(target, eventName, callback) {
        checkNoSyntheticProp(eventName, 'listener');
        if (typeof target === 'string') {
            return (/** @type {?} */ (this.eventManager.addGlobalEventListener(target, eventName, this.decoratePreventDefault(callback))));
        }
        return (/** @type {?} */ ((/** @type {?} */ (this.eventManager.addEventListener(target, eventName, this.decoratePreventDefault(callback))))));
    }
    /**
     * @private
     * @param {?} eventHandler
     * @return {?}
     */
    decoratePreventDefault(eventHandler) {
        return (/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            // Ivy uses `Function` as a special token that allows us to unwrap the function
            // so that it can be invoked programmatically by `DebugNode.triggerEventHandler`.
            if (event === Function) {
                return eventHandler;
            }
            // Run the event handler inside the ngZone because event handlers are not patched
            // by Zone on the server. This is required only for tests.
            /** @type {?} */
            const allowDefaultBehavior = this.ngZone.runGuarded((/**
             * @return {?}
             */
            () => eventHandler(event)));
            if (allowDefaultBehavior === false) {
                event.preventDefault();
                event.returnValue = false;
            }
            return undefined;
        });
    }
}
if (false) {
    /** @type {?} */
    DefaultServerRenderer2.prototype.data;
    /** @type {?} */
    DefaultServerRenderer2.prototype.destroyNode;
    /**
     * @type {?}
     * @private
     */
    DefaultServerRenderer2.prototype.eventManager;
    /**
     * @type {?}
     * @protected
     */
    DefaultServerRenderer2.prototype.document;
    /**
     * @type {?}
     * @private
     */
    DefaultServerRenderer2.prototype.ngZone;
    /**
     * @type {?}
     * @private
     */
    DefaultServerRenderer2.prototype.schema;
}
/** @type {?} */
const AT_CHARCODE = '@'.charCodeAt(0);
/**
 * @param {?} name
 * @param {?} nameKind
 * @return {?}
 */
function checkNoSyntheticProp(name, nameKind) {
    if (name.charCodeAt(0) === AT_CHARCODE) {
        throw new Error(`Found the synthetic ${nameKind} ${name}. Please include either "BrowserAnimationsModule" or "NoopAnimationsModule" in your application.`);
    }
}
class EmulatedEncapsulationServerRenderer2 extends DefaultServerRenderer2 {
    /**
     * @param {?} eventManager
     * @param {?} document
     * @param {?} ngZone
     * @param {?} sharedStylesHost
     * @param {?} schema
     * @param {?} component
     */
    constructor(eventManager, document, ngZone, sharedStylesHost, schema, component) {
        super(eventManager, document, ngZone, schema);
        this.component = component;
        // Add a 's' prefix to style attributes to indicate server.
        /** @type {?} */
        const componentId = 's' + component.id;
        /** @type {?} */
        const styles = ɵflattenStyles(componentId, component.styles, []);
        sharedStylesHost.addStyles(styles);
        this.contentAttr = ɵshimContentAttribute(componentId);
        this.hostAttr = ɵshimHostAttribute(componentId);
    }
    /**
     * @param {?} element
     * @return {?}
     */
    applyToHost(element) {
        super.setAttribute(element, this.hostAttr, '');
    }
    /**
     * @param {?} parent
     * @param {?} name
     * @return {?}
     */
    createElement(parent, name) {
        /** @type {?} */
        const el = super.createElement(parent, name, this.document);
        super.setAttribute(el, this.contentAttr, '');
        return el;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    EmulatedEncapsulationServerRenderer2.prototype.contentAttr;
    /**
     * @type {?}
     * @private
     */
    EmulatedEncapsulationServerRenderer2.prototype.hostAttr;
    /**
     * @type {?}
     * @private
     */
    EmulatedEncapsulationServerRenderer2.prototype.component;
}
/**
 * @param {?} element
 * @return {?}
 */
function _readStyleAttribute(element) {
    /** @type {?} */
    const styleMap = {};
    /** @type {?} */
    const styleAttribute = element.getAttribute('style');
    if (styleAttribute) {
        /** @type {?} */
        const styleList = styleAttribute.split(/;+/g);
        for (let i = 0; i < styleList.length; i++) {
            /** @type {?} */
            const style = styleList[i].trim();
            if (style.length > 0) {
                /** @type {?} */
                const colonIndex = style.indexOf(':');
                if (colonIndex === -1) {
                    throw new Error(`Invalid CSS style: ${style}`);
                }
                /** @type {?} */
                const name = style.substr(0, colonIndex).trim();
                styleMap[name] = style.substr(colonIndex + 1).trim();
            }
        }
    }
    return styleMap;
}
/**
 * @param {?} element
 * @param {?} styleMap
 * @return {?}
 */
function _writeStyleAttribute(element, styleMap) {
    /** @type {?} */
    let styleAttrValue = '';
    for (const key in styleMap) {
        /** @type {?} */
        const newValue = styleMap[key];
        if (newValue != null) {
            styleAttrValue += key + ':' + styleMap[key] + ';';
        }
    }
    element.setAttribute('style', styleAttrValue);
}

/**
 * @fileoverview added by tsickle
 * Generated from: packages/platform-server/src/styles_host.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ServerStylesHost extends ɵSharedStylesHost {
    /**
     * @param {?} doc
     * @param {?} transitionId
     */
    constructor(doc, transitionId) {
        super();
        this.doc = doc;
        this.transitionId = transitionId;
        this.head = null;
        this.head = doc.getElementsByTagName('head')[0];
    }
    /**
     * @private
     * @param {?} style
     * @return {?}
     */
    _addStyle(style) {
        /** @type {?} */
        let adapter = ɵgetDOM();
        /** @type {?} */
        const el = adapter.createElement('style');
        el.textContent = style;
        if (!!this.transitionId) {
            el.setAttribute('ng-transition', this.transitionId);
        }
        this.head.appendChild(el);
    }
    /**
     * @param {?} additions
     * @return {?}
     */
    onStylesAdded(additions) {
        additions.forEach((/**
         * @param {?} style
         * @return {?}
         */
        style => this._addStyle(style)));
    }
}
ServerStylesHost.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ServerStylesHost.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: String, decorators: [{ type: Optional }, { type: Inject, args: [ɵTRANSITION_ID,] }] }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    ServerStylesHost.prototype.head;
    /**
     * @type {?}
     * @private
     */
    ServerStylesHost.prototype.doc;
    /**
     * @type {?}
     * @private
     */
    ServerStylesHost.prototype.transitionId;
}

/**
 * @fileoverview added by tsickle
 * Generated from: packages/platform-server/src/server.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} feature
 * @return {?}
 */
function notSupported(feature) {
    throw new Error(`platform-server does not support '${feature}'.`);
}
/** @type {?} */
const INTERNAL_SERVER_PLATFORM_PROVIDERS = [
    { provide: DOCUMENT, useFactory: _document, deps: [Injector] },
    { provide: PLATFORM_ID, useValue: ɵPLATFORM_SERVER_ID },
    { provide: PLATFORM_INITIALIZER, useFactory: initDominoAdapter, multi: true, deps: [Injector] }, {
        provide: PlatformLocation,
        useClass: ServerPlatformLocation,
        deps: [DOCUMENT, [Optional, INITIAL_CONFIG]]
    },
    { provide: PlatformState, deps: [DOCUMENT] },
    // Add special provider that allows multiple instances of platformServer* to be created.
    { provide: ɵALLOW_MULTIPLE_PLATFORMS, useValue: true }
];
/**
 * @param {?} injector
 * @return {?}
 */
function initDominoAdapter(injector) {
    return (/**
     * @return {?}
     */
    () => {
        DominoAdapter.makeCurrent();
    });
}
/**
 * @param {?} renderer
 * @param {?} engine
 * @param {?} zone
 * @return {?}
 */
function instantiateServerRendererFactory(renderer, engine, zone) {
    return new ɵAnimationRendererFactory(renderer, engine, zone);
}
/** @type {?} */
const SERVER_RENDER_PROVIDERS = [
    ServerRendererFactory2,
    {
        provide: RendererFactory2,
        useFactory: instantiateServerRendererFactory,
        deps: [ServerRendererFactory2, ɵAnimationEngine, NgZone]
    },
    ServerStylesHost,
    { provide: ɵSharedStylesHost, useExisting: ServerStylesHost },
    { provide: EVENT_MANAGER_PLUGINS, multi: true, useClass: ServerEventManagerPlugin },
];
/**
 * The ng module for the server.
 *
 * \@publicApi
 */
class ServerModule {
}
ServerModule.decorators = [
    { type: NgModule, args: [{
                exports: [BrowserModule],
                imports: [HttpClientModule, NoopAnimationsModule],
                providers: [
                    SERVER_RENDER_PROVIDERS,
                    SERVER_HTTP_PROVIDERS,
                    { provide: Testability, useValue: null },
                    { provide: ViewportScroller, useClass: ɵNullViewportScroller },
                ],
            },] }
];
/**
 * @param {?} injector
 * @return {?}
 */
function _document(injector) {
    /** @type {?} */
    let config = injector.get(INITIAL_CONFIG, null);
    /** @type {?} */
    const document = config && config.document ? parseDocument(config.document, config.url) :
        ɵgetDOM().createHtmlDocument();
    // Tell ivy about the global document
    ɵsetDocument(document);
    return document;
}
/**
 * \@publicApi
 * @type {?}
 */
const platformServer = createPlatformFactory(platformCore, 'server', INTERNAL_SERVER_PLATFORM_PROVIDERS);
/**
 * The server platform that supports the runtime compiler.
 *
 * \@publicApi
 * @type {?}
 */
const platformDynamicServer = createPlatformFactory(ɵplatformCoreDynamic, 'serverDynamic', INTERNAL_SERVER_PLATFORM_PROVIDERS);

/**
 * @fileoverview added by tsickle
 * Generated from: packages/platform-server/src/transfer_state.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} doc
 * @param {?} appId
 * @param {?} transferStore
 * @return {?}
 */
function serializeTransferStateFactory(doc, appId, transferStore) {
    return (/**
     * @return {?}
     */
    () => {
        /** @type {?} */
        const script = doc.createElement('script');
        script.id = appId + '-state';
        script.setAttribute('type', 'application/json');
        script.textContent = ɵescapeHtml(transferStore.toJson());
        doc.body.appendChild(script);
    });
}
/**
 * NgModule to install on the server side while using the `TransferState` to transfer state from
 * server to client.
 *
 * \@publicApi
 */
class ServerTransferStateModule {
}
ServerTransferStateModule.decorators = [
    { type: NgModule, args: [{
                providers: [
                    TransferState, {
                        provide: BEFORE_APP_SERIALIZED,
                        useFactory: serializeTransferStateFactory,
                        deps: [DOCUMENT, APP_ID, TransferState],
                        multi: true,
                    }
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: packages/platform-server/src/utils.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function PlatformOptions() { }
if (false) {
    /** @type {?|undefined} */
    PlatformOptions.prototype.document;
    /** @type {?|undefined} */
    PlatformOptions.prototype.url;
    /** @type {?|undefined} */
    PlatformOptions.prototype.extraProviders;
}
/**
 * @param {?} platformFactory
 * @param {?} options
 * @return {?}
 */
function _getPlatform(platformFactory, options) {
    /** @type {?} */
    const extraProviders = options.extraProviders ? options.extraProviders : [];
    return platformFactory([
        { provide: INITIAL_CONFIG, useValue: { document: options.document, url: options.url } },
        extraProviders
    ]);
}
/**
 * @template T
 * @param {?} platform
 * @param {?} moduleRefPromise
 * @return {?}
 */
function _render(platform, moduleRefPromise) {
    return moduleRefPromise.then((/**
     * @param {?} moduleRef
     * @return {?}
     */
    (moduleRef) => {
        /** @type {?} */
        const transitionId = moduleRef.injector.get(ɵTRANSITION_ID, null);
        if (!transitionId) {
            throw new Error(`renderModule[Factory]() requires the use of BrowserModule.withServerTransition() to ensure
the server-rendered app can be properly bootstrapped into a client app.`);
        }
        /** @type {?} */
        const applicationRef = moduleRef.injector.get(ApplicationRef);
        return applicationRef.isStable.pipe((first((/**
         * @param {?} isStable
         * @return {?}
         */
        (isStable) => isStable))))
            .toPromise()
            .then((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const platformState = platform.injector.get(PlatformState);
            /** @type {?} */
            const asyncPromises = [];
            // Run any BEFORE_APP_SERIALIZED callbacks just before rendering to string.
            /** @type {?} */
            const callbacks = moduleRef.injector.get(BEFORE_APP_SERIALIZED, null);
            if (callbacks) {
                for (const callback of callbacks) {
                    try {
                        /** @type {?} */
                        const callbackResult = callback();
                        if (ɵisPromise(callbackResult)) {
                            // TODO: in TS3.7, callbackResult is void.
                            asyncPromises.push((/** @type {?} */ (callbackResult)));
                        }
                    }
                    catch (e) {
                        // Ignore exceptions.
                        console.warn('Ignoring BEFORE_APP_SERIALIZED Exception: ', e);
                    }
                }
            }
            /** @type {?} */
            const complete = (/**
             * @return {?}
             */
            () => {
                /** @type {?} */
                const output = platformState.renderToString();
                platform.destroy();
                return output;
            });
            if (asyncPromises.length === 0) {
                return complete();
            }
            return Promise
                .all(asyncPromises.map((/**
             * @param {?} asyncPromise
             * @return {?}
             */
            asyncPromise => {
                return asyncPromise.catch((/**
                 * @param {?} e
                 * @return {?}
                 */
                e => {
                    console.warn('Ignoring BEFORE_APP_SERIALIZED Exception: ', e);
                }));
            })))
                .then(complete);
        }));
    }));
}
/**
 * Renders a Module to string.
 *
 * `document` is the full document HTML of the page to render, as a string.
 * `url` is the URL for the current render request.
 * `extraProviders` are the platform level providers for the current render request.
 *
 * Do not use this in a production server environment. Use pre-compiled {\@link NgModuleFactory} with
 * {\@link renderModuleFactory} instead.
 *
 * \@publicApi
 * @template T
 * @param {?} module
 * @param {?} options
 * @return {?}
 */
function renderModule(module, options) {
    /** @type {?} */
    const platform = _getPlatform(platformDynamicServer, options);
    return _render(platform, platform.bootstrapModule(module));
}
/**
 * Renders a {\@link NgModuleFactory} to string.
 *
 * `document` is the full document HTML of the page to render, as a string.
 * `url` is the URL for the current render request.
 * `extraProviders` are the platform level providers for the current render request.
 *
 * \@publicApi
 * @template T
 * @param {?} moduleFactory
 * @param {?} options
 * @return {?}
 */
function renderModuleFactory(moduleFactory, options) {
    /** @type {?} */
    const platform = _getPlatform(platformServer, options);
    return _render(platform, platform.bootstrapModuleFactory(moduleFactory));
}

/**
 * @fileoverview added by tsickle
 * Generated from: packages/platform-server/src/private_export.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: packages/platform-server/src/version.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@publicApi
 * @type {?}
 */
const VERSION = new Version('9.1.12');

/**
 * @fileoverview added by tsickle
 * Generated from: packages/platform-server/src/platform-server.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: packages/platform-server/public_api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: packages/platform-server/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Generated bundle index. Do not edit.
 */

export { BEFORE_APP_SERIALIZED, INITIAL_CONFIG, PlatformState, ServerModule, ServerTransferStateModule, VERSION, platformDynamicServer, platformServer, renderModule, renderModuleFactory, INTERNAL_SERVER_PLATFORM_PROVIDERS as ɵINTERNAL_SERVER_PLATFORM_PROVIDERS, SERVER_RENDER_PROVIDERS as ɵSERVER_RENDER_PROVIDERS, ServerRendererFactory2 as ɵServerRendererFactory2, instantiateServerRendererFactory as ɵangular_packages_platform_server_platform_server_a, serializeTransferStateFactory as ɵangular_packages_platform_server_platform_server_b, ServerStylesHost as ɵangular_packages_platform_server_platform_server_c, ServerEventManagerPlugin as ɵangular_packages_platform_server_platform_server_d, ServerXhr as ɵangular_packages_platform_server_platform_server_e, zoneWrappedInterceptingHandler as ɵangular_packages_platform_server_platform_server_f, SERVER_HTTP_PROVIDERS as ɵangular_packages_platform_server_platform_server_g };
//# sourceMappingURL=platform-server.js.map
