import { __spread, __assign, __values, __awaiter, __generator, __extends } from 'tslib';
import { TestKey, HarnessEnvironment } from '@angular/cdk/testing';
import { flush } from '@angular/core/testing';
import { takeWhile } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { BACKSPACE, TAB, ENTER, SHIFT, CONTROL, ALT, ESCAPE, PAGE_UP, PAGE_DOWN, END, HOME, LEFT_ARROW, UP_ARROW, RIGHT_ARROW, DOWN_ARROW, INSERT, DELETE, F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, F12, META } from '@angular/cdk/keycodes';

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Unique symbol that is used to patch a property to a proxy zone. */
var stateObservableSymbol = Symbol('ProxyZone_PATCHED#stateObservable');
/**
 * Interceptor that can be set up in a `ProxyZone` instance. The interceptor
 * will keep track of the task state and emit whenever the state changes.
 *
 * This serves as a workaround for https://github.com/angular/angular/issues/32896.
 */
var TaskStateZoneInterceptor = /** @class */ (function () {
    function TaskStateZoneInterceptor(_lastState) {
        this._lastState = _lastState;
        /** Subject that can be used to emit a new state change. */
        this._stateSubject = new BehaviorSubject(this._lastState ? this._getTaskStateFromInternalZoneState(this._lastState) : { stable: true });
        /** Public observable that emits whenever the task state changes. */
        this.state = this._stateSubject.asObservable();
    }
    /** This will be called whenever the task state changes in the intercepted zone. */
    TaskStateZoneInterceptor.prototype.onHasTask = function (delegate, current, target, hasTaskState) {
        if (current === target) {
            this._stateSubject.next(this._getTaskStateFromInternalZoneState(hasTaskState));
        }
    };
    /** Gets the task state from the internal ZoneJS task state. */
    TaskStateZoneInterceptor.prototype._getTaskStateFromInternalZoneState = function (state) {
        return { stable: !state.macroTask && !state.microTask };
    };
    /**
     * Sets up the custom task state Zone interceptor in the  `ProxyZone`. Throws if
     * no `ProxyZone` could be found.
     * @returns an observable that emits whenever the task state changes.
     */
    TaskStateZoneInterceptor.setup = function () {
        if (Zone === undefined) {
            throw Error('Could not find ZoneJS. For test harnesses running in TestBed, ' +
                'ZoneJS needs to be installed.');
        }
        // tslint:disable-next-line:variable-name
        var ProxyZoneSpec = Zone['ProxyZoneSpec'];
        // If there is no "ProxyZoneSpec" installed, we throw an error and recommend
        // setting up the proxy zone by pulling in the testing bundle.
        if (!ProxyZoneSpec) {
            throw Error('ProxyZoneSpec is needed for the test harnesses but could not be found. ' +
                'Please make sure that your environment includes zone.js/dist/zone-testing.js');
        }
        // Ensure that there is a proxy zone instance set up, and get
        // a reference to the instance if present.
        var zoneSpec = ProxyZoneSpec.assertPresent();
        // If there already is a delegate registered in the proxy zone, and it
        // is type of the custom task state interceptor, we just use that state
        // observable. This allows us to only intercept Zone once per test
        // (similar to how `fakeAsync` or `async` work).
        if (zoneSpec[stateObservableSymbol]) {
            return zoneSpec[stateObservableSymbol];
        }
        // Since we intercept on environment creation and the fixture has been
        // created before, we might have missed tasks scheduled before. Fortunately
        // the proxy zone keeps track of the previous task state, so we can just pass
        // this as initial state to the task zone interceptor.
        var interceptor = new TaskStateZoneInterceptor(zoneSpec.lastTaskState);
        var zoneSpecOnHasTask = zoneSpec.onHasTask.bind(zoneSpec);
        // We setup the task state interceptor in the `ProxyZone`. Note that we cannot register
        // the interceptor as a new proxy zone delegate because it would mean that other zone
        // delegates (e.g. `FakeAsyncTestZone` or `AsyncTestZone`) can accidentally overwrite/disable
        // our interceptor. Since we just intend to monitor the task state of the proxy zone, it is
        // sufficient to just patch the proxy zone. This also avoids that we interfere with the task
        // queue scheduling logic.
        zoneSpec.onHasTask = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            zoneSpecOnHasTask.apply(void 0, __spread(args));
            interceptor.onHasTask.apply(interceptor, __spread(args));
        };
        return zoneSpec[stateObservableSymbol] = interceptor.state;
    };
    return TaskStateZoneInterceptor;
}());

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Creates a browser MouseEvent with the specified options.
 * @docs-private
 */
