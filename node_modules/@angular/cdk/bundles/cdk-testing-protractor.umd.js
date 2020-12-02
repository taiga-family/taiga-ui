(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/cdk/testing'), require('protractor')) :
    typeof define === 'function' && define.amd ? define('@angular/cdk/testing/protractor', ['exports', '@angular/cdk/testing', 'protractor'], factory) :
    (global = global || self, factory((global.ng = global.ng || {}, global.ng.cdk = global.ng.cdk || {}, global.ng.cdk.testing = global.ng.cdk.testing || {}, global.ng.cdk.testing.protractor = {}), global.ng.cdk.testing, global.protractor));
}(this, (function (exports, testing, protractor) { 'use strict';

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
    var _a;
    /** Maps the `TestKey` constants to Protractor's `Key` constants. */
    var keyMap = (_a = {},
        _a[testing.TestKey.BACKSPACE] = protractor.Key.BACK_SPACE,
        _a[testing.TestKey.TAB] = protractor.Key.TAB,
        _a[testing.TestKey.ENTER] = protractor.Key.ENTER,
        _a[testing.TestKey.SHIFT] = protractor.Key.SHIFT,
        _a[testing.TestKey.CONTROL] = protractor.Key.CONTROL,
        _a[testing.TestKey.ALT] = protractor.Key.ALT,
        _a[testing.TestKey.ESCAPE] = protractor.Key.ESCAPE,
        _a[testing.TestKey.PAGE_UP] = protractor.Key.PAGE_UP,
        _a[testing.TestKey.PAGE_DOWN] = protractor.Key.PAGE_DOWN,
        _a[testing.TestKey.END] = protractor.Key.END,
        _a[testing.TestKey.HOME] = protractor.Key.HOME,
        _a[testing.TestKey.LEFT_ARROW] = protractor.Key.ARROW_LEFT,
        _a[testing.TestKey.UP_ARROW] = protractor.Key.ARROW_UP,
        _a[testing.TestKey.RIGHT_ARROW] = protractor.Key.ARROW_RIGHT,
        _a[testing.TestKey.DOWN_ARROW] = protractor.Key.ARROW_DOWN,
        _a[testing.TestKey.INSERT] = protractor.Key.INSERT,
        _a[testing.TestKey.DELETE] = protractor.Key.DELETE,
        _a[testing.TestKey.F1] = protractor.Key.F1,
        _a[testing.TestKey.F2] = protractor.Key.F2,
        _a[testing.TestKey.F3] = protractor.Key.F3,
        _a[testing.TestKey.F4] = protractor.Key.F4,
        _a[testing.TestKey.F5] = protractor.Key.F5,
        _a[testing.TestKey.F6] = protractor.Key.F6,
        _a[testing.TestKey.F7] = protractor.Key.F7,
        _a[testing.TestKey.F8] = protractor.Key.F8,
        _a[testing.TestKey.F9] = protractor.Key.F9,
        _a[testing.TestKey.F10] = protractor.Key.F10,
        _a[testing.TestKey.F11] = protractor.Key.F11,
        _a[testing.TestKey.F12] = protractor.Key.F12,
        _a[testing.TestKey.META] = protractor.Key.META,
        _a);
    /** Converts a `ModifierKeys` object to a list of Protractor `Key`s. */
    function toProtractorModifierKeys(modifiers) {
        var result = [];
        if (modifiers.control) {
            result.push(protractor.Key.CONTROL);
        }
        if (modifiers.alt) {
            result.push(protractor.Key.ALT);
        }
        if (modifiers.shift) {
            result.push(protractor.Key.SHIFT);
        }
        if (modifiers.meta) {
            result.push(protractor.Key.META);
        }
        return result;
    }
    /** A `TestElement` implementation for Protractor. */
    var ProtractorElement = /** @class */ (function () {
        function ProtractorElement(element) {
            this.element = element;
        }
        ProtractorElement.prototype.blur = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, protractor.browser.executeScript('arguments[0].blur()', this.element)];
                });
            });
        };
        ProtractorElement.prototype.clear = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.element.clear()];
                });
            });
        };
        ProtractorElement.prototype.click = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return __awaiter(this, void 0, void 0, function () {
                var offsetArgs, _a, _b, _c;
                var _d;
                return __generator(this, function (_e) {
                    switch (_e.label) {
                        case 0:
                            offsetArgs = args.length ? [{ x: args[0], y: args[1] }] : [];
                            _b = (_a = (_d = protractor.browser.actions()).mouseMove).apply;
                            _c = [_d];
                            return [4 /*yield*/, this.element.getWebElement()];
                        case 1: return [4 /*yield*/, _b.apply(_a, _c.concat([__spread.apply(void 0, [[_e.sent()], offsetArgs])])).click()
                                .perform()];
                        case 2:
                            _e.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        ProtractorElement.prototype.focus = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, protractor.browser.executeScript('arguments[0].focus()', this.element)];
                });
            });
        };
        ProtractorElement.prototype.getCssValue = function (property) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.element.getCssValue(property)];
                });
            });
        };
        ProtractorElement.prototype.hover = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a, _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            _b = (_a = protractor.browser.actions()).mouseMove;
                            return [4 /*yield*/, this.element.getWebElement()];
                        case 1: return [2 /*return*/, _b.apply(_a, [_c.sent()])
                                .perform()];
                    }
                });
            });
        };
        ProtractorElement.prototype.sendKeys = function () {
            var modifiersAndKeys = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                modifiersAndKeys[_i] = arguments[_i];
            }
            return __awaiter(this, void 0, void 0, function () {
                var first, modifiers, rest, modifierKeys, keys;
                var _a;
                return __generator(this, function (_b) {
                    first = modifiersAndKeys[0];
                    if (typeof first !== 'string' && typeof first !== 'number') {
                        modifiers = first;
                        rest = modifiersAndKeys.slice(1);
                    }
                    else {
                        modifiers = {};
                        rest = modifiersAndKeys;
                    }
                    modifierKeys = toProtractorModifierKeys(modifiers);
                    keys = rest.map(function (k) { return typeof k === 'string' ? k.split('') : [keyMap[k]]; })
                        .reduce(function (arr, k) { return arr.concat(k); }, [])
                        // Key.chord doesn't work well with geckodriver (mozilla/geckodriver#1502),
                        // so avoid it if no modifier keys are required.
                        .map(function (k) { return modifierKeys.length > 0 ? protractor.Key.chord.apply(protractor.Key, __spread(modifierKeys, [k])) : k; });
                    return [2 /*return*/, (_a = this.element).sendKeys.apply(_a, __spread(keys))];
                });
            });
        };
        ProtractorElement.prototype.text = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.element.getText()];
                });
            });
        };
        ProtractorElement.prototype.getAttribute = function (name) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, protractor.browser.executeScript("return arguments[0].getAttribute(arguments[1])", this.element, name)];
                });
            });
        };
        ProtractorElement.prototype.hasClass = function (name) {
            return __awaiter(this, void 0, void 0, function () {
                var classes;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.getAttribute('class')];
                        case 1:
                            classes = (_a.sent()) || '';
                            return [2 /*return*/, new Set(classes.split(/\s+/).filter(function (c) { return c; })).has(name)];
                    }
                });
            });
        };
        ProtractorElement.prototype.getDimensions = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a, width, height, _b, left, top;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0: return [4 /*yield*/, this.element.getSize()];
                        case 1:
                            _a = _c.sent(), width = _a.width, height = _a.height;
                            return [4 /*yield*/, this.element.getLocation()];
                        case 2:
                            _b = _c.sent(), left = _b.x, top = _b.y;
                            return [2 /*return*/, { width: width, height: height, left: left, top: top }];
                    }
                });
            });
        };
        ProtractorElement.prototype.getProperty = function (name) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, protractor.browser.executeScript("return arguments[0][arguments[1]]", this.element, name)];
                });
            });
        };
        ProtractorElement.prototype.matchesSelector = function (selector) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, protractor.browser.executeScript("\n          return (Element.prototype.matches ||\n                  Element.prototype.msMatchesSelector).call(arguments[0], arguments[1])\n          ", this.element, selector)];
                });
            });
        };
        ProtractorElement.prototype.isFocused = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.element.equals(protractor.browser.driver.switchTo().activeElement())];
                });
            });
        };
        return ProtractorElement;
    }());

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /** The default environment options. */
    var defaultEnvironmentOptions = {
        queryFn: function (selector, root) { return root.all(protractor.by.css(selector)); }
    };
    /** A `HarnessEnvironment` implementation for Protractor. */
    var ProtractorHarnessEnvironment = /** @class */ (function (_super) {
        __extends(ProtractorHarnessEnvironment, _super);
        function ProtractorHarnessEnvironment(rawRootElement, options) {
            var _this = _super.call(this, rawRootElement) || this;
            _this._options = __assign(__assign({}, defaultEnvironmentOptions), options);
            return _this;
        }
        /** Creates a `HarnessLoader` rooted at the document root. */
        ProtractorHarnessEnvironment.loader = function (options) {
            return new ProtractorHarnessEnvironment(protractor.element(protractor.by.css('body')), options);
        };
        ProtractorHarnessEnvironment.prototype.forceStabilize = function () {
            return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/];
            }); });
        };
        ProtractorHarnessEnvironment.prototype.waitForTasksOutsideAngular = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/];
                });
            });
        };
        ProtractorHarnessEnvironment.prototype.getDocumentRoot = function () {
            return protractor.element(protractor.by.css('body'));
        };
        ProtractorHarnessEnvironment.prototype.createTestElement = function (element) {
            return new ProtractorElement(element);
        };
        ProtractorHarnessEnvironment.prototype.createEnvironment = function (element) {
            return new ProtractorHarnessEnvironment(element, this._options);
        };
        ProtractorHarnessEnvironment.prototype.getAllRawElements = function (selector) {
            return __awaiter(this, void 0, void 0, function () {
                var elementArrayFinder, length, elements, i;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            elementArrayFinder = this._options.queryFn(selector, this.rawRootElement);
                            return [4 /*yield*/, elementArrayFinder.count()];
                        case 1:
                            length = _a.sent();
                            elements = [];
                            for (i = 0; i < length; i++) {
                                elements.push(elementArrayFinder.get(i));
                            }
                            return [2 /*return*/, elements];
                    }
                });
            });
        };
        return ProtractorHarnessEnvironment;
    }(testing.HarnessEnvironment));

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

    exports.ProtractorElement = ProtractorElement;
    exports.ProtractorHarnessEnvironment = ProtractorHarnessEnvironment;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=cdk-testing-protractor.umd.js.map
