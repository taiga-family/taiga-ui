/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/overlay/scroll/block-scroll-strategy.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { coerceCssPixelValue } from '@angular/cdk/coercion';
/**
 * Strategy that will prevent the user from scrolling while the overlay is visible.
 */
export class BlockScrollStrategy {
    /**
     * @param {?} _viewportRuler
     * @param {?} document
     */
    constructor(_viewportRuler, document) {
        this._viewportRuler = _viewportRuler;
        this._previousHTMLStyles = { top: '', left: '' };
        this._isEnabled = false;
        this._document = document;
    }
    /**
     * Attaches this scroll strategy to an overlay.
     * @return {?}
     */
    attach() { }
    /**
     * Blocks page-level scroll while the attached overlay is open.
     * @return {?}
     */
    enable() {
        if (this._canBeEnabled()) {
            /** @type {?} */
            const root = (/** @type {?} */ (this._document.documentElement));
            this._previousScrollPosition = this._viewportRuler.getViewportScrollPosition();
            // Cache the previous inline styles in case the user had set them.
            this._previousHTMLStyles.left = root.style.left || '';
            this._previousHTMLStyles.top = root.style.top || '';
            // Note: we're using the `html` node, instead of the `body`, because the `body` may
            // have the user agent margin, whereas the `html` is guaranteed not to have one.
            root.style.left = coerceCssPixelValue(-this._previousScrollPosition.left);
            root.style.top = coerceCssPixelValue(-this._previousScrollPosition.top);
            root.classList.add('cdk-global-scrollblock');
            this._isEnabled = true;
        }
    }
    /**
     * Unblocks page-level scroll while the attached overlay is open.
     * @return {?}
     */
    disable() {
        if (this._isEnabled) {
            /** @type {?} */
            const html = (/** @type {?} */ (this._document.documentElement));
            /** @type {?} */
            const body = (/** @type {?} */ (this._document.body));
            /** @type {?} */
            const htmlStyle = (/** @type {?} */ (html.style));
            /** @type {?} */
            const bodyStyle = (/** @type {?} */ (body.style));
            /** @type {?} */
            const previousHtmlScrollBehavior = htmlStyle.scrollBehavior || '';
            /** @type {?} */
            const previousBodyScrollBehavior = bodyStyle.scrollBehavior || '';
            this._isEnabled = false;
            htmlStyle.left = this._previousHTMLStyles.left;
            htmlStyle.top = this._previousHTMLStyles.top;
            html.classList.remove('cdk-global-scrollblock');
            // Disable user-defined smooth scrolling temporarily while we restore the scroll position.
            // See https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-behavior
            htmlStyle.scrollBehavior = bodyStyle.scrollBehavior = 'auto';
            window.scroll(this._previousScrollPosition.left, this._previousScrollPosition.top);
            htmlStyle.scrollBehavior = previousHtmlScrollBehavior;
            bodyStyle.scrollBehavior = previousBodyScrollBehavior;
        }
    }
    /**
     * @private
     * @return {?}
     */
    _canBeEnabled() {
        // Since the scroll strategies can't be singletons, we have to use a global CSS class
        // (`cdk-global-scrollblock`) to make sure that we don't try to disable global
        // scrolling multiple times.
        /** @type {?} */
        const html = (/** @type {?} */ (this._document.documentElement));
        if (html.classList.contains('cdk-global-scrollblock') || this._isEnabled) {
            return false;
        }
        /** @type {?} */
        const body = this._document.body;
        /** @type {?} */
        const viewport = this._viewportRuler.getViewportSize();
        return body.scrollHeight > viewport.height || body.scrollWidth > viewport.width;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    BlockScrollStrategy.prototype._previousHTMLStyles;
    /**
     * @type {?}
     * @private
     */
    BlockScrollStrategy.prototype._previousScrollPosition;
    /**
     * @type {?}
     * @private
     */
    BlockScrollStrategy.prototype._isEnabled;
    /**
     * @type {?}
     * @private
     */
    BlockScrollStrategy.prototype._document;
    /**
     * @type {?}
     * @private
     */
    BlockScrollStrategy.prototype._viewportRuler;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvY2stc2Nyb2xsLXN0cmF0ZWd5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2Nkay9vdmVybGF5L3Njcm9sbC9ibG9jay1zY3JvbGwtc3RyYXRlZ3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBVUEsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sdUJBQXVCLENBQUM7Ozs7QUFZMUQsTUFBTSxPQUFPLG1CQUFtQjs7Ozs7SUFNOUIsWUFBb0IsY0FBNkIsRUFBRSxRQUFhO1FBQTVDLG1CQUFjLEdBQWQsY0FBYyxDQUFlO1FBTHpDLHdCQUFtQixHQUFHLEVBQUMsR0FBRyxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFDLENBQUM7UUFFMUMsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUl6QixJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztJQUM1QixDQUFDOzs7OztJQUdELE1BQU0sS0FBSyxDQUFDOzs7OztJQUdaLE1BQU07UUFDSixJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUUsRUFBRTs7a0JBQ2xCLElBQUksR0FBRyxtQkFBQSxJQUFJLENBQUMsU0FBUyxDQUFDLGVBQWUsRUFBQztZQUU1QyxJQUFJLENBQUMsdUJBQXVCLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyx5QkFBeUIsRUFBRSxDQUFDO1lBRS9FLGtFQUFrRTtZQUNsRSxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQztZQUN0RCxJQUFJLENBQUMsbUJBQW1CLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQztZQUVwRCxtRkFBbUY7WUFDbkYsZ0ZBQWdGO1lBQ2hGLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLG1CQUFtQixDQUFDLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzFFLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLG1CQUFtQixDQUFDLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3hFLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUM7WUFDN0MsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7U0FDeEI7SUFDSCxDQUFDOzs7OztJQUdELE9BQU87UUFDTCxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7O2tCQUNiLElBQUksR0FBRyxtQkFBQSxJQUFJLENBQUMsU0FBUyxDQUFDLGVBQWUsRUFBQzs7a0JBQ3RDLElBQUksR0FBRyxtQkFBQSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBQzs7a0JBQzNCLFNBQVMsR0FBRyxtQkFBQSxJQUFJLENBQUMsS0FBSyxFQUFxQzs7a0JBQzNELFNBQVMsR0FBRyxtQkFBQSxJQUFJLENBQUMsS0FBSyxFQUFxQzs7a0JBQzNELDBCQUEwQixHQUFHLFNBQVMsQ0FBQyxjQUFjLElBQUksRUFBRTs7a0JBQzNELDBCQUEwQixHQUFHLFNBQVMsQ0FBQyxjQUFjLElBQUksRUFBRTtZQUVqRSxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztZQUV4QixTQUFTLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUM7WUFDL0MsU0FBUyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsR0FBRyxDQUFDO1lBQzdDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLHdCQUF3QixDQUFDLENBQUM7WUFFaEQsMEZBQTBGO1lBQzFGLHVFQUF1RTtZQUN2RSxTQUFTLENBQUMsY0FBYyxHQUFHLFNBQVMsQ0FBQyxjQUFjLEdBQUcsTUFBTSxDQUFDO1lBRTdELE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsdUJBQXVCLENBQUMsR0FBRyxDQUFDLENBQUM7WUFFbkYsU0FBUyxDQUFDLGNBQWMsR0FBRywwQkFBMEIsQ0FBQztZQUN0RCxTQUFTLENBQUMsY0FBYyxHQUFHLDBCQUEwQixDQUFDO1NBQ3ZEO0lBQ0gsQ0FBQzs7Ozs7SUFFTyxhQUFhOzs7OztjQUliLElBQUksR0FBRyxtQkFBQSxJQUFJLENBQUMsU0FBUyxDQUFDLGVBQWUsRUFBQztRQUU1QyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLHdCQUF3QixDQUFDLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUN4RSxPQUFPLEtBQUssQ0FBQztTQUNkOztjQUVLLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUk7O2NBQzFCLFFBQVEsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLGVBQWUsRUFBRTtRQUN0RCxPQUFPLElBQUksQ0FBQyxZQUFZLEdBQUcsUUFBUSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsV0FBVyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUM7SUFDbEYsQ0FBQztDQUNGOzs7Ozs7SUF6RUMsa0RBQWtEOzs7OztJQUNsRCxzREFBK0Q7Ozs7O0lBQy9ELHlDQUEyQjs7Ozs7SUFDM0Isd0NBQTRCOzs7OztJQUVoQiw2Q0FBcUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtTY3JvbGxTdHJhdGVneX0gZnJvbSAnLi9zY3JvbGwtc3RyYXRlZ3knO1xuaW1wb3J0IHtWaWV3cG9ydFJ1bGVyfSBmcm9tICdAYW5ndWxhci9jZGsvc2Nyb2xsaW5nJztcbmltcG9ydCB7Y29lcmNlQ3NzUGl4ZWxWYWx1ZX0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcblxuLyoqXG4gKiBFeHRlbmRlZCBgQ1NTU3R5bGVEZWNsYXJhdGlvbmAgdGhhdCBpbmNsdWRlcyBgc2Nyb2xsQmVoYXZpb3JgIHdoaWNoIGlzbid0IHBhcnQgb2YgdGhlXG4gKiBidWlsdC1pbiBUUyB0eXBpbmdzLiBPbmNlIGl0IGlzLCB0aGlzIGRlY2xhcmF0aW9uIGNhbiBiZSByZW1vdmVkIHNhZmVseS5cbiAqIEBkb2NzLXByaXZhdGVcbiAqL1xudHlwZSBTY3JvbGxCZWhhdmlvckNTU1N0eWxlRGVjbGFyYXRpb24gPSBDU1NTdHlsZURlY2xhcmF0aW9uICYge3Njcm9sbEJlaGF2aW9yOiBzdHJpbmd9O1xuXG4vKipcbiAqIFN0cmF0ZWd5IHRoYXQgd2lsbCBwcmV2ZW50IHRoZSB1c2VyIGZyb20gc2Nyb2xsaW5nIHdoaWxlIHRoZSBvdmVybGF5IGlzIHZpc2libGUuXG4gKi9cbmV4cG9ydCBjbGFzcyBCbG9ja1Njcm9sbFN0cmF0ZWd5IGltcGxlbWVudHMgU2Nyb2xsU3RyYXRlZ3kge1xuICBwcml2YXRlIF9wcmV2aW91c0hUTUxTdHlsZXMgPSB7dG9wOiAnJywgbGVmdDogJyd9O1xuICBwcml2YXRlIF9wcmV2aW91c1Njcm9sbFBvc2l0aW9uOiB7IHRvcDogbnVtYmVyLCBsZWZ0OiBudW1iZXIgfTtcbiAgcHJpdmF0ZSBfaXNFbmFibGVkID0gZmFsc2U7XG4gIHByaXZhdGUgX2RvY3VtZW50OiBEb2N1bWVudDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF92aWV3cG9ydFJ1bGVyOiBWaWV3cG9ydFJ1bGVyLCBkb2N1bWVudDogYW55KSB7XG4gICAgdGhpcy5fZG9jdW1lbnQgPSBkb2N1bWVudDtcbiAgfVxuXG4gIC8qKiBBdHRhY2hlcyB0aGlzIHNjcm9sbCBzdHJhdGVneSB0byBhbiBvdmVybGF5LiAqL1xuICBhdHRhY2goKSB7IH1cblxuICAvKiogQmxvY2tzIHBhZ2UtbGV2ZWwgc2Nyb2xsIHdoaWxlIHRoZSBhdHRhY2hlZCBvdmVybGF5IGlzIG9wZW4uICovXG4gIGVuYWJsZSgpIHtcbiAgICBpZiAodGhpcy5fY2FuQmVFbmFibGVkKCkpIHtcbiAgICAgIGNvbnN0IHJvb3QgPSB0aGlzLl9kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQhO1xuXG4gICAgICB0aGlzLl9wcmV2aW91c1Njcm9sbFBvc2l0aW9uID0gdGhpcy5fdmlld3BvcnRSdWxlci5nZXRWaWV3cG9ydFNjcm9sbFBvc2l0aW9uKCk7XG5cbiAgICAgIC8vIENhY2hlIHRoZSBwcmV2aW91cyBpbmxpbmUgc3R5bGVzIGluIGNhc2UgdGhlIHVzZXIgaGFkIHNldCB0aGVtLlxuICAgICAgdGhpcy5fcHJldmlvdXNIVE1MU3R5bGVzLmxlZnQgPSByb290LnN0eWxlLmxlZnQgfHwgJyc7XG4gICAgICB0aGlzLl9wcmV2aW91c0hUTUxTdHlsZXMudG9wID0gcm9vdC5zdHlsZS50b3AgfHwgJyc7XG5cbiAgICAgIC8vIE5vdGU6IHdlJ3JlIHVzaW5nIHRoZSBgaHRtbGAgbm9kZSwgaW5zdGVhZCBvZiB0aGUgYGJvZHlgLCBiZWNhdXNlIHRoZSBgYm9keWAgbWF5XG4gICAgICAvLyBoYXZlIHRoZSB1c2VyIGFnZW50IG1hcmdpbiwgd2hlcmVhcyB0aGUgYGh0bWxgIGlzIGd1YXJhbnRlZWQgbm90IHRvIGhhdmUgb25lLlxuICAgICAgcm9vdC5zdHlsZS5sZWZ0ID0gY29lcmNlQ3NzUGl4ZWxWYWx1ZSgtdGhpcy5fcHJldmlvdXNTY3JvbGxQb3NpdGlvbi5sZWZ0KTtcbiAgICAgIHJvb3Quc3R5bGUudG9wID0gY29lcmNlQ3NzUGl4ZWxWYWx1ZSgtdGhpcy5fcHJldmlvdXNTY3JvbGxQb3NpdGlvbi50b3ApO1xuICAgICAgcm9vdC5jbGFzc0xpc3QuYWRkKCdjZGstZ2xvYmFsLXNjcm9sbGJsb2NrJyk7XG4gICAgICB0aGlzLl9pc0VuYWJsZWQgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBVbmJsb2NrcyBwYWdlLWxldmVsIHNjcm9sbCB3aGlsZSB0aGUgYXR0YWNoZWQgb3ZlcmxheSBpcyBvcGVuLiAqL1xuICBkaXNhYmxlKCkge1xuICAgIGlmICh0aGlzLl9pc0VuYWJsZWQpIHtcbiAgICAgIGNvbnN0IGh0bWwgPSB0aGlzLl9kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQhO1xuICAgICAgY29uc3QgYm9keSA9IHRoaXMuX2RvY3VtZW50LmJvZHkhO1xuICAgICAgY29uc3QgaHRtbFN0eWxlID0gaHRtbC5zdHlsZSBhcyBTY3JvbGxCZWhhdmlvckNTU1N0eWxlRGVjbGFyYXRpb247XG4gICAgICBjb25zdCBib2R5U3R5bGUgPSBib2R5LnN0eWxlIGFzIFNjcm9sbEJlaGF2aW9yQ1NTU3R5bGVEZWNsYXJhdGlvbjtcbiAgICAgIGNvbnN0IHByZXZpb3VzSHRtbFNjcm9sbEJlaGF2aW9yID0gaHRtbFN0eWxlLnNjcm9sbEJlaGF2aW9yIHx8ICcnO1xuICAgICAgY29uc3QgcHJldmlvdXNCb2R5U2Nyb2xsQmVoYXZpb3IgPSBib2R5U3R5bGUuc2Nyb2xsQmVoYXZpb3IgfHwgJyc7XG5cbiAgICAgIHRoaXMuX2lzRW5hYmxlZCA9IGZhbHNlO1xuXG4gICAgICBodG1sU3R5bGUubGVmdCA9IHRoaXMuX3ByZXZpb3VzSFRNTFN0eWxlcy5sZWZ0O1xuICAgICAgaHRtbFN0eWxlLnRvcCA9IHRoaXMuX3ByZXZpb3VzSFRNTFN0eWxlcy50b3A7XG4gICAgICBodG1sLmNsYXNzTGlzdC5yZW1vdmUoJ2Nkay1nbG9iYWwtc2Nyb2xsYmxvY2snKTtcblxuICAgICAgLy8gRGlzYWJsZSB1c2VyLWRlZmluZWQgc21vb3RoIHNjcm9sbGluZyB0ZW1wb3JhcmlseSB3aGlsZSB3ZSByZXN0b3JlIHRoZSBzY3JvbGwgcG9zaXRpb24uXG4gICAgICAvLyBTZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL3Njcm9sbC1iZWhhdmlvclxuICAgICAgaHRtbFN0eWxlLnNjcm9sbEJlaGF2aW9yID0gYm9keVN0eWxlLnNjcm9sbEJlaGF2aW9yID0gJ2F1dG8nO1xuXG4gICAgICB3aW5kb3cuc2Nyb2xsKHRoaXMuX3ByZXZpb3VzU2Nyb2xsUG9zaXRpb24ubGVmdCwgdGhpcy5fcHJldmlvdXNTY3JvbGxQb3NpdGlvbi50b3ApO1xuXG4gICAgICBodG1sU3R5bGUuc2Nyb2xsQmVoYXZpb3IgPSBwcmV2aW91c0h0bWxTY3JvbGxCZWhhdmlvcjtcbiAgICAgIGJvZHlTdHlsZS5zY3JvbGxCZWhhdmlvciA9IHByZXZpb3VzQm9keVNjcm9sbEJlaGF2aW9yO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2NhbkJlRW5hYmxlZCgpOiBib29sZWFuIHtcbiAgICAvLyBTaW5jZSB0aGUgc2Nyb2xsIHN0cmF0ZWdpZXMgY2FuJ3QgYmUgc2luZ2xldG9ucywgd2UgaGF2ZSB0byB1c2UgYSBnbG9iYWwgQ1NTIGNsYXNzXG4gICAgLy8gKGBjZGstZ2xvYmFsLXNjcm9sbGJsb2NrYCkgdG8gbWFrZSBzdXJlIHRoYXQgd2UgZG9uJ3QgdHJ5IHRvIGRpc2FibGUgZ2xvYmFsXG4gICAgLy8gc2Nyb2xsaW5nIG11bHRpcGxlIHRpbWVzLlxuICAgIGNvbnN0IGh0bWwgPSB0aGlzLl9kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQhO1xuXG4gICAgaWYgKGh0bWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdjZGstZ2xvYmFsLXNjcm9sbGJsb2NrJykgfHwgdGhpcy5faXNFbmFibGVkKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgY29uc3QgYm9keSA9IHRoaXMuX2RvY3VtZW50LmJvZHk7XG4gICAgY29uc3Qgdmlld3BvcnQgPSB0aGlzLl92aWV3cG9ydFJ1bGVyLmdldFZpZXdwb3J0U2l6ZSgpO1xuICAgIHJldHVybiBib2R5LnNjcm9sbEhlaWdodCA+IHZpZXdwb3J0LmhlaWdodCB8fCBib2R5LnNjcm9sbFdpZHRoID4gdmlld3BvcnQud2lkdGg7XG4gIH1cbn1cbiJdfQ==