function createMouseEvent(type, clientX, clientY, button) {
    if (clientX === void 0) { clientX = 0; }
    if (clientY === void 0) { clientY = 0; }
    if (button === void 0) { button = 0; }
    var event = document.createEvent('MouseEvent');
    var originalPreventDefault = event.preventDefault.bind(event);
    // Note: We cannot determine the position of the mouse event based on the screen
    // because the dimensions and position of the browser window are not available
    // To provide reasonable `screenX` and `screenY` coordinates, we simply use the
    // client coordinates as if the browser is opened in fullscreen.
    var screenX = clientX;
    var screenY = clientY;
    event.initMouseEvent(type, 
    /* canBubble */ true, 
    /* cancelable */ true, 
    /* view */ window, 
    /* detail */ 0, 
    /* screenX */ screenX, 
    /* screenY */ screenY, 
    /* clientX */ clientX, 
    /* clientY */ clientY, 
    /* ctrlKey */ false, 
    /* altKey */ false, 
    /* shiftKey */ false, 
    /* metaKey */ false, 
    /* button */ button, 
    /* relatedTarget */ null);
    // `initMouseEvent` doesn't allow us to pass the `buttons` and
    // defaults it to 0 which looks like a fake event.
    Object.defineProperty(event, 'buttons', { get: function () { return 1; } });
    // IE won't set `defaultPrevented` on synthetic events so we need to do it manually.
    event.preventDefault = function () {
        Object.defineProperty(event, 'defaultPrevented', { get: function () { return true; } });
        return originalPreventDefault();
    };
    return event;
}
/**
 * Creates a browser `PointerEvent` with the specified options. Pointer events
 * by default will appear as if they are the primary pointer of their type.
 * https://www.w3.org/TR/pointerevents2/#dom-pointerevent-isprimary.
 *
 * For example, if pointer events for a multi-touch interaction are created, the non-primary
 * pointer touches would need to be represented by non-primary pointer events.
 *
 * @docs-private
 */
function createPointerEvent(type, clientX, clientY, options) {
    if (clientX === void 0) { clientX = 0; }
    if (clientY === void 0) { clientY = 0; }
    if (options === void 0) { options = { isPrimary: true }; }
    return new PointerEvent(type, __assign({ bubbles: true, cancelable: true, view: window, clientX: clientX,
        clientY: clientY }, options));
}
/**
 * Creates a browser TouchEvent with the specified pointer coordinates.
 * @docs-private
 */
function createTouchEvent(type, pageX, pageY) {
    if (pageX === void 0) { pageX = 0; }
    if (pageY === void 0) { pageY = 0; }
    // In favor of creating events that work for most of the browsers, the event is created
    // as a basic UI Event. The necessary details for the event will be set manually.
    var event = document.createEvent('UIEvent');
    var touchDetails = { pageX: pageX, pageY: pageY };
    // TS3.6 removes the initUIEvent method and suggests porting to "new UIEvent()".
    event.initUIEvent(type, true, true, window, 0);
    // Most of the browsers don't have a "initTouchEvent" method that can be used to define
    // the touch details.
    Object.defineProperties(event, {
        touches: { value: [touchDetails] },
        targetTouches: { value: [touchDetails] },
        changedTouches: { value: [touchDetails] }
    });
    return event;
}
/**
 * Dispatches a keydown event from an element.
 * @docs-private
 */
