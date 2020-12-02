/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { __extends } from "tslib";
import { AbstractControlDirective } from './abstract_control_directive';
/**
 * @description
 * A base class for directives that contain multiple registered instances of `NgControl`.
 * Only used by the forms module.
 *
 * @publicApi
 */
var ControlContainer = /** @class */ (function (_super) {
    __extends(ControlContainer, _super);
    function ControlContainer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(ControlContainer.prototype, "formDirective", {
        /**
         * @description
         * The top-level form directive for the control.
         */
        get: function () {
            return null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ControlContainer.prototype, "path", {
        /**
         * @description
         * The path to this group.
         */
        get: function () {
            return null;
        },
        enumerable: true,
        configurable: true
    });
    return ControlContainer;
}(AbstractControlDirective));
export { ControlContainer };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbF9jb250YWluZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3Jtcy9zcmMvZGlyZWN0aXZlcy9jb250cm9sX2NvbnRhaW5lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7O0FBRUgsT0FBTyxFQUFDLHdCQUF3QixFQUFDLE1BQU0sOEJBQThCLENBQUM7QUFJdEU7Ozs7OztHQU1HO0FBQ0g7SUFBK0Msb0NBQXdCO0lBQXZFOztJQXVCQSxDQUFDO0lBWEMsc0JBQUksMkNBQWE7UUFKakI7OztXQUdHO2FBQ0g7WUFDRSxPQUFPLElBQUksQ0FBQztRQUNkLENBQUM7OztPQUFBO0lBTUQsc0JBQUksa0NBQUk7UUFKUjs7O1dBR0c7YUFDSDtZQUNFLE9BQU8sSUFBSSxDQUFDO1FBQ2QsQ0FBQzs7O09BQUE7SUFDSCx1QkFBQztBQUFELENBQUMsQUF2QkQsQ0FBK0Msd0JBQXdCLEdBdUJ0RSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtBYnN0cmFjdENvbnRyb2xEaXJlY3RpdmV9IGZyb20gJy4vYWJzdHJhY3RfY29udHJvbF9kaXJlY3RpdmUnO1xuaW1wb3J0IHtGb3JtfSBmcm9tICcuL2Zvcm1faW50ZXJmYWNlJztcblxuXG4vKipcbiAqIEBkZXNjcmlwdGlvblxuICogQSBiYXNlIGNsYXNzIGZvciBkaXJlY3RpdmVzIHRoYXQgY29udGFpbiBtdWx0aXBsZSByZWdpc3RlcmVkIGluc3RhbmNlcyBvZiBgTmdDb250cm9sYC5cbiAqIE9ubHkgdXNlZCBieSB0aGUgZm9ybXMgbW9kdWxlLlxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIENvbnRyb2xDb250YWluZXIgZXh0ZW5kcyBBYnN0cmFjdENvbnRyb2xEaXJlY3RpdmUge1xuICAvKipcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqIFRoZSBuYW1lIGZvciB0aGUgY29udHJvbFxuICAgKi9cbiAgLy8gVE9ETyhpc3N1ZS8yNDU3MSk6IHJlbW92ZSAnIScuXG4gIG5hbWUhOiBzdHJpbmd8bnVtYmVyfG51bGw7XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiBUaGUgdG9wLWxldmVsIGZvcm0gZGlyZWN0aXZlIGZvciB0aGUgY29udHJvbC5cbiAgICovXG4gIGdldCBmb3JtRGlyZWN0aXZlKCk6IEZvcm18bnVsbCB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqIFRoZSBwYXRoIHRvIHRoaXMgZ3JvdXAuXG4gICAqL1xuICBnZXQgcGF0aCgpOiBzdHJpbmdbXXxudWxsIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuIl19