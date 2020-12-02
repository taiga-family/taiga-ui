(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@angular/cdk/platform', ['exports', '@angular/core', '@angular/common'], factory) :
    (global = global || self, factory((global.ng = global.ng || {}, global.ng.cdk = global.ng.cdk || {}, global.ng.cdk.platform = {}), global.ng.core, global.ng.common));
}(this, (function (exports, i0, common) { 'use strict';

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    // Whether the current platform supports the V8 Break Iterator. The V8 check
    // is necessary to detect all Blink based browsers.
    var hasV8BreakIterator;
    // We need a try/catch around the reference to `Intl`, because accessing it in some cases can
    // cause IE to throw. These cases are tied to particular versions of Windows and can happen if
    // the consumer is providing a polyfilled `Map`. See:
    // https://github.com/Microsoft/ChakraCore/issues/3189
    // https://github.com/angular/components/issues/15687
    try {
        hasV8BreakIterator = (typeof Intl !== 'undefined' && Intl.v8BreakIterator);
    }
    catch (_a) {
        hasV8BreakIterator = false;
    }
    /**
     * Service to detect the current platform by comparing the userAgent strings and
     * checking browser-specific global properties.
     */
    var Platform = /** @class */ (function () {
        /**
         * @breaking-change 8.0.0 remove optional decorator
         */
        function Platform(_platformId) {
            this._platformId = _platformId;
            // We want to use the Angular platform check because if the Document is shimmed
            // without the navigator, the following checks will fail. This is preferred because
            // sometimes the Document may be shimmed without the user's knowledge or intention
            /** Whether the Angular application is being rendered in the browser. */
            this.isBrowser = this._platformId ?
                common.isPlatformBrowser(this._platformId) : typeof document === 'object' && !!document;
            /** Whether the current browser is Microsoft Edge. */
            this.EDGE = this.isBrowser && /(edge)/i.test(navigator.userAgent);
            /** Whether the current rendering engine is Microsoft Trident. */
            this.TRIDENT = this.isBrowser && /(msie|trident)/i.test(navigator.userAgent);
            // EdgeHTML and Trident mock Blink specific things and need to be excluded from this check.
            /** Whether the current rendering engine is Blink. */
            this.BLINK = this.isBrowser && (!!(window.chrome || hasV8BreakIterator) &&
                typeof CSS !== 'undefined' && !this.EDGE && !this.TRIDENT);
            // Webkit is part of the userAgent in EdgeHTML, Blink and Trident. Therefore we need to
            // ensure that Webkit runs standalone and is not used as another engine's base.
            /** Whether the current rendering engine is WebKit. */
            this.WEBKIT = this.isBrowser &&
                /AppleWebKit/i.test(navigator.userAgent) && !this.BLINK && !this.EDGE && !this.TRIDENT;
            /** Whether the current platform is Apple iOS. */
            this.IOS = this.isBrowser && /iPad|iPhone|iPod/.test(navigator.userAgent) &&
                !('MSStream' in window);
            // It's difficult to detect the plain Gecko engine, because most of the browsers identify
            // them self as Gecko-like browsers and modify the userAgent's according to that.
            // Since we only cover one explicit Firefox case, we can simply check for Firefox
            // instead of having an unstable check for Gecko.
            /** Whether the current browser is Firefox. */
            this.FIREFOX = this.isBrowser && /(firefox|minefield)/i.test(navigator.userAgent);
            /** Whether the current platform is Android. */
            // Trident on mobile adds the android platform to the userAgent to trick detections.
            this.ANDROID = this.isBrowser && /android/i.test(navigator.userAgent) && !this.TRIDENT;
            // Safari browsers will include the Safari keyword in their userAgent. Some browsers may fake
            // this and just place the Safari keyword in the userAgent. To be more safe about Safari every
            // Safari browser should also use Webkit as its layout engine.
            /** Whether the current browser is Safari. */
            this.SAFARI = this.isBrowser && /safari/i.test(navigator.userAgent) && this.WEBKIT;
        }
        Platform.decorators = [
            { type: i0.Injectable, args: [{ providedIn: 'root' },] }
        ];
        /** @nocollapse */
        Platform.ctorParameters = function () { return [
            { type: Object, decorators: [{ type: i0.Optional }, { type: i0.Inject, args: [i0.PLATFORM_ID,] }] }
        ]; };
        Platform.ɵprov = i0.ɵɵdefineInjectable({ factory: function Platform_Factory() { return new Platform(i0.ɵɵinject(i0.PLATFORM_ID, 8)); }, token: Platform, providedIn: "root" });
        return Platform;
    }());

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var PlatformModule = /** @class */ (function () {
        function PlatformModule() {
        }
        PlatformModule.decorators = [
            { type: i0.NgModule, args: [{},] }
        ];
        return PlatformModule;
    }());

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /** Cached result Set of input types support by the current browser. */
    var supportedInputTypes;
    /** Types of `<input>` that *might* be supported. */
    var candidateInputTypes = [
        // `color` must come first. Chrome 56 shows a warning if we change the type to `color` after
        // first changing it to something else:
        // The specified value "" does not conform to the required format.
        // The format is "#rrggbb" where rr, gg, bb are two-digit hexadecimal numbers.
        'color',
        'button',
        'checkbox',
        'date',
        'datetime-local',
        'email',
        'file',
        'hidden',
        'image',
        'month',
        'number',
        'password',
        'radio',
        'range',
        'reset',
        'search',
        'submit',
        'tel',
        'text',
        'time',
        'url',
        'week',
    ];
    /** @returns The input types supported by this browser. */
    function getSupportedInputTypes() {
        // Result is cached.
        if (supportedInputTypes) {
            return supportedInputTypes;
        }
        // We can't check if an input type is not supported until we're on the browser, so say that
        // everything is supported when not on the browser. We don't use `Platform` here since it's
        // just a helper function and can't inject it.
        if (typeof document !== 'object' || !document) {
            supportedInputTypes = new Set(candidateInputTypes);
            return supportedInputTypes;
        }
        var featureTestInput = document.createElement('input');
        supportedInputTypes = new Set(candidateInputTypes.filter(function (value) {
            featureTestInput.setAttribute('type', value);
            return featureTestInput.type === value;
        }));
        return supportedInputTypes;
    }

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /** Cached result of whether the user's browser supports passive event listeners. */
    var supportsPassiveEvents;
    /**
     * Checks whether the user's browser supports passive event listeners.
     * See: https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md
     */
    function supportsPassiveEventListeners() {
        if (supportsPassiveEvents == null && typeof window !== 'undefined') {
            try {
                window.addEventListener('test', null, Object.defineProperty({}, 'passive', {
                    get: function () { return supportsPassiveEvents = true; }
                }));
            }
            finally {
                supportsPassiveEvents = supportsPassiveEvents || false;
            }
        }
        return supportsPassiveEvents;
    }
    /**
     * Normalizes an `AddEventListener` object to something that can be passed
     * to `addEventListener` on any browser, no matter whether it supports the
     * `options` parameter.
     * @param options Object to be normalized.
     */
    function normalizePassiveListenerOptions(options) {
        return supportsPassiveEventListeners() ? options : !!options.capture;
    }

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /** Cached result of the way the browser handles the horizontal scroll axis in RTL mode. */
    var rtlScrollAxisType;
    /** Check whether the browser supports scroll behaviors. */
    function supportsScrollBehavior() {
        return !!(typeof document == 'object' && 'scrollBehavior' in document.documentElement.style);
    }
    /**
     * Checks the type of RTL scroll axis used by this browser. As of time of writing, Chrome is NORMAL,
     * Firefox & Safari are NEGATED, and IE & Edge are INVERTED.
     */
    function getRtlScrollAxisType() {
        // We can't check unless we're on the browser. Just assume 'normal' if we're not.
        if (typeof document !== 'object' || !document) {
            return 0 /* NORMAL */;
        }
        if (rtlScrollAxisType == null) {
            // Create a 1px wide scrolling container and a 2px wide content element.
            var scrollContainer = document.createElement('div');
            var containerStyle = scrollContainer.style;
            scrollContainer.dir = 'rtl';
            containerStyle.height = '1px';
            containerStyle.width = '1px';
            containerStyle.overflow = 'auto';
            containerStyle.visibility = 'hidden';
            containerStyle.pointerEvents = 'none';
            containerStyle.position = 'absolute';
            var content = document.createElement('div');
            var contentStyle = content.style;
            contentStyle.width = '2px';
            contentStyle.height = '1px';
            scrollContainer.appendChild(content);
            document.body.appendChild(scrollContainer);
            rtlScrollAxisType = 0 /* NORMAL */;
            // The viewport starts scrolled all the way to the right in RTL mode. If we are in a NORMAL
            // browser this would mean that the scrollLeft should be 1. If it's zero instead we know we're
            // dealing with one of the other two types of browsers.
            if (scrollContainer.scrollLeft === 0) {
                // In a NEGATED browser the scrollLeft is always somewhere in [-maxScrollAmount, 0]. For an
                // INVERTED browser it is always somewhere in [0, maxScrollAmount]. We can determine which by
                // setting to the scrollLeft to 1. This is past the max for a NEGATED browser, so it will
                // return 0 when we read it again.
                scrollContainer.scrollLeft = 1;
                rtlScrollAxisType =
                    scrollContainer.scrollLeft === 0 ? 1 /* NEGATED */ : 2 /* INVERTED */;
            }
            scrollContainer.parentNode.removeChild(scrollContainer);
        }
        return rtlScrollAxisType;
    }

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var shadowDomIsSupported;
    /** Checks whether the user's browser support Shadow DOM. */
    function _supportsShadowDom() {
        if (shadowDomIsSupported == null) {
            var head = typeof document !== 'undefined' ? document.head : null;
            shadowDomIsSupported = !!(head && (head.createShadowRoot || head.attachShadow));
        }
        return shadowDomIsSupported;
    }
    /** Gets the shadow root of an element, if supported and the element is inside the Shadow DOM. */
    function _getShadowRoot(element) {
        if (_supportsShadowDom()) {
            var rootNode = element.getRootNode ? element.getRootNode() : null;
            // Note that this should be caught by `_supportsShadowDom`, but some
            // teams have been able to hit this code path on unsupported browsers.
            if (typeof ShadowRoot !== 'undefined' && ShadowRoot && rootNode instanceof ShadowRoot) {
                return rootNode;
            }
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

    /**
     * Generated bundle index. Do not edit.
     */

    exports.Platform = Platform;
    exports.PlatformModule = PlatformModule;
    exports._getShadowRoot = _getShadowRoot;
    exports._supportsShadowDom = _supportsShadowDom;
    exports.getRtlScrollAxisType = getRtlScrollAxisType;
    exports.getSupportedInputTypes = getSupportedInputTypes;
    exports.normalizePassiveListenerOptions = normalizePassiveListenerOptions;
    exports.supportsPassiveEventListeners = supportsPassiveEventListeners;
    exports.supportsScrollBehavior = supportsScrollBehavior;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=cdk-platform.umd.js.map
