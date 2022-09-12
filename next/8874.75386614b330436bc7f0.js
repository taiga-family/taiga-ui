"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[8874],{

/***/ 40070:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Zt": () => (/* binding */ CdkDrag),
  "Wj": () => (/* binding */ CdkDropList),
  "_t": () => (/* binding */ DragDropModule),
  "bA": () => (/* binding */ moveItemInArray)
});

// UNUSED EXPORTS: CDK_DRAG_CONFIG, CDK_DRAG_HANDLE, CDK_DRAG_PARENT, CDK_DRAG_PLACEHOLDER, CDK_DRAG_PREVIEW, CDK_DROP_LIST, CDK_DROP_LIST_GROUP, CdkDragHandle, CdkDragPlaceholder, CdkDragPreview, CdkDropListGroup, DragDrop, DragDropRegistry, DragRef, DropListRef, copyArrayItem, transferArrayItem

// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var core = __webpack_require__(74788);
// EXTERNAL MODULE: ./node_modules/@angular/common/fesm2015/common.js
var common = __webpack_require__(12057);
// EXTERNAL MODULE: ./node_modules/@angular/cdk/fesm2015/scrolling.js + 7 modules
var scrolling = __webpack_require__(63737);
// EXTERNAL MODULE: ./node_modules/@angular/cdk/fesm2015/platform.js
var platform = __webpack_require__(99642);
// EXTERNAL MODULE: ./node_modules/@angular/cdk/fesm2015/coercion.js
var coercion = __webpack_require__(39490);
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/BehaviorSubject.js
var BehaviorSubject = __webpack_require__(26215);
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/Subject.js
var internal_Subject = __webpack_require__(79765);
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/observable/of.js
var of = __webpack_require__(25917);
;// CONCATENATED MODULE: ./node_modules/@angular/cdk/fesm2015/keycodes.js
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const MAC_ENTER = 3;
const BACKSPACE = 8;
const keycodes_TAB = 9;
const NUM_CENTER = 12;
const ENTER = 13;
const SHIFT = 16;
const CONTROL = 17;
const ALT = 18;
const PAUSE = 19;
const CAPS_LOCK = 20;
const ESCAPE = 27;
const SPACE = 32;
const PAGE_UP = 33;
const PAGE_DOWN = 34;
const keycodes_END = 35;
const keycodes_HOME = 36;
const keycodes_LEFT_ARROW = 37;
const keycodes_UP_ARROW = 38;
const keycodes_RIGHT_ARROW = 39;
const keycodes_DOWN_ARROW = 40;
const PLUS_SIGN = 43;
const PRINT_SCREEN = 44;
const INSERT = 45;
const DELETE = 46;
const keycodes_ZERO = 48;
const ONE = 49;
const TWO = 50;
const THREE = 51;
const FOUR = 52;
const FIVE = 53;
const SIX = 54;
const SEVEN = 55;
const EIGHT = 56;
const keycodes_NINE = 57;
const FF_SEMICOLON = 59; // Firefox (Gecko) fires this for semicolon instead of 186

const FF_EQUALS = 61; // Firefox (Gecko) fires this for equals instead of 187

const QUESTION_MARK = 63;
const AT_SIGN = 64;
const keycodes_A = 65;
const B = 66;
const C = 67;
const D = 68;
const E = 69;
const F = 70;
const G = 71;
const H = 72;
const I = 73;
const J = 74;
const K = 75;
const L = 76;
const M = 77;
const N = 78;
const O = 79;
const P = 80;
const Q = 81;
const R = 82;
const S = 83;
const T = 84;
const U = 85;
const V = 86;
const W = 87;
const X = 88;
const Y = 89;
const keycodes_Z = 90;
const META = 91; // WIN_KEY_LEFT

const MAC_WK_CMD_LEFT = 91;
const MAC_WK_CMD_RIGHT = 93;
const CONTEXT_MENU = 93;
const NUMPAD_ZERO = 96;
const NUMPAD_ONE = 97;
const NUMPAD_TWO = 98;
const NUMPAD_THREE = 99;
const NUMPAD_FOUR = 100;
const NUMPAD_FIVE = 101;
const NUMPAD_SIX = 102;
const NUMPAD_SEVEN = 103;
const NUMPAD_EIGHT = 104;
const NUMPAD_NINE = 105;
const NUMPAD_MULTIPLY = 106;
const NUMPAD_PLUS = 107;
const NUMPAD_MINUS = 109;
const NUMPAD_PERIOD = 110;
const NUMPAD_DIVIDE = 111;
const F1 = 112;
const F2 = 113;
const F3 = 114;
const F4 = 115;
const F5 = 116;
const F6 = 117;
const F7 = 118;
const F8 = 119;
const F9 = 120;
const F10 = 121;
const F11 = 122;
const F12 = 123;
const NUM_LOCK = 144;
const SCROLL_LOCK = 145;
const FIRST_MEDIA = 166;
const FF_MINUS = 173;
const MUTE = 173; // Firefox (Gecko) fires 181 for MUTE

const VOLUME_DOWN = 174; // Firefox (Gecko) fires 182 for VOLUME_DOWN

const VOLUME_UP = 175; // Firefox (Gecko) fires 183 for VOLUME_UP

const FF_MUTE = 181;
const FF_VOLUME_DOWN = 182;
const LAST_MEDIA = 183;
const FF_VOLUME_UP = 183;
const SEMICOLON = 186; // Firefox (Gecko) fires 59 for SEMICOLON

const EQUALS = 187; // Firefox (Gecko) fires 61 for EQUALS

const COMMA = 188;
const DASH = 189; // Firefox (Gecko) fires 173 for DASH/MINUS

const PERIOD = 190;
const SLASH = 191;
const APOSTROPHE = 192;
const TILDE = 192;
const OPEN_SQUARE_BRACKET = 219;
const BACKSLASH = 220;
const CLOSE_SQUARE_BRACKET = 221;
const SINGLE_QUOTE = 222;
const MAC_META = 224;
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Checks whether a modifier key is pressed.
 * @param event Event to be checked.
 */

