/**
 * @license Angular v9.1.12
 * (c) 2010-2020 Google LLC. https://angular.io/
 * License: MIT
 */

import { __extends, __decorate, __param, __metadata, __values } from 'tslib';
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
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var domino = require('domino');
function _notImplemented(methodName) {
    return new Error('This method is not implemented in DominoAdapter: ' + methodName);
}
function setDomTypes() {
    // Make all Domino types available as types in the global env.
    Object.assign(global, domino.impl);
    global['KeyboardEvent'] = domino.impl.Event;
}
/**
 * Parses a document string to a Document object.
 */
function parseDocument(html, url) {
    if (url === void 0) { url = '/'; }
    var window = domino.createWindow(html, url);
    var doc = window.document;
    return doc;
}
/**
 * Serializes a document to string.
 */
function serializeDocument(doc) {
    return doc.serialize();
}
/**
 * DOM Adapter for the server platform based on https://github.com/fgnass/domino.
 */
var DominoAdapter = /** @class */ (function (_super) {
    __extends(DominoAdapter, _super);
    function DominoAdapter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DominoAdapter.makeCurrent = function () {
        setDomTypes();
        ɵsetRootDomAdapter(new DominoAdapter());
    };
    DominoAdapter.prototype.log = function (error) {
        // tslint:disable-next-line:no-console
        console.log(error);
    };
    DominoAdapter.prototype.logGroup = function (error) {
        console.error(error);
    };
    DominoAdapter.prototype.logGroupEnd = function () { };
    DominoAdapter.prototype.supportsDOMEvents = function () {
        return false;
    };
    DominoAdapter.prototype.createHtmlDocument = function () {
        return parseDocument('<html><head><title>fakeTitle</title></head><body></body></html>');
    };
    DominoAdapter.prototype.getDefaultDocument = function () {
        if (!DominoAdapter.defaultDoc) {
            DominoAdapter.defaultDoc = domino.createDocument();
        }
        return DominoAdapter.defaultDoc;
    };
    DominoAdapter.prototype.isElementNode = function (node) {
        return node ? node.nodeType === DominoAdapter.defaultDoc.ELEMENT_NODE : false;
    };
    DominoAdapter.prototype.isShadowRoot = function (node) {
        return node.shadowRoot == node;
    };
    DominoAdapter.prototype.getProperty = function (el, name) {
        if (name === 'href') {
            // Domino tries to resolve href-s which we do not want. Just return the
            // attribute value.
            return el.getAttribute('href');
        }
        else if (name === 'innerText') {
            // Domino does not support innerText. Just map it to textContent.
            return el.textContent;
        }
        return el[name];
    };
    DominoAdapter.prototype.getGlobalEventTarget = function (doc, target) {
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
    };
    DominoAdapter.prototype.getBaseHref = function (doc) {
        var base = doc.documentElement.querySelector('base');
        var href = '';
        if (base) {
            href = base.getAttribute('href');
        }
        // TODO(alxhub): Need relative path logic from BrowserDomAdapter here?
        return href;
    };
    DominoAdapter.prototype.dispatchEvent = function (el, evt) {
        el.dispatchEvent(evt);
        // Dispatch the event to the window also.
        var doc = el.ownerDocument || el;
        var win = doc.defaultView;
        if (win) {
            win.dispatchEvent(evt);
        }
    };
    DominoAdapter.prototype.getHistory = function () {
        throw _notImplemented('getHistory');
    };
    DominoAdapter.prototype.getLocation = function () {
        throw _notImplemented('getLocation');
    };
    DominoAdapter.prototype.getUserAgent = function () {
        return 'Fake user agent';
    };
    DominoAdapter.prototype.performanceNow = function () {
        return Date.now();
    };
    DominoAdapter.prototype.supportsCookies = function () {
        return false;
    };
    DominoAdapter.prototype.getCookie = function (name) {
        throw _notImplemented('getCookie');
    };
    return DominoAdapter;
}(ɵBrowserDomAdapter));

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Representation of the current platform state.
 *
 * @publicApi
 */
