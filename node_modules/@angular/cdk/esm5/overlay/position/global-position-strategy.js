/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Class to be added to the overlay pane wrapper. */
var wrapperClass = 'cdk-global-overlay-wrapper';
/**
 * A strategy for positioning overlays. Using this strategy, an overlay is given an
 * explicit position relative to the browser's viewport. We use flexbox, instead of
 * transforms, in order to avoid issues with subpixel rendering which can cause the
 * element to become blurry.
 */
var GlobalPositionStrategy = /** @class */ (function () {
    function GlobalPositionStrategy() {
        this._cssPosition = 'static';
        this._topOffset = '';
        this._bottomOffset = '';
        this._leftOffset = '';
        this._rightOffset = '';
        this._alignItems = '';
        this._justifyContent = '';
        this._width = '';
        this._height = '';
    }
    GlobalPositionStrategy.prototype.attach = function (overlayRef) {
        var config = overlayRef.getConfig();
        this._overlayRef = overlayRef;
        if (this._width && !config.width) {
            overlayRef.updateSize({ width: this._width });
        }
        if (this._height && !config.height) {
            overlayRef.updateSize({ height: this._height });
        }
        overlayRef.hostElement.classList.add(wrapperClass);
        this._isDisposed = false;
    };
    /**
     * Sets the top position of the overlay. Clears any previously set vertical position.
     * @param value New top offset.
     */
    GlobalPositionStrategy.prototype.top = function (value) {
        if (value === void 0) { value = ''; }
        this._bottomOffset = '';
        this._topOffset = value;
        this._alignItems = 'flex-start';
        return this;
    };
    /**
     * Sets the left position of the overlay. Clears any previously set horizontal position.
     * @param value New left offset.
     */
    GlobalPositionStrategy.prototype.left = function (value) {
        if (value === void 0) { value = ''; }
        this._rightOffset = '';
        this._leftOffset = value;
        this._justifyContent = 'flex-start';
        return this;
    };
    /**
     * Sets the bottom position of the overlay. Clears any previously set vertical position.
     * @param value New bottom offset.
     */
    GlobalPositionStrategy.prototype.bottom = function (value) {
        if (value === void 0) { value = ''; }
        this._topOffset = '';
        this._bottomOffset = value;
        this._alignItems = 'flex-end';
        return this;
    };
    /**
     * Sets the right position of the overlay. Clears any previously set horizontal position.
     * @param value New right offset.
     */
    GlobalPositionStrategy.prototype.right = function (value) {
        if (value === void 0) { value = ''; }
        this._leftOffset = '';
        this._rightOffset = value;
        this._justifyContent = 'flex-end';
        return this;
    };
    /**
     * Sets the overlay width and clears any previously set width.
     * @param value New width for the overlay
     * @deprecated Pass the `width` through the `OverlayConfig`.
     * @breaking-change 8.0.0
     */
    GlobalPositionStrategy.prototype.width = function (value) {
        if (value === void 0) { value = ''; }
        if (this._overlayRef) {
            this._overlayRef.updateSize({ width: value });
        }
        else {
            this._width = value;
        }
        return this;
    };
    /**
     * Sets the overlay height and clears any previously set height.
     * @param value New height for the overlay
     * @deprecated Pass the `height` through the `OverlayConfig`.
     * @breaking-change 8.0.0
     */
    GlobalPositionStrategy.prototype.height = function (value) {
        if (value === void 0) { value = ''; }
        if (this._overlayRef) {
            this._overlayRef.updateSize({ height: value });
        }
        else {
            this._height = value;
        }
        return this;
    };
    /**
     * Centers the overlay horizontally with an optional offset.
     * Clears any previously set horizontal position.
     *
     * @param offset Overlay offset from the horizontal center.
     */
    GlobalPositionStrategy.prototype.centerHorizontally = function (offset) {
        if (offset === void 0) { offset = ''; }
        this.left(offset);
        this._justifyContent = 'center';
        return this;
    };
    /**
     * Centers the overlay vertically with an optional offset.
     * Clears any previously set vertical position.
     *
     * @param offset Overlay offset from the vertical center.
     */
    GlobalPositionStrategy.prototype.centerVertically = function (offset) {
        if (offset === void 0) { offset = ''; }
        this.top(offset);
        this._alignItems = 'center';
        return this;
    };
    /**
     * Apply the position to the element.
     * @docs-private
     */
    GlobalPositionStrategy.prototype.apply = function () {
        // Since the overlay ref applies the strategy asynchronously, it could
        // have been disposed before it ends up being applied. If that is the
        // case, we shouldn't do anything.
        if (!this._overlayRef || !this._overlayRef.hasAttached()) {
            return;
        }
        var styles = this._overlayRef.overlayElement.style;
        var parentStyles = this._overlayRef.hostElement.style;
        var config = this._overlayRef.getConfig();
        var width = config.width, height = config.height, maxWidth = config.maxWidth, maxHeight = config.maxHeight;
        var shouldBeFlushHorizontally = (width === '100%' || width === '100vw') &&
            (!maxWidth || maxWidth === '100%' || maxWidth === '100vw');
        var shouldBeFlushVertically = (height === '100%' || height === '100vh') &&
            (!maxHeight || maxHeight === '100%' || maxHeight === '100vh');
        styles.position = this._cssPosition;
        styles.marginLeft = shouldBeFlushHorizontally ? '0' : this._leftOffset;
        styles.marginTop = shouldBeFlushVertically ? '0' : this._topOffset;
        styles.marginBottom = this._bottomOffset;
        styles.marginRight = this._rightOffset;
        if (shouldBeFlushHorizontally) {
            parentStyles.justifyContent = 'flex-start';
        }
        else if (this._justifyContent === 'center') {
            parentStyles.justifyContent = 'center';
        }
        else if (this._overlayRef.getConfig().direction === 'rtl') {
            // In RTL the browser will invert `flex-start` and `flex-end` automatically, but we
            // don't want that because our positioning is explicitly `left` and `right`, hence
            // why we do another inversion to ensure that the overlay stays in the same position.
            // TODO: reconsider this if we add `start` and `end` methods.
            if (this._justifyContent === 'flex-start') {
                parentStyles.justifyContent = 'flex-end';
            }
            else if (this._justifyContent === 'flex-end') {
                parentStyles.justifyContent = 'flex-start';
            }
        }
        else {
            parentStyles.justifyContent = this._justifyContent;
        }
        parentStyles.alignItems = shouldBeFlushVertically ? 'flex-start' : this._alignItems;
    };
    /**
     * Cleans up the DOM changes from the position strategy.
     * @docs-private
     */
    GlobalPositionStrategy.prototype.dispose = function () {
        if (this._isDisposed || !this._overlayRef) {
            return;
        }
        var styles = this._overlayRef.overlayElement.style;
        var parent = this._overlayRef.hostElement;
        var parentStyles = parent.style;
        parent.classList.remove(wrapperClass);
        parentStyles.justifyContent = parentStyles.alignItems = styles.marginTop =
            styles.marginBottom = styles.marginLeft = styles.marginRight = styles.position = '';
        this._overlayRef = null;
        this._isDisposed = true;
    };
    return GlobalPositionStrategy;
}());
export { GlobalPositionStrategy };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLXBvc2l0aW9uLXN0cmF0ZWd5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2Nkay9vdmVybGF5L3Bvc2l0aW9uL2dsb2JhbC1wb3NpdGlvbi1zdHJhdGVneS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFLSCxxREFBcUQ7QUFDckQsSUFBTSxZQUFZLEdBQUcsNEJBQTRCLENBQUM7QUFFbEQ7Ozs7O0dBS0c7QUFDSDtJQUFBO1FBR1UsaUJBQVksR0FBVyxRQUFRLENBQUM7UUFDaEMsZUFBVSxHQUFXLEVBQUUsQ0FBQztRQUN4QixrQkFBYSxHQUFXLEVBQUUsQ0FBQztRQUMzQixnQkFBVyxHQUFXLEVBQUUsQ0FBQztRQUN6QixpQkFBWSxHQUFXLEVBQUUsQ0FBQztRQUMxQixnQkFBVyxHQUFXLEVBQUUsQ0FBQztRQUN6QixvQkFBZSxHQUFXLEVBQUUsQ0FBQztRQUM3QixXQUFNLEdBQVcsRUFBRSxDQUFDO1FBQ3BCLFlBQU8sR0FBVyxFQUFFLENBQUM7SUE0TC9CLENBQUM7SUF6TEMsdUNBQU0sR0FBTixVQUFPLFVBQTRCO1FBQ2pDLElBQU0sTUFBTSxHQUFHLFVBQVUsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUV0QyxJQUFJLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQztRQUU5QixJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFO1lBQ2hDLFVBQVUsQ0FBQyxVQUFVLENBQUMsRUFBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBQyxDQUFDLENBQUM7U0FDN0M7UUFFRCxJQUFJLElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFO1lBQ2xDLFVBQVUsQ0FBQyxVQUFVLENBQUMsRUFBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBQyxDQUFDLENBQUM7U0FDL0M7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UyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUN0QyxZQUFZLENBQUMsY0FBYyxHQUFHLFlBQVksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLFNBQVM7WUFDdEUsTUFBTSxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFFdEYsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFLLENBQUM7UUFDekIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7SUFDMUIsQ0FBQztJQUNILDZCQUFDO0FBQUQsQ0FBQyxBQXZNRCxJQXVNQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge1Bvc2l0aW9uU3RyYXRlZ3l9IGZyb20gJy4vcG9zaXRpb24tc3RyYXRlZ3knO1xuaW1wb3J0IHtPdmVybGF5UmVmZXJlbmNlfSBmcm9tICcuLi9vdmVybGF5LXJlZmVyZW5jZSc7XG5cbi8qKiBDbGFzcyB0byBiZSBhZGRlZCB0byB0aGUgb3ZlcmxheSBwYW5lIHdyYXBwZXIuICovXG5jb25zdCB3cmFwcGVyQ2xhc3MgPSAnY2RrLWdsb2JhbC1vdmVybGF5LXdyYXBwZXInO1xuXG4vKipcbiAqIEEgc3RyYXRlZ3kgZm9yIHBvc2l0aW9uaW5nIG92ZXJsYXlzLiBVc2luZyB0aGlzIHN0cmF0ZWd5LCBhbiBvdmVybGF5IGlzIGdpdmVuIGFuXG4gKiBleHBsaWNpdCBwb3NpdGlvbiByZWxhdGl2ZSB0byB0aGUgYnJvd3NlcidzIHZpZXdwb3J0LiBXZSB1c2UgZmxleGJveCwgaW5zdGVhZCBvZlxuICogdHJhbnNmb3JtcywgaW4gb3JkZXIgdG8gYXZvaWQgaXNzdWVzIHdpdGggc3VicGl4ZWwgcmVuZGVyaW5nIHdoaWNoIGNhbiBjYXVzZSB0aGVcbiAqIGVsZW1lbnQgdG8gYmVjb21lIGJsdXJyeS5cbiAqL1xuZXhwb3J0IGNsYXNzIEdsb2JhbFBvc2l0aW9uU3RyYXRlZ3kgaW1wbGVtZW50cyBQb3NpdGlvblN0cmF0ZWd5IHtcbiAgLyoqIFRoZSBvdmVybGF5IHRvIHdoaWNoIHRoaXMgc3RyYXRlZ3kgaXMgYXR0YWNoZWQuICovXG4gIHByaXZhdGUgX292ZXJsYXlSZWY6IE92ZXJsYXlSZWZlcmVuY2U7XG4gIHByaXZhdGUgX2Nzc1Bvc2l0aW9uOiBzdHJpbmcgPSAnc3RhdGljJztcbiAgcHJpdmF0ZSBfdG9wT2Zmc2V0OiBzdHJpbmcgPSAnJztcbiAgcHJpdmF0ZSBfYm90dG9tT2Zmc2V0OiBzdHJpbmcgPSAnJztcbiAgcHJpdmF0ZSBfbGVmdE9mZnNldDogc3RyaW5nID0gJyc7XG4gIHByaXZhdGUgX3JpZ2h0T2Zmc2V0OiBzdHJpbmcgPSAnJztcbiAgcHJpdmF0ZSBfYWxpZ25JdGVtczogc3RyaW5nID0gJyc7XG4gIHByaXZhdGUgX2p1c3RpZnlDb250ZW50OiBzdHJpbmcgPSAnJztcbiAgcHJpdmF0ZSBfd2lkdGg6IHN0cmluZyA9ICcnO1xuICBwcml2YXRlIF9oZWlnaHQ6IHN0cmluZyA9ICcnO1xuICBwcml2YXRlIF9pc0Rpc3Bvc2VkOiBib29sZWFuO1xuXG4gIGF0dGFjaChvdmVybGF5UmVmOiBPdmVybGF5UmVmZXJlbmNlKTogdm9pZCB7XG4gICAgY29uc3QgY29uZmlnID0gb3ZlcmxheVJlZi5nZXRDb25maWcoKTtcblxuICAgIHRoaXMuX292ZXJsYXlSZWYgPSBvdmVybGF5UmVmO1xuXG4gICAgaWYgKHRoaXMuX3dpZHRoICYmICFjb25maWcud2lkdGgpIHtcbiAgICAgIG92ZXJsYXlSZWYudXBkYXRlU2l6ZSh7d2lkdGg6IHRoaXMuX3dpZHRofSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2hlaWdodCAmJiAhY29uZmlnLmhlaWdodCkge1xuICAgICAgb3ZlcmxheVJlZi51cGRhdGVTaXplKHtoZWlnaHQ6IHRoaXMuX2hlaWdodH0pO1xuICAgIH1cblxuICAgIG92ZXJsYXlSZWYuaG9zdEVsZW1lbnQuY2xhc3NMaXN0LmFkZCh3cmFwcGVyQ2xhc3MpO1xuICAgIHRoaXMuX2lzRGlzcG9zZWQgPSBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSB0b3AgcG9zaXRpb24gb2YgdGhlIG92ZXJsYXkuIENsZWFycyBhbnkgcHJldmlvdXNseSBzZXQgdmVydGljYWwgcG9zaXRpb24uXG4gICAqIEBwYXJhbSB2YWx1ZSBOZXcgdG9wIG9mZnNldC5cbiAgICovXG4gIHRvcCh2YWx1ZTogc3RyaW5nID0gJycpOiB0aGlzIHtcbiAgICB0aGlzLl9ib3R0b21PZmZzZXQgPSAnJztcbiAgICB0aGlzLl90b3BPZmZzZXQgPSB2YWx1ZTtcbiAgICB0aGlzLl9hbGlnbkl0ZW1zID0gJ2ZsZXgtc3RhcnQnO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGxlZnQgcG9zaXRpb24gb2YgdGhlIG92ZXJsYXkuIENsZWFycyBhbnkgcHJldmlvdXNseSBzZXQgaG9yaXpvbnRhbCBwb3NpdGlvbi5cbiAgICogQHBhcmFtIHZhbHVlIE5ldyBsZWZ0IG9mZnNldC5cbiAgICovXG4gIGxlZnQodmFsdWU6IHN0cmluZyA9ICcnKTogdGhpcyB7XG4gICAgdGhpcy5fcmlnaHRPZmZzZXQgPSAnJztcbiAgICB0aGlzLl9sZWZ0T2Zmc2V0ID0gdmFsdWU7XG4gICAgdGhpcy5fanVzdGlmeUNvbnRlbnQgPSAnZmxleC1zdGFydCc7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgYm90dG9tIHBvc2l0aW9uIG9mIHRoZSBvdmVybGF5LiBDbGVhcnMgYW55IHByZXZpb3VzbHkgc2V0IHZlcnRpY2FsIHBvc2l0aW9uLlxuICAgKiBAcGFyYW0gdmFsdWUgTmV3IGJvdHRvbSBvZmZzZXQuXG4gICAqL1xuICBib3R0b20odmFsdWU6IHN0cmluZyA9ICcnKTogdGhpcyB7XG4gICAgdGhpcy5fdG9wT2Zmc2V0ID0gJyc7XG4gICAgdGhpcy5fYm90dG9tT2Zmc2V0ID0gdmFsdWU7XG4gICAgdGhpcy5fYWxpZ25JdGVtcyA9ICdmbGV4LWVuZCc7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgcmlnaHQgcG9zaXRpb24gb2YgdGhlIG92ZXJsYXkuIENsZWFycyBhbnkgcHJldmlvdXNseSBzZXQgaG9yaXpvbnRhbCBwb3NpdGlvbi5cbiAgICogQHBhcmFtIHZhbHVlIE5ldyByaWdodCBvZmZzZXQuXG4gICAqL1xuICByaWdodCh2YWx1ZTogc3RyaW5nID0gJycpOiB0aGlzIHtcbiAgICB0aGlzLl9sZWZ0T2Zmc2V0ID0gJyc7XG4gICAgdGhpcy5fcmlnaHRPZmZzZXQgPSB2YWx1ZTtcbiAgICB0aGlzLl9qdXN0aWZ5Q29udGVudCA9ICdmbGV4LWVuZCc7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgb3ZlcmxheSB3aWR0aCBhbmQgY2xlYXJzIGFueSBwcmV2aW91c2x5IHNldCB3aWR0aC5cbiAgICogQHBhcmFtIHZhbHVlIE5ldyB3aWR0aCBmb3IgdGhlIG92ZXJsYXlcbiAgICogQGRlcHJlY2F0ZWQgUGFzcyB0aGUgYHdpZHRoYCB0aHJvdWdoIHRoZSBgT3ZlcmxheUNvbmZpZ2AuXG4gICAqIEBicmVha2luZy1jaGFuZ2UgOC4wLjBcbiAgICovXG4gIHdpZHRoKHZhbHVlOiBzdHJpbmcgPSAnJyk6IHRoaXMge1xuICAgIGlmICh0aGlzLl9vdmVybGF5UmVmKSB7XG4gICAgICB0aGlzLl9vdmVybGF5UmVmLnVwZGF0ZVNpemUoe3dpZHRoOiB2YWx1ZX0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl93aWR0aCA9IHZhbHVlO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIG92ZXJsYXkgaGVpZ2h0IGFuZCBjbGVhcnMgYW55IHByZXZpb3VzbHkgc2V0IGhlaWdodC5cbiAgICogQHBhcmFtIHZhbHVlIE5ldyBoZWlnaHQgZm9yIHRoZSBvdmVybGF5XG4gICAqIEBkZXByZWNhdGVkIFBhc3MgdGhlIGBoZWlnaHRgIHRocm91Z2ggdGhlIGBPdmVybGF5Q29uZmlnYC5cbiAgICogQGJyZWFraW5nLWNoYW5nZSA4LjAuMFxuICAgKi9cbiAgaGVpZ2h0KHZhbHVlOiBzdHJpbmcgPSAnJyk6IHRoaXMge1xuICAgIGlmICh0aGlzLl9vdmVybGF5UmVmKSB7XG4gICAgICB0aGlzLl9vdmVybGF5UmVmLnVwZGF0ZVNpemUoe2hlaWdodDogdmFsdWV9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5faGVpZ2h0ID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogQ2VudGVycyB0aGUgb3ZlcmxheSBob3Jpem9udGFsbHkgd2l0aCBhbiBvcHRpb25hbCBvZmZzZXQuXG4gICAqIENsZWFycyBhbnkgcHJldmlvdXNseSBzZXQgaG9yaXpvbnRhbCBwb3NpdGlvbi5cbiAgICpcbiAgICogQHBhcmFtIG9mZnNldCBPdmVybGF5IG9mZnNldCBmcm9tIHRoZSBob3Jpem9udGFsIGNlbnRlci5cbiAgICovXG4gIGNlbnRlckhvcml6b250YWxseShvZmZzZXQ6IHN0cmluZyA9ICcnKTogdGhpcyB7XG4gICAgdGhpcy5sZWZ0KG9mZnNldCk7XG4gICAgdGhpcy5fanVzdGlmeUNvbnRlbnQgPSAnY2VudGVyJztcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBDZW50ZXJzIHRoZSBvdmVybGF5IHZlcnRpY2FsbHkgd2l0aCBhbiBvcHRpb25hbCBvZmZzZXQuXG4gICAqIENsZWFycyBhbnkgcHJldmlvdXNseSBzZXQgdmVydGljYWwgcG9zaXRpb24uXG4gICAqXG4gICAqIEBwYXJhbSBvZmZzZXQgT3ZlcmxheSBvZmZzZXQgZnJvbSB0aGUgdmVydGljYWwgY2VudGVyLlxuICAgKi9cbiAgY2VudGVyVmVydGljYWxseShvZmZzZXQ6IHN0cmluZyA9ICcnKTogdGhpcyB7XG4gICAgdGhpcy50b3Aob2Zmc2V0KTtcbiAgICB0aGlzLl9hbGlnbkl0ZW1zID0gJ2NlbnRlcic7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogQXBwbHkgdGhlIHBvc2l0aW9uIHRvIHRoZSBlbGVtZW50LlxuICAgKiBAZG9jcy1wcml2YXRlXG4gICAqL1xuICBhcHBseSgpOiB2b2lkIHtcbiAgICAvLyBTaW5jZSB0aGUgb3ZlcmxheSByZWYgYXBwbGllcyB0aGUgc3RyYXRlZ3kgYXN5bmNocm9ub3VzbHksIGl0IGNvdWxkXG4gICAgLy8gaGF2ZSBiZWVuIGRpc3Bvc2VkIGJlZm9yZSBpdCBlbmRzIHVwIGJlaW5nIGFwcGxpZWQuIElmIHRoYXQgaXMgdGhlXG4gICAgLy8gY2FzZSwgd2Ugc2hvdWxkbid0IGRvIGFueXRoaW5nLlxuICAgIGlmICghdGhpcy5fb3ZlcmxheVJlZiB8fCAhdGhpcy5fb3ZlcmxheVJlZi5oYXNBdHRhY2hlZCgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc3R5bGVzID0gdGhpcy5fb3ZlcmxheVJlZi5vdmVybGF5RWxlbWVudC5zdHlsZTtcbiAgICBjb25zdCBwYXJlbnRTdHlsZXMgPSB0aGlzLl9vdmVybGF5UmVmLmhvc3RFbGVtZW50LnN0eWxlO1xuICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMuX292ZXJsYXlSZWYuZ2V0Q29uZmlnKCk7XG4gICAgY29uc3Qge3dpZHRoLCBoZWlnaHQsIG1heFdpZHRoLCBtYXhIZWlnaHR9ID0gY29uZmlnO1xuICAgIGNvbnN0IHNob3VsZEJlRmx1c2hIb3Jpem9udGFsbHkgPSAod2lkdGggPT09ICcxMDAlJyB8fCB3aWR0aCA9PT0gJzEwMHZ3JykgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCFtYXhXaWR0aCB8fCBtYXhXaWR0aCA9PT0gJzEwMCUnIHx8IG1heFdpZHRoID09PSAnMTAwdncnKTtcbiAgICBjb25zdCBzaG91bGRCZUZsdXNoVmVydGljYWxseSA9IChoZWlnaHQgPT09ICcxMDAlJyB8fCBoZWlnaHQgPT09ICcxMDB2aCcpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoIW1heEhlaWdodCB8fCBtYXhIZWlnaHQgPT09ICcxMDAlJyB8fCBtYXhIZWlnaHQgPT09ICcxMDB2aCcpO1xuXG4gICAgc3R5bGVzLnBvc2l0aW9uID0gdGhpcy5fY3NzUG9zaXRpb247XG4gICAgc3R5bGVzLm1hcmdpbkxlZnQgPSBzaG91bGRCZUZsdXNoSG9yaXpvbnRhbGx5ID8gJzAnIDogdGhpcy5fbGVmdE9mZnNldDtcbiAgICBzdHlsZXMubWFyZ2luVG9wID0gc2hvdWxkQmVGbHVzaFZlcnRpY2FsbHkgPyAnMCcgOiB0aGlzLl90b3BPZmZzZXQ7XG4gICAgc3R5bGVzLm1hcmdpbkJvdHRvbSA9IHRoaXMuX2JvdHRvbU9mZnNldDtcbiAgICBzdHlsZXMubWFyZ2luUmlnaHQgPSB0aGlzLl9yaWdodE9mZnNldDtcblxuICAgIGlmIChzaG91bGRCZUZsdXNoSG9yaXpvbnRhbGx5KSB7XG4gICAgICBwYXJlbnRTdHlsZXMuanVzdGlmeUNvbnRlbnQgPSAnZmxleC1zdGFydCc7XG4gICAgfSBlbHNlIGlmICh0aGlzLl9qdXN0aWZ5Q29udGVudCA9PT0gJ2NlbnRlcicpIHtcbiAgICAgIHBhcmVudFN0eWxlcy5qdXN0aWZ5Q29udGVudCA9ICdjZW50ZXInO1xuICAgIH0gZWxzZSBpZiAodGhpcy5fb3ZlcmxheVJlZi5nZXRDb25maWcoKS5kaXJlY3Rpb24gPT09ICdydGwnKSB7XG4gICAgICAvLyBJbiBSVEwgdGhlIGJyb3dzZXIgd2lsbCBpbnZlcnQgYGZsZXgtc3RhcnRgIGFuZCBgZmxleC1lbmRgIGF1dG9tYXRpY2FsbHksIGJ1dCB3ZVxuICAgICAgLy8gZG9uJ3Qgd2FudCB0aGF0IGJlY2F1c2Ugb3VyIHBvc2l0aW9uaW5nIGlzIGV4cGxpY2l0bHkgYGxlZnRgIGFuZCBgcmlnaHRgLCBoZW5jZVxuICAgICAgLy8gd2h5IHdlIGRvIGFub3RoZXIgaW52ZXJzaW9uIHRvIGVuc3VyZSB0aGF0IHRoZSBvdmVybGF5IHN0YXlzIGluIHRoZSBzYW1lIHBvc2l0aW9uLlxuICAgICAgLy8gVE9ETzogcmVjb25zaWRlciB0aGlzIGlmIHdlIGFkZCBgc3RhcnRgIGFuZCBgZW5kYCBtZXRob2RzLlxuICAgICAgaWYgKHRoaXMuX2p1c3RpZnlDb250ZW50ID09PSAnZmxleC1zdGFydCcpIHtcbiAgICAgICAgcGFyZW50U3R5bGVzLmp1c3RpZnlDb250ZW50ID0gJ2ZsZXgtZW5kJztcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5fanVzdGlmeUNvbnRlbnQgPT09ICdmbGV4LWVuZCcpIHtcbiAgICAgICAgcGFyZW50U3R5bGVzLmp1c3RpZnlDb250ZW50ID0gJ2ZsZXgtc3RhcnQnO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBwYXJlbnRTdHlsZXMuanVzdGlmeUNvbnRlbnQgPSB0aGlzLl9qdXN0aWZ5Q29udGVudDtcbiAgICB9XG5cbiAgICBwYXJlbnRTdHlsZXMuYWxpZ25JdGVtcyA9IHNob3VsZEJlRmx1c2hWZXJ0aWNhbGx5ID8gJ2ZsZXgtc3RhcnQnIDogdGhpcy5fYWxpZ25JdGVtcztcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhbnMgdXAgdGhlIERPTSBjaGFuZ2VzIGZyb20gdGhlIHBvc2l0aW9uIHN0cmF0ZWd5LlxuICAgKiBAZG9jcy1wcml2YXRlXG4gICAqL1xuICBkaXNwb3NlKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9pc0Rpc3Bvc2VkIHx8ICF0aGlzLl9vdmVybGF5UmVmKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc3R5bGVzID0gdGhpcy5fb3ZlcmxheVJlZi5vdmVybGF5RWxlbWVudC5zdHlsZTtcbiAgICBjb25zdCBwYXJlbnQgPSB0aGlzLl9vdmVybGF5UmVmLmhvc3RFbGVtZW50O1xuICAgIGNvbnN0IHBhcmVudFN0eWxlcyA9IHBhcmVudC5zdHlsZTtcblxuICAgIHBhcmVudC5jbGFzc0xpc3QucmVtb3ZlKHdyYXBwZXJDbGFzcyk7XG4gICAgcGFyZW50U3R5bGVzLmp1c3RpZnlDb250ZW50ID0gcGFyZW50U3R5bGVzLmFsaWduSXRlbXMgPSBzdHlsZXMubWFyZ2luVG9wID1cbiAgICAgIHN0eWxlcy5tYXJnaW5Cb3R0b20gPSBzdHlsZXMubWFyZ2luTGVmdCA9IHN0eWxlcy5tYXJnaW5SaWdodCA9IHN0eWxlcy5wb3NpdGlvbiA9ICcnO1xuXG4gICAgdGhpcy5fb3ZlcmxheVJlZiA9IG51bGwhO1xuICAgIHRoaXMuX2lzRGlzcG9zZWQgPSB0cnVlO1xuICB9XG59XG4iXX0=