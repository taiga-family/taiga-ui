/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { __extends } from "tslib";
import { ControlContainer } from './control_container';
import { composeAsyncValidators, composeValidators, controlPath } from './shared';
/**
 * @description
 * A base class for code shared between the `NgModelGroup` and `FormGroupName` directives.
 *
 * @publicApi
 */
var AbstractFormGroupDirective = /** @class */ (function (_super) {
    __extends(AbstractFormGroupDirective, _super);
    function AbstractFormGroupDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @description
     * An internal callback method triggered on the instance after the inputs are set.
     * Registers the group with its parent group.
     */
    AbstractFormGroupDirective.prototype.ngOnInit = function () {
        this._checkParentType();
        this.formDirective.addFormGroup(this);
    };
    /**
     * @description
     * An internal callback method triggered before the instance is destroyed.
     * Removes the group from its parent group.
     */
    AbstractFormGroupDirective.prototype.ngOnDestroy = function () {
        if (this.formDirective) {
            this.formDirective.removeFormGroup(this);
        }
    };
    Object.defineProperty(AbstractFormGroupDirective.prototype, "control", {
        /**
         * @description
         * The `FormGroup` bound to this directive.
         */
        get: function () {
            return this.formDirective.getFormGroup(this);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractFormGroupDirective.prototype, "path", {
        /**
         * @description
         * The path to this group from the top-level directive.
         */
        get: function () {
            return controlPath(this.name == null ? this.name : this.name.toString(), this._parent);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractFormGroupDirective.prototype, "formDirective", {
        /**
         * @description
         * The top-level directive for this group if present, otherwise null.
         */
        get: function () {
            return this._parent ? this._parent.formDirective : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractFormGroupDirective.prototype, "validator", {
        /**
         * @description
         * The synchronous validators registered with this group.
         */
        get: function () {
            return composeValidators(this._validators);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractFormGroupDirective.prototype, "asyncValidator", {
        /**
         * @description
         * The async validators registered with this group.
         */
        get: function () {
            return composeAsyncValidators(this._asyncValidators);
        },
        enumerable: true,
        configurable: true
    });
    /** @internal */
    AbstractFormGroupDirective.prototype._checkParentType = function () { };
    return AbstractFormGroupDirective;
}(ControlContainer));
export { AbstractFormGroupDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJzdHJhY3RfZm9ybV9ncm91cF9kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3Jtcy9zcmMvZGlyZWN0aXZlcy9hYnN0cmFjdF9mb3JtX2dyb3VwX2RpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7O0FBTUgsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFFckQsT0FBTyxFQUFDLHNCQUFzQixFQUFFLGlCQUFpQixFQUFFLFdBQVcsRUFBQyxNQUFNLFVBQVUsQ0FBQztBQUtoRjs7Ozs7R0FLRztBQUNIO0lBQWdELDhDQUFnQjtJQUFoRTs7SUEyRkEsQ0FBQztJQS9EQzs7OztPQUlHO0lBQ0gsNkNBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxhQUFjLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsZ0RBQVcsR0FBWDtRQUNFLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUN0QixJQUFJLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUMxQztJQUNILENBQUM7SUFNRCxzQkFBSSwrQ0FBTztRQUpYOzs7V0FHRzthQUNIO1lBQ0UsT0FBTyxJQUFJLENBQUMsYUFBYyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoRCxDQUFDOzs7T0FBQTtJQU1ELHNCQUFJLDRDQUFJO1FBSlI7OztXQUdHO2FBQ0g7WUFDRSxPQUFPLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDekYsQ0FBQzs7O09BQUE7SUFNRCxzQkFBSSxxREFBYTtRQUpqQjs7O1dBR0c7YUFDSDtZQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUMxRCxDQUFDOzs7T0FBQTtJQU1ELHNCQUFJLGlEQUFTO1FBSmI7OztXQUdHO2FBQ0g7WUFDRSxPQUFPLGlCQUFpQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUM3QyxDQUFDOzs7T0FBQTtJQU1ELHNCQUFJLHNEQUFjO1FBSmxCOzs7V0FHRzthQUNIO1lBQ0UsT0FBTyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUN2RCxDQUFDOzs7T0FBQTtJQUVELGdCQUFnQjtJQUNoQixxREFBZ0IsR0FBaEIsY0FBMEIsQ0FBQztJQUM3QixpQ0FBQztBQUFELENBQUMsQUEzRkQsQ0FBZ0QsZ0JBQWdCLEdBMkYvRCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtPbkRlc3Ryb3ksIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7Rm9ybUdyb3VwfSBmcm9tICcuLi9tb2RlbCc7XG5cbmltcG9ydCB7Q29udHJvbENvbnRhaW5lcn0gZnJvbSAnLi9jb250cm9sX2NvbnRhaW5lcic7XG5pbXBvcnQge0Zvcm19IGZyb20gJy4vZm9ybV9pbnRlcmZhY2UnO1xuaW1wb3J0IHtjb21wb3NlQXN5bmNWYWxpZGF0b3JzLCBjb21wb3NlVmFsaWRhdG9ycywgY29udHJvbFBhdGh9IGZyb20gJy4vc2hhcmVkJztcbmltcG9ydCB7QXN5bmNWYWxpZGF0b3JGbiwgVmFsaWRhdG9yRm59IGZyb20gJy4vdmFsaWRhdG9ycyc7XG5cblxuXG4vKipcbiAqIEBkZXNjcmlwdGlvblxuICogQSBiYXNlIGNsYXNzIGZvciBjb2RlIHNoYXJlZCBiZXR3ZWVuIHRoZSBgTmdNb2RlbEdyb3VwYCBhbmQgYEZvcm1Hcm91cE5hbWVgIGRpcmVjdGl2ZXMuXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgY2xhc3MgQWJzdHJhY3RGb3JtR3JvdXBEaXJlY3RpdmUgZXh0ZW5kcyBDb250cm9sQ29udGFpbmVyIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAvKipcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqIFRoZSBwYXJlbnQgY29udHJvbCBmb3IgdGhlIGdyb3VwXG4gICAqXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgLy8gVE9ETyhpc3N1ZS8yNDU3MSk6IHJlbW92ZSAnIScuXG4gIF9wYXJlbnQhOiBDb250cm9sQ29udGFpbmVyO1xuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogQW4gYXJyYXkgb2Ygc3luY2hyb25vdXMgdmFsaWRhdG9ycyBmb3IgdGhlIGdyb3VwXG4gICAqXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgLy8gVE9ETyhpc3N1ZS8yNDU3MSk6IHJlbW92ZSAnIScuXG4gIF92YWxpZGF0b3JzITogYW55W107XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiBBbiBhcnJheSBvZiBhc3luYyB2YWxpZGF0b3JzIGZvciB0aGUgZ3JvdXBcbiAgICpcbiAgICogQGludGVybmFsXG4gICAqL1xuICAvLyBUT0RPKGlzc3VlLzI0NTcxKTogcmVtb3ZlICchJy5cbiAgX2FzeW5jVmFsaWRhdG9ycyE6IGFueVtdO1xuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogQW4gaW50ZXJuYWwgY2FsbGJhY2sgbWV0aG9kIHRyaWdnZXJlZCBvbiB0aGUgaW5zdGFuY2UgYWZ0ZXIgdGhlIGlucHV0cyBhcmUgc2V0LlxuICAgKiBSZWdpc3RlcnMgdGhlIGdyb3VwIHdpdGggaXRzIHBhcmVudCBncm91cC5cbiAgICovXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuX2NoZWNrUGFyZW50VHlwZSgpO1xuICAgIHRoaXMuZm9ybURpcmVjdGl2ZSEuYWRkRm9ybUdyb3VwKHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiBBbiBpbnRlcm5hbCBjYWxsYmFjayBtZXRob2QgdHJpZ2dlcmVkIGJlZm9yZSB0aGUgaW5zdGFuY2UgaXMgZGVzdHJveWVkLlxuICAgKiBSZW1vdmVzIHRoZSBncm91cCBmcm9tIGl0cyBwYXJlbnQgZ3JvdXAuXG4gICAqL1xuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5mb3JtRGlyZWN0aXZlKSB7XG4gICAgICB0aGlzLmZvcm1EaXJlY3RpdmUucmVtb3ZlRm9ybUdyb3VwKHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogVGhlIGBGb3JtR3JvdXBgIGJvdW5kIHRvIHRoaXMgZGlyZWN0aXZlLlxuICAgKi9cbiAgZ2V0IGNvbnRyb2woKTogRm9ybUdyb3VwIHtcbiAgICByZXR1cm4gdGhpcy5mb3JtRGlyZWN0aXZlIS5nZXRGb3JtR3JvdXAodGhpcyk7XG4gIH1cblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqIFRoZSBwYXRoIHRvIHRoaXMgZ3JvdXAgZnJvbSB0aGUgdG9wLWxldmVsIGRpcmVjdGl2ZS5cbiAgICovXG4gIGdldCBwYXRoKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gY29udHJvbFBhdGgodGhpcy5uYW1lID09IG51bGwgPyB0aGlzLm5hbWUgOiB0aGlzLm5hbWUudG9TdHJpbmcoKSwgdGhpcy5fcGFyZW50KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogVGhlIHRvcC1sZXZlbCBkaXJlY3RpdmUgZm9yIHRoaXMgZ3JvdXAgaWYgcHJlc2VudCwgb3RoZXJ3aXNlIG51bGwuXG4gICAqL1xuICBnZXQgZm9ybURpcmVjdGl2ZSgpOiBGb3JtfG51bGwge1xuICAgIHJldHVybiB0aGlzLl9wYXJlbnQgPyB0aGlzLl9wYXJlbnQuZm9ybURpcmVjdGl2ZSA6IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqIFRoZSBzeW5jaHJvbm91cyB2YWxpZGF0b3JzIHJlZ2lzdGVyZWQgd2l0aCB0aGlzIGdyb3VwLlxuICAgKi9cbiAgZ2V0IHZhbGlkYXRvcigpOiBWYWxpZGF0b3JGbnxudWxsIHtcbiAgICByZXR1cm4gY29tcG9zZVZhbGlkYXRvcnModGhpcy5fdmFsaWRhdG9ycyk7XG4gIH1cblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqIFRoZSBhc3luYyB2YWxpZGF0b3JzIHJlZ2lzdGVyZWQgd2l0aCB0aGlzIGdyb3VwLlxuICAgKi9cbiAgZ2V0IGFzeW5jVmFsaWRhdG9yKCk6IEFzeW5jVmFsaWRhdG9yRm58bnVsbCB7XG4gICAgcmV0dXJuIGNvbXBvc2VBc3luY1ZhbGlkYXRvcnModGhpcy5fYXN5bmNWYWxpZGF0b3JzKTtcbiAgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgX2NoZWNrUGFyZW50VHlwZSgpOiB2b2lkIHt9XG59XG4iXX0=