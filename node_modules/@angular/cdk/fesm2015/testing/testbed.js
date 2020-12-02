import { __awaiter } from 'tslib';
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
const stateObservableSymbol = Symbol('ProxyZone_PATCHED#stateObservable');
/**
 * Interceptor that can be set up in a `ProxyZone` instance. The interceptor
 * will keep track of the task state and emit whenever the state changes.
 *
 * This serves as a workaround for https://github.com/angular/angular/issues/32896.
 */
class TaskStateZoneInterceptor {
    constructor(_lastState) {
        this._lastState = _lastState;
        /** Subject that can be used to emit a new state change. */
        this._stateSubject = new BehaviorSubject(this._lastState ? this._getTaskStateFromInternalZoneState(this._lastState) : { stable: true });
        /** Public observable that emits whenever the task state changes. */
        this.state = this._stateSubject.asObservable();
    }
    /** This will be called whenever the task state changes in the intercepted zone. */
    onHasTask(delegate, current, target, hasTaskState) {
        if (current === target) {
            this._stateSubject.next(this._getTaskStateFromInternalZoneState(hasTaskState));
        }
    }
    /** Gets the task state from the internal ZoneJS task state. */
    _getTaskStateFromInternalZoneState(state) {
        return { stable: !state.macroTask && !state.microTask };
    }
    /**
     * Sets up the custom task state Zone interceptor in the  `ProxyZone`. Throws if
     * no `ProxyZone` could be found.
     * @returns an observable that emits whenever the task state changes.
     */
    static setup() {
        if (Zone === undefined) {
            throw Error('Could not find ZoneJS. For test harnesses running in TestBed, ' +
                'ZoneJS needs to be installed.');
        }
        // tslint:disable-next-line:variable-name
        const ProxyZoneSpec = Zone['ProxyZoneSpec'];
        // If there is no "ProxyZoneSpec" installed, we throw an error and recommend
        // setting up the proxy zone by pulling in the testing bundle.
        if (!ProxyZoneSpec) {
            throw Error('ProxyZoneSpec is needed for the test harnesses but could not be found. ' +
                'Please make sure that your environment includes zone.js/dist/zone-testing.js');
        }
        // Ensure that there is a proxy zone instance set up, and get
        // a reference to the instance if present.
        const zoneSpec = ProxyZoneSpec.assertPresent();
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
        const interceptor = new TaskStateZoneInterceptor(zoneSpec.lastTaskState);
        const zoneSpecOnHasTask = zoneSpec.onHasTask.bind(zoneSpec);
        // We setup the task state interceptor in the `ProxyZone`. Note that we cannot register
        // the interceptor as a new proxy zone delegate because it would mean that other zone
        // delegates (e.g. `FakeAsyncTestZone` or `AsyncTestZone`) can accidentally overwrite/disable
        // our interceptor. Since we just intend to monitor the task state of the proxy zone, it is
        // sufficient to just patch the proxy zone. This also avoids that we interfere with the task
        // queue scheduling logic.
        zoneSpec.onHasTask = function (...args) {
            zoneSpecOnHasTask(...args);
            interceptor.onHasTask(...args);
        };
        return zoneSpec[stateObservableSymbol] = interceptor.state;
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
 * Creates a browser MouseEvent with the specified options.
 * @docs-private
 */
function createMouseEvent(type, clientX = 0, clientY = 0, button = 0) {
    const event = document.createEvent('MouseEvent');
    const originalPreventDefault = event.preventDefault.bind(event);
    // Note: We cannot determine the position of the mouse event based on the screen
    // because the dimensions and position of the browser window are not available
    // To provide reasonable `screenX` and `screenY` coordinates, we simply use the
    // client coordinates as if the browser is opened in fullscreen.
    const screenX = clientX;
    const screenY = clientY;
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
    Object.defineProperty(event, 'buttons', { get: () => 1 });
    // IE won't set `defaultPrevented` on synthetic events so we need to do it manually.
    event.preventDefault = function () {
        Object.defineProperty(event, 'defaultPrevented', { get: () => true });
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
function createPointerEvent(type, clientX = 0, clientY = 0, options = { isPrimary: true }) {
    return new PointerEvent(type, Object.assign({ bubbles: true, cancelable: true, view: window, clientX,
        clientY }, options));
}
/**
 * Creates a browser TouchEvent with the specified pointer coordinates.
 * @docs-private
 */
function createTouchEvent(type, pageX = 0, pageY = 0) {
    // In favor of creating events that work for most of the browsers, the event is created
    // as a basic UI Event. The necessary details for the event will be set manually.
    const event = document.createEvent('UIEvent');
    const touchDetails = { pageX, pageY };
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
function createKeyboardEvent(type, keyCode = 0, key = '', target, modifiers = {}) {
    const event = document.createEvent('KeyboardEvent');
    const originalPreventDefault = event.preventDefault;
    // Firefox does not support `initKeyboardEvent`, but supports `initKeyEvent`.
    if (event.initKeyEvent) {
        event.initKeyEvent(type, true, true, window, modifiers.control, modifiers.alt, modifiers.shift, modifiers.meta, keyCode);
    }
    else {
        // `initKeyboardEvent` expects to receive modifiers as a whitespace-delimited string
        // See https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/initKeyboardEvent
        let modifiersList = '';
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
        keyCode: { get: () => keyCode },
        key: { get: () => key },
        target: { get: () => target },
        ctrlKey: { get: () => !!modifiers.control },
        altKey: { get: () => !!modifiers.alt },
        shiftKey: { get: () => !!modifiers.shift },
        metaKey: { get: () => !!modifiers.meta }
    });
    // IE won't set `defaultPrevented` on synthetic events so we need to do it manually.
    event.preventDefault = function () {
        Object.defineProperty(event, 'defaultPrevented', { get: () => true });
        return originalPreventDefault.apply(this, arguments);
    };
    return event;
}
/**
 * Creates a fake event object with any desired event type.
 * @docs-private
 */
function createFakeEvent(type, canBubble = false, cancelable = true) {
    const event = document.createEvent('Event');
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
function dispatchMouseEvent(node, type, clientX = 0, clientY = 0) {
    return dispatchEvent(node, createMouseEvent(type, clientX, clientY));
}
/**
 * Shorthand to dispatch a pointer event on the specified coordinates.
 * @docs-private
 */
function dispatchPointerEvent(node, type, clientX = 0, clientY = 0, options) {
    return dispatchEvent(node, createPointerEvent(type, clientX, clientY, options));
}
/**
 * Shorthand to dispatch a touch event on the specified coordinates.
 * @docs-private
 */
function dispatchTouchEvent(node, type, x = 0, y = 0) {
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
    let eventFired = false;
    const handler = () => eventFired = true;
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
    element.focus = () => dispatchFakeEvent(element, 'focus');
    element.blur = () => dispatchFakeEvent(element, 'blur');
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
    const nodeName = element.nodeName.toLowerCase();
    return nodeName === 'input' || nodeName === 'textarea';
}
function typeInElement(element, ...modifiersAndKeys) {
    const first = modifiersAndKeys[0];
    let modifiers;
    let rest;
    if (typeof first !== 'string' && first.keyCode === undefined && first.key === undefined) {
        modifiers = first;
        rest = modifiersAndKeys.slice(1);
    }
    else {
        modifiers = {};
        rest = modifiersAndKeys;
    }
    const keys = rest
        .map(k => typeof k === 'string' ?
        k.split('').map(c => ({ keyCode: c.toUpperCase().charCodeAt(0), key: c })) : [k])
        .reduce((arr, k) => arr.concat(k), []);
    triggerFocus(element);
    for (const key of keys) {
        dispatchKeyboardEvent(element, 'keydown', key.keyCode, key.key, element, modifiers);
        dispatchKeyboardEvent(element, 'keypress', key.keyCode, key.key, element, modifiers);
        if (isTextInput(element) && key.key && key.key.length === 1) {
            element.value += key.key;
            dispatchFakeEvent(element, 'input');
        }
        dispatchKeyboardEvent(element, 'keyup', key.keyCode, key.key, element, modifiers);
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
/** Maps `TestKey` constants to the `keyCode` and `key` values used by native browser events. */
const keyMap = {
    [TestKey.BACKSPACE]: { keyCode: BACKSPACE, key: 'Backspace' },
    [TestKey.TAB]: { keyCode: TAB, key: 'Tab' },
    [TestKey.ENTER]: { keyCode: ENTER, key: 'Enter' },
    [TestKey.SHIFT]: { keyCode: SHIFT, key: 'Shift' },
    [TestKey.CONTROL]: { keyCode: CONTROL, key: 'Control' },
    [TestKey.ALT]: { keyCode: ALT, key: 'Alt' },
    [TestKey.ESCAPE]: { keyCode: ESCAPE, key: 'Escape' },
    [TestKey.PAGE_UP]: { keyCode: PAGE_UP, key: 'PageUp' },
    [TestKey.PAGE_DOWN]: { keyCode: PAGE_DOWN, key: 'PageDown' },
    [TestKey.END]: { keyCode: END, key: 'End' },
    [TestKey.HOME]: { keyCode: HOME, key: 'Home' },
    [TestKey.LEFT_ARROW]: { keyCode: LEFT_ARROW, key: 'ArrowLeft' },
    [TestKey.UP_ARROW]: { keyCode: UP_ARROW, key: 'ArrowUp' },
    [TestKey.RIGHT_ARROW]: { keyCode: RIGHT_ARROW, key: 'ArrowRight' },
    [TestKey.DOWN_ARROW]: { keyCode: DOWN_ARROW, key: 'ArrowDown' },
    [TestKey.INSERT]: { keyCode: INSERT, key: 'Insert' },
    [TestKey.DELETE]: { keyCode: DELETE, key: 'Delete' },
    [TestKey.F1]: { keyCode: F1, key: 'F1' },
    [TestKey.F2]: { keyCode: F2, key: 'F2' },
    [TestKey.F3]: { keyCode: F3, key: 'F3' },
    [TestKey.F4]: { keyCode: F4, key: 'F4' },
    [TestKey.F5]: { keyCode: F5, key: 'F5' },
    [TestKey.F6]: { keyCode: F6, key: 'F6' },
    [TestKey.F7]: { keyCode: F7, key: 'F7' },
    [TestKey.F8]: { keyCode: F8, key: 'F8' },
    [TestKey.F9]: { keyCode: F9, key: 'F9' },
    [TestKey.F10]: { keyCode: F10, key: 'F10' },
    [TestKey.F11]: { keyCode: F11, key: 'F11' },
    [TestKey.F12]: { keyCode: F12, key: 'F12' },
    [TestKey.META]: { keyCode: META, key: 'Meta' }
};
/** A `TestElement` implementation for unit tests. */
class UnitTestElement {
    constructor(element, _stabilize) {
        this.element = element;
        this._stabilize = _stabilize;
    }
    blur() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this._stabilize();
            triggerBlur(this.element);
            yield this._stabilize();
        });
    }
    clear() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this._stabilize();
            if (!isTextInput(this.element)) {
                throw Error('Attempting to clear an invalid element');
            }
            clearElement(this.element);
            yield this._stabilize();
        });
    }
    click(...args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { left, top, width, height } = yield this.getDimensions();
            const relativeX = args.length ? args[0] : width / 2;
            const relativeY = args.length ? args[1] : height / 2;
            // Round the computed click position as decimal pixels are not
            // supported by mouse events and could lead to unexpected results.
            const clientX = Math.round(left + relativeX);
            const clientY = Math.round(top + relativeY);
            // The latest versions of all browsers we support have the new `PointerEvent` API.
            // Though since we capture the two most recent versions of these browsers, we also
            // need to support Safari 12 at time of writing. Safari 12 does not have support for this,
            // so we need to conditionally create and dispatch these events based on feature detection.
            const emitPointerEvents = window.PointerEvent !== undefined;
            if (emitPointerEvents) {
                dispatchPointerEvent(this.element, 'pointerdown', clientX, clientY);
            }
            dispatchMouseEvent(this.element, 'mousedown', clientX, clientY);
            if (emitPointerEvents) {
                dispatchMouseEvent(this.element, 'pointerup', clientX, clientY);
            }
            dispatchMouseEvent(this.element, 'mouseup', clientX, clientY);
            dispatchMouseEvent(this.element, 'click', clientX, clientY);
            yield this._stabilize();
        });
    }
    focus() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this._stabilize();
            triggerFocus(this.element);
            yield this._stabilize();
        });
    }
    getCssValue(property) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this._stabilize();
            // TODO(mmalerba): Consider adding value normalization if we run into common cases where its
            //  needed.
            return getComputedStyle(this.element).getPropertyValue(property);
        });
    }
    hover() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this._stabilize();
            dispatchMouseEvent(this.element, 'mouseenter');
            yield this._stabilize();
        });
    }
    sendKeys(...modifiersAndKeys) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this._stabilize();
            const args = modifiersAndKeys.map(k => typeof k === 'number' ? keyMap[k] : k);
            typeInElement(this.element, ...args);
            yield this._stabilize();
        });
    }
    text() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this._stabilize();
            return (this.element.textContent || '').trim();
        });
    }
    getAttribute(name) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this._stabilize();
            return this.element.getAttribute(name);
        });
    }
    hasClass(name) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this._stabilize();
            return this.element.classList.contains(name);
        });
    }
    getDimensions() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this._stabilize();
            return this.element.getBoundingClientRect();
        });
    }
    getProperty(name) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this._stabilize();
            return this.element[name];
        });
    }
    matchesSelector(selector) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this._stabilize();
            const elementPrototype = Element.prototype;
            return (elementPrototype['matches'] || elementPrototype['msMatchesSelector'])
                .call(this.element, selector);
        });
    }
    isFocused() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this._stabilize();
            return document.activeElement === this.element;
        });
    }
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** The default environment options. */
const defaultEnvironmentOptions = {
    queryFn: (selector, root) => root.querySelectorAll(selector)
};
/** A `HarnessEnvironment` implementation for Angular's Testbed. */
class TestbedHarnessEnvironment extends HarnessEnvironment {
    constructor(rawRootElement, _fixture, options) {
        super(rawRootElement);
        this._fixture = _fixture;
        /** Whether the environment has been destroyed. */
        this._destroyed = false;
        this._options = Object.assign(Object.assign({}, defaultEnvironmentOptions), options);
        this._taskState = TaskStateZoneInterceptor.setup();
        _fixture.componentRef.onDestroy(() => this._destroyed = true);
    }
    /** Creates a `HarnessLoader` rooted at the given fixture's root element. */
    static loader(fixture, options) {
        return new TestbedHarnessEnvironment(fixture.nativeElement, fixture, options);
    }
    /**
     * Creates a `HarnessLoader` at the document root. This can be used if harnesses are
     * located outside of a fixture (e.g. overlays appended to the document body).
     */
    static documentRootLoader(fixture, options) {
        return new TestbedHarnessEnvironment(document.body, fixture, options);
    }
    /**
     * Creates an instance of the given harness type, using the fixture's root element as the
     * harness's host element. This method should be used when creating a harness for the root element
     * of a fixture, as components do not have the correct selector when they are created as the root
     * of the fixture.
     */
    static harnessForFixture(fixture, harnessType, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const environment = new TestbedHarnessEnvironment(fixture.nativeElement, fixture, options);
            yield environment.forceStabilize();
            return environment.createComponentHarness(harnessType, fixture.nativeElement);
        });
    }
    forceStabilize() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this._destroyed) {
                throw Error('Harness is attempting to use a fixture that has already been destroyed.');
            }
            this._fixture.detectChanges();
            yield this._fixture.whenStable();
        });
    }
    waitForTasksOutsideAngular() {
        return __awaiter(this, void 0, void 0, function* () {
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
            yield this._taskState.pipe(takeWhile(state => !state.stable)).toPromise();
        });
    }
    getDocumentRoot() {
        return document.body;
    }
    createTestElement(element) {
        return new UnitTestElement(element, () => this.forceStabilize());
    }
    createEnvironment(element) {
        return new TestbedHarnessEnvironment(element, this._fixture, this._options);
    }
    getAllRawElements(selector) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.forceStabilize();
            return Array.from(this._options.queryFn(selector, this.rawRootElement));
        });
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
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

export { TestbedHarnessEnvironment, UnitTestElement };
//# sourceMappingURL=testbed.js.map