function createKeyboardEvent(type, keyCode, key, target, modifiers) {
    if (keyCode === void 0) { keyCode = 0; }
    if (key === void 0) { key = ''; }
    if (modifiers === void 0) { modifiers = {}; }
    var event = document.createEvent('KeyboardEvent');
    var originalPreventDefault = event.preventDefault;
    // Firefox does not support `initKeyboardEvent`, but supports `initKeyEvent`.
    if (event.initKeyEvent) {
        event.initKeyEvent(type, true, true, window, modifiers.control, modifiers.alt, modifiers.shift, modifiers.meta, keyCode);
    }
    else {
        // `initKeyboardEvent` expects to receive modifiers as a whitespace-delimited string
        // See https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/initKeyboardEvent
        var modifiersList = '';
        if (modifiers.control) {
            modifiersList += 'Control ';
        }
        if (modifiers.alt) {
            modifiersList += 'Alt ';
        }
        if (modifiers.shift) {
            modifiersList += 'Shift ';
        }
        if (modifiers.meta) {
            modifiersList += 'Meta ';
        }
        event.initKeyboardEvent(type, true, /* canBubble */ true, /* cancelable */ window, /* view */ 0, /* char */ key, /* key */ 0, /* location */ modifiersList.trim(), /* modifiersList */ false /* repeat */);
    }
    // Webkit Browsers don't set the keyCode when calling the init function.
    // See related bug https://bugs.webkit.org/show_bug.cgi?id=16735
    Object.defineProperties(event, {
        keyCode: { get: function () { return keyCode; } },
        key: { get: function () { return key; } },
        target: { get: function () { return target; } },
        ctrlKey: { get: function () { return !!modifiers.control; } },
        altKey: { get: function () { return !!modifiers.alt; } },
        shiftKey: { get: function () { return !!modifiers.shift; } },
        metaKey: { get: function () { return !!modifiers.meta; } }
    });
    // IE won't set `defaultPrevented` on synthetic events so we need to do it manually.
    event.preventDefault = function () {
        Object.defineProperty(event, 'defaultPrevented', { get: function () { return true; } });
        return originalPreventDefault.apply(this, arguments);
    };
    return event;
}
/**
 * Creates a fake event object with any desired event type.
 * @docs-private
 */
