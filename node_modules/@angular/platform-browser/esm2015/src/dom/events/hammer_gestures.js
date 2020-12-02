/**
 * @fileoverview added by tsickle
 * Generated from: packages/platform-browser/src/dom/events/hammer_gestures.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, InjectionToken, NgModule, Optional, ɵConsole as Console } from '@angular/core';
import { EVENT_MANAGER_PLUGINS, EventManagerPlugin } from './event_manager';
/**
 * Supported HammerJS recognizer event names.
 * @type {?}
 */
const EVENT_NAMES = {
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
 * \@ngModule HammerModule
 * \@publicApi
 * @type {?}
 */
export const HAMMER_GESTURE_CONFIG = new InjectionToken('HammerGestureConfig');
/**
 * Injection token used to provide a {\@link HammerLoader} to Angular.
 *
 * \@publicApi
 * @type {?}
 */
export const HAMMER_LOADER = new InjectionToken('HammerLoader');
/**
 * @record
 */
export function HammerInstance() { }
if (false) {
    /**
     * @param {?} eventName
     * @param {?=} callback
     * @return {?}
     */
    HammerInstance.prototype.on = function (eventName, callback) { };
    /**
     * @param {?} eventName
     * @param {?=} callback
     * @return {?}
     */
    HammerInstance.prototype.off = function (eventName, callback) { };
    /**
     * @return {?}
     */
    HammerInstance.prototype.destroy = function () { };
}
/**
 * An injectable [HammerJS Manager](http://hammerjs.github.io/api/#hammer.manager)
 * for gesture recognition. Configures specific event recognition.
 * \@publicApi
 */
export class HammerGestureConfig {
    constructor() {
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
     * @param {?} element The element that will recognize gestures.
     * @return {?} A HammerJS event-manager object.
     */
    buildHammer(element) {
        /** @type {?} */
        const mc = new (/** @type {?} */ (Hammer))(element, this.options);
        mc.get('pinch').set({ enable: true });
        mc.get('rotate').set({ enable: true });
        for (const eventName in this.overrides) {
            mc.get(eventName).set(this.overrides[eventName]);
        }
        return mc;
    }
}
HammerGestureConfig.decorators = [
    { type: Injectable }
];
if (false) {
    /**
     * A set of supported event names for gestures to be used in Angular.
     * Angular supports all built-in recognizers, as listed in
     * [HammerJS documentation](http://hammerjs.github.io/).
     * @type {?}
     */
    HammerGestureConfig.prototype.events;
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
     * @type {?}
     */
    HammerGestureConfig.prototype.overrides;
    /**
     * Properties whose default values can be overridden for a given event.
     * Different sets of properties apply to different events.
     * For information about which properties are supported for which events,
     * and their allowed and default values, see
     * [HammerJS documentation](http://hammerjs.github.io/).
     * @type {?}
     */
    HammerGestureConfig.prototype.options;
}
/**
 * Event plugin that adds Hammer support to an application.
 *
 * \@ngModule HammerModule
 */
export class HammerGesturesPlugin extends EventManagerPlugin {
    /**
     * @param {?} doc
     * @param {?} _config
     * @param {?} console
     * @param {?=} loader
     */
    constructor(doc, _config, console, loader) {
        super(doc);
        this._config = _config;
        this.console = console;
        this.loader = loader;
    }
    /**
     * @param {?} eventName
     * @return {?}
     */
    supports(eventName) {
        if (!EVENT_NAMES.hasOwnProperty(eventName.toLowerCase()) && !this.isCustomEvent(eventName)) {
            return false;
        }
        if (!((/** @type {?} */ (window))).Hammer && !this.loader) {
            this.console.warn(`The "${eventName}" event cannot be bound because Hammer.JS is not ` +
                `loaded and no custom loader has been specified.`);
            return false;
        }
        return true;
    }
    /**
     * @param {?} element
     * @param {?} eventName
     * @param {?} handler
     * @return {?}
     */
    addEventListener(element, eventName, handler) {
        /** @type {?} */
        const zone = this.manager.getZone();
        eventName = eventName.toLowerCase();
        // If Hammer is not present but a loader is specified, we defer adding the event listener
        // until Hammer is loaded.
        if (!((/** @type {?} */ (window))).Hammer && this.loader) {
            // This `addEventListener` method returns a function to remove the added listener.
            // Until Hammer is loaded, the returned function needs to *cancel* the registration rather
            // than remove anything.
            /** @type {?} */
            let cancelRegistration = false;
            /** @type {?} */
            let deregister = (/**
             * @return {?}
             */
            () => {
                cancelRegistration = true;
            });
            this.loader()
                .then((/**
             * @return {?}
             */
            () => {
                // If Hammer isn't actually loaded when the custom loader resolves, give up.
                if (!((/** @type {?} */ (window))).Hammer) {
                    this.console.warn(`The custom HAMMER_LOADER completed, but Hammer.JS is not present.`);
                    deregister = (/**
                     * @return {?}
                     */
                    () => { });
                    return;
                }
                if (!cancelRegistration) {
                    // Now that Hammer is loaded and the listener is being loaded for real,
                    // the deregistration function changes from canceling registration to removal.
                    deregister = this.addEventListener(element, eventName, handler);
                }
            }))
                .catch((/**
             * @return {?}
             */
            () => {
                this.console.warn(`The "${eventName}" event cannot be bound because the custom ` +
                    `Hammer.JS loader failed.`);
                deregister = (/**
                 * @return {?}
                 */
                () => { });
            }));
            // Return a function that *executes* `deregister` (and not `deregister` itself) so that we
            // can change the behavior of `deregister` once the listener is added. Using a closure in
            // this way allows us to avoid any additional data structures to track listener removal.
            return (/**
             * @return {?}
             */
            () => {
                deregister();
            });
        }
        return zone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            // Creating the manager bind events, must be done outside of angular
            /** @type {?} */
            const mc = this._config.buildHammer(element);
            /** @type {?} */
            const callback = (/**
             * @param {?} eventObj
             * @return {?}
             */
            function (eventObj) {
                zone.runGuarded((/**
                 * @return {?}
                 */
                function () {
                    handler(eventObj);
                }));
            });
            mc.on(eventName, callback);
            return (/**
             * @return {?}
             */
            () => {
                mc.off(eventName, callback);
                // destroy mc to prevent memory leak
                if (typeof mc.destroy === 'function') {
                    mc.destroy();
                }
            });
        }));
    }
    /**
     * @param {?} eventName
     * @return {?}
     */
    isCustomEvent(eventName) {
        return this._config.events.indexOf(eventName) > -1;
    }
}
HammerGesturesPlugin.decorators = [
    { type: Injectable }
];
/** @nocollapse */
HammerGesturesPlugin.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: HammerGestureConfig, decorators: [{ type: Inject, args: [HAMMER_GESTURE_CONFIG,] }] },
    { type: Console },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [HAMMER_LOADER,] }] }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    HammerGesturesPlugin.prototype._config;
    /**
     * @type {?}
     * @private
     */
    HammerGesturesPlugin.prototype.console;
    /**
     * @type {?}
     * @private
     */
    HammerGesturesPlugin.prototype.loader;
}
/**
 * In Ivy, support for Hammer gestures is optional, so applications must
 * import the `HammerModule` at root to turn on support. This means that
 * Hammer-specific code can be tree-shaken away if not needed.
 * @type {?}
 */