var PlatformState = /** @class */ (function () {
    function PlatformState(_doc) {
        this._doc = _doc;
    }
    /**
     * Renders the current state of the platform to string.
     */
    PlatformState.prototype.renderToString = function () {
        return serializeDocument(this._doc);
    };
    /**
     * Returns the current DOM state.
     */
    PlatformState.prototype.getDocument = function () {
        return this._doc;
    };
    PlatformState = __decorate([
        Injectable(),
        __param(0, Inject(DOCUMENT)),
        __metadata("design:paramtypes", [Object])
    ], PlatformState);
    return PlatformState;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var xhr2 = require('xhr2');
var ServerXhr = /** @class */ (function () {
    function ServerXhr() {
    }
    ServerXhr.prototype.build = function () {
        return new xhr2.XMLHttpRequest();
    };
    ServerXhr = __decorate([
        Injectable()
    ], ServerXhr);
    return ServerXhr;
}());
var ZoneMacroTaskWrapper = /** @class */ (function () {
    function ZoneMacroTaskWrapper() {
    }
    ZoneMacroTaskWrapper.prototype.wrap = function (request) {
        var _this = this;
        return new Observable(function (observer) {
            var task = null;
            var scheduled = false;
            var sub = null;
            var savedResult = null;
            var savedError = null;
            var scheduleTask = function (_task) {
                task = _task;
                scheduled = true;
                var delegate = _this.delegate(request);
                sub = delegate.subscribe(function (res) { return savedResult = res; }, function (err) {
                    if (!scheduled) {
                        throw new Error('An http observable was completed twice. This shouldn\'t happen, please file a bug.');
                    }
                    savedError = err;
                    scheduled = false;
                    task.invoke();
                }, function () {
                    if (!scheduled) {
                        throw new Error('An http observable was completed twice. This shouldn\'t happen, please file a bug.');
                    }
                    scheduled = false;
                    task.invoke();
                });
            };
            var cancelTask = function (_task) {
                if (!scheduled) {
                    return;
                }
                scheduled = false;
                if (sub) {
                    sub.unsubscribe();
                    sub = null;
                }
            };
            var onComplete = function () {
                if (savedError !== null) {
                    observer.error(savedError);
                }
                else {
                    observer.next(savedResult);
                    observer.complete();
                }
            };
            // MockBackend for Http is synchronous, which means that if scheduleTask is by
            // scheduleMacroTask, the request will hit MockBackend and the response will be
            // sent, causing task.invoke() to be called.
            var _task = Zone.current.scheduleMacroTask('ZoneMacroTaskWrapper.subscribe', onComplete, {}, function () { return null; }, cancelTask);
            scheduleTask(_task);
            return function () {
                if (scheduled && task) {
                    task.zone.cancelTask(task);
                    scheduled = false;
                }
                if (sub) {
                    sub.unsubscribe();
                    sub = null;
                }
            };
        });
    };
    return ZoneMacroTaskWrapper;
}());
var ZoneClientBackend = /** @class */ (function (_super) {
    __extends(ZoneClientBackend, _super);
    function ZoneClientBackend(backend) {
        var _this = _super.call(this) || this;
        _this.backend = backend;
        return _this;
    }
    ZoneClientBackend.prototype.handle = function (request) {
        return this.wrap(request);
    };
    ZoneClientBackend.prototype.delegate = function (request) {
        return this.backend.handle(request);
    };
    return ZoneClientBackend;
}(ZoneMacroTaskWrapper));
function zoneWrappedInterceptingHandler(backend, injector) {
    var realBackend = new ɵHttpInterceptingHandler(backend, injector);
    return new ZoneClientBackend(realBackend);
}
var SERVER_HTTP_PROVIDERS = [
    { provide: XhrFactory, useClass: ServerXhr },
    { provide: HttpHandler, useFactory: zoneWrappedInterceptingHandler, deps: [HttpBackend, Injector] }
];

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * The DI token for setting the initial config for the platform.
 *
 * @publicApi
 */
var INITIAL_CONFIG = new InjectionToken('Server.INITIAL_CONFIG');
/**
 * A function that will be executed when calling `renderModuleFactory` or `renderModule` just
 * before current platform state is rendered to string.
 *
 * @publicApi
 */
var BEFORE_APP_SERIALIZED = new InjectionToken('Server.RENDER_MODULE_HOOK');

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function parseUrl(urlStr) {
    var parsedUrl = parse(urlStr);
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
var ServerPlatformLocation = /** @class */ (function () {
    function ServerPlatformLocation(_doc, _config) {
        this._doc = _doc;
        this.href = '/';
        this.hostname = '/';
        this.protocol = '/';
        this.port = '/';
        this.pathname = '/';
        this.search = '';
        this.hash = '';
        this._hashUpdate = new Subject();
        var config = _config;
        if (!!config && !!config.url) {
            var parsedUrl = parseUrl(config.url);
            this.hostname = parsedUrl.hostname;
            this.protocol = parsedUrl.protocol;
            this.port = parsedUrl.port;
            this.pathname = parsedUrl.pathname;
            this.search = parsedUrl.search;
            this.hash = parsedUrl.hash;
        }
    }
    ServerPlatformLocation.prototype.getBaseHrefFromDOM = function () {
        return ɵgetDOM().getBaseHref(this._doc);
    };
    ServerPlatformLocation.prototype.onPopState = function (fn) {
        // No-op: a state stack is not implemented, so
        // no events will ever come.
    };
    ServerPlatformLocation.prototype.onHashChange = function (fn) {
        this._hashUpdate.subscribe(fn);
    };
    Object.defineProperty(ServerPlatformLocation.prototype, "url", {
        get: function () {
            return "" + this.pathname + this.search + this.hash;
        },
        enumerable: true,
        configurable: true
    });
    ServerPlatformLocation.prototype.setHash = function (value, oldUrl) {
        var _this = this;
        if (this.hash === value) {
            // Don't fire events if the hash has not changed.
            return;
        }
        this.hash = value;
        var newUrl = this.url;
        scheduleMicroTask(function () { return _this._hashUpdate.next({ type: 'hashchange', state: null, oldUrl: oldUrl, newUrl: newUrl }); });
    };
    ServerPlatformLocation.prototype.replaceState = function (state, title, newUrl) {
        var oldUrl = this.url;
        var parsedUrl = parseUrl(newUrl);
        this.pathname = parsedUrl.pathname;
        this.search = parsedUrl.search;
        this.setHash(parsedUrl.hash, oldUrl);
    };
    ServerPlatformLocation.prototype.pushState = function (state, title, newUrl) {
        this.replaceState(state, title, newUrl);
    };
    ServerPlatformLocation.prototype.forward = function () {
        throw new Error('Not implemented');
    };
    ServerPlatformLocation.prototype.back = function () {
        throw new Error('Not implemented');
    };
    // History API isn't available on server, therefore return undefined
    ServerPlatformLocation.prototype.getState = function () {
        return undefined;
    };
    ServerPlatformLocation = __decorate([
        Injectable(),
        __param(0, Inject(DOCUMENT)), __param(1, Optional()), __param(1, Inject(INITIAL_CONFIG)),
        __metadata("design:paramtypes", [Object, Object])
    ], ServerPlatformLocation);
    return ServerPlatformLocation;
}());
function scheduleMicroTask(fn) {
    Zone.current.scheduleMicroTask('scheduleMicrotask', fn);
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var ServerEventManagerPlugin = /** @class */ (function () {
    function ServerEventManagerPlugin(doc) {
        this.doc = doc;
    }
    // Handle all events on the server.
    ServerEventManagerPlugin.prototype.supports = function (eventName) {
        return true;
    };
    ServerEventManagerPlugin.prototype.addEventListener = function (element, eventName, handler) {
        return ɵgetDOM().onAndCancel(element, eventName, handler);
    };
    ServerEventManagerPlugin.prototype.addGlobalEventListener = function (element, eventName, handler) {
        var target = ɵgetDOM().getGlobalEventTarget(this.doc, element);
        if (!target) {
            throw new Error("Unsupported event target " + target + " for event " + eventName);
        }
        return this.addEventListener(target, eventName, handler);
    };
    ServerEventManagerPlugin = __decorate([
        Injectable(),
        __param(0, Inject(DOCUMENT)),
        __metadata("design:paramtypes", [Object])
    ], ServerEventManagerPlugin);
    return ServerEventManagerPlugin;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var EMPTY_ARRAY = [];
var DEFAULT_SCHEMA = new DomElementSchemaRegistry();
var ServerRendererFactory2 = /** @class */ (function () {
    function ServerRendererFactory2(eventManager, ngZone, document, sharedStylesHost) {
        this.eventManager = eventManager;
        this.ngZone = ngZone;
        this.document = document;
        this.sharedStylesHost = sharedStylesHost;
        this.rendererByCompId = new Map();
        this.schema = DEFAULT_SCHEMA;
        this.defaultRenderer = new DefaultServerRenderer2(eventManager, document, ngZone, this.schema);
    }
    ServerRendererFactory2.prototype.createRenderer = function (element, type) {
        if (!element || !type) {
            return this.defaultRenderer;
        }
        switch (type.encapsulation) {
            case ViewEncapsulation.Native:
            case ViewEncapsulation.Emulated: {
                var renderer = this.rendererByCompId.get(type.id);
                if (!renderer) {
                    renderer = new EmulatedEncapsulationServerRenderer2(this.eventManager, this.document, this.ngZone, this.sharedStylesHost, this.schema, type);
                    this.rendererByCompId.set(type.id, renderer);
                }
                renderer.applyToHost(element);
                return renderer;
            }
            default: {
                if (!this.rendererByCompId.has(type.id)) {
                    var styles = ɵflattenStyles(type.id, type.styles, []);
                    this.sharedStylesHost.addStyles(styles);
                    this.rendererByCompId.set(type.id, this.defaultRenderer);
                }
                return this.defaultRenderer;
            }
        }
    };
    ServerRendererFactory2.prototype.begin = function () { };
    ServerRendererFactory2.prototype.end = function () { };
    ServerRendererFactory2 = __decorate([
        Injectable(),
        __param(2, Inject(DOCUMENT)),
        __metadata("design:paramtypes", [EventManager, NgZone, Object, ɵSharedStylesHost])
    ], ServerRendererFactory2);
    return ServerRendererFactory2;
}());
var DefaultServerRenderer2 = /** @class */ (function () {
    function DefaultServerRenderer2(eventManager, document, ngZone, schema) {
        this.eventManager = eventManager;
        this.document = document;
        this.ngZone = ngZone;
        this.schema = schema;
        this.data = Object.create(null);
    }
    DefaultServerRenderer2.prototype.destroy = function () { };
    DefaultServerRenderer2.prototype.createElement = function (name, namespace, debugInfo) {
        if (namespace) {
            var doc = this.document || ɵgetDOM().getDefaultDocument();
            // TODO(FW-811): Ivy may cause issues here because it's passing around
            // full URIs for namespaces, therefore this lookup will fail.
            return doc.createElementNS(ɵNAMESPACE_URIS[namespace], name);
        }
        return ɵgetDOM().createElement(name, this.document);
    };
    DefaultServerRenderer2.prototype.createComment = function (value, debugInfo) {
        return ɵgetDOM().getDefaultDocument().createComment(value);
    };
    DefaultServerRenderer2.prototype.createText = function (value, debugInfo) {
        var doc = ɵgetDOM().getDefaultDocument();
        return doc.createTextNode(value);
    };
    DefaultServerRenderer2.prototype.appendChild = function (parent, newChild) {
        parent.appendChild(newChild);
    };
    DefaultServerRenderer2.prototype.insertBefore = function (parent, newChild, refChild) {
        if (parent) {
            parent.insertBefore(newChild, refChild);
        }
    };
    DefaultServerRenderer2.prototype.removeChild = function (parent, oldChild) {
        if (parent) {
            parent.removeChild(oldChild);
        }
    };
    DefaultServerRenderer2.prototype.selectRootElement = function (selectorOrNode, debugInfo) {
        var el;
        if (typeof selectorOrNode === 'string') {
            el = this.document.querySelector(selectorOrNode);
            if (!el) {
                throw new Error("The selector \"" + selectorOrNode + "\" did not match any elements");
            }
        }
        else {
            el = selectorOrNode;
        }
        while (el.firstChild) {
            el.removeChild(el.firstChild);
        }
        return el;
    };
    DefaultServerRenderer2.prototype.parentNode = function (node) {
        return node.parentNode;
    };
    DefaultServerRenderer2.prototype.nextSibling = function (node) {
        return node.nextSibling;
    };
    DefaultServerRenderer2.prototype.setAttribute = function (el, name, value, namespace) {
        if (namespace) {
            // TODO(FW-811): Ivy may cause issues here because it's passing around
            // full URIs for namespaces, therefore this lookup will fail.
            el.setAttributeNS(ɵNAMESPACE_URIS[namespace], namespace + ':' + name, value);
        }
        else {
            el.setAttribute(name, value);
        }
    };
    DefaultServerRenderer2.prototype.removeAttribute = function (el, name, namespace) {
        if (namespace) {
            // TODO(FW-811): Ivy may cause issues here because it's passing around
            // full URIs for namespaces, therefore this lookup will fail.
            el.removeAttributeNS(ɵNAMESPACE_URIS[namespace], name);
        }
        else {
            el.removeAttribute(name);
        }
    };
    DefaultServerRenderer2.prototype.addClass = function (el, name) {
        el.classList.add(name);
    };
    DefaultServerRenderer2.prototype.removeClass = function (el, name) {
        el.classList.remove(name);
    };
    DefaultServerRenderer2.prototype.setStyle = function (el, style, value, flags) {
        style = style.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
        var styleMap = _readStyleAttribute(el);
        styleMap[style] = value == null ? '' : value;
        _writeStyleAttribute(el, styleMap);
    };
    DefaultServerRenderer2.prototype.removeStyle = function (el, style, flags) {
        // IE requires '' instead of null
        // see https://github.com/angular/angular/issues/7916
        this.setStyle(el, style, '', flags);
    };
    // The value was validated already as a property binding, against the property name.
    // To know this value is safe to use as an attribute, the security context of the
    // attribute with the given name is checked against that security context of the
    // property.
    DefaultServerRenderer2.prototype._isSafeToReflectProperty = function (tagName, propertyName) {
        return this.schema.securityContext(tagName, propertyName, true) ===
            this.schema.securityContext(tagName, propertyName, false);
    };
    DefaultServerRenderer2.prototype.setProperty = function (el, name, value) {
        checkNoSyntheticProp(name, 'property');
        if (name === 'innerText') {
            // Domino does not support innerText. Just map it to textContent.
            el.textContent = value;
        }
        el[name] = value;
        // Mirror property values for known HTML element properties in the attributes.
        // Skip `innerhtml` which is conservatively marked as an attribute for security
        // purposes but is not actually an attribute.
        var tagName = el.tagName.toLowerCase();
        if (value != null && (typeof value === 'number' || typeof value == 'string') &&
            name.toLowerCase() !== 'innerhtml' && this.schema.hasElement(tagName, EMPTY_ARRAY) &&
            this.schema.hasProperty(tagName, name, EMPTY_ARRAY) &&
            this._isSafeToReflectProperty(tagName, name)) {
            this.setAttribute(el, name, value.toString());
        }
    };
    DefaultServerRenderer2.prototype.setValue = function (node, value) {
        node.textContent = value;
    };
    DefaultServerRenderer2.prototype.listen = function (target, eventName, callback) {
        checkNoSyntheticProp(eventName, 'listener');
        if (typeof target === 'string') {
            return this.eventManager.addGlobalEventListener(target, eventName, this.decoratePreventDefault(callback));
        }
        return this.eventManager.addEventListener(target, eventName, this.decoratePreventDefault(callback));
    };
    DefaultServerRenderer2.prototype.decoratePreventDefault = function (eventHandler) {
        var _this = this;
        return function (event) {
            // Ivy uses `Function` as a special token that allows us to unwrap the function
            // so that it can be invoked programmatically by `DebugNode.triggerEventHandler`.
            if (event === Function) {
                return eventHandler;
            }
            // Run the event handler inside the ngZone because event handlers are not patched
            // by Zone on the server. This is required only for tests.
            var allowDefaultBehavior = _this.ngZone.runGuarded(function () { return eventHandler(event); });
            if (allowDefaultBehavior === false) {
                event.preventDefault();
                event.returnValue = false;
            }
            return undefined;
        };
    };
    return DefaultServerRenderer2;
}());
var AT_CHARCODE = '@'.charCodeAt(0);
function checkNoSyntheticProp(name, nameKind) {
    if (name.charCodeAt(0) === AT_CHARCODE) {
        throw new Error("Found the synthetic " + nameKind + " " + name + ". Please include either \"BrowserAnimationsModule\" or \"NoopAnimationsModule\" in your application.");
    }
}
var EmulatedEncapsulationServerRenderer2 = /** @class */ (function (_super) {
    __extends(EmulatedEncapsulationServerRenderer2, _super);
    function EmulatedEncapsulationServerRenderer2(eventManager, document, ngZone, sharedStylesHost, schema, component) {
        var _this = _super.call(this, eventManager, document, ngZone, schema) || this;
        _this.component = component;
        // Add a 's' prefix to style attributes to indicate server.
        var componentId = 's' + component.id;
        var styles = ɵflattenStyles(componentId, component.styles, []);
        sharedStylesHost.addStyles(styles);
        _this.contentAttr = ɵshimContentAttribute(componentId);
        _this.hostAttr = ɵshimHostAttribute(componentId);
        return _this;
    }
    EmulatedEncapsulationServerRenderer2.prototype.applyToHost = function (element) {
        _super.prototype.setAttribute.call(this, element, this.hostAttr, '');
    };
    EmulatedEncapsulationServerRenderer2.prototype.createElement = function (parent, name) {
        var el = _super.prototype.createElement.call(this, parent, name, this.document);
        _super.prototype.setAttribute.call(this, el, this.contentAttr, '');
        return el;
    };
    return EmulatedEncapsulationServerRenderer2;
}(DefaultServerRenderer2));
function _readStyleAttribute(element) {
    var styleMap = {};
    var styleAttribute = element.getAttribute('style');
    if (styleAttribute) {
        var styleList = styleAttribute.split(/;+/g);
        for (var i = 0; i < styleList.length; i++) {
            var style = styleList[i].trim();
            if (style.length > 0) {
                var colonIndex = style.indexOf(':');
                if (colonIndex === -1) {
                    throw new Error("Invalid CSS style: " + style);
                }
                var name_1 = style.substr(0, colonIndex).trim();
                styleMap[name_1] = style.substr(colonIndex + 1).trim();
            }
        }
    }
    return styleMap;
}
function _writeStyleAttribute(element, styleMap) {
    var styleAttrValue = '';
    for (var key in styleMap) {
        var newValue = styleMap[key];
        if (newValue != null) {
            styleAttrValue += key + ':' + styleMap[key] + ';';
        }
    }
    element.setAttribute('style', styleAttrValue);
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var ServerStylesHost = /** @class */ (function (_super) {
    __extends(ServerStylesHost, _super);
    function ServerStylesHost(doc, transitionId) {
        var _this = _super.call(this) || this;
        _this.doc = doc;
        _this.transitionId = transitionId;
        _this.head = null;
        _this.head = doc.getElementsByTagName('head')[0];
        return _this;
    }
    ServerStylesHost.prototype._addStyle = function (style) {
        var adapter = ɵgetDOM();
        var el = adapter.createElement('style');
        el.textContent = style;
        if (!!this.transitionId) {
            el.setAttribute('ng-transition', this.transitionId);
        }
        this.head.appendChild(el);
    };
    ServerStylesHost.prototype.onStylesAdded = function (additions) {
        var _this = this;
        additions.forEach(function (style) { return _this._addStyle(style); });
    };
    ServerStylesHost = __decorate([
        Injectable(),
        __param(0, Inject(DOCUMENT)),
        __param(1, Optional()), __param(1, Inject(ɵTRANSITION_ID)),
        __metadata("design:paramtypes", [Object, String])
    ], ServerStylesHost);
    return ServerStylesHost;
}(ɵSharedStylesHost));

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function notSupported(feature) {
    throw new Error("platform-server does not support '" + feature + "'.");
}
var INTERNAL_SERVER_PLATFORM_PROVIDERS = [
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
function initDominoAdapter(injector) {
    return function () {
        DominoAdapter.makeCurrent();
    };
}
function instantiateServerRendererFactory(renderer, engine, zone) {
    return new ɵAnimationRendererFactory(renderer, engine, zone);
}
var SERVER_RENDER_PROVIDERS = [
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
 * @publicApi
 */
var ServerModule = /** @class */ (function () {
    function ServerModule() {
    }
    ServerModule = __decorate([
        NgModule({
            exports: [BrowserModule],
            imports: [HttpClientModule, NoopAnimationsModule],
            providers: [
                SERVER_RENDER_PROVIDERS,
                SERVER_HTTP_PROVIDERS,
                { provide: Testability, useValue: null },
                { provide: ViewportScroller, useClass: ɵNullViewportScroller },
            ],
        })
    ], ServerModule);
    return ServerModule;
}());
function _document(injector) {
    var config = injector.get(INITIAL_CONFIG, null);
    var document = config && config.document ? parseDocument(config.document, config.url) :
        ɵgetDOM().createHtmlDocument();
    // Tell ivy about the global document
    ɵsetDocument(document);
    return document;
}
/**
 * @publicApi
 */
var platformServer = createPlatformFactory(platformCore, 'server', INTERNAL_SERVER_PLATFORM_PROVIDERS);
/**
 * The server platform that supports the runtime compiler.
 *
 * @publicApi
 */
var platformDynamicServer = createPlatformFactory(ɵplatformCoreDynamic, 'serverDynamic', INTERNAL_SERVER_PLATFORM_PROVIDERS);

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function serializeTransferStateFactory(doc, appId, transferStore) {
    return function () {
        var script = doc.createElement('script');
        script.id = appId + '-state';
        script.setAttribute('type', 'application/json');
        script.textContent = ɵescapeHtml(transferStore.toJson());
        doc.body.appendChild(script);
    };
}
/**
 * NgModule to install on the server side while using the `TransferState` to transfer state from
 * server to client.
 *
 * @publicApi
 */
var ServerTransferStateModule = /** @class */ (function () {
    function ServerTransferStateModule() {
    }
    ServerTransferStateModule = __decorate([
        NgModule({
            providers: [
                TransferState, {
                    provide: BEFORE_APP_SERIALIZED,
                    useFactory: serializeTransferStateFactory,
                    deps: [DOCUMENT, APP_ID, TransferState],
                    multi: true,
                }
            ]
        })
    ], ServerTransferStateModule);
    return ServerTransferStateModule;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function _getPlatform(platformFactory, options) {
    var extraProviders = options.extraProviders ? options.extraProviders : [];
    return platformFactory([
        { provide: INITIAL_CONFIG, useValue: { document: options.document, url: options.url } },
        extraProviders
    ]);
}
function _render(platform, moduleRefPromise) {
    return moduleRefPromise.then(function (moduleRef) {
        var transitionId = moduleRef.injector.get(ɵTRANSITION_ID, null);
        if (!transitionId) {
            throw new Error("renderModule[Factory]() requires the use of BrowserModule.withServerTransition() to ensure\nthe server-rendered app can be properly bootstrapped into a client app.");
        }
        var applicationRef = moduleRef.injector.get(ApplicationRef);
        return applicationRef.isStable.pipe((first(function (isStable) { return isStable; })))
            .toPromise()
            .then(function () {
            var e_1, _a;
            var platformState = platform.injector.get(PlatformState);
            var asyncPromises = [];
            // Run any BEFORE_APP_SERIALIZED callbacks just before rendering to string.
            var callbacks = moduleRef.injector.get(BEFORE_APP_SERIALIZED, null);
            if (callbacks) {
                try {
                    for (var callbacks_1 = __values(callbacks), callbacks_1_1 = callbacks_1.next(); !callbacks_1_1.done; callbacks_1_1 = callbacks_1.next()) {
                        var callback = callbacks_1_1.value;
                        try {
                            var callbackResult = callback();
                            if (ɵisPromise(callbackResult)) {
                                // TODO: in TS3.7, callbackResult is void.
                                asyncPromises.push(callbackResult);
                            }
                        }
                        catch (e) {
                            // Ignore exceptions.
                            console.warn('Ignoring BEFORE_APP_SERIALIZED Exception: ', e);
                        }
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (callbacks_1_1 && !callbacks_1_1.done && (_a = callbacks_1.return)) _a.call(callbacks_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            }
            var complete = function () {
                var output = platformState.renderToString();
                platform.destroy();
                return output;
            };
            if (asyncPromises.length === 0) {
                return complete();
            }
            return Promise
                .all(asyncPromises.map(function (asyncPromise) {
                return asyncPromise.catch(function (e) {
                    console.warn('Ignoring BEFORE_APP_SERIALIZED Exception: ', e);
                });
            }))
                .then(complete);
        });
    });
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
function renderModule(module, options) {
    var platform = _getPlatform(platformDynamicServer, options);
    return _render(platform, platform.bootstrapModule(module));
}
/**
 * Renders a {@link NgModuleFactory} to string.
 *
 * `document` is the full document HTML of the page to render, as a string.
 * `url` is the URL for the current render request.
 * `extraProviders` are the platform level providers for the current render request.
 *
 * @publicApi
 */
function renderModuleFactory(moduleFactory, options) {
    var platform = _getPlatform(platformServer, options);
    return _render(platform, platform.bootstrapModuleFactory(moduleFactory));
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @publicApi
 */
var VERSION = new Version('9.1.12');

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// This file only reexports content of the `src` folder. Keep it that way.

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */

export { BEFORE_APP_SERIALIZED, INITIAL_CONFIG, PlatformState, ServerModule, ServerTransferStateModule, VERSION, platformDynamicServer, platformServer, renderModule, renderModuleFactory, INTERNAL_SERVER_PLATFORM_PROVIDERS as ɵINTERNAL_SERVER_PLATFORM_PROVIDERS, SERVER_RENDER_PROVIDERS as ɵSERVER_RENDER_PROVIDERS, ServerRendererFactory2 as ɵServerRendererFactory2, instantiateServerRendererFactory as ɵangular_packages_platform_server_platform_server_a, serializeTransferStateFactory as ɵangular_packages_platform_server_platform_server_b, ServerStylesHost as ɵangular_packages_platform_server_platform_server_c, ServerEventManagerPlugin as ɵangular_packages_platform_server_platform_server_d, ServerXhr as ɵangular_packages_platform_server_platform_server_e, zoneWrappedInterceptingHandler as ɵangular_packages_platform_server_platform_server_f, SERVER_HTTP_PROVIDERS as ɵangular_packages_platform_server_platform_server_g };
//# sourceMappingURL=platform-server.js.map
