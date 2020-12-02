/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Directive, Input } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
/**
 * Declaratively connects sibling `cdkDropList` instances together. All of the `cdkDropList`
 * elements that are placed inside a `cdkDropListGroup` will be connected to each other
 * automatically. Can be used as an alternative to the `cdkDropListConnectedTo` input
 * from `cdkDropList`.
 */
var CdkDropListGroup = /** @class */ (function () {
    function CdkDropListGroup() {
        /** Drop lists registered inside the group. */
        this._items = new Set();
        this._disabled = false;
    }
    Object.defineProperty(CdkDropListGroup.prototype, "disabled", {
        /** Whether starting a dragging sequence from inside this group is disabled. */
        get: function () { return this._disabled; },
        set: function (value) {
            this._disabled = coerceBooleanProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    CdkDropListGroup.prototype.ngOnDestroy = function () {
        this._items.clear();
    };
    CdkDropListGroup.decorators = [
        { type: Directive, args: [{
                    selector: '[cdkDropListGroup]',
                    exportAs: 'cdkDropListGroup',
                },] }
    ];
    CdkDropListGroup.propDecorators = {
        disabled: [{ type: Input, args: ['cdkDropListGroupDisabled',] }]
    };
    return CdkDropListGroup;
}());
export { CdkDropListGroup };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcC1saXN0LWdyb3VwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2Nkay9kcmFnLWRyb3AvZGlyZWN0aXZlcy9kcm9wLWxpc3QtZ3JvdXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFDLFNBQVMsRUFBYSxLQUFLLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDMUQsT0FBTyxFQUFlLHFCQUFxQixFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFFMUU7Ozs7O0dBS0c7QUFDSDtJQUFBO1FBS0UsOENBQThDO1FBQ3JDLFdBQU0sR0FBRyxJQUFJLEdBQUcsRUFBSyxDQUFDO1FBUXZCLGNBQVMsR0FBRyxLQUFLLENBQUM7SUFPNUIsQ0FBQztJQVpDLHNCQUNJLHNDQUFRO1FBRlosK0VBQStFO2FBQy9FLGNBQzBCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7YUFDbEQsVUFBYSxLQUFjO1lBQ3pCLElBQUksQ0FBQyxTQUFTLEdBQUcscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDaEQsQ0FBQzs7O09BSGlEO0lBTWxELHNDQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3RCLENBQUM7O2dCQWxCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtvQkFDOUIsUUFBUSxFQUFFLGtCQUFrQjtpQkFDN0I7OzsyQkFNRSxLQUFLLFNBQUMsMEJBQTBCOztJQVluQyx1QkFBQztDQUFBLEFBckJELElBcUJDO1NBakJZLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge0RpcmVjdGl2ZSwgT25EZXN0cm95LCBJbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Jvb2xlYW5JbnB1dCwgY29lcmNlQm9vbGVhblByb3BlcnR5fSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xuXG4vKipcbiAqIERlY2xhcmF0aXZlbHkgY29ubmVjdHMgc2libGluZyBgY2RrRHJvcExpc3RgIGluc3RhbmNlcyB0b2dldGhlci4gQWxsIG9mIHRoZSBgY2RrRHJvcExpc3RgXG4gKiBlbGVtZW50cyB0aGF0IGFyZSBwbGFjZWQgaW5zaWRlIGEgYGNka0Ryb3BMaXN0R3JvdXBgIHdpbGwgYmUgY29ubmVjdGVkIHRvIGVhY2ggb3RoZXJcbiAqIGF1dG9tYXRpY2FsbHkuIENhbiBiZSB1c2VkIGFzIGFuIGFsdGVybmF0aXZlIHRvIHRoZSBgY2RrRHJvcExpc3RDb25uZWN0ZWRUb2AgaW5wdXRcbiAqIGZyb20gYGNka0Ryb3BMaXN0YC5cbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2Nka0Ryb3BMaXN0R3JvdXBdJyxcbiAgZXhwb3J0QXM6ICdjZGtEcm9wTGlzdEdyb3VwJyxcbn0pXG5leHBvcnQgY2xhc3MgQ2RrRHJvcExpc3RHcm91cDxUPiBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIC8qKiBEcm9wIGxpc3RzIHJlZ2lzdGVyZWQgaW5zaWRlIHRoZSBncm91cC4gKi9cbiAgcmVhZG9ubHkgX2l0ZW1zID0gbmV3IFNldDxUPigpO1xuXG4gIC8qKiBXaGV0aGVyIHN0YXJ0aW5nIGEgZHJhZ2dpbmcgc2VxdWVuY2UgZnJvbSBpbnNpZGUgdGhpcyBncm91cCBpcyBkaXNhYmxlZC4gKi9cbiAgQElucHV0KCdjZGtEcm9wTGlzdEdyb3VwRGlzYWJsZWQnKVxuICBnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLl9kaXNhYmxlZDsgfVxuICBzZXQgZGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9kaXNhYmxlZCA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWx1ZSk7XG4gIH1cbiAgcHJpdmF0ZSBfZGlzYWJsZWQgPSBmYWxzZTtcblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLl9pdGVtcy5jbGVhcigpO1xuICB9XG5cbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2Rpc2FibGVkOiBCb29sZWFuSW5wdXQ7XG59XG4iXX0=