function createFakeEvent(type, canBubble, cancelable) {
    if (canBubble === void 0) { canBubble = false; }
    if (cancelable === void 0) { cancelable = true; }
    var event = document.createEvent('Event');
    event.initEvent(type, canBubble, cancelable);
    return event;
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Utility to dispatch any event on a Node.
 * @docs-private
 */
function dispatchEvent(node, event) {
    node.dispatchEvent(event);
    return event;
}
/**
 * Shorthand to dispatch a fake event on a specified node.
 * @docs-private
 */
function dispatchFakeEvent(node, type, canBubble) {
    return dispatchEvent(node, createFakeEvent(type, canBubble));
}
/**
 * Shorthand to dispatch a keyboard event with a specified key code.
 * @docs-private
 */
function dispatchKeyboardEvent(node, type, keyCode, key, target, modifiers) {
    return dispatchEvent(node, createKeyboardEvent(type, keyCode, key, target, modifiers));
}
/**
 * Shorthand to dispatch a mouse event on the specified coordinates.
 * @docs-private
 */
function dispatchMouseEvent(node, type, clientX, clientY) {
    if (clientX === void 0) { clientX = 0; }
    if (clientY === void 0) { clientY = 0; }
    return dispatchEvent(node, createMouseEvent(type, clientX, clientY));
}
/**
 * Shorthand to dispatch a pointer event on the specified coordinates.
 * @docs-private
 */
function dispatchPointerEvent(node, type, clientX, clientY, options) {
    if (clientX === void 0) { clientX = 0; }
    if (clientY === void 0) { clientY = 0; }
    return dispatchEvent(node, createPointerEvent(type, clientX, clientY, options));
}
/**
 * Shorthand to dispatch a touch event on the specified coordinates.
 * @docs-private
 */
function dispatchTouchEvent(node, type, x, y) {
    if (x === void 0) { x = 0; }
    if (y === void 0) { y = 0; }
    return dispatchEvent(node, createTouchEvent(type, x, y));
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function triggerFocusChange(element, event) {
    var eventFired = false;
    var handler = function () { return eventFired = true; };
    element.addEventListener(event, handler);
    element[event]();
    element.removeEventListener(event, handler);
    if (!eventFired) {
        dispatchFakeEvent(element, event);
    }
}
/**
 * Patches an elements focus and blur methods to emit events consistently and predictably.
 * This is necessary, because some browsers, like IE11, will call the focus handlers asynchronously,
 * while others won't fire them at all if the browser window is not focused.
 * @docs-private
 */
function patchElementFocus(element) {
    element.focus = function () { return dispatchFakeEvent(element, 'focus'); };
    element.blur = function () { return dispatchFakeEvent(element, 'blur'); };
}
/** @docs-private */
function triggerFocus(element) {
    triggerFocusChange(element, 'focus');
}
/** @docs-private */
function triggerBlur(element) {
    triggerFocusChange(element, 'blur');
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Checks whether the given Element is a text input element.
 * @docs-private
 */
function isTextInput(element) {
    var nodeName = element.nodeName.toLowerCase();
    return nodeName === 'input' || nodeName === 'textarea';
}
function typeInElement(element) {
    var e_1, _a;
    var modifiersAndKeys = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        modifiersAndKeys[_i - 1] = arguments[_i];
    }
    var first = modifiersAndKeys[0];
    var modifiers;
    var rest;
    if (typeof first !== 'string' && first.keyCode === undefined && first.key === undefined) {
        modifiers = first;
        rest = modifiersAndKeys.slice(1);
    }
    else {
        modifiers = {};
        rest = modifiersAndKeys;
    }
    var keys = rest
        .map(function (k) { return typeof k === 'string' ?
        k.split('').map(function (c) { return ({ keyCode: c.toUpperCase().charCodeAt(0), key: c }); }) : [k]; })
        .reduce(function (arr, k) { return arr.concat(k); }, []);
    triggerFocus(element);
    try {
        for (var keys_1 = __values(keys), keys_1_1 = keys_1.next(); !keys_1_1.done; keys_1_1 = keys_1.next()) {
            var key = keys_1_1.value;
            dispatchKeyboardEvent(element, 'keydown', key.keyCode, key.key, element, modifiers);
            dispatchKeyboardEvent(element, 'keypress', key.keyCode, key.key, element, modifiers);
            if (isTextInput(element) && key.key && key.key.length === 1) {
                element.value += key.key;
                dispatchFakeEvent(element, 'input');
            }
            dispatchKeyboardEvent(element, 'keyup', key.keyCode, key.key, element, modifiers);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (keys_1_1 && !keys_1_1.done && (_a = keys_1.return)) _a.call(keys_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
}
/**
 * Clears the text in an input or textarea element.
 * @docs-private
 */
function clearElement(element) {
    triggerFocus(element);
    element.value = '';
    dispatchFakeEvent(element, 'input');
}

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
var _a;
/** Maps `TestKey` constants to the `keyCode` and `key` values used by native browser events. */
var keyMap = (_a = {},
    _a[TestKey.BACKSPACE] = { keyCode: BACKSPACE, key: 'Backspace' },
    _a[TestKey.TAB] = { keyCode: TAB, key: 'Tab' },
    _a[TestKey.ENTER] = { keyCode: ENTER, key: 'Enter' },
    _a[TestKey.SHIFT] = { keyCode: SHIFT, key: 'Shift' },
    _a[TestKey.CONTROL] = { keyCode: CONTROL, key: 'Control' },
    _a[TestKey.ALT] = { keyCode: ALT, key: 'Alt' },
    _a[TestKey.ESCAPE] = { keyCode: ESCAPE, key: 'Escape' },
    _a[TestKey.PAGE_UP] = { keyCode: PAGE_UP, key: 'PageUp' },
    _a[TestKey.PAGE_DOWN] = { keyCode: PAGE_DOWN, key: 'PageDown' },
    _a[TestKey.END] = { keyCode: END, key: 'End' },
    _a[TestKey.HOME] = { keyCode: HOME, key: 'Home' },
    _a[TestKey.LEFT_ARROW] = { keyCode: LEFT_ARROW, key: 'ArrowLeft' },
    _a[TestKey.UP_ARROW] = { keyCode: UP_ARROW, key: 'ArrowUp' },
    _a[TestKey.RIGHT_ARROW] = { keyCode: RIGHT_ARROW, key: 'ArrowRight' },
    _a[TestKey.DOWN_ARROW] = { keyCode: DOWN_ARROW, key: 'ArrowDown' },
    _a[TestKey.INSERT] = { keyCode: INSERT, key: 'Insert' },
    _a[TestKey.DELETE] = { keyCode: DELETE, key: 'Delete' },
    _a[TestKey.F1] = { keyCode: F1, key: 'F1' },
    _a[TestKey.F2] = { keyCode: F2, key: 'F2' },
    _a[TestKey.F3] = { keyCode: F3, key: 'F3' },
    _a[TestKey.F4] = { keyCode: F4, key: 'F4' },
    _a[TestKey.F5] = { keyCode: F5, key: 'F5' },
    _a[TestKey.F6] = { keyCode: F6, key: 'F6' },
    _a[TestKey.F7] = { keyCode: F7, key: 'F7' },
    _a[TestKey.F8] = { keyCode: F8, key: 'F8' },
    _a[TestKey.F9] = { keyCode: F9, key: 'F9' },
    _a[TestKey.F10] = { keyCode: F10, key: 'F10' },
    _a[TestKey.F11] = { keyCode: F11, key: 'F11' },
    _a[TestKey.F12] = { keyCode: F12, key: 'F12' },
    _a[TestKey.META] = { keyCode: META, key: 'Meta' },
    _a);
/** A `TestElement` implementation for unit tests. */
var UnitTestElement = /** @class */ (function () {
    function UnitTestElement(element, _stabilize) {
        this.element = element;
        this._stabilize = _stabilize;
    }
    UnitTestElement.prototype.blur = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._stabilize()];
                    case 1:
                        _a.sent();
                        triggerBlur(this.element);
                        return [4 /*yield*/, this._stabilize()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    UnitTestElement.prototype.clear = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._stabilize()];
                    case 1:
                        _a.sent();
                        if (!isTextInput(this.element)) {
                            throw Error('Attempting to clear an invalid element');
                        }
                        clearElement(this.element);
                        return [4 /*yield*/, this._stabilize()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    UnitTestElement.prototype.click = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return __awaiter(this, void 0, void 0, function () {
            var _a, left, top, width, height, relativeX, relativeY, clientX, clientY, emitPointerEvents;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.getDimensions()];
                    case 1:
                        _a = _b.sent(), left = _a.left, top = _a.top, width = _a.width, height = _a.height;
                        relativeX = args.length ? args[0] : width / 2;
                        relativeY = args.length ? args[1] : height / 2;
                        clientX = Math.round(left + relativeX);
                        clientY = Math.round(top + relativeY);
                        emitPointerEvents = window.PointerEvent !== undefined;
                        if (emitPointerEvents) {
                            dispatchPointerEvent(this.element, 'pointerdown', clientX, clientY);
                        }
                        dispatchMouseEvent(this.element, 'mousedown', clientX, clientY);
                        if (emitPointerEvents) {
                            dispatchMouseEvent(this.element, 'pointerup', clientX, clientY);
                        }
                        dispatchMouseEvent(this.element, 'mouseup', clientX, clientY);
                        dispatchMouseEvent(this.element, 'click', clientX, clientY);
                        return [4 /*yield*/, this._stabilize()];
                    case 2:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    UnitTestElement.prototype.focus = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._stabilize()];
                    case 1:
                        _a.sent();
                        triggerFocus(this.element);
                        return [4 /*yield*/, this._stabilize()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    UnitTestElement.prototype.getCssValue = function (property) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._stabilize()];
                    case 1:
                        _a.sent();
                        // TODO(mmalerba): Consider adding value normalization if we run into common cases where its
                        //  needed.
                        return [2 /*return*/, getComputedStyle(this.element).getPropertyValue(property)];
                }
            });
        });
    };
    UnitTestElement.prototype.hover = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._stabilize()];
                    case 1:
                        _a.sent();
                        dispatchMouseEvent(this.element, 'mouseenter');
                        return [4 /*yield*/, this._stabilize()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    UnitTestElement.prototype.sendKeys = function () {
        var modifiersAndKeys = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            modifiersAndKeys[_i] = arguments[_i];
        }
        return __awaiter(this, void 0, void 0, function () {
            var args;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._stabilize()];
                    case 1:
                        _a.sent();
                        args = modifiersAndKeys.map(function (k) { return typeof k === 'number' ? keyMap[k] : k; });
                        typeInElement.apply(void 0, __spread([this.element], args));
                        return [4 /*yield*/, this._stabilize()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    UnitTestElement.prototype.text = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._stabilize()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, (this.element.textContent || '').trim()];
                }
            });
        });
    };
    UnitTestElement.prototype.getAttribute = function (name) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._stabilize()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, this.element.getAttribute(name)];
                }
            });
        });
    };
    UnitTestElement.prototype.hasClass = function (name) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._stabilize()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, this.element.classList.contains(name)];
                }
            });
        });
    };
    UnitTestElement.prototype.getDimensions = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._stabilize()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, this.element.getBoundingClientRect()];
                }
            });
        });
    };
    UnitTestElement.prototype.getProperty = function (name) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._stabilize()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, this.element[name]];
                }
            });
        });
    };
    UnitTestElement.prototype.matchesSelector = function (selector) {
        return __awaiter(this, void 0, void 0, function () {
            var elementPrototype;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._stabilize()];
                    case 1:
                        _a.sent();
                        elementPrototype = Element.prototype;
                        return [2 /*return*/, (elementPrototype['matches'] || elementPrototype['msMatchesSelector'])
                                .call(this.element, selector)];
                }
            });
        });
    };
    UnitTestElement.prototype.isFocused = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._stabilize()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, document.activeElement === this.element];
                }
            });
        });
    };
    return UnitTestElement;
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
    queryFn: function (selector, root) { return root.querySelectorAll(selector); }
};
/** A `HarnessEnvironment` implementation for Angular's Testbed. */
var TestbedHarnessEnvironment = /** @class */ (function (_super) {
    __extends(TestbedHarnessEnvironment, _super);
    function TestbedHarnessEnvironment(rawRootElement, _fixture, options) {
        var _this = _super.call(this, rawRootElement) || this;
        _this._fixture = _fixture;
        /** Whether the environment has been destroyed. */
        _this._destroyed = false;
        _this._options = __assign(__assign({}, defaultEnvironmentOptions), options);
        _this._taskState = TaskStateZoneInterceptor.setup();
        _fixture.componentRef.onDestroy(function () { return _this._destroyed = true; });
        return _this;
    }
    /** Creates a `HarnessLoader` rooted at the given fixture's root element. */
    TestbedHarnessEnvironment.loader = function (fixture, options) {
        return new TestbedHarnessEnvironment(fixture.nativeElement, fixture, options);
    };
    /**
     * Creates a `HarnessLoader` at the document root. This can be used if harnesses are
     * located outside of a fixture (e.g. overlays appended to the document body).
     */
    TestbedHarnessEnvironment.documentRootLoader = function (fixture, options) {
        return new TestbedHarnessEnvironment(document.body, fixture, options);
    };
    /**
     * Creates an instance of the given harness type, using the fixture's root element as the
     * harness's host element. This method should be used when creating a harness for the root element
     * of a fixture, as components do not have the correct selector when they are created as the root
     * of the fixture.
     */
    TestbedHarnessEnvironment.harnessForFixture = function (fixture, harnessType, options) {
        return __awaiter(this, void 0, void 0, function () {
            var environment;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        environment = new TestbedHarnessEnvironment(fixture.nativeElement, fixture, options);
                        return [4 /*yield*/, environment.forceStabilize()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, environment.createComponentHarness(harnessType, fixture.nativeElement)];
                }
            });
        });
    };
    TestbedHarnessEnvironment.prototype.forceStabilize = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this._destroyed) {
                            throw Error('Harness is attempting to use a fixture that has already been destroyed.');
                        }
                        this._fixture.detectChanges();
                        return [4 /*yield*/, this._fixture.whenStable()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    TestbedHarnessEnvironment.prototype.waitForTasksOutsideAngular = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // If we run in the fake async zone, we run "flush" to run any scheduled tasks. This
                        // ensures that the harnesses behave inside of the FakeAsyncTestZone similar to the
                        // "AsyncTestZone" and the root zone (i.e. neither fakeAsync or async). Note that we
                        // cannot just rely on the task state observable to become stable because the state will
                        // never change. This is because the task queue will be only drained if the fake async
                        // zone is being flushed.
                        if (Zone.current.get('FakeAsyncTestZoneSpec')) {
                            flush();
                        }
                        // Wait until the task queue has been drained and the zone is stable. Note that
                        // we cannot rely on "fixture.whenStable" since it does not catch tasks scheduled
                        // outside of the Angular zone. For test harnesses, we want to ensure that the
                        // app is fully stabilized and therefore need to use our own zone interceptor.
                        return [4 /*yield*/, this._taskState.pipe(takeWhile(function (state) { return !state.stable; })).toPromise()];
                    case 1:
                        // Wait until the task queue has been drained and the zone is stable. Note that
                        // we cannot rely on "fixture.whenStable" since it does not catch tasks scheduled
                        // outside of the Angular zone. For test harnesses, we want to ensure that the
                        // app is fully stabilized and therefore need to use our own zone interceptor.
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    TestbedHarnessEnvironment.prototype.getDocumentRoot = function () {
        return document.body;
    };
    TestbedHarnessEnvironment.prototype.createTestElement = function (element) {
        var _this = this;
        return new UnitTestElement(element, function () { return _this.forceStabilize(); });
    };
    TestbedHarnessEnvironment.prototype.createEnvironment = function (element) {
        return new TestbedHarnessEnvironment(element, this._fixture, this._options);
    };
    TestbedHarnessEnvironment.prototype.getAllRawElements = function (selector) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.forceStabilize()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, Array.from(this._options.queryFn(selector, this.rawRootElement))];
                }
            });
        });
    };
    return TestbedHarnessEnvironment;
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

export { TestbedHarnessEnvironment, UnitTestElement };
//# sourceMappingURL=testbed.js.map
