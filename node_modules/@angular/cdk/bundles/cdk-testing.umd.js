(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define('@angular/cdk/testing', ['exports'], factory) :
    (global = global || self, factory((global.ng = global.ng || {}, global.ng.cdk = global.ng.cdk || {}, global.ng.cdk.testing = {})));
}(this, (function (exports) { 'use strict';

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
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
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
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
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

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * Base class for component harnesses that all component harness authors should extend. This base
     * component harness provides the basic ability to locate element and sub-component harness. It
     * should be inherited when defining user's own harness.
     */
    var ComponentHarness = /** @class */ (function () {
        function ComponentHarness(locatorFactory) {
            this.locatorFactory = locatorFactory;
        }
        /** Gets a `Promise` for the `TestElement` representing the host element of the component. */
        ComponentHarness.prototype.host = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.locatorFactory.rootElement];
                });
            });
        };
        /**
         * Gets a `LocatorFactory` for the document root element. This factory can be used to create
         * locators for elements that a component creates outside of its own root element. (e.g. by
         * appending to document.body).
         */
        ComponentHarness.prototype.documentRootLocatorFactory = function () {
            return this.locatorFactory.documentRootLocatorFactory();
        };
        /**
         * Creates an asynchronous locator function that can be used to find a `ComponentHarness` instance
         * or element under the host element of this `ComponentHarness`.
         * @param queries A list of queries specifying which harnesses and elements to search for:
         *   - A `string` searches for elements matching the CSS selector specified by the string.
         *   - A `ComponentHarness` constructor searches for `ComponentHarness` instances matching the
         *     given class.
         *   - A `HarnessPredicate` searches for `ComponentHarness` instances matching the given
         *     predicate.
         * @return An asynchronous locator function that searches for and returns a `Promise` for the
         *   first element or harness matching the given search criteria. Matches are ordered first by
         *   order in the DOM, and second by order in the queries list. If no matches are found, the
         *   `Promise` rejects. The type that the `Promise` resolves to is a union of all result types for
         *   each query.
         *
         * e.g. Given the following DOM: `<div id="d1" /><div id="d2" />`, and assuming
         * `DivHarness.hostSelector === 'div'`:
         * - `await ch.locatorFor(DivHarness, 'div')()` gets a `DivHarness` instance for `#d1`
         * - `await ch.locatorFor('div', DivHarness)()` gets a `TestElement` instance for `#d1`
         * - `await ch.locatorFor('span')()` throws because the `Promise` rejects.
         */
        ComponentHarness.prototype.locatorFor = function () {
            var _a;
            var queries = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                queries[_i] = arguments[_i];
            }
            return (_a = this.locatorFactory).locatorFor.apply(_a, __spread(queries));
        };
        /**
         * Creates an asynchronous locator function that can be used to find a `ComponentHarness` instance
         * or element under the host element of this `ComponentHarness`.
         * @param queries A list of queries specifying which harnesses and elements to search for:
         *   - A `string` searches for elements matching the CSS selector specified by the string.
         *   - A `ComponentHarness` constructor searches for `ComponentHarness` instances matching the
         *     given class.
         *   - A `HarnessPredicate` searches for `ComponentHarness` instances matching the given
         *     predicate.
         * @return An asynchronous locator function that searches for and returns a `Promise` for the
         *   first element or harness matching the given search criteria. Matches are ordered first by
         *   order in the DOM, and second by order in the queries list. If no matches are found, the
         *   `Promise` is resolved with `null`. The type that the `Promise` resolves to is a union of all
         *   result types for each query or null.
         *
         * e.g. Given the following DOM: `<div id="d1" /><div id="d2" />`, and assuming
         * `DivHarness.hostSelector === 'div'`:
         * - `await ch.locatorForOptional(DivHarness, 'div')()` gets a `DivHarness` instance for `#d1`
         * - `await ch.locatorForOptional('div', DivHarness)()` gets a `TestElement` instance for `#d1`
         * - `await ch.locatorForOptional('span')()` gets `null`.
         */
        ComponentHarness.prototype.locatorForOptional = function () {
            var _a;
            var queries = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                queries[_i] = arguments[_i];
            }
            return (_a = this.locatorFactory).locatorForOptional.apply(_a, __spread(queries));
        };
        /**
         * Creates an asynchronous locator function that can be used to find `ComponentHarness` instances
         * or elements under the host element of this `ComponentHarness`.
         * @param queries A list of queries specifying which harnesses and elements to search for:
         *   - A `string` searches for elements matching the CSS selector specified by the string.
         *   - A `ComponentHarness` constructor searches for `ComponentHarness` instances matching the
         *     given class.
         *   - A `HarnessPredicate` searches for `ComponentHarness` instances matching the given
         *     predicate.
         * @return An asynchronous locator function that searches for and returns a `Promise` for all
         *   elements and harnesses matching the given search criteria. Matches are ordered first by
         *   order in the DOM, and second by order in the queries list. If an element matches more than
         *   one `ComponentHarness` class, the locator gets an instance of each for the same element. If
         *   an element matches multiple `string` selectors, only one `TestElement` instance is returned
         *   for that element. The type that the `Promise` resolves to is an array where each element is
         *   the union of all result types for each query.
         *
         * e.g. Given the following DOM: `<div id="d1" /><div id="d2" />`, and assuming
         * `DivHarness.hostSelector === 'div'` and `IdIsD1Harness.hostSelector === '#d1'`:
         * - `await ch.locatorForAll(DivHarness, 'div')()` gets `[
         *     DivHarness, // for #d1
         *     TestElement, // for #d1
         *     DivHarness, // for #d2
         *     TestElement // for #d2
         *   ]`
         * - `await ch.locatorForAll('div', '#d1')()` gets `[
         *     TestElement, // for #d1
         *     TestElement // for #d2
         *   ]`
         * - `await ch.locatorForAll(DivHarness, IdIsD1Harness)()` gets `[
         *     DivHarness, // for #d1
         *     IdIsD1Harness, // for #d1
         *     DivHarness // for #d2
         *   ]`
         * - `await ch.locatorForAll('span')()` gets `[]`.
         */
        ComponentHarness.prototype.locatorForAll = function () {
            var _a;
            var queries = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                queries[_i] = arguments[_i];
            }
            return (_a = this.locatorFactory).locatorForAll.apply(_a, __spread(queries));
        };
        /**
         * Flushes change detection and async tasks in the Angular zone.
         * In most cases it should not be necessary to call this manually. However, there may be some edge
         * cases where it is needed to fully flush animation events.
         */
        ComponentHarness.prototype.forceStabilize = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.locatorFactory.forceStabilize()];
                });
            });
        };
        /**
         * Waits for all scheduled or running async tasks to complete. This allows harness
         * authors to wait for async tasks outside of the Angular zone.
         */
        ComponentHarness.prototype.waitForTasksOutsideAngular = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.locatorFactory.waitForTasksOutsideAngular()];
                });
            });
        };
        return ComponentHarness;
    }());
    /**
     * A class used to associate a ComponentHarness class with predicates functions that can be used to
     * filter instances of the class.
     */
    var HarnessPredicate = /** @class */ (function () {
        function HarnessPredicate(harnessType, options) {
            this.harnessType = harnessType;
            this._predicates = [];
            this._descriptions = [];
            this._addBaseOptions(options);
        }
        /**
         * Checks if the specified nullable string value matches the given pattern.
         * @param value The nullable string value to check, or a Promise resolving to the
         *   nullable string value.
         * @param pattern The pattern the value is expected to match. If `pattern` is a string,
         *   `value` is expected to match exactly. If `pattern` is a regex, a partial match is
         *   allowed. If `pattern` is `null`, the value is expected to be `null`.
         * @return Whether the value matches the pattern.
         */
        HarnessPredicate.stringMatches = function (value, pattern) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, value];
                        case 1:
                            value = _a.sent();
                            if (pattern === null) {
                                return [2 /*return*/, value === null];
                            }
                            else if (value === null) {
                                return [2 /*return*/, false];
                            }
                            return [2 /*return*/, typeof pattern === 'string' ? value === pattern : pattern.test(value)];
                    }
                });
            });
        };
        /**
         * Adds a predicate function to be run against candidate harnesses.
         * @param description A description of this predicate that may be used in error messages.
         * @param predicate An async predicate function.
         * @return this (for method chaining).
         */
        HarnessPredicate.prototype.add = function (description, predicate) {
            this._descriptions.push(description);
            this._predicates.push(predicate);
            return this;
        };
        /**
         * Adds a predicate function that depends on an option value to be run against candidate
         * harnesses. If the option value is undefined, the predicate will be ignored.
         * @param name The name of the option (may be used in error messages).
         * @param option The option value.
         * @param predicate The predicate function to run if the option value is not undefined.
         * @return this (for method chaining).
         */
        HarnessPredicate.prototype.addOption = function (name, option, predicate) {
            if (option !== undefined) {
                this.add(name + " = " + _valueAsString(option), function (item) { return predicate(item, option); });
            }
            return this;
        };
        /**
         * Filters a list of harnesses on this predicate.
         * @param harnesses The list of harnesses to filter.
         * @return A list of harnesses that satisfy this predicate.
         */
        HarnessPredicate.prototype.filter = function (harnesses) {
            return __awaiter(this, void 0, void 0, function () {
                var results;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, Promise.all(harnesses.map(function (h) { return _this.evaluate(h); }))];
                        case 1:
                            results = _a.sent();
                            return [2 /*return*/, harnesses.filter(function (_, i) { return results[i]; })];
                    }
                });
            });
        };
        /**
         * Evaluates whether the given harness satisfies this predicate.
         * @param harness The harness to check
         * @return A promise that resolves to true if the harness satisfies this predicate,
         *   and resolves to false otherwise.
         */
        HarnessPredicate.prototype.evaluate = function (harness) {
            return __awaiter(this, void 0, void 0, function () {
                var results;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, Promise.all(this._predicates.map(function (p) { return p(harness); }))];
                        case 1:
                            results = _a.sent();
                            return [2 /*return*/, results.reduce(function (combined, current) { return combined && current; }, true)];
                    }
                });
            });
        };
        /** Gets a description of this predicate for use in error messages. */
        HarnessPredicate.prototype.getDescription = function () {
            return this._descriptions.join(', ');
        };
        /** Gets the selector used to find candidate elements. */
        HarnessPredicate.prototype.getSelector = function () {
            var _this = this;
            return this._ancestor.split(',')
                .map(function (part) { return (part.trim() + " " + _this.harnessType.hostSelector).trim(); })
                .join(',');
        };
        /** Adds base options common to all harness types. */
        HarnessPredicate.prototype._addBaseOptions = function (options) {
            var _this = this;
            this._ancestor = options.ancestor || '';
            if (this._ancestor) {
                this._descriptions.push("has ancestor matching selector \"" + this._ancestor + "\"");
            }
            var selector = options.selector;
            if (selector !== undefined) {
                this.add("host matches selector \"" + selector + "\"", function (item) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, item.host()];
                            case 1: return [2 /*return*/, (_a.sent()).matchesSelector(selector)];
                        }
                    });
                }); });
            }
        };
        return HarnessPredicate;
    }());
    /** Represent a value as a string for the purpose of logging. */
    function _valueAsString(value) {
        if (value === undefined) {
            return 'undefined';
        }
        // `JSON.stringify` doesn't handle RegExp properly, so we need a custom replacer.
        try {
            return JSON.stringify(value, function (_, v) {
                if (v instanceof RegExp) {
                    return "/" + v.toString() + "/";
                }
                return typeof v === 'string' ? v.replace('/\//g', '\\/') : v;
            }).replace(/"\/\//g, '\\/').replace(/\/\/"/g, '\\/').replace(/\\\//g, '/');
        }
        catch (_a) {
            // `JSON.stringify` will throw if the object is cyclical,
            // in this case the best we can do is report the value as `{...}`.
            return '{...}';
        }
    }

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * Base harness environment class that can be extended to allow `ComponentHarness`es to be used in
     * different test environments (e.g. testbed, protractor, etc.). This class implements the
     * functionality of both a `HarnessLoader` and `LocatorFactory`. This class is generic on the raw
     * element type, `E`, used by the particular test environment.
     */
    var HarnessEnvironment = /** @class */ (function () {
        function HarnessEnvironment(rawRootElement) {
            this.rawRootElement = rawRootElement;
            this.rootElement = this.createTestElement(rawRootElement);
        }
        // Implemented as part of the `LocatorFactory` interface.
        HarnessEnvironment.prototype.documentRootLocatorFactory = function () {
            return this.createEnvironment(this.getDocumentRoot());
        };
        // Implemented as part of the `LocatorFactory` interface.
        HarnessEnvironment.prototype.locatorFor = function () {
            var _this = this;
            var queries = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                queries[_i] = arguments[_i];
            }
            return function () { return _assertResultFound(_this._getAllHarnessesAndTestElements(queries), _getDescriptionForLocatorForQueries(queries)); };
        };
        // Implemented as part of the `LocatorFactory` interface.
        HarnessEnvironment.prototype.locatorForOptional = function () {
            var _this = this;
            var queries = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                queries[_i] = arguments[_i];
            }
            return function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._getAllHarnessesAndTestElements(queries)];
                    case 1: return [2 /*return*/, (_a.sent())[0] || null];
                }
            }); }); };
        };
        // Implemented as part of the `LocatorFactory` interface.
        HarnessEnvironment.prototype.locatorForAll = function () {
            var _this = this;
            var queries = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                queries[_i] = arguments[_i];
            }
            return function () { return _this._getAllHarnessesAndTestElements(queries); };
        };
        // Implemented as part of the `LocatorFactory` interface.
        HarnessEnvironment.prototype.harnessLoaderFor = function (selector) {
            return __awaiter(this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _a = this.createEnvironment;
                            return [4 /*yield*/, _assertResultFound(this.getAllRawElements(selector), [_getDescriptionForHarnessLoaderQuery(selector)])];
                        case 1: return [2 /*return*/, _a.apply(this, [_b.sent()])];
                    }
                });
            });
        };
        // Implemented as part of the `LocatorFactory` interface.
        HarnessEnvironment.prototype.harnessLoaderForOptional = function (selector) {
            return __awaiter(this, void 0, void 0, function () {
                var elements;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.getAllRawElements(selector)];
                        case 1:
                            elements = _a.sent();
                            return [2 /*return*/, elements[0] ? this.createEnvironment(elements[0]) : null];
                    }
                });
            });
        };
        // Implemented as part of the `LocatorFactory` interface.
        HarnessEnvironment.prototype.harnessLoaderForAll = function (selector) {
            return __awaiter(this, void 0, void 0, function () {
                var elements;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.getAllRawElements(selector)];
                        case 1:
                            elements = _a.sent();
                            return [2 /*return*/, elements.map(function (element) { return _this.createEnvironment(element); })];
                    }
                });
            });
        };
        // Implemented as part of the `HarnessLoader` interface.
        HarnessEnvironment.prototype.getHarness = function (query) {
            return this.locatorFor(query)();
        };
        // Implemented as part of the `HarnessLoader` interface.
        HarnessEnvironment.prototype.getAllHarnesses = function (query) {
            return this.locatorForAll(query)();
        };
        // Implemented as part of the `HarnessLoader` interface.
        HarnessEnvironment.prototype.getChildLoader = function (selector) {
            return __awaiter(this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _a = this.createEnvironment;
                            return [4 /*yield*/, _assertResultFound(this.getAllRawElements(selector), [_getDescriptionForHarnessLoaderQuery(selector)])];
                        case 1: return [2 /*return*/, _a.apply(this, [_b.sent()])];
                    }
                });
            });
        };
        // Implemented as part of the `HarnessLoader` interface.
        HarnessEnvironment.prototype.getAllChildLoaders = function (selector) {
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.getAllRawElements(selector)];
                        case 1: return [2 /*return*/, (_a.sent()).map(function (e) { return _this.createEnvironment(e); })];
                    }
                });
            });
        };
        /** Creates a `ComponentHarness` for the given harness type with the given raw host element. */
        HarnessEnvironment.prototype.createComponentHarness = function (harnessType, element) {
            return new harnessType(this.createEnvironment(element));
        };
        /**
         * Matches the given raw elements with the given list of element and harness queries to produce a
         * list of matched harnesses and test elements.
         */
        HarnessEnvironment.prototype._getAllHarnessesAndTestElements = function (queries) {
            return __awaiter(this, void 0, void 0, function () {
                var _a, allQueries, harnessQueries, elementQueries, harnessTypes, rawElements, skipSelectorCheck, perElementMatches;
                var _b;
                var _this = this;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            _a = _parseQueries(queries), allQueries = _a.allQueries, harnessQueries = _a.harnessQueries, elementQueries = _a.elementQueries, harnessTypes = _a.harnessTypes;
                            return [4 /*yield*/, this.getAllRawElements(__spread(elementQueries, harnessQueries.map(function (predicate) { return predicate.getSelector(); })).join(','))];
                        case 1:
                            rawElements = _c.sent();
                            skipSelectorCheck = (elementQueries.length === 0 && harnessTypes.size === 1) ||
                                harnessQueries.length === 0;
                            return [4 /*yield*/, Promise.all(rawElements.map(function (rawElement) { return __awaiter(_this, void 0, void 0, function () {
                                    var testElement, allResultsForElement;
                                    var _this = this;
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0:
                                                testElement = this.createTestElement(rawElement);
                                                return [4 /*yield*/, Promise.all(
                                                    // For each query, get `null` if it doesn't match, or a `TestElement` or
                                                    // `ComponentHarness` as appropriate if it does match. This gives us everything that
                                                    // matches the current raw element, but it may contain duplicate entries (e.g. multiple
                                                    // `TestElement` or multiple `ComponentHarness` of the same type.
                                                    allQueries.map(function (query) {
                                                        return _this._getQueryResultForElement(query, rawElement, testElement, skipSelectorCheck);
                                                    }))];
                                            case 1:
                                                allResultsForElement = _a.sent();
                                                return [2 /*return*/, _removeDuplicateQueryResults(allResultsForElement)];
                                        }
                                    });
                                }); }))];
                        case 2:
                            perElementMatches = _c.sent();
                            return [2 /*return*/, (_b = []).concat.apply(_b, __spread(perElementMatches))];
                    }
                });
            });
        };
        /**
         * Check whether the given query matches the given element, if it does return the matched
         * `TestElement` or `ComponentHarness`, if it does not, return null. In cases where the caller
         * knows for sure that the query matches the element's selector, `skipSelectorCheck` can be used
         * to skip verification and optimize performance.
         */
        HarnessEnvironment.prototype._getQueryResultForElement = function (query, rawElement, testElement, skipSelectorCheck) {
            if (skipSelectorCheck === void 0) { skipSelectorCheck = false; }
            return __awaiter(this, void 0, void 0, function () {
                var _a, _b, harness;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            if (!(typeof query === 'string')) return [3 /*break*/, 3];
                            _a = skipSelectorCheck;
                            if (_a) return [3 /*break*/, 2];
                            return [4 /*yield*/, testElement.matchesSelector(query)];
                        case 1:
                            _a = (_c.sent());
                            _c.label = 2;
                        case 2: return [2 /*return*/, ((_a) ? testElement : null)];
                        case 3:
                            _b = skipSelectorCheck;
                            if (_b) return [3 /*break*/, 5];
                            return [4 /*yield*/, testElement.matchesSelector(query.getSelector())];
                        case 4:
                            _b = (_c.sent());
                            _c.label = 5;
                        case 5:
                            if (!_b) return [3 /*break*/, 7];
                            harness = this.createComponentHarness(query.harnessType, rawElement);
                            return [4 /*yield*/, query.evaluate(harness)];
                        case 6: return [2 /*return*/, (_c.sent()) ? harness : null];
                        case 7: return [2 /*return*/, null];
                    }
                });
            });
        };
        return HarnessEnvironment;
    }());
    /**
     * Parses a list of queries in the format accepted by the `locatorFor*` methods into an easier to
     * work with format.
     */
    function _parseQueries(queries) {
        var e_1, _a;
        var allQueries = [];
        var harnessQueries = [];
        var elementQueries = [];
        var harnessTypes = new Set();
        try {
            for (var queries_1 = __values(queries), queries_1_1 = queries_1.next(); !queries_1_1.done; queries_1_1 = queries_1.next()) {
                var query = queries_1_1.value;
                if (typeof query === 'string') {
                    allQueries.push(query);
                    elementQueries.push(query);
                }
                else {
                    var predicate = query instanceof HarnessPredicate ? query : new HarnessPredicate(query, {});
                    allQueries.push(predicate);
                    harnessQueries.push(predicate);
                    harnessTypes.add(predicate.harnessType);
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (queries_1_1 && !queries_1_1.done && (_a = queries_1.return)) _a.call(queries_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return { allQueries: allQueries, harnessQueries: harnessQueries, elementQueries: elementQueries, harnessTypes: harnessTypes };
    }
    /**
     * Removes duplicate query results for a particular element. (e.g. multiple `TestElement`
     * instances or multiple instances of the same `ComponentHarness` class.
     */
    function _removeDuplicateQueryResults(results) {
        return __awaiter(this, void 0, void 0, function () {
            var testElementMatched, matchedHarnessTypes, dedupedMatches, results_1, results_1_1, result;
            var e_2, _a;
            return __generator(this, function (_b) {
                testElementMatched = false;
                matchedHarnessTypes = new Set();
                dedupedMatches = [];
                try {
                    for (results_1 = __values(results), results_1_1 = results_1.next(); !results_1_1.done; results_1_1 = results_1.next()) {
                        result = results_1_1.value;
                        if (!result) {
                            continue;
                        }
                        if (result instanceof ComponentHarness) {
                            if (!matchedHarnessTypes.has(result.constructor)) {
                                matchedHarnessTypes.add(result.constructor);
                                dedupedMatches.push(result);
                            }
                        }
                        else if (!testElementMatched) {
                            testElementMatched = true;
                            dedupedMatches.push(result);
                        }
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (results_1_1 && !results_1_1.done && (_a = results_1.return)) _a.call(results_1);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
                return [2 /*return*/, dedupedMatches];
            });
        });
    }
    /** Verifies that there is at least one result in an array. */
    function _assertResultFound(results, queryDescriptions) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, results];
                    case 1:
                        result = (_a.sent())[0];
                        if (result == undefined) {
                            throw Error("Failed to find element matching one of the following queries:\n" +
                                queryDescriptions.map(function (desc) { return "(" + desc + ")"; }).join(',\n'));
                        }
                        return [2 /*return*/, result];
                }
            });
        });
    }
    /** Gets a list of description strings from a list of queries. */
    function _getDescriptionForLocatorForQueries(queries) {
        return queries.map(function (query) { return typeof query === 'string' ?
            _getDescriptionForTestElementQuery(query) : _getDescriptionForComponentHarnessQuery(query); });
    }
    /** Gets a description string for a `ComponentHarness` query. */
    function _getDescriptionForComponentHarnessQuery(query) {
        var harnessPredicate = query instanceof HarnessPredicate ? query : new HarnessPredicate(query, {});
        var _a = harnessPredicate.harnessType, name = _a.name, hostSelector = _a.hostSelector;
        var description = name + " with host element matching selector: \"" + hostSelector + "\"";
        var constraints = harnessPredicate.getDescription();
        return description + (constraints ?
            " satisfying the constraints: " + harnessPredicate.getDescription() : '');
    }
    /** Gets a description string for a `TestElement` query. */
    function _getDescriptionForTestElementQuery(selector) {
        return "TestElement for element matching selector: \"" + selector + "\"";
    }
    /** Gets a description string for a `HarnessLoader` query. */
    function _getDescriptionForHarnessLoaderQuery(selector) {
        return "HarnessLoader for element matching selector: \"" + selector + "\"";
    }

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    (function (TestKey) {
        TestKey[TestKey["BACKSPACE"] = 0] = "BACKSPACE";
        TestKey[TestKey["TAB"] = 1] = "TAB";
        TestKey[TestKey["ENTER"] = 2] = "ENTER";
        TestKey[TestKey["SHIFT"] = 3] = "SHIFT";
        TestKey[TestKey["CONTROL"] = 4] = "CONTROL";
        TestKey[TestKey["ALT"] = 5] = "ALT";
        TestKey[TestKey["ESCAPE"] = 6] = "ESCAPE";
        TestKey[TestKey["PAGE_UP"] = 7] = "PAGE_UP";
        TestKey[TestKey["PAGE_DOWN"] = 8] = "PAGE_DOWN";
        TestKey[TestKey["END"] = 9] = "END";
        TestKey[TestKey["HOME"] = 10] = "HOME";
        TestKey[TestKey["LEFT_ARROW"] = 11] = "LEFT_ARROW";
        TestKey[TestKey["UP_ARROW"] = 12] = "UP_ARROW";
        TestKey[TestKey["RIGHT_ARROW"] = 13] = "RIGHT_ARROW";
        TestKey[TestKey["DOWN_ARROW"] = 14] = "DOWN_ARROW";
        TestKey[TestKey["INSERT"] = 15] = "INSERT";
        TestKey[TestKey["DELETE"] = 16] = "DELETE";
        TestKey[TestKey["F1"] = 17] = "F1";
        TestKey[TestKey["F2"] = 18] = "F2";
        TestKey[TestKey["F3"] = 19] = "F3";
        TestKey[TestKey["F4"] = 20] = "F4";
        TestKey[TestKey["F5"] = 21] = "F5";
        TestKey[TestKey["F6"] = 22] = "F6";
        TestKey[TestKey["F7"] = 23] = "F7";
        TestKey[TestKey["F8"] = 24] = "F8";
        TestKey[TestKey["F9"] = 25] = "F9";
        TestKey[TestKey["F10"] = 26] = "F10";
        TestKey[TestKey["F11"] = 27] = "F11";
        TestKey[TestKey["F12"] = 28] = "F12";
        TestKey[TestKey["META"] = 29] = "META";
    })(exports.TestKey || (exports.TestKey = {}));

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    exports.ComponentHarness = ComponentHarness;
    exports.HarnessEnvironment = HarnessEnvironment;
    exports.HarnessPredicate = HarnessPredicate;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=cdk-testing.umd.js.map