function keycodes_hasModifierKey(event, ...modifiers) {
  if (modifiers.length) {
    return modifiers.some(modifier => event[modifier]);
  }

  return event.altKey || event.shiftKey || event.ctrlKey || event.metaKey;
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */


 //# sourceMappingURL=keycodes.js.map
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/operators/take.js
var take = __webpack_require__(15257);
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/operators/skip.js
var skip = __webpack_require__(13653);
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/operators/distinctUntilChanged.js
var distinctUntilChanged = __webpack_require__(87519);
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/operators/takeUntil.js
var takeUntil = __webpack_require__(46782);
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/Observable.js + 2 modules
var Observable = __webpack_require__(18891);
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/operators/debounceTime.js
var operators_debounceTime = __webpack_require__(54395);
;// CONCATENATED MODULE: ./node_modules/@angular/cdk/fesm2015/observers.js





/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Factory that creates a new MutationObserver and allows us to stub it out in unit tests.
 * @docs-private
 */


let MutationObserverFactory = /*#__PURE__*/(() => {
  class MutationObserverFactory {
    create(callback) {
      return typeof MutationObserver === 'undefined' ? null : new MutationObserver(callback);
    }

  }

  MutationObserverFactory.ɵfac = function MutationObserverFactory_Factory(t) {
    return new (t || MutationObserverFactory)();
  };

  MutationObserverFactory.ɵprov = core/* ɵɵdefineInjectable */.Yz7({
    factory: function MutationObserverFactory_Factory() {
      return new MutationObserverFactory();
    },
    token: MutationObserverFactory,
    providedIn: "root"
  });
  return MutationObserverFactory;
})();

/*#__PURE__*/
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/** An injectable service that allows watching elements for changes to their content. */


let ContentObserver = /*#__PURE__*/(() => {
  class ContentObserver {
    constructor(_mutationObserverFactory) {
      this._mutationObserverFactory = _mutationObserverFactory;
      /** Keeps track of the existing MutationObservers so they can be reused. */

      this._observedElements = new Map();
    }

    ngOnDestroy() {
      this._observedElements.forEach((_, element) => this._cleanupObserver(element));
    }

    observe(elementOrRef) {
      const element = (0,coercion/* coerceElement */.fI)(elementOrRef);
      return new Observable/* Observable */.y(observer => {
        const stream = this._observeElement(element);

        const subscription = stream.subscribe(observer);
        return () => {
          subscription.unsubscribe();

          this._unobserveElement(element);
        };
      });
    }
    /**
     * Observes the given element by using the existing MutationObserver if available, or creating a
     * new one if not.
     */


    _observeElement(element) {
      if (!this._observedElements.has(element)) {
        const stream = new internal_Subject/* Subject */.xQ();

        const observer = this._mutationObserverFactory.create(mutations => stream.next(mutations));

        if (observer) {
          observer.observe(element, {
            characterData: true,
            childList: true,
            subtree: true
          });
        }

        this._observedElements.set(element, {
          observer,
          stream,
          count: 1
        });
      } else {
        this._observedElements.get(element).count++;
      }

      return this._observedElements.get(element).stream;
    }
    /**
     * Un-observes the given element and cleans up the underlying MutationObserver if nobody else is
     * observing this element.
     */


    _unobserveElement(element) {
      if (this._observedElements.has(element)) {
        this._observedElements.get(element).count--;

        if (!this._observedElements.get(element).count) {
          this._cleanupObserver(element);
        }
      }
    }
    /** Clean up the underlying MutationObserver for the specified element. */


    _cleanupObserver(element) {
      if (this._observedElements.has(element)) {
        const {
          observer,
          stream
        } = this._observedElements.get(element);

        if (observer) {
          observer.disconnect();
        }

        stream.complete();

        this._observedElements.delete(element);
      }
    }

  }

  ContentObserver.ɵfac = function ContentObserver_Factory(t) {
    return new (t || ContentObserver)(core/* ɵɵinject */.LFG(MutationObserverFactory));
  };

  ContentObserver.ɵprov = core/* ɵɵdefineInjectable */.Yz7({
    factory: function ContentObserver_Factory() {
      return new ContentObserver(core/* ɵɵinject */.LFG(MutationObserverFactory));
    },
    token: ContentObserver,
    providedIn: "root"
  });
  return ContentObserver;
})();

/*#__PURE__*/
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Directive that triggers a callback whenever the content of
 * its associated element has changed.
 */


let CdkObserveContent = /*#__PURE__*/(() => {
  class CdkObserveContent {
    constructor(_contentObserver, _elementRef, _ngZone) {
      this._contentObserver = _contentObserver;
      this._elementRef = _elementRef;
      this._ngZone = _ngZone;
      /** Event emitted for each change in the element's content. */

      this.event = new core/* EventEmitter */.vpe();
      this._disabled = false;
      this._currentSubscription = null;
    }
    /**
     * Whether observing content is disabled. This option can be used
     * to disconnect the underlying MutationObserver until it is needed.
     */


    get disabled() {
      return this._disabled;
    }

    set disabled(value) {
      this._disabled = (0,coercion/* coerceBooleanProperty */.Ig)(value);
      this._disabled ? this._unsubscribe() : this._subscribe();
    }
    /** Debounce interval for emitting the changes. */


    get debounce() {
      return this._debounce;
    }

    set debounce(value) {
      this._debounce = (0,coercion/* coerceNumberProperty */.su)(value);

      this._subscribe();
    }

    ngAfterContentInit() {
      if (!this._currentSubscription && !this.disabled) {
        this._subscribe();
      }
    }

    ngOnDestroy() {
      this._unsubscribe();
    }

    _subscribe() {
      this._unsubscribe();

      const stream = this._contentObserver.observe(this._elementRef); // TODO(mmalerba): We shouldn't be emitting on this @Output() outside the zone.
      // Consider brining it back inside the zone next time we're making breaking changes.
      // Bringing it back inside can cause things like infinite change detection loops and changed
      // after checked errors if people's code isn't handling it properly.


      this._ngZone.runOutsideAngular(() => {
        this._currentSubscription = (this.debounce ? stream.pipe((0,operators_debounceTime/* debounceTime */.b)(this.debounce)) : stream).subscribe(this.event);
      });
    }

    _unsubscribe() {
      var _a;

      (_a = this._currentSubscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
    }

  }

  CdkObserveContent.ɵfac = function CdkObserveContent_Factory(t) {
    return new (t || CdkObserveContent)(core/* ɵɵdirectiveInject */.Y36(ContentObserver), core/* ɵɵdirectiveInject */.Y36(core/* ElementRef */.SBq), core/* ɵɵdirectiveInject */.Y36(core/* NgZone */.R0b));
  };

  CdkObserveContent.ɵdir = /*@__PURE__*/core/* ɵɵdefineDirective */.lG2({
    type: CdkObserveContent,
    selectors: [["", "cdkObserveContent", ""]],
    inputs: {
      disabled: ["cdkObserveContentDisabled", "disabled"],
      debounce: "debounce"
    },
    outputs: {
      event: "cdkObserveContent"
    },
    exportAs: ["cdkObserveContent"]
  });
  return CdkObserveContent;
})();

/*#__PURE__*/
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

let ObserversModule = /*#__PURE__*/(() => {
  class ObserversModule {}

  ObserversModule.ɵfac = function ObserversModule_Factory(t) {
    return new (t || ObserversModule)();
  };

  ObserversModule.ɵmod = /*@__PURE__*/core/* ɵɵdefineNgModule */.oAB({
    type: ObserversModule
  });
  ObserversModule.ɵinj = /*@__PURE__*/core/* ɵɵdefineInjector */.cJS({
    providers: [MutationObserverFactory]
  });
  return ObserversModule;
})();

/*#__PURE__*/
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/*#__PURE__*/
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && core/* ɵɵsetNgModuleScope */.kYT(ObserversModule, {
    declarations: [CdkObserveContent],
    exports: [CdkObserveContent]
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */


 //# sourceMappingURL=observers.js.map
;// CONCATENATED MODULE: ./node_modules/@angular/cdk/fesm2015/a11y.js











/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** IDs are delimited by an empty space, as per the spec. */




const ID_DELIMITER = ' ';
/**
 * Adds the given ID to the specified ARIA attribute on an element.
 * Used for attributes such as aria-labelledby, aria-owns, etc.
 */

function addAriaReferencedId(el, attr, id) {
  const ids = getAriaReferenceIds(el, attr);

  if (ids.some(existingId => existingId.trim() == id.trim())) {
    return;
  }

  ids.push(id.trim());
  el.setAttribute(attr, ids.join(ID_DELIMITER));
}
/**
 * Removes the given ID from the specified ARIA attribute on an element.
 * Used for attributes such as aria-labelledby, aria-owns, etc.
 */


function removeAriaReferencedId(el, attr, id) {
  const ids = getAriaReferenceIds(el, attr);
  const filteredIds = ids.filter(val => val != id.trim());

  if (filteredIds.length) {
    el.setAttribute(attr, filteredIds.join(ID_DELIMITER));
  } else {
    el.removeAttribute(attr);
  }
}
/**
 * Gets the list of IDs referenced by the given ARIA attribute on an element.
 * Used for attributes such as aria-labelledby, aria-owns, etc.
 */


function getAriaReferenceIds(el, attr) {
  // Get string array of all individual ids (whitespace delimited) in the attribute value
  return (el.getAttribute(attr) || '').match(/\S+/g) || [];
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** ID used for the body container where all messages are appended. */


const MESSAGES_CONTAINER_ID = 'cdk-describedby-message-container';
/** ID prefix used for each created message element. */

const CDK_DESCRIBEDBY_ID_PREFIX = 'cdk-describedby-message';
/** Attribute given to each host element that is described by a message element. */

const CDK_DESCRIBEDBY_HOST_ATTRIBUTE = 'cdk-describedby-host';
/** Global incremental identifier for each registered message element. */

let nextId = 0;
/** Global map of all registered message elements that have been placed into the document. */

const messageRegistry = /*#__PURE__*/new Map();
/** Container for all registered messages. */

let messagesContainer = null;
/**
 * Utility that creates visually hidden elements with a message content. Useful for elements that
 * want to use aria-describedby to further describe themselves without adding additional visual
 * content.
 */

let AriaDescriber = /*#__PURE__*/(/* unused pure expression or super */ null && ((() => {
  class AriaDescriber {
    constructor(_document) {
      this._document = _document;
    }

    describe(hostElement, message, role) {
      if (!this._canBeDescribed(hostElement, message)) {
        return;
      }

      const key = getKey(message, role);

      if (typeof message !== 'string') {
        // We need to ensure that the element has an ID.
        setMessageId(message);
        messageRegistry.set(key, {
          messageElement: message,
          referenceCount: 0
        });
      } else if (!messageRegistry.has(key)) {
        this._createMessageElement(message, role);
      }

      if (!this._isElementDescribedByMessage(hostElement, key)) {
        this._addMessageReference(hostElement, key);
      }
    }

    removeDescription(hostElement, message, role) {
      if (!message || !this._isElementNode(hostElement)) {
        return;
      }

      const key = getKey(message, role);

      if (this._isElementDescribedByMessage(hostElement, key)) {
        this._removeMessageReference(hostElement, key);
      } // If the message is a string, it means that it's one that we created for the
      // consumer so we can remove it safely, otherwise we should leave it in place.


      if (typeof message === 'string') {
        const registeredMessage = messageRegistry.get(key);

        if (registeredMessage && registeredMessage.referenceCount === 0) {
          this._deleteMessageElement(key);
        }
      }

      if (messagesContainer && messagesContainer.childNodes.length === 0) {
        this._deleteMessagesContainer();
      }
    }
    /** Unregisters all created message elements and removes the message container. */


    ngOnDestroy() {
      const describedElements = this._document.querySelectorAll(`[${CDK_DESCRIBEDBY_HOST_ATTRIBUTE}]`);

      for (let i = 0; i < describedElements.length; i++) {
        this._removeCdkDescribedByReferenceIds(describedElements[i]);

        describedElements[i].removeAttribute(CDK_DESCRIBEDBY_HOST_ATTRIBUTE);
      }

      if (messagesContainer) {
        this._deleteMessagesContainer();
      }

      messageRegistry.clear();
    }
    /**
     * Creates a new element in the visually hidden message container element with the message
     * as its content and adds it to the message registry.
     */


    _createMessageElement(message, role) {
      const messageElement = this._document.createElement('div');

      setMessageId(messageElement);
      messageElement.textContent = message;

      if (role) {
        messageElement.setAttribute('role', role);
      }

      this._createMessagesContainer();

      messagesContainer.appendChild(messageElement);
      messageRegistry.set(getKey(message, role), {
        messageElement,
        referenceCount: 0
      });
    }
    /** Deletes the message element from the global messages container. */


    _deleteMessageElement(key) {
      const registeredMessage = messageRegistry.get(key);
      const messageElement = registeredMessage && registeredMessage.messageElement;

      if (messagesContainer && messageElement) {
        messagesContainer.removeChild(messageElement);
      }

      messageRegistry.delete(key);
    }
    /** Creates the global container for all aria-describedby messages. */


    _createMessagesContainer() {
      if (!messagesContainer) {
        const preExistingContainer = this._document.getElementById(MESSAGES_CONTAINER_ID); // When going from the server to the client, we may end up in a situation where there's
        // already a container on the page, but we don't have a reference to it. Clear the
        // old container so we don't get duplicates. Doing this, instead of emptying the previous
        // container, should be slightly faster.


        if (preExistingContainer && preExistingContainer.parentNode) {
          preExistingContainer.parentNode.removeChild(preExistingContainer);
        }

        messagesContainer = this._document.createElement('div');
        messagesContainer.id = MESSAGES_CONTAINER_ID; // We add `visibility: hidden` in order to prevent text in this container from
        // being searchable by the browser's Ctrl + F functionality.
        // Screen-readers will still read the description for elements with aria-describedby even
        // when the description element is not visible.

        messagesContainer.style.visibility = 'hidden'; // Even though we use `visibility: hidden`, we still apply `cdk-visually-hidden` so that
        // the description element doesn't impact page layout.

        messagesContainer.classList.add('cdk-visually-hidden');

        this._document.body.appendChild(messagesContainer);
      }
    }
    /** Deletes the global messages container. */


    _deleteMessagesContainer() {
      if (messagesContainer && messagesContainer.parentNode) {
        messagesContainer.parentNode.removeChild(messagesContainer);
        messagesContainer = null;
      }
    }
    /** Removes all cdk-describedby messages that are hosted through the element. */


    _removeCdkDescribedByReferenceIds(element) {
      // Remove all aria-describedby reference IDs that are prefixed by CDK_DESCRIBEDBY_ID_PREFIX
      const originalReferenceIds = getAriaReferenceIds(element, 'aria-describedby').filter(id => id.indexOf(CDK_DESCRIBEDBY_ID_PREFIX) != 0);
      element.setAttribute('aria-describedby', originalReferenceIds.join(' '));
    }
    /**
     * Adds a message reference to the element using aria-describedby and increments the registered
     * message's reference count.
     */


    _addMessageReference(element, key) {
      const registeredMessage = messageRegistry.get(key); // Add the aria-describedby reference and set the
      // describedby_host attribute to mark the element.

      addAriaReferencedId(element, 'aria-describedby', registeredMessage.messageElement.id);
      element.setAttribute(CDK_DESCRIBEDBY_HOST_ATTRIBUTE, '');
      registeredMessage.referenceCount++;
    }
    /**
     * Removes a message reference from the element using aria-describedby
     * and decrements the registered message's reference count.
     */


    _removeMessageReference(element, key) {
      const registeredMessage = messageRegistry.get(key);
      registeredMessage.referenceCount--;
      removeAriaReferencedId(element, 'aria-describedby', registeredMessage.messageElement.id);
      element.removeAttribute(CDK_DESCRIBEDBY_HOST_ATTRIBUTE);
    }
    /** Returns true if the element has been described by the provided message ID. */


    _isElementDescribedByMessage(element, key) {
      const referenceIds = getAriaReferenceIds(element, 'aria-describedby');
      const registeredMessage = messageRegistry.get(key);
      const messageId = registeredMessage && registeredMessage.messageElement.id;
      return !!messageId && referenceIds.indexOf(messageId) != -1;
    }
    /** Determines whether a message can be described on a particular element. */


    _canBeDescribed(element, message) {
      if (!this._isElementNode(element)) {
        return false;
      }

      if (message && typeof message === 'object') {
        // We'd have to make some assumptions about the description element's text, if the consumer
        // passed in an element. Assume that if an element is passed in, the consumer has verified
        // that it can be used as a description.
        return true;
      }

      const trimmedMessage = message == null ? '' : `${message}`.trim();
      const ariaLabel = element.getAttribute('aria-label'); // We shouldn't set descriptions if they're exactly the same as the `aria-label` of the
      // element, because screen readers will end up reading out the same text twice in a row.

      return trimmedMessage ? !ariaLabel || ariaLabel.trim() !== trimmedMessage : false;
    }
    /** Checks whether a node is an Element node. */


    _isElementNode(element) {
      return element.nodeType === this._document.ELEMENT_NODE;
    }

  }

  AriaDescriber.ɵfac = function AriaDescriber_Factory(t) {
    return new (t || AriaDescriber)(ɵngcc0.ɵɵinject(DOCUMENT));
  };

  AriaDescriber.ɵprov = i0.ɵɵdefineInjectable({
    factory: function AriaDescriber_Factory() {
      return new AriaDescriber(i0.ɵɵinject(i2.DOCUMENT));
    },
    token: AriaDescriber,
    providedIn: "root"
  });
  return AriaDescriber;
})()));

/*#__PURE__*/
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/** Gets a key that can be used to look messages up in the registry. */


function getKey(message, role) {
  return typeof message === 'string' ? `${role || ''}/${message}` : message;
}
/** Assigns a unique ID to an element, if it doesn't have one already. */


function setMessageId(element) {
  if (!element.id) {
    element.id = `${CDK_DESCRIBEDBY_ID_PREFIX}-${nextId++}`;
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
 * This class manages keyboard events for selectable lists. If you pass it a query list
 * of items, it will set the active item correctly when arrow events occur.
 */


class ListKeyManager {
  constructor(_items) {
    this._items = _items;
    this._activeItemIndex = -1;
    this._activeItem = null;
    this._wrap = false;
    this._letterKeyStream = new Subject();
    this._typeaheadSubscription = Subscription.EMPTY;
    this._vertical = true;
    this._allowedModifierKeys = [];
    this._homeAndEnd = false;
    /**
     * Predicate function that can be used to check whether an item should be skipped
     * by the key manager. By default, disabled items are skipped.
     */

    this._skipPredicateFn = item => item.disabled; // Buffer for the letters that the user has pressed when the typeahead option is turned on.


    this._pressedLetters = [];
    /**
     * Stream that emits any time the TAB key is pressed, so components can react
     * when focus is shifted off of the list.
     */

    this.tabOut = new Subject();
    /** Stream that emits whenever the active item of the list manager changes. */

    this.change = new Subject(); // We allow for the items to be an array because, in some cases, the consumer may
    // not have access to a QueryList of the items they want to manage (e.g. when the
    // items aren't being collected via `ViewChildren` or `ContentChildren`).

    if (_items instanceof QueryList) {
      _items.changes.subscribe(newItems => {
        if (this._activeItem) {
          const itemArray = newItems.toArray();
          const newIndex = itemArray.indexOf(this._activeItem);

          if (newIndex > -1 && newIndex !== this._activeItemIndex) {
            this._activeItemIndex = newIndex;
          }
        }
      });
    }
  }
  /**
   * Sets the predicate function that determines which items should be skipped by the
   * list key manager.
   * @param predicate Function that determines whether the given item should be skipped.
   */


  skipPredicate(predicate) {
    this._skipPredicateFn = predicate;
    return this;
  }
  /**
   * Configures wrapping mode, which determines whether the active item will wrap to
   * the other end of list when there are no more items in the given direction.
   * @param shouldWrap Whether the list should wrap when reaching the end.
   */


  withWrap(shouldWrap = true) {
    this._wrap = shouldWrap;
    return this;
  }
  /**
   * Configures whether the key manager should be able to move the selection vertically.
   * @param enabled Whether vertical selection should be enabled.
   */


  withVerticalOrientation(enabled = true) {
    this._vertical = enabled;
    return this;
  }
  /**
   * Configures the key manager to move the selection horizontally.
   * Passing in `null` will disable horizontal movement.
   * @param direction Direction in which the selection can be moved.
   */


  withHorizontalOrientation(direction) {
    this._horizontal = direction;
    return this;
  }
  /**
   * Modifier keys which are allowed to be held down and whose default actions will be prevented
   * as the user is pressing the arrow keys. Defaults to not allowing any modifier keys.
   */


  withAllowedModifierKeys(keys) {
    this._allowedModifierKeys = keys;
    return this;
  }
  /**
   * Turns on typeahead mode which allows users to set the active item by typing.
   * @param debounceInterval Time to wait after the last keystroke before setting the active item.
   */


  withTypeAhead(debounceInterval = 200) {
    if ((typeof ngDevMode === 'undefined' || ngDevMode) && this._items.length && this._items.some(item => typeof item.getLabel !== 'function')) {
      throw Error('ListKeyManager items in typeahead mode must implement the `getLabel` method.');
    }

    this._typeaheadSubscription.unsubscribe(); // Debounce the presses of non-navigational keys, collect the ones that correspond to letters
    // and convert those letters back into a string. Afterwards find the first item that starts
    // with that string and select it.


    this._typeaheadSubscription = this._letterKeyStream.pipe(tap(letter => this._pressedLetters.push(letter)), debounceTime(debounceInterval), filter(() => this._pressedLetters.length > 0), map(() => this._pressedLetters.join(''))).subscribe(inputString => {
      const items = this._getItemsArray(); // Start at 1 because we want to start searching at the item immediately
      // following the current active item.


      for (let i = 1; i < items.length + 1; i++) {
        const index = (this._activeItemIndex + i) % items.length;
        const item = items[index];

        if (!this._skipPredicateFn(item) && item.getLabel().toUpperCase().trim().indexOf(inputString) === 0) {
          this.setActiveItem(index);
          break;
        }
      }

      this._pressedLetters = [];
    });
    return this;
  }
  /**
   * Configures the key manager to activate the first and last items
   * respectively when the Home or End key is pressed.
   * @param enabled Whether pressing the Home or End key activates the first/last item.
   */


  withHomeAndEnd(enabled = true) {
    this._homeAndEnd = enabled;
    return this;
  }

  setActiveItem(item) {
    const previousActiveItem = this._activeItem;
    this.updateActiveItem(item);

    if (this._activeItem !== previousActiveItem) {
      this.change.next(this._activeItemIndex);
    }
  }
  /**
   * Sets the active item depending on the key event passed in.
   * @param event Keyboard event to be used for determining which element should be active.
   */


  onKeydown(event) {
    const keyCode = event.keyCode;
    const modifiers = ['altKey', 'ctrlKey', 'metaKey', 'shiftKey'];
    const isModifierAllowed = modifiers.every(modifier => {
      return !event[modifier] || this._allowedModifierKeys.indexOf(modifier) > -1;
    });

    switch (keyCode) {
      case TAB:
        this.tabOut.next();
        return;

      case DOWN_ARROW:
        if (this._vertical && isModifierAllowed) {
          this.setNextItemActive();
          break;
        } else {
          return;
        }

      case UP_ARROW:
        if (this._vertical && isModifierAllowed) {
          this.setPreviousItemActive();
          break;
        } else {
          return;
        }

      case RIGHT_ARROW:
        if (this._horizontal && isModifierAllowed) {
          this._horizontal === 'rtl' ? this.setPreviousItemActive() : this.setNextItemActive();
          break;
        } else {
          return;
        }

      case LEFT_ARROW:
        if (this._horizontal && isModifierAllowed) {
          this._horizontal === 'rtl' ? this.setNextItemActive() : this.setPreviousItemActive();
          break;
        } else {
          return;
        }

      case HOME:
        if (this._homeAndEnd && isModifierAllowed) {
          this.setFirstItemActive();
          break;
        } else {
          return;
        }

      case END:
        if (this._homeAndEnd && isModifierAllowed) {
          this.setLastItemActive();
          break;
        } else {
          return;
        }

      default:
        if (isModifierAllowed || hasModifierKey(event, 'shiftKey')) {
          // Attempt to use the `event.key` which also maps it to the user's keyboard language,
          // otherwise fall back to resolving alphanumeric characters via the keyCode.
          if (event.key && event.key.length === 1) {
            this._letterKeyStream.next(event.key.toLocaleUpperCase());
          } else if (keyCode >= A && keyCode <= Z || keyCode >= ZERO && keyCode <= NINE) {
            this._letterKeyStream.next(String.fromCharCode(keyCode));
          }
        } // Note that we return here, in order to avoid preventing
        // the default action of non-navigational keys.


        return;
    }

    this._pressedLetters = [];
    event.preventDefault();
  }
  /** Index of the currently active item. */


  get activeItemIndex() {
    return this._activeItemIndex;
  }
  /** The active item. */


  get activeItem() {
    return this._activeItem;
  }
  /** Gets whether the user is currently typing into the manager using the typeahead feature. */


  isTyping() {
    return this._pressedLetters.length > 0;
  }
  /** Sets the active item to the first enabled item in the list. */


  setFirstItemActive() {
    this._setActiveItemByIndex(0, 1);
  }
  /** Sets the active item to the last enabled item in the list. */


  setLastItemActive() {
    this._setActiveItemByIndex(this._items.length - 1, -1);
  }
  /** Sets the active item to the next enabled item in the list. */


  setNextItemActive() {
    this._activeItemIndex < 0 ? this.setFirstItemActive() : this._setActiveItemByDelta(1);
  }
  /** Sets the active item to a previous enabled item in the list. */


  setPreviousItemActive() {
    this._activeItemIndex < 0 && this._wrap ? this.setLastItemActive() : this._setActiveItemByDelta(-1);
  }

  updateActiveItem(item) {
    const itemArray = this._getItemsArray();

    const index = typeof item === 'number' ? item : itemArray.indexOf(item);
    const activeItem = itemArray[index]; // Explicitly check for `null` and `undefined` because other falsy values are valid.

    this._activeItem = activeItem == null ? null : activeItem;
    this._activeItemIndex = index;
  }
  /**
   * This method sets the active item, given a list of items and the delta between the
   * currently active item and the new active item. It will calculate differently
   * depending on whether wrap mode is turned on.
   */


  _setActiveItemByDelta(delta) {
    this._wrap ? this._setActiveInWrapMode(delta) : this._setActiveInDefaultMode(delta);
  }
  /**
   * Sets the active item properly given "wrap" mode. In other words, it will continue to move
   * down the list until it finds an item that is not disabled, and it will wrap if it
   * encounters either end of the list.
   */


  _setActiveInWrapMode(delta) {
    const items = this._getItemsArray();

    for (let i = 1; i <= items.length; i++) {
      const index = (this._activeItemIndex + delta * i + items.length) % items.length;
      const item = items[index];

      if (!this._skipPredicateFn(item)) {
        this.setActiveItem(index);
        return;
      }
    }
  }
  /**
   * Sets the active item properly given the default mode. In other words, it will
   * continue to move down the list until it finds an item that is not disabled. If
   * it encounters either end of the list, it will stop and not wrap.
   */


  _setActiveInDefaultMode(delta) {
    this._setActiveItemByIndex(this._activeItemIndex + delta, delta);
  }
  /**
   * Sets the active item to the first enabled item starting at the index specified. If the
   * item is disabled, it will move in the fallbackDelta direction until it either
   * finds an enabled item or encounters the end of the list.
   */


  _setActiveItemByIndex(index, fallbackDelta) {
    const items = this._getItemsArray();

    if (!items[index]) {
      return;
    }

    while (this._skipPredicateFn(items[index])) {
      index += fallbackDelta;

      if (!items[index]) {
        return;
      }
    }

    this.setActiveItem(index);
  }
  /** Returns the items as an array. */


  _getItemsArray() {
    return this._items instanceof QueryList ? this._items.toArray() : this._items;
  }

}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


class ActiveDescendantKeyManager extends (/* unused pure expression or super */ null && (ListKeyManager)) {
  setActiveItem(index) {
    if (this.activeItem) {
      this.activeItem.setInactiveStyles();
    }

    super.setActiveItem(index);

    if (this.activeItem) {
      this.activeItem.setActiveStyles();
    }
  }

}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


class FocusKeyManager extends (/* unused pure expression or super */ null && (ListKeyManager)) {
  constructor() {
    super(...arguments);
    this._origin = 'program';
  }
  /**
   * Sets the focus origin that will be passed in to the items for any subsequent `focus` calls.
   * @param origin Focus origin to be used when focusing items.
   */


  setFocusOrigin(origin) {
    this._origin = origin;
    return this;
  }

  setActiveItem(item) {
    super.setActiveItem(item);

    if (this.activeItem) {
      this.activeItem.focus(this._origin);
    }
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
 * Configuration for the isFocusable method.
 */


class IsFocusableConfig {
  constructor() {
    /**
     * Whether to count an element as focusable even if it is not currently visible.
     */
    this.ignoreVisibility = false;
  }

} // The InteractivityChecker leans heavily on the ally.js accessibility utilities.
// Methods like `isTabbable` are only covering specific edge-cases for the browsers which are
// supported.

/**
 * Utility for checking the interactivity of an element, such as whether is is focusable or
 * tabbable.
 */


let InteractivityChecker = /*#__PURE__*/(() => {
  class InteractivityChecker {
    constructor(_platform) {
      this._platform = _platform;
    }
    /**
     * Gets whether an element is disabled.
     *
     * @param element Element to be checked.
     * @returns Whether the element is disabled.
     */


    isDisabled(element) {
      // This does not capture some cases, such as a non-form control with a disabled attribute or
      // a form control inside of a disabled form, but should capture the most common cases.
      return element.hasAttribute('disabled');
    }
    /**
     * Gets whether an element is visible for the purposes of interactivity.
     *
     * This will capture states like `display: none` and `visibility: hidden`, but not things like
     * being clipped by an `overflow: hidden` parent or being outside the viewport.
     *
     * @returns Whether the element is visible.
     */


    isVisible(element) {
      return hasGeometry(element) && getComputedStyle(element).visibility === 'visible';
    }
    /**
     * Gets whether an element can be reached via Tab key.
     * Assumes that the element has already been checked with isFocusable.
     *
     * @param element Element to be checked.
     * @returns Whether the element is tabbable.
     */


    isTabbable(element) {
      // Nothing is tabbable on the server 😎
      if (!this._platform.isBrowser) {
        return false;
      }

      const frameElement = getFrameElement(getWindow(element));

      if (frameElement) {
        // Frame elements inherit their tabindex onto all child elements.
        if (getTabIndexValue(frameElement) === -1) {
          return false;
        } // Browsers disable tabbing to an element inside of an invisible frame.


        if (!this.isVisible(frameElement)) {
          return false;
        }
      }

      let nodeName = element.nodeName.toLowerCase();
      let tabIndexValue = getTabIndexValue(element);

      if (element.hasAttribute('contenteditable')) {
        return tabIndexValue !== -1;
      }

      if (nodeName === 'iframe' || nodeName === 'object') {
        // The frame or object's content may be tabbable depending on the content, but it's
        // not possibly to reliably detect the content of the frames. We always consider such
        // elements as non-tabbable.
        return false;
      } // In iOS, the browser only considers some specific elements as tabbable.


      if (this._platform.WEBKIT && this._platform.IOS && !isPotentiallyTabbableIOS(element)) {
        return false;
      }

      if (nodeName === 'audio') {
        // Audio elements without controls enabled are never tabbable, regardless
        // of the tabindex attribute explicitly being set.
        if (!element.hasAttribute('controls')) {
          return false;
        } // Audio elements with controls are by default tabbable unless the
        // tabindex attribute is set to `-1` explicitly.


        return tabIndexValue !== -1;
      }

      if (nodeName === 'video') {
        // For all video elements, if the tabindex attribute is set to `-1`, the video
        // is not tabbable. Note: We cannot rely on the default `HTMLElement.tabIndex`
        // property as that one is set to `-1` in Chrome, Edge and Safari v13.1. The
        // tabindex attribute is the source of truth here.
        if (tabIndexValue === -1) {
          return false;
        } // If the tabindex is explicitly set, and not `-1` (as per check before), the
        // video element is always tabbable (regardless of whether it has controls or not).


        if (tabIndexValue !== null) {
          return true;
        } // Otherwise (when no explicit tabindex is set), a video is only tabbable if it
        // has controls enabled. Firefox is special as videos are always tabbable regardless
        // of whether there are controls or not.


        return this._platform.FIREFOX || element.hasAttribute('controls');
      }

      return element.tabIndex >= 0;
    }
    /**
     * Gets whether an element can be focused by the user.
     *
     * @param element Element to be checked.
     * @param config The config object with options to customize this method's behavior
     * @returns Whether the element is focusable.
     */


    isFocusable(element, config) {
      // Perform checks in order of left to most expensive.
      // Again, naive approach that does not capture many edge cases and browser quirks.
      return isPotentiallyFocusable(element) && !this.isDisabled(element) && ((config === null || config === void 0 ? void 0 : config.ignoreVisibility) || this.isVisible(element));
    }

  }

  InteractivityChecker.ɵfac = function InteractivityChecker_Factory(t) {
    return new (t || InteractivityChecker)(core/* ɵɵinject */.LFG(platform/* Platform */.t4));
  };

  InteractivityChecker.ɵprov = core/* ɵɵdefineInjectable */.Yz7({
    factory: function InteractivityChecker_Factory() {
      return new InteractivityChecker(core/* ɵɵinject */.LFG(platform/* Platform */.t4));
    },
    token: InteractivityChecker,
    providedIn: "root"
  });
  return InteractivityChecker;
})();

/*#__PURE__*/
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Returns the frame element from a window object. Since browsers like MS Edge throw errors if
 * the frameElement property is being accessed from a different host address, this property
 * should be accessed carefully.
 */


function getFrameElement(window) {
  try {
    return window.frameElement;
  } catch (_a) {
    return null;
  }
}
/** Checks whether the specified element has any geometry / rectangles. */


function hasGeometry(element) {
  // Use logic from jQuery to check for an invisible element.
  // See https://github.com/jquery/jquery/blob/master/src/css/hiddenVisibleSelectors.js#L12
  return !!(element.offsetWidth || element.offsetHeight || typeof element.getClientRects === 'function' && element.getClientRects().length);
}
/** Gets whether an element's  */


function isNativeFormElement(element) {
  let nodeName = element.nodeName.toLowerCase();
  return nodeName === 'input' || nodeName === 'select' || nodeName === 'button' || nodeName === 'textarea';
}
/** Gets whether an element is an `<input type="hidden">`. */


function isHiddenInput(element) {
  return isInputElement(element) && element.type == 'hidden';
}
/** Gets whether an element is an anchor that has an href attribute. */


function isAnchorWithHref(element) {
  return isAnchorElement(element) && element.hasAttribute('href');
}
/** Gets whether an element is an input element. */


function isInputElement(element) {
  return element.nodeName.toLowerCase() == 'input';
}
/** Gets whether an element is an anchor element. */


function isAnchorElement(element) {
  return element.nodeName.toLowerCase() == 'a';
}
/** Gets whether an element has a valid tabindex. */


function hasValidTabIndex(element) {
  if (!element.hasAttribute('tabindex') || element.tabIndex === undefined) {
    return false;
  }

  let tabIndex = element.getAttribute('tabindex'); // IE11 parses tabindex="" as the value "-32768"

  if (tabIndex == '-32768') {
    return false;
  }

  return !!(tabIndex && !isNaN(parseInt(tabIndex, 10)));
}
/**
 * Returns the parsed tabindex from the element attributes instead of returning the
 * evaluated tabindex from the browsers defaults.
 */


function getTabIndexValue(element) {
  if (!hasValidTabIndex(element)) {
    return null;
  } // See browser issue in Gecko https://bugzilla.mozilla.org/show_bug.cgi?id=1128054


  const tabIndex = parseInt(element.getAttribute('tabindex') || '', 10);
  return isNaN(tabIndex) ? -1 : tabIndex;
}
/** Checks whether the specified element is potentially tabbable on iOS */


function isPotentiallyTabbableIOS(element) {
  let nodeName = element.nodeName.toLowerCase();
  let inputType = nodeName === 'input' && element.type;
  return inputType === 'text' || inputType === 'password' || nodeName === 'select' || nodeName === 'textarea';
}
/**
 * Gets whether an element is potentially focusable without taking current visible/disabled state
 * into account.
 */


function isPotentiallyFocusable(element) {
  // Inputs are potentially focusable *unless* they're type="hidden".
  if (isHiddenInput(element)) {
    return false;
  }

  return isNativeFormElement(element) || isAnchorWithHref(element) || element.hasAttribute('contenteditable') || hasValidTabIndex(element);
}
/** Gets the parent window of a DOM node with regards of being inside of an iframe. */


function getWindow(node) {
  // ownerDocument is null if `node` itself *is* a document.
  return node.ownerDocument && node.ownerDocument.defaultView || window;
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Class that allows for trapping focus within a DOM element.
 *
 * This class currently uses a relatively simple approach to focus trapping.
 * It assumes that the tab order is the same as DOM order, which is not necessarily true.
 * Things like `tabIndex > 0`, flex `order`, and shadow roots can cause the two to be misaligned.
 *
 * @deprecated Use `ConfigurableFocusTrap` instead.
 * @breaking-change 11.0.0
 */


class FocusTrap {
  constructor(_element, _checker, _ngZone, _document, deferAnchors = false) {
    this._element = _element;
    this._checker = _checker;
    this._ngZone = _ngZone;
    this._document = _document;
    this._hasAttached = false; // Event listeners for the anchors. Need to be regular functions so that we can unbind them later.

    this.startAnchorListener = () => this.focusLastTabbableElement();

    this.endAnchorListener = () => this.focusFirstTabbableElement();

    this._enabled = true;

    if (!deferAnchors) {
      this.attachAnchors();
    }
  }
  /** Whether the focus trap is active. */


  get enabled() {
    return this._enabled;
  }

  set enabled(value) {
    this._enabled = value;

    if (this._startAnchor && this._endAnchor) {
      this._toggleAnchorTabIndex(value, this._startAnchor);

      this._toggleAnchorTabIndex(value, this._endAnchor);
    }
  }
  /** Destroys the focus trap by cleaning up the anchors. */


  destroy() {
    const startAnchor = this._startAnchor;
    const endAnchor = this._endAnchor;

    if (startAnchor) {
      startAnchor.removeEventListener('focus', this.startAnchorListener);

      if (startAnchor.parentNode) {
        startAnchor.parentNode.removeChild(startAnchor);
      }
    }

    if (endAnchor) {
      endAnchor.removeEventListener('focus', this.endAnchorListener);

      if (endAnchor.parentNode) {
        endAnchor.parentNode.removeChild(endAnchor);
      }
    }

    this._startAnchor = this._endAnchor = null;
    this._hasAttached = false;
  }
  /**
   * Inserts the anchors into the DOM. This is usually done automatically
   * in the constructor, but can be deferred for cases like directives with `*ngIf`.
   * @returns Whether the focus trap managed to attach successfully. This may not be the case
   * if the target element isn't currently in the DOM.
   */


  attachAnchors() {
    // If we're not on the browser, there can be no focus to trap.
    if (this._hasAttached) {
      return true;
    }

    this._ngZone.runOutsideAngular(() => {
      if (!this._startAnchor) {
        this._startAnchor = this._createAnchor();

        this._startAnchor.addEventListener('focus', this.startAnchorListener);
      }

      if (!this._endAnchor) {
        this._endAnchor = this._createAnchor();

        this._endAnchor.addEventListener('focus', this.endAnchorListener);
      }
    });

    if (this._element.parentNode) {
      this._element.parentNode.insertBefore(this._startAnchor, this._element);

      this._element.parentNode.insertBefore(this._endAnchor, this._element.nextSibling);

      this._hasAttached = true;
    }

    return this._hasAttached;
  }
  /**
   * Waits for the zone to stabilize, then either focuses the first element that the
   * user specified, or the first tabbable element.
   * @returns Returns a promise that resolves with a boolean, depending
   * on whether focus was moved successfully.
   */


  focusInitialElementWhenReady(options) {
    return new Promise(resolve => {
      this._executeOnStable(() => resolve(this.focusInitialElement(options)));
    });
  }
  /**
   * Waits for the zone to stabilize, then focuses
   * the first tabbable element within the focus trap region.
   * @returns Returns a promise that resolves with a boolean, depending
   * on whether focus was moved successfully.
   */


  focusFirstTabbableElementWhenReady(options) {
    return new Promise(resolve => {
      this._executeOnStable(() => resolve(this.focusFirstTabbableElement(options)));
    });
  }
  /**
   * Waits for the zone to stabilize, then focuses
   * the last tabbable element within the focus trap region.
   * @returns Returns a promise that resolves with a boolean, depending
   * on whether focus was moved successfully.
   */


  focusLastTabbableElementWhenReady(options) {
    return new Promise(resolve => {
      this._executeOnStable(() => resolve(this.focusLastTabbableElement(options)));
    });
  }
  /**
   * Get the specified boundary element of the trapped region.
   * @param bound The boundary to get (start or end of trapped region).
   * @returns The boundary element.
   */


  _getRegionBoundary(bound) {
    // Contains the deprecated version of selector, for temporary backwards comparability.
    let markers = this._element.querySelectorAll(`[cdk-focus-region-${bound}], ` + `[cdkFocusRegion${bound}], ` + `[cdk-focus-${bound}]`);

    for (let i = 0; i < markers.length; i++) {
      // @breaking-change 8.0.0
      if (markers[i].hasAttribute(`cdk-focus-${bound}`)) {
        console.warn(`Found use of deprecated attribute 'cdk-focus-${bound}', ` + `use 'cdkFocusRegion${bound}' instead. The deprecated ` + `attribute will be removed in 8.0.0.`, markers[i]);
      } else if (markers[i].hasAttribute(`cdk-focus-region-${bound}`)) {
        console.warn(`Found use of deprecated attribute 'cdk-focus-region-${bound}', ` + `use 'cdkFocusRegion${bound}' instead. The deprecated attribute ` + `will be removed in 8.0.0.`, markers[i]);
      }
    }

    if (bound == 'start') {
      return markers.length ? markers[0] : this._getFirstTabbableElement(this._element);
    }

    return markers.length ? markers[markers.length - 1] : this._getLastTabbableElement(this._element);
  }
  /**
   * Focuses the element that should be focused when the focus trap is initialized.
   * @returns Whether focus was moved successfully.
   */


  focusInitialElement(options) {
    // Contains the deprecated version of selector, for temporary backwards comparability.
    const redirectToElement = this._element.querySelector(`[cdk-focus-initial], ` + `[cdkFocusInitial]`);

    if (redirectToElement) {
      // @breaking-change 8.0.0
      if (redirectToElement.hasAttribute(`cdk-focus-initial`)) {
        console.warn(`Found use of deprecated attribute 'cdk-focus-initial', ` + `use 'cdkFocusInitial' instead. The deprecated attribute ` + `will be removed in 8.0.0`, redirectToElement);
      } // Warn the consumer if the element they've pointed to
      // isn't focusable, when not in production mode.


      if ((typeof ngDevMode === 'undefined' || ngDevMode) && !this._checker.isFocusable(redirectToElement)) {
        console.warn(`Element matching '[cdkFocusInitial]' is not focusable.`, redirectToElement);
      }

      if (!this._checker.isFocusable(redirectToElement)) {
        const focusableChild = this._getFirstTabbableElement(redirectToElement);

        focusableChild === null || focusableChild === void 0 ? void 0 : focusableChild.focus(options);
        return !!focusableChild;
      }

      redirectToElement.focus(options);
      return true;
    }

    return this.focusFirstTabbableElement(options);
  }
  /**
   * Focuses the first tabbable element within the focus trap region.
   * @returns Whether focus was moved successfully.
   */


  focusFirstTabbableElement(options) {
    const redirectToElement = this._getRegionBoundary('start');

    if (redirectToElement) {
      redirectToElement.focus(options);
    }

    return !!redirectToElement;
  }
  /**
   * Focuses the last tabbable element within the focus trap region.
   * @returns Whether focus was moved successfully.
   */


  focusLastTabbableElement(options) {
    const redirectToElement = this._getRegionBoundary('end');

    if (redirectToElement) {
      redirectToElement.focus(options);
    }

    return !!redirectToElement;
  }
  /**
   * Checks whether the focus trap has successfully been attached.
   */


  hasAttached() {
    return this._hasAttached;
  }
  /** Get the first tabbable element from a DOM subtree (inclusive). */


  _getFirstTabbableElement(root) {
    if (this._checker.isFocusable(root) && this._checker.isTabbable(root)) {
      return root;
    } // Iterate in DOM order. Note that IE doesn't have `children` for SVG so we fall
    // back to `childNodes` which includes text nodes, comments etc.


    let children = root.children || root.childNodes;

    for (let i = 0; i < children.length; i++) {
      let tabbableChild = children[i].nodeType === this._document.ELEMENT_NODE ? this._getFirstTabbableElement(children[i]) : null;

      if (tabbableChild) {
        return tabbableChild;
      }
    }

    return null;
  }
  /** Get the last tabbable element from a DOM subtree (inclusive). */


  _getLastTabbableElement(root) {
    if (this._checker.isFocusable(root) && this._checker.isTabbable(root)) {
      return root;
    } // Iterate in reverse DOM order.


    let children = root.children || root.childNodes;

    for (let i = children.length - 1; i >= 0; i--) {
      let tabbableChild = children[i].nodeType === this._document.ELEMENT_NODE ? this._getLastTabbableElement(children[i]) : null;

      if (tabbableChild) {
        return tabbableChild;
      }
    }

    return null;
  }
  /** Creates an anchor element. */


  _createAnchor() {
    const anchor = this._document.createElement('div');

    this._toggleAnchorTabIndex(this._enabled, anchor);

    anchor.classList.add('cdk-visually-hidden');
    anchor.classList.add('cdk-focus-trap-anchor');
    anchor.setAttribute('aria-hidden', 'true');
    return anchor;
  }
  /**
   * Toggles the `tabindex` of an anchor, based on the enabled state of the focus trap.
   * @param isEnabled Whether the focus trap is enabled.
   * @param anchor Anchor on which to toggle the tabindex.
   */


  _toggleAnchorTabIndex(isEnabled, anchor) {
    // Remove the tabindex completely, rather than setting it to -1, because if the
    // element has a tabindex, the user might still hit it when navigating with the arrow keys.
    isEnabled ? anchor.setAttribute('tabindex', '0') : anchor.removeAttribute('tabindex');
  }
  /**
   * Toggles the`tabindex` of both anchors to either trap Tab focus or allow it to escape.
   * @param enabled: Whether the anchors should trap Tab.
   */


  toggleAnchors(enabled) {
    if (this._startAnchor && this._endAnchor) {
      this._toggleAnchorTabIndex(enabled, this._startAnchor);

      this._toggleAnchorTabIndex(enabled, this._endAnchor);
    }
  }
  /** Executes a function when the zone is stable. */


  _executeOnStable(fn) {
    if (this._ngZone.isStable) {
      fn();
    } else {
      this._ngZone.onStable.pipe((0,take/* take */.q)(1)).subscribe(fn);
    }
  }

}
/**
 * Factory that allows easy instantiation of focus traps.
 * @deprecated Use `ConfigurableFocusTrapFactory` instead.
 * @breaking-change 11.0.0
 */


let FocusTrapFactory = /*#__PURE__*/(() => {
  class FocusTrapFactory {
    constructor(_checker, _ngZone, _document) {
      this._checker = _checker;
      this._ngZone = _ngZone;
      this._document = _document;
    }
    /**
     * Creates a focus-trapped region around the given element.
     * @param element The element around which focus will be trapped.
     * @param deferCaptureElements Defers the creation of focus-capturing elements to be done
     *     manually by the user.
     * @returns The created focus trap instance.
     */


    create(element, deferCaptureElements = false) {
      return new FocusTrap(element, this._checker, this._ngZone, this._document, deferCaptureElements);
    }

  }

  FocusTrapFactory.ɵfac = function FocusTrapFactory_Factory(t) {
    return new (t || FocusTrapFactory)(core/* ɵɵinject */.LFG(InteractivityChecker), core/* ɵɵinject */.LFG(core/* NgZone */.R0b), core/* ɵɵinject */.LFG(common/* DOCUMENT */.K0));
  };

  FocusTrapFactory.ɵprov = core/* ɵɵdefineInjectable */.Yz7({
    factory: function FocusTrapFactory_Factory() {
      return new FocusTrapFactory(core/* ɵɵinject */.LFG(InteractivityChecker), core/* ɵɵinject */.LFG(core/* NgZone */.R0b), core/* ɵɵinject */.LFG(common/* DOCUMENT */.K0));
    },
    token: FocusTrapFactory,
    providedIn: "root"
  });
  return FocusTrapFactory;
})();

/*#__PURE__*/
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/** Directive for trapping focus within a region. */


let CdkTrapFocus = /*#__PURE__*/(() => {
  class CdkTrapFocus {
    constructor(_elementRef, _focusTrapFactory,
    /**
     * @deprecated No longer being used. To be removed.
     * @breaking-change 13.0.0
     */
    _document) {
      this._elementRef = _elementRef;
      this._focusTrapFactory = _focusTrapFactory;
      /** Previously focused element to restore focus to upon destroy when using autoCapture. */

      this._previouslyFocusedElement = null;
      this.focusTrap = this._focusTrapFactory.create(this._elementRef.nativeElement, true);
    }
    /** Whether the focus trap is active. */


    get enabled() {
      return this.focusTrap.enabled;
    }

    set enabled(value) {
      this.focusTrap.enabled = (0,coercion/* coerceBooleanProperty */.Ig)(value);
    }
    /**
     * Whether the directive should automatically move focus into the trapped region upon
     * initialization and return focus to the previous activeElement upon destruction.
     */


    get autoCapture() {
      return this._autoCapture;
    }

    set autoCapture(value) {
      this._autoCapture = (0,coercion/* coerceBooleanProperty */.Ig)(value);
    }

    ngOnDestroy() {
      this.focusTrap.destroy(); // If we stored a previously focused element when using autoCapture, return focus to that
      // element now that the trapped region is being destroyed.

      if (this._previouslyFocusedElement) {
        this._previouslyFocusedElement.focus();

        this._previouslyFocusedElement = null;
      }
    }

    ngAfterContentInit() {
      this.focusTrap.attachAnchors();

      if (this.autoCapture) {
        this._captureFocus();
      }
    }

    ngDoCheck() {
      if (!this.focusTrap.hasAttached()) {
        this.focusTrap.attachAnchors();
      }
    }

    ngOnChanges(changes) {
      const autoCaptureChange = changes['autoCapture'];

      if (autoCaptureChange && !autoCaptureChange.firstChange && this.autoCapture && this.focusTrap.hasAttached()) {
        this._captureFocus();
      }
    }

    _captureFocus() {
      this._previouslyFocusedElement = (0,platform/* _getFocusedElementPierceShadowDom */.ht)();
      this.focusTrap.focusInitialElementWhenReady();
    }

  }

  CdkTrapFocus.ɵfac = function CdkTrapFocus_Factory(t) {
    return new (t || CdkTrapFocus)(core/* ɵɵdirectiveInject */.Y36(core/* ElementRef */.SBq), core/* ɵɵdirectiveInject */.Y36(FocusTrapFactory), core/* ɵɵdirectiveInject */.Y36(common/* DOCUMENT */.K0));
  };

  CdkTrapFocus.ɵdir = /*@__PURE__*/core/* ɵɵdefineDirective */.lG2({
    type: CdkTrapFocus,
    selectors: [["", "cdkTrapFocus", ""]],
    inputs: {
      enabled: ["cdkTrapFocus", "enabled"],
      autoCapture: ["cdkTrapFocusAutoCapture", "autoCapture"]
    },
    exportAs: ["cdkTrapFocus"],
    features: [core/* ɵɵNgOnChangesFeature */.TTD]
  });
  return CdkTrapFocus;
})();

/*#__PURE__*/
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Class that allows for trapping focus within a DOM element.
 *
 * This class uses a strategy pattern that determines how it traps focus.
 * See FocusTrapInertStrategy.
 */


class ConfigurableFocusTrap extends (/* unused pure expression or super */ null && (FocusTrap)) {
  constructor(_element, _checker, _ngZone, _document, _focusTrapManager, _inertStrategy, config) {
    super(_element, _checker, _ngZone, _document, config.defer);
    this._focusTrapManager = _focusTrapManager;
    this._inertStrategy = _inertStrategy;

    this._focusTrapManager.register(this);
  }
  /** Whether the FocusTrap is enabled. */


  get enabled() {
    return this._enabled;
  }

  set enabled(value) {
    this._enabled = value;

    if (this._enabled) {
      this._focusTrapManager.register(this);
    } else {
      this._focusTrapManager.deregister(this);
    }
  }
  /** Notifies the FocusTrapManager that this FocusTrap will be destroyed. */


  destroy() {
    this._focusTrapManager.deregister(this);

    super.destroy();
  }
  /** @docs-private Implemented as part of ManagedFocusTrap. */


  _enable() {
    this._inertStrategy.preventFocus(this);

    this.toggleAnchors(true);
  }
  /** @docs-private Implemented as part of ManagedFocusTrap. */


  _disable() {
    this._inertStrategy.allowFocus(this);

    this.toggleAnchors(false);
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

/** The injection token used to specify the inert strategy. */


const FOCUS_TRAP_INERT_STRATEGY = /*#__PURE__*/new core/* InjectionToken */.OlP('FOCUS_TRAP_INERT_STRATEGY');
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** IE 11 compatible closest implementation that is able to start from non-Element Nodes. */

function closest(element, selector) {
  if (!(element instanceof Node)) {
    return null;
  }

  let curr = element;

  while (curr != null && !(curr instanceof Element)) {
    curr = curr.parentNode;
  }

  return curr && (hasNativeClosest ? curr.closest(selector) : polyfillClosest(curr, selector));
}
/** Polyfill for browsers without Element.closest. */


function polyfillClosest(element, selector) {
  let curr = element;

  while (curr != null && !(curr instanceof Element && matches(curr, selector))) {
    curr = curr.parentNode;
  }

  return curr || null;
}

const hasNativeClosest = typeof Element != 'undefined' && !!Element.prototype.closest;
/** IE 11 compatible matches implementation. */

function matches(element, selector) {
  return element.matches ? element.matches(selector) : element['msMatchesSelector'](selector);
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Lightweight FocusTrapInertStrategy that adds a document focus event
 * listener to redirect focus back inside the FocusTrap.
 */


class EventListenerFocusTrapInertStrategy {
  constructor() {
    /** Focus event handler. */
    this._listener = null;
  }
  /** Adds a document event listener that keeps focus inside the FocusTrap. */


  preventFocus(focusTrap) {
    // Ensure there's only one listener per document
    if (this._listener) {
      focusTrap._document.removeEventListener('focus', this._listener, true);
    }

    this._listener = e => this._trapFocus(focusTrap, e);

    focusTrap._ngZone.runOutsideAngular(() => {
      focusTrap._document.addEventListener('focus', this._listener, true);
    });
  }
  /** Removes the event listener added in preventFocus. */


  allowFocus(focusTrap) {
    if (!this._listener) {
      return;
    }

    focusTrap._document.removeEventListener('focus', this._listener, true);

    this._listener = null;
  }
  /**
   * Refocuses the first element in the FocusTrap if the focus event target was outside
   * the FocusTrap.
   *
   * This is an event listener callback. The event listener is added in runOutsideAngular,
   * so all this code runs outside Angular as well.
   */


  _trapFocus(focusTrap, event) {
    const target = event.target;
    const focusTrapRoot = focusTrap._element; // Don't refocus if target was in an overlay, because the overlay might be associated
    // with an element inside the FocusTrap, ex. mat-select.

    if (!focusTrapRoot.contains(target) && closest(target, 'div.cdk-overlay-pane') === null) {
      // Some legacy FocusTrap usages have logic that focuses some element on the page
      // just before FocusTrap is destroyed. For backwards compatibility, wait
      // to be sure FocusTrap is still enabled before refocusing.
      setTimeout(() => {
        // Check whether focus wasn't put back into the focus trap while the timeout was pending.
        if (focusTrap.enabled && !focusTrapRoot.contains(focusTrap._document.activeElement)) {
          focusTrap.focusFirstTabbableElement();
        }
      });
    }
  }

}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Injectable that ensures only the most recently enabled FocusTrap is active. */


let FocusTrapManager = /*#__PURE__*/(/* unused pure expression or super */ null && ((() => {
  class FocusTrapManager {
    constructor() {
      // A stack of the FocusTraps on the page. Only the FocusTrap at the
      // top of the stack is active.
      this._focusTrapStack = [];
    }
    /**
     * Disables the FocusTrap at the top of the stack, and then pushes
     * the new FocusTrap onto the stack.
     */


    register(focusTrap) {
      // Dedupe focusTraps that register multiple times.
      this._focusTrapStack = this._focusTrapStack.filter(ft => ft !== focusTrap);
      let stack = this._focusTrapStack;

      if (stack.length) {
        stack[stack.length - 1]._disable();
      }

      stack.push(focusTrap);

      focusTrap._enable();
    }
    /**
     * Removes the FocusTrap from the stack, and activates the
     * FocusTrap that is the new top of the stack.
     */


    deregister(focusTrap) {
      focusTrap._disable();

      const stack = this._focusTrapStack;
      const i = stack.indexOf(focusTrap);

      if (i !== -1) {
        stack.splice(i, 1);

        if (stack.length) {
          stack[stack.length - 1]._enable();
        }
      }
    }

  }

  FocusTrapManager.ɵfac = function FocusTrapManager_Factory(t) {
    return new (t || FocusTrapManager)();
  };

  FocusTrapManager.ɵprov = i0.ɵɵdefineInjectable({
    factory: function FocusTrapManager_Factory() {
      return new FocusTrapManager();
    },
    token: FocusTrapManager,
    providedIn: "root"
  });
  return FocusTrapManager;
})()));

/*#__PURE__*/
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Factory that allows easy instantiation of configurable focus traps. */


let ConfigurableFocusTrapFactory = /*#__PURE__*/(/* unused pure expression or super */ null && ((() => {
  class ConfigurableFocusTrapFactory {
    constructor(_checker, _ngZone, _focusTrapManager, _document, _inertStrategy) {
      this._checker = _checker;
      this._ngZone = _ngZone;
      this._focusTrapManager = _focusTrapManager;
      this._document = _document; // TODO split up the strategies into different modules, similar to DateAdapter.

      this._inertStrategy = _inertStrategy || new EventListenerFocusTrapInertStrategy();
    }

    create(element, config = {
      defer: false
    }) {
      let configObject;

      if (typeof config === 'boolean') {
        configObject = {
          defer: config
        };
      } else {
        configObject = config;
      }

      return new ConfigurableFocusTrap(element, this._checker, this._ngZone, this._document, this._focusTrapManager, this._inertStrategy, configObject);
    }

  }

  ConfigurableFocusTrapFactory.ɵfac = function ConfigurableFocusTrapFactory_Factory(t) {
    return new (t || ConfigurableFocusTrapFactory)(ɵngcc0.ɵɵinject(InteractivityChecker), ɵngcc0.ɵɵinject(ɵngcc0.NgZone), ɵngcc0.ɵɵinject(FocusTrapManager), ɵngcc0.ɵɵinject(DOCUMENT), ɵngcc0.ɵɵinject(FOCUS_TRAP_INERT_STRATEGY, 8));
  };

  ConfigurableFocusTrapFactory.ɵprov = i0.ɵɵdefineInjectable({
    factory: function ConfigurableFocusTrapFactory_Factory() {
      return new ConfigurableFocusTrapFactory(i0.ɵɵinject(InteractivityChecker), i0.ɵɵinject(i0.NgZone), i0.ɵɵinject(FocusTrapManager), i0.ɵɵinject(i2.DOCUMENT), i0.ɵɵinject(FOCUS_TRAP_INERT_STRATEGY, 8));
    },
    token: ConfigurableFocusTrapFactory,
    providedIn: "root"
  });
  return ConfigurableFocusTrapFactory;
})()));

/*#__PURE__*/
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Gets whether an event could be a faked `mousedown` event dispatched by a screen reader. */


function isFakeMousedownFromScreenReader(event) {
  // Some screen readers will dispatch a fake `mousedown` event when pressing enter or space on
  // a clickable element. We can distinguish these events when both `offsetX` and `offsetY` are
  // zero. Note that there's an edge case where the user could click the 0x0 spot of the screen
  // themselves, but that is unlikely to contain interaction elements. Historially we used to check
  // `event.buttons === 0`, however that no longer works on recent versions of NVDA.
  return event.offsetX === 0 && event.offsetY === 0;
}
/** Gets whether an event could be a faked `touchstart` event dispatched by a screen reader. */


function isFakeTouchstartFromScreenReader(event) {
  const touch = event.touches && event.touches[0] || event.changedTouches && event.changedTouches[0]; // A fake `touchstart` can be distinguished from a real one by looking at the `identifier`
  // which is typically >= 0 on a real device versus -1 from a screen reader. Just to be safe,
  // we can also look at `radiusX` and `radiusY`. This behavior was observed against a Windows 10
  // device with a touch screen running NVDA v2020.4 and Firefox 85 or Chrome 88.

  return !!touch && touch.identifier === -1 && (touch.radiusX == null || touch.radiusX === 1) && (touch.radiusY == null || touch.radiusY === 1);
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Injectable options for the InputModalityDetector. These are shallowly merged with the default
 * options.
 */


const INPUT_MODALITY_DETECTOR_OPTIONS = /*#__PURE__*/new core/* InjectionToken */.OlP('cdk-input-modality-detector-options');
/**
 * Default options for the InputModalityDetector.
 *
 * Modifier keys are ignored by default (i.e. when pressed won't cause the service to detect
 * keyboard input modality) for two reasons:
 *
 * 1. Modifier keys are commonly used with mouse to perform actions such as 'right click' or 'open
 *    in new tab', and are thus less representative of actual keyboard interaction.
 * 2. VoiceOver triggers some keyboard events when linearly navigating with Control + Option (but
 *    confusingly not with Caps Lock). Thus, to have parity with other screen readers, we ignore
 *    these keys so as to not update the input modality.
 *
 * Note that we do not by default ignore the right Meta key on Safari because it has the same key
 * code as the ContextMenu key on other browsers. When we switch to using event.key, we can
 * distinguish between the two.
 */

const INPUT_MODALITY_DETECTOR_DEFAULT_OPTIONS = {
  ignoreKeys: [ALT, CONTROL, MAC_META, META, SHIFT]
};
/**
 * The amount of time needed to pass after a touchstart event in order for a subsequent mousedown
 * event to be attributed as mouse and not touch.
 *
 * This is the value used by AngularJS Material. Through trial and error (on iPhone 6S) they found
 * that a value of around 650ms seems appropriate.
 */

const TOUCH_BUFFER_MS = 650;
/**
 * Event listener options that enable capturing and also mark the listener as passive if the browser
 * supports it.
 */

const modalityEventListenerOptions = /*#__PURE__*/(0,platform/* normalizePassiveListenerOptions */.i$)({
  passive: true,
  capture: true
});
/**
 * Service that detects the user's input modality.
 *
 * This service does not update the input modality when a user navigates with a screen reader
 * (e.g. linear navigation with VoiceOver, object navigation / browse mode with NVDA, virtual PC
 * cursor mode with JAWS). This is in part due to technical limitations (i.e. keyboard events do not
 * fire as expected in these modes) but is also arguably the correct behavior. Navigating with a
 * screen reader is akin to visually scanning a page, and should not be interpreted as actual user
 * input interaction.
 *
 * When a user is not navigating but *interacting* with a screen reader, this service attempts to
 * update the input modality to keyboard, but in general this service's behavior is largely
 * undefined.
 */

let InputModalityDetector = /*#__PURE__*/(() => {
  class InputModalityDetector {
    constructor(_platform, ngZone, document, options) {
      this._platform = _platform;
      /**
       * The most recently detected input modality event target. Is null if no input modality has been
       * detected or if the associated event target is null for some unknown reason.
       */

      this._mostRecentTarget = null;
      /** The underlying BehaviorSubject that emits whenever an input modality is detected. */

      this._modality = new BehaviorSubject/* BehaviorSubject */.X(null);
      /**
       * The timestamp of the last touch input modality. Used to determine whether mousedown events
       * should be attributed to mouse or touch.
       */

      this._lastTouchMs = 0;
      /**
       * Handles keydown events. Must be an arrow function in order to preserve the context when it gets
       * bound.
       */

      this._onKeydown = event => {
        var _a, _b; // If this is one of the keys we should ignore, then ignore it and don't update the input
        // modality to keyboard.


        if ((_b = (_a = this._options) === null || _a === void 0 ? void 0 : _a.ignoreKeys) === null || _b === void 0 ? void 0 : _b.some(keyCode => keyCode === event.keyCode)) {
          return;
        }

        this._modality.next('keyboard');

        this._mostRecentTarget = (0,platform/* _getEventTarget */.sA)(event);
      };
      /**
       * Handles mousedown events. Must be an arrow function in order to preserve the context when it
       * gets bound.
       */


      this._onMousedown = event => {
        // Touches trigger both touch and mouse events, so we need to distinguish between mouse events
        // that were triggered via mouse vs touch. To do so, check if the mouse event occurs closely
        // after the previous touch event.
        if (Date.now() - this._lastTouchMs < TOUCH_BUFFER_MS) {
          return;
        } // Fake mousedown events are fired by some screen readers when controls are activated by the
        // screen reader. Attribute them to keyboard input modality.


        this._modality.next(isFakeMousedownFromScreenReader(event) ? 'keyboard' : 'mouse');

        this._mostRecentTarget = (0,platform/* _getEventTarget */.sA)(event);
      };
      /**
       * Handles touchstart events. Must be an arrow function in order to preserve the context when it
       * gets bound.
       */


      this._onTouchstart = event => {
        // Same scenario as mentioned in _onMousedown, but on touch screen devices, fake touchstart
        // events are fired. Again, attribute to keyboard input modality.
        if (isFakeTouchstartFromScreenReader(event)) {
          this._modality.next('keyboard');

          return;
        } // Store the timestamp of this touch event, as it's used to distinguish between mouse events
        // triggered via mouse vs touch.


        this._lastTouchMs = Date.now();

        this._modality.next('touch');

        this._mostRecentTarget = (0,platform/* _getEventTarget */.sA)(event);
      };

      this._options = Object.assign(Object.assign({}, INPUT_MODALITY_DETECTOR_DEFAULT_OPTIONS), options); // Skip the first emission as it's null.

      this.modalityDetected = this._modality.pipe((0,skip/* skip */.T)(1));
      this.modalityChanged = this.modalityDetected.pipe((0,distinctUntilChanged/* distinctUntilChanged */.x)()); // If we're not in a browser, this service should do nothing, as there's no relevant input
      // modality to detect.

      if (_platform.isBrowser) {
        ngZone.runOutsideAngular(() => {
          document.addEventListener('keydown', this._onKeydown, modalityEventListenerOptions);
          document.addEventListener('mousedown', this._onMousedown, modalityEventListenerOptions);
          document.addEventListener('touchstart', this._onTouchstart, modalityEventListenerOptions);
        });
      }
    }
    /** The most recently detected input modality. */


    get mostRecentModality() {
      return this._modality.value;
    }

    ngOnDestroy() {
      this._modality.complete();

      if (this._platform.isBrowser) {
        document.removeEventListener('keydown', this._onKeydown, modalityEventListenerOptions);
        document.removeEventListener('mousedown', this._onMousedown, modalityEventListenerOptions);
        document.removeEventListener('touchstart', this._onTouchstart, modalityEventListenerOptions);
      }
    }

  }

  InputModalityDetector.ɵfac = function InputModalityDetector_Factory(t) {
    return new (t || InputModalityDetector)(core/* ɵɵinject */.LFG(platform/* Platform */.t4), core/* ɵɵinject */.LFG(core/* NgZone */.R0b), core/* ɵɵinject */.LFG(common/* DOCUMENT */.K0), core/* ɵɵinject */.LFG(INPUT_MODALITY_DETECTOR_OPTIONS, 8));
  };

  InputModalityDetector.ɵprov = core/* ɵɵdefineInjectable */.Yz7({
    factory: function InputModalityDetector_Factory() {
      return new InputModalityDetector(core/* ɵɵinject */.LFG(platform/* Platform */.t4), core/* ɵɵinject */.LFG(core/* NgZone */.R0b), core/* ɵɵinject */.LFG(common/* DOCUMENT */.K0), core/* ɵɵinject */.LFG(INPUT_MODALITY_DETECTOR_OPTIONS, 8));
    },
    token: InputModalityDetector,
    providedIn: "root"
  });
  return InputModalityDetector;
})();

/*#__PURE__*/
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


const LIVE_ANNOUNCER_ELEMENT_TOKEN = /*#__PURE__*/new core/* InjectionToken */.OlP('liveAnnouncerElement', {
  providedIn: 'root',
  factory: LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY
});
/** @docs-private */

function LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY() {
  return null;
}
/** Injection token that can be used to configure the default options for the LiveAnnouncer. */


const LIVE_ANNOUNCER_DEFAULT_OPTIONS = /*#__PURE__*/new core/* InjectionToken */.OlP('LIVE_ANNOUNCER_DEFAULT_OPTIONS');
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

let LiveAnnouncer = /*#__PURE__*/(() => {
  class LiveAnnouncer {
    constructor(elementToken, _ngZone, _document, _defaultOptions) {
      this._ngZone = _ngZone;
      this._defaultOptions = _defaultOptions; // We inject the live element and document as `any` because the constructor signature cannot
      // reference browser globals (HTMLElement, Document) on non-browser environments, since having
      // a class decorator causes TypeScript to preserve the constructor signature types.

      this._document = _document;
      this._liveElement = elementToken || this._createLiveElement();
    }

    announce(message, ...args) {
      const defaultOptions = this._defaultOptions;
      let politeness;
      let duration;

      if (args.length === 1 && typeof args[0] === 'number') {
        duration = args[0];
      } else {
        [politeness, duration] = args;
      }

      this.clear();
      clearTimeout(this._previousTimeout);

      if (!politeness) {
        politeness = defaultOptions && defaultOptions.politeness ? defaultOptions.politeness : 'polite';
      }

      if (duration == null && defaultOptions) {
        duration = defaultOptions.duration;
      } // TODO: ensure changing the politeness works on all environments we support.


      this._liveElement.setAttribute('aria-live', politeness); // This 100ms timeout is necessary for some browser + screen-reader combinations:
      // - Both JAWS and NVDA over IE11 will not announce anything without a non-zero timeout.
      // - With Chrome and IE11 with NVDA or JAWS, a repeated (identical) message won't be read a
      //   second time without clearing and then using a non-zero delay.
      // (using JAWS 17 at time of this writing).


      return this._ngZone.runOutsideAngular(() => {
        return new Promise(resolve => {
          clearTimeout(this._previousTimeout);
          this._previousTimeout = setTimeout(() => {
            this._liveElement.textContent = message;
            resolve();

            if (typeof duration === 'number') {
              this._previousTimeout = setTimeout(() => this.clear(), duration);
            }
          }, 100);
        });
      });
    }
    /**
     * Clears the current text from the announcer element. Can be used to prevent
     * screen readers from reading the text out again while the user is going
     * through the page landmarks.
     */


    clear() {
      if (this._liveElement) {
        this._liveElement.textContent = '';
      }
    }

    ngOnDestroy() {
      clearTimeout(this._previousTimeout);

      if (this._liveElement && this._liveElement.parentNode) {
        this._liveElement.parentNode.removeChild(this._liveElement);

        this._liveElement = null;
      }
    }

    _createLiveElement() {
      const elementClass = 'cdk-live-announcer-element';

      const previousElements = this._document.getElementsByClassName(elementClass);

      const liveEl = this._document.createElement('div'); // Remove any old containers. This can happen when coming in from a server-side-rendered page.


      for (let i = 0; i < previousElements.length; i++) {
        previousElements[i].parentNode.removeChild(previousElements[i]);
      }

      liveEl.classList.add(elementClass);
      liveEl.classList.add('cdk-visually-hidden');
      liveEl.setAttribute('aria-atomic', 'true');
      liveEl.setAttribute('aria-live', 'polite');

      this._document.body.appendChild(liveEl);

      return liveEl;
    }

  }

  LiveAnnouncer.ɵfac = function LiveAnnouncer_Factory(t) {
    return new (t || LiveAnnouncer)(core/* ɵɵinject */.LFG(LIVE_ANNOUNCER_ELEMENT_TOKEN, 8), core/* ɵɵinject */.LFG(core/* NgZone */.R0b), core/* ɵɵinject */.LFG(common/* DOCUMENT */.K0), core/* ɵɵinject */.LFG(LIVE_ANNOUNCER_DEFAULT_OPTIONS, 8));
  };

  LiveAnnouncer.ɵprov = core/* ɵɵdefineInjectable */.Yz7({
    factory: function LiveAnnouncer_Factory() {
      return new LiveAnnouncer(core/* ɵɵinject */.LFG(LIVE_ANNOUNCER_ELEMENT_TOKEN, 8), core/* ɵɵinject */.LFG(core/* NgZone */.R0b), core/* ɵɵinject */.LFG(common/* DOCUMENT */.K0), core/* ɵɵinject */.LFG(LIVE_ANNOUNCER_DEFAULT_OPTIONS, 8));
    },
    token: LiveAnnouncer,
    providedIn: "root"
  });
  return LiveAnnouncer;
})();

/*#__PURE__*/
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * A directive that works similarly to aria-live, but uses the LiveAnnouncer to ensure compatibility
 * with a wider range of browsers and screen readers.
 */


let CdkAriaLive = /*#__PURE__*/(() => {
  class CdkAriaLive {
    constructor(_elementRef, _liveAnnouncer, _contentObserver, _ngZone) {
      this._elementRef = _elementRef;
      this._liveAnnouncer = _liveAnnouncer;
      this._contentObserver = _contentObserver;
      this._ngZone = _ngZone;
      this._politeness = 'polite';
    }
    /** The aria-live politeness level to use when announcing messages. */


    get politeness() {
      return this._politeness;
    }

    set politeness(value) {
      this._politeness = value === 'off' || value === 'assertive' ? value : 'polite';

      if (this._politeness === 'off') {
        if (this._subscription) {
          this._subscription.unsubscribe();

          this._subscription = null;
        }
      } else if (!this._subscription) {
        this._subscription = this._ngZone.runOutsideAngular(() => {
          return this._contentObserver.observe(this._elementRef).subscribe(() => {
            // Note that we use textContent here, rather than innerText, in order to avoid a reflow.
            const elementText = this._elementRef.nativeElement.textContent; // The `MutationObserver` fires also for attribute
            // changes which we don't want to announce.

            if (elementText !== this._previousAnnouncedText) {
              this._liveAnnouncer.announce(elementText, this._politeness);

              this._previousAnnouncedText = elementText;
            }
          });
        });
      }
    }

    ngOnDestroy() {
      if (this._subscription) {
        this._subscription.unsubscribe();
      }
    }

  }

  CdkAriaLive.ɵfac = function CdkAriaLive_Factory(t) {
    return new (t || CdkAriaLive)(core/* ɵɵdirectiveInject */.Y36(core/* ElementRef */.SBq), core/* ɵɵdirectiveInject */.Y36(LiveAnnouncer), core/* ɵɵdirectiveInject */.Y36(ContentObserver), core/* ɵɵdirectiveInject */.Y36(core/* NgZone */.R0b));
  };

  CdkAriaLive.ɵdir = /*@__PURE__*/core/* ɵɵdefineDirective */.lG2({
    type: CdkAriaLive,
    selectors: [["", "cdkAriaLive", ""]],
    inputs: {
      politeness: ["cdkAriaLive", "politeness"]
    },
    exportAs: ["cdkAriaLive"]
  });
  return CdkAriaLive;
})();

/*#__PURE__*/
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** InjectionToken for FocusMonitorOptions. */


const FOCUS_MONITOR_DEFAULT_OPTIONS = /*#__PURE__*/new core/* InjectionToken */.OlP('cdk-focus-monitor-default-options');
/**
 * Event listener options that enable capturing and also
 * mark the listener as passive if the browser supports it.
 */

const captureEventListenerOptions = /*#__PURE__*/(0,platform/* normalizePassiveListenerOptions */.i$)({
  passive: true,
  capture: true
});
/** Monitors mouse and keyboard events to determine the cause of focus events. */

let FocusMonitor = /*#__PURE__*/(() => {
  class FocusMonitor {
    constructor(_ngZone, _platform, _inputModalityDetector,
    /** @breaking-change 11.0.0 make document required */
    document, options) {
      this._ngZone = _ngZone;
      this._platform = _platform;
      this._inputModalityDetector = _inputModalityDetector;
      /** The focus origin that the next focus event is a result of. */

      this._origin = null;
      /** Whether the window has just been focused. */

      this._windowFocused = false;
      /**
       * Whether the origin was determined via a touch interaction. Necessary as properly attributing
       * focus events to touch interactions requires special logic.
       */

      this._originFromTouchInteraction = false;
      /** Map of elements being monitored to their info. */

      this._elementInfo = new Map();
      /** The number of elements currently being monitored. */

      this._monitoredElementCount = 0;
      /**
       * Keeps track of the root nodes to which we've currently bound a focus/blur handler,
       * as well as the number of monitored elements that they contain. We have to treat focus/blur
       * handlers differently from the rest of the events, because the browser won't emit events
       * to the document when focus moves inside of a shadow root.
       */

      this._rootNodeFocusListenerCount = new Map();
      /**
       * Event listener for `focus` events on the window.
       * Needs to be an arrow function in order to preserve the context when it gets bound.
       */

      this._windowFocusListener = () => {
        // Make a note of when the window regains focus, so we can
        // restore the origin info for the focused element.
        this._windowFocused = true;
        this._windowFocusTimeoutId = setTimeout(() => this._windowFocused = false);
      };
      /** Subject for stopping our InputModalityDetector subscription. */


      this._stopInputModalityDetector = new internal_Subject/* Subject */.xQ();
      /**
       * Event listener for `focus` and 'blur' events on the document.
       * Needs to be an arrow function in order to preserve the context when it gets bound.
       */

      this._rootNodeFocusAndBlurListener = event => {
        const target = (0,platform/* _getEventTarget */.sA)(event);

        const handler = event.type === 'focus' ? this._onFocus : this._onBlur; // We need to walk up the ancestor chain in order to support `checkChildren`.

        for (let element = target; element; element = element.parentElement) {
          handler.call(this, event, element);
        }
      };

      this._document = document;
      this._detectionMode = (options === null || options === void 0 ? void 0 : options.detectionMode) || 0
      /* IMMEDIATE */
      ;
    }

    monitor(element, checkChildren = false) {
      const nativeElement = (0,coercion/* coerceElement */.fI)(element); // Do nothing if we're not on the browser platform or the passed in node isn't an element.

      if (!this._platform.isBrowser || nativeElement.nodeType !== 1) {
        return (0,of.of)(null);
      } // If the element is inside the shadow DOM, we need to bind our focus/blur listeners to
      // the shadow root, rather than the `document`, because the browser won't emit focus events
      // to the `document`, if focus is moving within the same shadow root.


      const rootNode = (0,platform/* _getShadowRoot */.kV)(nativeElement) || this._getDocument();

      const cachedInfo = this._elementInfo.get(nativeElement); // Check if we're already monitoring this element.


      if (cachedInfo) {
        if (checkChildren) {
          // TODO(COMP-318): this can be problematic, because it'll turn all non-checkChildren
          // observers into ones that behave as if `checkChildren` was turned on. We need a more
          // robust solution.
          cachedInfo.checkChildren = true;
        }

        return cachedInfo.subject;
      } // Create monitored element info.


      const info = {
        checkChildren: checkChildren,
        subject: new internal_Subject/* Subject */.xQ(),
        rootNode
      };

      this._elementInfo.set(nativeElement, info);

      this._registerGlobalListeners(info);

      return info.subject;
    }

    stopMonitoring(element) {
      const nativeElement = (0,coercion/* coerceElement */.fI)(element);

      const elementInfo = this._elementInfo.get(nativeElement);

      if (elementInfo) {
        elementInfo.subject.complete();

        this._setClasses(nativeElement);

        this._elementInfo.delete(nativeElement);

        this._removeGlobalListeners(elementInfo);
      }
    }

    focusVia(element, origin, options) {
      const nativeElement = (0,coercion/* coerceElement */.fI)(element);

      const focusedElement = this._getDocument().activeElement; // If the element is focused already, calling `focus` again won't trigger the event listener
      // which means that the focus classes won't be updated. If that's the case, update the classes
      // directly without waiting for an event.


      if (nativeElement === focusedElement) {
        this._getClosestElementsInfo(nativeElement).forEach(([currentElement, info]) => this._originChanged(currentElement, origin, info));
      } else {
        this._setOrigin(origin); // `focus` isn't available on the server


        if (typeof nativeElement.focus === 'function') {
          nativeElement.focus(options);
        }
      }
    }

    ngOnDestroy() {
      this._elementInfo.forEach((_info, element) => this.stopMonitoring(element));
    }
    /** Access injected document if available or fallback to global document reference */


    _getDocument() {
      return this._document || document;
    }
    /** Use defaultView of injected document if available or fallback to global window reference */


    _getWindow() {
      const doc = this._getDocument();

      return doc.defaultView || window;
    }

    _toggleClass(element, className, shouldSet) {
      if (shouldSet) {
        element.classList.add(className);
      } else {
        element.classList.remove(className);
      }
    }

    _getFocusOrigin(focusEventTarget) {
      if (this._origin) {
        // If the origin was realized via a touch interaction, we need to perform additional checks
        // to determine whether the focus origin should be attributed to touch or program.
        if (this._originFromTouchInteraction) {
          return this._shouldBeAttributedToTouch(focusEventTarget) ? 'touch' : 'program';
        } else {
          return this._origin;
        }
      } // If the window has just regained focus, we can restore the most recent origin from before the
      // window blurred. Otherwise, we've reached the point where we can't identify the source of the
      // focus. This typically means one of two things happened:
      //
      // 1) The element was programmatically focused, or
      // 2) The element was focused via screen reader navigation (which generally doesn't fire
      //    events).
      //
      // Because we can't distinguish between these two cases, we default to setting `program`.


      return this._windowFocused && this._lastFocusOrigin ? this._lastFocusOrigin : 'program';
    }
    /**
     * Returns whether the focus event should be attributed to touch. Recall that in IMMEDIATE mode, a
     * touch origin isn't immediately reset at the next tick (see _setOrigin). This means that when we
     * handle a focus event following a touch interaction, we need to determine whether (1) the focus
     * event was directly caused by the touch interaction or (2) the focus event was caused by a
     * subsequent programmatic focus call triggered by the touch interaction.
     * @param focusEventTarget The target of the focus event under examination.
     */


    _shouldBeAttributedToTouch(focusEventTarget) {
      // Please note that this check is not perfect. Consider the following edge case:
      //
      // <div #parent tabindex="0">
      //   <div #child tabindex="0" (click)="#parent.focus()"></div>
      // </div>
      //
      // Suppose there is a FocusMonitor in IMMEDIATE mode attached to #parent. When the user touches
      // #child, #parent is programmatically focused. This code will attribute the focus to touch
      // instead of program. This is a relatively minor edge-case that can be worked around by using
      // focusVia(parent, 'program') to focus #parent.
      return this._detectionMode === 1
      /* EVENTUAL */
      || !!(focusEventTarget === null || focusEventTarget === void 0 ? void 0 : focusEventTarget.contains(this._inputModalityDetector._mostRecentTarget));
    }
    /**
     * Sets the focus classes on the element based on the given focus origin.
     * @param element The element to update the classes on.
     * @param origin The focus origin.
     */


    _setClasses(element, origin) {
      this._toggleClass(element, 'cdk-focused', !!origin);

      this._toggleClass(element, 'cdk-touch-focused', origin === 'touch');

      this._toggleClass(element, 'cdk-keyboard-focused', origin === 'keyboard');

      this._toggleClass(element, 'cdk-mouse-focused', origin === 'mouse');

      this._toggleClass(element, 'cdk-program-focused', origin === 'program');
    }
    /**
     * Updates the focus origin. If we're using immediate detection mode, we schedule an async
     * function to clear the origin at the end of a timeout. The duration of the timeout depends on
     * the origin being set.
     * @param origin The origin to set.
     * @param isFromInteraction Whether we are setting the origin from an interaction event.
     */


    _setOrigin(origin, isFromInteraction = false) {
      this._ngZone.runOutsideAngular(() => {
        this._origin = origin;
        this._originFromTouchInteraction = origin === 'touch' && isFromInteraction; // If we're in IMMEDIATE mode, reset the origin at the next tick (or in `TOUCH_BUFFER_MS` ms
        // for a touch event). We reset the origin at the next tick because Firefox focuses one tick
        // after the interaction event. We wait `TOUCH_BUFFER_MS` ms before resetting the origin for
        // a touch event because when a touch event is fired, the associated focus event isn't yet in
        // the event queue. Before doing so, clear any pending timeouts.

        if (this._detectionMode === 0
        /* IMMEDIATE */
        ) {
          clearTimeout(this._originTimeoutId);
          const ms = this._originFromTouchInteraction ? TOUCH_BUFFER_MS : 1;
          this._originTimeoutId = setTimeout(() => this._origin = null, ms);
        }
      });
    }
    /**
     * Handles focus events on a registered element.
     * @param event The focus event.
     * @param element The monitored element.
     */


    _onFocus(event, element) {
      // NOTE(mmalerba): We currently set the classes based on the focus origin of the most recent
      // focus event affecting the monitored element. If we want to use the origin of the first event
      // instead we should check for the cdk-focused class here and return if the element already has
      // it. (This only matters for elements that have includesChildren = true).
      // If we are not counting child-element-focus as focused, make sure that the event target is the
      // monitored element itself.
      const elementInfo = this._elementInfo.get(element);

      const focusEventTarget = (0,platform/* _getEventTarget */.sA)(event);

      if (!elementInfo || !elementInfo.checkChildren && element !== focusEventTarget) {
        return;
      }

      this._originChanged(element, this._getFocusOrigin(focusEventTarget), elementInfo);
    }
    /**
     * Handles blur events on a registered element.
     * @param event The blur event.
     * @param element The monitored element.
     */


    _onBlur(event, element) {
      // If we are counting child-element-focus as focused, make sure that we aren't just blurring in
      // order to focus another child of the monitored element.
      const elementInfo = this._elementInfo.get(element);

      if (!elementInfo || elementInfo.checkChildren && event.relatedTarget instanceof Node && element.contains(event.relatedTarget)) {
        return;
      }

      this._setClasses(element);

      this._emitOrigin(elementInfo.subject, null);
    }

    _emitOrigin(subject, origin) {
      this._ngZone.run(() => subject.next(origin));
    }

    _registerGlobalListeners(elementInfo) {
      if (!this._platform.isBrowser) {
        return;
      }

      const rootNode = elementInfo.rootNode;
      const rootNodeFocusListeners = this._rootNodeFocusListenerCount.get(rootNode) || 0;

      if (!rootNodeFocusListeners) {
        this._ngZone.runOutsideAngular(() => {
          rootNode.addEventListener('focus', this._rootNodeFocusAndBlurListener, captureEventListenerOptions);
          rootNode.addEventListener('blur', this._rootNodeFocusAndBlurListener, captureEventListenerOptions);
        });
      }

      this._rootNodeFocusListenerCount.set(rootNode, rootNodeFocusListeners + 1); // Register global listeners when first element is monitored.


      if (++this._monitoredElementCount === 1) {
        // Note: we listen to events in the capture phase so we
        // can detect them even if the user stops propagation.
        this._ngZone.runOutsideAngular(() => {
          const window = this._getWindow();

          window.addEventListener('focus', this._windowFocusListener);
        }); // The InputModalityDetector is also just a collection of global listeners.


        this._inputModalityDetector.modalityDetected.pipe((0,takeUntil/* takeUntil */.R)(this._stopInputModalityDetector)).subscribe(modality => {
          this._setOrigin(modality, true
          /* isFromInteraction */
          );
        });
      }
    }

    _removeGlobalListeners(elementInfo) {
      const rootNode = elementInfo.rootNode;

      if (this._rootNodeFocusListenerCount.has(rootNode)) {
        const rootNodeFocusListeners = this._rootNodeFocusListenerCount.get(rootNode);

        if (rootNodeFocusListeners > 1) {
          this._rootNodeFocusListenerCount.set(rootNode, rootNodeFocusListeners - 1);
        } else {
          rootNode.removeEventListener('focus', this._rootNodeFocusAndBlurListener, captureEventListenerOptions);
          rootNode.removeEventListener('blur', this._rootNodeFocusAndBlurListener, captureEventListenerOptions);

          this._rootNodeFocusListenerCount.delete(rootNode);
        }
      } // Unregister global listeners when last element is unmonitored.


      if (! --this._monitoredElementCount) {
        const window = this._getWindow();

        window.removeEventListener('focus', this._windowFocusListener); // Equivalently, stop our InputModalityDetector subscription.

        this._stopInputModalityDetector.next(); // Clear timeouts for all potentially pending timeouts to prevent the leaks.


        clearTimeout(this._windowFocusTimeoutId);
        clearTimeout(this._originTimeoutId);
      }
    }
    /** Updates all the state on an element once its focus origin has changed. */


    _originChanged(element, origin, elementInfo) {
      this._setClasses(element, origin);

      this._emitOrigin(elementInfo.subject, origin);

      this._lastFocusOrigin = origin;
    }
    /**
     * Collects the `MonitoredElementInfo` of a particular element and
     * all of its ancestors that have enabled `checkChildren`.
     * @param element Element from which to start the search.
     */


    _getClosestElementsInfo(element) {
      const results = [];

      this._elementInfo.forEach((info, currentElement) => {
        if (currentElement === element || info.checkChildren && currentElement.contains(element)) {
          results.push([currentElement, info]);
        }
      });

      return results;
    }

  }

  FocusMonitor.ɵfac = function FocusMonitor_Factory(t) {
    return new (t || FocusMonitor)(core/* ɵɵinject */.LFG(core/* NgZone */.R0b), core/* ɵɵinject */.LFG(platform/* Platform */.t4), core/* ɵɵinject */.LFG(InputModalityDetector), core/* ɵɵinject */.LFG(common/* DOCUMENT */.K0, 8), core/* ɵɵinject */.LFG(FOCUS_MONITOR_DEFAULT_OPTIONS, 8));
  };

  FocusMonitor.ɵprov = core/* ɵɵdefineInjectable */.Yz7({
    factory: function FocusMonitor_Factory() {
      return new FocusMonitor(core/* ɵɵinject */.LFG(core/* NgZone */.R0b), core/* ɵɵinject */.LFG(platform/* Platform */.t4), core/* ɵɵinject */.LFG(InputModalityDetector), core/* ɵɵinject */.LFG(common/* DOCUMENT */.K0, 8), core/* ɵɵinject */.LFG(FOCUS_MONITOR_DEFAULT_OPTIONS, 8));
    },
    token: FocusMonitor,
    providedIn: "root"
  });
  return FocusMonitor;
})();

/*#__PURE__*/
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Directive that determines how a particular element was focused (via keyboard, mouse, touch, or
 * programmatically) and adds corresponding classes to the element.
 *
 * There are two variants of this directive:
 * 1) cdkMonitorElementFocus: does not consider an element to be focused if one of its children is
 *    focused.
 * 2) cdkMonitorSubtreeFocus: considers an element focused if it or any of its children are focused.
 */


let CdkMonitorFocus = /*#__PURE__*/(() => {
  class CdkMonitorFocus {
    constructor(_elementRef, _focusMonitor) {
      this._elementRef = _elementRef;
      this._focusMonitor = _focusMonitor;
      this.cdkFocusChange = new core/* EventEmitter */.vpe();
    }

    ngAfterViewInit() {
      const element = this._elementRef.nativeElement;
      this._monitorSubscription = this._focusMonitor.monitor(element, element.nodeType === 1 && element.hasAttribute('cdkMonitorSubtreeFocus')).subscribe(origin => this.cdkFocusChange.emit(origin));
    }

    ngOnDestroy() {
      this._focusMonitor.stopMonitoring(this._elementRef);

      if (this._monitorSubscription) {
        this._monitorSubscription.unsubscribe();
      }
    }

  }

  CdkMonitorFocus.ɵfac = function CdkMonitorFocus_Factory(t) {
    return new (t || CdkMonitorFocus)(core/* ɵɵdirectiveInject */.Y36(core/* ElementRef */.SBq), core/* ɵɵdirectiveInject */.Y36(FocusMonitor));
  };

  CdkMonitorFocus.ɵdir = /*@__PURE__*/core/* ɵɵdefineDirective */.lG2({
    type: CdkMonitorFocus,
    selectors: [["", "cdkMonitorElementFocus", ""], ["", "cdkMonitorSubtreeFocus", ""]],
    outputs: {
      cdkFocusChange: "cdkFocusChange"
    }
  });
  return CdkMonitorFocus;
})();

/*#__PURE__*/
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** CSS class applied to the document body when in black-on-white high-contrast mode. */


const BLACK_ON_WHITE_CSS_CLASS = 'cdk-high-contrast-black-on-white';
/** CSS class applied to the document body when in white-on-black high-contrast mode. */

const WHITE_ON_BLACK_CSS_CLASS = 'cdk-high-contrast-white-on-black';
/** CSS class applied to the document body when in high-contrast mode. */

const HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS = 'cdk-high-contrast-active';
/**
 * Service to determine whether the browser is currently in a high-contrast-mode environment.
 *
 * Microsoft Windows supports an accessibility feature called "High Contrast Mode". This mode
 * changes the appearance of all applications, including web applications, to dramatically increase
 * contrast.
 *
 * IE, Edge, and Firefox currently support this mode. Chrome does not support Windows High Contrast
 * Mode. This service does not detect high-contrast mode as added by the Chrome "High Contrast"
 * browser extension.
 */

let HighContrastModeDetector = /*#__PURE__*/(() => {
  class HighContrastModeDetector {
    constructor(_platform, document) {
      this._platform = _platform;
      this._document = document;
    }
    /** Gets the current high-contrast-mode for the page. */


    getHighContrastMode() {
      if (!this._platform.isBrowser) {
        return 0
        /* NONE */
        ;
      } // Create a test element with an arbitrary background-color that is neither black nor
      // white; high-contrast mode will coerce the color to either black or white. Also ensure that
      // appending the test element to the DOM does not affect layout by absolutely positioning it


      const testElement = this._document.createElement('div');

      testElement.style.backgroundColor = 'rgb(1,2,3)';
      testElement.style.position = 'absolute';

      this._document.body.appendChild(testElement); // Get the computed style for the background color, collapsing spaces to normalize between
      // browsers. Once we get this color, we no longer need the test element. Access the `window`
      // via the document so we can fake it in tests. Note that we have extra null checks, because
      // this logic will likely run during app bootstrap and throwing can break the entire app.


      const documentWindow = this._document.defaultView || window;
      const computedStyle = documentWindow && documentWindow.getComputedStyle ? documentWindow.getComputedStyle(testElement) : null;
      const computedColor = (computedStyle && computedStyle.backgroundColor || '').replace(/ /g, '');

      this._document.body.removeChild(testElement);

      switch (computedColor) {
        case 'rgb(0,0,0)':
          return 2
          /* WHITE_ON_BLACK */
          ;

        case 'rgb(255,255,255)':
          return 1
          /* BLACK_ON_WHITE */
          ;
      }

      return 0
      /* NONE */
      ;
    }
    /** Applies CSS classes indicating high-contrast mode to document body (browser-only). */


    _applyBodyHighContrastModeCssClasses() {
      if (!this._hasCheckedHighContrastMode && this._platform.isBrowser && this._document.body) {
        const bodyClasses = this._document.body.classList; // IE11 doesn't support `classList` operations with multiple arguments

        bodyClasses.remove(HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS);
        bodyClasses.remove(BLACK_ON_WHITE_CSS_CLASS);
        bodyClasses.remove(WHITE_ON_BLACK_CSS_CLASS);
        this._hasCheckedHighContrastMode = true;
        const mode = this.getHighContrastMode();

        if (mode === 1
        /* BLACK_ON_WHITE */
        ) {
          bodyClasses.add(HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS);
          bodyClasses.add(BLACK_ON_WHITE_CSS_CLASS);
        } else if (mode === 2
        /* WHITE_ON_BLACK */
        ) {
          bodyClasses.add(HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS);
          bodyClasses.add(WHITE_ON_BLACK_CSS_CLASS);
        }
      }
    }

  }

  HighContrastModeDetector.ɵfac = function HighContrastModeDetector_Factory(t) {
    return new (t || HighContrastModeDetector)(core/* ɵɵinject */.LFG(platform/* Platform */.t4), core/* ɵɵinject */.LFG(common/* DOCUMENT */.K0));
  };

  HighContrastModeDetector.ɵprov = core/* ɵɵdefineInjectable */.Yz7({
    factory: function HighContrastModeDetector_Factory() {
      return new HighContrastModeDetector(core/* ɵɵinject */.LFG(platform/* Platform */.t4), core/* ɵɵinject */.LFG(common/* DOCUMENT */.K0));
    },
    token: HighContrastModeDetector,
    providedIn: "root"
  });
  return HighContrastModeDetector;
})();

/*#__PURE__*/
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


let A11yModule = /*#__PURE__*/(() => {
  class A11yModule {
    constructor(highContrastModeDetector) {
      highContrastModeDetector._applyBodyHighContrastModeCssClasses();
    }

  }

  A11yModule.ɵfac = function A11yModule_Factory(t) {
    return new (t || A11yModule)(core/* ɵɵinject */.LFG(HighContrastModeDetector));
  };

  A11yModule.ɵmod = /*@__PURE__*/core/* ɵɵdefineNgModule */.oAB({
    type: A11yModule
  });
  A11yModule.ɵinj = /*@__PURE__*/core/* ɵɵdefineInjector */.cJS({
    imports: [[platform/* PlatformModule */.ud, ObserversModule]]
  });
  return A11yModule;
})();

/*#__PURE__*/
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/*#__PURE__*/
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && core/* ɵɵsetNgModuleScope */.kYT(A11yModule, {
    declarations: function () {
      return [CdkAriaLive, CdkTrapFocus, CdkMonitorFocus];
    },
    imports: function () {
      return [platform/* PlatformModule */.ud, ObserversModule];
    },
    exports: function () {
      return [CdkAriaLive, CdkTrapFocus, CdkMonitorFocus];
    }
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */


 //# sourceMappingURL=a11y.js.map
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/Subscription.js + 1 modules
var internal_Subscription = __webpack_require__(75319);
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/observable/interval.js
var interval = __webpack_require__(20945);
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/scheduler/animationFrame.js + 2 modules
var animationFrame = __webpack_require__(61927);
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/observable/merge.js
var merge = __webpack_require__(66682);
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/operators/startWith.js
var startWith = __webpack_require__(39761);
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/operators/map.js
var operators_map = __webpack_require__(88002);
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/operators/tap.js
var operators_tap = __webpack_require__(68307);
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/operators/switchMap.js
var switchMap = __webpack_require__(43190);
// EXTERNAL MODULE: ./node_modules/@angular/cdk/fesm2015/bidi.js
var bidi = __webpack_require__(46794);
;// CONCATENATED MODULE: ./node_modules/@angular/cdk/fesm2015/drag-drop.js












/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Shallow-extends a stylesheet object with another stylesheet-like object.
 * Note that the keys in `source` have to be dash-cased.
 * @docs-private
 */





function extendStyles(dest, source, importantProperties) {
  for (let key in source) {
    if (source.hasOwnProperty(key)) {
      const value = source[key];

      if (value) {
        dest.setProperty(key, value, (importantProperties === null || importantProperties === void 0 ? void 0 : importantProperties.has(key)) ? 'important' : '');
      } else {
        dest.removeProperty(key);
      }
    }
  }

  return dest;
}
/**
 * Toggles whether the native drag interactions should be enabled for an element.
 * @param element Element on which to toggle the drag interactions.
 * @param enable Whether the drag interactions should be enabled.
 * @docs-private
 */


function toggleNativeDragInteractions(element, enable) {
  const userSelect = enable ? '' : 'none';
  extendStyles(element.style, {
    'touch-action': enable ? '' : 'none',
    '-webkit-user-drag': enable ? '' : 'none',
    '-webkit-tap-highlight-color': enable ? '' : 'transparent',
    'user-select': userSelect,
    '-ms-user-select': userSelect,
    '-webkit-user-select': userSelect,
    '-moz-user-select': userSelect
  });
}
/**
 * Toggles whether an element is visible while preserving its dimensions.
 * @param element Element whose visibility to toggle
 * @param enable Whether the element should be visible.
 * @param importantProperties Properties to be set as `!important`.
 * @docs-private
 */


function toggleVisibility(element, enable, importantProperties) {
  extendStyles(element.style, {
    position: enable ? '' : 'fixed',
    top: enable ? '' : '0',
    opacity: enable ? '' : '0',
    left: enable ? '' : '-999em'
  }, importantProperties);
}
/**
 * Combines a transform string with an optional other transform
 * that exited before the base transform was applied.
 */


function combineTransforms(transform, initialTransform) {
  return initialTransform && initialTransform != 'none' ? transform + ' ' + initialTransform : transform;
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Parses a CSS time value to milliseconds. */


function parseCssTimeUnitsToMs(value) {
  // Some browsers will return it in seconds, whereas others will return milliseconds.
  const multiplier = value.toLowerCase().indexOf('ms') > -1 ? 1 : 1000;
  return parseFloat(value) * multiplier;
}
/** Gets the transform transition duration, including the delay, of an element in milliseconds. */


function getTransformTransitionDurationInMs(element) {
  const computedStyle = getComputedStyle(element);
  const transitionedProperties = parseCssPropertyValue(computedStyle, 'transition-property');
  const property = transitionedProperties.find(prop => prop === 'transform' || prop === 'all'); // If there's no transition for `all` or `transform`, we shouldn't do anything.

  if (!property) {
    return 0;
  } // Get the index of the property that we're interested in and match
  // it up to the same index in `transition-delay` and `transition-duration`.


  const propertyIndex = transitionedProperties.indexOf(property);
  const rawDurations = parseCssPropertyValue(computedStyle, 'transition-duration');
  const rawDelays = parseCssPropertyValue(computedStyle, 'transition-delay');
  return parseCssTimeUnitsToMs(rawDurations[propertyIndex]) + parseCssTimeUnitsToMs(rawDelays[propertyIndex]);
}
/** Parses out multiple values from a computed style into an array. */


function parseCssPropertyValue(computedStyle, name) {
  const value = computedStyle.getPropertyValue(name);
  return value.split(',').map(part => part.trim());
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Gets a mutable version of an element's bounding `ClientRect`. */


function getMutableClientRect(element) {
  const clientRect = element.getBoundingClientRect(); // We need to clone the `clientRect` here, because all the values on it are readonly
  // and we need to be able to update them. Also we can't use a spread here, because
  // the values on a `ClientRect` aren't own properties. See:
  // https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect#Notes

  return {
    top: clientRect.top,
    right: clientRect.right,
    bottom: clientRect.bottom,
    left: clientRect.left,
    width: clientRect.width,
    height: clientRect.height
  };
}
/**
 * Checks whether some coordinates are within a `ClientRect`.
 * @param clientRect ClientRect that is being checked.
 * @param x Coordinates along the X axis.
 * @param y Coordinates along the Y axis.
 */


function isInsideClientRect(clientRect, x, y) {
  const {
    top,
    bottom,
    left,
    right
  } = clientRect;
  return y >= top && y <= bottom && x >= left && x <= right;
}
/**
 * Updates the top/left positions of a `ClientRect`, as well as their bottom/right counterparts.
 * @param clientRect `ClientRect` that should be updated.
 * @param top Amount to add to the `top` position.
 * @param left Amount to add to the `left` position.
 */


function adjustClientRect(clientRect, top, left) {
  clientRect.top += top;
  clientRect.bottom = clientRect.top + clientRect.height;
  clientRect.left += left;
  clientRect.right = clientRect.left + clientRect.width;
}
/**
 * Checks whether the pointer coordinates are close to a ClientRect.
 * @param rect ClientRect to check against.
 * @param threshold Threshold around the ClientRect.
 * @param pointerX Coordinates along the X axis.
 * @param pointerY Coordinates along the Y axis.
 */


function isPointerNearClientRect(rect, threshold, pointerX, pointerY) {
  const {
    top,
    right,
    bottom,
    left,
    width,
    height
  } = rect;
  const xThreshold = width * threshold;
  const yThreshold = height * threshold;
  return pointerY > top - yThreshold && pointerY < bottom + yThreshold && pointerX > left - xThreshold && pointerX < right + xThreshold;
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Keeps track of the scroll position and dimensions of the parents of an element. */


class ParentPositionTracker {
  constructor(_document, _viewportRuler) {
    this._document = _document;
    this._viewportRuler = _viewportRuler;
    /** Cached positions of the scrollable parent elements. */

    this.positions = new Map();
  }
  /** Clears the cached positions. */


  clear() {
    this.positions.clear();
  }
  /** Caches the positions. Should be called at the beginning of a drag sequence. */


  cache(elements) {
    this.clear();
    this.positions.set(this._document, {
      scrollPosition: this._viewportRuler.getViewportScrollPosition()
    });
    elements.forEach(element => {
      this.positions.set(element, {
        scrollPosition: {
          top: element.scrollTop,
          left: element.scrollLeft
        },
        clientRect: getMutableClientRect(element)
      });
    });
  }
  /** Handles scrolling while a drag is taking place. */


  handleScroll(event) {
    const target = (0,platform/* _getEventTarget */.sA)(event);

    const cachedPosition = this.positions.get(target);

    if (!cachedPosition) {
      return null;
    } // Used when figuring out whether an element is inside the scroll parent. If the scrolled
    // parent is the `document`, we use the `documentElement`, because IE doesn't support
    // `contains` on the `document`.


    const scrolledParentNode = target === this._document ? target.documentElement : target;
    const scrollPosition = cachedPosition.scrollPosition;
    let newTop;
    let newLeft;

    if (target === this._document) {
      const viewportScrollPosition = this._viewportRuler.getViewportScrollPosition();

      newTop = viewportScrollPosition.top;
      newLeft = viewportScrollPosition.left;
    } else {
      newTop = target.scrollTop;
      newLeft = target.scrollLeft;
    }

    const topDifference = scrollPosition.top - newTop;
    const leftDifference = scrollPosition.left - newLeft; // Go through and update the cached positions of the scroll
    // parents that are inside the element that was scrolled.

    this.positions.forEach((position, node) => {
      if (position.clientRect && target !== node && scrolledParentNode.contains(node)) {
        adjustClientRect(position.clientRect, topDifference, leftDifference);
      }
    });
    scrollPosition.top = newTop;
    scrollPosition.left = newLeft;
    return {
      top: topDifference,
      left: leftDifference
    };
  }

}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Creates a deep clone of an element. */


function deepCloneNode(node) {
  const clone = node.cloneNode(true);
  const descendantsWithId = clone.querySelectorAll('[id]');
  const nodeName = node.nodeName.toLowerCase(); // Remove the `id` to avoid having multiple elements with the same id on the page.

  clone.removeAttribute('id');

  for (let i = 0; i < descendantsWithId.length; i++) {
    descendantsWithId[i].removeAttribute('id');
  }

  if (nodeName === 'canvas') {
    transferCanvasData(node, clone);
  } else if (nodeName === 'input' || nodeName === 'select' || nodeName === 'textarea') {
    transferInputData(node, clone);
  }

  transferData('canvas', node, clone, transferCanvasData);
  transferData('input, textarea, select', node, clone, transferInputData);
  return clone;
}
/** Matches elements between an element and its clone and allows for their data to be cloned. */


function transferData(selector, node, clone, callback) {
  const descendantElements = node.querySelectorAll(selector);

  if (descendantElements.length) {
    const cloneElements = clone.querySelectorAll(selector);

    for (let i = 0; i < descendantElements.length; i++) {
      callback(descendantElements[i], cloneElements[i]);
    }
  }
} // Counter for unique cloned radio button names.


let cloneUniqueId = 0;
/** Transfers the data of one input element to another. */

function transferInputData(source, clone) {
  // Browsers throw an error when assigning the value of a file input programmatically.
  if (clone.type !== 'file') {
    clone.value = source.value;
  } // Radio button `name` attributes must be unique for radio button groups
  // otherwise original radio buttons can lose their checked state
  // once the clone is inserted in the DOM.


  if (clone.type === 'radio' && clone.name) {
    clone.name = `mat-clone-${clone.name}-${cloneUniqueId++}`;
  }
}
/** Transfers the data of one canvas element to another. */


function transferCanvasData(source, clone) {
  const context = clone.getContext('2d');

  if (context) {
    // In some cases `drawImage` can throw (e.g. if the canvas size is 0x0).
    // We can't do much about it so just ignore the error.
    try {
      context.drawImage(source, 0, 0);
    } catch (_a) {}
  }
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Options that can be used to bind a passive event listener. */


const passiveEventListenerOptions = /*#__PURE__*/(0,platform/* normalizePassiveListenerOptions */.i$)({
  passive: true
});
/** Options that can be used to bind an active event listener. */

const activeEventListenerOptions = /*#__PURE__*/(0,platform/* normalizePassiveListenerOptions */.i$)({
  passive: false
});
/**
 * Time in milliseconds for which to ignore mouse events, after
 * receiving a touch event. Used to avoid doing double work for
 * touch devices where the browser fires fake mouse events, in
 * addition to touch events.
 */

const MOUSE_EVENT_IGNORE_TIME = 800;
/** Inline styles to be set as `!important` while dragging. */

const dragImportantProperties = /*#__PURE__*/new Set([// Needs to be important, because some `mat-table` sets `position: sticky !important`. See #22781.
'position']);
/**
 * Reference to a draggable item. Used to manipulate or dispose of the item.
 */

class DragRef {
  constructor(element, _config, _document, _ngZone, _viewportRuler, _dragDropRegistry) {
    this._config = _config;
    this._document = _document;
    this._ngZone = _ngZone;
    this._viewportRuler = _viewportRuler;
    this._dragDropRegistry = _dragDropRegistry;
    /**
     * CSS `transform` applied to the element when it isn't being dragged. We need a
     * passive transform in order for the dragged element to retain its new position
     * after the user has stopped dragging and because we need to know the relative
     * position in case they start dragging again. This corresponds to `element.style.transform`.
     */

    this._passiveTransform = {
      x: 0,
      y: 0
    };
    /** CSS `transform` that is applied to the element while it's being dragged. */

    this._activeTransform = {
      x: 0,
      y: 0
    };
    /**
     * Whether the dragging sequence has been started. Doesn't
     * necessarily mean that the element has been moved.
     */

    this._hasStartedDragging = false;
    /** Emits when the item is being moved. */

    this._moveEvents = new internal_Subject/* Subject */.xQ();
    /** Subscription to pointer movement events. */

    this._pointerMoveSubscription = internal_Subscription/* Subscription.EMPTY */.w.EMPTY;
    /** Subscription to the event that is dispatched when the user lifts their pointer. */

    this._pointerUpSubscription = internal_Subscription/* Subscription.EMPTY */.w.EMPTY;
    /** Subscription to the viewport being scrolled. */

    this._scrollSubscription = internal_Subscription/* Subscription.EMPTY */.w.EMPTY;
    /** Subscription to the viewport being resized. */

    this._resizeSubscription = internal_Subscription/* Subscription.EMPTY */.w.EMPTY;
    /** Cached reference to the boundary element. */

    this._boundaryElement = null;
    /** Whether the native dragging interactions have been enabled on the root element. */

    this._nativeInteractionsEnabled = true;
    /** Elements that can be used to drag the draggable item. */

    this._handles = [];
    /** Registered handles that are currently disabled. */

    this._disabledHandles = new Set();
    /** Layout direction of the item. */

    this._direction = 'ltr';
    /**
     * Amount of milliseconds to wait after the user has put their
     * pointer down before starting to drag the element.
     */

    this.dragStartDelay = 0;
    this._disabled = false;
    /** Emits as the drag sequence is being prepared. */

    this.beforeStarted = new internal_Subject/* Subject */.xQ();
    /** Emits when the user starts dragging the item. */

    this.started = new internal_Subject/* Subject */.xQ();
    /** Emits when the user has released a drag item, before any animations have started. */

    this.released = new internal_Subject/* Subject */.xQ();
    /** Emits when the user stops dragging an item in the container. */

    this.ended = new internal_Subject/* Subject */.xQ();
    /** Emits when the user has moved the item into a new container. */

    this.entered = new internal_Subject/* Subject */.xQ();
    /** Emits when the user removes the item its container by dragging it into another container. */

    this.exited = new internal_Subject/* Subject */.xQ();
    /** Emits when the user drops the item inside a container. */

    this.dropped = new internal_Subject/* Subject */.xQ();
    /**
     * Emits as the user is dragging the item. Use with caution,
     * because this event will fire for every pixel that the user has dragged.
     */

    this.moved = this._moveEvents;
    /** Handler for the `mousedown`/`touchstart` events. */

    this._pointerDown = event => {
      this.beforeStarted.next(); // Delegate the event based on whether it started from a handle or the element itself.

      if (this._handles.length) {
        const targetHandle = this._handles.find(handle => {
          const target = (0,platform/* _getEventTarget */.sA)(event);

          return !!target && (target === handle || handle.contains(target));
        });

        if (targetHandle && !this._disabledHandles.has(targetHandle) && !this.disabled) {
          this._initializeDragSequence(targetHandle, event);
        }
      } else if (!this.disabled) {
        this._initializeDragSequence(this._rootElement, event);
      }
    };
    /** Handler that is invoked when the user moves their pointer after they've initiated a drag. */


    this._pointerMove = event => {
      const pointerPosition = this._getPointerPositionOnPage(event);

      if (!this._hasStartedDragging) {
        const distanceX = Math.abs(pointerPosition.x - this._pickupPositionOnPage.x);
        const distanceY = Math.abs(pointerPosition.y - this._pickupPositionOnPage.y);
        const isOverThreshold = distanceX + distanceY >= this._config.dragStartThreshold; // Only start dragging after the user has moved more than the minimum distance in either
        // direction. Note that this is preferrable over doing something like `skip(minimumDistance)`
        // in the `pointerMove` subscription, because we're not guaranteed to have one move event
        // per pixel of movement (e.g. if the user moves their pointer quickly).

        if (isOverThreshold) {
          const isDelayElapsed = Date.now() >= this._dragStartTime + this._getDragStartDelay(event);

          const container = this._dropContainer;

          if (!isDelayElapsed) {
            this._endDragSequence(event);

            return;
          } // Prevent other drag sequences from starting while something in the container is still
          // being dragged. This can happen while we're waiting for the drop animation to finish
          // and can cause errors, because some elements might still be moving around.


          if (!container || !container.isDragging() && !container.isReceiving()) {
            // Prevent the default action as soon as the dragging sequence is considered as
            // "started" since waiting for the next event can allow the device to begin scrolling.
            event.preventDefault();
            this._hasStartedDragging = true;

            this._ngZone.run(() => this._startDragSequence(event));
          }
        }

        return;
      } // We only need the preview dimensions if we have a boundary element.


      if (this._boundaryElement) {
        // Cache the preview element rect if we haven't cached it already or if
        // we cached it too early before the element dimensions were computed.
        if (!this._previewRect || !this._previewRect.width && !this._previewRect.height) {
          this._previewRect = (this._preview || this._rootElement).getBoundingClientRect();
        }
      } // We prevent the default action down here so that we know that dragging has started. This is
      // important for touch devices where doing this too early can unnecessarily block scrolling,
      // if there's a dragging delay.


      event.preventDefault();

      const constrainedPointerPosition = this._getConstrainedPointerPosition(pointerPosition);

      this._hasMoved = true;
      this._lastKnownPointerPosition = pointerPosition;

      this._updatePointerDirectionDelta(constrainedPointerPosition);

      if (this._dropContainer) {
        this._updateActiveDropContainer(constrainedPointerPosition, pointerPosition);
      } else {
        const activeTransform = this._activeTransform;
        activeTransform.x = constrainedPointerPosition.x - this._pickupPositionOnPage.x + this._passiveTransform.x;
        activeTransform.y = constrainedPointerPosition.y - this._pickupPositionOnPage.y + this._passiveTransform.y;

        this._applyRootElementTransform(activeTransform.x, activeTransform.y); // Apply transform as attribute if dragging and svg element to work for IE


        if (typeof SVGElement !== 'undefined' && this._rootElement instanceof SVGElement) {
          const appliedTransform = `translate(${activeTransform.x} ${activeTransform.y})`;

          this._rootElement.setAttribute('transform', appliedTransform);
        }
      } // Since this event gets fired for every pixel while dragging, we only
      // want to fire it if the consumer opted into it. Also we have to
      // re-enter the zone because we run all of the events on the outside.


      if (this._moveEvents.observers.length) {
        this._ngZone.run(() => {
          this._moveEvents.next({
            source: this,
            pointerPosition: constrainedPointerPosition,
            event,
            distance: this._getDragDistance(constrainedPointerPosition),
            delta: this._pointerDirectionDelta
          });
        });
      }
    };
    /** Handler that is invoked when the user lifts their pointer up, after initiating a drag. */


    this._pointerUp = event => {
      this._endDragSequence(event);
    };

    this.withRootElement(element).withParent(_config.parentDragRef || null);
    this._parentPositions = new ParentPositionTracker(_document, _viewportRuler);

    _dragDropRegistry.registerDragItem(this);
  }
  /** Whether starting to drag this element is disabled. */


  get disabled() {
    return this._disabled || !!(this._dropContainer && this._dropContainer.disabled);
  }

  set disabled(value) {
    const newValue = (0,coercion/* coerceBooleanProperty */.Ig)(value);

    if (newValue !== this._disabled) {
      this._disabled = newValue;

      this._toggleNativeDragInteractions();

      this._handles.forEach(handle => toggleNativeDragInteractions(handle, newValue));
    }
  }
  /**
   * Returns the element that is being used as a placeholder
   * while the current element is being dragged.
   */


  getPlaceholderElement() {
    return this._placeholder;
  }
  /** Returns the root draggable element. */


  getRootElement() {
    return this._rootElement;
  }
  /**
   * Gets the currently-visible element that represents the drag item.
   * While dragging this is the placeholder, otherwise it's the root element.
   */


  getVisibleElement() {
    return this.isDragging() ? this.getPlaceholderElement() : this.getRootElement();
  }
  /** Registers the handles that can be used to drag the element. */


  withHandles(handles) {
    this._handles = handles.map(handle => (0,coercion/* coerceElement */.fI)(handle));

    this._handles.forEach(handle => toggleNativeDragInteractions(handle, this.disabled));

    this._toggleNativeDragInteractions(); // Delete any lingering disabled handles that may have been destroyed. Note that we re-create
    // the set, rather than iterate over it and filter out the destroyed handles, because while
    // the ES spec allows for sets to be modified while they're being iterated over, some polyfills
    // use an array internally which may throw an error.


    const disabledHandles = new Set();

    this._disabledHandles.forEach(handle => {
      if (this._handles.indexOf(handle) > -1) {
        disabledHandles.add(handle);
      }
    });

    this._disabledHandles = disabledHandles;
    return this;
  }
  /**
   * Registers the template that should be used for the drag preview.
   * @param template Template that from which to stamp out the preview.
   */


  withPreviewTemplate(template) {
    this._previewTemplate = template;
    return this;
  }
  /**
   * Registers the template that should be used for the drag placeholder.
   * @param template Template that from which to stamp out the placeholder.
   */


  withPlaceholderTemplate(template) {
    this._placeholderTemplate = template;
    return this;
  }
  /**
   * Sets an alternate drag root element. The root element is the element that will be moved as
   * the user is dragging. Passing an alternate root element is useful when trying to enable
   * dragging on an element that you might not have access to.
   */


  withRootElement(rootElement) {
    const element = (0,coercion/* coerceElement */.fI)(rootElement);

    if (element !== this._rootElement) {
      if (this._rootElement) {
        this._removeRootElementListeners(this._rootElement);
      }

      this._ngZone.runOutsideAngular(() => {
        element.addEventListener('mousedown', this._pointerDown, activeEventListenerOptions);
        element.addEventListener('touchstart', this._pointerDown, passiveEventListenerOptions);
      });

      this._initialTransform = undefined;
      this._rootElement = element;
    }

    if (typeof SVGElement !== 'undefined' && this._rootElement instanceof SVGElement) {
      this._ownerSVGElement = this._rootElement.ownerSVGElement;
    }

    return this;
  }
  /**
   * Element to which the draggable's position will be constrained.
   */


  withBoundaryElement(boundaryElement) {
    this._boundaryElement = boundaryElement ? (0,coercion/* coerceElement */.fI)(boundaryElement) : null;

    this._resizeSubscription.unsubscribe();

    if (boundaryElement) {
      this._resizeSubscription = this._viewportRuler.change(10).subscribe(() => this._containInsideBoundaryOnResize());
    }

    return this;
  }
  /** Sets the parent ref that the ref is nested in.  */


  withParent(parent) {
    this._parentDragRef = parent;
    return this;
  }
  /** Removes the dragging functionality from the DOM element. */


  dispose() {
    this._removeRootElementListeners(this._rootElement); // Do this check before removing from the registry since it'll
    // stop being considered as dragged once it is removed.


    if (this.isDragging()) {
      // Since we move out the element to the end of the body while it's being
      // dragged, we have to make sure that it's removed if it gets destroyed.
      removeNode(this._rootElement);
    }

    removeNode(this._anchor);

    this._destroyPreview();

    this._destroyPlaceholder();

    this._dragDropRegistry.removeDragItem(this);

    this._removeSubscriptions();

    this.beforeStarted.complete();
    this.started.complete();
    this.released.complete();
    this.ended.complete();
    this.entered.complete();
    this.exited.complete();
    this.dropped.complete();

    this._moveEvents.complete();

    this._handles = [];

    this._disabledHandles.clear();

    this._dropContainer = undefined;

    this._resizeSubscription.unsubscribe();

    this._parentPositions.clear();

    this._boundaryElement = this._rootElement = this._ownerSVGElement = this._placeholderTemplate = this._previewTemplate = this._anchor = this._parentDragRef = null;
  }
  /** Checks whether the element is currently being dragged. */


  isDragging() {
    return this._hasStartedDragging && this._dragDropRegistry.isDragging(this);
  }
  /** Resets a standalone drag item to its initial position. */


  reset() {
    this._rootElement.style.transform = this._initialTransform || '';
    this._activeTransform = {
      x: 0,
      y: 0
    };
    this._passiveTransform = {
      x: 0,
      y: 0
    };
  }
  /**
   * Sets a handle as disabled. While a handle is disabled, it'll capture and interrupt dragging.
   * @param handle Handle element that should be disabled.
   */


  disableHandle(handle) {
    if (!this._disabledHandles.has(handle) && this._handles.indexOf(handle) > -1) {
      this._disabledHandles.add(handle);

      toggleNativeDragInteractions(handle, true);
    }
  }
  /**
   * Enables a handle, if it has been disabled.
   * @param handle Handle element to be enabled.
   */


  enableHandle(handle) {
    if (this._disabledHandles.has(handle)) {
      this._disabledHandles.delete(handle);

      toggleNativeDragInteractions(handle, this.disabled);
    }
  }
  /** Sets the layout direction of the draggable item. */


  withDirection(direction) {
    this._direction = direction;
    return this;
  }
  /** Sets the container that the item is part of. */


  _withDropContainer(container) {
    this._dropContainer = container;
  }
  /**
   * Gets the current position in pixels the draggable outside of a drop container.
   */


  getFreeDragPosition() {
    const position = this.isDragging() ? this._activeTransform : this._passiveTransform;
    return {
      x: position.x,
      y: position.y
    };
  }
  /**
   * Sets the current position in pixels the draggable outside of a drop container.
   * @param value New position to be set.
   */


  setFreeDragPosition(value) {
    this._activeTransform = {
      x: 0,
      y: 0
    };
    this._passiveTransform.x = value.x;
    this._passiveTransform.y = value.y;

    if (!this._dropContainer) {
      this._applyRootElementTransform(value.x, value.y);
    }

    return this;
  }
  /**
   * Sets the container into which to insert the preview element.
   * @param value Container into which to insert the preview.
   */


  withPreviewContainer(value) {
    this._previewContainer = value;
    return this;
  }
  /** Updates the item's sort order based on the last-known pointer position. */


  _sortFromLastPointerPosition() {
    const position = this._lastKnownPointerPosition;

    if (position && this._dropContainer) {
      this._updateActiveDropContainer(this._getConstrainedPointerPosition(position), position);
    }
  }
  /** Unsubscribes from the global subscriptions. */


  _removeSubscriptions() {
    this._pointerMoveSubscription.unsubscribe();

    this._pointerUpSubscription.unsubscribe();

    this._scrollSubscription.unsubscribe();
  }
  /** Destroys the preview element and its ViewRef. */


  _destroyPreview() {
    if (this._preview) {
      removeNode(this._preview);
    }

    if (this._previewRef) {
      this._previewRef.destroy();
    }

    this._preview = this._previewRef = null;
  }
  /** Destroys the placeholder element and its ViewRef. */


  _destroyPlaceholder() {
    if (this._placeholder) {
      removeNode(this._placeholder);
    }

    if (this._placeholderRef) {
      this._placeholderRef.destroy();
    }

    this._placeholder = this._placeholderRef = null;
  }
  /**
   * Clears subscriptions and stops the dragging sequence.
   * @param event Browser event object that ended the sequence.
   */


  _endDragSequence(event) {
    // Note that here we use `isDragging` from the service, rather than from `this`.
    // The difference is that the one from the service reflects whether a dragging sequence
    // has been initiated, whereas the one on `this` includes whether the user has passed
    // the minimum dragging threshold.
    if (!this._dragDropRegistry.isDragging(this)) {
      return;
    }

    this._removeSubscriptions();

    this._dragDropRegistry.stopDragging(this);

    this._toggleNativeDragInteractions();

    if (this._handles) {
      this._rootElement.style.webkitTapHighlightColor = this._rootElementTapHighlight;
    }

    if (!this._hasStartedDragging) {
      return;
    }

    this.released.next({
      source: this
    });

    if (this._dropContainer) {
      // Stop scrolling immediately, instead of waiting for the animation to finish.
      this._dropContainer._stopScrolling();

      this._animatePreviewToPlaceholder().then(() => {
        this._cleanupDragArtifacts(event);

        this._cleanupCachedDimensions();

        this._dragDropRegistry.stopDragging(this);
      });
    } else {
      // Convert the active transform into a passive one. This means that next time
      // the user starts dragging the item, its position will be calculated relatively
      // to the new passive transform.
      this._passiveTransform.x = this._activeTransform.x;

      const pointerPosition = this._getPointerPositionOnPage(event);

      this._passiveTransform.y = this._activeTransform.y;

      this._ngZone.run(() => {
        this.ended.next({
          source: this,
          distance: this._getDragDistance(pointerPosition),
          dropPoint: pointerPosition
        });
      });

      this._cleanupCachedDimensions();

      this._dragDropRegistry.stopDragging(this);
    }
  }
  /** Starts the dragging sequence. */


  _startDragSequence(event) {
    if (isTouchEvent(event)) {
      this._lastTouchEventTime = Date.now();
    }

    this._toggleNativeDragInteractions();

    const dropContainer = this._dropContainer;

    if (dropContainer) {
      const element = this._rootElement;
      const parent = element.parentNode;

      const placeholder = this._placeholder = this._createPlaceholderElement();

      const anchor = this._anchor = this._anchor || this._document.createComment(''); // Needs to happen before the root element is moved.


      const shadowRoot = this._getShadowRoot(); // Insert an anchor node so that we can restore the element's position in the DOM.


      parent.insertBefore(anchor, element); // There's no risk of transforms stacking when inside a drop container so
      // we can keep the initial transform up to date any time dragging starts.

      this._initialTransform = element.style.transform || ''; // Create the preview after the initial transform has
      // been cached, because it can be affected by the transform.

      this._preview = this._createPreviewElement(); // We move the element out at the end of the body and we make it hidden, because keeping it in
      // place will throw off the consumer's `:last-child` selectors. We can't remove the element
      // from the DOM completely, because iOS will stop firing all subsequent events in the chain.

      toggleVisibility(element, false, dragImportantProperties);

      this._document.body.appendChild(parent.replaceChild(placeholder, element));

      this._getPreviewInsertionPoint(parent, shadowRoot).appendChild(this._preview);

      this.started.next({
        source: this
      }); // Emit before notifying the container.

      dropContainer.start();
      this._initialContainer = dropContainer;
      this._initialIndex = dropContainer.getItemIndex(this);
    } else {
      this.started.next({
        source: this
      });
      this._initialContainer = this._initialIndex = undefined;
    } // Important to run after we've called `start` on the parent container
    // so that it has had time to resolve its scrollable parents.


    this._parentPositions.cache(dropContainer ? dropContainer.getScrollableParents() : []);
  }
  /**
   * Sets up the different variables and subscriptions
   * that will be necessary for the dragging sequence.
   * @param referenceElement Element that started the drag sequence.
   * @param event Browser event object that started the sequence.
   */


  _initializeDragSequence(referenceElement, event) {
    // Stop propagation if the item is inside another
    // draggable so we don't start multiple drag sequences.
    if (this._parentDragRef) {
      event.stopPropagation();
    }

    const isDragging = this.isDragging();
    const isTouchSequence = isTouchEvent(event);
    const isAuxiliaryMouseButton = !isTouchSequence && event.button !== 0;
    const rootElement = this._rootElement;

    const target = (0,platform/* _getEventTarget */.sA)(event);

    const isSyntheticEvent = !isTouchSequence && this._lastTouchEventTime && this._lastTouchEventTime + MOUSE_EVENT_IGNORE_TIME > Date.now();
    const isFakeEvent = isTouchSequence ? isFakeTouchstartFromScreenReader(event) : isFakeMousedownFromScreenReader(event); // If the event started from an element with the native HTML drag&drop, it'll interfere
    // with our own dragging (e.g. `img` tags do it by default). Prevent the default action
    // to stop it from happening. Note that preventing on `dragstart` also seems to work, but
    // it's flaky and it fails if the user drags it away quickly. Also note that we only want
    // to do this for `mousedown` since doing the same for `touchstart` will stop any `click`
    // events from firing on touch devices.

    if (target && target.draggable && event.type === 'mousedown') {
      event.preventDefault();
    } // Abort if the user is already dragging or is using a mouse button other than the primary one.


    if (isDragging || isAuxiliaryMouseButton || isSyntheticEvent || isFakeEvent) {
      return;
    } // If we've got handles, we need to disable the tap highlight on the entire root element,
    // otherwise iOS will still add it, even though all the drag interactions on the handle
    // are disabled.


    if (this._handles.length) {
      this._rootElementTapHighlight = rootElement.style.webkitTapHighlightColor || '';
      rootElement.style.webkitTapHighlightColor = 'transparent';
    }

    this._hasStartedDragging = this._hasMoved = false; // Avoid multiple subscriptions and memory leaks when multi touch
    // (isDragging check above isn't enough because of possible temporal and/or dimensional delays)

    this._removeSubscriptions();

    this._pointerMoveSubscription = this._dragDropRegistry.pointerMove.subscribe(this._pointerMove);
    this._pointerUpSubscription = this._dragDropRegistry.pointerUp.subscribe(this._pointerUp);
    this._scrollSubscription = this._dragDropRegistry.scrolled(this._getShadowRoot()).subscribe(scrollEvent => this._updateOnScroll(scrollEvent));

    if (this._boundaryElement) {
      this._boundaryRect = getMutableClientRect(this._boundaryElement);
    } // If we have a custom preview we can't know ahead of time how large it'll be so we position
    // it next to the cursor. The exception is when the consumer has opted into making the preview
    // the same size as the root element, in which case we do know the size.


    const previewTemplate = this._previewTemplate;
    this._pickupPositionInElement = previewTemplate && previewTemplate.template && !previewTemplate.matchSize ? {
      x: 0,
      y: 0
    } : this._getPointerPositionInElement(referenceElement, event);

    const pointerPosition = this._pickupPositionOnPage = this._lastKnownPointerPosition = this._getPointerPositionOnPage(event);

    this._pointerDirectionDelta = {
      x: 0,
      y: 0
    };
    this._pointerPositionAtLastDirectionChange = {
      x: pointerPosition.x,
      y: pointerPosition.y
    };
    this._dragStartTime = Date.now();

    this._dragDropRegistry.startDragging(this, event);
  }
  /** Cleans up the DOM artifacts that were added to facilitate the element being dragged. */


  _cleanupDragArtifacts(event) {
    // Restore the element's visibility and insert it at its old position in the DOM.
    // It's important that we maintain the position, because moving the element around in the DOM
    // can throw off `NgFor` which does smart diffing and re-creates elements only when necessary,
    // while moving the existing elements in all other cases.
    toggleVisibility(this._rootElement, true, dragImportantProperties);

    this._anchor.parentNode.replaceChild(this._rootElement, this._anchor);

    this._destroyPreview();

    this._destroyPlaceholder();

    this._boundaryRect = this._previewRect = this._initialTransform = undefined; // Re-enter the NgZone since we bound `document` events on the outside.

    this._ngZone.run(() => {
      const container = this._dropContainer;
      const currentIndex = container.getItemIndex(this);

      const pointerPosition = this._getPointerPositionOnPage(event);

      const distance = this._getDragDistance(pointerPosition);

      const isPointerOverContainer = container._isOverContainer(pointerPosition.x, pointerPosition.y);

      this.ended.next({
        source: this,
        distance,
        dropPoint: pointerPosition
      });
      this.dropped.next({
        item: this,
        currentIndex,
        previousIndex: this._initialIndex,
        container: container,
        previousContainer: this._initialContainer,
        isPointerOverContainer,
        distance,
        dropPoint: pointerPosition
      });
      container.drop(this, currentIndex, this._initialIndex, this._initialContainer, isPointerOverContainer, distance, pointerPosition);
      this._dropContainer = this._initialContainer;
    });
  }
  /**
   * Updates the item's position in its drop container, or moves it
   * into a new one, depending on its current drag position.
   */


  _updateActiveDropContainer({
    x,
    y
  }, {
    x: rawX,
    y: rawY
  }) {
    // Drop container that draggable has been moved into.
    let newContainer = this._initialContainer._getSiblingContainerFromPosition(this, x, y); // If we couldn't find a new container to move the item into, and the item has left its
    // initial container, check whether the it's over the initial container. This handles the
    // case where two containers are connected one way and the user tries to undo dragging an
    // item into a new container.


    if (!newContainer && this._dropContainer !== this._initialContainer && this._initialContainer._isOverContainer(x, y)) {
      newContainer = this._initialContainer;
    }

    if (newContainer && newContainer !== this._dropContainer) {
      this._ngZone.run(() => {
        // Notify the old container that the item has left.
        this.exited.next({
          item: this,
          container: this._dropContainer
        });

        this._dropContainer.exit(this); // Notify the new container that the item has entered.


        this._dropContainer = newContainer;

        this._dropContainer.enter(this, x, y, newContainer === this._initialContainer && // If we're re-entering the initial container and sorting is disabled,
        // put item the into its starting index to begin with.
        newContainer.sortingDisabled ? this._initialIndex : undefined);

        this.entered.next({
          item: this,
          container: newContainer,
          currentIndex: newContainer.getItemIndex(this)
        });
      });
    } // Dragging may have been interrupted as a result of the events above.


    if (this.isDragging()) {
      this._dropContainer._startScrollingIfNecessary(rawX, rawY);

      this._dropContainer._sortItem(this, x, y, this._pointerDirectionDelta);

      this._applyPreviewTransform(x - this._pickupPositionInElement.x, y - this._pickupPositionInElement.y);
    }
  }
  /**
   * Creates the element that will be rendered next to the user's pointer
   * and will be used as a preview of the element that is being dragged.
   */


  _createPreviewElement() {
    const previewConfig = this._previewTemplate;
    const previewClass = this.previewClass;
    const previewTemplate = previewConfig ? previewConfig.template : null;
    let preview;

    if (previewTemplate && previewConfig) {
      // Measure the element before we've inserted the preview
      // since the insertion could throw off the measurement.
      const rootRect = previewConfig.matchSize ? this._rootElement.getBoundingClientRect() : null;
      const viewRef = previewConfig.viewContainer.createEmbeddedView(previewTemplate, previewConfig.context);
      viewRef.detectChanges();
      preview = getRootNode(viewRef, this._document);
      this._previewRef = viewRef;

      if (previewConfig.matchSize) {
        matchElementSize(preview, rootRect);
      } else {
        preview.style.transform = getTransform(this._pickupPositionOnPage.x, this._pickupPositionOnPage.y);
      }
    } else {
      const element = this._rootElement;
      preview = deepCloneNode(element);
      matchElementSize(preview, element.getBoundingClientRect());

      if (this._initialTransform) {
        preview.style.transform = this._initialTransform;
      }
    }

    extendStyles(preview.style, {
      // It's important that we disable the pointer events on the preview, because
      // it can throw off the `document.elementFromPoint` calls in the `CdkDropList`.
      'pointer-events': 'none',
      // We have to reset the margin, because it can throw off positioning relative to the viewport.
      'margin': '0',
      'position': 'fixed',
      'top': '0',
      'left': '0',
      'z-index': `${this._config.zIndex || 1000}`
    }, dragImportantProperties);
    toggleNativeDragInteractions(preview, false);
    preview.classList.add('cdk-drag-preview');
    preview.setAttribute('dir', this._direction);

    if (previewClass) {
      if (Array.isArray(previewClass)) {
        previewClass.forEach(className => preview.classList.add(className));
      } else {
        preview.classList.add(previewClass);
      }
    }

    return preview;
  }
  /**
   * Animates the preview element from its current position to the location of the drop placeholder.
   * @returns Promise that resolves when the animation completes.
   */


  _animatePreviewToPlaceholder() {
    // If the user hasn't moved yet, the transitionend event won't fire.
    if (!this._hasMoved) {
      return Promise.resolve();
    }

    const placeholderRect = this._placeholder.getBoundingClientRect(); // Apply the class that adds a transition to the preview.


    this._preview.classList.add('cdk-drag-animating'); // Move the preview to the placeholder position.


    this._applyPreviewTransform(placeholderRect.left, placeholderRect.top); // If the element doesn't have a `transition`, the `transitionend` event won't fire. Since
    // we need to trigger a style recalculation in order for the `cdk-drag-animating` class to
    // apply its style, we take advantage of the available info to figure out whether we need to
    // bind the event in the first place.


    const duration = getTransformTransitionDurationInMs(this._preview);

    if (duration === 0) {
      return Promise.resolve();
    }

    return this._ngZone.runOutsideAngular(() => {
      return new Promise(resolve => {
        const handler = event => {
          var _a;

          if (!event || (0,platform/* _getEventTarget */.sA)(event) === this._preview && event.propertyName === 'transform') {
            (_a = this._preview) === null || _a === void 0 ? void 0 : _a.removeEventListener('transitionend', handler);
            resolve();
            clearTimeout(timeout);
          }
        }; // If a transition is short enough, the browser might not fire the `transitionend` event.
        // Since we know how long it's supposed to take, add a timeout with a 50% buffer that'll
        // fire if the transition hasn't completed when it was supposed to.


        const timeout = setTimeout(handler, duration * 1.5);

        this._preview.addEventListener('transitionend', handler);
      });
    });
  }
  /** Creates an element that will be shown instead of the current element while dragging. */


  _createPlaceholderElement() {
    const placeholderConfig = this._placeholderTemplate;
    const placeholderTemplate = placeholderConfig ? placeholderConfig.template : null;
    let placeholder;

    if (placeholderTemplate) {
      this._placeholderRef = placeholderConfig.viewContainer.createEmbeddedView(placeholderTemplate, placeholderConfig.context);

      this._placeholderRef.detectChanges();

      placeholder = getRootNode(this._placeholderRef, this._document);
    } else {
      placeholder = deepCloneNode(this._rootElement);
    }

    placeholder.classList.add('cdk-drag-placeholder');
    return placeholder;
  }
  /**
   * Figures out the coordinates at which an element was picked up.
   * @param referenceElement Element that initiated the dragging.
   * @param event Event that initiated the dragging.
   */


  _getPointerPositionInElement(referenceElement, event) {
    const elementRect = this._rootElement.getBoundingClientRect();

    const handleElement = referenceElement === this._rootElement ? null : referenceElement;
    const referenceRect = handleElement ? handleElement.getBoundingClientRect() : elementRect;
    const point = isTouchEvent(event) ? event.targetTouches[0] : event;

    const scrollPosition = this._getViewportScrollPosition();

    const x = point.pageX - referenceRect.left - scrollPosition.left;
    const y = point.pageY - referenceRect.top - scrollPosition.top;
    return {
      x: referenceRect.left - elementRect.left + x,
      y: referenceRect.top - elementRect.top + y
    };
  }
  /** Determines the point of the page that was touched by the user. */


  _getPointerPositionOnPage(event) {
    const scrollPosition = this._getViewportScrollPosition();

    const point = isTouchEvent(event) ? // `touches` will be empty for start/end events so we have to fall back to `changedTouches`.
    // Also note that on real devices we're guaranteed for either `touches` or `changedTouches`
    // to have a value, but Firefox in device emulation mode has a bug where both can be empty
    // for `touchstart` and `touchend` so we fall back to a dummy object in order to avoid
    // throwing an error. The value returned here will be incorrect, but since this only
    // breaks inside a developer tool and the value is only used for secondary information,
    // we can get away with it. See https://bugzilla.mozilla.org/show_bug.cgi?id=1615824.
    event.touches[0] || event.changedTouches[0] || {
      pageX: 0,
      pageY: 0
    } : event;
    const x = point.pageX - scrollPosition.left;
    const y = point.pageY - scrollPosition.top; // if dragging SVG element, try to convert from the screen coordinate system to the SVG
    // coordinate system

    if (this._ownerSVGElement) {
      const svgMatrix = this._ownerSVGElement.getScreenCTM();

      if (svgMatrix) {
        const svgPoint = this._ownerSVGElement.createSVGPoint();

        svgPoint.x = x;
        svgPoint.y = y;
        return svgPoint.matrixTransform(svgMatrix.inverse());
      }
    }

    return {
      x,
      y
    };
  }
  /** Gets the pointer position on the page, accounting for any position constraints. */


  _getConstrainedPointerPosition(point) {
    const dropContainerLock = this._dropContainer ? this._dropContainer.lockAxis : null;
    let {
      x,
      y
    } = this.constrainPosition ? this.constrainPosition(point, this) : point;

    if (this.lockAxis === 'x' || dropContainerLock === 'x') {
      y = this._pickupPositionOnPage.y;
    } else if (this.lockAxis === 'y' || dropContainerLock === 'y') {
      x = this._pickupPositionOnPage.x;
    }

    if (this._boundaryRect) {
      const {
        x: pickupX,
        y: pickupY
      } = this._pickupPositionInElement;
      const boundaryRect = this._boundaryRect;
      const previewRect = this._previewRect;
      const minY = boundaryRect.top + pickupY;
      const maxY = boundaryRect.bottom - (previewRect.height - pickupY);
      const minX = boundaryRect.left + pickupX;
      const maxX = boundaryRect.right - (previewRect.width - pickupX);
      x = clamp$1(x, minX, maxX);
      y = clamp$1(y, minY, maxY);
    }

    return {
      x,
      y
    };
  }
  /** Updates the current drag delta, based on the user's current pointer position on the page. */


  _updatePointerDirectionDelta(pointerPositionOnPage) {
    const {
      x,
      y
    } = pointerPositionOnPage;
    const delta = this._pointerDirectionDelta;
    const positionSinceLastChange = this._pointerPositionAtLastDirectionChange; // Amount of pixels the user has dragged since the last time the direction changed.

    const changeX = Math.abs(x - positionSinceLastChange.x);
    const changeY = Math.abs(y - positionSinceLastChange.y); // Because we handle pointer events on a per-pixel basis, we don't want the delta
    // to change for every pixel, otherwise anything that depends on it can look erratic.
    // To make the delta more consistent, we track how much the user has moved since the last
    // delta change and we only update it after it has reached a certain threshold.

    if (changeX > this._config.pointerDirectionChangeThreshold) {
      delta.x = x > positionSinceLastChange.x ? 1 : -1;
      positionSinceLastChange.x = x;
    }

    if (changeY > this._config.pointerDirectionChangeThreshold) {
      delta.y = y > positionSinceLastChange.y ? 1 : -1;
      positionSinceLastChange.y = y;
    }

    return delta;
  }
  /** Toggles the native drag interactions, based on how many handles are registered. */


  _toggleNativeDragInteractions() {
    if (!this._rootElement || !this._handles) {
      return;
    }

    const shouldEnable = this._handles.length > 0 || !this.isDragging();

    if (shouldEnable !== this._nativeInteractionsEnabled) {
      this._nativeInteractionsEnabled = shouldEnable;
      toggleNativeDragInteractions(this._rootElement, shouldEnable);
    }
  }
  /** Removes the manually-added event listeners from the root element. */


  _removeRootElementListeners(element) {
    element.removeEventListener('mousedown', this._pointerDown, activeEventListenerOptions);
    element.removeEventListener('touchstart', this._pointerDown, passiveEventListenerOptions);
  }
  /**
   * Applies a `transform` to the root element, taking into account any existing transforms on it.
   * @param x New transform value along the X axis.
   * @param y New transform value along the Y axis.
   */


  _applyRootElementTransform(x, y) {
    const transform = getTransform(x, y); // Cache the previous transform amount only after the first drag sequence, because
    // we don't want our own transforms to stack on top of each other.
    // Should be excluded none because none + translate3d(x, y, x) is invalid css

    if (this._initialTransform == null) {
      this._initialTransform = this._rootElement.style.transform && this._rootElement.style.transform != 'none' ? this._rootElement.style.transform : '';
    } // Preserve the previous `transform` value, if there was one. Note that we apply our own
    // transform before the user's, because things like rotation can affect which direction
    // the element will be translated towards.


    this._rootElement.style.transform = combineTransforms(transform, this._initialTransform);
  }
  /**
   * Applies a `transform` to the preview, taking into account any existing transforms on it.
   * @param x New transform value along the X axis.
   * @param y New transform value along the Y axis.
   */


  _applyPreviewTransform(x, y) {
    var _a; // Only apply the initial transform if the preview is a clone of the original element, otherwise
    // it could be completely different and the transform might not make sense anymore.


    const initialTransform = ((_a = this._previewTemplate) === null || _a === void 0 ? void 0 : _a.template) ? undefined : this._initialTransform;
    const transform = getTransform(x, y);
    this._preview.style.transform = combineTransforms(transform, initialTransform);
  }
  /**
   * Gets the distance that the user has dragged during the current drag sequence.
   * @param currentPosition Current position of the user's pointer.
   */


  _getDragDistance(currentPosition) {
    const pickupPosition = this._pickupPositionOnPage;

    if (pickupPosition) {
      return {
        x: currentPosition.x - pickupPosition.x,
        y: currentPosition.y - pickupPosition.y
      };
    }

    return {
      x: 0,
      y: 0
    };
  }
  /** Cleans up any cached element dimensions that we don't need after dragging has stopped. */


  _cleanupCachedDimensions() {
    this._boundaryRect = this._previewRect = undefined;

    this._parentPositions.clear();
  }
  /**
   * Checks whether the element is still inside its boundary after the viewport has been resized.
   * If not, the position is adjusted so that the element fits again.
   */


  _containInsideBoundaryOnResize() {
    let {
      x,
      y
    } = this._passiveTransform;

    if (x === 0 && y === 0 || this.isDragging() || !this._boundaryElement) {
      return;
    }

    const boundaryRect = this._boundaryElement.getBoundingClientRect();

    const elementRect = this._rootElement.getBoundingClientRect(); // It's possible that the element got hidden away after dragging (e.g. by switching to a
    // different tab). Don't do anything in this case so we don't clear the user's position.


    if (boundaryRect.width === 0 && boundaryRect.height === 0 || elementRect.width === 0 && elementRect.height === 0) {
      return;
    }

    const leftOverflow = boundaryRect.left - elementRect.left;
    const rightOverflow = elementRect.right - boundaryRect.right;
    const topOverflow = boundaryRect.top - elementRect.top;
    const bottomOverflow = elementRect.bottom - boundaryRect.bottom; // If the element has become wider than the boundary, we can't
    // do much to make it fit so we just anchor it to the left.

    if (boundaryRect.width > elementRect.width) {
      if (leftOverflow > 0) {
        x += leftOverflow;
      }

      if (rightOverflow > 0) {
        x -= rightOverflow;
      }
    } else {
      x = 0;
    } // If the element has become taller than the boundary, we can't
    // do much to make it fit so we just anchor it to the top.


    if (boundaryRect.height > elementRect.height) {
      if (topOverflow > 0) {
        y += topOverflow;
      }

      if (bottomOverflow > 0) {
        y -= bottomOverflow;
      }
    } else {
      y = 0;
    }

    if (x !== this._passiveTransform.x || y !== this._passiveTransform.y) {
      this.setFreeDragPosition({
        y,
        x
      });
    }
  }
  /** Gets the drag start delay, based on the event type. */


  _getDragStartDelay(event) {
    const value = this.dragStartDelay;

    if (typeof value === 'number') {
      return value;
    } else if (isTouchEvent(event)) {
      return value.touch;
    }

    return value ? value.mouse : 0;
  }
  /** Updates the internal state of the draggable element when scrolling has occurred. */


  _updateOnScroll(event) {
    const scrollDifference = this._parentPositions.handleScroll(event);

    if (scrollDifference) {
      const target = (0,platform/* _getEventTarget */.sA)(event); // ClientRect dimensions are based on the scroll position of the page and its parent node so
      // we have to update the cached boundary ClientRect if the user has scrolled. Check for
      // the `document` specifically since IE doesn't support `contains` on it.


      if (this._boundaryRect && (target === this._document || target !== this._boundaryElement && target.contains(this._boundaryElement))) {
        adjustClientRect(this._boundaryRect, scrollDifference.top, scrollDifference.left);
      }

      this._pickupPositionOnPage.x += scrollDifference.left;
      this._pickupPositionOnPage.y += scrollDifference.top; // If we're in free drag mode, we have to update the active transform, because
      // it isn't relative to the viewport like the preview inside a drop list.

      if (!this._dropContainer) {
        this._activeTransform.x -= scrollDifference.left;
        this._activeTransform.y -= scrollDifference.top;

        this._applyRootElementTransform(this._activeTransform.x, this._activeTransform.y);
      }
    }
  }
  /** Gets the scroll position of the viewport. */


  _getViewportScrollPosition() {
    const cachedPosition = this._parentPositions.positions.get(this._document);

    return cachedPosition ? cachedPosition.scrollPosition : this._viewportRuler.getViewportScrollPosition();
  }
  /**
   * Lazily resolves and returns the shadow root of the element. We do this in a function, rather
   * than saving it in property directly on init, because we want to resolve it as late as possible
   * in order to ensure that the element has been moved into the shadow DOM. Doing it inside the
   * constructor might be too early if the element is inside of something like `ngFor` or `ngIf`.
   */


  _getShadowRoot() {
    if (this._cachedShadowRoot === undefined) {
      this._cachedShadowRoot = (0,platform/* _getShadowRoot */.kV)(this._rootElement);
    }

    return this._cachedShadowRoot;
  }
  /** Gets the element into which the drag preview should be inserted. */


  _getPreviewInsertionPoint(initialParent, shadowRoot) {
    const previewContainer = this._previewContainer || 'global';

    if (previewContainer === 'parent') {
      return initialParent;
    }

    if (previewContainer === 'global') {
      const documentRef = this._document; // We can't use the body if the user is in fullscreen mode,
      // because the preview will render under the fullscreen element.
      // TODO(crisbeto): dedupe this with the `FullscreenOverlayContainer` eventually.

      return shadowRoot || documentRef.fullscreenElement || documentRef.webkitFullscreenElement || documentRef.mozFullScreenElement || documentRef.msFullscreenElement || documentRef.body;
    }

    return (0,coercion/* coerceElement */.fI)(previewContainer);
  }

}
/**
 * Gets a 3d `transform` that can be applied to an element.
 * @param x Desired position of the element along the X axis.
 * @param y Desired position of the element along the Y axis.
 */


function getTransform(x, y) {
  // Round the transforms since some browsers will
  // blur the elements for sub-pixel transforms.
  return `translate3d(${Math.round(x)}px, ${Math.round(y)}px, 0)`;
}
/** Clamps a value between a minimum and a maximum. */


function clamp$1(value, min, max) {
  return Math.max(min, Math.min(max, value));
}
/**
 * Helper to remove a node from the DOM and to do all the necessary null checks.
 * @param node Node to be removed.
 */


function removeNode(node) {
  if (node && node.parentNode) {
    node.parentNode.removeChild(node);
  }
}
/** Determines whether an event is a touch event. */


function isTouchEvent(event) {
  // This function is called for every pixel that the user has dragged so we need it to be
  // as fast as possible. Since we only bind mouse events and touch events, we can assume
  // that if the event's name starts with `t`, it's a touch event.
  return event.type[0] === 't';
}
/**
 * Gets the root HTML element of an embedded view.
 * If the root is not an HTML element it gets wrapped in one.
 */


function getRootNode(viewRef, _document) {
  const rootNodes = viewRef.rootNodes;

  if (rootNodes.length === 1 && rootNodes[0].nodeType === _document.ELEMENT_NODE) {
    return rootNodes[0];
  }

  const wrapper = _document.createElement('div');

  rootNodes.forEach(node => wrapper.appendChild(node));
  return wrapper;
}
/**
 * Matches the target element's size to the source's size.
 * @param target Element that needs to be resized.
 * @param sourceRect Dimensions of the source element.
 */


function matchElementSize(target, sourceRect) {
  target.style.width = `${sourceRect.width}px`;
  target.style.height = `${sourceRect.height}px`;
  target.style.transform = getTransform(sourceRect.left, sourceRect.top);
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Moves an item one index in an array to another.
 * @param array Array in which to move the item.
 * @param fromIndex Starting index of the item.
 * @param toIndex Index to which the item should be moved.
 */


function moveItemInArray(array, fromIndex, toIndex) {
  const from = clamp(fromIndex, array.length - 1);
  const to = clamp(toIndex, array.length - 1);

  if (from === to) {
    return;
  }

  const target = array[from];
  const delta = to < from ? -1 : 1;

  for (let i = from; i !== to; i += delta) {
    array[i] = array[i + delta];
  }

  array[to] = target;
}
/**
 * Moves an item from one array to another.
 * @param currentArray Array from which to transfer the item.
 * @param targetArray Array into which to put the item.
 * @param currentIndex Index of the item in its current array.
 * @param targetIndex Index at which to insert the item.
 */


function transferArrayItem(currentArray, targetArray, currentIndex, targetIndex) {
  const from = clamp(currentIndex, currentArray.length - 1);
  const to = clamp(targetIndex, targetArray.length);

  if (currentArray.length) {
    targetArray.splice(to, 0, currentArray.splice(from, 1)[0]);
  }
}
/**
 * Copies an item from one array to another, leaving it in its
 * original position in current array.
 * @param currentArray Array from which to copy the item.
 * @param targetArray Array into which is copy the item.
 * @param currentIndex Index of the item in its current array.
 * @param targetIndex Index at which to insert the item.
 *
 */


function copyArrayItem(currentArray, targetArray, currentIndex, targetIndex) {
  const to = clamp(targetIndex, targetArray.length);

  if (currentArray.length) {
    targetArray.splice(to, 0, currentArray[currentIndex]);
  }
}
/** Clamps a number between zero and a maximum. */


function clamp(value, max) {
  return Math.max(0, Math.min(max, value));
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Proximity, as a ratio to width/height, at which a
 * dragged item will affect the drop container.
 */


const DROP_PROXIMITY_THRESHOLD = 0.05;
/**
 * Proximity, as a ratio to width/height at which to start auto-scrolling the drop list or the
 * viewport. The value comes from trying it out manually until it feels right.
 */

const SCROLL_PROXIMITY_THRESHOLD = 0.05;
/**
 * Reference to a drop list. Used to manipulate or dispose of the container.
 */

class DropListRef {
  constructor(element, _dragDropRegistry, _document, _ngZone, _viewportRuler) {
    this._dragDropRegistry = _dragDropRegistry;
    this._ngZone = _ngZone;
    this._viewportRuler = _viewportRuler;
    /** Whether starting a dragging sequence from this container is disabled. */

    this.disabled = false;
    /** Whether sorting items within the list is disabled. */

    this.sortingDisabled = false;
    /**
     * Whether auto-scrolling the view when the user
     * moves their pointer close to the edges is disabled.
     */

    this.autoScrollDisabled = false;
    /** Number of pixels to scroll for each frame when auto-scrolling an element. */

    this.autoScrollStep = 2;
    /**
     * Function that is used to determine whether an item
     * is allowed to be moved into a drop container.
     */

    this.enterPredicate = () => true;
    /** Functions that is used to determine whether an item can be sorted into a particular index. */


    this.sortPredicate = () => true;
    /** Emits right before dragging has started. */


    this.beforeStarted = new internal_Subject/* Subject */.xQ();
    /**
     * Emits when the user has moved a new drag item into this container.
     */

    this.entered = new internal_Subject/* Subject */.xQ();
    /**
     * Emits when the user removes an item from the container
     * by dragging it into another container.
     */

    this.exited = new internal_Subject/* Subject */.xQ();
    /** Emits when the user drops an item inside the container. */

    this.dropped = new internal_Subject/* Subject */.xQ();
    /** Emits as the user is swapping items while actively dragging. */

    this.sorted = new internal_Subject/* Subject */.xQ();
    /** Whether an item in the list is being dragged. */

    this._isDragging = false;
    /** Cache of the dimensions of all the items inside the container. */

    this._itemPositions = [];
    /**
     * Keeps track of the item that was last swapped with the dragged item, as well as what direction
     * the pointer was moving in when the swap occured and whether the user's pointer continued to
     * overlap with the swapped item after the swapping occurred.
     */

    this._previousSwap = {
      drag: null,
      delta: 0,
      overlaps: false
    };
    /** Draggable items in the container. */

    this._draggables = [];
    /** Drop lists that are connected to the current one. */

    this._siblings = [];
    /** Direction in which the list is oriented. */

    this._orientation = 'vertical';
    /** Connected siblings that currently have a dragged item. */

    this._activeSiblings = new Set();
    /** Layout direction of the drop list. */

    this._direction = 'ltr';
    /** Subscription to the window being scrolled. */

    this._viewportScrollSubscription = internal_Subscription/* Subscription.EMPTY */.w.EMPTY;
    /** Vertical direction in which the list is currently scrolling. */

    this._verticalScrollDirection = 0
    /* NONE */
    ;
    /** Horizontal direction in which the list is currently scrolling. */

    this._horizontalScrollDirection = 0
    /* NONE */
    ;
    /** Used to signal to the current auto-scroll sequence when to stop. */

    this._stopScrollTimers = new internal_Subject/* Subject */.xQ();
    /** Shadow root of the current element. Necessary for `elementFromPoint` to resolve correctly. */

    this._cachedShadowRoot = null;
    /** Starts the interval that'll auto-scroll the element. */

    this._startScrollInterval = () => {
      this._stopScrolling();

      (0,interval/* interval */.F)(0, animationFrame/* animationFrameScheduler */.Z).pipe((0,takeUntil/* takeUntil */.R)(this._stopScrollTimers)).subscribe(() => {
        const node = this._scrollNode;
        const scrollStep = this.autoScrollStep;

        if (this._verticalScrollDirection === 1
        /* UP */
        ) {
          incrementVerticalScroll(node, -scrollStep);
        } else if (this._verticalScrollDirection === 2
        /* DOWN */
        ) {
          incrementVerticalScroll(node, scrollStep);
        }

        if (this._horizontalScrollDirection === 1
        /* LEFT */
        ) {
          incrementHorizontalScroll(node, -scrollStep);
        } else if (this._horizontalScrollDirection === 2
        /* RIGHT */
        ) {
          incrementHorizontalScroll(node, scrollStep);
        }
      });
    };

    this.element = (0,coercion/* coerceElement */.fI)(element);
    this._document = _document;
    this.withScrollableParents([this.element]);

    _dragDropRegistry.registerDropContainer(this);

    this._parentPositions = new ParentPositionTracker(_document, _viewportRuler);
  }
  /** Removes the drop list functionality from the DOM element. */


  dispose() {
    this._stopScrolling();

    this._stopScrollTimers.complete();

    this._viewportScrollSubscription.unsubscribe();

    this.beforeStarted.complete();
    this.entered.complete();
    this.exited.complete();
    this.dropped.complete();
    this.sorted.complete();

    this._activeSiblings.clear();

    this._scrollNode = null;

    this._parentPositions.clear();

    this._dragDropRegistry.removeDropContainer(this);
  }
  /** Whether an item from this list is currently being dragged. */


  isDragging() {
    return this._isDragging;
  }
  /** Starts dragging an item. */


  start() {
    this._draggingStarted();

    this._notifyReceivingSiblings();
  }
  /**
   * Emits an event to indicate that the user moved an item into the container.
   * @param item Item that was moved into the container.
   * @param pointerX Position of the item along the X axis.
   * @param pointerY Position of the item along the Y axis.
   * @param index Index at which the item entered. If omitted, the container will try to figure it
   *   out automatically.
   */


  enter(item, pointerX, pointerY, index) {
    this._draggingStarted(); // If sorting is disabled, we want the item to return to its starting
    // position if the user is returning it to its initial container.


    let newIndex;

    if (index == null) {
      newIndex = this.sortingDisabled ? this._draggables.indexOf(item) : -1;

      if (newIndex === -1) {
        // We use the coordinates of where the item entered the drop
        // zone to figure out at which index it should be inserted.
        newIndex = this._getItemIndexFromPointerPosition(item, pointerX, pointerY);
      }
    } else {
      newIndex = index;
    }

    const activeDraggables = this._activeDraggables;
    const currentIndex = activeDraggables.indexOf(item);
    const placeholder = item.getPlaceholderElement();
    let newPositionReference = activeDraggables[newIndex]; // If the item at the new position is the same as the item that is being dragged,
    // it means that we're trying to restore the item to its initial position. In this
    // case we should use the next item from the list as the reference.

    if (newPositionReference === item) {
      newPositionReference = activeDraggables[newIndex + 1];
    } // Since the item may be in the `activeDraggables` already (e.g. if the user dragged it
    // into another container and back again), we have to ensure that it isn't duplicated.


    if (currentIndex > -1) {
      activeDraggables.splice(currentIndex, 1);
    } // Don't use items that are being dragged as a reference, because
    // their element has been moved down to the bottom of the body.


    if (newPositionReference && !this._dragDropRegistry.isDragging(newPositionReference)) {
      const element = newPositionReference.getRootElement();
      element.parentElement.insertBefore(placeholder, element);
      activeDraggables.splice(newIndex, 0, item);
    } else if (this._shouldEnterAsFirstChild(pointerX, pointerY)) {
      const reference = activeDraggables[0].getRootElement();
      reference.parentNode.insertBefore(placeholder, reference);
      activeDraggables.unshift(item);
    } else {
      (0,coercion/* coerceElement */.fI)(this.element).appendChild(placeholder);
      activeDraggables.push(item);
    } // The transform needs to be cleared so it doesn't throw off the measurements.


    placeholder.style.transform = ''; // Note that the positions were already cached when we called `start` above,
    // but we need to refresh them since the amount of items has changed and also parent rects.

    this._cacheItemPositions();

    this._cacheParentPositions(); // Notify siblings at the end so that the item has been inserted into the `activeDraggables`.


    this._notifyReceivingSiblings();

    this.entered.next({
      item,
      container: this,
      currentIndex: this.getItemIndex(item)
    });
  }
  /**
   * Removes an item from the container after it was dragged into another container by the user.
   * @param item Item that was dragged out.
   */


  exit(item) {
    this._reset();

    this.exited.next({
      item,
      container: this
    });
  }
  /**
   * Drops an item into this container.
   * @param item Item being dropped into the container.
   * @param currentIndex Index at which the item should be inserted.
   * @param previousIndex Index of the item when dragging started.
   * @param previousContainer Container from which the item got dragged in.
   * @param isPointerOverContainer Whether the user's pointer was over the
   *    container when the item was dropped.
   * @param distance Distance the user has dragged since the start of the dragging sequence.
   */


  drop(item, currentIndex, previousIndex, previousContainer, isPointerOverContainer, distance, dropPoint) {
    this._reset();

    this.dropped.next({
      item,
      currentIndex,
      previousIndex,
      container: this,
      previousContainer,
      isPointerOverContainer,
      distance,
      dropPoint
    });
  }
  /**
   * Sets the draggable items that are a part of this list.
   * @param items Items that are a part of this list.
   */


  withItems(items) {
    const previousItems = this._draggables;
    this._draggables = items;
    items.forEach(item => item._withDropContainer(this));

    if (this.isDragging()) {
      const draggedItems = previousItems.filter(item => item.isDragging()); // If all of the items being dragged were removed
      // from the list, abort the current drag sequence.

      if (draggedItems.every(item => items.indexOf(item) === -1)) {
        this._reset();
      } else {
        this._cacheItems();
      }
    }

    return this;
  }
  /** Sets the layout direction of the drop list. */


  withDirection(direction) {
    this._direction = direction;
    return this;
  }
  /**
   * Sets the containers that are connected to this one. When two or more containers are
   * connected, the user will be allowed to transfer items between them.
   * @param connectedTo Other containers that the current containers should be connected to.
   */


  connectedTo(connectedTo) {
    this._siblings = connectedTo.slice();
    return this;
  }
  /**
   * Sets the orientation of the container.
   * @param orientation New orientation for the container.
   */


  withOrientation(orientation) {
    this._orientation = orientation;
    return this;
  }
  /**
   * Sets which parent elements are can be scrolled while the user is dragging.
   * @param elements Elements that can be scrolled.
   */


  withScrollableParents(elements) {
    const element = (0,coercion/* coerceElement */.fI)(this.element); // We always allow the current element to be scrollable
    // so we need to ensure that it's in the array.

    this._scrollableElements = elements.indexOf(element) === -1 ? [element, ...elements] : elements.slice();
    return this;
  }
  /** Gets the scrollable parents that are registered with this drop container. */


  getScrollableParents() {
    return this._scrollableElements;
  }
  /**
   * Figures out the index of an item in the container.
   * @param item Item whose index should be determined.
   */


  getItemIndex(item) {
    if (!this._isDragging) {
      return this._draggables.indexOf(item);
    } // Items are sorted always by top/left in the cache, however they flow differently in RTL.
    // The rest of the logic still stands no matter what orientation we're in, however
    // we need to invert the array when determining the index.


    const items = this._orientation === 'horizontal' && this._direction === 'rtl' ? this._itemPositions.slice().reverse() : this._itemPositions;
    return findIndex(items, currentItem => currentItem.drag === item);
  }
  /**
   * Whether the list is able to receive the item that
   * is currently being dragged inside a connected drop list.
   */


  isReceiving() {
    return this._activeSiblings.size > 0;
  }
  /**
   * Sorts an item inside the container based on its position.
   * @param item Item to be sorted.
   * @param pointerX Position of the item along the X axis.
   * @param pointerY Position of the item along the Y axis.
   * @param pointerDelta Direction in which the pointer is moving along each axis.
   */


  _sortItem(item, pointerX, pointerY, pointerDelta) {
    // Don't sort the item if sorting is disabled or it's out of range.
    if (this.sortingDisabled || !this._clientRect || !isPointerNearClientRect(this._clientRect, DROP_PROXIMITY_THRESHOLD, pointerX, pointerY)) {
      return;
    }

    const siblings = this._itemPositions;

    const newIndex = this._getItemIndexFromPointerPosition(item, pointerX, pointerY, pointerDelta);

    if (newIndex === -1 && siblings.length > 0) {
      return;
    }

    const isHorizontal = this._orientation === 'horizontal';
    const currentIndex = findIndex(siblings, currentItem => currentItem.drag === item);
    const siblingAtNewPosition = siblings[newIndex];
    const currentPosition = siblings[currentIndex].clientRect;
    const newPosition = siblingAtNewPosition.clientRect;
    const delta = currentIndex > newIndex ? 1 : -1; // How many pixels the item's placeholder should be offset.

    const itemOffset = this._getItemOffsetPx(currentPosition, newPosition, delta); // How many pixels all the other items should be offset.


    const siblingOffset = this._getSiblingOffsetPx(currentIndex, siblings, delta); // Save the previous order of the items before moving the item to its new index.
    // We use this to check whether an item has been moved as a result of the sorting.


    const oldOrder = siblings.slice(); // Shuffle the array in place.

    moveItemInArray(siblings, currentIndex, newIndex);
    this.sorted.next({
      previousIndex: currentIndex,
      currentIndex: newIndex,
      container: this,
      item
    });
    siblings.forEach((sibling, index) => {
      // Don't do anything if the position hasn't changed.
      if (oldOrder[index] === sibling) {
        return;
      }

      const isDraggedItem = sibling.drag === item;
      const offset = isDraggedItem ? itemOffset : siblingOffset;
      const elementToOffset = isDraggedItem ? item.getPlaceholderElement() : sibling.drag.getRootElement(); // Update the offset to reflect the new position.

      sibling.offset += offset; // Since we're moving the items with a `transform`, we need to adjust their cached
      // client rects to reflect their new position, as well as swap their positions in the cache.
      // Note that we shouldn't use `getBoundingClientRect` here to update the cache, because the
      // elements may be mid-animation which will give us a wrong result.

      if (isHorizontal) {
        // Round the transforms since some browsers will
        // blur the elements, for sub-pixel transforms.
        elementToOffset.style.transform = combineTransforms(`translate3d(${Math.round(sibling.offset)}px, 0, 0)`, sibling.initialTransform);
        adjustClientRect(sibling.clientRect, 0, offset);
      } else {
        elementToOffset.style.transform = combineTransforms(`translate3d(0, ${Math.round(sibling.offset)}px, 0)`, sibling.initialTransform);
        adjustClientRect(sibling.clientRect, offset, 0);
      }
    }); // Note that it's important that we do this after the client rects have been adjusted.

    this._previousSwap.overlaps = isInsideClientRect(newPosition, pointerX, pointerY);
    this._previousSwap.drag = siblingAtNewPosition.drag;
    this._previousSwap.delta = isHorizontal ? pointerDelta.x : pointerDelta.y;
  }
  /**
   * Checks whether the user's pointer is close to the edges of either the
   * viewport or the drop list and starts the auto-scroll sequence.
   * @param pointerX User's pointer position along the x axis.
   * @param pointerY User's pointer position along the y axis.
   */


  _startScrollingIfNecessary(pointerX, pointerY) {
    if (this.autoScrollDisabled) {
      return;
    }

    let scrollNode;
    let verticalScrollDirection = 0
    /* NONE */
    ;
    let horizontalScrollDirection = 0
    /* NONE */
    ; // Check whether we should start scrolling any of the parent containers.

    this._parentPositions.positions.forEach((position, element) => {
      // We have special handling for the `document` below. Also this would be
      // nicer with a  for...of loop, but it requires changing a compiler flag.
      if (element === this._document || !position.clientRect || scrollNode) {
        return;
      }

      if (isPointerNearClientRect(position.clientRect, DROP_PROXIMITY_THRESHOLD, pointerX, pointerY)) {
        [verticalScrollDirection, horizontalScrollDirection] = getElementScrollDirections(element, position.clientRect, pointerX, pointerY);

        if (verticalScrollDirection || horizontalScrollDirection) {
          scrollNode = element;
        }
      }
    }); // Otherwise check if we can start scrolling the viewport.


    if (!verticalScrollDirection && !horizontalScrollDirection) {
      const {
        width,
        height
      } = this._viewportRuler.getViewportSize();

      const clientRect = {
        width,
        height,
        top: 0,
        right: width,
        bottom: height,
        left: 0
      };
      verticalScrollDirection = getVerticalScrollDirection(clientRect, pointerY);
      horizontalScrollDirection = getHorizontalScrollDirection(clientRect, pointerX);
      scrollNode = window;
    }

    if (scrollNode && (verticalScrollDirection !== this._verticalScrollDirection || horizontalScrollDirection !== this._horizontalScrollDirection || scrollNode !== this._scrollNode)) {
      this._verticalScrollDirection = verticalScrollDirection;
      this._horizontalScrollDirection = horizontalScrollDirection;
      this._scrollNode = scrollNode;

      if ((verticalScrollDirection || horizontalScrollDirection) && scrollNode) {
        this._ngZone.runOutsideAngular(this._startScrollInterval);
      } else {
        this._stopScrolling();
      }
    }
  }
  /** Stops any currently-running auto-scroll sequences. */


  _stopScrolling() {
    this._stopScrollTimers.next();
  }
  /** Starts the dragging sequence within the list. */


  _draggingStarted() {
    const styles = (0,coercion/* coerceElement */.fI)(this.element).style;
    this.beforeStarted.next();
    this._isDragging = true; // We need to disable scroll snapping while the user is dragging, because it breaks automatic
    // scrolling. The browser seems to round the value based on the snapping points which means
    // that we can't increment/decrement the scroll position.

    this._initialScrollSnap = styles.msScrollSnapType || styles.scrollSnapType || '';
    styles.scrollSnapType = styles.msScrollSnapType = 'none';

    this._cacheItems();

    this._viewportScrollSubscription.unsubscribe();

    this._listenToScrollEvents();
  }
  /** Caches the positions of the configured scrollable parents. */


  _cacheParentPositions() {
    const element = (0,coercion/* coerceElement */.fI)(this.element);

    this._parentPositions.cache(this._scrollableElements); // The list element is always in the `scrollableElements`
    // so we can take advantage of the cached `ClientRect`.


    this._clientRect = this._parentPositions.positions.get(element).clientRect;
  }
  /** Refreshes the position cache of the items and sibling containers. */


  _cacheItemPositions() {
    const isHorizontal = this._orientation === 'horizontal';
    this._itemPositions = this._activeDraggables.map(drag => {
      const elementToMeasure = drag.getVisibleElement();
      return {
        drag,
        offset: 0,
        initialTransform: elementToMeasure.style.transform || '',
        clientRect: getMutableClientRect(elementToMeasure)
      };
    }).sort((a, b) => {
      return isHorizontal ? a.clientRect.left - b.clientRect.left : a.clientRect.top - b.clientRect.top;
    });
  }
  /** Resets the container to its initial state. */


  _reset() {
    this._isDragging = false;
    const styles = (0,coercion/* coerceElement */.fI)(this.element).style;
    styles.scrollSnapType = styles.msScrollSnapType = this._initialScrollSnap; // TODO(crisbeto): may have to wait for the animations to finish.

    this._activeDraggables.forEach(item => {
      var _a;

      const rootElement = item.getRootElement();

      if (rootElement) {
        const initialTransform = (_a = this._itemPositions.find(current => current.drag === item)) === null || _a === void 0 ? void 0 : _a.initialTransform;
        rootElement.style.transform = initialTransform || '';
      }
    });

    this._siblings.forEach(sibling => sibling._stopReceiving(this));

    this._activeDraggables = [];
    this._itemPositions = [];
    this._previousSwap.drag = null;
    this._previousSwap.delta = 0;
    this._previousSwap.overlaps = false;

    this._stopScrolling();

    this._viewportScrollSubscription.unsubscribe();

    this._parentPositions.clear();
  }
  /**
   * Gets the offset in pixels by which the items that aren't being dragged should be moved.
   * @param currentIndex Index of the item currently being dragged.
   * @param siblings All of the items in the list.
   * @param delta Direction in which the user is moving.
   */


  _getSiblingOffsetPx(currentIndex, siblings, delta) {
    const isHorizontal = this._orientation === 'horizontal';
    const currentPosition = siblings[currentIndex].clientRect;
    const immediateSibling = siblings[currentIndex + delta * -1];
    let siblingOffset = currentPosition[isHorizontal ? 'width' : 'height'] * delta;

    if (immediateSibling) {
      const start = isHorizontal ? 'left' : 'top';
      const end = isHorizontal ? 'right' : 'bottom'; // Get the spacing between the start of the current item and the end of the one immediately
      // after it in the direction in which the user is dragging, or vice versa. We add it to the
      // offset in order to push the element to where it will be when it's inline and is influenced
      // by the `margin` of its siblings.

      if (delta === -1) {
        siblingOffset -= immediateSibling.clientRect[start] - currentPosition[end];
      } else {
        siblingOffset += currentPosition[start] - immediateSibling.clientRect[end];
      }
    }

    return siblingOffset;
  }
  /**
   * Gets the offset in pixels by which the item that is being dragged should be moved.
   * @param currentPosition Current position of the item.
   * @param newPosition Position of the item where the current item should be moved.
   * @param delta Direction in which the user is moving.
   */


  _getItemOffsetPx(currentPosition, newPosition, delta) {
    const isHorizontal = this._orientation === 'horizontal';
    let itemOffset = isHorizontal ? newPosition.left - currentPosition.left : newPosition.top - currentPosition.top; // Account for differences in the item width/height.

    if (delta === -1) {
      itemOffset += isHorizontal ? newPosition.width - currentPosition.width : newPosition.height - currentPosition.height;
    }

    return itemOffset;
  }
  /**
   * Checks if pointer is entering in the first position
   * @param pointerX Position of the user's pointer along the X axis.
   * @param pointerY Position of the user's pointer along the Y axis.
   */


  _shouldEnterAsFirstChild(pointerX, pointerY) {
    if (!this._activeDraggables.length) {
      return false;
    }

    const itemPositions = this._itemPositions;
    const isHorizontal = this._orientation === 'horizontal'; // `itemPositions` are sorted by position while `activeDraggables` are sorted by child index
    // check if container is using some sort of "reverse" ordering (eg: flex-direction: row-reverse)

    const reversed = itemPositions[0].drag !== this._activeDraggables[0];

    if (reversed) {
      const lastItemRect = itemPositions[itemPositions.length - 1].clientRect;
      return isHorizontal ? pointerX >= lastItemRect.right : pointerY >= lastItemRect.bottom;
    } else {
      const firstItemRect = itemPositions[0].clientRect;
      return isHorizontal ? pointerX <= firstItemRect.left : pointerY <= firstItemRect.top;
    }
  }
  /**
   * Gets the index of an item in the drop container, based on the position of the user's pointer.
   * @param item Item that is being sorted.
   * @param pointerX Position of the user's pointer along the X axis.
   * @param pointerY Position of the user's pointer along the Y axis.
   * @param delta Direction in which the user is moving their pointer.
   */


  _getItemIndexFromPointerPosition(item, pointerX, pointerY, delta) {
    const isHorizontal = this._orientation === 'horizontal';
    const index = findIndex(this._itemPositions, ({
      drag,
      clientRect
    }, _, array) => {
      if (drag === item) {
        // If there's only one item left in the container, it must be
        // the dragged item itself so we use it as a reference.
        return array.length < 2;
      }

      if (delta) {
        const direction = isHorizontal ? delta.x : delta.y; // If the user is still hovering over the same item as last time, their cursor hasn't left
        // the item after we made the swap, and they didn't change the direction in which they're
        // dragging, we don't consider it a direction swap.

        if (drag === this._previousSwap.drag && this._previousSwap.overlaps && direction === this._previousSwap.delta) {
          return false;
        }
      }

      return isHorizontal ? // Round these down since most browsers report client rects with
      // sub-pixel precision, whereas the pointer coordinates are rounded to pixels.
      pointerX >= Math.floor(clientRect.left) && pointerX < Math.floor(clientRect.right) : pointerY >= Math.floor(clientRect.top) && pointerY < Math.floor(clientRect.bottom);
    });
    return index === -1 || !this.sortPredicate(index, item, this) ? -1 : index;
  }
  /** Caches the current items in the list and their positions. */


  _cacheItems() {
    this._activeDraggables = this._draggables.slice();

    this._cacheItemPositions();

    this._cacheParentPositions();
  }
  /**
   * Checks whether the user's pointer is positioned over the container.
   * @param x Pointer position along the X axis.
   * @param y Pointer position along the Y axis.
   */


  _isOverContainer(x, y) {
    return this._clientRect != null && isInsideClientRect(this._clientRect, x, y);
  }
  /**
   * Figures out whether an item should be moved into a sibling
   * drop container, based on its current position.
   * @param item Drag item that is being moved.
   * @param x Position of the item along the X axis.
   * @param y Position of the item along the Y axis.
   */


  _getSiblingContainerFromPosition(item, x, y) {
    return this._siblings.find(sibling => sibling._canReceive(item, x, y));
  }
  /**
   * Checks whether the drop list can receive the passed-in item.
   * @param item Item that is being dragged into the list.
   * @param x Position of the item along the X axis.
   * @param y Position of the item along the Y axis.
   */


  _canReceive(item, x, y) {
    if (!this._clientRect || !isInsideClientRect(this._clientRect, x, y) || !this.enterPredicate(item, this)) {
      return false;
    }

    const elementFromPoint = this._getShadowRoot().elementFromPoint(x, y); // If there's no element at the pointer position, then
    // the client rect is probably scrolled out of the view.


    if (!elementFromPoint) {
      return false;
    }

    const nativeElement = (0,coercion/* coerceElement */.fI)(this.element); // The `ClientRect`, that we're using to find the container over which the user is
    // hovering, doesn't give us any information on whether the element has been scrolled
    // out of the view or whether it's overlapping with other containers. This means that
    // we could end up transferring the item into a container that's invisible or is positioned
    // below another one. We use the result from `elementFromPoint` to get the top-most element
    // at the pointer position and to find whether it's one of the intersecting drop containers.

    return elementFromPoint === nativeElement || nativeElement.contains(elementFromPoint);
  }
  /**
   * Called by one of the connected drop lists when a dragging sequence has started.
   * @param sibling Sibling in which dragging has started.
   */


  _startReceiving(sibling, items) {
    const activeSiblings = this._activeSiblings;

    if (!activeSiblings.has(sibling) && items.every(item => {
      // Note that we have to add an exception to the `enterPredicate` for items that started off
      // in this drop list. The drag ref has logic that allows an item to return to its initial
      // container, if it has left the initial container and none of the connected containers
      // allow it to enter. See `DragRef._updateActiveDropContainer` for more context.
      return this.enterPredicate(item, this) || this._draggables.indexOf(item) > -1;
    })) {
      activeSiblings.add(sibling);

      this._cacheParentPositions();

      this._listenToScrollEvents();
    }
  }
  /**
   * Called by a connected drop list when dragging has stopped.
   * @param sibling Sibling whose dragging has stopped.
   */


  _stopReceiving(sibling) {
    this._activeSiblings.delete(sibling);

    this._viewportScrollSubscription.unsubscribe();
  }
  /**
   * Starts listening to scroll events on the viewport.
   * Used for updating the internal state of the list.
   */


  _listenToScrollEvents() {
    this._viewportScrollSubscription = this._dragDropRegistry.scrolled(this._getShadowRoot()).subscribe(event => {
      if (this.isDragging()) {
        const scrollDifference = this._parentPositions.handleScroll(event);

        if (scrollDifference) {
          // Since we know the amount that the user has scrolled we can shift all of the
          // client rectangles ourselves. This is cheaper than re-measuring everything and
          // we can avoid inconsistent behavior where we might be measuring the element before
          // its position has changed.
          this._itemPositions.forEach(({
            clientRect
          }) => {
            adjustClientRect(clientRect, scrollDifference.top, scrollDifference.left);
          }); // We need two loops for this, because we want all of the cached
          // positions to be up-to-date before we re-sort the item.


          this._itemPositions.forEach(({
            drag
          }) => {
            if (this._dragDropRegistry.isDragging(drag)) {
              // We need to re-sort the item manually, because the pointer move
              // events won't be dispatched while the user is scrolling.
              drag._sortFromLastPointerPosition();
            }
          });
        }
      } else if (this.isReceiving()) {
        this._cacheParentPositions();
      }
    });
  }
  /**
   * Lazily resolves and returns the shadow root of the element. We do this in a function, rather
   * than saving it in property directly on init, because we want to resolve it as late as possible
   * in order to ensure that the element has been moved into the shadow DOM. Doing it inside the
   * constructor might be too early if the element is inside of something like `ngFor` or `ngIf`.
   */


  _getShadowRoot() {
    if (!this._cachedShadowRoot) {
      const shadowRoot = (0,platform/* _getShadowRoot */.kV)((0,coercion/* coerceElement */.fI)(this.element));

      this._cachedShadowRoot = shadowRoot || this._document;
    }

    return this._cachedShadowRoot;
  }
  /** Notifies any siblings that may potentially receive the item. */


  _notifyReceivingSiblings() {
    const draggedItems = this._activeDraggables.filter(item => item.isDragging());

    this._siblings.forEach(sibling => sibling._startReceiving(this, draggedItems));
  }

}
/**
 * Finds the index of an item that matches a predicate function. Used as an equivalent
 * of `Array.prototype.findIndex` which isn't part of the standard Google typings.
 * @param array Array in which to look for matches.
 * @param predicate Function used to determine whether an item is a match.
 */


function findIndex(array, predicate) {
  for (let i = 0; i < array.length; i++) {
    if (predicate(array[i], i, array)) {
      return i;
    }
  }

  return -1;
}
/**
 * Increments the vertical scroll position of a node.
 * @param node Node whose scroll position should change.
 * @param amount Amount of pixels that the `node` should be scrolled.
 */


function incrementVerticalScroll(node, amount) {
  if (node === window) {
    node.scrollBy(0, amount);
  } else {
    // Ideally we could use `Element.scrollBy` here as well, but IE and Edge don't support it.
    node.scrollTop += amount;
  }
}
/**
 * Increments the horizontal scroll position of a node.
 * @param node Node whose scroll position should change.
 * @param amount Amount of pixels that the `node` should be scrolled.
 */


function incrementHorizontalScroll(node, amount) {
  if (node === window) {
    node.scrollBy(amount, 0);
  } else {
    // Ideally we could use `Element.scrollBy` here as well, but IE and Edge don't support it.
    node.scrollLeft += amount;
  }
}
/**
 * Gets whether the vertical auto-scroll direction of a node.
 * @param clientRect Dimensions of the node.
 * @param pointerY Position of the user's pointer along the y axis.
 */


function getVerticalScrollDirection(clientRect, pointerY) {
  const {
    top,
    bottom,
    height
  } = clientRect;
  const yThreshold = height * SCROLL_PROXIMITY_THRESHOLD;

  if (pointerY >= top - yThreshold && pointerY <= top + yThreshold) {
    return 1
    /* UP */
    ;
  } else if (pointerY >= bottom - yThreshold && pointerY <= bottom + yThreshold) {
    return 2
    /* DOWN */
    ;
  }

  return 0
  /* NONE */
  ;
}
/**
 * Gets whether the horizontal auto-scroll direction of a node.
 * @param clientRect Dimensions of the node.
 * @param pointerX Position of the user's pointer along the x axis.
 */


function getHorizontalScrollDirection(clientRect, pointerX) {
  const {
    left,
    right,
    width
  } = clientRect;
  const xThreshold = width * SCROLL_PROXIMITY_THRESHOLD;

  if (pointerX >= left - xThreshold && pointerX <= left + xThreshold) {
    return 1
    /* LEFT */
    ;
  } else if (pointerX >= right - xThreshold && pointerX <= right + xThreshold) {
    return 2
    /* RIGHT */
    ;
  }

  return 0
  /* NONE */
  ;
}
/**
 * Gets the directions in which an element node should be scrolled,
 * assuming that the user's pointer is already within it scrollable region.
 * @param element Element for which we should calculate the scroll direction.
 * @param clientRect Bounding client rectangle of the element.
 * @param pointerX Position of the user's pointer along the x axis.
 * @param pointerY Position of the user's pointer along the y axis.
 */


function getElementScrollDirections(element, clientRect, pointerX, pointerY) {
  const computedVertical = getVerticalScrollDirection(clientRect, pointerY);
  const computedHorizontal = getHorizontalScrollDirection(clientRect, pointerX);
  let verticalScrollDirection = 0
  /* NONE */
  ;
  let horizontalScrollDirection = 0
  /* NONE */
  ; // Note that we here we do some extra checks for whether the element is actually scrollable in
  // a certain direction and we only assign the scroll direction if it is. We do this so that we
  // can allow other elements to be scrolled, if the current element can't be scrolled anymore.
  // This allows us to handle cases where the scroll regions of two scrollable elements overlap.

  if (computedVertical) {
    const scrollTop = element.scrollTop;

    if (computedVertical === 1
    /* UP */
    ) {
      if (scrollTop > 0) {
        verticalScrollDirection = 1
        /* UP */
        ;
      }
    } else if (element.scrollHeight - scrollTop > element.clientHeight) {
      verticalScrollDirection = 2
      /* DOWN */
      ;
    }
  }

  if (computedHorizontal) {
    const scrollLeft = element.scrollLeft;

    if (computedHorizontal === 1
    /* LEFT */
    ) {
      if (scrollLeft > 0) {
        horizontalScrollDirection = 1
        /* LEFT */
        ;
      }
    } else if (element.scrollWidth - scrollLeft > element.clientWidth) {
      horizontalScrollDirection = 2
      /* RIGHT */
      ;
    }
  }

  return [verticalScrollDirection, horizontalScrollDirection];
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Event options that can be used to bind an active, capturing event. */


const activeCapturingEventOptions = /*#__PURE__*/(0,platform/* normalizePassiveListenerOptions */.i$)({
  passive: false,
  capture: true
});
/**
 * Service that keeps track of all the drag item and drop container
 * instances, and manages global event listeners on the `document`.
 * @docs-private
 */
// Note: this class is generic, rather than referencing CdkDrag and CdkDropList directly, in order
// to avoid circular imports. If we were to reference them here, importing the registry into the
// classes that are registering themselves will introduce a circular import.

let DragDropRegistry = /*#__PURE__*/(() => {
  class DragDropRegistry {
    constructor(_ngZone, _document) {
      this._ngZone = _ngZone;
      /** Registered drop container instances. */

      this._dropInstances = new Set();
      /** Registered drag item instances. */

      this._dragInstances = new Set();
      /** Drag item instances that are currently being dragged. */

      this._activeDragInstances = [];
      /** Keeps track of the event listeners that we've bound to the `document`. */

      this._globalListeners = new Map();
      /**
       * Predicate function to check if an item is being dragged.  Moved out into a property,
       * because it'll be called a lot and we don't want to create a new function every time.
       */

      this._draggingPredicate = item => item.isDragging();
      /**
       * Emits the `touchmove` or `mousemove` events that are dispatched
       * while the user is dragging a drag item instance.
       */


      this.pointerMove = new internal_Subject/* Subject */.xQ();
      /**
       * Emits the `touchend` or `mouseup` events that are dispatched
       * while the user is dragging a drag item instance.
       */

      this.pointerUp = new internal_Subject/* Subject */.xQ();
      /**
       * Emits when the viewport has been scrolled while the user is dragging an item.
       * @deprecated To be turned into a private member. Use the `scrolled` method instead.
       * @breaking-change 13.0.0
       */

      this.scroll = new internal_Subject/* Subject */.xQ();
      /**
       * Event listener that will prevent the default browser action while the user is dragging.
       * @param event Event whose default action should be prevented.
       */

      this._preventDefaultWhileDragging = event => {
        if (this._activeDragInstances.length > 0) {
          event.preventDefault();
        }
      };
      /** Event listener for `touchmove` that is bound even if no dragging is happening. */


      this._persistentTouchmoveListener = event => {
        if (this._activeDragInstances.length > 0) {
          // Note that we only want to prevent the default action after dragging has actually started.
          // Usually this is the same time at which the item is added to the `_activeDragInstances`,
          // but it could be pushed back if the user has set up a drag delay or threshold.
          if (this._activeDragInstances.some(this._draggingPredicate)) {
            event.preventDefault();
          }

          this.pointerMove.next(event);
        }
      };

      this._document = _document;
    }
    /** Adds a drop container to the registry. */


    registerDropContainer(drop) {
      if (!this._dropInstances.has(drop)) {
        this._dropInstances.add(drop);
      }
    }
    /** Adds a drag item instance to the registry. */


    registerDragItem(drag) {
      this._dragInstances.add(drag); // The `touchmove` event gets bound once, ahead of time, because WebKit
      // won't preventDefault on a dynamically-added `touchmove` listener.
      // See https://bugs.webkit.org/show_bug.cgi?id=184250.


      if (this._dragInstances.size === 1) {
        this._ngZone.runOutsideAngular(() => {
          // The event handler has to be explicitly active,
          // because newer browsers make it passive by default.
          this._document.addEventListener('touchmove', this._persistentTouchmoveListener, activeCapturingEventOptions);
        });
      }
    }
    /** Removes a drop container from the registry. */


    removeDropContainer(drop) {
      this._dropInstances.delete(drop);
    }
    /** Removes a drag item instance from the registry. */


    removeDragItem(drag) {
      this._dragInstances.delete(drag);

      this.stopDragging(drag);

      if (this._dragInstances.size === 0) {
        this._document.removeEventListener('touchmove', this._persistentTouchmoveListener, activeCapturingEventOptions);
      }
    }
    /**
     * Starts the dragging sequence for a drag instance.
     * @param drag Drag instance which is being dragged.
     * @param event Event that initiated the dragging.
     */


    startDragging(drag, event) {
      // Do not process the same drag twice to avoid memory leaks and redundant listeners
      if (this._activeDragInstances.indexOf(drag) > -1) {
        return;
      }

      this._activeDragInstances.push(drag);

      if (this._activeDragInstances.length === 1) {
        const isTouchEvent = event.type.startsWith('touch'); // We explicitly bind __active__ listeners here, because newer browsers will default to
        // passive ones for `mousemove` and `touchmove`. The events need to be active, because we
        // use `preventDefault` to prevent the page from scrolling while the user is dragging.

        this._globalListeners.set(isTouchEvent ? 'touchend' : 'mouseup', {
          handler: e => this.pointerUp.next(e),
          options: true
        }).set('scroll', {
          handler: e => this.scroll.next(e),
          // Use capturing so that we pick up scroll changes in any scrollable nodes that aren't
          // the document. See https://github.com/angular/components/issues/17144.
          options: true
        }) // Preventing the default action on `mousemove` isn't enough to disable text selection
        // on Safari so we need to prevent the selection event as well. Alternatively this can
        // be done by setting `user-select: none` on the `body`, however it has causes a style
        // recalculation which can be expensive on pages with a lot of elements.
        .set('selectstart', {
          handler: this._preventDefaultWhileDragging,
          options: activeCapturingEventOptions
        }); // We don't have to bind a move event for touch drag sequences, because
        // we already have a persistent global one bound from `registerDragItem`.


        if (!isTouchEvent) {
          this._globalListeners.set('mousemove', {
            handler: e => this.pointerMove.next(e),
            options: activeCapturingEventOptions
          });
        }

        this._ngZone.runOutsideAngular(() => {
          this._globalListeners.forEach((config, name) => {
            this._document.addEventListener(name, config.handler, config.options);
          });
        });
      }
    }
    /** Stops dragging a drag item instance. */


    stopDragging(drag) {
      const index = this._activeDragInstances.indexOf(drag);

      if (index > -1) {
        this._activeDragInstances.splice(index, 1);

        if (this._activeDragInstances.length === 0) {
          this._clearGlobalListeners();
        }
      }
    }
    /** Gets whether a drag item instance is currently being dragged. */


    isDragging(drag) {
      return this._activeDragInstances.indexOf(drag) > -1;
    }
    /**
     * Gets a stream that will emit when any element on the page is scrolled while an item is being
     * dragged.
     * @param shadowRoot Optional shadow root that the current dragging sequence started from.
     *   Top-level listeners won't pick up events coming from the shadow DOM so this parameter can
     *   be used to include an additional top-level listener at the shadow root level.
     */


    scrolled(shadowRoot) {
      const streams = [this.scroll];

      if (shadowRoot && shadowRoot !== this._document) {
        // Note that this is basically the same as `fromEvent` from rjxs, but we do it ourselves,
        // because we want to guarantee that the event is bound outside of the `NgZone`. With
        // `fromEvent` it'll only happen if the subscription is outside the `NgZone`.
        streams.push(new Observable/* Observable */.y(observer => {
          return this._ngZone.runOutsideAngular(() => {
            const eventOptions = true;

            const callback = event => {
              if (this._activeDragInstances.length) {
                observer.next(event);
              }
            };

            shadowRoot.addEventListener('scroll', callback, eventOptions);
            return () => {
              shadowRoot.removeEventListener('scroll', callback, eventOptions);
            };
          });
        }));
      }

      return (0,merge/* merge */.T)(...streams);
    }

    ngOnDestroy() {
      this._dragInstances.forEach(instance => this.removeDragItem(instance));

      this._dropInstances.forEach(instance => this.removeDropContainer(instance));

      this._clearGlobalListeners();

      this.pointerMove.complete();
      this.pointerUp.complete();
    }
    /** Clears out the global event listeners from the `document`. */


    _clearGlobalListeners() {
      this._globalListeners.forEach((config, name) => {
        this._document.removeEventListener(name, config.handler, config.options);
      });

      this._globalListeners.clear();
    }

  }

  DragDropRegistry.ɵfac = function DragDropRegistry_Factory(t) {
    return new (t || DragDropRegistry)(core/* ɵɵinject */.LFG(core/* NgZone */.R0b), core/* ɵɵinject */.LFG(common/* DOCUMENT */.K0));
  };

  DragDropRegistry.ɵprov = core/* ɵɵdefineInjectable */.Yz7({
    factory: function DragDropRegistry_Factory() {
      return new DragDropRegistry(core/* ɵɵinject */.LFG(core/* NgZone */.R0b), core/* ɵɵinject */.LFG(common/* DOCUMENT */.K0));
    },
    token: DragDropRegistry,
    providedIn: "root"
  });
  return DragDropRegistry;
})();

/*#__PURE__*/
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Default configuration to be used when creating a `DragRef`. */


const DEFAULT_CONFIG = {
  dragStartThreshold: 5,
  pointerDirectionChangeThreshold: 5
};
/**
 * Service that allows for drag-and-drop functionality to be attached to DOM elements.
 */

let DragDrop = /*#__PURE__*/(() => {
  class DragDrop {
    constructor(_document, _ngZone, _viewportRuler, _dragDropRegistry) {
      this._document = _document;
      this._ngZone = _ngZone;
      this._viewportRuler = _viewportRuler;
      this._dragDropRegistry = _dragDropRegistry;
    }
    /**
     * Turns an element into a draggable item.
     * @param element Element to which to attach the dragging functionality.
     * @param config Object used to configure the dragging behavior.
     */


    createDrag(element, config = DEFAULT_CONFIG) {
      return new DragRef(element, config, this._document, this._ngZone, this._viewportRuler, this._dragDropRegistry);
    }
    /**
     * Turns an element into a drop list.
     * @param element Element to which to attach the drop list functionality.
     */


    createDropList(element) {
      return new DropListRef(element, this._dragDropRegistry, this._document, this._ngZone, this._viewportRuler);
    }

  }

  DragDrop.ɵfac = function DragDrop_Factory(t) {
    return new (t || DragDrop)(core/* ɵɵinject */.LFG(common/* DOCUMENT */.K0), core/* ɵɵinject */.LFG(core/* NgZone */.R0b), core/* ɵɵinject */.LFG(scrolling/* ViewportRuler */.rL), core/* ɵɵinject */.LFG(DragDropRegistry));
  };

  DragDrop.ɵprov = core/* ɵɵdefineInjectable */.Yz7({
    factory: function DragDrop_Factory() {
      return new DragDrop(core/* ɵɵinject */.LFG(common/* DOCUMENT */.K0), core/* ɵɵinject */.LFG(core/* NgZone */.R0b), core/* ɵɵinject */.LFG(scrolling/* ViewportRuler */.rL), core/* ɵɵinject */.LFG(DragDropRegistry));
    },
    token: DragDrop,
    providedIn: "root"
  });
  return DragDrop;
})();

/*#__PURE__*/
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Injection token that can be used for a `CdkDrag` to provide itself as a parent to the
 * drag-specific child directive (`CdkDragHandle`, `CdkDragPreview` etc.). Used primarily
 * to avoid circular imports.
 * @docs-private
 */


const CDK_DRAG_PARENT = /*#__PURE__*/new core/* InjectionToken */.OlP('CDK_DRAG_PARENT');
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

/**
 * Injection token that can be used to reference instances of `CdkDropListGroup`. It serves as
 * alternative token to the actual `CdkDropListGroup` class which could cause unnecessary
 * retention of the class and its directive metadata.
 */

const CDK_DROP_LIST_GROUP = /*#__PURE__*/new core/* InjectionToken */.OlP('CdkDropListGroup');
/**
 * Declaratively connects sibling `cdkDropList` instances together. All of the `cdkDropList`
 * elements that are placed inside a `cdkDropListGroup` will be connected to each other
 * automatically. Can be used as an alternative to the `cdkDropListConnectedTo` input
 * from `cdkDropList`.
 */

let CdkDropListGroup = /*#__PURE__*/(() => {
  class CdkDropListGroup {
    constructor() {
      /** Drop lists registered inside the group. */
      this._items = new Set();
      this._disabled = false;
    }
    /** Whether starting a dragging sequence from inside this group is disabled. */


    get disabled() {
      return this._disabled;
    }

    set disabled(value) {
      this._disabled = (0,coercion/* coerceBooleanProperty */.Ig)(value);
    }

    ngOnDestroy() {
      this._items.clear();
    }

  }

  CdkDropListGroup.ɵfac = function CdkDropListGroup_Factory(t) {
    return new (t || CdkDropListGroup)();
  };

  CdkDropListGroup.ɵdir = /*@__PURE__*/core/* ɵɵdefineDirective */.lG2({
    type: CdkDropListGroup,
    selectors: [["", "cdkDropListGroup", ""]],
    inputs: {
      disabled: ["cdkDropListGroupDisabled", "disabled"]
    },
    exportAs: ["cdkDropListGroup"],
    features: [core/* ɵɵProvidersFeature */._Bn([{
      provide: CDK_DROP_LIST_GROUP,
      useExisting: CdkDropListGroup
    }])]
  });
  return CdkDropListGroup;
})();

/*#__PURE__*/
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Injection token that can be used to configure the
 * behavior of the drag&drop-related components.
 */


const CDK_DRAG_CONFIG = /*#__PURE__*/new core/* InjectionToken */.OlP('CDK_DRAG_CONFIG');
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Asserts that a particular node is an element.
 * @param node Node to be checked.
 * @param name Name to attach to the error message.
 */

function assertElementNode(node, name) {
  if (node.nodeType !== 1) {
    throw Error(`${name} must be attached to an element node. ` + `Currently attached to "${node.nodeName}".`);
  }
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Counter used to generate unique ids for drop zones. */


let _uniqueIdCounter = 0;
/**
 * Injection token that can be used to reference instances of `CdkDropList`. It serves as
 * alternative token to the actual `CdkDropList` class which could cause unnecessary
 * retention of the class and its directive metadata.
 */

const CDK_DROP_LIST = /*#__PURE__*/new core/* InjectionToken */.OlP('CdkDropList');
const ɵ0 = undefined;
/** Container that wraps a set of draggable items. */

let CdkDropList = /*#__PURE__*/(() => {
  class CdkDropList {
    constructor(
    /** Element that the drop list is attached to. */
    element, dragDrop, _changeDetectorRef, _scrollDispatcher, _dir, _group, config) {
      this.element = element;
      this._changeDetectorRef = _changeDetectorRef;
      this._scrollDispatcher = _scrollDispatcher;
      this._dir = _dir;
      this._group = _group;
      /** Emits when the list has been destroyed. */

      this._destroyed = new internal_Subject/* Subject */.xQ();
      /**
       * Other draggable containers that this container is connected to and into which the
       * container's items can be transferred. Can either be references to other drop containers,
       * or their unique IDs.
       */

      this.connectedTo = [];
      /**
       * Unique ID for the drop zone. Can be used as a reference
       * in the `connectedTo` of another `CdkDropList`.
       */

      this.id = `cdk-drop-list-${_uniqueIdCounter++}`;
      /**
       * Function that is used to determine whether an item
       * is allowed to be moved into a drop container.
       */

      this.enterPredicate = () => true;
      /** Functions that is used to determine whether an item can be sorted into a particular index. */


      this.sortPredicate = () => true;
      /** Emits when the user drops an item inside the container. */


      this.dropped = new core/* EventEmitter */.vpe();
      /**
       * Emits when the user has moved a new drag item into this container.
       */

      this.entered = new core/* EventEmitter */.vpe();
      /**
       * Emits when the user removes an item from the container
       * by dragging it into another container.
       */

      this.exited = new core/* EventEmitter */.vpe();
      /** Emits as the user is swapping items while actively dragging. */

      this.sorted = new core/* EventEmitter */.vpe();
      /**
       * Keeps track of the items that are registered with this container. Historically we used to
       * do this with a `ContentChildren` query, however queries don't handle transplanted views very
       * well which means that we can't handle cases like dragging the headers of a `mat-table`
       * correctly. What we do instead is to have the items register themselves with the container
       * and then we sort them based on their position in the DOM.
       */

      this._unsortedItems = new Set();

      if (typeof ngDevMode === 'undefined' || ngDevMode) {
        assertElementNode(element.nativeElement, 'cdkDropList');
      }

      this._dropListRef = dragDrop.createDropList(element);
      this._dropListRef.data = this;

      if (config) {
        this._assignDefaults(config);
      }

      this._dropListRef.enterPredicate = (drag, drop) => {
        return this.enterPredicate(drag.data, drop.data);
      };

      this._dropListRef.sortPredicate = (index, drag, drop) => {
        return this.sortPredicate(index, drag.data, drop.data);
      };

      this._setupInputSyncSubscription(this._dropListRef);

      this._handleEvents(this._dropListRef);

      CdkDropList._dropLists.push(this);

      if (_group) {
        _group._items.add(this);
      }
    }
    /** Whether starting a dragging sequence from this container is disabled. */


    get disabled() {
      return this._disabled || !!this._group && this._group.disabled;
    }

    set disabled(value) {
      // Usually we sync the directive and ref state right before dragging starts, in order to have
      // a single point of failure and to avoid having to use setters for everything. `disabled` is
      // a special case, because it can prevent the `beforeStarted` event from firing, which can lock
      // the user in a disabled state, so we also need to sync it as it's being set.
      this._dropListRef.disabled = this._disabled = (0,coercion/* coerceBooleanProperty */.Ig)(value);
    }
    /** Registers an items with the drop list. */


    addItem(item) {
      this._unsortedItems.add(item);

      if (this._dropListRef.isDragging()) {
        this._syncItemsWithRef();
      }
    }
    /** Removes an item from the drop list. */


    removeItem(item) {
      this._unsortedItems.delete(item);

      if (this._dropListRef.isDragging()) {
        this._syncItemsWithRef();
      }
    }
    /** Gets the registered items in the list, sorted by their position in the DOM. */


    getSortedItems() {
      return Array.from(this._unsortedItems).sort((a, b) => {
        const documentPosition = a._dragRef.getVisibleElement().compareDocumentPosition(b._dragRef.getVisibleElement()); // `compareDocumentPosition` returns a bitmask so we have to use a bitwise operator.
        // https://developer.mozilla.org/en-US/docs/Web/API/Node/compareDocumentPosition
        // tslint:disable-next-line:no-bitwise


        return documentPosition & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1;
      });
    }

    ngOnDestroy() {
      const index = CdkDropList._dropLists.indexOf(this);

      if (index > -1) {
        CdkDropList._dropLists.splice(index, 1);
      }

      if (this._group) {
        this._group._items.delete(this);
      }

      this._unsortedItems.clear();

      this._dropListRef.dispose();

      this._destroyed.next();

      this._destroyed.complete();
    }
    /** Syncs the inputs of the CdkDropList with the options of the underlying DropListRef. */


    _setupInputSyncSubscription(ref) {
      if (this._dir) {
        this._dir.change.pipe((0,startWith/* startWith */.O)(this._dir.value), (0,takeUntil/* takeUntil */.R)(this._destroyed)).subscribe(value => ref.withDirection(value));
      }

      ref.beforeStarted.subscribe(() => {
        const siblings = (0,coercion/* coerceArray */.Eq)(this.connectedTo).map(drop => {
          if (typeof drop === 'string') {
            const correspondingDropList = CdkDropList._dropLists.find(list => list.id === drop);

            if (!correspondingDropList && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              console.warn(`CdkDropList could not find connected drop list with id "${drop}"`);
            }

            return correspondingDropList;
          }

          return drop;
        });

        if (this._group) {
          this._group._items.forEach(drop => {
            if (siblings.indexOf(drop) === -1) {
              siblings.push(drop);
            }
          });
        } // Note that we resolve the scrollable parents here so that we delay the resolution
        // as long as possible, ensuring that the element is in its final place in the DOM.


        if (!this._scrollableParentsResolved) {
          const scrollableParents = this._scrollDispatcher.getAncestorScrollContainers(this.element).map(scrollable => scrollable.getElementRef().nativeElement);

          this._dropListRef.withScrollableParents(scrollableParents); // Only do this once since it involves traversing the DOM and the parents
          // shouldn't be able to change without the drop list being destroyed.


          this._scrollableParentsResolved = true;
        }

        ref.disabled = this.disabled;
        ref.lockAxis = this.lockAxis;
        ref.sortingDisabled = (0,coercion/* coerceBooleanProperty */.Ig)(this.sortingDisabled);
        ref.autoScrollDisabled = (0,coercion/* coerceBooleanProperty */.Ig)(this.autoScrollDisabled);
        ref.autoScrollStep = (0,coercion/* coerceNumberProperty */.su)(this.autoScrollStep, 2);
        ref.connectedTo(siblings.filter(drop => drop && drop !== this).map(list => list._dropListRef)).withOrientation(this.orientation);
      });
    }
    /** Handles events from the underlying DropListRef. */


    _handleEvents(ref) {
      ref.beforeStarted.subscribe(() => {
        this._syncItemsWithRef();

        this._changeDetectorRef.markForCheck();
      });
      ref.entered.subscribe(event => {
        this.entered.emit({
          container: this,
          item: event.item.data,
          currentIndex: event.currentIndex
        });
      });
      ref.exited.subscribe(event => {
        this.exited.emit({
          container: this,
          item: event.item.data
        });

        this._changeDetectorRef.markForCheck();
      });
      ref.sorted.subscribe(event => {
        this.sorted.emit({
          previousIndex: event.previousIndex,
          currentIndex: event.currentIndex,
          container: this,
          item: event.item.data
        });
      });
      ref.dropped.subscribe(event => {
        this.dropped.emit({
          previousIndex: event.previousIndex,
          currentIndex: event.currentIndex,
          previousContainer: event.previousContainer.data,
          container: event.container.data,
          item: event.item.data,
          isPointerOverContainer: event.isPointerOverContainer,
          distance: event.distance,
          dropPoint: event.dropPoint
        }); // Mark for check since all of these events run outside of change
        // detection and we're not guaranteed for something else to have triggered it.

        this._changeDetectorRef.markForCheck();
      });
    }
    /** Assigns the default input values based on a provided config object. */


    _assignDefaults(config) {
      const {
        lockAxis,
        draggingDisabled,
        sortingDisabled,
        listAutoScrollDisabled,
        listOrientation
      } = config;
      this.disabled = draggingDisabled == null ? false : draggingDisabled;
      this.sortingDisabled = sortingDisabled == null ? false : sortingDisabled;
      this.autoScrollDisabled = listAutoScrollDisabled == null ? false : listAutoScrollDisabled;
      this.orientation = listOrientation || 'vertical';

      if (lockAxis) {
        this.lockAxis = lockAxis;
      }
    }
    /** Syncs up the registered drag items with underlying drop list ref. */


    _syncItemsWithRef() {
      this._dropListRef.withItems(this.getSortedItems().map(item => item._dragRef));
    }

  }

  CdkDropList.ɵfac = function CdkDropList_Factory(t) {
    return new (t || CdkDropList)(core/* ɵɵdirectiveInject */.Y36(core/* ElementRef */.SBq), core/* ɵɵdirectiveInject */.Y36(DragDrop), core/* ɵɵdirectiveInject */.Y36(core/* ChangeDetectorRef */.sBO), core/* ɵɵdirectiveInject */.Y36(scrolling/* ScrollDispatcher */.mF), core/* ɵɵdirectiveInject */.Y36(bidi/* Directionality */.Is, 8), core/* ɵɵdirectiveInject */.Y36(CDK_DROP_LIST_GROUP, 12), core/* ɵɵdirectiveInject */.Y36(CDK_DRAG_CONFIG, 8));
  };

  CdkDropList.ɵdir = /*@__PURE__*/core/* ɵɵdefineDirective */.lG2({
    type: CdkDropList,
    selectors: [["", "cdkDropList", ""], ["cdk-drop-list"]],
    hostAttrs: [1, "cdk-drop-list"],
    hostVars: 7,
    hostBindings: function CdkDropList_HostBindings(rf, ctx) {
      if (rf & 2) {
        core/* ɵɵattribute */.uIk("id", ctx.id);
        core/* ɵɵclassProp */.ekj("cdk-drop-list-disabled", ctx.disabled)("cdk-drop-list-dragging", ctx._dropListRef.isDragging())("cdk-drop-list-receiving", ctx._dropListRef.isReceiving());
      }
    },
    inputs: {
      connectedTo: ["cdkDropListConnectedTo", "connectedTo"],
      id: "id",
      enterPredicate: ["cdkDropListEnterPredicate", "enterPredicate"],
      sortPredicate: ["cdkDropListSortPredicate", "sortPredicate"],
      disabled: ["cdkDropListDisabled", "disabled"],
      sortingDisabled: ["cdkDropListSortingDisabled", "sortingDisabled"],
      autoScrollDisabled: ["cdkDropListAutoScrollDisabled", "autoScrollDisabled"],
      orientation: ["cdkDropListOrientation", "orientation"],
      lockAxis: ["cdkDropListLockAxis", "lockAxis"],
      data: ["cdkDropListData", "data"],
      autoScrollStep: ["cdkDropListAutoScrollStep", "autoScrollStep"]
    },
    outputs: {
      dropped: "cdkDropListDropped",
      entered: "cdkDropListEntered",
      exited: "cdkDropListExited",
      sorted: "cdkDropListSorted"
    },
    exportAs: ["cdkDropList"],
    features: [core/* ɵɵProvidersFeature */._Bn([// Prevent child drop lists from picking up the same group as their parent.
    {
      provide: CDK_DROP_LIST_GROUP,
      useValue: ɵ0
    }, {
      provide: CDK_DROP_LIST,
      useExisting: CdkDropList
    }])]
  });
  /** Keeps track of the drop lists that are currently on the page. */

  CdkDropList._dropLists = [];
  return CdkDropList;
})();

/*#__PURE__*/
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Injection token that can be used to reference instances of `CdkDragHandle`. It serves as
 * alternative token to the actual `CdkDragHandle` class which could cause unnecessary
 * retention of the class and its directive metadata.
 */


const CDK_DRAG_HANDLE = /*#__PURE__*/new core/* InjectionToken */.OlP('CdkDragHandle');
/** Handle that can be used to drag a CdkDrag instance. */

let CdkDragHandle = /*#__PURE__*/(() => {
  class CdkDragHandle {
    constructor(element, parentDrag) {
      this.element = element;
      /** Emits when the state of the handle has changed. */

      this._stateChanges = new internal_Subject/* Subject */.xQ();
      this._disabled = false;

      if (typeof ngDevMode === 'undefined' || ngDevMode) {
        assertElementNode(element.nativeElement, 'cdkDragHandle');
      }

      this._parentDrag = parentDrag;
    }
    /** Whether starting to drag through this handle is disabled. */


    get disabled() {
      return this._disabled;
    }

    set disabled(value) {
      this._disabled = (0,coercion/* coerceBooleanProperty */.Ig)(value);

      this._stateChanges.next(this);
    }

    ngOnDestroy() {
      this._stateChanges.complete();
    }

  }

  CdkDragHandle.ɵfac = function CdkDragHandle_Factory(t) {
    return new (t || CdkDragHandle)(core/* ɵɵdirectiveInject */.Y36(core/* ElementRef */.SBq), core/* ɵɵdirectiveInject */.Y36(CDK_DRAG_PARENT, 12));
  };

  CdkDragHandle.ɵdir = /*@__PURE__*/core/* ɵɵdefineDirective */.lG2({
    type: CdkDragHandle,
    selectors: [["", "cdkDragHandle", ""]],
    hostAttrs: [1, "cdk-drag-handle"],
    inputs: {
      disabled: ["cdkDragHandleDisabled", "disabled"]
    },
    features: [core/* ɵɵProvidersFeature */._Bn([{
      provide: CDK_DRAG_HANDLE,
      useExisting: CdkDragHandle
    }])]
  });
  return CdkDragHandle;
})();

/*#__PURE__*/
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Injection token that can be used to reference instances of `CdkDragPlaceholder`. It serves as
 * alternative token to the actual `CdkDragPlaceholder` class which could cause unnecessary
 * retention of the class and its directive metadata.
 */


const CDK_DRAG_PLACEHOLDER = /*#__PURE__*/new core/* InjectionToken */.OlP('CdkDragPlaceholder');
/**
 * Element that will be used as a template for the placeholder of a CdkDrag when
 * it is being dragged. The placeholder is displayed in place of the element being dragged.
 */

let CdkDragPlaceholder = /*#__PURE__*/(() => {
  class CdkDragPlaceholder {
    constructor(templateRef) {
      this.templateRef = templateRef;
    }

  }

  CdkDragPlaceholder.ɵfac = function CdkDragPlaceholder_Factory(t) {
    return new (t || CdkDragPlaceholder)(core/* ɵɵdirectiveInject */.Y36(core/* TemplateRef */.Rgc));
  };

  CdkDragPlaceholder.ɵdir = /*@__PURE__*/core/* ɵɵdefineDirective */.lG2({
    type: CdkDragPlaceholder,
    selectors: [["ng-template", "cdkDragPlaceholder", ""]],
    inputs: {
      data: "data"
    },
    features: [core/* ɵɵProvidersFeature */._Bn([{
      provide: CDK_DRAG_PLACEHOLDER,
      useExisting: CdkDragPlaceholder
    }])]
  });
  return CdkDragPlaceholder;
})();

/*#__PURE__*/
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Injection token that can be used to reference instances of `CdkDragPreview`. It serves as
 * alternative token to the actual `CdkDragPreview` class which could cause unnecessary
 * retention of the class and its directive metadata.
 */


const CDK_DRAG_PREVIEW = /*#__PURE__*/new core/* InjectionToken */.OlP('CdkDragPreview');
/**
 * Element that will be used as a template for the preview
 * of a CdkDrag when it is being dragged.
 */

let CdkDragPreview = /*#__PURE__*/(() => {
  class CdkDragPreview {
    constructor(templateRef) {
      this.templateRef = templateRef;
      this._matchSize = false;
    }
    /** Whether the preview should preserve the same size as the item that is being dragged. */


    get matchSize() {
      return this._matchSize;
    }

    set matchSize(value) {
      this._matchSize = (0,coercion/* coerceBooleanProperty */.Ig)(value);
    }

  }

  CdkDragPreview.ɵfac = function CdkDragPreview_Factory(t) {
    return new (t || CdkDragPreview)(core/* ɵɵdirectiveInject */.Y36(core/* TemplateRef */.Rgc));
  };

  CdkDragPreview.ɵdir = /*@__PURE__*/core/* ɵɵdefineDirective */.lG2({
    type: CdkDragPreview,
    selectors: [["ng-template", "cdkDragPreview", ""]],
    inputs: {
      matchSize: "matchSize",
      data: "data"
    },
    features: [core/* ɵɵProvidersFeature */._Bn([{
      provide: CDK_DRAG_PREVIEW,
      useExisting: CdkDragPreview
    }])]
  });
  return CdkDragPreview;
})();

/*#__PURE__*/
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


const DRAG_HOST_CLASS = 'cdk-drag';
/** Element that can be moved inside a CdkDropList container. */

let CdkDrag = /*#__PURE__*/(() => {
  class CdkDrag {
    constructor(
    /** Element that the draggable is attached to. */
    element,
    /** Droppable container that the draggable is a part of. */
    dropContainer,
    /**
     * @deprecated `_document` parameter no longer being used and will be removed.
     * @breaking-change 12.0.0
     */
    _document, _ngZone, _viewContainerRef, config, _dir, dragDrop, _changeDetectorRef, _selfHandle, _parentDrag) {
      this.element = element;
      this.dropContainer = dropContainer;
      this._ngZone = _ngZone;
      this._viewContainerRef = _viewContainerRef;
      this._dir = _dir;
      this._changeDetectorRef = _changeDetectorRef;
      this._selfHandle = _selfHandle;
      this._parentDrag = _parentDrag;
      this._destroyed = new internal_Subject/* Subject */.xQ();
      /** Emits when the user starts dragging the item. */

      this.started = new core/* EventEmitter */.vpe();
      /** Emits when the user has released a drag item, before any animations have started. */

      this.released = new core/* EventEmitter */.vpe();
      /** Emits when the user stops dragging an item in the container. */

      this.ended = new core/* EventEmitter */.vpe();
      /** Emits when the user has moved the item into a new container. */

      this.entered = new core/* EventEmitter */.vpe();
      /** Emits when the user removes the item its container by dragging it into another container. */

      this.exited = new core/* EventEmitter */.vpe();
      /** Emits when the user drops the item inside a container. */

      this.dropped = new core/* EventEmitter */.vpe();
      /**
       * Emits as the user is dragging the item. Use with caution,
       * because this event will fire for every pixel that the user has dragged.
       */

      this.moved = new Observable/* Observable */.y(observer => {
        const subscription = this._dragRef.moved.pipe((0,operators_map/* map */.U)(movedEvent => ({
          source: this,
          pointerPosition: movedEvent.pointerPosition,
          event: movedEvent.event,
          delta: movedEvent.delta,
          distance: movedEvent.distance
        }))).subscribe(observer);

        return () => {
          subscription.unsubscribe();
        };
      });
      this._dragRef = dragDrop.createDrag(element, {
        dragStartThreshold: config && config.dragStartThreshold != null ? config.dragStartThreshold : 5,
        pointerDirectionChangeThreshold: config && config.pointerDirectionChangeThreshold != null ? config.pointerDirectionChangeThreshold : 5,
        zIndex: config === null || config === void 0 ? void 0 : config.zIndex
      });
      this._dragRef.data = this; // We have to keep track of the drag instances in order to be able to match an element to
      // a drag instance. We can't go through the global registry of `DragRef`, because the root
      // element could be different.

      CdkDrag._dragInstances.push(this);

      if (config) {
        this._assignDefaults(config);
      } // Note that usually the container is assigned when the drop list is picks up the item, but in
      // some cases (mainly transplanted views with OnPush, see #18341) we may end up in a situation
      // where there are no items on the first change detection pass, but the items get picked up as
      // soon as the user triggers another pass by dragging. This is a problem, because the item would
      // have to switch from standalone mode to drag mode in the middle of the dragging sequence which
      // is too late since the two modes save different kinds of information. We work around it by
      // assigning the drop container both from here and the list.


      if (dropContainer) {
        this._dragRef._withDropContainer(dropContainer._dropListRef);

        dropContainer.addItem(this);
      }

      this._syncInputs(this._dragRef);

      this._handleEvents(this._dragRef);
    }
    /** Whether starting to drag this element is disabled. */


    get disabled() {
      return this._disabled || this.dropContainer && this.dropContainer.disabled;
    }

    set disabled(value) {
      this._disabled = (0,coercion/* coerceBooleanProperty */.Ig)(value);
      this._dragRef.disabled = this._disabled;
    }
    /**
     * Returns the element that is being used as a placeholder
     * while the current element is being dragged.
     */


    getPlaceholderElement() {
      return this._dragRef.getPlaceholderElement();
    }
    /** Returns the root draggable element. */


    getRootElement() {
      return this._dragRef.getRootElement();
    }
    /** Resets a standalone drag item to its initial position. */


    reset() {
      this._dragRef.reset();
    }
    /**
     * Gets the pixel coordinates of the draggable outside of a drop container.
     */


    getFreeDragPosition() {
      return this._dragRef.getFreeDragPosition();
    }

    ngAfterViewInit() {
      // Normally this isn't in the zone, but it can cause major performance regressions for apps
      // using `zone-patch-rxjs` because it'll trigger a change detection when it unsubscribes.
      this._ngZone.runOutsideAngular(() => {
        // We need to wait for the zone to stabilize, in order for the reference
        // element to be in the proper place in the DOM. This is mostly relevant
        // for draggable elements inside portals since they get stamped out in
        // their original DOM position and then they get transferred to the portal.
        this._ngZone.onStable.pipe((0,take/* take */.q)(1), (0,takeUntil/* takeUntil */.R)(this._destroyed)).subscribe(() => {
          this._updateRootElement();

          this._setupHandlesListener();

          if (this.freeDragPosition) {
            this._dragRef.setFreeDragPosition(this.freeDragPosition);
          }
        });
      });
    }

    ngOnChanges(changes) {
      const rootSelectorChange = changes['rootElementSelector'];
      const positionChange = changes['freeDragPosition']; // We don't have to react to the first change since it's being
      // handled in `ngAfterViewInit` where it needs to be deferred.

      if (rootSelectorChange && !rootSelectorChange.firstChange) {
        this._updateRootElement();
      } // Skip the first change since it's being handled in `ngAfterViewInit`.


      if (positionChange && !positionChange.firstChange && this.freeDragPosition) {
        this._dragRef.setFreeDragPosition(this.freeDragPosition);
      }
    }

    ngOnDestroy() {
      if (this.dropContainer) {
        this.dropContainer.removeItem(this);
      }

      const index = CdkDrag._dragInstances.indexOf(this);

      if (index > -1) {
        CdkDrag._dragInstances.splice(index, 1);
      } // Unnecessary in most cases, but used to avoid extra change detections with `zone-paths-rxjs`.


      this._ngZone.runOutsideAngular(() => {
        this._destroyed.next();

        this._destroyed.complete();

        this._dragRef.dispose();
      });
    }
    /** Syncs the root element with the `DragRef`. */


    _updateRootElement() {
      const element = this.element.nativeElement;
      const rootElement = this.rootElementSelector ? getClosestMatchingAncestor(element, this.rootElementSelector) : element;

      if (rootElement && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        assertElementNode(rootElement, 'cdkDrag');
      }

      this._dragRef.withRootElement(rootElement || element);
    }
    /** Gets the boundary element, based on the `boundaryElement` value. */


    _getBoundaryElement() {
      const boundary = this.boundaryElement;

      if (!boundary) {
        return null;
      }

      if (typeof boundary === 'string') {
        return getClosestMatchingAncestor(this.element.nativeElement, boundary);
      }

      const element = (0,coercion/* coerceElement */.fI)(boundary);

      if ((typeof ngDevMode === 'undefined' || ngDevMode) && !element.contains(this.element.nativeElement)) {
        throw Error('Draggable element is not inside of the node passed into cdkDragBoundary.');
      }

      return element;
    }
    /** Syncs the inputs of the CdkDrag with the options of the underlying DragRef. */


    _syncInputs(ref) {
      ref.beforeStarted.subscribe(() => {
        if (!ref.isDragging()) {
          const dir = this._dir;
          const dragStartDelay = this.dragStartDelay;
          const placeholder = this._placeholderTemplate ? {
            template: this._placeholderTemplate.templateRef,
            context: this._placeholderTemplate.data,
            viewContainer: this._viewContainerRef
          } : null;
          const preview = this._previewTemplate ? {
            template: this._previewTemplate.templateRef,
            context: this._previewTemplate.data,
            matchSize: this._previewTemplate.matchSize,
            viewContainer: this._viewContainerRef
          } : null;
          ref.disabled = this.disabled;
          ref.lockAxis = this.lockAxis;
          ref.dragStartDelay = typeof dragStartDelay === 'object' && dragStartDelay ? dragStartDelay : (0,coercion/* coerceNumberProperty */.su)(dragStartDelay);
          ref.constrainPosition = this.constrainPosition;
          ref.previewClass = this.previewClass;
          ref.withBoundaryElement(this._getBoundaryElement()).withPlaceholderTemplate(placeholder).withPreviewTemplate(preview).withPreviewContainer(this.previewContainer || 'global');

          if (dir) {
            ref.withDirection(dir.value);
          }
        }
      }); // This only needs to be resolved once.

      ref.beforeStarted.pipe((0,take/* take */.q)(1)).subscribe(() => {
        var _a, _b; // If we managed to resolve a parent through DI, use it.


        if (this._parentDrag) {
          ref.withParent(this._parentDrag._dragRef);
          return;
        } // Otherwise fall back to resolving the parent by looking up the DOM. This can happen if
        // the item was projected into another item by something like `ngTemplateOutlet`.


        let parent = this.element.nativeElement.parentElement;

        while (parent) {
          // `classList` needs to be null checked, because IE doesn't have it on some elements.
          if ((_a = parent.classList) === null || _a === void 0 ? void 0 : _a.contains(DRAG_HOST_CLASS)) {
            ref.withParent(((_b = CdkDrag._dragInstances.find(drag => {
              return drag.element.nativeElement === parent;
            })) === null || _b === void 0 ? void 0 : _b._dragRef) || null);
            break;
          }

          parent = parent.parentElement;
        }
      });
    }
    /** Handles the events from the underlying `DragRef`. */


    _handleEvents(ref) {
      ref.started.subscribe(() => {
        this.started.emit({
          source: this
        }); // Since all of these events run outside of change detection,
        // we need to ensure that everything is marked correctly.

        this._changeDetectorRef.markForCheck();
      });
      ref.released.subscribe(() => {
        this.released.emit({
          source: this
        });
      });
      ref.ended.subscribe(event => {
        this.ended.emit({
          source: this,
          distance: event.distance,
          dropPoint: event.dropPoint
        }); // Since all of these events run outside of change detection,
        // we need to ensure that everything is marked correctly.

        this._changeDetectorRef.markForCheck();
      });
      ref.entered.subscribe(event => {
        this.entered.emit({
          container: event.container.data,
          item: this,
          currentIndex: event.currentIndex
        });
      });
      ref.exited.subscribe(event => {
        this.exited.emit({
          container: event.container.data,
          item: this
        });
      });
      ref.dropped.subscribe(event => {
        this.dropped.emit({
          previousIndex: event.previousIndex,
          currentIndex: event.currentIndex,
          previousContainer: event.previousContainer.data,
          container: event.container.data,
          isPointerOverContainer: event.isPointerOverContainer,
          item: this,
          distance: event.distance,
          dropPoint: event.dropPoint
        });
      });
    }
    /** Assigns the default input values based on a provided config object. */


    _assignDefaults(config) {
      const {
        lockAxis,
        dragStartDelay,
        constrainPosition,
        previewClass,
        boundaryElement,
        draggingDisabled,
        rootElementSelector,
        previewContainer
      } = config;
      this.disabled = draggingDisabled == null ? false : draggingDisabled;
      this.dragStartDelay = dragStartDelay || 0;

      if (lockAxis) {
        this.lockAxis = lockAxis;
      }

      if (constrainPosition) {
        this.constrainPosition = constrainPosition;
      }

      if (previewClass) {
        this.previewClass = previewClass;
      }

      if (boundaryElement) {
        this.boundaryElement = boundaryElement;
      }

      if (rootElementSelector) {
        this.rootElementSelector = rootElementSelector;
      }

      if (previewContainer) {
        this.previewContainer = previewContainer;
      }
    }
    /** Sets up the listener that syncs the handles with the drag ref. */


    _setupHandlesListener() {
      // Listen for any newly-added handles.
      this._handles.changes.pipe((0,startWith/* startWith */.O)(this._handles), // Sync the new handles with the DragRef.
      (0,operators_tap/* tap */.b)(handles => {
        const childHandleElements = handles.filter(handle => handle._parentDrag === this).map(handle => handle.element); // Usually handles are only allowed to be a descendant of the drag element, but if
        // the consumer defined a different drag root, we should allow the drag element
        // itself to be a handle too.

        if (this._selfHandle && this.rootElementSelector) {
          childHandleElements.push(this.element);
        }

        this._dragRef.withHandles(childHandleElements);
      }), // Listen if the state of any of the handles changes.
      (0,switchMap/* switchMap */.w)(handles => {
        return (0,merge/* merge */.T)(...handles.map(item => {
          return item._stateChanges.pipe((0,startWith/* startWith */.O)(item));
        }));
      }), (0,takeUntil/* takeUntil */.R)(this._destroyed)).subscribe(handleInstance => {
        // Enabled/disable the handle that changed in the DragRef.
        const dragRef = this._dragRef;
        const handle = handleInstance.element.nativeElement;
        handleInstance.disabled ? dragRef.disableHandle(handle) : dragRef.enableHandle(handle);
      });
    }

  }

  CdkDrag.ɵfac = function CdkDrag_Factory(t) {
    return new (t || CdkDrag)(core/* ɵɵdirectiveInject */.Y36(core/* ElementRef */.SBq), core/* ɵɵdirectiveInject */.Y36(CDK_DROP_LIST, 12), core/* ɵɵdirectiveInject */.Y36(common/* DOCUMENT */.K0), core/* ɵɵdirectiveInject */.Y36(core/* NgZone */.R0b), core/* ɵɵdirectiveInject */.Y36(core/* ViewContainerRef */.s_b), core/* ɵɵdirectiveInject */.Y36(CDK_DRAG_CONFIG, 8), core/* ɵɵdirectiveInject */.Y36(bidi/* Directionality */.Is, 8), core/* ɵɵdirectiveInject */.Y36(DragDrop), core/* ɵɵdirectiveInject */.Y36(core/* ChangeDetectorRef */.sBO), core/* ɵɵdirectiveInject */.Y36(CDK_DRAG_HANDLE, 10), core/* ɵɵdirectiveInject */.Y36(CDK_DRAG_PARENT, 12));
  };

  CdkDrag.ɵdir = /*@__PURE__*/core/* ɵɵdefineDirective */.lG2({
    type: CdkDrag,
    selectors: [["", "cdkDrag", ""]],
    contentQueries: function CdkDrag_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        core/* ɵɵcontentQuery */.Suo(dirIndex, CDK_DRAG_PREVIEW, 5);
        core/* ɵɵcontentQuery */.Suo(dirIndex, CDK_DRAG_PLACEHOLDER, 5);
        core/* ɵɵcontentQuery */.Suo(dirIndex, CDK_DRAG_HANDLE, 5);
      }

      if (rf & 2) {
        let _t;

        core/* ɵɵqueryRefresh */.iGM(_t = core/* ɵɵloadQuery */.CRH()) && (ctx._previewTemplate = _t.first);
        core/* ɵɵqueryRefresh */.iGM(_t = core/* ɵɵloadQuery */.CRH()) && (ctx._placeholderTemplate = _t.first);
        core/* ɵɵqueryRefresh */.iGM(_t = core/* ɵɵloadQuery */.CRH()) && (ctx._handles = _t);
      }
    },
    hostAttrs: [1, "cdk-drag"],
    hostVars: 4,
    hostBindings: function CdkDrag_HostBindings(rf, ctx) {
      if (rf & 2) {
        core/* ɵɵclassProp */.ekj("cdk-drag-disabled", ctx.disabled)("cdk-drag-dragging", ctx._dragRef.isDragging());
      }
    },
    inputs: {
      disabled: ["cdkDragDisabled", "disabled"],
      dragStartDelay: ["cdkDragStartDelay", "dragStartDelay"],
      lockAxis: ["cdkDragLockAxis", "lockAxis"],
      constrainPosition: ["cdkDragConstrainPosition", "constrainPosition"],
      previewClass: ["cdkDragPreviewClass", "previewClass"],
      boundaryElement: ["cdkDragBoundary", "boundaryElement"],
      rootElementSelector: ["cdkDragRootElement", "rootElementSelector"],
      previewContainer: ["cdkDragPreviewContainer", "previewContainer"],
      data: ["cdkDragData", "data"],
      freeDragPosition: ["cdkDragFreeDragPosition", "freeDragPosition"]
    },
    outputs: {
      started: "cdkDragStarted",
      released: "cdkDragReleased",
      ended: "cdkDragEnded",
      entered: "cdkDragEntered",
      exited: "cdkDragExited",
      dropped: "cdkDragDropped",
      moved: "cdkDragMoved"
    },
    exportAs: ["cdkDrag"],
    features: [core/* ɵɵProvidersFeature */._Bn([{
      provide: CDK_DRAG_PARENT,
      useExisting: CdkDrag
    }]), core/* ɵɵNgOnChangesFeature */.TTD]
  });
  CdkDrag._dragInstances = [];
  return CdkDrag;
})();

/*#__PURE__*/
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/** Gets the closest ancestor of an element that matches a selector. */


function getClosestMatchingAncestor(element, selector) {
  let currentElement = element.parentElement;

  while (currentElement) {
    // IE doesn't support `matches` so we have to fall back to `msMatchesSelector`.
    if (currentElement.matches ? currentElement.matches(selector) : currentElement.msMatchesSelector(selector)) {
      return currentElement;
    }

    currentElement = currentElement.parentElement;
  }

  return null;
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


let DragDropModule = /*#__PURE__*/(() => {
  class DragDropModule {}

  DragDropModule.ɵfac = function DragDropModule_Factory(t) {
    return new (t || DragDropModule)();
  };

  DragDropModule.ɵmod = /*@__PURE__*/core/* ɵɵdefineNgModule */.oAB({
    type: DragDropModule
  });
  DragDropModule.ɵinj = /*@__PURE__*/core/* ɵɵdefineInjector */.cJS({
    providers: [DragDrop],
    imports: [scrolling/* CdkScrollableModule */.ZD]
  });
  return DragDropModule;
})();

/*#__PURE__*/
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/*#__PURE__*/
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && core/* ɵɵsetNgModuleScope */.kYT(DragDropModule, {
    declarations: function () {
      return [CdkDropList, CdkDropListGroup, CdkDrag, CdkDragHandle, CdkDragPreview, CdkDragPlaceholder];
    },
    exports: function () {
      return [scrolling/* CdkScrollableModule */.ZD, CdkDropList, CdkDropListGroup, CdkDrag, CdkDragHandle, CdkDragPreview, CdkDragPlaceholder];
    }
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */


 //# sourceMappingURL=drag-drop.js.map

/***/ }),

/***/ 8874:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "e": () => (/* reexport */ reorder_component/* TuiReorderComponent */.e),
  "B": () => (/* reexport */ TuiReorderModule)
});

// EXTERNAL MODULE: ./projects/addon-table/components/reorder/reorder.component.ts
var reorder_component = __webpack_require__(52061);
// EXTERNAL MODULE: ./node_modules/@angular/cdk/fesm2015/drag-drop.js + 3 modules
var drag_drop = __webpack_require__(40070);
// EXTERNAL MODULE: ./node_modules/@angular/common/fesm2015/common.js
var common = __webpack_require__(12057);
// EXTERNAL MODULE: ./projects/cdk/index.ts + 87 modules
var cdk = __webpack_require__(36692);
// EXTERNAL MODULE: ./projects/core/index.ts + 74 modules
var core = __webpack_require__(90987);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var fesm2015_core = __webpack_require__(74788);
;// CONCATENATED MODULE: ./projects/addon-table/components/reorder/reorder.module.ts






let TuiReorderModule = /*#__PURE__*/(() => {
  class TuiReorderModule {}

  TuiReorderModule.ɵfac = function TuiReorderModule_Factory(t) {
    return new (t || TuiReorderModule)();
  };

  TuiReorderModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: TuiReorderModule
  });
  TuiReorderModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[common/* CommonModule */.ez, drag_drop/* DragDropModule */._t, core.TuiSvgModule, core.TuiButtonModule, cdk.TuiPreventDefaultModule]]
  });
  return TuiReorderModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(TuiReorderModule, {
    declarations: [reorder_component/* TuiReorderComponent */.e],
    imports: [common/* CommonModule */.ez, drag_drop/* DragDropModule */._t, core.TuiSvgModule, core.TuiButtonModule, cdk.TuiPreventDefaultModule],
    exports: [reorder_component/* TuiReorderComponent */.e]
  });
})();
;// CONCATENATED MODULE: ./projects/addon-table/components/reorder/index.ts



/***/ }),

/***/ 52061:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "e": () => (/* binding */ TuiReorderComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(64762);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(40070);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(74788);
/* harmony import */ var _taiga_ui_addon_table_tokens__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47119);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(36692);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(12057);
/* harmony import */ var _core_components_svg_svg_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34880);
/* harmony import */ var _core_components_button_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(76189);
/* harmony import */ var _cdk_directives_prevent_default_prevent_default_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13176);













function TuiReorderComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵgetCurrentView"] */ .EpF();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelement"] */ ._UZ(1, "tui-svg", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(3, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵlistener"] */ .NdJ("click", function TuiReorderComponent_div_1_Template_button_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵrestoreView"] */ .CHM(_r3);
      const item_r1 = restoredCtx.$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .oxw();
      return ctx_r2.toggle(item_r1);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA();
  }

  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .hij(" ", item_r1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵclassProp"] */ .ekj("t-button_hidden", !ctx_r0.isEnabled(item_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("title", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(4, 5, ctx_r0.showHideText$))("icon", ctx_r0.getIcon(item_r1));
  }
} // @bad TODO: a11y


class TuiReorderComponent {
  constructor(showHideText$) {
    this.showHideText$ = showHideText$;
    this.items = [];
    this.enabled = [];
    this.itemsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_5__/* .EventEmitter */ .vpe();
    this.enabledChange = new _angular_core__WEBPACK_IMPORTED_MODULE_5__/* .EventEmitter */ .vpe();
  }

  noop() {}

  isEnabled(item) {
    return this.enabled.includes(item);
  }

  getIcon(item) {
    return this.isEnabled(item) ? `tuiIconEyeOpen` : `tuiIconEyeClosed`;
  }

  toggle(toggled) {
    const enabled = this.isEnabled(toggled) ? this.enabled.filter(item => item !== toggled) : this.enabled.concat(toggled);
    this.updateEnabled(enabled);
  }

  drop(event) {
    const items = [...this.items];
    (0,_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__/* .moveItemInArray */ .bA)(items, event.previousIndex, event.currentIndex);
    this.items = items;
    this.itemsChange.emit(items);
    this.updateEnabled(items.filter(item => this.enabled.includes(item)));
  }

  updateEnabled(enabled) {
    this.enabled = enabled;
    this.enabledChange.emit(enabled);
  }

}

TuiReorderComponent.ɵfac = function TuiReorderComponent_Factory(t) {
  return new (t || TuiReorderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdirectiveInject"] */ .Y36(_taiga_ui_addon_table_tokens__WEBPACK_IMPORTED_MODULE_0__/* .TUI_TABLE_SHOW_HIDE_MESSAGE */ .s));
};

TuiReorderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdefineComponent"] */ .Xpm({
  type: TuiReorderComponent,
  selectors: [["tui-reorder"]],
  hostBindings: function TuiReorderComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵlistener"] */ .NdJ("focusout.stop", function TuiReorderComponent_focusout_stop_HostBindingHandler() {
        return ctx.noop();
      });
    }
  },
  inputs: {
    items: "items",
    enabled: "enabled"
  },
  outputs: {
    itemsChange: "itemsChange",
    enabledChange: "enabledChange"
  },
  decls: 2,
  vars: 1,
  consts: [["cdkDropList", "", 1, "t-wrapper", 3, "cdkDropListDropped"], ["tabindex", "-1", "cdkDrag", "", "class", "t-item", 4, "ngFor", "ngForOf"], ["tabindex", "-1", "cdkDrag", "", 1, "t-item"], ["src", "tuiIconDrag", 1, "t-icon"], ["type", "button", "tuiIconButton", "", "appearance", "icon", "size", "xs", "tuiPreventDefault", "mousedown", 1, "t-button", 3, "title", "icon", "click"]],
  template: function TuiReorderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵlistener"] */ .NdJ("cdkDropListDropped", function TuiReorderComponent_Template_div_cdkDropListDropped_0_listener($event) {
        return ctx.drop($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplate"] */ .YNc(1, TuiReorderComponent_div_1_Template, 5, 7, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("ngForOf", ctx.items);
    }
  },
  directives: [_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__/* .CdkDropList */ .Wj, _angular_common__WEBPACK_IMPORTED_MODULE_7__/* .NgForOf */ .sg, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__/* .CdkDrag */ .Zt, _core_components_svg_svg_component__WEBPACK_IMPORTED_MODULE_2__/* .TuiSvgComponent */ .P, _core_components_button_button_component__WEBPACK_IMPORTED_MODULE_3__/* .TuiButtonComponent */ .v, _cdk_directives_prevent_default_prevent_default_directive__WEBPACK_IMPORTED_MODULE_4__/* .TuiPreventDefaultDirective */ .A],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__/* .AsyncPipe */ .Ov],
  styles: ["[_nghost-%COMP%]{display:block;font:var(--tui-font-text-s);padding:.5rem 0}.t-item[_ngcontent-%COMP%]{transition-property:background;transition-duration:.3s;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;display:flex;height:2rem;align-items:center;padding:0 .75rem;cursor:ns-resize;background:var(--tui-base-01);outline:none}.t-item[_ngcontent-%COMP%]:hover{background:var(--tui-base-02)}.t-item[_ngcontent-%COMP%]:hover   .t-button[_ngcontent-%COMP%]{opacity:1}.t-icon[_ngcontent-%COMP%]{margin-right:.5rem;color:var(--tui-base-05)}.t-button[_ngcontent-%COMP%]{transition-property:opacity;transition-duration:.3s;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;margin-left:auto;opacity:0}.t-button_hidden[_ngcontent-%COMP%]{opacity:1}.cdk-drag-placeholder[_ngcontent-%COMP%]{opacity:0}.cdk-drag-animating[_ngcontent-%COMP%]{transition:transform .25s cubic-bezier(0,0,.2,1)}.t-wrapper.cdk-drop-list-dragging[_ngcontent-%COMP%]   .t-item[_ngcontent-%COMP%]:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}.t-wrapper.cdk-drop-list-dragging[_ngcontent-%COMP%]   .t-item[_ngcontent-%COMP%]:not(.cdk-drag-placeholder):hover{background:var(--tui-base-01)}.t-wrapper.cdk-drop-list-dragging[_ngcontent-%COMP%]   .t-item[_ngcontent-%COMP%]:not(.cdk-drag-placeholder)   .t-button[_ngcontent-%COMP%]{display:none}"]
});

(0,tslib__WEBPACK_IMPORTED_MODULE_8__/* .__decorate */ .gn)([(0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__.tuiDefaultProp)()], TuiReorderComponent.prototype, "items", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_8__/* .__decorate */ .gn)([(0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__.tuiDefaultProp)()], TuiReorderComponent.prototype, "enabled", void 0);

/***/ }),

/***/ 47119:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "J": () => (/* reexport */ TUI_TABLE_PAGINATION_TEXTS),
  "s": () => (/* reexport */ TUI_TABLE_SHOW_HIDE_MESSAGE)
});

// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var core = __webpack_require__(74788);
// EXTERNAL MODULE: ./projects/i18n/index.ts + 12 modules
var i18n = __webpack_require__(72773);
;// CONCATENATED MODULE: ./projects/addon-table/tokens/i18n.ts


const TUI_TABLE_SHOW_HIDE_MESSAGE = new core/* InjectionToken */.OlP(`[TUI_TABLE_SHOW_HIDE_MESSAGE]: tui-reorder i18n button`, {
  factory: (0,i18n/* tuiExtractI18n */.vv)(`showHideText`)
});
const TUI_TABLE_PAGINATION_TEXTS = new core/* InjectionToken */.OlP(`[TUI_TABLE_PAGINATION_TEXTS]: tui-table-pagination i18n texts`, {
  factory: (0,i18n/* tuiExtractI18n */.vv)(`paginationTexts`)
});
;// CONCATENATED MODULE: ./projects/addon-table/tokens/index.ts


/***/ })

}]);