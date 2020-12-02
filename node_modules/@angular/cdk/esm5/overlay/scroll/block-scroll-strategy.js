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
var BlockScrollStrategy = /** @class */ (function () {
    function BlockScrollStrategy(_viewportRuler, document) {
        this._viewportRuler = _viewportRuler;
        this._previousHTMLStyles = { top: '', left: '' };
        this._isEnabled = false;
        this._document = document;
    }
    /** Attaches this scroll strategy to an overlay. */
    BlockScrollStrategy.prototype.attach = function () { };
    /** Blocks page-level scroll while the attached overlay is open. */
    BlockScrollStrategy.prototype.enable = function () {
        if (this._canBeEnabled()) {
            var root = this._document.documentElement;
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
    };
    /** Unblocks page-level scroll while the attached overlay is open. */
    BlockScrollStrategy.prototype.disable = function () {
        if (this._isEnabled) {
            var html = this._document.documentElement;
            var body = this._document.body;
            var htmlStyle = html.style;
            var bodyStyle = body.style;
            var previousHtmlScrollBehavior = htmlStyle.scrollBehavior || '';
            var previousBodyScrollBehavior = bodyStyle.scrollBehavior || '';
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
    };
    BlockScrollStrategy.prototype._canBeEnabled = function () {
        // Since the scroll strategies can't be singletons, we have to use a global CSS class
        // (`cdk-global-scrollblock`) to make sure that we don't try to disable global
        // scrolling multiple times.
        var html = this._document.documentElement;
        if (html.classList.contains('cdk-global-scrollblock') || this._isEnabled) {
            return false;
        }
        var body = this._document.body;
        var viewport = this._viewportRuler.getViewportSize();
        return body.scrollHeight > viewport.height || body.scrollWidth > viewport.width;
    };
    return BlockScrollStrategy;
}());
export { BlockScrollStrategy };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvY2stc2Nyb2xsLXN0cmF0ZWd5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2Nkay9vdmVybGF5L3Njcm9sbC9ibG9jay1zY3JvbGwtc3RyYXRlZ3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBSUgsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFTMUQ7O0dBRUc7QUFDSDtJQU1FLDZCQUFvQixjQUE2QixFQUFFLFFBQWE7UUFBNUMsbUJBQWMsR0FBZCxjQUFjLENBQWU7UUFMekMsd0JBQW1CLEdBQUcsRUFBQyxHQUFHLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUMsQ0FBQztRQUUxQyxlQUFVLEdBQUcsS0FBSyxDQUFDO1FBSXpCLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO0lBQzVCLENBQUM7SUFFRCxtREFBbUQ7SUFDbkQsb0NBQU0sR0FBTixjQUFXLENBQUM7SUFFWixtRUFBbUU7SUFDbkUsb0NBQU0sR0FBTjtRQUNFLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRSxFQUFFO1lBQ3hCLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsZUFBZ0IsQ0FBQztZQUU3QyxJQUFJLENBQUMsdUJBQXVCLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyx5QkFBeUIsRUFBRSxDQUFDO1lBRS9FLGtFQUFrRTtZQUNsRSxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQztZQUN0RCxJQUFJLENBQUMsbUJBQW1CLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQztZQUVwRCxtRkFBbUY7WUFDbkYsZ0ZBQWdGO1lBQ2hGLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLG1CQUFtQixDQUFDLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzFFLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLG1CQUFtQixDQUFDLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3hFLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUM7WUFDN0MsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7U0FDeEI7SUFDSCxDQUFDO0lBRUQscUVBQXFFO0lBQ3JFLHFDQUFPLEdBQVA7UUFDRSxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbkIsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFnQixDQUFDO1lBQzdDLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSyxDQUFDO1lBQ2xDLElBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxLQUEwQyxDQUFDO1lBQ2xFLElBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxLQUEwQyxDQUFDO1lBQ2xFLElBQU0sMEJBQTBCLEdBQUcsU0FBUyxDQUFDLGNBQWMsSUFBSSxFQUFFLENBQUM7WUFDbEUsSUFBTSwwQkFBMEIsR0FBRyxTQUFTLENBQUMsY0FBYyxJQUFJLEVBQUUsQ0FBQztZQUVsRSxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztZQUV4QixTQUFTLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUM7WUFDL0MsU0FBUyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsR0FBRyxDQUFDO1lBQzdDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLHdCQUF3QixDQUFDLENBQUM7WUFFaEQsMEZBQTBGO1lBQzFGLHVFQUF1RTtZQUN2RSxTQUFTLENBQUMsY0FBYyxHQUFHLFNBQVMsQ0FBQyxjQUFjLEdBQUcsTUFBTSxDQUFDO1lBRTdELE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsdUJBQXVCLENBQUMsR0FBRyxDQUFDLENBQUM7WUFFbkYsU0FBUyxDQUFDLGNBQWMsR0FBRywwQkFBMEIsQ0FBQztZQUN0RCxTQUFTLENBQUMsY0FBYyxHQUFHLDBCQUEwQixDQUFDO1NBQ3ZEO0lBQ0gsQ0FBQztJQUVPLDJDQUFhLEdBQXJCO1FBQ0UscUZBQXFGO1FBQ3JGLDhFQUE4RTtRQUM5RSw0QkFBNEI7UUFDNUIsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFnQixDQUFDO1FBRTdDLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsd0JBQXdCLENBQUMsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ3hFLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFFRCxJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQztRQUNqQyxJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3ZELE9BQU8sSUFBSSxDQUFDLFlBQVksR0FBRyxRQUFRLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxXQUFXLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQztJQUNsRixDQUFDO0lBQ0gsMEJBQUM7QUFBRCxDQUFDLEFBMUVELElBMEVDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7U2Nyb2xsU3RyYXRlZ3l9IGZyb20gJy4vc2Nyb2xsLXN0cmF0ZWd5JztcbmltcG9ydCB7Vmlld3BvcnRSdWxlcn0gZnJvbSAnQGFuZ3VsYXIvY2RrL3Njcm9sbGluZyc7XG5pbXBvcnQge2NvZXJjZUNzc1BpeGVsVmFsdWV9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XG5cbi8qKlxuICogRXh0ZW5kZWQgYENTU1N0eWxlRGVjbGFyYXRpb25gIHRoYXQgaW5jbHVkZXMgYHNjcm9sbEJlaGF2aW9yYCB3aGljaCBpc24ndCBwYXJ0IG9mIHRoZVxuICogYnVpbHQtaW4gVFMgdHlwaW5ncy4gT25jZSBpdCBpcywgdGhpcyBkZWNsYXJhdGlvbiBjYW4gYmUgcmVtb3ZlZCBzYWZlbHkuXG4gKiBAZG9jcy1wcml2YXRlXG4gKi9cbnR5cGUgU2Nyb2xsQmVoYXZpb3JDU1NTdHlsZURlY2xhcmF0aW9uID0gQ1NTU3R5bGVEZWNsYXJhdGlvbiAmIHtzY3JvbGxCZWhhdmlvcjogc3RyaW5nfTtcblxuLyoqXG4gKiBTdHJhdGVneSB0aGF0IHdpbGwgcHJldmVudCB0aGUgdXNlciBmcm9tIHNjcm9sbGluZyB3aGlsZSB0aGUgb3ZlcmxheSBpcyB2aXNpYmxlLlxuICovXG5leHBvcnQgY2xhc3MgQmxvY2tTY3JvbGxTdHJhdGVneSBpbXBsZW1lbnRzIFNjcm9sbFN0cmF0ZWd5IHtcbiAgcHJpdmF0ZSBfcHJldmlvdXNIVE1MU3R5bGVzID0ge3RvcDogJycsIGxlZnQ6ICcnfTtcbiAgcHJpdmF0ZSBfcHJldmlvdXNTY3JvbGxQb3NpdGlvbjogeyB0b3A6IG51bWJlciwgbGVmdDogbnVtYmVyIH07XG4gIHByaXZhdGUgX2lzRW5hYmxlZCA9IGZhbHNlO1xuICBwcml2YXRlIF9kb2N1bWVudDogRG9jdW1lbnQ7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfdmlld3BvcnRSdWxlcjogVmlld3BvcnRSdWxlciwgZG9jdW1lbnQ6IGFueSkge1xuICAgIHRoaXMuX2RvY3VtZW50ID0gZG9jdW1lbnQ7XG4gIH1cblxuICAvKiogQXR0YWNoZXMgdGhpcyBzY3JvbGwgc3RyYXRlZ3kgdG8gYW4gb3ZlcmxheS4gKi9cbiAgYXR0YWNoKCkgeyB9XG5cbiAgLyoqIEJsb2NrcyBwYWdlLWxldmVsIHNjcm9sbCB3aGlsZSB0aGUgYXR0YWNoZWQgb3ZlcmxheSBpcyBvcGVuLiAqL1xuICBlbmFibGUoKSB7XG4gICAgaWYgKHRoaXMuX2NhbkJlRW5hYmxlZCgpKSB7XG4gICAgICBjb25zdCByb290ID0gdGhpcy5fZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50ITtcblxuICAgICAgdGhpcy5fcHJldmlvdXNTY3JvbGxQb3NpdGlvbiA9IHRoaXMuX3ZpZXdwb3J0UnVsZXIuZ2V0Vmlld3BvcnRTY3JvbGxQb3NpdGlvbigpO1xuXG4gICAgICAvLyBDYWNoZSB0aGUgcHJldmlvdXMgaW5saW5lIHN0eWxlcyBpbiBjYXNlIHRoZSB1c2VyIGhhZCBzZXQgdGhlbS5cbiAgICAgIHRoaXMuX3ByZXZpb3VzSFRNTFN0eWxlcy5sZWZ0ID0gcm9vdC5zdHlsZS5sZWZ0IHx8ICcnO1xuICAgICAgdGhpcy5fcHJldmlvdXNIVE1MU3R5bGVzLnRvcCA9IHJvb3Quc3R5bGUudG9wIHx8ICcnO1xuXG4gICAgICAvLyBOb3RlOiB3ZSdyZSB1c2luZyB0aGUgYGh0bWxgIG5vZGUsIGluc3RlYWQgb2YgdGhlIGBib2R5YCwgYmVjYXVzZSB0aGUgYGJvZHlgIG1heVxuICAgICAgLy8gaGF2ZSB0aGUgdXNlciBhZ2VudCBtYXJnaW4sIHdoZXJlYXMgdGhlIGBodG1sYCBpcyBndWFyYW50ZWVkIG5vdCB0byBoYXZlIG9uZS5cbiAgICAgIHJvb3Quc3R5bGUubGVmdCA9IGNvZXJjZUNzc1BpeGVsVmFsdWUoLXRoaXMuX3ByZXZpb3VzU2Nyb2xsUG9zaXRpb24ubGVmdCk7XG4gICAgICByb290LnN0eWxlLnRvcCA9IGNvZXJjZUNzc1BpeGVsVmFsdWUoLXRoaXMuX3ByZXZpb3VzU2Nyb2xsUG9zaXRpb24udG9wKTtcbiAgICAgIHJvb3QuY2xhc3NMaXN0LmFkZCgnY2RrLWdsb2JhbC1zY3JvbGxibG9jaycpO1xuICAgICAgdGhpcy5faXNFbmFibGVkID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICAvKiogVW5ibG9ja3MgcGFnZS1sZXZlbCBzY3JvbGwgd2hpbGUgdGhlIGF0dGFjaGVkIG92ZXJsYXkgaXMgb3Blbi4gKi9cbiAgZGlzYWJsZSgpIHtcbiAgICBpZiAodGhpcy5faXNFbmFibGVkKSB7XG4gICAgICBjb25zdCBodG1sID0gdGhpcy5fZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50ITtcbiAgICAgIGNvbnN0IGJvZHkgPSB0aGlzLl9kb2N1bWVudC5ib2R5ITtcbiAgICAgIGNvbnN0IGh0bWxTdHlsZSA9IGh0bWwuc3R5bGUgYXMgU2Nyb2xsQmVoYXZpb3JDU1NTdHlsZURlY2xhcmF0aW9uO1xuICAgICAgY29uc3QgYm9keVN0eWxlID0gYm9keS5zdHlsZSBhcyBTY3JvbGxCZWhhdmlvckNTU1N0eWxlRGVjbGFyYXRpb247XG4gICAgICBjb25zdCBwcmV2aW91c0h0bWxTY3JvbGxCZWhhdmlvciA9IGh0bWxTdHlsZS5zY3JvbGxCZWhhdmlvciB8fCAnJztcbiAgICAgIGNvbnN0IHByZXZpb3VzQm9keVNjcm9sbEJlaGF2aW9yID0gYm9keVN0eWxlLnNjcm9sbEJlaGF2aW9yIHx8ICcnO1xuXG4gICAgICB0aGlzLl9pc0VuYWJsZWQgPSBmYWxzZTtcblxuICAgICAgaHRtbFN0eWxlLmxlZnQgPSB0aGlzLl9wcmV2aW91c0hUTUxTdHlsZXMubGVmdDtcbiAgICAgIGh0bWxTdHlsZS50b3AgPSB0aGlzLl9wcmV2aW91c0hUTUxTdHlsZXMudG9wO1xuICAgICAgaHRtbC5jbGFzc0xpc3QucmVtb3ZlKCdjZGstZ2xvYmFsLXNjcm9sbGJsb2NrJyk7XG5cbiAgICAgIC8vIERpc2FibGUgdXNlci1kZWZpbmVkIHNtb290aCBzY3JvbGxpbmcgdGVtcG9yYXJpbHkgd2hpbGUgd2UgcmVzdG9yZSB0aGUgc2Nyb2xsIHBvc2l0aW9uLlxuICAgICAgLy8gU2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9zY3JvbGwtYmVoYXZpb3JcbiAgICAgIGh0bWxTdHlsZS5zY3JvbGxCZWhhdmlvciA9IGJvZHlTdHlsZS5zY3JvbGxCZWhhdmlvciA9ICdhdXRvJztcblxuICAgICAgd2luZG93LnNjcm9sbCh0aGlzLl9wcmV2aW91c1Njcm9sbFBvc2l0aW9uLmxlZnQsIHRoaXMuX3ByZXZpb3VzU2Nyb2xsUG9zaXRpb24udG9wKTtcblxuICAgICAgaHRtbFN0eWxlLnNjcm9sbEJlaGF2aW9yID0gcHJldmlvdXNIdG1sU2Nyb2xsQmVoYXZpb3I7XG4gICAgICBib2R5U3R5bGUuc2Nyb2xsQmVoYXZpb3IgPSBwcmV2aW91c0JvZHlTY3JvbGxCZWhhdmlvcjtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9jYW5CZUVuYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgLy8gU2luY2UgdGhlIHNjcm9sbCBzdHJhdGVnaWVzIGNhbid0IGJlIHNpbmdsZXRvbnMsIHdlIGhhdmUgdG8gdXNlIGEgZ2xvYmFsIENTUyBjbGFzc1xuICAgIC8vIChgY2RrLWdsb2JhbC1zY3JvbGxibG9ja2ApIHRvIG1ha2Ugc3VyZSB0aGF0IHdlIGRvbid0IHRyeSB0byBkaXNhYmxlIGdsb2JhbFxuICAgIC8vIHNjcm9sbGluZyBtdWx0aXBsZSB0aW1lcy5cbiAgICBjb25zdCBodG1sID0gdGhpcy5fZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50ITtcblxuICAgIGlmIChodG1sLmNsYXNzTGlzdC5jb250YWlucygnY2RrLWdsb2JhbC1zY3JvbGxibG9jaycpIHx8IHRoaXMuX2lzRW5hYmxlZCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGNvbnN0IGJvZHkgPSB0aGlzLl9kb2N1bWVudC5ib2R5O1xuICAgIGNvbnN0IHZpZXdwb3J0ID0gdGhpcy5fdmlld3BvcnRSdWxlci5nZXRWaWV3cG9ydFNpemUoKTtcbiAgICByZXR1cm4gYm9keS5zY3JvbGxIZWlnaHQgPiB2aWV3cG9ydC5oZWlnaHQgfHwgYm9keS5zY3JvbGxXaWR0aCA+IHZpZXdwb3J0LndpZHRoO1xuICB9XG59XG4iXX0=