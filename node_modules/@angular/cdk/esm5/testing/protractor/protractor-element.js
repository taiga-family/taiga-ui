/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var _a;
import { __awaiter, __generator, __read, __spread } from "tslib";
import { TestKey } from '@angular/cdk/testing';
import { browser, Key } from 'protractor';
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
export { ProtractorElement };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvdHJhY3Rvci1lbGVtZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2Nkay90ZXN0aW5nL3Byb3RyYWN0b3IvcHJvdHJhY3Rvci1lbGVtZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRzs7O0FBRUgsT0FBTyxFQUErQyxPQUFPLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUMzRixPQUFPLEVBQUMsT0FBTyxFQUFpQixHQUFHLEVBQUMsTUFBTSxZQUFZLENBQUM7QUFFdkQsb0VBQW9FO0FBQ3BFLElBQU0sTUFBTTtJQUNWLEdBQUMsT0FBTyxDQUFDLFNBQVMsSUFBRyxHQUFHLENBQUMsVUFBVTtJQUNuQyxHQUFDLE9BQU8sQ0FBQyxHQUFHLElBQUcsR0FBRyxDQUFDLEdBQUc7SUFDdEIsR0FBQyxPQUFPLENBQUMsS0FBSyxJQUFHLEdBQUcsQ0FBQyxLQUFLO0lBQzFCLEdBQUMsT0FBTyxDQUFDLEtBQUssSUFBRyxHQUFHLENBQUMsS0FBSztJQUMxQixHQUFDLE9BQU8sQ0FBQyxPQUFPLElBQUcsR0FBRyxDQUFDLE9BQU87SUFDOUIsR0FBQyxPQUFPLENBQUMsR0FBRyxJQUFHLEdBQUcsQ0FBQyxHQUFHO0lBQ3RCLEdBQUMsT0FBTyxDQUFDLE1BQU0sSUFBRyxHQUFHLENBQUMsTUFBTTtJQUM1QixHQUFDLE9BQU8sQ0FBQyxPQUFPLElBQUcsR0FBRyxDQUFDLE9BQU87SUFDOUIsR0FBQyxPQUFPLENBQUMsU0FBUyxJQUFHLEdBQUcsQ0FBQyxTQUFTO0lBQ2xDLEdBQUMsT0FBTyxDQUFDLEdBQUcsSUFBRyxHQUFHLENBQUMsR0FBRztJQUN0QixHQUFDLE9BQU8sQ0FBQyxJQUFJLElBQUcsR0FBRyxDQUFDLElBQUk7SUFDeEIsR0FBQyxPQUFPLENBQUMsVUFBVSxJQUFHLEdBQUcsQ0FBQyxVQUFVO0lBQ3BDLEdBQUMsT0FBTyxDQUFDLFFBQVEs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b3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtFbGVtZW50RGltZW5zaW9ucywgTW9kaWZpZXJLZXlzLCBUZXN0RWxlbWVudCwgVGVzdEtleX0gZnJvbSAnQGFuZ3VsYXIvY2RrL3Rlc3RpbmcnO1xuaW1wb3J0IHticm93c2VyLCBFbGVtZW50RmluZGVyLCBLZXl9IGZyb20gJ3Byb3RyYWN0b3InO1xuXG4vKiogTWFwcyB0aGUgYFRlc3RLZXlgIGNvbnN0YW50cyB0byBQcm90cmFjdG9yJ3MgYEtleWAgY29uc3RhbnRzLiAqL1xuY29uc3Qga2V5TWFwID0ge1xuICBbVGVzdEtleS5CQUNLU1BBQ0VdOiBLZXkuQkFDS19TUEFDRSxcbiAgW1Rlc3RLZXkuVEFCXTogS2V5LlRBQixcbiAgW1Rlc3RLZXkuRU5URVJdOiBLZXkuRU5URVIsXG4gIFtUZXN0S2V5LlNISUZUXTogS2V5LlNISUZULFxuICBbVGVzdEtleS5DT05UUk9MXTogS2V5LkNPTlRST0wsXG4gIFtUZXN0S2V5LkFMVF06IEtleS5BTFQsXG4gIFtUZXN0S2V5LkVTQ0FQRV06IEtleS5FU0NBUEUsXG4gIFtUZXN0S2V5LlBBR0VfVVBdOiBLZXkuUEFHRV9VUCxcbiAgW1Rlc3RLZXkuUEFHRV9ET1dOXTogS2V5LlBBR0VfRE9XTixcbiAgW1Rlc3RLZXkuRU5EXTogS2V5LkVORCxcbiAgW1Rlc3RLZXkuSE9NRV06IEtleS5IT01FLFxuICBbVGVzdEtleS5MRUZUX0FSUk9XXTogS2V5LkFSUk9XX0xFRlQsXG4gIFtUZXN0S2V5LlVQX0FSUk9XXTogS2V5LkFSUk9XX1VQLFxuICBbVGVzdEtleS5SSUdIVF9BUlJPV106IEtleS5BUlJPV19SSUdIVCxcbiAgW1Rlc3RLZXkuRE9XTl9BUlJPV106IEtleS5BUlJPV19ET1dOLFxuICBbVGVzdEtleS5JTlNFUlRdOiBLZXkuSU5TRVJULFxuICBbVGVzdEtleS5ERUxFVEVdOiBLZXkuREVMRVRFLFxuICBbVGVzdEtleS5GMV06IEtleS5GMSxcbiAgW1Rlc3RLZXkuRjJdOiBLZXkuRjIsXG4gIFtUZXN0S2V5LkYzXTogS2V5LkYzLFxuICBbVGVzdEtleS5GNF06IEtleS5GNCxcbiAgW1Rlc3RLZXkuRjVdOiBLZXkuRjUsXG4gIFtUZXN0S2V5LkY2XTogS2V5LkY2LFxuICBbVGVzdEtleS5GN106IEtleS5GNyxcbiAgW1Rlc3RLZXkuRjhdOiBLZXkuRjgsXG4gIFtUZXN0S2V5LkY5XTogS2V5LkY5LFxuICBbVGVzdEtleS5GMTBdOiBLZXkuRjEwLFxuICBbVGVzdEtleS5GMTFdOiBLZXkuRjExLFxuICBbVGVzdEtleS5GMTJdOiBLZXkuRjEyLFxuICBbVGVzdEtleS5NRVRBXTogS2V5Lk1FVEFcbn07XG5cbi8qKiBDb252ZXJ0cyBhIGBNb2RpZmllcktleXNgIG9iamVjdCB0byBhIGxpc3Qgb2YgUHJvdHJhY3RvciBgS2V5YHMuICovXG5mdW5jdGlvbiB0b1Byb3RyYWN0b3JNb2RpZmllcktleXMobW9kaWZpZXJzOiBNb2RpZmllcktleXMpOiBzdHJpbmdbXSB7XG4gIGNvbnN0IHJlc3VsdDogc3RyaW5nW10gPSBbXTtcbiAgaWYgKG1vZGlmaWVycy5jb250cm9sKSB7XG4gICAgcmVzdWx0LnB1c2goS2V5LkNPTlRST0wpO1xuICB9XG4gIGlmIChtb2RpZmllcnMuYWx0KSB7XG4gICAgcmVzdWx0LnB1c2goS2V5LkFMVCk7XG4gIH1cbiAgaWYgKG1vZGlmaWVycy5zaGlmdCkge1xuICAgIHJlc3VsdC5wdXNoKEtleS5TSElGVCk7XG4gIH1cbiAgaWYgKG1vZGlmaWVycy5tZXRhKSB7XG4gICAgcmVzdWx0LnB1c2goS2V5Lk1FVEEpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKiBBIGBUZXN0RWxlbWVudGAgaW1wbGVtZW50YXRpb24gZm9yIFByb3RyYWN0b3IuICovXG5leHBvcnQgY2xhc3MgUHJvdHJhY3RvckVsZW1lbnQgaW1wbGVtZW50cyBUZXN0RWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHJlYWRvbmx5IGVsZW1lbnQ6IEVsZW1lbnRGaW5kZXIpIHt9XG5cbiAgYXN5bmMgYmx1cigpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gYnJvd3Nlci5leGVjdXRlU2NyaXB0KCdhcmd1bWVudHNbMF0uYmx1cigpJywgdGhpcy5lbGVtZW50KTtcbiAgfVxuXG4gIGFzeW5jIGNsZWFyKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLmVsZW1lbnQuY2xlYXIoKTtcbiAgfVxuXG4gIGFzeW5jIGNsaWNrKC4uLmFyZ3M6IG51bWJlcltdKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgLy8gT21pdHRpbmcgdGhlIG9mZnNldCBhcmd1bWVudCB0byBtb3VzZU1vdmUgcmVzdWx0cyBpbiBjbGlja2luZyB0aGUgY2VudGVyLlxuICAgIC8vIFRoaXMgaXMgdGhlIGRlZmF1bHQgYmVoYXZpb3Igd2Ugd2FudCwgc28gd2UgdXNlIGFuIGVtcHR5IGFycmF5IG9mIG9mZnNldEFyZ3MgaWYgbm8gYXJncyBhcmVcbiAgICAvLyBwYXNzZWQgdG8gdGhpcyBtZXRob2QuXG4gICAgY29uc3Qgb2Zmc2V0QXJncyA9IGFyZ3MubGVuZ3RoID8gW3t4OiBhcmdzWzBdLCB5OiBhcmdzWzFdfV0gOiBbXTtcblxuICAgIGF3YWl0IGJyb3dzZXIuYWN0aW9ucygpXG4gICAgICAubW91c2VNb3ZlKGF3YWl0IHRoaXMuZWxlbWVudC5nZXRXZWJFbGVtZW50KCksIC4uLm9mZnNldEFyZ3MpXG4gICAgICAuY2xpY2soKVxuICAgICAgLnBlcmZvcm0oKTtcbiAgfVxuXG4gIGFzeW5jIGZvY3VzKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiBicm93c2VyLmV4ZWN1dGVTY3JpcHQoJ2FyZ3VtZW50c1swXS5mb2N1cygpJywgdGhpcy5lbGVtZW50KTtcbiAgfVxuXG4gIGFzeW5jIGdldENzc1ZhbHVlKHByb3BlcnR5OiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLmVsZW1lbnQuZ2V0Q3NzVmFsdWUocHJvcGVydHkpO1xuICB9XG5cbiAgYXN5bmMgaG92ZXIoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIGJyb3dzZXIuYWN0aW9ucygpXG4gICAgICAgIC5tb3VzZU1vdmUoYXdhaXQgdGhpcy5lbGVtZW50LmdldFdlYkVsZW1lbnQoKSlcbiAgICAgICAgLnBlcmZvcm0oKTtcbiAgfVxuXG4gIGFzeW5jIHNlbmRLZXlzKC4uLmtleXM6IChzdHJpbmcgfCBUZXN0S2V5KVtdKTogUHJvbWlzZTx2b2lkPjtcbiAgYXN5bmMgc2VuZEtleXMobW9kaWZpZXJzOiBNb2RpZmllcktleXMsIC4uLmtleXM6IChzdHJpbmcgfCBUZXN0S2V5KVtdKTogUHJvbWlzZTx2b2lkPjtcbiAgYXN5bmMgc2VuZEtleXMoLi4ubW9kaWZpZXJzQW5kS2V5czogYW55W10pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCBmaXJzdCA9IG1vZGlmaWVyc0FuZEtleXNbMF07XG4gICAgbGV0IG1vZGlmaWVyczogTW9kaWZpZXJLZXlzO1xuICAgIGxldCByZXN0OiAoc3RyaW5nIHwgVGVzdEtleSlbXTtcbiAgICBpZiAodHlwZW9mIGZpcnN0ICE9PSAnc3RyaW5nJyAmJiB0eXBlb2YgZmlyc3QgIT09ICdudW1iZXInKSB7XG4gICAgICBtb2RpZmllcnMgPSBmaXJzdDtcbiAgICAgIHJlc3QgPSBtb2RpZmllcnNBbmRLZXlzLnNsaWNlKDEpO1xuICAgIH0gZWxzZSB7XG4gICAgICBtb2RpZmllcnMgPSB7fTtcbiAgICAgIHJlc3QgPSBtb2RpZmllcnNBbmRLZXlzO1xuICAgIH1cblxuICAgIGNvbnN0IG1vZGlmaWVyS2V5cyA9IHRvUHJvdHJhY3Rvck1vZGlmaWVyS2V5cyhtb2RpZmllcnMpO1xuICAgIGNvbnN0IGtleXMgPSByZXN0Lm1hcChrID0+IHR5cGVvZiBrID09PSAnc3RyaW5nJyA/IGsuc3BsaXQoJycpIDogW2tleU1hcFtrXV0pXG4gICAgICAgIC5yZWR1Y2UoKGFyciwgaykgPT4gYXJyLmNvbmNhdChrKSwgW10pXG4gICAgICAgIC8vIEtleS5jaG9yZCBkb2Vzbid0IHdvcmsgd2VsbCB3aXRoIGdlY2tvZHJpdmVyIChtb3ppbGxhL2dlY2tvZHJpdmVyIzE1MDIpLFxuICAgICAgICAvLyBzbyBhdm9pZCBpdCBpZiBubyBtb2RpZmllciBrZXlzIGFyZSByZXF1aXJlZC5cbiAgICAgICAgLm1hcChrID0+IG1vZGlmaWVyS2V5cy5sZW5ndGggPiAwID8gS2V5LmNob3JkKC4uLm1vZGlmaWVyS2V5cywgaykgOiBrKTtcblxuICAgIHJldHVybiB0aGlzLmVsZW1lbnQuc2VuZEtleXMoLi4ua2V5cyk7XG4gIH1cblxuICBhc3luYyB0ZXh0KCk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudC5nZXRUZXh0KCk7XG4gIH1cblxuICBhc3luYyBnZXRBdHRyaWJ1dGUobmFtZTogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmd8bnVsbD4ge1xuICAgIHJldHVybiBicm93c2VyLmV4ZWN1dGVTY3JpcHQoXG4gICAgICAgIGByZXR1cm4gYXJndW1lbnRzWzBdLmdldEF0dHJpYnV0ZShhcmd1bWVudHNbMV0pYCwgdGhpcy5lbGVtZW50LCBuYW1lKTtcbiAgfVxuXG4gIGFzeW5jIGhhc0NsYXNzKG5hbWU6IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGNvbnN0IGNsYXNzZXMgPSAoYXdhaXQgdGhpcy5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykpIHx8ICcnO1xuICAgIHJldHVybiBuZXcgU2V0KGNsYXNzZXMuc3BsaXQoL1xccysvKS5maWx0ZXIoYyA9PiBjKSkuaGFzKG5hbWUpO1xuICB9XG5cbiAgYXN5bmMgZ2V0RGltZW5zaW9ucygpOiBQcm9taXNlPEVsZW1lbnREaW1lbnNpb25zPiB7XG4gICAgY29uc3Qge3dpZHRoLCBoZWlnaHR9ID0gYXdhaXQgdGhpcy5lbGVtZW50LmdldFNpemUoKTtcbiAgICBjb25zdCB7eDogbGVmdCwgeTogdG9wfSA9IGF3YWl0IHRoaXMuZWxlbWVudC5nZXRMb2NhdGlvbigpO1xuICAgIHJldHVybiB7d2lkdGgsIGhlaWdodCwgbGVmdCwgdG9wfTtcbiAgfVxuXG4gIGFzeW5jIGdldFByb3BlcnR5KG5hbWU6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIGJyb3dzZXIuZXhlY3V0ZVNjcmlwdChgcmV0dXJuIGFyZ3VtZW50c1swXVthcmd1bWVudHNbMV1dYCwgdGhpcy5lbGVtZW50LCBuYW1lKTtcbiAgfVxuXG4gIGFzeW5jIG1hdGNoZXNTZWxlY3RvcihzZWxlY3Rvcjogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgICByZXR1cm4gYnJvd3Nlci5leGVjdXRlU2NyaXB0KGBcbiAgICAgICAgICByZXR1cm4gKEVsZW1lbnQucHJvdG90eXBlLm1hdGNoZXMgfHxcbiAgICAgICAgICAgICAgICAgIEVsZW1lbnQucHJvdG90eXBlLm1zTWF0Y2hlc1NlbGVjdG9yKS5jYWxsKGFyZ3VtZW50c1swXSwgYXJndW1lbnRzWzFdKVxuICAgICAgICAgIGAsIHRoaXMuZWxlbWVudCwgc2VsZWN0b3IpO1xuICB9XG5cbiAgYXN5bmMgaXNGb2N1c2VkKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLmVsZW1lbnQuZXF1YWxzKGJyb3dzZXIuZHJpdmVyLnN3aXRjaFRvKCkuYWN0aXZlRWxlbWVudCgpKTtcbiAgfVxufVxuIl19