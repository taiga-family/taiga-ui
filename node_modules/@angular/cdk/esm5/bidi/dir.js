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
var Dir = /** @class */ (function () {
    function Dir() {
        /** Normalized direction that accounts for invalid/unsupported values. */
        this._dir = 'ltr';
        /** Whether the `value` has been set to its initial value. */
        this._isInitialized = false;
        /** Event emitted when the direction changes. */
        this.change = new EventEmitter();
    }
    Object.defineProperty(Dir.prototype, "dir", {
        /** @docs-private */
        get: function () { return this._dir; },
        set: function (value) {
            var old = this._dir;
            var normalizedValue = value ? value.toLowerCase() : value;
            this._rawDir = value;
            this._dir = (normalizedValue === 'ltr' || normalizedValue === 'rtl') ? normalizedValue : 'ltr';
            if (old !== this._dir && this._isInitialized) {
                this.change.emit(this._dir);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dir.prototype, "value", {
        /** Current layout direction of the element. */
        get: function () { return this.dir; },
        enumerable: true,
        configurable: true
    });
    /** Initialize once default value has been set. */
    Dir.prototype.ngAfterContentInit = function () {
        this._isInitialized = true;
    };
    Dir.prototype.ngOnDestroy = function () {
        this.change.complete();
    };
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
    return Dir;
}());
export { Dir };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2Nkay9iaWRpL2Rpci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQ0wsU0FBUyxFQUNULE1BQU0sRUFDTixLQUFLLEVBQ0wsWUFBWSxHQUdiLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBWSxjQUFjLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUUzRDs7Ozs7R0FLRztBQUNIO0lBQUE7UUFPRSx5RUFBeUU7UUFDakUsU0FBSSxHQUFjLEtBQUssQ0FBQztRQUVoQyw2REFBNkQ7UUFDckQsbUJBQWMsR0FBWSxLQUFLLENBQUM7UUFLeEMsZ0RBQWdEO1FBQzNCLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBYSxDQUFDO0lBNEI5RCxDQUFDO0lBekJDLHNCQUNJLG9CQUFHO1FBRlAsb0JBQW9CO2FBQ3BCLGNBQ3VCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7YUFDMUMsVUFBUSxLQUFnQjtZQUN0QixJQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQ3RCLElBQU0sZUFBZSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7WUFFNUQsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7WUFDckIsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLGVBQWUsS0FBSyxLQUFLLElBQUksZUFBZSxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztZQUUvRixJQUFJLEdBQUcsS0FBSyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUU7Z0JBQzVDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUM3QjtRQUNILENBQUM7OztPQVh5QztJQWMxQyxzQkFBSSxzQkFBSztRQURULCtDQUErQzthQUMvQyxjQUF5QixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDOzs7T0FBQTtJQUUzQyxrREFBa0Q7SUFDbEQsZ0NBQWtCLEdBQWxCO1FBQ0UsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7SUFDN0IsQ0FBQztJQUVELHlCQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3pCLENBQUM7O2dCQTVDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLE9BQU87b0JBQ2pCLFNBQVMsRUFBRSxDQUFDLEVBQUMsT0FBTyxFQUFFLGNBQWMsRUFBRSxXQUFXLEVBQUUsR0FBRyxFQUFDLENBQUM7b0JBQ3hELElBQUksRUFBRSxFQUFDLFlBQVksRUFBRSxTQUFTLEVBQUM7b0JBQy9CLFFBQVEsRUFBRSxLQUFLO2lCQUNoQjs7O3lCQVlFLE1BQU0sU0FBQyxXQUFXO3NCQUdsQixLQUFLOztJQXlCUixVQUFDO0NBQUEsQUE3Q0QsSUE2Q0M7U0F2Q1ksR0FBRyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIE91dHB1dCxcbiAgSW5wdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgT25EZXN0cm95LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtEaXJlY3Rpb24sIERpcmVjdGlvbmFsaXR5fSBmcm9tICcuL2RpcmVjdGlvbmFsaXR5JztcblxuLyoqXG4gKiBEaXJlY3RpdmUgdG8gbGlzdGVuIGZvciBjaGFuZ2VzIG9mIGRpcmVjdGlvbiBvZiBwYXJ0IG9mIHRoZSBET00uXG4gKlxuICogUHJvdmlkZXMgaXRzZWxmIGFzIERpcmVjdGlvbmFsaXR5IHN1Y2ggdGhhdCBkZXNjZW5kYW50IGRpcmVjdGl2ZXMgb25seSBuZWVkIHRvIGV2ZXIgaW5qZWN0XG4gKiBEaXJlY3Rpb25hbGl0eSB0byBnZXQgdGhlIGNsb3Nlc3QgZGlyZWN0aW9uLlxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbZGlyXScsXG4gIHByb3ZpZGVyczogW3twcm92aWRlOiBEaXJlY3Rpb25hbGl0eSwgdXNlRXhpc3Rpbmc6IERpcn1dLFxuICBob3N0OiB7J1thdHRyLmRpcl0nOiAnX3Jhd0Rpcid9LFxuICBleHBvcnRBczogJ2RpcicsXG59KVxuZXhwb3J0IGNsYXNzIERpciBpbXBsZW1lbnRzIERpcmVjdGlvbmFsaXR5LCBBZnRlckNvbnRlbnRJbml0LCBPbkRlc3Ryb3kge1xuICAvKiogTm9ybWFsaXplZCBkaXJlY3Rpb24gdGhhdCBhY2NvdW50cyBmb3IgaW52YWxpZC91bnN1cHBvcnRlZCB2YWx1ZXMuICovXG4gIHByaXZhdGUgX2RpcjogRGlyZWN0aW9uID0gJ2x0cic7XG5cbiAgLyoqIFdoZXRoZXIgdGhlIGB2YWx1ZWAgaGFzIGJlZW4gc2V0IHRvIGl0cyBpbml0aWFsIHZhbHVlLiAqL1xuICBwcml2YXRlIF9pc0luaXRpYWxpemVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqIERpcmVjdGlvbiBhcyBwYXNzZWQgaW4gYnkgdGhlIGNvbnN1bWVyLiAqL1xuICBfcmF3RGlyOiBzdHJpbmc7XG5cbiAgLyoqIEV2ZW50IGVtaXR0ZWQgd2hlbiB0aGUgZGlyZWN0aW9uIGNoYW5nZXMuICovXG4gIEBPdXRwdXQoJ2RpckNoYW5nZScpIGNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8RGlyZWN0aW9uPigpO1xuXG4gIC8qKiBAZG9jcy1wcml2YXRlICovXG4gIEBJbnB1dCgpXG4gIGdldCBkaXIoKTogRGlyZWN0aW9uIHsgcmV0dXJuIHRoaXMuX2RpcjsgfVxuICBzZXQgZGlyKHZhbHVlOiBEaXJlY3Rpb24pIHtcbiAgICBjb25zdCBvbGQgPSB0aGlzLl9kaXI7XG4gICAgY29uc3Qgbm9ybWFsaXplZFZhbHVlID0gdmFsdWUgPyB2YWx1ZS50b0xvd2VyQ2FzZSgpIDogdmFsdWU7XG5cbiAgICB0aGlzLl9yYXdEaXIgPSB2YWx1ZTtcbiAgICB0aGlzLl9kaXIgPSAobm9ybWFsaXplZFZhbHVlID09PSAnbHRyJyB8fCBub3JtYWxpemVkVmFsdWUgPT09ICdydGwnKSA/IG5vcm1hbGl6ZWRWYWx1ZSA6ICdsdHInO1xuXG4gICAgaWYgKG9sZCAhPT0gdGhpcy5fZGlyICYmIHRoaXMuX2lzSW5pdGlhbGl6ZWQpIHtcbiAgICAgIHRoaXMuY2hhbmdlLmVtaXQodGhpcy5fZGlyKTtcbiAgICB9XG4gIH1cblxuICAvKiogQ3VycmVudCBsYXlvdXQgZGlyZWN0aW9uIG9mIHRoZSBlbGVtZW50LiAqL1xuICBnZXQgdmFsdWUoKTogRGlyZWN0aW9uIHsgcmV0dXJuIHRoaXMuZGlyOyB9XG5cbiAgLyoqIEluaXRpYWxpemUgb25jZSBkZWZhdWx0IHZhbHVlIGhhcyBiZWVuIHNldC4gKi9cbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIHRoaXMuX2lzSW5pdGlhbGl6ZWQgPSB0cnVlO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5jaGFuZ2UuY29tcGxldGUoKTtcbiAgfVxufVxuXG4iXX0=