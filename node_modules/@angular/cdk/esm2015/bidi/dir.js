/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/bidi/dir.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Directive, Output, Input, EventEmitter, } from '@angular/core';
import { Directionality } from './directionality';
/**
 * Directive to listen for changes of direction of part of the DOM.
 *
 * Provides itself as Directionality such that descendant directives only need to ever inject
 * Directionality to get the closest direction.
 */
export class Dir {
    constructor() {
        /**
         * Normalized direction that accounts for invalid/unsupported values.
         */
        this._dir = 'ltr';
        /**
         * Whether the `value` has been set to its initial value.
         */
        this._isInitialized = false;
        /**
         * Event emitted when the direction changes.
         */
        this.change = new EventEmitter();
    }
    /**
     * \@docs-private
     * @return {?}
     */
    get dir() { return this._dir; }
    /**
     * @param {?} value
     * @return {?}
     */
    set dir(value) {
        /** @type {?} */
        const old = this._dir;
        /** @type {?} */
        const normalizedValue = value ? value.toLowerCase() : value;
        this._rawDir = value;
        this._dir = (normalizedValue === 'ltr' || normalizedValue === 'rtl') ? normalizedValue : 'ltr';
        if (old !== this._dir && this._isInitialized) {
            this.change.emit(this._dir);
        }
    }
    /**
     * Current layout direction of the element.
     * @return {?}
     */
    get value() { return this.dir; }
    /**
     * Initialize once default value has been set.
     * @return {?}
     */
    ngAfterContentInit() {
        this._isInitialized = true;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.change.complete();
    }
}
Dir.decorators = [
    { type: Directive, args: [{
                selector: '[dir]',
                providers: [{ provide: Directionality, useExisting: Dir }],
                host: { '[attr.dir]': '_rawDir' },
                exportAs: 'dir',
            },] }
];
Dir.propDecorators = {
    change: [{ type: Output, args: ['dirChange',] }],
    dir: [{ type: Input }]
};
if (false) {
    /**
     * Normalized direction that accounts for invalid/unsupported values.
     * @type {?}
     * @private
     */
    Dir.prototype._dir;
    /**
     * Whether the `value` has been set to its initial value.
     * @type {?}
     * @private
     */
    Dir.prototype._isInitialized;
    /**
     * Direction as passed in by the consumer.
     * @type {?}
     */
    Dir.prototype._rawDir;
    /**
     * Event emitted when the direction changes.
     * @type {?}
     */
    Dir.prototype.change;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2Nkay9iaWRpL2Rpci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQ0wsU0FBUyxFQUNULE1BQU0sRUFDTixLQUFLLEVBQ0wsWUFBWSxHQUdiLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBWSxjQUFjLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQzs7Ozs7OztBQWMzRCxNQUFNLE9BQU8sR0FBRztJQU5oQjs7OztRQVFVLFNBQUksR0FBYyxLQUFLLENBQUM7Ozs7UUFHeEIsbUJBQWMsR0FBWSxLQUFLLENBQUM7Ozs7UUFNbkIsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFhLENBQUM7SUE0QjlELENBQUM7Ozs7O0lBekJDLElBQ0ksR0FBRyxLQUFnQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDOzs7OztJQUMxQyxJQUFJLEdBQUcsQ0FBQyxLQUFnQjs7Y0FDaEIsR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJOztjQUNmLGVBQWUsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSztRQUUzRCxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNyQixJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsZUFBZSxLQUFLLEtBQUssSUFBSSxlQUFlLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBRS9GLElBQUksR0FBRyxLQUFLLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUM1QyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDN0I7SUFDSCxDQUFDOzs7OztJQUdELElBQUksS0FBSyxLQUFnQixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDOzs7OztJQUczQyxrQkFBa0I7UUFDaEIsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7SUFDN0IsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3pCLENBQUM7OztZQTVDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLE9BQU87Z0JBQ2pCLFNBQVMsRUFBRSxDQUFDLEVBQUMsT0FBTyxFQUFFLGNBQWMsRUFBRSxXQUFXLEVBQUUsR0FBRyxFQUFDLENBQUM7Z0JBQ3hELElBQUksRUFBRSxFQUFDLFlBQVksRUFBRSxTQUFTLEVBQUM7Z0JBQy9CLFFBQVEsRUFBRSxLQUFLO2FBQ2hCOzs7cUJBWUUsTUFBTSxTQUFDLFdBQVc7a0JBR2xCLEtBQUs7Ozs7Ozs7O0lBWk4sbUJBQWdDOzs7Ozs7SUFHaEMsNkJBQXdDOzs7OztJQUd4QyxzQkFBZ0I7Ozs7O0lBR2hCLHFCQUE0RCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIE91dHB1dCxcbiAgSW5wdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgT25EZXN0cm95LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtEaXJlY3Rpb24sIERpcmVjdGlvbmFsaXR5fSBmcm9tICcuL2RpcmVjdGlvbmFsaXR5JztcblxuLyoqXG4gKiBEaXJlY3RpdmUgdG8gbGlzdGVuIGZvciBjaGFuZ2VzIG9mIGRpcmVjdGlvbiBvZiBwYXJ0IG9mIHRoZSBET00uXG4gKlxuICogUHJvdmlkZXMgaXRzZWxmIGFzIERpcmVjdGlvbmFsaXR5IHN1Y2ggdGhhdCBkZXNjZW5kYW50IGRpcmVjdGl2ZXMgb25seSBuZWVkIHRvIGV2ZXIgaW5qZWN0XG4gKiBEaXJlY3Rpb25hbGl0eSB0byBnZXQgdGhlIGNsb3Nlc3QgZGlyZWN0aW9uLlxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbZGlyXScsXG4gIHByb3ZpZGVyczogW3twcm92aWRlOiBEaXJlY3Rpb25hbGl0eSwgdXNlRXhpc3Rpbmc6IERpcn1dLFxuICBob3N0OiB7J1thdHRyLmRpcl0nOiAnX3Jhd0Rpcid9LFxuICBleHBvcnRBczogJ2RpcicsXG59KVxuZXhwb3J0IGNsYXNzIERpciBpbXBsZW1lbnRzIERpcmVjdGlvbmFsaXR5LCBBZnRlckNvbnRlbnRJbml0LCBPbkRlc3Ryb3kge1xuICAvKiogTm9ybWFsaXplZCBkaXJlY3Rpb24gdGhhdCBhY2NvdW50cyBmb3IgaW52YWxpZC91bnN1cHBvcnRlZCB2YWx1ZXMuICovXG4gIHByaXZhdGUgX2RpcjogRGlyZWN0aW9uID0gJ2x0cic7XG5cbiAgLyoqIFdoZXRoZXIgdGhlIGB2YWx1ZWAgaGFzIGJlZW4gc2V0IHRvIGl0cyBpbml0aWFsIHZhbHVlLiAqL1xuICBwcml2YXRlIF9pc0luaXRpYWxpemVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqIERpcmVjdGlvbiBhcyBwYXNzZWQgaW4gYnkgdGhlIGNvbnN1bWVyLiAqL1xuICBfcmF3RGlyOiBzdHJpbmc7XG5cbiAgLyoqIEV2ZW50IGVtaXR0ZWQgd2hlbiB0aGUgZGlyZWN0aW9uIGNoYW5nZXMuICovXG4gIEBPdXRwdXQoJ2RpckNoYW5nZScpIGNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8RGlyZWN0aW9uPigpO1xuXG4gIC8qKiBAZG9jcy1wcml2YXRlICovXG4gIEBJbnB1dCgpXG4gIGdldCBkaXIoKTogRGlyZWN0aW9uIHsgcmV0dXJuIHRoaXMuX2RpcjsgfVxuICBzZXQgZGlyKHZhbHVlOiBEaXJlY3Rpb24pIHtcbiAgICBjb25zdCBvbGQgPSB0aGlzLl9kaXI7XG4gICAgY29uc3Qgbm9ybWFsaXplZFZhbHVlID0gdmFsdWUgPyB2YWx1ZS50b0xvd2VyQ2FzZSgpIDogdmFsdWU7XG5cbiAgICB0aGlzLl9yYXdEaXIgPSB2YWx1ZTtcbiAgICB0aGlzLl9kaXIgPSAobm9ybWFsaXplZFZhbHVlID09PSAnbHRyJyB8fCBub3JtYWxpemVkVmFsdWUgPT09ICdydGwnKSA/IG5vcm1hbGl6ZWRWYWx1ZSA6ICdsdHInO1xuXG4gICAgaWYgKG9sZCAhPT0gdGhpcy5fZGlyICYmIHRoaXMuX2lzSW5pdGlhbGl6ZWQpIHtcbiAgICAgIHRoaXMuY2hhbmdlLmVtaXQodGhpcy5fZGlyKTtcbiAgICB9XG4gIH1cblxuICAvKiogQ3VycmVudCBsYXlvdXQgZGlyZWN0aW9uIG9mIHRoZSBlbGVtZW50LiAqL1xuICBnZXQgdmFsdWUoKTogRGlyZWN0aW9uIHsgcmV0dXJuIHRoaXMuZGlyOyB9XG5cbiAgLyoqIEluaXRpYWxpemUgb25jZSBkZWZhdWx0IHZhbHVlIGhhcyBiZWVuIHNldC4gKi9cbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIHRoaXMuX2lzSW5pdGlhbGl6ZWQgPSB0cnVlO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5jaGFuZ2UuY29tcGxldGUoKTtcbiAgfVxufVxuXG4iXX0=