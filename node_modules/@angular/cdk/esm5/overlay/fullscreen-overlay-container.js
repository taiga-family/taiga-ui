import { __extends } from "tslib";
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Injectable, Inject } from '@angular/core';
import { OverlayContainer } from './overlay-container';
import { DOCUMENT } from '@angular/common';
import { Platform } from '@angular/cdk/platform';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/cdk/platform";
/**
 * Alternative to OverlayContainer that supports correct displaying of overlay elements in
 * Fullscreen mode
 * https://developer.mozilla.org/en-US/docs/Web/API/Element/requestFullScreen
 *
 * Should be provided in the root component.
 */
var FullscreenOverlayContainer = /** @class */ (function (_super) {
    __extends(FullscreenOverlayContainer, _super);
    function FullscreenOverlayContainer(_document, 
    /**
     * @deprecated `platform` parameter to become required.
     * @breaking-change 10.0.0
     */
    platform) {
        return _super.call(this, _document, platform) || this;
    }
    FullscreenOverlayContainer.prototype.ngOnDestroy = function () {
        _super.prototype.ngOnDestroy.call(this);
        if (this._fullScreenEventName && this._fullScreenListener) {
            this._document.removeEventListener(this._fullScreenEventName, this._fullScreenListener);
        }
    };
    FullscreenOverlayContainer.prototype._createContainer = function () {
        var _this = this;
        _super.prototype._createContainer.call(this);
        this._adjustParentForFullscreenChange();
        this._addFullscreenChangeListener(function () { return _this._adjustParentForFullscreenChange(); });
    };
    FullscreenOverlayContainer.prototype._adjustParentForFullscreenChange = function () {
        if (!this._containerElement) {
            return;
        }
        var fullscreenElement = this.getFullscreenElement();
        var parent = fullscreenElement || this._document.body;
        parent.appendChild(this._containerElement);
    };
    FullscreenOverlayContainer.prototype._addFullscreenChangeListener = function (fn) {
        var eventName = this._getEventName();
        if (eventName) {
            if (this._fullScreenListener) {
                this._document.removeEventListener(eventName, this._fullScreenListener);
            }
            this._document.addEventListener(eventName, fn);
            this._fullScreenListener = fn;
        }
    };
    FullscreenOverlayContainer.prototype._getEventName = function () {
        if (!this._fullScreenEventName) {
            var _document = this._document;
            if (_document.fullscreenEnabled) {
                this._fullScreenEventName = 'fullscreenchange';
            }
            else if (_document.webkitFullscreenEnabled) {
                this._fullScreenEventName = 'webkitfullscreenchange';
            }
            else if (_document.mozFullScreenEnabled) {
                this._fullScreenEventName = 'mozfullscreenchange';
            }
            else if (_document.msFullscreenEnabled) {
                this._fullScreenEventName = 'MSFullscreenChange';
            }
        }
        return this._fullScreenEventName;
    };
    /**
     * When the page is put into fullscreen mode, a specific element is specified.
     * Only that element and its children are visible when in fullscreen mode.
     */
    FullscreenOverlayContainer.prototype.getFullscreenElement = function () {
        var _document = this._document;
        return _document.fullscreenElement ||
            _document.webkitFullscreenElement ||
            _document.mozFullScreenElement ||
            _document.msFullscreenElement ||
            null;
    };
    FullscreenOverlayContainer.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    FullscreenOverlayContainer.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: Platform }
    ]; };
    FullscreenOverlayContainer.ɵprov = i0.ɵɵdefineInjectable({ factory: function FullscreenOverlayContainer_Factory() { return new FullscreenOverlayContainer(i0.ɵɵinject(i1.DOCUMENT), i0.ɵɵinject(i2.Platform)); }, token: FullscreenOverlayContainer, providedIn: "root" });
    return FullscreenOverlayContainer;
}(OverlayContainer));
export { FullscreenOverlayContainer };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVsbHNjcmVlbi1vdmVybGF5LWNvbnRhaW5lci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jZGsvb3ZlcmxheS9mdWxsc2NyZWVuLW92ZXJsYXktY29udGFpbmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUMsVUFBVSxFQUFFLE1BQU0sRUFBWSxNQUFNLGVBQWUsQ0FBQztBQUM1RCxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUNyRCxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDekMsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLHVCQUF1QixDQUFDOzs7O0FBRy9DOzs7Ozs7R0FNRztBQUNIO0lBQ2dELDhDQUFnQjtJQUk5RCxvQ0FDb0IsU0FBYztJQUNoQzs7O09BR0c7SUFDSCxRQUFtQjtlQUNuQixrQkFBTSxTQUFTLEVBQUUsUUFBUSxDQUFDO0lBQzVCLENBQUM7SUFFRCxnREFBVyxHQUFYO1FBQ0UsaUJBQU0sV0FBVyxXQUFFLENBQUM7UUFFcEIsSUFBSSxJQUFJLENBQUMsb0JBQW9CLElBQUksSUFBSSxDQUFDLG1CQUFtQixFQUFFO1lBQ3pELElBQUksQ0FBQyxTQUFTLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLG9CQUFvQixFQUFFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1NBQ3pGO0lBQ0gsQ0FBQztJQUVTLHFEQUFnQixHQUExQjtRQUFBLGlCQUlDO1FBSEMsaUJBQU0sZ0JBQWdCLFdBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsZ0NBQWdDLEVBQUUsQ0FBQztRQUN4QyxJQUFJLENBQUMsNEJBQTRCLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxnQ0FBZ0MsRUFBRSxFQUF2QyxDQUF1QyxDQUFDLENBQUM7SUFDbkYsQ0FBQztJQUVPLHFFQUFnQyxHQUF4QztRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUU7WUFDM0IsT0FBTztTQUNSO1FBRUQsSUFBTSxpQkFBaUIsR0FBRyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztRQUN0RCxJQUFNLE1BQU0sR0FBRyxpQkFBaUIsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQztRQUN4RCxNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFTyxpRUFBNEIsR0FBcEMsVUFBcUMsRUFBYztRQUNqRCxJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFFdkMsSUFBSSxTQUFTLEVBQUU7WUFDYixJQUFJLElBQUksQ0FBQyxtQkFBbUIsRUFBRTtnQkFDNUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUM7YUFDekU7WUFFRCxJQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUMvQyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsRUFBRSxDQUFDO1NBQy9CO0lBQ0gsQ0FBQztJQUVPLGtEQUFhLEdBQXJCO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsRUFBRTtZQUM5QixJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBZ0IsQ0FBQztZQUV4QyxJQUFJLFNBQVMsQ0FBQyxpQkFBaUIsRUFBRTtnQkFDL0IsSUFBSSxDQUFDLG9CQUFvQixHQUFHLGtCQUFrQixDQUFDO2FBQ2hEO2lCQUFNLElBQUksU0FBUyxDQUFDLHVCQUF1QixFQUFFO2dCQUM1QyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsd0JBQXdCLENBQUM7YUFDdEQ7aUJBQU0sSUFBSSxTQUFTLENBQUMsb0JBQW9CLEVBQUU7Z0JBQ3pDLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxxQkFBcUIsQ0FBQzthQUNuRDtpQkFBTSxJQUFJLFNBQVMsQ0FBQyxtQkFBbUIsRUFBRTtnQkFDeEMsSUFBSSxDQUFDLG9CQUFvQixHQUFHLG9CQUFvQixDQUFDO2FBQ2xEO1NBQ0Y7UUFFRCxPQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQztJQUNuQyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gseURBQW9CLEdBQXBCO1FBQ0UsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQWdCLENBQUM7UUFFeEMsT0FBTyxTQUFTLENBQUMsaUJBQWlCO1lBQzNCLFNBQVMsQ0FBQyx1QkFBdUI7WUFDakMsU0FBUyxDQUFDLG9CQUFvQjtZQUM5QixTQUFTLENBQUMsbUJBQW1CO1lBQzdCLElBQUksQ0FBQztJQUNkLENBQUM7O2dCQWxGRixVQUFVLFNBQUMsRUFBQyxVQUFVLEVBQUUsTUFBTSxFQUFDOzs7O2dEQU0zQixNQUFNLFNBQUMsUUFBUTtnQkFoQlosUUFBUTs7O3FDQVhoQjtDQXdHQyxBQW5GRCxDQUNnRCxnQkFBZ0IsR0FrRi9EO1NBbEZZLDBCQUEwQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge0luamVjdGFibGUsIEluamVjdCwgT25EZXN0cm95fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7T3ZlcmxheUNvbnRhaW5lcn0gZnJvbSAnLi9vdmVybGF5LWNvbnRhaW5lcic7XG5pbXBvcnQge0RPQ1VNRU5UfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtQbGF0Zm9ybX0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcblxuXG4vKipcbiAqIEFsdGVybmF0aXZlIHRvIE92ZXJsYXlDb250YWluZXIgdGhhdCBzdXBwb3J0cyBjb3JyZWN0IGRpc3BsYXlpbmcgb2Ygb3ZlcmxheSBlbGVtZW50cyBpblxuICogRnVsbHNjcmVlbiBtb2RlXG4gKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRWxlbWVudC9yZXF1ZXN0RnVsbFNjcmVlblxuICpcbiAqIFNob3VsZCBiZSBwcm92aWRlZCBpbiB0aGUgcm9vdCBjb21wb25lbnQuXG4gKi9cbkBJbmplY3RhYmxlKHtwcm92aWRlZEluOiAncm9vdCd9KVxuZXhwb3J0IGNsYXNzIEZ1bGxzY3JlZW5PdmVybGF5Q29udGFpbmVyIGV4dGVuZHMgT3ZlcmxheUNvbnRhaW5lciBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgX2Z1bGxTY3JlZW5FdmVudE5hbWU6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgcHJpdmF0ZSBfZnVsbFNjcmVlbkxpc3RlbmVyOiAoKSA9PiB2b2lkO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoRE9DVU1FTlQpIF9kb2N1bWVudDogYW55LFxuICAgIC8qKlxuICAgICAqIEBkZXByZWNhdGVkIGBwbGF0Zm9ybWAgcGFyYW1ldGVyIHRvIGJlY29tZSByZXF1aXJlZC5cbiAgICAgKiBAYnJlYWtpbmctY2hhbmdlIDEwLjAuMFxuICAgICAqL1xuICAgIHBsYXRmb3JtPzogUGxhdGZvcm0pIHtcbiAgICBzdXBlcihfZG9jdW1lbnQsIHBsYXRmb3JtKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHN1cGVyLm5nT25EZXN0cm95KCk7XG5cbiAgICBpZiAodGhpcy5fZnVsbFNjcmVlbkV2ZW50TmFtZSAmJiB0aGlzLl9mdWxsU2NyZWVuTGlzdGVuZXIpIHtcbiAgICAgIHRoaXMuX2RvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodGhpcy5fZnVsbFNjcmVlbkV2ZW50TmFtZSwgdGhpcy5fZnVsbFNjcmVlbkxpc3RlbmVyKTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgX2NyZWF0ZUNvbnRhaW5lcigpOiB2b2lkIHtcbiAgICBzdXBlci5fY3JlYXRlQ29udGFpbmVyKCk7XG4gICAgdGhpcy5fYWRqdXN0UGFyZW50Rm9yRnVsbHNjcmVlbkNoYW5nZSgpO1xuICAgIHRoaXMuX2FkZEZ1bGxzY3JlZW5DaGFuZ2VMaXN0ZW5lcigoKSA9PiB0aGlzLl9hZGp1c3RQYXJlbnRGb3JGdWxsc2NyZWVuQ2hhbmdlKCkpO1xuICB9XG5cbiAgcHJpdmF0ZSBfYWRqdXN0UGFyZW50Rm9yRnVsbHNjcmVlbkNoYW5nZSgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuX2NvbnRhaW5lckVsZW1lbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBmdWxsc2NyZWVuRWxlbWVudCA9IHRoaXMuZ2V0RnVsbHNjcmVlbkVsZW1lbnQoKTtcbiAgICBjb25zdCBwYXJlbnQgPSBmdWxsc2NyZWVuRWxlbWVudCB8fCB0aGlzLl9kb2N1bWVudC5ib2R5O1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZCh0aGlzLl9jb250YWluZXJFbGVtZW50KTtcbiAgfVxuXG4gIHByaXZhdGUgX2FkZEZ1bGxzY3JlZW5DaGFuZ2VMaXN0ZW5lcihmbjogKCkgPT4gdm9pZCkge1xuICAgIGNvbnN0IGV2ZW50TmFtZSA9IHRoaXMuX2dldEV2ZW50TmFtZSgpO1xuXG4gICAgaWYgKGV2ZW50TmFtZSkge1xuICAgICAgaWYgKHRoaXMuX2Z1bGxTY3JlZW5MaXN0ZW5lcikge1xuICAgICAgICB0aGlzLl9kb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgdGhpcy5fZnVsbFNjcmVlbkxpc3RlbmVyKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGZuKTtcbiAgICAgIHRoaXMuX2Z1bGxTY3JlZW5MaXN0ZW5lciA9IGZuO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2dldEV2ZW50TmFtZSgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIGlmICghdGhpcy5fZnVsbFNjcmVlbkV2ZW50TmFtZSkge1xuICAgICAgY29uc3QgX2RvY3VtZW50ID0gdGhpcy5fZG9jdW1lbnQgYXMgYW55O1xuXG4gICAgICBpZiAoX2RvY3VtZW50LmZ1bGxzY3JlZW5FbmFibGVkKSB7XG4gICAgICAgIHRoaXMuX2Z1bGxTY3JlZW5FdmVudE5hbWUgPSAnZnVsbHNjcmVlbmNoYW5nZSc7XG4gICAgICB9IGVsc2UgaWYgKF9kb2N1bWVudC53ZWJraXRGdWxsc2NyZWVuRW5hYmxlZCkge1xuICAgICAgICB0aGlzLl9mdWxsU2NyZWVuRXZlbnROYW1lID0gJ3dlYmtpdGZ1bGxzY3JlZW5jaGFuZ2UnO1xuICAgICAgfSBlbHNlIGlmIChfZG9jdW1lbnQubW96RnVsbFNjcmVlbkVuYWJsZWQpIHtcbiAgICAgICAgdGhpcy5fZnVsbFNjcmVlbkV2ZW50TmFtZSA9ICdtb3pmdWxsc2NyZWVuY2hhbmdlJztcbiAgICAgIH0gZWxzZSBpZiAoX2RvY3VtZW50Lm1zRnVsbHNjcmVlbkVuYWJsZWQpIHtcbiAgICAgICAgdGhpcy5fZnVsbFNjcmVlbkV2ZW50TmFtZSA9ICdNU0Z1bGxzY3JlZW5DaGFuZ2UnO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9mdWxsU2NyZWVuRXZlbnROYW1lO1xuICB9XG5cbiAgLyoqXG4gICAqIFdoZW4gdGhlIHBhZ2UgaXMgcHV0IGludG8gZnVsbHNjcmVlbiBtb2RlLCBhIHNwZWNpZmljIGVsZW1lbnQgaXMgc3BlY2lmaWVkLlxuICAgKiBPbmx5IHRoYXQgZWxlbWVudCBhbmQgaXRzIGNoaWxkcmVuIGFyZSB2aXNpYmxlIHdoZW4gaW4gZnVsbHNjcmVlbiBtb2RlLlxuICAgKi9cbiAgZ2V0RnVsbHNjcmVlbkVsZW1lbnQoKTogRWxlbWVudCB7XG4gICAgY29uc3QgX2RvY3VtZW50ID0gdGhpcy5fZG9jdW1lbnQgYXMgYW55O1xuXG4gICAgcmV0dXJuIF9kb2N1bWVudC5mdWxsc2NyZWVuRWxlbWVudCB8fFxuICAgICAgICAgICBfZG9jdW1lbnQud2Via2l0RnVsbHNjcmVlbkVsZW1lbnQgfHxcbiAgICAgICAgICAgX2RvY3VtZW50Lm1vekZ1bGxTY3JlZW5FbGVtZW50IHx8XG4gICAgICAgICAgIF9kb2N1bWVudC5tc0Z1bGxzY3JlZW5FbGVtZW50IHx8XG4gICAgICAgICAgIG51bGw7XG4gIH1cbn1cbiJdfQ==