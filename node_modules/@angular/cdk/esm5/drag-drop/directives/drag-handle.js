/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Directive, ElementRef, Inject, Optional, Input } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Subject } from 'rxjs';
import { CDK_DRAG_PARENT } from '../drag-parent';
import { toggleNativeDragInteractions } from '../drag-styling';
/** Handle that can be used to drag and CdkDrag instance. */
var CdkDragHandle = /** @class */ (function () {
    function CdkDragHandle(element, parentDrag) {
        this.element = element;
        /** Emits when the state of the handle has changed. */
        this._stateChanges = new Subject();
        this._disabled = false;
        this._parentDrag = parentDrag;
        toggleNativeDragInteractions(element.nativeElement, false);
    }
    Object.defineProperty(CdkDragHandle.prototype, "disabled", {
        /** Whether starting to drag through this handle is disabled. */
        get: function () { return this._disabled; },
        set: function (value) {
            this._disabled = coerceBooleanProperty(value);
            this._stateChanges.next(this);
        },
        enumerable: true,
        configurable: true
    });
    CdkDragHandle.prototype.ngOnDestroy = function () {
        this._stateChanges.complete();
    };
    CdkDragHandle.decorators = [
        { type: Directive, args: [{
                    selector: '[cdkDragHandle]',
                    host: {
                        'class': 'cdk-drag-handle'
                    }
                },] }
    ];
    /** @nocollapse */
    CdkDragHandle.ctorParameters = function () { return [
        { type: ElementRef },
        { type: undefined, decorators: [{ type: Inject, args: [CDK_DRAG_PARENT,] }, { type: Optional }] }
    ]; };
    CdkDragHandle.propDecorators = {
        disabled: [{ type: Input, args: ['cdkDragHandleDisabled',] }]
    };
    return CdkDragHandle;
}());
export { CdkDragHandle };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZy1oYW5kbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY2RrL2RyYWctZHJvcC9kaXJlY3RpdmVzL2RyYWctaGFuZGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFBQyxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFZLE1BQU0sZUFBZSxDQUFDO0FBQ3hGLE9BQU8sRUFBZSxxQkFBcUIsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQzFFLE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFDN0IsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQy9DLE9BQU8sRUFBQyw0QkFBNEIsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBRTdELDREQUE0RDtBQUM1RDtJQXNCRSx1QkFDUyxPQUFnQyxFQUNGLFVBQWdCO1FBRDlDLFlBQU8sR0FBUCxPQUFPLENBQXlCO1FBYnpDLHNEQUFzRDtRQUN0RCxrQkFBYSxHQUFHLElBQUksT0FBTyxFQUFpQixDQUFDO1FBU3JDLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFNeEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUM7UUFDOUIsNEJBQTRCLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBZEQsc0JBQ0ksbUNBQVE7UUFGWixnRUFBZ0U7YUFDaEUsY0FDMEIsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQzthQUNsRCxVQUFhLEtBQWM7WUFDekIsSUFBSSxDQUFDLFNBQVMsR0FBRyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM5QyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoQyxDQUFDOzs7T0FKaUQ7SUFlbEQsbUNBQVcsR0FBWDtRQUNFLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDaEMsQ0FBQzs7Z0JBaENGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQixJQUFJLEVBQUU7d0JBQ0osT0FBTyxFQUFFLGlCQUFpQjtxQkFDM0I7aUJBQ0Y7Ozs7Z0JBWmtCLFVBQVU7Z0RBK0J4QixNQUFNLFNBQUMsZUFBZSxjQUFHLFFBQVE7OzsyQkFWbkMsS0FBSyxTQUFDLHVCQUF1Qjs7SUFxQmhDLG9CQUFDO0NBQUEsQUFuQ0QsSUFtQ0M7U0E3QlksYUFBYSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge0RpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5qZWN0LCBPcHRpb25hbCwgSW5wdXQsIE9uRGVzdHJveX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Jvb2xlYW5JbnB1dCwgY29lcmNlQm9vbGVhblByb3BlcnR5fSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xuaW1wb3J0IHtTdWJqZWN0fSBmcm9tICdyeGpzJztcbmltcG9ydCB7Q0RLX0RSQUdfUEFSRU5UfSBmcm9tICcuLi9kcmFnLXBhcmVudCc7XG5pbXBvcnQge3RvZ2dsZU5hdGl2ZURyYWdJbnRlcmFjdGlvbnN9IGZyb20gJy4uL2RyYWctc3R5bGluZyc7XG5cbi8qKiBIYW5kbGUgdGhhdCBjYW4gYmUgdXNlZCB0byBkcmFnIGFuZCBDZGtEcmFnIGluc3RhbmNlLiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2Nka0RyYWdIYW5kbGVdJyxcbiAgaG9zdDoge1xuICAgICdjbGFzcyc6ICdjZGstZHJhZy1oYW5kbGUnXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgQ2RrRHJhZ0hhbmRsZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIC8qKiBDbG9zZXN0IHBhcmVudCBkcmFnZ2FibGUgaW5zdGFuY2UuICovXG4gIF9wYXJlbnREcmFnOiB7fSB8IHVuZGVmaW5lZDtcblxuICAvKiogRW1pdHMgd2hlbiB0aGUgc3RhdGUgb2YgdGhlIGhhbmRsZSBoYXMgY2hhbmdlZC4gKi9cbiAgX3N0YXRlQ2hhbmdlcyA9IG5ldyBTdWJqZWN0PENka0RyYWdIYW5kbGU+KCk7XG5cbiAgLyoqIFdoZXRoZXIgc3RhcnRpbmcgdG8gZHJhZyB0aHJvdWdoIHRoaXMgaGFuZGxlIGlzIGRpc2FibGVkLiAqL1xuICBASW5wdXQoJ2Nka0RyYWdIYW5kbGVEaXNhYmxlZCcpXG4gIGdldCBkaXNhYmxlZCgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuX2Rpc2FibGVkOyB9XG4gIHNldCBkaXNhYmxlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2Rpc2FibGVkID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHZhbHVlKTtcbiAgICB0aGlzLl9zdGF0ZUNoYW5nZXMubmV4dCh0aGlzKTtcbiAgfVxuICBwcml2YXRlIF9kaXNhYmxlZCA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBlbGVtZW50OiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcbiAgICBASW5qZWN0KENES19EUkFHX1BBUkVOVCkgQE9wdGlvbmFsKCkgcGFyZW50RHJhZz86IGFueSkge1xuXG4gICAgdGhpcy5fcGFyZW50RHJhZyA9IHBhcmVudERyYWc7XG4gICAgdG9nZ2xlTmF0aXZlRHJhZ0ludGVyYWN0aW9ucyhlbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIGZhbHNlKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuX3N0YXRlQ2hhbmdlcy5jb21wbGV0ZSgpO1xuICB9XG5cbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2Rpc2FibGVkOiBCb29sZWFuSW5wdXQ7XG59XG4iXX0=