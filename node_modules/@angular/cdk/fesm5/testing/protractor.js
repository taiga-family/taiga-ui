import { __awaiter, __generator, __spread, __extends, __assign } from 'tslib';
import { TestKey, HarnessEnvironment } from '@angular/cdk/testing';
import { Key, browser, by, element } from 'protractor';

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
    _a[TestKey.BACKSPACE] = Key.BACK_SPACE,
    _a[TestKey.TAB] = Key.TAB,
    _a[TestKey.ENTER] = Key.ENTER,
    _a[TestKey.SHIFT] = Key.SHIFT,
    _a[TestKey.CONTROL] = Key.CONTROL,
    _a[TestKey.ALT] = Key.ALT,
    _a[TestKey.ESCAPE] = Key.ESCAPE,
    _a[TestKey.PAGE_UP] = Key.PAGE_UP,
    _a[TestKey.PAGE_DOWN] = Key.PAGE_DOWN,
    _a[TestKey.END] = Key.END,
    _a[TestKey.HOME] = Key.HOME,
    _a[TestKey.LEFT_ARROW] = Key.ARROW_LEFT,
    _a[TestKey.UP_ARROW] = Key.ARROW_UP,
    _a[TestKey.RIGHT_ARROW] = Key.ARROW_RIGHT,
    _a[TestKey.DOWN_ARROW] = Key.ARROW_DOWN,
    _a[TestKey.INSERT] = Key.INSERT,
    _a[TestKey.DELETE] = Key.DELETE,
    _a[TestKey.F1] = Key.F1,
    _a[TestKey.F2] = Key.F2,
    _a[TestKey.F3] = Key.F3,
    _a[TestKey.F4] = Key.F4,
    _a[TestKey.F5] = Key.F5,
    _a[TestKey.F6] = Key.F6,
    _a[TestKey.F7] = Key.F7,
    _a[TestKey.F8] = Key.F8,
    _a[TestKey.F9] = Key.F9,
    _a[TestKey.F10] = Key.F10,
    _a[TestKey.F11] = Key.F11,
    _a[TestKey.F12] = Key.F12,
    _a[TestKey.META] = Key.META,
    _a);
/** Converts a `ModifierKeys` object to a list of Protractor `Key`s. */
function toProtractorModifierKeys(modifiers) {
    var result = [];
    if (modifiers.control) {
        result.push(Key.CONTROL);
    }
    if (modifiers.alt) {
        result.push(Key.ALT);
    }
    if (modifiers.shift) {
        result.push(Key.SHIFT);
    }
    if (modifiers.meta) {
        result.push(Key.META);
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
                return [2 /*return*/, browser.executeScript('arguments[0].blur()', this.element)];
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
                        _b = (_a = (_d = browser.actions()).mouseMove).apply;
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
                return [2 /*return*/, browser.executeScript('arguments[0].focus()', this.element)];
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
                        _b = (_a = browser.actions()).mouseMove;
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
                    .map(function (k) { return modifierKeys.length > 0 ? Key.chord.apply(Key, __spread(modifierKeys, [k])) : k; });
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
                return [2 /*return*/, browser.executeScript("return arguments[0].getAttribute(arguments[1])", this.element, name)];
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
                return [2 /*return*/, browser.executeScript("return arguments[0][arguments[1]]", this.element, name)];
            });
        });
    };
    ProtractorElement.prototype.matchesSelector = function (selector) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, browser.executeScript("\n          return (Element.prototype.matches ||\n                  Element.prototype.msMatchesSelector).call(arguments[0], arguments[1])\n          ", this.element, selector)];
            });
        });
    };
    ProtractorElement.prototype.isFocused = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.element.equals(browser.driver.switchTo().activeElement())];
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
    queryFn: function (selector, root) { return root.all(by.css(selector)); }
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
        return new ProtractorHarnessEnvironment(element(by.css('body')), options);
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
        return element(by.css('body'));
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
}(HarnessEnvironment));

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

export { ProtractorElement, ProtractorHarnessEnvironment };
//# sourceMappingURL=protractor.js.map
