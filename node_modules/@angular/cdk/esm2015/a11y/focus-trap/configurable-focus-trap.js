/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/a11y/focus-trap/configurable-focus-trap.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { FocusTrap } from './focus-trap';
/**
 * Class that allows for trapping focus within a DOM element.
 *
 * This class uses a strategy pattern that determines how it traps focus.
 * See FocusTrapInertStrategy.
 */
export class ConfigurableFocusTrap extends FocusTrap {
    /**
     * @param {?} _element
     * @param {?} _checker
     * @param {?} _ngZone
     * @param {?} _document
     * @param {?} _focusTrapManager
     * @param {?} _inertStrategy
     * @param {?} config
     */
    constructor(_element, _checker, _ngZone, _document, _focusTrapManager, _inertStrategy, config) {
        super(_element, _checker, _ngZone, _document, config.defer);
        this._focusTrapManager = _focusTrapManager;
        this._inertStrategy = _inertStrategy;
        this._focusTrapManager.register(this);
    }
    /**
     * Whether the FocusTrap is enabled.
     * @return {?}
     */
    get enabled() { return this._enabled; }
    /**
     * @param {?} value
     * @return {?}
     */
    set enabled(value) {
        this._enabled = value;
        if (this._enabled) {
            this._focusTrapManager.register(this);
        }
        else {
            this._focusTrapManager.deregister(this);
        }
    }
    /**
     * Notifies the FocusTrapManager that this FocusTrap will be destroyed.
     * @return {?}
     */
    destroy() {
        this._focusTrapManager.deregister(this);
        super.destroy();
    }
    /**
     * \@docs-private Implemented as part of ManagedFocusTrap.
     * @return {?}
     */
    _enable() {
        this._inertStrategy.preventFocus(this);
        this.toggleAnchors(true);
    }
    /**
     * \@docs-private Implemented as part of ManagedFocusTrap.
     * @return {?}
     */
    _disable() {
        this._inertStrategy.allowFocus(this);
        this.toggleAnchors(false);
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    ConfigurableFocusTrap.prototype._focusTrapManager;
    /**
     * @type {?}
     * @private
     */
    ConfigurableFocusTrap.prototype._inertStrategy;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhYmxlLWZvY3VzLXRyYXAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY2RrL2ExMXkvZm9jdXMtdHJhcC9jb25maWd1cmFibGUtZm9jdXMtdHJhcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFVQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sY0FBYyxDQUFDOzs7Ozs7O0FBV3ZDLE1BQU0sT0FBTyxxQkFBc0IsU0FBUSxTQUFTOzs7Ozs7Ozs7O0lBWWxELFlBQ0UsUUFBcUIsRUFDckIsUUFBOEIsRUFDOUIsT0FBZSxFQUNmLFNBQW1CLEVBQ1gsaUJBQW1DLEVBQ25DLGNBQXNDLEVBQzlDLE1BQW1DO1FBQ25DLEtBQUssQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBSHBELHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBa0I7UUFDbkMsbUJBQWMsR0FBZCxjQUFjLENBQXdCO1FBRzlDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEMsQ0FBQzs7Ozs7SUFwQkQsSUFBSSxPQUFPLEtBQWMsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQzs7Ozs7SUFDaEQsSUFBSSxPQUFPLENBQUMsS0FBYztRQUN4QixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUN0QixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN2QzthQUFNO1lBQ0wsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN6QztJQUNILENBQUM7Ozs7O0lBZUQsT0FBTztRQUNMLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2xCLENBQUM7Ozs7O0lBR0QsT0FBTztRQUNMLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0IsQ0FBQzs7Ozs7SUFHRCxRQUFRO1FBQ04sSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1QixDQUFDO0NBQ0Y7Ozs7OztJQXhCRyxrREFBMkM7Ozs7O0lBQzNDLCtDQUE4QyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge05nWm9uZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0ludGVyYWN0aXZpdHlDaGVja2VyfSBmcm9tICcuLi9pbnRlcmFjdGl2aXR5LWNoZWNrZXIvaW50ZXJhY3Rpdml0eS1jaGVja2VyJztcbmltcG9ydCB7Rm9jdXNUcmFwfSBmcm9tICcuL2ZvY3VzLXRyYXAnO1xuaW1wb3J0IHtGb2N1c1RyYXBNYW5hZ2VyLCBNYW5hZ2VkRm9jdXNUcmFwfSBmcm9tICcuL2ZvY3VzLXRyYXAtbWFuYWdlcic7XG5pbXBvcnQge0ZvY3VzVHJhcEluZXJ0U3RyYXRlZ3l9IGZyb20gJy4vZm9jdXMtdHJhcC1pbmVydC1zdHJhdGVneSc7XG5pbXBvcnQge0NvbmZpZ3VyYWJsZUZvY3VzVHJhcENvbmZpZ30gZnJvbSAnLi9jb25maWd1cmFibGUtZm9jdXMtdHJhcC1jb25maWcnO1xuXG4vKipcbiAqIENsYXNzIHRoYXQgYWxsb3dzIGZvciB0cmFwcGluZyBmb2N1cyB3aXRoaW4gYSBET00gZWxlbWVudC5cbiAqXG4gKiBUaGlzIGNsYXNzIHVzZXMgYSBzdHJhdGVneSBwYXR0ZXJuIHRoYXQgZGV0ZXJtaW5lcyBob3cgaXQgdHJhcHMgZm9jdXMuXG4gKiBTZWUgRm9jdXNUcmFwSW5lcnRTdHJhdGVneS5cbiAqL1xuZXhwb3J0IGNsYXNzIENvbmZpZ3VyYWJsZUZvY3VzVHJhcCBleHRlbmRzIEZvY3VzVHJhcCBpbXBsZW1lbnRzIE1hbmFnZWRGb2N1c1RyYXAge1xuICAvKiogV2hldGhlciB0aGUgRm9jdXNUcmFwIGlzIGVuYWJsZWQuICovXG4gIGdldCBlbmFibGVkKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5fZW5hYmxlZDsgfVxuICBzZXQgZW5hYmxlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2VuYWJsZWQgPSB2YWx1ZTtcbiAgICBpZiAodGhpcy5fZW5hYmxlZCkge1xuICAgICAgdGhpcy5fZm9jdXNUcmFwTWFuYWdlci5yZWdpc3Rlcih0aGlzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fZm9jdXNUcmFwTWFuYWdlci5kZXJlZ2lzdGVyKHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIF9lbGVtZW50OiBIVE1MRWxlbWVudCxcbiAgICBfY2hlY2tlcjogSW50ZXJhY3Rpdml0eUNoZWNrZXIsXG4gICAgX25nWm9uZTogTmdab25lLFxuICAgIF9kb2N1bWVudDogRG9jdW1lbnQsXG4gICAgcHJpdmF0ZSBfZm9jdXNUcmFwTWFuYWdlcjogRm9jdXNUcmFwTWFuYWdlcixcbiAgICBwcml2YXRlIF9pbmVydFN0cmF0ZWd5OiBGb2N1c1RyYXBJbmVydFN0cmF0ZWd5LFxuICAgIGNvbmZpZzogQ29uZmlndXJhYmxlRm9jdXNUcmFwQ29uZmlnKSB7XG4gICAgc3VwZXIoX2VsZW1lbnQsIF9jaGVja2VyLCBfbmdab25lLCBfZG9jdW1lbnQsIGNvbmZpZy5kZWZlcik7XG4gICAgdGhpcy5fZm9jdXNUcmFwTWFuYWdlci5yZWdpc3Rlcih0aGlzKTtcbiAgfVxuXG4gIC8qKiBOb3RpZmllcyB0aGUgRm9jdXNUcmFwTWFuYWdlciB0aGF0IHRoaXMgRm9jdXNUcmFwIHdpbGwgYmUgZGVzdHJveWVkLiAqL1xuICBkZXN0cm95KCkge1xuICAgIHRoaXMuX2ZvY3VzVHJhcE1hbmFnZXIuZGVyZWdpc3Rlcih0aGlzKTtcbiAgICBzdXBlci5kZXN0cm95KCk7XG4gIH1cblxuICAvKiogQGRvY3MtcHJpdmF0ZSBJbXBsZW1lbnRlZCBhcyBwYXJ0IG9mIE1hbmFnZWRGb2N1c1RyYXAuICovXG4gIF9lbmFibGUoKSB7XG4gICAgdGhpcy5faW5lcnRTdHJhdGVneS5wcmV2ZW50Rm9jdXModGhpcyk7XG4gICAgdGhpcy50b2dnbGVBbmNob3JzKHRydWUpO1xuICB9XG5cbiAgLyoqIEBkb2NzLXByaXZhdGUgSW1wbGVtZW50ZWQgYXMgcGFydCBvZiBNYW5hZ2VkRm9jdXNUcmFwLiAqL1xuICBfZGlzYWJsZSgpIHtcbiAgICB0aGlzLl9pbmVydFN0cmF0ZWd5LmFsbG93Rm9jdXModGhpcyk7XG4gICAgdGhpcy50b2dnbGVBbmNob3JzKGZhbHNlKTtcbiAgfVxufVxuIl19