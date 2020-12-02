/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/overlay/scroll/close-scroll-strategy.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { getMatScrollStrategyAlreadyAttachedError } from './scroll-strategy';
/**
 * Config options for the CloseScrollStrategy.
 * @record
 */
export function CloseScrollStrategyConfig() { }
if (false) {
    /**
     * Amount of pixels the user has to scroll before the overlay is closed.
     * @type {?|undefined}
     */
    CloseScrollStrategyConfig.prototype.threshold;
}
/**
 * Strategy that will close the overlay as soon as the user starts scrolling.
 */
export class CloseScrollStrategy {
    /**
     * @param {?} _scrollDispatcher
     * @param {?} _ngZone
     * @param {?} _viewportRuler
     * @param {?=} _config
     */
    constructor(_scrollDispatcher, _ngZone, _viewportRuler, _config) {
        this._scrollDispatcher = _scrollDispatcher;
        this._ngZone = _ngZone;
        this._viewportRuler = _viewportRuler;
        this._config = _config;
        this._scrollSubscription = null;
        /**
         * Detaches the overlay ref and disables the scroll strategy.
         */
        this._detach = (/**
         * @return {?}
         */
        () => {
            this.disable();
            if (this._overlayRef.hasAttached()) {
                this._ngZone.run((/**
                 * @return {?}
                 */
                () => this._overlayRef.detach()));
            }
        });
    }
    /**
     * Attaches this scroll strategy to an overlay.
     * @param {?} overlayRef
     * @return {?}
     */
    attach(overlayRef) {
        if (this._overlayRef) {
            throw getMatScrollStrategyAlreadyAttachedError();
        }
        this._overlayRef = overlayRef;
    }
    /**
     * Enables the closing of the attached overlay on scroll.
     * @return {?}
     */
    enable() {
        if (this._scrollSubscription) {
            return;
        }
        /** @type {?} */
        const stream = this._scrollDispatcher.scrolled(0);
        if (this._config && this._config.threshold && this._config.threshold > 1) {
            this._initialScrollPosition = this._viewportRuler.getViewportScrollPosition().top;
            this._scrollSubscription = stream.subscribe((/**
             * @return {?}
             */
            () => {
                /** @type {?} */
                const scrollPosition = this._viewportRuler.getViewportScrollPosition().top;
                if (Math.abs(scrollPosition - this._initialScrollPosition) > (/** @type {?} */ ((/** @type {?} */ (this._config)).threshold))) {
                    this._detach();
                }
                else {
                    this._overlayRef.updatePosition();
                }
            }));
        }
        else {
            this._scrollSubscription = stream.subscribe(this._detach);
        }
    }
    /**
     * Disables the closing the attached overlay on scroll.
     * @return {?}
     */
    disable() {
        if (this._scrollSubscription) {
            this._scrollSubscription.unsubscribe();
            this._scrollSubscription = null;
        }
    }
    /**
     * @return {?}
     */
    detach() {
        this.disable();
        this._overlayRef = (/** @type {?} */ (null));
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    CloseScrollStrategy.prototype._scrollSubscription;
    /**
     * @type {?}
     * @private
     */
    CloseScrollStrategy.prototype._overlayRef;
    /**
     * @type {?}
     * @private
     */
    CloseScrollStrategy.prototype._initialScrollPosition;
    /**
     * Detaches the overlay ref and disables the scroll strategy.
     * @type {?}
     * @private
     */
    CloseScrollStrategy.prototype._detach;
    /**
     * @type {?}
     * @private
     */
    CloseScrollStrategy.prototype._scrollDispatcher;
    /**
     * @type {?}
     * @private
     */
    CloseScrollStrategy.prototype._ngZone;
    /**
     * @type {?}
     * @private
     */
    CloseScrollStrategy.prototype._viewportRuler;
    /**
     * @type {?}
     * @private
     */
    CloseScrollStrategy.prototype._config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvc2Utc2Nyb2xsLXN0cmF0ZWd5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2Nkay9vdmVybGF5L3Njcm9sbC9jbG9zZS1zY3JvbGwtc3RyYXRlZ3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFRQSxPQUFPLEVBQWlCLHdDQUF3QyxFQUFDLE1BQU0sbUJBQW1CLENBQUM7Ozs7O0FBUTNGLCtDQUdDOzs7Ozs7SUFEQyw4Q0FBbUI7Ozs7O0FBTXJCLE1BQU0sT0FBTyxtQkFBbUI7Ozs7Ozs7SUFLOUIsWUFDVSxpQkFBbUMsRUFDbkMsT0FBZSxFQUNmLGNBQTZCLEVBQzdCLE9BQW1DO1FBSG5DLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBa0I7UUFDbkMsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUNmLG1CQUFjLEdBQWQsY0FBYyxDQUFlO1FBQzdCLFlBQU8sR0FBUCxPQUFPLENBQTRCO1FBUnJDLHdCQUFtQixHQUFzQixJQUFJLENBQUM7Ozs7UUEwRDlDLFlBQU87OztRQUFHLEdBQUcsRUFBRTtZQUNyQixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFFZixJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLEVBQUU7Z0JBQ2xDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRzs7O2dCQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLEVBQUMsQ0FBQzthQUNuRDtRQUNILENBQUMsRUFBQTtJQXhEK0MsQ0FBQzs7Ozs7O0lBR2pELE1BQU0sQ0FBQyxVQUE0QjtRQUNqQyxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDcEIsTUFBTSx3Q0FBd0MsRUFBRSxDQUFDO1NBQ2xEO1FBRUQsSUFBSSxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUM7SUFDaEMsQ0FBQzs7Ozs7SUFHRCxNQUFNO1FBQ0osSUFBSSxJQUFJLENBQUMsbUJBQW1CLEVBQUU7WUFDNUIsT0FBTztTQUNSOztjQUVLLE1BQU0sR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUVqRCxJQUFJLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsQ0FBQyxFQUFFO1lBQ3hFLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLHlCQUF5QixFQUFFLENBQUMsR0FBRyxDQUFDO1lBRWxGLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxNQUFNLENBQUMsU0FBUzs7O1lBQUMsR0FBRyxFQUFFOztzQkFDekMsY0FBYyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMseUJBQXlCLEVBQUUsQ0FBQyxHQUFHO2dCQUUxRSxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxHQUFHLG1CQUFBLG1CQUFBLElBQUksQ0FBQyxPQUFPLEVBQUMsQ0FBQyxTQUFTLEVBQUMsRUFBRTtvQkFDckYsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO2lCQUNoQjtxQkFBTTtvQkFDTCxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsRUFBRSxDQUFDO2lCQUNuQztZQUNILENBQUMsRUFBQyxDQUFDO1NBQ0o7YUFBTTtZQUNMLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUMzRDtJQUNILENBQUM7Ozs7O0lBR0QsT0FBTztRQUNMLElBQUksSUFBSSxDQUFDLG1CQUFtQixFQUFFO1lBQzVCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUN2QyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDO1NBQ2pDO0lBQ0gsQ0FBQzs7OztJQUVELE1BQU07UUFDSixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDZixJQUFJLENBQUMsV0FBVyxHQUFHLG1CQUFBLElBQUksRUFBQyxDQUFDO0lBQzNCLENBQUM7Q0FVRjs7Ozs7O0lBakVDLGtEQUFzRDs7Ozs7SUFDdEQsMENBQXNDOzs7OztJQUN0QyxxREFBdUM7Ozs7OztJQXdEdkMsc0NBTUM7Ozs7O0lBM0RDLGdEQUEyQzs7Ozs7SUFDM0Msc0NBQXVCOzs7OztJQUN2Qiw2Q0FBcUM7Ozs7O0lBQ3JDLHNDQUEyQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuaW1wb3J0IHtOZ1pvbmV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtTY3JvbGxTdHJhdGVneSwgZ2V0TWF0U2Nyb2xsU3RyYXRlZ3lBbHJlYWR5QXR0YWNoZWRFcnJvcn0gZnJvbSAnLi9zY3JvbGwtc3RyYXRlZ3knO1xuaW1wb3J0IHtPdmVybGF5UmVmZXJlbmNlfSBmcm9tICcuLi9vdmVybGF5LXJlZmVyZW5jZSc7XG5pbXBvcnQge1N1YnNjcmlwdGlvbn0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1Njcm9sbERpc3BhdGNoZXIsIFZpZXdwb3J0UnVsZXJ9IGZyb20gJ0Bhbmd1bGFyL2Nkay9zY3JvbGxpbmcnO1xuXG4vKipcbiAqIENvbmZpZyBvcHRpb25zIGZvciB0aGUgQ2xvc2VTY3JvbGxTdHJhdGVneS5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBDbG9zZVNjcm9sbFN0cmF0ZWd5Q29uZmlnIHtcbiAgLyoqIEFtb3VudCBvZiBwaXhlbHMgdGhlIHVzZXIgaGFzIHRvIHNjcm9sbCBiZWZvcmUgdGhlIG92ZXJsYXkgaXMgY2xvc2VkLiAqL1xuICB0aHJlc2hvbGQ/OiBudW1iZXI7XG59XG5cbi8qKlxuICogU3RyYXRlZ3kgdGhhdCB3aWxsIGNsb3NlIHRoZSBvdmVybGF5IGFzIHNvb24gYXMgdGhlIHVzZXIgc3RhcnRzIHNjcm9sbGluZy5cbiAqL1xuZXhwb3J0IGNsYXNzIENsb3NlU2Nyb2xsU3RyYXRlZ3kgaW1wbGVtZW50cyBTY3JvbGxTdHJhdGVneSB7XG4gIHByaXZhdGUgX3Njcm9sbFN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9ufG51bGwgPSBudWxsO1xuICBwcml2YXRlIF9vdmVybGF5UmVmOiBPdmVybGF5UmVmZXJlbmNlO1xuICBwcml2YXRlIF9pbml0aWFsU2Nyb2xsUG9zaXRpb246IG51bWJlcjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9zY3JvbGxEaXNwYXRjaGVyOiBTY3JvbGxEaXNwYXRjaGVyLFxuICAgIHByaXZhdGUgX25nWm9uZTogTmdab25lLFxuICAgIHByaXZhdGUgX3ZpZXdwb3J0UnVsZXI6IFZpZXdwb3J0UnVsZXIsXG4gICAgcHJpdmF0ZSBfY29uZmlnPzogQ2xvc2VTY3JvbGxTdHJhdGVneUNvbmZpZykge31cblxuICAvKiogQXR0YWNoZXMgdGhpcyBzY3JvbGwgc3RyYXRlZ3kgdG8gYW4gb3ZlcmxheS4gKi9cbiAgYXR0YWNoKG92ZXJsYXlSZWY6IE92ZXJsYXlSZWZlcmVuY2UpIHtcbiAgICBpZiAodGhpcy5fb3ZlcmxheVJlZikge1xuICAgICAgdGhyb3cgZ2V0TWF0U2Nyb2xsU3RyYXRlZ3lBbHJlYWR5QXR0YWNoZWRFcnJvcigpO1xuICAgIH1cblxuICAgIHRoaXMuX292ZXJsYXlSZWYgPSBvdmVybGF5UmVmO1xuICB9XG5cbiAgLyoqIEVuYWJsZXMgdGhlIGNsb3Npbmcgb2YgdGhlIGF0dGFjaGVkIG92ZXJsYXkgb24gc2Nyb2xsLiAqL1xuICBlbmFibGUoKSB7XG4gICAgaWYgKHRoaXMuX3Njcm9sbFN1YnNjcmlwdGlvbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHN0cmVhbSA9IHRoaXMuX3Njcm9sbERpc3BhdGNoZXIuc2Nyb2xsZWQoMCk7XG5cbiAgICBpZiAodGhpcy5fY29uZmlnICYmIHRoaXMuX2NvbmZpZy50aHJlc2hvbGQgJiYgdGhpcy5fY29uZmlnLnRocmVzaG9sZCA+IDEpIHtcbiAgICAgIHRoaXMuX2luaXRpYWxTY3JvbGxQb3NpdGlvbiA9IHRoaXMuX3ZpZXdwb3J0UnVsZXIuZ2V0Vmlld3BvcnRTY3JvbGxQb3NpdGlvbigpLnRvcDtcblxuICAgICAgdGhpcy5fc2Nyb2xsU3Vic2NyaXB0aW9uID0gc3RyZWFtLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHNjcm9sbFBvc2l0aW9uID0gdGhpcy5fdmlld3BvcnRSdWxlci5nZXRWaWV3cG9ydFNjcm9sbFBvc2l0aW9uKCkudG9wO1xuXG4gICAgICAgIGlmIChNYXRoLmFicyhzY3JvbGxQb3NpdGlvbiAtIHRoaXMuX2luaXRpYWxTY3JvbGxQb3NpdGlvbikgPiB0aGlzLl9jb25maWchLnRocmVzaG9sZCEpIHtcbiAgICAgICAgICB0aGlzLl9kZXRhY2goKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLl9vdmVybGF5UmVmLnVwZGF0ZVBvc2l0aW9uKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9zY3JvbGxTdWJzY3JpcHRpb24gPSBzdHJlYW0uc3Vic2NyaWJlKHRoaXMuX2RldGFjaCk7XG4gICAgfVxuICB9XG5cbiAgLyoqIERpc2FibGVzIHRoZSBjbG9zaW5nIHRoZSBhdHRhY2hlZCBvdmVybGF5IG9uIHNjcm9sbC4gKi9cbiAgZGlzYWJsZSgpIHtcbiAgICBpZiAodGhpcy5fc2Nyb2xsU3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLl9zY3JvbGxTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgIHRoaXMuX3Njcm9sbFN1YnNjcmlwdGlvbiA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgZGV0YWNoKCkge1xuICAgIHRoaXMuZGlzYWJsZSgpO1xuICAgIHRoaXMuX292ZXJsYXlSZWYgPSBudWxsITtcbiAgfVxuXG4gIC8qKiBEZXRhY2hlcyB0aGUgb3ZlcmxheSByZWYgYW5kIGRpc2FibGVzIHRoZSBzY3JvbGwgc3RyYXRlZ3kuICovXG4gIHByaXZhdGUgX2RldGFjaCA9ICgpID0+IHtcbiAgICB0aGlzLmRpc2FibGUoKTtcblxuICAgIGlmICh0aGlzLl9vdmVybGF5UmVmLmhhc0F0dGFjaGVkKCkpIHtcbiAgICAgIHRoaXMuX25nWm9uZS5ydW4oKCkgPT4gdGhpcy5fb3ZlcmxheVJlZi5kZXRhY2goKSk7XG4gICAgfVxuICB9XG59XG4iXX0=