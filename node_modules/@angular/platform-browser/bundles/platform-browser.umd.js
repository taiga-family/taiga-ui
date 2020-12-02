/**
 * @license Angular v9.1.12
 * (c) 2010-2020 Google LLC. https://angular.io/
 * License: MIT
 */

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('@angular/platform-browser', ['exports', '@angular/common', '@angular/core'], factory) :
    (global = global || self, factory((global.ng = global.ng || {}, global.ng.platformBrowser = {}), global.ng.common, global.ng.core));
}(this, (function (exports, common, i0) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * Provides DOM operations in any browser environment.
     *
     * @security Tread carefully! Interacting with the DOM directly is dangerous and
     * can introduce XSS risks.
     */
    var GenericBrowserDomAdapter = /** @class */ (function (_super) {
        __extends(GenericBrowserDomAdapter, _super);
        function GenericBrowserDomAdapter() {
            return _super.call(this) || this;
        }
        GenericBrowserDomAdapter.prototype.supportsDOMEvents = function () {
            return true;
        };
        return GenericBrowserDomAdapter;
    }(common.ɵDomAdapter));

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var ɵ0 = function () {
        if (i0.ɵglobal['Node']) {
            return i0.ɵglobal['Node'].prototype.contains || function (node) {
                return !!(this.compareDocumentPosition(node) & 16);
            };
        }
        return undefined;
    };
    var nodeContains = (ɵ0)();
    /**
     * A `DomAdapter` powered by full browser DOM APIs.
     *
     * @security Tread carefully! Interacting with the DOM directly is dangerous and
     * can introduce XSS risks.
     */
    /* tslint:disable:requireParameterType no-console */
    var BrowserDomAdapter = /** @class */ (function (_super) {
        __extends(BrowserDomAdapter, _super);
        function BrowserDomAdapter() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        BrowserDomAdapter.makeCurrent = function () {
            common.ɵsetRootDomAdapter(new BrowserDomAdapter());
        };
        BrowserDomAdapter.prototype.getProperty = function (el, name) {
            return el[name];
        };
        BrowserDomAdapter.prototype.log = function (error) {
            if (window.console) {
                window.console.log && window.console.log(error);
            }
        };
        BrowserDomAdapter.prototype.logGroup = function (error) {
            if (window.console) {
                window.console.group && window.console.group(error);
            }
        };
        BrowserDomAdapter.prototype.logGroupEnd = function () {
            if (window.console) {
                window.console.groupEnd && window.console.groupEnd();
            }
        };
        BrowserDomAdapter.prototype.onAndCancel = function (el, evt, listener) {
            el.addEventListener(evt, listener, false);
            // Needed to follow Dart's subscription semantic, until fix of
            // https://code.google.com/p/dart/issues/detail?id=17406
            return function () {
                el.removeEventListener(evt, listener, false);
            };
        };
        BrowserDomAdapter.prototype.dispatchEvent = function (el, evt) {
            el.dispatchEvent(evt);
        };
        BrowserDomAdapter.prototype.remove = function (node) {
            if (node.parentNode) {
                node.parentNode.removeChild(node);
            }
            return node;
        };
        BrowserDomAdapter.prototype.getValue = function (el) {
            return el.value;
        };
        BrowserDomAdapter.prototype.createElement = function (tagName, doc) {
            doc = doc || this.getDefaultDocument();
            return doc.createElement(tagName);
        };
        BrowserDomAdapter.prototype.createHtmlDocument = function () {
            return document.implementation.createHTMLDocument('fakeTitle');
        };
        BrowserDomAdapter.prototype.getDefaultDocument = function () {
            return document;
        };
        BrowserDomAdapter.prototype.isElementNode = function (node) {
            return node.nodeType === Node.ELEMENT_NODE;
        };
        BrowserDomAdapter.prototype.isShadowRoot = function (node) {
            return node instanceof DocumentFragment;
        };
        BrowserDomAdapter.prototype.getGlobalEventTarget = function (doc, target) {
            if (target === 'window') {
                return window;
            }
            if (target === 'document') {
                return doc;
            }
            if (target === 'body') {
                return doc.body;
            }
            return null;
        };
        BrowserDomAdapter.prototype.getHistory = function () {
            return window.history;
        };
        BrowserDomAdapter.prototype.getLocation = function () {
            return window.location;
        };
        BrowserDomAdapter.prototype.getBaseHref = function (doc) {
            var href = getBaseElementHref();
            return href == null ? null : relativePath(href);
        };
        BrowserDomAdapter.prototype.resetBaseElement = function () {
            baseElement = null;
        };
        BrowserDomAdapter.prototype.getUserAgent = function () {
            return window.navigator.userAgent;
        };
        BrowserDomAdapter.prototype.performanceNow = function () {
            // performance.now() is not available in all browsers, see
            // http://caniuse.com/#search=performance.now
            return window.performance && window.performance.now ? window.performance.now() :
                new Date().getTime();
        };
        BrowserDomAdapter.prototype.supportsCookies = function () {
            return true;
        };
        BrowserDomAdapter.prototype.getCookie = function (name) {
            return common.ɵparseCookieValue(document.cookie, name);
        };
        return BrowserDomAdapter;
    }(GenericBrowserDomAdapter));
    var baseElement = null;
    function getBaseElementHref() {
        if (!baseElement) {
            baseElement = document.querySelector('base');
            if (!baseElement) {
                return null;
            }
        }
        return baseElement.getAttribute('href');
    }
    // based on urlUtils.js in AngularJS 1
    var urlParsingNode;
    function relativePath(url) {
        if (!urlParsingNode) {
            urlParsingNode = document.createElement('a');
        }
        urlParsingNode.setAttribute('href', url);
        return (urlParsingNode.pathname.charAt(0) === '/') ? urlParsingNode.pathname :
            '/' + urlParsingNode.pathname;
    }

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * An id that identifies a particular application being bootstrapped, that should
     * match across the client/server boundary.
     */
    var TRANSITION_ID = new i0.InjectionToken('TRANSITION_ID');
    function appInitializerFactory(transitionId, document, injector) {
        return function () {
            // Wait for all application initializers to be completed before removing the styles set by
            // the server.
            injector.get(i0.ApplicationInitStatus).donePromise.then(function () {
                var dom = common.ɵgetDOM();
                var styles = Array.prototype.slice.apply(document.querySelectorAll("style[ng-transition]"));
                styles.filter(function (el) { return el.getAttribute('ng-transition') === transitionId; })
                    .forEach(function (el) { return dom.remove(el); });
            });
        };
    }
    var SERVER_TRANSITION_PROVIDERS = [
        {
            provide: i0.APP_INITIALIZER,
            useFactory: appInitializerFactory,
            deps: [TRANSITION_ID, common.DOCUMENT, i0.Injector],
            multi: true
        },
    ];

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var BrowserGetTestability = /** @class */ (function () {
        function BrowserGetTestability() {
        }
        BrowserGetTestability.init = function () {
            i0.setTestabilityGetter(new BrowserGetTestability());
        };
        BrowserGetTestability.prototype.addToWindow = function (registry) {
            i0.ɵglobal['getAngularTestability'] = function (elem, findInAncestors) {
                if (findInAncestors === void 0) { findInAncestors = true; }
                var testability = registry.findTestabilityInTree(elem, findInAncestors);
                if (testability == null) {
                    throw new Error('Could not find testability for element.');
                }
                return testability;
            };
            i0.ɵglobal['getAllAngularTestabilities'] = function () { return registry.getAllTestabilities(); };
            i0.ɵglobal['getAllAngularRootElements'] = function () { return registry.getAllRootElements(); };
            var whenAllStable = function (callback /** TODO #9100 */) {
                var testabilities = i0.ɵglobal['getAllAngularTestabilities']();
                var count = testabilities.length;
                var didWork = false;
                var decrement = function (didWork_ /** TODO #9100 */) {
                    didWork = didWork || didWork_;
                    count--;
                    if (count == 0) {
                        callback(didWork);
                    }
                };
                testabilities.forEach(function (testability /** TODO #9100 */) {
                    testability.whenStable(decrement);
                });
            };
            if (!i0.ɵglobal['frameworkStabilizers']) {
                i0.ɵglobal['frameworkStabilizers'] = [];
            }
            i0.ɵglobal['frameworkStabilizers'].push(whenAllStable);
        };
        BrowserGetTestability.prototype.findTestabilityInTree = function (registry, elem, findInAncestors) {
            if (elem == null) {
                return null;
            }
            var t = registry.getTestability(elem);
            if (t != null) {
                return t;
            }
            else if (!findInAncestors) {
                return null;
            }
            if (common.ɵgetDOM().isShadowRoot(elem)) {
                return this.findTestabilityInTree(registry, elem.host, true);
            }
            return this.findTestabilityInTree(registry, elem.parentElement, true);
        };
        return BrowserGetTestability;
    }());

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var CAMEL_CASE_REGEXP = /([A-Z])/g;
    var DASH_CASE_REGEXP = /-([a-z])/g;
    function camelCaseToDashCase(input) {
        return input.replace(CAMEL_CASE_REGEXP, function () {
            var m = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                m[_i] = arguments[_i];
            }
            return '-' + m[1].toLowerCase();
        });
    }
    function dashCaseToCamelCase(input) {
        return input.replace(DASH_CASE_REGEXP, function () {
            var m = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                m[_i] = arguments[_i];
            }
            return m[1].toUpperCase();
        });
    }
    /**
     * Exports the value under a given `name` in the global property `ng`. For example `ng.probe` if
     * `name` is `'probe'`.
     * @param name Name under which it will be exported. Keep in mind this will be a property of the
     * global `ng` object.
     * @param value The value to export.
     */
    function exportNgVar(name, value) {
        if (typeof COMPILED === 'undefined' || !COMPILED) {
            // Note: we can't export `ng` when using closure enhanced optimization as:
            // - closure declares globals itself for minified names, which sometimes clobber our `ng` global
            // - we can't declare a closure extern as the namespace `ng` is already used within Google
            //   for typings for angularJS (via `goog.provide('ng....')`).
            var ng = i0.ɵglobal['ng'] = i0.ɵglobal['ng'] || {};
            ng[name] = value;
        }
    }

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var ɵ0$1 = function () { return ({
        'ApplicationRef': i0.ApplicationRef,
        'NgZone': i0.NgZone,
    }); };
    var CORE_TOKENS = (ɵ0$1)();
    var INSPECT_GLOBAL_NAME = 'probe';
    var CORE_TOKENS_GLOBAL_NAME = 'coreTokens';
    /**
     * Returns a {@link DebugElement} for the given native DOM element, or
     * null if the given native element does not have an Angular view associated
     * with it.
     */
    function inspectNativeElementR2(element) {
        return i0.ɵgetDebugNodeR2(element);
    }
    function _createNgProbeR2(coreTokens) {
        exportNgVar(INSPECT_GLOBAL_NAME, inspectNativeElementR2);
        exportNgVar(CORE_TOKENS_GLOBAL_NAME, __assign(__assign({}, CORE_TOKENS), _ngProbeTokensToMap(coreTokens || [])));
        return function () { return inspectNativeElementR2; };
    }
    function _ngProbeTokensToMap(tokens) {
        return tokens.reduce(function (prev, t) { return (prev[t.name] = t.token, prev); }, {});
    }
    /**
     * In Ivy, we don't support NgProbe because we have our own set of testing utilities
     * with more robust functionality.
     *
     * We shouldn't bring in NgProbe because it prevents DebugNode and friends from
     * tree-shaking properly.
     */
    var ELEMENT_PROBE_PROVIDERS__POST_R3__ = [];
    /**
     * Providers which support debugging Angular applications (e.g. via `ng.probe`).
     */
    var ELEMENT_PROBE_PROVIDERS__PRE_R3__ = [
        {
            provide: i0.APP_INITIALIZER,
            useFactory: _createNgProbeR2,
            deps: [
                [i0.NgProbeToken, new i0.Optional()],
            ],
            multi: true,
        },
    ];
    var ELEMENT_PROBE_PROVIDERS = ELEMENT_PROBE_PROVIDERS__PRE_R3__;

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * The injection token for the event-manager plug-in service.
     *
     * @publicApi
     */
    var EVENT_MANAGER_PLUGINS = new i0.InjectionToken('EventManagerPlugins');
    /**
     * An injectable service that provides event management for Angular
     * through a browser plug-in.
     *
     * @publicApi
     */
    var EventManager = /** @class */ (function () {
        /**
         * Initializes an instance of the event-manager service.
         */
        function EventManager(plugins, _zone) {
            var _this = this;
            this._zone = _zone;
            this._eventNameToPlugin = new Map();
            plugins.forEach(function (p) { return p.manager = _this; });
            this._plugins = plugins.slice().reverse();
        }
        /**
         * Registers a handler for a specific element and event.
         *
         * @param element The HTML element to receive event notifications.
         * @param eventName The name of the event to listen for.
         * @param handler A function to call when the notification occurs. Receives the
         * event object as an argument.
         * @returns  A callback function that can be used to remove the handler.
         */
        EventManager.prototype.addEventListener = function (element, eventName, handler) {
            var plugin = this._findPluginFor(eventName);
            return plugin.addEventListener(element, eventName, handler);
        };
        /**
         * Registers a global handler for an event in a target view.
         *
         * @param target A target for global event notifications. One of "window", "document", or "body".
         * @param eventName The name of the event to listen for.
         * @param handler A function to call when the notification occurs. Receives the
         * event object as an argument.
         * @returns A callback function that can be used to remove the handler.
         */
        EventManager.prototype.addGlobalEventListener = function (target, eventName, handler) {
            var plugin = this._findPluginFor(eventName);
            return plugin.addGlobalEventListener(target, eventName, handler);
        };
        /**
         * Retrieves the compilation zone in which event listeners are registered.
         */
        EventManager.prototype.getZone = function () {
            return this._zone;
        };
        /** @internal */
        EventManager.prototype._findPluginFor = function (eventName) {
            var plugin = this._eventNameToPlugin.get(eventName);
            if (plugin) {
                return plugin;
            }
            var plugins = this._plugins;
            for (var i = 0; i < plugins.length; i++) {
                var plugin_1 = plugins[i];
                if (plugin_1.supports(eventName)) {
                    this._eventNameToPlugin.set(eventName, plugin_1);
                    return plugin_1;
                }
            }
            throw new Error("No event manager plugin found for event " + eventName);
        };
        EventManager = __decorate([
            i0.Injectable(),
            __param(0, i0.Inject(EVENT_MANAGER_PLUGINS)),
            __metadata("design:paramtypes", [Array, i0.NgZone])
        ], EventManager);
        return EventManager;
    }());
    var EventManagerPlugin = /** @class */ (function () {
        function EventManagerPlugin(_doc) {
            this._doc = _doc;
        }
        EventManagerPlugin.prototype.addGlobalEventListener = function (element, eventName, handler) {
            var target = common.ɵgetDOM().getGlobalEventTarget(this._doc, element);
            if (!target) {
                throw new Error("Unsupported event target " + target + " for event " + eventName);
            }
            return this.addEventListener(target, eventName, handler);
        };
        return EventManagerPlugin;
    }());

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var SharedStylesHost = /** @class */ (function () {
        function SharedStylesHost() {
            /** @internal */
            this._stylesSet = new Set();
        }
        SharedStylesHost.prototype.addStyles = function (styles) {
            var _this = this;
            var additions = new Set();
            styles.forEach(function (style) {
                if (!_this._stylesSet.has(style)) {
                    _this._stylesSet.add(style);
                    additions.add(style);
                }
            });
            this.onStylesAdded(additions);
        };
        SharedStylesHost.prototype.onStylesAdded = function (additions) { };
        SharedStylesHost.prototype.getAllStyles = function () {
            return Array.from(this._stylesSet);
        };
        SharedStylesHost = __decorate([
            i0.Injectable()
        ], SharedStylesHost);
        return SharedStylesHost;
    }());
    var DomSharedStylesHost = /** @class */ (function (_super) {
        __extends(DomSharedStylesHost, _super);
        function DomSharedStylesHost(_doc) {
            var _this = _super.call(this) || this;
            _this._doc = _doc;
            _this._hostNodes = new Set();
            _this._styleNodes = new Set();
            _this._hostNodes.add(_doc.head);
            return _this;
        }
        DomSharedStylesHost.prototype._addStylesToHost = function (styles, host) {
            var _this = this;
            styles.forEach(function (style) {
                var styleEl = _this._doc.createElement('style');
                styleEl.textContent = style;
                _this._styleNodes.add(host.appendChild(styleEl));
            });
        };
        DomSharedStylesHost.prototype.addHost = function (hostNode) {
            this._addStylesToHost(this._stylesSet, hostNode);
            this._hostNodes.add(hostNode);
        };
        DomSharedStylesHost.prototype.removeHost = function (hostNode) {
            this._hostNodes.delete(hostNode);
        };
        DomSharedStylesHost.prototype.onStylesAdded = function (additions) {
            var _this = this;
            this._hostNodes.forEach(function (hostNode) { return _this._addStylesToHost(additions, hostNode); });
        };
        DomSharedStylesHost.prototype.ngOnDestroy = function () {
            this._styleNodes.forEach(function (styleNode) { return common.ɵgetDOM().remove(styleNode); });
        };
        DomSharedStylesHost = __decorate([
            i0.Injectable(),
            __param(0, i0.Inject(common.DOCUMENT)),
            __metadata("design:paramtypes", [Object])
        ], DomSharedStylesHost);
        return DomSharedStylesHost;
    }(SharedStylesHost));

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var NAMESPACE_URIS = {
        'svg': 'http://www.w3.org/2000/svg',
        'xhtml': 'http://www.w3.org/1999/xhtml',
        'xlink': 'http://www.w3.org/1999/xlink',
        'xml': 'http://www.w3.org/XML/1998/namespace',
        'xmlns': 'http://www.w3.org/2000/xmlns/',
    };
    var COMPONENT_REGEX = /%COMP%/g;
    var NG_DEV_MODE = typeof ngDevMode === 'undefined' || !!ngDevMode;
    var COMPONENT_VARIABLE = '%COMP%';
    var HOST_ATTR = "_nghost-" + COMPONENT_VARIABLE;
    var CONTENT_ATTR = "_ngcontent-" + COMPONENT_VARIABLE;
    function shimContentAttribute(componentShortId) {
        return CONTENT_ATTR.replace(COMPONENT_REGEX, componentShortId);
    }
    function shimHostAttribute(componentShortId) {
        return HOST_ATTR.replace(COMPONENT_REGEX, componentShortId);
    }
    function flattenStyles(compId, styles, target) {
        for (var i = 0; i < styles.length; i++) {
            var style = styles[i];
            if (Array.isArray(style)) {
                flattenStyles(compId, style, target);
            }
            else {
                style = style.replace(COMPONENT_REGEX, compId);
                target.push(style);
            }
        }
        return target;
    }
    function decoratePreventDefault(eventHandler) {
        // `DebugNode.triggerEventHandler` needs to know if the listener was created with
        // decoratePreventDefault or is a listener added outside the Angular context so it can handle the
        // two differently. In the first case, the special '__ngUnwrap__' token is passed to the unwrap
        // the listener (see below).
        return function (event) {
            // Ivy uses '__ngUnwrap__' as a special token that allows us to unwrap the function
            // so that it can be invoked programmatically by `DebugNode.triggerEventHandler`. The debug_node
            // can inspect the listener toString contents for the existence of this special token. Because
            // the token is a string literal, it is ensured to not be modified by compiled code.
            if (event === '__ngUnwrap__') {
                return eventHandler;
            }
            var allowDefaultBehavior = eventHandler(event);
            if (allowDefaultBehavior === false) {
                // TODO(tbosch): move preventDefault into event plugins...
                event.preventDefault();
                event.returnValue = false;
            }
            return undefined;
        };
    }
    var DomRendererFactory2 = /** @class */ (function () {
        function DomRendererFactory2(eventManager, sharedStylesHost, appId) {
            this.eventManager = eventManager;
            this.sharedStylesHost = sharedStylesHost;
            this.appId = appId;
            this.rendererByCompId = new Map();
            this.defaultRenderer = new DefaultDomRenderer2(eventManager);
        }
        DomRendererFactory2.prototype.createRenderer = function (element, type) {
            if (!element || !type) {
                return this.defaultRenderer;
            }
            switch (type.encapsulation) {
                case i0.ViewEncapsulation.Emulated: {
                    var renderer = this.rendererByCompId.get(type.id);
                    if (!renderer) {
                        renderer = new EmulatedEncapsulationDomRenderer2(this.eventManager, this.sharedStylesHost, type, this.appId);
                        this.rendererByCompId.set(type.id, renderer);
                    }
                    renderer.applyToHost(element);
                    return renderer;
                }
                case i0.ViewEncapsulation.Native:
                case i0.ViewEncapsulation.ShadowDom:
                    return new ShadowDomRenderer(this.eventManager, this.sharedStylesHost, element, type);
                default: {
                    if (!this.rendererByCompId.has(type.id)) {
                        var styles = flattenStyles(type.id, type.styles, []);
                        this.sharedStylesHost.addStyles(styles);
                        this.rendererByCompId.set(type.id, this.defaultRenderer);
                    }
                    return this.defaultRenderer;
                }
            }
        };
        DomRendererFactory2.prototype.begin = function () { };
        DomRendererFactory2.prototype.end = function () { };
        DomRendererFactory2 = __decorate([
            i0.Injectable(),
            __param(2, i0.Inject(i0.APP_ID)),
            __metadata("design:paramtypes", [EventManager, DomSharedStylesHost, String])
        ], DomRendererFactory2);
        return DomRendererFactory2;
    }());
    var DefaultDomRenderer2 = /** @class */ (function () {
        function DefaultDomRenderer2(eventManager) {
            this.eventManager = eventManager;
            this.data = Object.create(null);
        }
        DefaultDomRenderer2.prototype.destroy = function () { };
        DefaultDomRenderer2.prototype.createElement = function (name, namespace) {
            if (namespace) {
                // In cases where Ivy (not ViewEngine) is giving us the actual namespace, the look up by key
                // will result in undefined, so we just return the namespace here.
                return document.createElementNS(NAMESPACE_URIS[namespace] || namespace, name);
            }
            return document.createElement(name);
        };
        DefaultDomRenderer2.prototype.createComment = function (value) {
            return document.createComment(value);
        };
        DefaultDomRenderer2.prototype.createText = function (value) {
            return document.createTextNode(value);
        };
        DefaultDomRenderer2.prototype.appendChild = function (parent, newChild) {
            parent.appendChild(newChild);
        };
        DefaultDomRenderer2.prototype.insertBefore = function (parent, newChild, refChild) {
            if (parent) {
                parent.insertBefore(newChild, refChild);
            }
        };
        DefaultDomRenderer2.prototype.removeChild = function (parent, oldChild) {
            if (parent) {
                parent.removeChild(oldChild);
            }
        };
        DefaultDomRenderer2.prototype.selectRootElement = function (selectorOrNode, preserveContent) {
            var el = typeof selectorOrNode === 'string' ? document.querySelector(selectorOrNode) :
                selectorOrNode;
            if (!el) {
                throw new Error("The selector \"" + selectorOrNode + "\" did not match any elements");
            }
            if (!preserveContent) {
                el.textContent = '';
            }
            return el;
        };
        DefaultDomRenderer2.prototype.parentNode = function (node) {
            return node.parentNode;
        };
        DefaultDomRenderer2.prototype.nextSibling = function (node) {
            return node.nextSibling;
        };
        DefaultDomRenderer2.prototype.setAttribute = function (el, name, value, namespace) {
            if (namespace) {
                name = namespace + ':' + name;
                // TODO(FW-811): Ivy may cause issues here because it's passing around
                // full URIs for namespaces, therefore this lookup will fail.
                var namespaceUri = NAMESPACE_URIS[namespace];
                if (namespaceUri) {
                    el.setAttributeNS(namespaceUri, name, value);
                }
                else {
                    el.setAttribute(name, value);
                }
            }
            else {
                el.setAttribute(name, value);
            }
        };
        DefaultDomRenderer2.prototype.removeAttribute = function (el, name, namespace) {
            if (namespace) {
                // TODO(FW-811): Ivy may cause issues here because it's passing around
                // full URIs for namespaces, therefore this lookup will fail.
                var namespaceUri = NAMESPACE_URIS[namespace];
                if (namespaceUri) {
                    el.removeAttributeNS(namespaceUri, name);
                }
                else {
                    // TODO(FW-811): Since ivy is passing around full URIs for namespaces
                    // this could result in properties like `http://www.w3.org/2000/svg:cx="123"`,
                    // which is wrong.
                    el.removeAttribute(namespace + ":" + name);
                }
            }
            else {
                el.removeAttribute(name);
            }
        };
        DefaultDomRenderer2.prototype.addClass = function (el, name) {
            el.classList.add(name);
        };
        DefaultDomRenderer2.prototype.removeClass = function (el, name) {
            el.classList.remove(name);
        };
        DefaultDomRenderer2.prototype.setStyle = function (el, style, value, flags) {
            if (flags & i0.RendererStyleFlags2.DashCase) {
                el.style.setProperty(style, value, !!(flags & i0.RendererStyleFlags2.Important) ? 'important' : '');
            }
            else {
                el.style[style] = value;
            }
        };
        DefaultDomRenderer2.prototype.removeStyle = function (el, style, flags) {
            if (flags & i0.RendererStyleFlags2.DashCase) {
                el.style.removeProperty(style);
            }
            else {
                // IE requires '' instead of null
                // see https://github.com/angular/angular/issues/7916
                el.style[style] = '';
            }
        };
        DefaultDomRenderer2.prototype.setProperty = function (el, name, value) {
            NG_DEV_MODE && checkNoSyntheticProp(name, 'property');
            el[name] = value;
        };
        DefaultDomRenderer2.prototype.setValue = function (node, value) {
            node.nodeValue = value;
        };
        DefaultDomRenderer2.prototype.listen = function (target, event, callback) {
            NG_DEV_MODE && checkNoSyntheticProp(event, 'listener');
            if (typeof target === 'string') {
                return this.eventManager.addGlobalEventListener(target, event, decoratePreventDefault(callback));
            }
            return this.eventManager.addEventListener(target, event, decoratePreventDefault(callback));
        };
        return DefaultDomRenderer2;
    }());
    var ɵ0$2 = function () { return '@'.charCodeAt(0); };
    var AT_CHARCODE = (ɵ0$2)();
    function checkNoSyntheticProp(name, nameKind) {
        if (name.charCodeAt(0) === AT_CHARCODE) {
            throw new Error("Found the synthetic " + nameKind + " " + name + ". Please include either \"BrowserAnimationsModule\" or \"NoopAnimationsModule\" in your application.");
        }
    }
    var EmulatedEncapsulationDomRenderer2 = /** @class */ (function (_super) {
        __extends(EmulatedEncapsulationDomRenderer2, _super);
        function EmulatedEncapsulationDomRenderer2(eventManager, sharedStylesHost, component, appId) {
            var _this = _super.call(this, eventManager) || this;
            _this.component = component;
            var styles = flattenStyles(appId + '-' + component.id, component.styles, []);
            sharedStylesHost.addStyles(styles);
            _this.contentAttr = shimContentAttribute(appId + '-' + component.id);
            _this.hostAttr = shimHostAttribute(appId + '-' + component.id);
            return _this;
        }
        EmulatedEncapsulationDomRenderer2.prototype.applyToHost = function (element) {
            _super.prototype.setAttribute.call(this, element, this.hostAttr, '');
        };
        EmulatedEncapsulationDomRenderer2.prototype.createElement = function (parent, name) {
            var el = _super.prototype.createElement.call(this, parent, name);
            _super.prototype.setAttribute.call(this, el, this.contentAttr, '');
            return el;
        };
        return EmulatedEncapsulationDomRenderer2;
    }(DefaultDomRenderer2));
    var ShadowDomRenderer = /** @class */ (function (_super) {
        __extends(ShadowDomRenderer, _super);
        function ShadowDomRenderer(eventManager, sharedStylesHost, hostEl, component) {
            var _this = _super.call(this, eventManager) || this;
            _this.sharedStylesHost = sharedStylesHost;
            _this.hostEl = hostEl;
            _this.component = component;
            if (component.encapsulation === i0.ViewEncapsulation.ShadowDom) {
                _this.shadowRoot = hostEl.attachShadow({ mode: 'open' });
            }
            else {
                _this.shadowRoot = hostEl.createShadowRoot();
            }
            _this.sharedStylesHost.addHost(_this.shadowRoot);
            var styles = flattenStyles(component.id, component.styles, []);
            for (var i = 0; i < styles.length; i++) {
                var styleEl = document.createElement('style');
                styleEl.textContent = styles[i];
                _this.shadowRoot.appendChild(styleEl);
            }
            return _this;
        }
        ShadowDomRenderer.prototype.nodeOrShadowRoot = function (node) {
            return node === this.hostEl ? this.shadowRoot : node;
        };
        ShadowDomRenderer.prototype.destroy = function () {
            this.sharedStylesHost.removeHost(this.shadowRoot);
        };
        ShadowDomRenderer.prototype.appendChild = function (parent, newChild) {
            return _super.prototype.appendChild.call(this, this.nodeOrShadowRoot(parent), newChild);
        };
        ShadowDomRenderer.prototype.insertBefore = function (parent, newChild, refChild) {
            return _super.prototype.insertBefore.call(this, this.nodeOrShadowRoot(parent), newChild, refChild);
        };
        ShadowDomRenderer.prototype.removeChild = function (parent, oldChild) {
            return _super.prototype.removeChild.call(this, this.nodeOrShadowRoot(parent), oldChild);
        };
        ShadowDomRenderer.prototype.parentNode = function (node) {
            return this.nodeOrShadowRoot(_super.prototype.parentNode.call(this, this.nodeOrShadowRoot(node)));
        };
        return ShadowDomRenderer;
    }(DefaultDomRenderer2));

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var DomEventsPlugin = /** @class */ (function (_super) {
        __extends(DomEventsPlugin, _super);
        function DomEventsPlugin(doc) {
            return _super.call(this, doc) || this;
        }
        // This plugin should come last in the list of plugins, because it accepts all
        // events.
        DomEventsPlugin.prototype.supports = function (eventName) {
            return true;
        };
        DomEventsPlugin.prototype.addEventListener = function (element, eventName, handler) {
            var _this = this;
            element.addEventListener(eventName, handler, false);
            return function () { return _this.removeEventListener(element, eventName, handler); };
        };
        DomEventsPlugin.prototype.removeEventListener = function (target, eventName, callback) {
            return target.removeEventListener(eventName, callback);
        };
        DomEventsPlugin = __decorate([
            i0.Injectable(),
            __param(0, i0.Inject(common.DOCUMENT)),
            __metadata("design:paramtypes", [Object])
        ], DomEventsPlugin);
        return DomEventsPlugin;
    }(EventManagerPlugin));

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * Supported HammerJS recognizer event names.
     */
    var EVENT_NAMES = {
        // pan
        'pan': true,
        'panstart': true,
        'panmove': true,
        'panend': true,
        'pancancel': true,
        'panleft': true,
        'panright': true,
        'panup': true,
        'pandown': true,
        // pinch
        'pinch': true,
        'pinchstart': true,
        'pinchmove': true,
        'pinchend': true,
        'pinchcancel': true,
        'pinchin': true,
        'pinchout': true,
        // press
        'press': true,
        'pressup': true,
        // rotate
        'rotate': true,
        'rotatestart': true,
        'rotatemove': true,
        'rotateend': true,
        'rotatecancel': true,
        // swipe
        'swipe': true,
        'swipeleft': true,
        'swiperight': true,
        'swipeup': true,
        'swipedown': true,
        // tap
        'tap': true,
    };
    /**
     * DI token for providing [HammerJS](http://hammerjs.github.io/) support to Angular.
     * @see `HammerGestureConfig`
     *
     * @ngModule HammerModule
     * @publicApi
     */
    var HAMMER_GESTURE_CONFIG = new i0.InjectionToken('HammerGestureConfig');
    /**
     * Injection token used to provide a {@link HammerLoader} to Angular.
     *
     * @publicApi
     */
    var HAMMER_LOADER = new i0.InjectionToken('HammerLoader');
    /**
     * An injectable [HammerJS Manager](http://hammerjs.github.io/api/#hammer.manager)
     * for gesture recognition. Configures specific event recognition.
     * @publicApi
     */
    var HammerGestureConfig = /** @class */ (function () {
        function HammerGestureConfig() {
            /**
             * A set of supported event names for gestures to be used in Angular.
             * Angular supports all built-in recognizers, as listed in
             * [HammerJS documentation](http://hammerjs.github.io/).
             */
            this.events = [];
            /**
             * Maps gesture event names to a set of configuration options
             * that specify overrides to the default values for specific properties.
             *
             * The key is a supported event name to be configured,
             * and the options object contains a set of properties, with override values
             * to be applied to the named recognizer event.
             * For example, to disable recognition of the rotate event, specify
             *  `{"rotate": {"enable": false}}`.
             *
             * Properties that are not present take the HammerJS default values.
             * For information about which properties are supported for which events,
             * and their allowed and default values, see
             * [HammerJS documentation](http://hammerjs.github.io/).
             *
             */
            this.overrides = {};
        }
        /**
         * Creates a [HammerJS Manager](http://hammerjs.github.io/api/#hammer.manager)
         * and attaches it to a given HTML element.
         * @param element The element that will recognize gestures.
         * @returns A HammerJS event-manager object.
         */
        HammerGestureConfig.prototype.buildHammer = function (element) {
            var mc = new Hammer(element, this.options);
            mc.get('pinch').set({ enable: true });
            mc.get('rotate').set({ enable: true });
            for (var eventName in this.overrides) {
                mc.get(eventName).set(this.overrides[eventName]);
            }
            return mc;
        };
        HammerGestureConfig = __decorate([
            i0.Injectable()
        ], HammerGestureConfig);
        return HammerGestureConfig;
    }());
    /**
     * Event plugin that adds Hammer support to an application.
     *
     * @ngModule HammerModule
     */
    var HammerGesturesPlugin = /** @class */ (function (_super) {
        __extends(HammerGesturesPlugin, _super);
        function HammerGesturesPlugin(doc, _config, console, loader) {
            var _this = _super.call(this, doc) || this;
            _this._config = _config;
            _this.console = console;
            _this.loader = loader;
            return _this;
        }
        HammerGesturesPlugin.prototype.supports = function (eventName) {
            if (!EVENT_NAMES.hasOwnProperty(eventName.toLowerCase()) && !this.isCustomEvent(eventName)) {
                return false;
            }
            if (!window.Hammer && !this.loader) {
                this.console.warn("The \"" + eventName + "\" event cannot be bound because Hammer.JS is not " +
                    "loaded and no custom loader has been specified.");
                return false;
            }
            return true;
        };
        HammerGesturesPlugin.prototype.addEventListener = function (element, eventName, handler) {
            var _this = this;
            var zone = this.manager.getZone();
            eventName = eventName.toLowerCase();
            // If Hammer is not present but a loader is specified, we defer adding the event listener
            // until Hammer is loaded.
            if (!window.Hammer && this.loader) {
                // This `addEventListener` method returns a function to remove the added listener.
                // Until Hammer is loaded, the returned function needs to *cancel* the registration rather
                // than remove anything.
                var cancelRegistration_1 = false;
                var deregister_1 = function () {
                    cancelRegistration_1 = true;
                };
                this.loader()
                    .then(function () {
                    // If Hammer isn't actually loaded when the custom loader resolves, give up.
                    if (!window.Hammer) {
                        _this.console.warn("The custom HAMMER_LOADER completed, but Hammer.JS is not present.");
                        deregister_1 = function () { };
                        return;
                    }
                    if (!cancelRegistration_1) {
                        // Now that Hammer is loaded and the listener is being loaded for real,
                        // the deregistration function changes from canceling registration to removal.
                        deregister_1 = _this.addEventListener(element, eventName, handler);
                    }
                })
                    .catch(function () {
                    _this.console.warn("The \"" + eventName + "\" event cannot be bound because the custom " +
                        "Hammer.JS loader failed.");
                    deregister_1 = function () { };
                });
                // Return a function that *executes* `deregister` (and not `deregister` itself) so that we
                // can change the behavior of `deregister` once the listener is added. Using a closure in
                // this way allows us to avoid any additional data structures to track listener removal.
                return function () {
                    deregister_1();
                };
            }
            return zone.runOutsideAngular(function () {
                // Creating the manager bind events, must be done outside of angular
                var mc = _this._config.buildHammer(element);
                var callback = function (eventObj) {
                    zone.runGuarded(function () {
                        handler(eventObj);
                    });
                };
                mc.on(eventName, callback);
                return function () {
                    mc.off(eventName, callback);
                    // destroy mc to prevent memory leak
                    if (typeof mc.destroy === 'function') {
                        mc.destroy();
                    }
                };
            });
        };
        HammerGesturesPlugin.prototype.isCustomEvent = function (eventName) {
            return this._config.events.indexOf(eventName) > -1;
        };
        HammerGesturesPlugin = __decorate([
            i0.Injectable(),
            __param(0, i0.Inject(common.DOCUMENT)),
            __param(1, i0.Inject(HAMMER_GESTURE_CONFIG)),
            __param(3, i0.Optional()), __param(3, i0.Inject(HAMMER_LOADER)),
            __metadata("design:paramtypes", [Object, HammerGestureConfig, i0.ɵConsole, Object])
        ], HammerGesturesPlugin);
        return HammerGesturesPlugin;
    }(EventManagerPlugin));
    /**
     * In Ivy, support for Hammer gestures is optional, so applications must
     * import the `HammerModule` at root to turn on support. This means that
     * Hammer-specific code can be tree-shaken away if not needed.
     */
    var HAMMER_PROVIDERS__POST_R3__ = [];
    /**
     * In View Engine, support for Hammer gestures is built-in by default.
     */
    var HAMMER_PROVIDERS__PRE_R3__ = [
        {
            provide: EVENT_MANAGER_PLUGINS,
            useClass: HammerGesturesPlugin,
            multi: true,
            deps: [common.DOCUMENT, HAMMER_GESTURE_CONFIG, i0.ɵConsole, [new i0.Optional(), HAMMER_LOADER]]
        },
        { provide: HAMMER_GESTURE_CONFIG, useClass: HammerGestureConfig, deps: [] },
    ];
    var HAMMER_PROVIDERS = HAMMER_PROVIDERS__PRE_R3__;
    /**
     * Adds support for HammerJS.
     *
     * Import this module at the root of your application so that Angular can work with
     * HammerJS to detect gesture events.
     *
     * Note that applications still need to include the HammerJS script itself. This module
     * simply sets up the coordination layer between HammerJS and Angular's EventManager.
     *
     * @publicApi
     */
    var HammerModule = /** @class */ (function () {
        function HammerModule() {
        }
        HammerModule = __decorate([
            i0.NgModule({ providers: HAMMER_PROVIDERS__PRE_R3__ })
        ], HammerModule);
        return HammerModule;
    }());

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * Defines supported modifiers for key events.
     */
    var MODIFIER_KEYS = ['alt', 'control', 'meta', 'shift'];
    var DOM_KEY_LOCATION_NUMPAD = 3;
    // Map to convert some key or keyIdentifier values to what will be returned by getEventKey
    var _keyMap = {
        // The following values are here for cross-browser compatibility and to match the W3C standard
        // cf http://www.w3.org/TR/DOM-Level-3-Events-key/
        '\b': 'Backspace',
        '\t': 'Tab',
        '\x7F': 'Delete',
        '\x1B': 'Escape',
        'Del': 'Delete',
        'Esc': 'Escape',
        'Left': 'ArrowLeft',
        'Right': 'ArrowRight',
        'Up': 'ArrowUp',
        'Down': 'ArrowDown',
        'Menu': 'ContextMenu',
        'Scroll': 'ScrollLock',
        'Win': 'OS'
    };
    // There is a bug in Chrome for numeric keypad keys:
    // https://code.google.com/p/chromium/issues/detail?id=155654
    // 1, 2, 3 ... are reported as A, B, C ...
    var _chromeNumKeyPadMap = {
        'A': '1',
        'B': '2',
        'C': '3',
        'D': '4',
        'E': '5',
        'F': '6',
        'G': '7',
        'H': '8',
        'I': '9',
        'J': '*',
        'K': '+',
        'M': '-',
        'N': '.',
        'O': '/',
        '\x60': '0',
        '\x90': 'NumLock'
    };
    var ɵ0$3 = function (event) { return event.altKey; }, ɵ1 = function (event) { return event.ctrlKey; }, ɵ2 = function (event) { return event.metaKey; }, ɵ3 = function (event) { return event.shiftKey; };
    /**
     * Retrieves modifiers from key-event objects.
     */
    var MODIFIER_KEY_GETTERS = {
        'alt': ɵ0$3,
        'control': ɵ1,
        'meta': ɵ2,
        'shift': ɵ3
    };
    /**
     * @publicApi
     * A browser plug-in that provides support for handling of key events in Angular.
     */
    var KeyEventsPlugin = /** @class */ (function (_super) {
        __extends(KeyEventsPlugin, _super);
        /**
         * Initializes an instance of the browser plug-in.
         * @param doc The document in which key events will be detected.
         */
        function KeyEventsPlugin(doc) {
            return _super.call(this, doc) || this;
        }
        KeyEventsPlugin_1 = KeyEventsPlugin;
        /**
         * Reports whether a named key event is supported.
         * @param eventName The event name to query.
         * @return True if the named key event is supported.
         */
        KeyEventsPlugin.prototype.supports = function (eventName) {
            return KeyEventsPlugin_1.parseEventName(eventName) != null;
        };
        /**
         * Registers a handler for a specific element and key event.
         * @param element The HTML element to receive event notifications.
         * @param eventName The name of the key event to listen for.
         * @param handler A function to call when the notification occurs. Receives the
         * event object as an argument.
         * @returns The key event that was registered.
         */
        KeyEventsPlugin.prototype.addEventListener = function (element, eventName, handler) {
            var parsedEvent = KeyEventsPlugin_1.parseEventName(eventName);
            var outsideHandler = KeyEventsPlugin_1.eventCallback(parsedEvent['fullKey'], handler, this.manager.getZone());
            return this.manager.getZone().runOutsideAngular(function () {
                return common.ɵgetDOM().onAndCancel(element, parsedEvent['domEventName'], outsideHandler);
            });
        };
        KeyEventsPlugin.parseEventName = function (eventName) {
            var parts = eventName.toLowerCase().split('.');
            var domEventName = parts.shift();
            if ((parts.length === 0) || !(domEventName === 'keydown' || domEventName === 'keyup')) {
                return null;
            }
            var key = KeyEventsPlugin_1._normalizeKey(parts.pop());
            var fullKey = '';
            MODIFIER_KEYS.forEach(function (modifierName) {
                var index = parts.indexOf(modifierName);
                if (index > -1) {
                    parts.splice(index, 1);
                    fullKey += modifierName + '.';
                }
            });
            fullKey += key;
            if (parts.length != 0 || key.length === 0) {
                // returning null instead of throwing to let another plugin process the event
                return null;
            }
            var result = {};
            result['domEventName'] = domEventName;
            result['fullKey'] = fullKey;
            return result;
        };
        KeyEventsPlugin.getEventFullKey = function (event) {
            var fullKey = '';
            var key = getEventKey(event);
            key = key.toLowerCase();
            if (key === ' ') {
                key = 'space'; // for readability
            }
            else if (key === '.') {
                key = 'dot'; // because '.' is used as a separator in event names
            }
            MODIFIER_KEYS.forEach(function (modifierName) {
                if (modifierName != key) {
                    var modifierGetter = MODIFIER_KEY_GETTERS[modifierName];
                    if (modifierGetter(event)) {
                        fullKey += modifierName + '.';
                    }
                }
            });
            fullKey += key;
            return fullKey;
        };
        /**
         * Configures a handler callback for a key event.
         * @param fullKey The event name that combines all simultaneous keystrokes.
         * @param handler The function that responds to the key event.
         * @param zone The zone in which the event occurred.
         * @returns A callback function.
         */
        KeyEventsPlugin.eventCallback = function (fullKey, handler, zone) {
            return function (event /** TODO #9100 */) {
                if (KeyEventsPlugin_1.getEventFullKey(event) === fullKey) {
                    zone.runGuarded(function () { return handler(event); });
                }
            };
        };
        /** @internal */
        KeyEventsPlugin._normalizeKey = function (keyName) {
            // TODO: switch to a Map if the mapping grows too much
            switch (keyName) {
                case 'esc':
                    return 'escape';
                default:
                    return keyName;
            }
        };
        var KeyEventsPlugin_1;
        KeyEventsPlugin = KeyEventsPlugin_1 = __decorate([
            i0.Injectable(),
            __param(0, i0.Inject(common.DOCUMENT)),
            __metadata("design:paramtypes", [Object])
        ], KeyEventsPlugin);
        return KeyEventsPlugin;
    }(EventManagerPlugin));
    function getEventKey(event) {
        var key = event.key;
        if (key == null) {
            key = event.keyIdentifier;
            // keyIdentifier is defined in the old draft of DOM Level 3 Events implemented by Chrome and
            // Safari cf
            // http://www.w3.org/TR/2007/WD-DOM-Level-3-Events-20071221/events.html#Events-KeyboardEvents-Interfaces
            if (key == null) {
                return 'Unidentified';
            }
            if (key.startsWith('U+')) {
                key = String.fromCharCode(parseInt(key.substring(2), 16));
                if (event.location === DOM_KEY_LOCATION_NUMPAD && _chromeNumKeyPadMap.hasOwnProperty(key)) {
                    // There is a bug in Chrome for numeric keypad keys:
                    // https://code.google.com/p/chromium/issues/detail?id=155654
                    // 1, 2, 3 ... are reported as A, B, C ...
                    key = _chromeNumKeyPadMap[key];
                }
            }
        }
        return _keyMap[key] || key;
    }

    /**
     * DomSanitizer helps preventing Cross Site Scripting Security bugs (XSS) by sanitizing
     * values to be safe to use in the different DOM contexts.
     *
     * For example, when binding a URL in an `<a [href]="someValue">` hyperlink, `someValue` will be
     * sanitized so that an attacker cannot inject e.g. a `javascript:` URL that would execute code on
     * the website.
     *
     * In specific situations, it might be necessary to disable sanitization, for example if the
     * application genuinely needs to produce a `javascript:` style link with a dynamic value in it.
     * Users can bypass security by constructing a value with one of the `bypassSecurityTrust...`
     * methods, and then binding to that value from the template.
     *
     * These situations should be very rare, and extraordinary care must be taken to avoid creating a
     * Cross Site Scripting (XSS) security bug!
     *
     * When using `bypassSecurityTrust...`, make sure to call the method as early as possible and as
     * close as possible to the source of the value, to make it easy to verify no security bug is
     * created by its use.
     *
     * It is not required (and not recommended) to bypass security if the value is safe, e.g. a URL that
     * does not start with a suspicious protocol, or an HTML snippet that does not contain dangerous
     * code. The sanitizer leaves safe values intact.
     *
     * @security Calling any of the `bypassSecurityTrust...` APIs disables Angular's built-in
     * sanitization for the value passed in. Carefully check and audit all values and code paths going
     * into this call. Make sure any user data is appropriately escaped for this security context.
     * For more detail, see the [Security Guide](http://g.co/ng/security).
     *
     * @publicApi
     */
    var DomSanitizer = /** @class */ (function () {
        function DomSanitizer() {
        }
        DomSanitizer.ɵprov = i0.ɵɵdefineInjectable({ factory: function DomSanitizer_Factory() { return i0.ɵɵinject(DomSanitizerImpl); }, token: DomSanitizer, providedIn: "root" });
        DomSanitizer = __decorate([
            i0.Injectable({ providedIn: 'root', useExisting: i0.forwardRef(function () { return DomSanitizerImpl; }) })
        ], DomSanitizer);
        return DomSanitizer;
    }());
    function domSanitizerImplFactory(injector) {
        return new DomSanitizerImpl(injector.get(common.DOCUMENT));
    }
    var DomSanitizerImpl = /** @class */ (function (_super) {
        __extends(DomSanitizerImpl, _super);
        function DomSanitizerImpl(_doc) {
            var _this = _super.call(this) || this;
            _this._doc = _doc;
            return _this;
        }
        DomSanitizerImpl.prototype.sanitize = function (ctx, value) {
            if (value == null)
                return null;
            switch (ctx) {
                case i0.SecurityContext.NONE:
                    return value;
                case i0.SecurityContext.HTML:
                    if (i0.ɵallowSanitizationBypassAndThrow(value, "HTML" /* Html */)) {
                        return i0.ɵunwrapSafeValue(value);
                    }
                    return i0.ɵ_sanitizeHtml(this._doc, String(value));
                case i0.SecurityContext.STYLE:
                    if (i0.ɵallowSanitizationBypassAndThrow(value, "Style" /* Style */)) {
                        return i0.ɵunwrapSafeValue(value);
                    }
                    return i0.ɵ_sanitizeStyle(value);
                case i0.SecurityContext.SCRIPT:
                    if (i0.ɵallowSanitizationBypassAndThrow(value, "Script" /* Script */)) {
                        return i0.ɵunwrapSafeValue(value);
                    }
                    throw new Error('unsafe value used in a script context');
                case i0.SecurityContext.URL:
                    var type = i0.ɵgetSanitizationBypassType(value);
                    if (i0.ɵallowSanitizationBypassAndThrow(value, "URL" /* Url */)) {
                        return i0.ɵunwrapSafeValue(value);
                    }
                    return i0.ɵ_sanitizeUrl(String(value));
                case i0.SecurityContext.RESOURCE_URL:
                    if (i0.ɵallowSanitizationBypassAndThrow(value, "ResourceURL" /* ResourceUrl */)) {
                        return i0.ɵunwrapSafeValue(value);
                    }
                    throw new Error('unsafe value used in a resource URL context (see http://g.co/ng/security#xss)');
                default:
                    throw new Error("Unexpected SecurityContext " + ctx + " (see http://g.co/ng/security#xss)");
            }
        };
        DomSanitizerImpl.prototype.bypassSecurityTrustHtml = function (value) {
            return i0.ɵbypassSanitizationTrustHtml(value);
        };
        DomSanitizerImpl.prototype.bypassSecurityTrustStyle = function (value) {
            return i0.ɵbypassSanitizationTrustStyle(value);
        };
        DomSanitizerImpl.prototype.bypassSecurityTrustScript = function (value) {
            return i0.ɵbypassSanitizationTrustScript(value);
        };
        DomSanitizerImpl.prototype.bypassSecurityTrustUrl = function (value) {
            return i0.ɵbypassSanitizationTrustUrl(value);
        };
        DomSanitizerImpl.prototype.bypassSecurityTrustResourceUrl = function (value) {
            return i0.ɵbypassSanitizationTrustResourceUrl(value);
        };
        DomSanitizerImpl.ɵprov = i0.ɵɵdefineInjectable({ factory: function DomSanitizerImpl_Factory() { return domSanitizerImplFactory(i0.ɵɵinject(i0.INJECTOR)); }, token: DomSanitizerImpl, providedIn: "root" });
        DomSanitizerImpl = __decorate([
            i0.Injectable({ providedIn: 'root', useFactory: domSanitizerImplFactory, deps: [i0.Injector] }),
            __param(0, i0.Inject(common.DOCUMENT)),
            __metadata("design:paramtypes", [Object])
        ], DomSanitizerImpl);
        return DomSanitizerImpl;
    }(DomSanitizer));

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    function initDomAdapter() {
        BrowserDomAdapter.makeCurrent();
        BrowserGetTestability.init();
    }
    function errorHandler() {
        return new i0.ErrorHandler();
    }
    function _document() {
        // Tell ivy about the global document
        i0.ɵsetDocument(document);
        return document;
    }
    var ɵ0$4 = common.ɵPLATFORM_BROWSER_ID;
    var INTERNAL_BROWSER_PLATFORM_PROVIDERS = [
        { provide: i0.PLATFORM_ID, useValue: ɵ0$4 },
        { provide: i0.PLATFORM_INITIALIZER, useValue: initDomAdapter, multi: true },
        { provide: common.DOCUMENT, useFactory: _document, deps: [] },
    ];
    var BROWSER_SANITIZATION_PROVIDERS__PRE_R3__ = [
        { provide: i0.Sanitizer, useExisting: DomSanitizer },
        { provide: DomSanitizer, useClass: DomSanitizerImpl, deps: [common.DOCUMENT] },
    ];
    var BROWSER_SANITIZATION_PROVIDERS__POST_R3__ = [];
    /**
     * @security Replacing built-in sanitization providers exposes the application to XSS risks.
     * Attacker-controlled data introduced by an unsanitized provider could expose your
     * application to XSS risks. For more detail, see the [Security Guide](http://g.co/ng/security).
     * @publicApi
     */
    var BROWSER_SANITIZATION_PROVIDERS = BROWSER_SANITIZATION_PROVIDERS__PRE_R3__;
    /**
     * @publicApi
     */
    var platformBrowser = i0.createPlatformFactory(i0.platformCore, 'browser', INTERNAL_BROWSER_PLATFORM_PROVIDERS);
    var BROWSER_MODULE_PROVIDERS = [
        BROWSER_SANITIZATION_PROVIDERS,
        { provide: i0.ɵINJECTOR_SCOPE, useValue: 'root' },
        { provide: i0.ErrorHandler, useFactory: errorHandler, deps: [] },
        {
            provide: EVENT_MANAGER_PLUGINS,
            useClass: DomEventsPlugin,
            multi: true,
            deps: [common.DOCUMENT, i0.NgZone, i0.PLATFORM_ID]
        },
        { provide: EVENT_MANAGER_PLUGINS, useClass: KeyEventsPlugin, multi: true, deps: [common.DOCUMENT] },
        HAMMER_PROVIDERS,
        {
            provide: DomRendererFactory2,
            useClass: DomRendererFactory2,
            deps: [EventManager, DomSharedStylesHost, i0.APP_ID]
        },
        { provide: i0.RendererFactory2, useExisting: DomRendererFactory2 },
        { provide: SharedStylesHost, useExisting: DomSharedStylesHost },
        { provide: DomSharedStylesHost, useClass: DomSharedStylesHost, deps: [common.DOCUMENT] },
        { provide: i0.Testability, useClass: i0.Testability, deps: [i0.NgZone] },
        { provide: EventManager, useClass: EventManager, deps: [EVENT_MANAGER_PLUGINS, i0.NgZone] },
        ELEMENT_PROBE_PROVIDERS,
    ];
    /**
     * Exports required infrastructure for all Angular apps.
     * Included by default in all Angular apps created with the CLI
     * `new` command.
     * Re-exports `CommonModule` and `ApplicationModule`, making their
     * exports and providers available to all apps.
     *
     * @publicApi
     */
    var BrowserModule = /** @class */ (function () {
        function BrowserModule(parentModule) {
            if (parentModule) {
                throw new Error("BrowserModule has already been loaded. If you need access to common directives such as NgIf and NgFor from a lazy loaded module, import CommonModule instead.");
            }
        }
        BrowserModule_1 = BrowserModule;
        /**
         * Configures a browser-based app to transition from a server-rendered app, if
         * one is present on the page.
         *
         * @param params An object containing an identifier for the app to transition.
         * The ID must match between the client and server versions of the app.
         * @returns The reconfigured `BrowserModule` to import into the app's root `AppModule`.
         */
        BrowserModule.withServerTransition = function (params) {
            return {
                ngModule: BrowserModule_1,
                providers: [
                    { provide: i0.APP_ID, useValue: params.appId },
                    { provide: TRANSITION_ID, useExisting: i0.APP_ID },
                    SERVER_TRANSITION_PROVIDERS,
                ],
            };
        };
        var BrowserModule_1;
        BrowserModule = BrowserModule_1 = __decorate([
            i0.NgModule({ providers: BROWSER_MODULE_PROVIDERS, exports: [common.CommonModule, i0.ApplicationModule] }),
            __param(0, i0.Optional()), __param(0, i0.SkipSelf()), __param(0, i0.Inject(BrowserModule_1)),
            __metadata("design:paramtypes", [Object])
        ], BrowserModule);
        return BrowserModule;
    }());

    /**
     * Factory to create Meta service.
     */
    function createMeta() {
        return new Meta(i0.ɵɵinject(common.DOCUMENT));
    }
    /**
     * A service that can be used to get and add meta tags.
     *
     * @publicApi
     */
    var Meta = /** @class */ (function () {
        function Meta(_doc) {
            this._doc = _doc;
            this._dom = common.ɵgetDOM();
        }
        Meta.prototype.addTag = function (tag, forceCreation) {
            if (forceCreation === void 0) { forceCreation = false; }
            if (!tag)
                return null;
            return this._getOrCreateElement(tag, forceCreation);
        };
        Meta.prototype.addTags = function (tags, forceCreation) {
            var _this = this;
            if (forceCreation === void 0) { forceCreation = false; }
            if (!tags)
                return [];
            return tags.reduce(function (result, tag) {
                if (tag) {
                    result.push(_this._getOrCreateElement(tag, forceCreation));
                }
                return result;
            }, []);
        };
        Meta.prototype.getTag = function (attrSelector) {
            if (!attrSelector)
                return null;
            return this._doc.querySelector("meta[" + attrSelector + "]") || null;
        };
        Meta.prototype.getTags = function (attrSelector) {
            if (!attrSelector)
                return [];
            var list /*NodeList*/ = this._doc.querySelectorAll("meta[" + attrSelector + "]");
            return list ? [].slice.call(list) : [];
        };
        Meta.prototype.updateTag = function (tag, selector) {
            if (!tag)
                return null;
            selector = selector || this._parseSelector(tag);
            var meta = this.getTag(selector);
            if (meta) {
                return this._setMetaElementAttributes(tag, meta);
            }
            return this._getOrCreateElement(tag, true);
        };
        Meta.prototype.removeTag = function (attrSelector) {
            this.removeTagElement(this.getTag(attrSelector));
        };
        Meta.prototype.removeTagElement = function (meta) {
            if (meta) {
                this._dom.remove(meta);
            }
        };
        Meta.prototype._getOrCreateElement = function (meta, forceCreation) {
            if (forceCreation === void 0) { forceCreation = false; }
            if (!forceCreation) {
                var selector = this._parseSelector(meta);
                var elem = this.getTag(selector);
                // It's allowed to have multiple elements with the same name so it's not enough to
                // just check that element with the same name already present on the page. We also need to
                // check if element has tag attributes
                if (elem && this._containsAttributes(meta, elem))
                    return elem;
            }
            var element = this._dom.createElement('meta');
            this._setMetaElementAttributes(meta, element);
            var head = this._doc.getElementsByTagName('head')[0];
            head.appendChild(element);
            return element;
        };
        Meta.prototype._setMetaElementAttributes = function (tag, el) {
            Object.keys(tag).forEach(function (prop) { return el.setAttribute(prop, tag[prop]); });
            return el;
        };
        Meta.prototype._parseSelector = function (tag) {
            var attr = tag.name ? 'name' : 'property';
            return attr + "=\"" + tag[attr] + "\"";
        };
        Meta.prototype._containsAttributes = function (tag, elem) {
            return Object.keys(tag).every(function (key) { return elem.getAttribute(key) === tag[key]; });
        };
        Meta.ɵprov = i0.ɵɵdefineInjectable({ factory: createMeta, token: Meta, providedIn: "root" });
        Meta = __decorate([
            i0.Injectable({ providedIn: 'root', useFactory: createMeta, deps: [] }),
            __param(0, i0.Inject(common.DOCUMENT)),
            __metadata("design:paramtypes", [Object])
        ], Meta);
        return Meta;
    }());

    /**
     * Factory to create Title service.
     */
    function createTitle() {
        return new Title(i0.ɵɵinject(common.DOCUMENT));
    }
    /**
     * A service that can be used to get and set the title of a current HTML document.
     *
     * Since an Angular application can't be bootstrapped on the entire HTML document (`<html>` tag)
     * it is not possible to bind to the `text` property of the `HTMLTitleElement` elements
     * (representing the `<title>` tag). Instead, this service can be used to set and get the current
     * title value.
     *
     * @publicApi
     */
    var Title = /** @class */ (function () {
        function Title(_doc) {
            this._doc = _doc;
        }
        /**
         * Get the title of the current HTML document.
         */
        Title.prototype.getTitle = function () {
            return this._doc.title;
        };
        /**
         * Set the title of the current HTML document.
         * @param newTitle
         */
        Title.prototype.setTitle = function (newTitle) {
            this._doc.title = newTitle || '';
        };
        Title.ɵprov = i0.ɵɵdefineInjectable({ factory: createTitle, token: Title, providedIn: "root" });
        Title = __decorate([
            i0.Injectable({ providedIn: 'root', useFactory: createTitle, deps: [] }),
            __param(0, i0.Inject(common.DOCUMENT)),
            __metadata("design:paramtypes", [Object])
        ], Title);
        return Title;
    }());

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var win = typeof window !== 'undefined' && window || {};

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var ChangeDetectionPerfRecord = /** @class */ (function () {
        function ChangeDetectionPerfRecord(msPerTick, numTicks) {
            this.msPerTick = msPerTick;
            this.numTicks = numTicks;
        }
        return ChangeDetectionPerfRecord;
    }());
    /**
     * Entry point for all Angular profiling-related debug tools. This object
     * corresponds to the `ng.profiler` in the dev console.
     */
    var AngularProfiler = /** @class */ (function () {
        function AngularProfiler(ref) {
            this.appRef = ref.injector.get(i0.ApplicationRef);
        }
        // tslint:disable:no-console
        /**
         * Exercises change detection in a loop and then prints the average amount of
         * time in milliseconds how long a single round of change detection takes for
         * the current state of the UI. It runs a minimum of 5 rounds for a minimum
         * of 500 milliseconds.
         *
         * Optionally, a user may pass a `config` parameter containing a map of
         * options. Supported options are:
         *
         * `record` (boolean) - causes the profiler to record a CPU profile while
         * it exercises the change detector. Example:
         *
         * ```
         * ng.profiler.timeChangeDetection({record: true})
         * ```
         */
        AngularProfiler.prototype.timeChangeDetection = function (config) {
            var record = config && config['record'];
            var profileName = 'Change Detection';
            // Profiler is not available in Android browsers, nor in IE 9 without dev tools opened
            var isProfilerAvailable = win.console.profile != null;
            if (record && isProfilerAvailable) {
                win.console.profile(profileName);
            }
            var start = common.ɵgetDOM().performanceNow();
            var numTicks = 0;
            while (numTicks < 5 || (common.ɵgetDOM().performanceNow() - start) < 500) {
                this.appRef.tick();
                numTicks++;
            }
            var end = common.ɵgetDOM().performanceNow();
            if (record && isProfilerAvailable) {
                win.console.profileEnd(profileName);
            }
            var msPerTick = (end - start) / numTicks;
            win.console.log("ran " + numTicks + " change detection cycles");
            win.console.log(msPerTick.toFixed(2) + " ms per check");
            return new ChangeDetectionPerfRecord(msPerTick, numTicks);
        };
        return AngularProfiler;
    }());

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var PROFILER_GLOBAL_NAME = 'profiler';
    /**
     * Enabled Angular debug tools that are accessible via your browser's
     * developer console.
     *
     * Usage:
     *
     * 1. Open developer console (e.g. in Chrome Ctrl + Shift + j)
     * 1. Type `ng.` (usually the console will show auto-complete suggestion)
     * 1. Try the change detection profiler `ng.profiler.timeChangeDetection()`
     *    then hit Enter.
     *
     * @publicApi
     */
    function enableDebugTools(ref) {
        exportNgVar(PROFILER_GLOBAL_NAME, new AngularProfiler(ref));
        return ref;
    }
    /**
     * Disables Angular tools.
     *
     * @publicApi
     */
    function disableDebugTools() {
        exportNgVar(PROFILER_GLOBAL_NAME, null);
    }

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    function escapeHtml(text) {
        var escapedText = {
            '&': '&a;',
            '"': '&q;',
            '\'': '&s;',
            '<': '&l;',
            '>': '&g;',
        };
        return text.replace(/[&"'<>]/g, function (s) { return escapedText[s]; });
    }
    function unescapeHtml(text) {
        var unescapedText = {
            '&a;': '&',
            '&q;': '"',
            '&s;': '\'',
            '&l;': '<',
            '&g;': '>',
        };
        return text.replace(/&[^;]+;/g, function (s) { return unescapedText[s]; });
    }
    /**
     * Create a `StateKey<T>` that can be used to store value of type T with `TransferState`.
     *
     * Example:
     *
     * ```
     * const COUNTER_KEY = makeStateKey<number>('counter');
     * let value = 10;
     *
     * transferState.set(COUNTER_KEY, value);
     * ```
     *
     * @publicApi
     */
    function makeStateKey(key) {
        return key;
    }
    /**
     * A key value store that is transferred from the application on the server side to the application
     * on the client side.
     *
     * `TransferState` will be available as an injectable token. To use it import
     * `ServerTransferStateModule` on the server and `BrowserTransferStateModule` on the client.
     *
     * The values in the store are serialized/deserialized using JSON.stringify/JSON.parse. So only
     * boolean, number, string, null and non-class objects will be serialized and deserialzied in a
     * non-lossy manner.
     *
     * @publicApi
     */
    var TransferState = /** @class */ (function () {
        function TransferState() {
            this.store = {};
            this.onSerializeCallbacks = {};
        }
        TransferState_1 = TransferState;
        /** @internal */
        TransferState.init = function (initState) {
            var transferState = new TransferState_1();
            transferState.store = initState;
            return transferState;
        };
        /**
         * Get the value corresponding to a key. Return `defaultValue` if key is not found.
         */
        TransferState.prototype.get = function (key, defaultValue) {
            return this.store[key] !== undefined ? this.store[key] : defaultValue;
        };
        /**
         * Set the value corresponding to a key.
         */
        TransferState.prototype.set = function (key, value) {
            this.store[key] = value;
        };
        /**
         * Remove a key from the store.
         */
        TransferState.prototype.remove = function (key) {
            delete this.store[key];
        };
        /**
         * Test whether a key exists in the store.
         */
        TransferState.prototype.hasKey = function (key) {
            return this.store.hasOwnProperty(key);
        };
        /**
         * Register a callback to provide the value for a key when `toJson` is called.
         */
        TransferState.prototype.onSerialize = function (key, callback) {
            this.onSerializeCallbacks[key] = callback;
        };
        /**
         * Serialize the current state of the store to JSON.
         */
        TransferState.prototype.toJson = function () {
            // Call the onSerialize callbacks and put those values into the store.
            for (var key in this.onSerializeCallbacks) {
                if (this.onSerializeCallbacks.hasOwnProperty(key)) {
                    try {
                        this.store[key] = this.onSerializeCallbacks[key]();
                    }
                    catch (e) {
                        console.warn('Exception in onSerialize callback: ', e);
                    }
                }
            }
            return JSON.stringify(this.store);
        };
        var TransferState_1;
        TransferState = TransferState_1 = __decorate([
            i0.Injectable()
        ], TransferState);
        return TransferState;
    }());
    function initTransferState(doc, appId) {
        // Locate the script tag with the JSON data transferred from the server.
        // The id of the script tag is set to the Angular appId + 'state'.
        var script = doc.getElementById(appId + '-state');
        var initialState = {};
        if (script && script.textContent) {
            try {
                initialState = JSON.parse(unescapeHtml(script.textContent));
            }
            catch (e) {
                console.warn('Exception while restoring TransferState for app ' + appId, e);
            }
        }
        return TransferState.init(initialState);
    }
    /**
     * NgModule to install on the client side while using the `TransferState` to transfer state from
     * server to client.
     *
     * @publicApi
     */
    var BrowserTransferStateModule = /** @class */ (function () {
        function BrowserTransferStateModule() {
        }
        BrowserTransferStateModule = __decorate([
            i0.NgModule({
                providers: [{ provide: TransferState, useFactory: initTransferState, deps: [common.DOCUMENT, i0.APP_ID] }],
            })
        ], BrowserTransferStateModule);
        return BrowserTransferStateModule;
    }());

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * Predicates for use with {@link DebugElement}'s query functions.
     *
     * @publicApi
     */
    var By = /** @class */ (function () {
        function By() {
        }
        /**
         * Match all nodes.
         *
         * @usageNotes
         * ### Example
         *
         * {@example platform-browser/dom/debug/ts/by/by.ts region='by_all'}
         */
        By.all = function () {
            return function () { return true; };
        };
        /**
         * Match elements by the given CSS selector.
         *
         * @usageNotes
         * ### Example
         *
         * {@example platform-browser/dom/debug/ts/by/by.ts region='by_css'}
         */
        By.css = function (selector) {
            return function (debugElement) {
                return debugElement.nativeElement != null ?
                    elementMatches(debugElement.nativeElement, selector) :
                    false;
            };
        };
        /**
         * Match nodes that have the given directive present.
         *
         * @usageNotes
         * ### Example
         *
         * {@example platform-browser/dom/debug/ts/by/by.ts region='by_directive'}
         */
        By.directive = function (type) {
            return function (debugNode) { return debugNode.providerTokens.indexOf(type) !== -1; };
        };
        return By;
    }());
    function elementMatches(n, selector) {
        if (common.ɵgetDOM().isElementNode(n)) {
            return n.matches && n.matches(selector) ||
                n.msMatchesSelector && n.msMatchesSelector(selector) ||
                n.webkitMatchesSelector && n.webkitMatchesSelector(selector);
        }
        return false;
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
    var VERSION = new i0.Version('9.1.12');

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

    Object.defineProperty(exports, 'ɵgetDOM', {
        enumerable: true,
        get: function () {
            return common.ɵgetDOM;
        }
    });
    exports.BrowserModule = BrowserModule;
    exports.BrowserTransferStateModule = BrowserTransferStateModule;
    exports.By = By;
    exports.DomSanitizer = DomSanitizer;
    exports.EVENT_MANAGER_PLUGINS = EVENT_MANAGER_PLUGINS;
    exports.EventManager = EventManager;
    exports.HAMMER_GESTURE_CONFIG = HAMMER_GESTURE_CONFIG;
    exports.HAMMER_LOADER = HAMMER_LOADER;
    exports.HammerGestureConfig = HammerGestureConfig;
    exports.HammerModule = HammerModule;
    exports.Meta = Meta;
    exports.Title = Title;
    exports.TransferState = TransferState;
    exports.VERSION = VERSION;
    exports.disableDebugTools = disableDebugTools;
    exports.enableDebugTools = enableDebugTools;
    exports.makeStateKey = makeStateKey;
    exports.platformBrowser = platformBrowser;
    exports.ɵBROWSER_SANITIZATION_PROVIDERS = BROWSER_SANITIZATION_PROVIDERS;
    exports.ɵBROWSER_SANITIZATION_PROVIDERS__POST_R3__ = BROWSER_SANITIZATION_PROVIDERS__POST_R3__;
    exports.ɵBrowserDomAdapter = BrowserDomAdapter;
    exports.ɵBrowserGetTestability = BrowserGetTestability;
    exports.ɵDomEventsPlugin = DomEventsPlugin;
    exports.ɵDomRendererFactory2 = DomRendererFactory2;
    exports.ɵDomSanitizerImpl = DomSanitizerImpl;
    exports.ɵDomSharedStylesHost = DomSharedStylesHost;
    exports.ɵELEMENT_PROBE_PROVIDERS = ELEMENT_PROBE_PROVIDERS;
    exports.ɵELEMENT_PROBE_PROVIDERS__POST_R3__ = ELEMENT_PROBE_PROVIDERS__POST_R3__;
    exports.ɵHAMMER_PROVIDERS__POST_R3__ = HAMMER_PROVIDERS__POST_R3__;
    exports.ɵHammerGesturesPlugin = HammerGesturesPlugin;
    exports.ɵINTERNAL_BROWSER_PLATFORM_PROVIDERS = INTERNAL_BROWSER_PLATFORM_PROVIDERS;
    exports.ɵKeyEventsPlugin = KeyEventsPlugin;
    exports.ɵNAMESPACE_URIS = NAMESPACE_URIS;
    exports.ɵSharedStylesHost = SharedStylesHost;
    exports.ɵTRANSITION_ID = TRANSITION_ID;
    exports.ɵangular_packages_platform_browser_platform_browser_a = errorHandler;
    exports.ɵangular_packages_platform_browser_platform_browser_b = _document;
    exports.ɵangular_packages_platform_browser_platform_browser_c = BROWSER_MODULE_PROVIDERS;
    exports.ɵangular_packages_platform_browser_platform_browser_d = createMeta;
    exports.ɵangular_packages_platform_browser_platform_browser_e = createTitle;
    exports.ɵangular_packages_platform_browser_platform_browser_f = initTransferState;
    exports.ɵangular_packages_platform_browser_platform_browser_g = EventManagerPlugin;
    exports.ɵangular_packages_platform_browser_platform_browser_h = HAMMER_PROVIDERS__PRE_R3__;
    exports.ɵangular_packages_platform_browser_platform_browser_i = HAMMER_PROVIDERS;
    exports.ɵangular_packages_platform_browser_platform_browser_j = domSanitizerImplFactory;
    exports.ɵangular_packages_platform_browser_platform_browser_k = appInitializerFactory;
    exports.ɵangular_packages_platform_browser_platform_browser_l = SERVER_TRANSITION_PROVIDERS;
    exports.ɵangular_packages_platform_browser_platform_browser_m = _createNgProbeR2;
    exports.ɵangular_packages_platform_browser_platform_browser_n = ELEMENT_PROBE_PROVIDERS__PRE_R3__;
    exports.ɵangular_packages_platform_browser_platform_browser_o = GenericBrowserDomAdapter;
    exports.ɵescapeHtml = escapeHtml;
    exports.ɵflattenStyles = flattenStyles;
    exports.ɵinitDomAdapter = initDomAdapter;
    exports.ɵshimContentAttribute = shimContentAttribute;
    exports.ɵshimHostAttribute = shimHostAttribute;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=platform-browser.umd.js.map
