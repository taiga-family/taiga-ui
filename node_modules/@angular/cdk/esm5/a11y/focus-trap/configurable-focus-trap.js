/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { __extends } from "tslib";
import { FocusTrap } from './focus-trap';
/**
 * Class that allows for trapping focus within a DOM element.
 *
 * This class uses a strategy pattern that determines how it traps focus.
 * See FocusTrapInertStrategy.
 */
var ConfigurableFocusTrap = /** @class */ (function (_super) {
    __extends(ConfigurableFocusTrap, _super);
    function ConfigurableFocusTrap(_element, _checker, _ngZone, _document, _focusTrapManager, _inertStrategy, config) {
        var _this = _super.call(this, _element, _checker, _ngZone, _document, config.defer) || this;
        _this._focusTrapManager = _focusTrapManager;
        _this._inertStrategy = _inertStrategy;
        _this._focusTrapManager.register(_this);
        return _this;
    }
    Object.defineProperty(ConfigurableFocusTrap.prototype, "enabled", {
        /** Whether the FocusTrap is enabled. */
        get: function () { return this._enabled; },
        set: function (value) {
            this._enabled = value;
            if (this._enabled) {
                this._focusTrapManager.register(this);
            }
            else {
                this._focusTrapManager.deregister(this);
            }
        },
        enumerable: true,
        configurable: true
    });
    /** Notifies the FocusTrapManager that this FocusTrap will be destroyed. */
    ConfigurableFocusTrap.prototype.destroy = function () {
        this._focusTrapManager.deregister(this);
        _super.prototype.destroy.call(this);
    };
    /** @docs-private Implemented as part of ManagedFocusTrap. */
    ConfigurableFocusTrap.prototype._enable = function () {
        this._inertStrategy.preventFocus(this);
        this.toggleAnchors(true);
    };
    /** @docs-private Implemented as part of ManagedFocusTrap. */
    ConfigurableFocusTrap.prototype._disable = function () {
        this._inertStrategy.allowFocus(this);
        this.toggleAnchors(false);
    };
    return ConfigurableFocusTrap;
}(FocusTrap));
export { ConfigurableFocusTrap };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhYmxlLWZvY3VzLXRyYXAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY2RrL2ExMXkvZm9jdXMtdHJhcC9jb25maWd1cmFibGUtZm9jdXMtdHJhcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7O0FBSUgsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGNBQWMsQ0FBQztBQUt2Qzs7Ozs7R0FLRztBQUNIO0lBQTJDLHlDQUFTO0lBWWxELCtCQUNFLFFBQXFCLEVBQ3JCLFFBQThCLEVBQzlCLE9BQWUsRUFDZixTQUFtQixFQUNYLGlCQUFtQyxFQUNuQyxjQUFzQyxFQUM5QyxNQUFtQztRQVByQyxZQVFFLGtCQUFNLFFBQVEsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLFNBRTVEO1FBTFMsdUJBQWlCLEdBQWpCLGlCQUFpQixDQUFrQjtRQUNuQyxvQkFBYyxHQUFkLGNBQWMsQ0FBd0I7UUFHOUMsS0FBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxLQUFJLENBQUMsQ0FBQzs7SUFDeEMsQ0FBQztJQXBCRCxzQkFBSSwwQ0FBTztRQURYLHdDQUF3QzthQUN4QyxjQUF5QixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO2FBQ2hELFVBQVksS0FBYztZQUN4QixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztZQUN0QixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ2pCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDdkM7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUN6QztRQUNILENBQUM7OztPQVIrQztJQXNCaEQsMkVBQTJFO0lBQzNFLHVDQUFPLEdBQVA7UUFDRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hDLGlCQUFNLE9BQU8sV0FBRSxDQUFDO0lBQ2xCLENBQUM7SUFFRCw2REFBNkQ7SUFDN0QsdUNBQU8sR0FBUDtRQUNFLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVELDZEQUE2RDtJQUM3RCx3Q0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBQ0gsNEJBQUM7QUFBRCxDQUFDLEFBekNELENBQTJDLFNBQVMsR0F5Q25EIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7Tmdab25lfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7SW50ZXJhY3Rpdml0eUNoZWNrZXJ9IGZyb20gJy4uL2ludGVyYWN0aXZpdHktY2hlY2tlci9pbnRlcmFjdGl2aXR5LWNoZWNrZXInO1xuaW1wb3J0IHtGb2N1c1RyYXB9IGZyb20gJy4vZm9jdXMtdHJhcCc7XG5pbXBvcnQge0ZvY3VzVHJhcE1hbmFnZXIsIE1hbmFnZWRGb2N1c1RyYXB9IGZyb20gJy4vZm9jdXMtdHJhcC1tYW5hZ2VyJztcbmltcG9ydCB7Rm9jdXNUcmFwSW5lcnRTdHJhdGVneX0gZnJvbSAnLi9mb2N1cy10cmFwLWluZXJ0LXN0cmF0ZWd5JztcbmltcG9ydCB7Q29uZmlndXJhYmxlRm9jdXNUcmFwQ29uZmlnfSBmcm9tICcuL2NvbmZpZ3VyYWJsZS1mb2N1cy10cmFwLWNvbmZpZyc7XG5cbi8qKlxuICogQ2xhc3MgdGhhdCBhbGxvd3MgZm9yIHRyYXBwaW5nIGZvY3VzIHdpdGhpbiBhIERPTSBlbGVtZW50LlxuICpcbiAqIFRoaXMgY2xhc3MgdXNlcyBhIHN0cmF0ZWd5IHBhdHRlcm4gdGhhdCBkZXRlcm1pbmVzIGhvdyBpdCB0cmFwcyBmb2N1cy5cbiAqIFNlZSBGb2N1c1RyYXBJbmVydFN0cmF0ZWd5LlxuICovXG5leHBvcnQgY2xhc3MgQ29uZmlndXJhYmxlRm9jdXNUcmFwIGV4dGVuZHMgRm9jdXNUcmFwIGltcGxlbWVudHMgTWFuYWdlZEZvY3VzVHJhcCB7XG4gIC8qKiBXaGV0aGVyIHRoZSBGb2N1c1RyYXAgaXMgZW5hYmxlZC4gKi9cbiAgZ2V0IGVuYWJsZWQoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLl9lbmFibGVkOyB9XG4gIHNldCBlbmFibGVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fZW5hYmxlZCA9IHZhbHVlO1xuICAgIGlmICh0aGlzLl9lbmFibGVkKSB7XG4gICAgICB0aGlzLl9mb2N1c1RyYXBNYW5hZ2VyLnJlZ2lzdGVyKHRoaXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9mb2N1c1RyYXBNYW5hZ2VyLmRlcmVnaXN0ZXIodGhpcyk7XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgX2VsZW1lbnQ6IEhUTUxFbGVtZW50LFxuICAgIF9jaGVja2VyOiBJbnRlcmFjdGl2aXR5Q2hlY2tlcixcbiAgICBfbmdab25lOiBOZ1pvbmUsXG4gICAgX2RvY3VtZW50OiBEb2N1bWVudCxcbiAgICBwcml2YXRlIF9mb2N1c1RyYXBNYW5hZ2VyOiBGb2N1c1RyYXBNYW5hZ2VyLFxuICAgIHByaXZhdGUgX2luZXJ0U3RyYXRlZ3k6IEZvY3VzVHJhcEluZXJ0U3RyYXRlZ3ksXG4gICAgY29uZmlnOiBDb25maWd1cmFibGVGb2N1c1RyYXBDb25maWcpIHtcbiAgICBzdXBlcihfZWxlbWVudCwgX2NoZWNrZXIsIF9uZ1pvbmUsIF9kb2N1bWVudCwgY29uZmlnLmRlZmVyKTtcbiAgICB0aGlzLl9mb2N1c1RyYXBNYW5hZ2VyLnJlZ2lzdGVyKHRoaXMpO1xuICB9XG5cbiAgLyoqIE5vdGlmaWVzIHRoZSBGb2N1c1RyYXBNYW5hZ2VyIHRoYXQgdGhpcyBGb2N1c1RyYXAgd2lsbCBiZSBkZXN0cm95ZWQuICovXG4gIGRlc3Ryb3koKSB7XG4gICAgdGhpcy5fZm9jdXNUcmFwTWFuYWdlci5kZXJlZ2lzdGVyKHRoaXMpO1xuICAgIHN1cGVyLmRlc3Ryb3koKTtcbiAgfVxuXG4gIC8qKiBAZG9jcy1wcml2YXRlIEltcGxlbWVudGVkIGFzIHBhcnQgb2YgTWFuYWdlZEZvY3VzVHJhcC4gKi9cbiAgX2VuYWJsZSgpIHtcbiAgICB0aGlzLl9pbmVydFN0cmF0ZWd5LnByZXZlbnRGb2N1cyh0aGlzKTtcbiAgICB0aGlzLnRvZ2dsZUFuY2hvcnModHJ1ZSk7XG4gIH1cblxuICAvKiogQGRvY3MtcHJpdmF0ZSBJbXBsZW1lbnRlZCBhcyBwYXJ0IG9mIE1hbmFnZWRGb2N1c1RyYXAuICovXG4gIF9kaXNhYmxlKCkge1xuICAgIHRoaXMuX2luZXJ0U3RyYXRlZ3kuYWxsb3dGb2N1cyh0aGlzKTtcbiAgICB0aGlzLnRvZ2dsZUFuY2hvcnMoZmFsc2UpO1xuICB9XG59XG4iXX0=