export const HAMMER_PROVIDERS__POST_R3__ = [];
/**
 * In View Engine, support for Hammer gestures is built-in by default.
 * @type {?}
 */
export const HAMMER_PROVIDERS__PRE_R3__ = [
    {
        provide: EVENT_MANAGER_PLUGINS,
        useClass: HammerGesturesPlugin,
        multi: true,
        deps: [DOCUMENT, HAMMER_GESTURE_CONFIG, Console, [new Optional(), HAMMER_LOADER]]
    },
    { provide: HAMMER_GESTURE_CONFIG, useClass: HammerGestureConfig, deps: [] },
];
/** @type {?} */
export const HAMMER_PROVIDERS = HAMMER_PROVIDERS__PRE_R3__;
/**
 * Adds support for HammerJS.
 *
 * Import this module at the root of your application so that Angular can work with
 * HammerJS to detect gesture events.
 *
 * Note that applications still need to include the HammerJS script itself. This module
 * simply sets up the coordination layer between HammerJS and Angular's EventManager.
 *
 * \@publicApi
 */
export class HammerModule {
}
HammerModule.decorators = [
    { type: NgModule, args: [{ providers: HAMMER_PROVIDERS__PRE_R3__ },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFtbWVyX2dlc3R1cmVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvcGxhdGZvcm0tYnJvd3Nlci9zcmMvZG9tL2V2ZW50cy9oYW1tZXJfZ2VzdHVyZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sRUFBQyxNQUFNLEVBQUUsVUFBVSxFQUFFLGNBQWMsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFZLFFBQVEsSUFBSSxPQUFPLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFcEgsT0FBTyxFQUFDLHFCQUFxQixFQUFFLGtCQUFrQixFQUFDLE1BQU0saUJBQWlCLENBQUM7Ozs7O01BT3BFLFdBQVcsR0FBRzs7SUFFbEIsS0FBSyxFQUFFLElBQUk7SUFDWCxVQUFVLEVBQUUsSUFBSTtJQUNoQixTQUFTLEVBQUUsSUFBSTtJQUNmLFFBQVEsRUFBRSxJQUFJO0lBQ2QsV0FBVyxFQUFFLElBQUk7SUFDakIsU0FBUyxFQUFFLElBQUk7SUFDZixVQUFVLEVBQUUsSUFBSTtJQUNoQixPQUFPLEVBQUUsSUFBSTtJQUNiLFNBQVMsRUFBRSxJQUFJOztJQUVmLE9BQU8sRUFBRSxJQUFJO0lBQ2IsWUFBWSxFQUFFLElBQUk7SUFDbEIsV0FBVyxFQUFFLElBQUk7SUFDakIsVUFBVSxFQUFFLElBQUk7SUFDaEIsYUFBYSxFQUFFLElBQUk7SUFDbkIsU0FBUyxFQUFFLElBQUk7SUFDZixVQUFVLEVBQUUsSUFBSTs7SUFFaEIsT0FBTyxFQUFFLElBQUk7SUFDYixTQUFTLEVBQUUsSUFBSTs7SUFFZixRQUFRLEVBQUUsSUFBSTtJQUNkLGFBQWEsRUFBRSxJQUFJO0lBQ25CLFlBQVksRUFBRSxJQUFJO0lBQ2xCLFdBQVcsRUFBRSxJQUFJO0lBQ2pCLGNBQWMsRUFBRSxJQUFJOztJQUVwQixPQUFPLEVB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RCxFQUFDLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxRQUFRLEVBQUUsbUJBQW1CLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBQztDQUMxRTs7QUFFRCxNQUFNLE9BQU8sZ0JBQWdCLEdBQUcsMEJBQTBCOzs7Ozs7Ozs7Ozs7QUFjMUQsTUFBTSxPQUFPLFlBQVk7OztZQUR4QixRQUFRLFNBQUMsRUFBQyxTQUFTLEVBQUUsMEJBQTBCLEVBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7RE9DVU1FTlR9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge0luamVjdCwgSW5qZWN0YWJsZSwgSW5qZWN0aW9uVG9rZW4sIE5nTW9kdWxlLCBPcHRpb25hbCwgUHJvdmlkZXIsIMm1Q29uc29sZSBhcyBDb25zb2xlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtFVkVOVF9NQU5BR0VSX1BMVUdJTlMsIEV2ZW50TWFuYWdlclBsdWdpbn0gZnJvbSAnLi9ldmVudF9tYW5hZ2VyJztcblxuXG5cbi8qKlxuICogU3VwcG9ydGVkIEhhbW1lckpTIHJlY29nbml6ZXIgZXZlbnQgbmFtZXMuXG4gKi9cbmNvbnN0IEVWRU5UX05BTUVTID0ge1xuICAvLyBwYW5cbiAgJ3Bhbic6IHRydWUsXG4gICdwYW5zdGFydCc6IHRydWUsXG4gICdwYW5tb3ZlJzogdHJ1ZSxcbiAgJ3BhbmVuZCc6IHRydWUsXG4gICdwYW5jYW5jZWwnOiB0cnVlLFxuICAncGFubGVmdCc6IHRydWUsXG4gICdwYW5yaWdodCc6IHRydWUsXG4gICdwYW51cCc6IHRydWUsXG4gICdwYW5kb3duJzogdHJ1ZSxcbiAgLy8gcGluY2hcbiAgJ3BpbmNoJzogdHJ1ZSxcbiAgJ3BpbmNoc3RhcnQnOiB0cnVlLFxuICAncGluY2htb3ZlJzogdHJ1ZSxcbiAgJ3BpbmNoZW5kJzogdHJ1ZSxcbiAgJ3BpbmNoY2FuY2VsJzogdHJ1ZSxcbiAgJ3BpbmNoaW4nOiB0cnVlLFxuICAncGluY2hvdXQnOiB0cnVlLFxuICAvLyBwcmVzc1xuICAncHJlc3MnOiB0cnVlLFxuICAncHJlc3N1cCc6IHRydWUsXG4gIC8vIHJvdGF0ZVxuICAncm90YXRlJzogdHJ1ZSxcbiAgJ3JvdGF0ZXN0YXJ0JzogdHJ1ZSxcbiAgJ3JvdGF0ZW1vdmUnOiB0cnVlLFxuICAncm90YXRlZW5kJzogdHJ1ZSxcbiAgJ3JvdGF0ZWNhbmNlbCc6IHRydWUsXG4gIC8vIHN3aXBlXG4gICdzd2lwZSc6IHRydWUsXG4gICdzd2lwZWxlZnQnOiB0cnVlLFxuICAnc3dpcGVyaWdodCc6IHRydWUsXG4gICdzd2lwZXVwJzogdHJ1ZSxcbiAgJ3N3aXBlZG93bic6IHRydWUsXG4gIC8vIHRhcFxuICAndGFwJzogdHJ1ZSxcbn07XG5cbi8qKlxuICogREkgdG9rZW4gZm9yIHByb3ZpZGluZyBbSGFtbWVySlNdKGh0dHA6Ly9oYW1tZXJqcy5naXRodWIuaW8vKSBzdXBwb3J0IHRvIEFuZ3VsYXIuXG4gKiBAc2VlIGBIYW1tZXJHZXN0dXJlQ29uZmlnYFxuICpcbiAqIEBuZ01vZHVsZSBIYW1tZXJNb2R1bGVcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGNvbnN0IEhBTU1FUl9HRVNUVVJFX0NPTkZJRyA9IG5ldyBJbmplY3Rpb25Ub2tlbjxIYW1tZXJHZXN0dXJlQ29uZmlnPignSGFtbWVyR2VzdHVyZUNvbmZpZycpO1xuXG5cbi8qKlxuICogRnVuY3Rpb24gdGhhdCBsb2FkcyBIYW1tZXJKUywgcmV0dXJuaW5nIGEgcHJvbWlzZSB0aGF0IGlzIHJlc29sdmVkIG9uY2UgSGFtbWVySnMgaXMgbG9hZGVkLlxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IHR5cGUgSGFtbWVyTG9hZGVyID0gKCkgPT4gUHJvbWlzZTx2b2lkPjtcblxuLyoqXG4gKiBJbmplY3Rpb24gdG9rZW4gdXNlZCB0byBwcm92aWRlIGEge0BsaW5rIEhhbW1lckxvYWRlcn0gdG8gQW5ndWxhci5cbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBjb25zdCBIQU1NRVJfTE9BREVSID0gbmV3IEluamVjdGlvblRva2VuPEhhbW1lckxvYWRlcj4oJ0hhbW1lckxvYWRlcicpO1xuXG5leHBvcnQgaW50ZXJmYWNlIEhhbW1lckluc3RhbmNlIHtcbiAgb24oZXZlbnROYW1lOiBzdHJpbmcsIGNhbGxiYWNrPzogRnVuY3Rpb24pOiB2b2lkO1xuICBvZmYoZXZlbnROYW1lOiBzdHJpbmcsIGNhbGxiYWNrPzogRnVuY3Rpb24pOiB2b2lkO1xuICBkZXN0cm95PygpOiB2b2lkO1xufVxuXG4vKipcbiAqIEFuIGluamVjdGFibGUgW0hhbW1lckpTIE1hbmFnZXJdKGh0dHA6Ly9oYW1tZXJqcy5naXRodWIuaW8vYXBpLyNoYW1tZXIubWFuYWdlcilcbiAqIGZvciBnZXN0dXJlIHJlY29nbml0aW9uLiBDb25maWd1cmVzIHNwZWNpZmljIGV2ZW50IHJlY29nbml0aW9uLlxuICogQHB1YmxpY0FwaVxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSGFtbWVyR2VzdHVyZUNvbmZpZyB7XG4gIC8qKlxuICAgKiBBIHNldCBvZiBzdXBwb3J0ZWQgZXZlbnQgbmFtZXMgZm9yIGdlc3R1cmVzIHRvIGJlIHVzZWQgaW4gQW5ndWxhci5cbiAgICogQW5ndWxhciBzdXBwb3J0cyBhbGwgYnVpbHQtaW4gcmVjb2duaXplcnMsIGFzIGxpc3RlZCBpblxuICAgKiBbSGFtbWVySlMgZG9jdW1lbnRhdGlvbl0oaHR0cDovL2hhbW1lcmpzLmdpdGh1Yi5pby8pLlxuICAgKi9cbiAgZXZlbnRzOiBzdHJpbmdbXSA9IFtdO1xuXG4gIC8qKlxuICAgKiBNYXBzIGdlc3R1cmUgZXZlbnQgbmFtZXMgdG8gYSBzZXQgb2YgY29uZmlndXJhdGlvbiBvcHRpb25zXG4gICAqIHRoYXQgc3BlY2lmeSBvdmVycmlkZXMgdG8gdGhlIGRlZmF1bHQgdmFsdWVzIGZvciBzcGVjaWZpYyBwcm9wZXJ0aWVzLlxuICAgKlxuICAgKiBUaGUga2V5IGlzIGEgc3VwcG9ydGVkIGV2ZW50IG5hbWUgdG8gYmUgY29uZmlndXJlZCxcbiAgICogYW5kIHRoZSBvcHRpb25zIG9iamVjdCBjb250YWlucyBhIHNldCBvZiBwcm9wZXJ0aWVzLCB3aXRoIG92ZXJyaWRlIHZhbHVlc1xuICAgKiB0byBiZSBhcHBsaWVkIHRvIHRoZSBuYW1lZCByZWNvZ25pemVyIGV2ZW50LlxuICAgKiBGb3IgZXhhbXBsZSwgdG8gZGlzYWJsZSByZWNvZ25pdGlvbiBvZiB0aGUgcm90YXRlIGV2ZW50LCBzcGVjaWZ5XG4gICAqICBge1wicm90YXRlXCI6IHtcImVuYWJsZVwiOiBmYWxzZX19YC5cbiAgICpcbiAgICogUHJvcGVydGllcyB0aGF0IGFyZSBub3QgcHJlc2VudCB0YWtlIHRoZSBIYW1tZXJKUyBkZWZhdWx0IHZhbHVlcy5cbiAgICogRm9yIGluZm9ybWF0aW9uIGFib3V0IHdoaWNoIHByb3BlcnRpZXMgYXJlIHN1cHBvcnRlZCBmb3Igd2hpY2ggZXZlbnRzLFxuICAgKiBhbmQgdGhlaXIgYWxsb3dlZCBhbmQgZGVmYXVsdCB2YWx1ZXMsIHNlZVxuICAgKiBbSGFtbWVySlMgZG9jdW1lbnRhdGlvbl0oaHR0cDovL2hhbW1lcmpzLmdpdGh1Yi5pby8pLlxuICAgKlxuICAgKi9cbiAgb3ZlcnJpZGVzOiB7W2tleTogc3RyaW5nXTogT2JqZWN0fSA9IHt9O1xuXG4gIC8qKlxuICAgKiBQcm9wZXJ0aWVzIHdob3NlIGRlZmF1bHQgdmFsdWVzIGNhbiBiZSBvdmVycmlkZGVuIGZvciBhIGdpdmVuIGV2ZW50LlxuICAgKiBEaWZmZXJlbnQgc2V0cyBvZiBwcm9wZXJ0aWVzIGFwcGx5IHRvIGRpZmZlcmVudCBldmVudHMuXG4gICAqIEZvciBpbmZvcm1hdGlvbiBhYm91dCB3aGljaCBwcm9wZXJ0aWVzIGFyZSBzdXBwb3J0ZWQgZm9yIHdoaWNoIGV2ZW50cyxcbiAgICogYW5kIHRoZWlyIGFsbG93ZWQgYW5kIGRlZmF1bHQgdmFsdWVzLCBzZWVcbiAgICogW0hhbW1lckpTIGRvY3VtZW50YXRpb25dKGh0dHA6Ly9oYW1tZXJqcy5naXRodWIuaW8vKS5cbiAgICovXG4gIG9wdGlvbnM/OiB7XG4gICAgY3NzUHJvcHM/OiBhbnk7XG4gICAgZG9tRXZlbnRzPzogYm9vbGVhbjtcbiAgICBlbmFibGU/OiBib29sZWFuIHwgKChtYW5hZ2VyOiBhbnkpID0+IGJvb2xlYW4pO1xuICAgIHByZXNldD86IGFueVtdO1xuICAgIHRvdWNoQWN0aW9uPzogc3RyaW5nO1xuICAgIHJlY29nbml6ZXJzPzogYW55W107XG4gICAgaW5wdXRDbGFzcz86IGFueTtcbiAgICBpbnB1dFRhcmdldD86IEV2ZW50VGFyZ2V0O1xuICB9O1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgW0hhbW1lckpTIE1hbmFnZXJdKGh0dHA6Ly9oYW1tZXJqcy5naXRodWIuaW8vYXBpLyNoYW1tZXIubWFuYWdlcilcbiAgICogYW5kIGF0dGFjaGVzIGl0IHRvIGEgZ2l2ZW4gSFRNTCBlbGVtZW50LlxuICAgKiBAcGFyYW0gZWxlbWVudCBUaGUgZWxlbWVudCB0aGF0IHdpbGwgcmVjb2duaXplIGdlc3R1cmVzLlxuICAgKiBAcmV0dXJucyBBIEhhbW1lckpTIGV2ZW50LW1hbmFnZXIgb2JqZWN0LlxuICAgKi9cbiAgYnVpbGRIYW1tZXIoZWxlbWVudDogSFRNTEVsZW1lbnQpOiBIYW1tZXJJbnN0YW5jZSB7XG4gICAgY29uc3QgbWMgPSBuZXcgSGFtbWVyIShlbGVtZW50LCB0aGlzLm9wdGlvbnMpO1xuXG4gICAgbWMuZ2V0KCdwaW5jaCcpLnNldCh7ZW5hYmxlOiB0cnVlfSk7XG4gICAgbWMuZ2V0KCdyb3RhdGUnKS5zZXQoe2VuYWJsZTogdHJ1ZX0pO1xuXG4gICAgZm9yIChjb25zdCBldmVudE5hbWUgaW4gdGhpcy5vdmVycmlkZXMpIHtcbiAgICAgIG1jLmdldChldmVudE5hbWUpLnNldCh0aGlzLm92ZXJyaWRlc1tldmVudE5hbWVdKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWM7XG4gIH1cbn1cblxuLyoqXG4gKiBFdmVudCBwbHVnaW4gdGhhdCBhZGRzIEhhbW1lciBzdXBwb3J0IHRvIGFuIGFwcGxpY2F0aW9uLlxuICpcbiAqIEBuZ01vZHVsZSBIYW1tZXJNb2R1bGVcbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEhhbW1lckdlc3R1cmVzUGx1Z2luIGV4dGVuZHMgRXZlbnRNYW5hZ2VyUGx1Z2luIHtcbiAgY29uc3RydWN0b3IoXG4gICAgICBASW5qZWN0KERPQ1VNRU5UKSBkb2M6IGFueSxcbiAgICAgIEBJbmplY3QoSEFNTUVSX0dFU1RVUkVfQ09ORklHKSBwcml2YXRlIF9jb25maWc6IEhhbW1lckdlc3R1cmVDb25maWcsIHByaXZhdGUgY29uc29sZTogQ29uc29sZSxcbiAgICAgIEBPcHRpb25hbCgpIEBJbmplY3QoSEFNTUVSX0xPQURFUikgcHJpdmF0ZSBsb2FkZXI/OiBIYW1tZXJMb2FkZXJ8bnVsbCkge1xuICAgIHN1cGVyKGRvYyk7XG4gIH1cblxuICBzdXBwb3J0cyhldmVudE5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGlmICghRVZFTlRfTkFNRVMuaGFzT3duUHJvcGVydHkoZXZlbnROYW1lLnRvTG93ZXJDYXNlKCkpICYmICF0aGlzLmlzQ3VzdG9tRXZlbnQoZXZlbnROYW1lKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmICghKHdpbmRvdyBhcyBhbnkpLkhhbW1lciAmJiAhdGhpcy5sb2FkZXIpIHtcbiAgICAgIHRoaXMuY29uc29sZS53YXJuKFxuICAgICAgICAgIGBUaGUgXCIke2V2ZW50TmFtZX1cIiBldmVudCBjYW5ub3QgYmUgYm91bmQgYmVjYXVzZSBIYW1tZXIuSlMgaXMgbm90IGAgK1xuICAgICAgICAgIGBsb2FkZWQgYW5kIG5vIGN1c3RvbSBsb2FkZXIgaGFzIGJlZW4gc3BlY2lmaWVkLmApO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgYWRkRXZlbnRMaXN0ZW5lcihlbGVtZW50OiBIVE1MRWxlbWVudCwgZXZlbnROYW1lOiBzdHJpbmcsIGhhbmRsZXI6IEZ1bmN0aW9uKTogRnVuY3Rpb24ge1xuICAgIGNvbnN0IHpvbmUgPSB0aGlzLm1hbmFnZXIuZ2V0Wm9uZSgpO1xuICAgIGV2ZW50TmFtZSA9IGV2ZW50TmFtZS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgLy8gSWYgSGFtbWVyIGlzIG5vdCBwcmVzZW50IGJ1dCBhIGxvYWRlciBpcyBzcGVjaWZpZWQsIHdlIGRlZmVyIGFkZGluZyB0aGUgZXZlbnQgbGlzdGVuZXJcbiAgICAvLyB1bnRpbCBIYW1tZXIgaXMgbG9hZGVkLlxuICAgIGlmICghKHdpbmRvdyBhcyBhbnkpLkhhbW1lciAmJiB0aGlzLmxvYWRlcikge1xuICAgICAgLy8gVGhpcyBgYWRkRXZlbnRMaXN0ZW5lcmAgbWV0aG9kIHJldHVybnMgYSBmdW5jdGlvbiB0byByZW1vdmUgdGhlIGFkZGVkIGxpc3RlbmVyLlxuICAgICAgLy8gVW50aWwgSGFtbWVyIGlzIGxvYWRlZCwgdGhlIHJldHVybmVkIGZ1bmN0aW9uIG5lZWRzIHRvICpjYW5jZWwqIHRoZSByZWdpc3RyYXRpb24gcmF0aGVyXG4gICAgICAvLyB0aGFuIHJlbW92ZSBhbnl0aGluZy5cbiAgICAgIGxldCBjYW5jZWxSZWdpc3RyYXRpb24gPSBmYWxzZTtcbiAgICAgIGxldCBkZXJlZ2lzdGVyOiBGdW5jdGlvbiA9ICgpID0+IHtcbiAgICAgICAgY2FuY2VsUmVnaXN0cmF0aW9uID0gdHJ1ZTtcbiAgICAgIH07XG5cbiAgICAgIHRoaXMubG9hZGVyKClcbiAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAvLyBJZiBIYW1tZXIgaXNuJ3QgYWN0dWFsbHkgbG9hZGVkIHdoZW4gdGhlIGN1c3RvbSBsb2FkZXIgcmVzb2x2ZXMsIGdpdmUgdXAuXG4gICAgICAgICAgICBpZiAoISh3aW5kb3cgYXMgYW55KS5IYW1tZXIpIHtcbiAgICAgICAgICAgICAgdGhpcy5jb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgICAgICBgVGhlIGN1c3RvbSBIQU1NRVJfTE9BREVSIGNvbXBsZXRlZCwgYnV0IEhhbW1lci5KUyBpcyBub3QgcHJlc2VudC5gKTtcbiAgICAgICAgICAgICAgZGVyZWdpc3RlciA9ICgpID0+IHt9O1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghY2FuY2VsUmVnaXN0cmF0aW9uKSB7XG4gICAgICAgICAgICAgIC8vIE5vdyB0aGF0IEhhbW1lciBpcyBsb2FkZWQgYW5kIHRoZSBsaXN0ZW5lciBpcyBiZWluZyBsb2FkZWQgZm9yIHJlYWwsXG4gICAgICAgICAgICAgIC8vIHRoZSBkZXJlZ2lzdHJhdGlvbiBmdW5jdGlvbiBjaGFuZ2VzIGZyb20gY2FuY2VsaW5nIHJlZ2lzdHJhdGlvbiB0byByZW1vdmFsLlxuICAgICAgICAgICAgICBkZXJlZ2lzdGVyID0gdGhpcy5hZGRFdmVudExpc3RlbmVyKGVsZW1lbnQsIGV2ZW50TmFtZSwgaGFuZGxlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgICAgYFRoZSBcIiR7ZXZlbnROYW1lfVwiIGV2ZW50IGNhbm5vdCBiZSBib3VuZCBiZWNhdXNlIHRoZSBjdXN0b20gYCArXG4gICAgICAgICAgICAgICAgYEhhbW1lci5KUyBsb2FkZXIgZmFpbGVkLmApO1xuICAgICAgICAgICAgZGVyZWdpc3RlciA9ICgpID0+IHt9O1xuICAgICAgICAgIH0pO1xuXG4gICAgICAvLyBSZXR1cm4gYSBmdW5jdGlvbiB0aGF0ICpleGVjdXRlcyogYGRlcmVnaXN0ZXJgIChhbmQgbm90IGBkZXJlZ2lzdGVyYCBpdHNlbGYpIHNvIHRoYXQgd2VcbiAgICAgIC8vIGNhbiBjaGFuZ2UgdGhlIGJlaGF2aW9yIG9mIGBkZXJlZ2lzdGVyYCBvbmNlIHRoZSBsaXN0ZW5lciBpcyBhZGRlZC4gVXNpbmcgYSBjbG9zdXJlIGluXG4gICAgICAvLyB0aGlzIHdheSBhbGxvd3MgdXMgdG8gYXZvaWQgYW55IGFkZGl0aW9uYWwgZGF0YSBzdHJ1Y3R1cmVzIHRvIHRyYWNrIGxpc3RlbmVyIHJlbW92YWwuXG4gICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICBkZXJlZ2lzdGVyKCk7XG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiB6b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgIC8vIENyZWF0aW5nIHRoZSBtYW5hZ2VyIGJpbmQgZXZlbnRzLCBtdXN0IGJlIGRvbmUgb3V0c2lkZSBvZiBhbmd1bGFyXG4gICAgICBjb25zdCBtYyA9IHRoaXMuX2NvbmZpZy5idWlsZEhhbW1lcihlbGVtZW50KTtcbiAgICAgIGNvbnN0IGNhbGxiYWNrID0gZnVuY3Rpb24oZXZlbnRPYmo6IEhhbW1lcklucHV0KSB7XG4gICAgICAgIHpvbmUucnVuR3VhcmRlZChmdW5jdGlvbigpIHtcbiAgICAgICAgICBoYW5kbGVyKGV2ZW50T2JqKTtcbiAgICAgICAgfSk7XG4gICAgICB9O1xuICAgICAgbWMub24oZXZlbnROYW1lLCBjYWxsYmFjayk7XG4gICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICBtYy5vZmYoZXZlbnROYW1lLCBjYWxsYmFjayk7XG4gICAgICAgIC8vIGRlc3Ryb3kgbWMgdG8gcHJldmVudCBtZW1vcnkgbGVha1xuICAgICAgICBpZiAodHlwZW9mIG1jLmRlc3Ryb3kgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBtYy5kZXN0cm95KCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBpc0N1c3RvbUV2ZW50KGV2ZW50TmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbmZpZy5ldmVudHMuaW5kZXhPZihldmVudE5hbWUpID4gLTE7XG4gIH1cbn1cblxuLyoqXG4gKiBJbiBJdnksIHN1cHBvcnQgZm9yIEhhbW1lciBnZXN0dXJlcyBpcyBvcHRpb25hbCwgc28gYXBwbGljYXRpb25zIG11c3RcbiAqIGltcG9ydCB0aGUgYEhhbW1lck1vZHVsZWAgYXQgcm9vdCB0byB0dXJuIG9uIHN1cHBvcnQuIFRoaXMgbWVhbnMgdGhhdFxuICogSGFtbWVyLXNwZWNpZmljIGNvZGUgY2FuIGJlIHRyZWUtc2hha2VuIGF3YXkgaWYgbm90IG5lZWRlZC5cbiAqL1xuZXhwb3J0IGNvbnN0IEhBTU1FUl9QUk9WSURFUlNfX1BPU1RfUjNfXyA9IFtdO1xuXG4vKipcbiAqIEluIFZpZXcgRW5naW5lLCBzdXBwb3J0IGZvciBIYW1tZXIgZ2VzdHVyZXMgaXMgYnVpbHQtaW4gYnkgZGVmYXVsdC5cbiAqL1xuZXhwb3J0IGNvbnN0IEhBTU1FUl9QUk9WSURFUlNfX1BSRV9SM19fOiBQcm92aWRlcltdID0gW1xuICB7XG4gICAgcHJvdmlkZTogRVZFTlRfTUFOQUdFUl9QTFVHSU5TLFxuICAgIHVzZUNsYXNzOiBIYW1tZXJHZXN0dXJlc1BsdWdpbixcbiAgICBtdWx0aTogdHJ1ZSxcbiAgICBkZXBzOiBbRE9DVU1FTlQsIEhBTU1FUl9HRVNUVVJFX0NPTkZJRywgQ29uc29sZSwgW25ldyBPcHRpb25hbCgpLCBIQU1NRVJfTE9BREVSXV1cbiAgfSxcbiAge3Byb3ZpZGU6IEhBTU1FUl9HRVNUVVJFX0NPTkZJRywgdXNlQ2xhc3M6IEhhbW1lckdlc3R1cmVDb25maWcsIGRlcHM6IFtdfSxcbl07XG5cbmV4cG9ydCBjb25zdCBIQU1NRVJfUFJPVklERVJTID0gSEFNTUVSX1BST1ZJREVSU19fUFJFX1IzX187XG5cbi8qKlxuICogQWRkcyBzdXBwb3J0IGZvciBIYW1tZXJKUy5cbiAqXG4gKiBJbXBvcnQgdGhpcyBtb2R1bGUgYXQgdGhlIHJvb3Qgb2YgeW91ciBhcHBsaWNhdGlvbiBzbyB0aGF0IEFuZ3VsYXIgY2FuIHdvcmsgd2l0aFxuICogSGFtbWVySlMgdG8gZGV0ZWN0IGdlc3R1cmUgZXZlbnRzLlxuICpcbiAqIE5vdGUgdGhhdCBhcHBsaWNhdGlvbnMgc3RpbGwgbmVlZCB0byBpbmNsdWRlIHRoZSBIYW1tZXJKUyBzY3JpcHQgaXRzZWxmLiBUaGlzIG1vZHVsZVxuICogc2ltcGx5IHNldHMgdXAgdGhlIGNvb3JkaW5hdGlvbiBsYXllciBiZXR3ZWVuIEhhbW1lckpTIGFuZCBBbmd1bGFyJ3MgRXZlbnRNYW5hZ2VyLlxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuQE5nTW9kdWxlKHtwcm92aWRlcnM6IEhBTU1FUl9QUk9WSURFUlNfX1BSRV9SM19ffSlcbmV4cG9ydCBjbGFzcyBIYW1tZXJNb2R1bGUge1xufVxuIl19