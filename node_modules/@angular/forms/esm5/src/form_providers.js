/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { InternalFormsSharedModule, NG_MODEL_WITH_FORM_CONTROL_WARNING, REACTIVE_DRIVEN_DIRECTIVES, TEMPLATE_DRIVEN_DIRECTIVES } from './directives';
import { RadioControlRegistry } from './directives/radio_control_value_accessor';
import { FormBuilder } from './form_builder';
/**
 * Exports the required providers and directives for template-driven forms,
 * making them available for import by NgModules that import this module.
 *
 * @see [Forms Overview](/guide/forms-overview)
 * @see [Template-driven Forms Guide](/guide/forms)
 *
 * @publicApi
 */
var FormsModule = /** @class */ (function () {
    function FormsModule() {
    }
    FormsModule = __decorate([
        NgModule({
            declarations: TEMPLATE_DRIVEN_DIRECTIVES,
            providers: [RadioControlRegistry],
            exports: [InternalFormsSharedModule, TEMPLATE_DRIVEN_DIRECTIVES]
        })
    ], FormsModule);
    return FormsModule;
}());
export { FormsModule };
/**
 * Exports the required infrastructure and directives for reactive forms,
 * making them available for import by NgModules that import this module.
 *
 * @see [Forms Overview](guide/forms-overview)
 * @see [Reactive Forms Guide](guide/reactive-forms)
 *
 * @publicApi
 */
var ReactiveFormsModule = /** @class */ (function () {
    function ReactiveFormsModule() {
    }
    ReactiveFormsModule_1 = ReactiveFormsModule;
    /**
     * @description
     * Provides options for configuring the reactive forms module.
     *
     * @param opts An object of configuration options
     * * `warnOnNgModelWithFormControl` Configures when to emit a warning when an `ngModel`
     * binding is used with reactive form directives.
     */
    ReactiveFormsModule.withConfig = function (opts) {
        return {
            ngModule: ReactiveFormsModule_1,
            providers: [
                { provide: NG_MODEL_WITH_FORM_CONTROL_WARNING, useValue: opts.warnOnNgModelWithFormControl }
            ]
        };
    };
    var ReactiveFormsModule_1;
    ReactiveFormsModule = ReactiveFormsModule_1 = __decorate([
        NgModule({
            declarations: [REACTIVE_DRIVEN_DIRECTIVES],
            providers: [FormBuilder, RadioControlRegistry],
            exports: [InternalFormsSharedModule, REACTIVE_DRIVEN_DIRECTIVES]
        })
    ], ReactiveFormsModule);
    return ReactiveFormsModule;
}());
export { ReactiveFormsModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybV9wcm92aWRlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3Jtcy9zcmMvZm9ybV9wcm92aWRlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HOztBQUVILE9BQU8sRUFBc0IsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRTVELE9BQU8sRUFBQyx5QkFBeUIsRUFBRSxrQ0FBa0MsRUFBRSwwQkFBMEIsRUFBRSwwQkFBMEIsRUFBQyxNQUFNLGNBQWMsQ0FBQztBQUNuSixPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSwyQ0FBMkMsQ0FBQztBQUMvRSxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0M7Ozs7Ozs7O0dBUUc7QUFNSDtJQUFBO0lBQ0EsQ0FBQztJQURZLFdBQVc7UUFMdkIsUUFBUSxDQUFDO1lBQ1IsWUFBWSxFQUFFLDBCQUEwQjtZQUN4QyxTQUFTLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztZQUNqQyxPQUFPLEVBQUUsQ0FBQyx5QkFBeUIsRUFBRSwwQkFBMEIsQ0FBQztTQUNqRSxDQUFDO09BQ1csV0FBVyxDQUN2QjtJQUFELGtCQUFDO0NBQUEsQUFERCxJQUNDO1NBRFksV0FBVztBQUd4Qjs7Ozs7Ozs7R0FRRztBQU1IO0lBQUE7SUFtQkEsQ0FBQzs0QkFuQlksbUJBQW1CO0lBQzlCOzs7Ozs7O09BT0c7SUFDSSw4QkFBVSxHQUFqQixVQUFrQixJQUVqQjtRQUNDLE9BQU87WUFDTCxRQUFRLEVBQUUscUJBQW1CO1lBQzdCLFNBQVMsRUFBRTtnQkFDVCxFQUFDLE9BQU8sRUFBRSxrQ0FBa0MsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLDRCQUE0QixFQUFDO2FBQzNGO1NBQ0YsQ0FBQztJQUNKLENBQUM7O0lBbEJVLG1CQUFtQjtRQUwvQixRQUFRLENBQUM7WUFDUixZQUFZLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQztZQUMxQyxTQUFTLEVBQUUsQ0FBQyxXQUFXLEVBQUUsb0JBQW9CLENBQUM7WUFDOUMsT0FBTyxFQUFFLENBQUMseUJBQXlCLEVBQUUsMEJBQTBCLENBQUM7U0FDakUsQ0FBQztPQUNXLG1CQUFtQixDQW1CL0I7SUFBRCwwQkFBQztDQUFBLEFBbkJELElBbUJDO1NBbkJZLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7SW50ZXJuYWxGb3Jtc1NoYXJlZE1vZHVsZSwgTkdfTU9ERUxfV0lUSF9GT1JNX0NPTlRST0xfV0FSTklORywgUkVBQ1RJVkVfRFJJVkVOX0RJUkVDVElWRVMsIFRFTVBMQVRFX0RSSVZFTl9ESVJFQ1RJVkVTfSBmcm9tICcuL2RpcmVjdGl2ZXMnO1xuaW1wb3J0IHtSYWRpb0NvbnRyb2xSZWdpc3RyeX0gZnJvbSAnLi9kaXJlY3RpdmVzL3JhZGlvX2NvbnRyb2xfdmFsdWVfYWNjZXNzb3InO1xuaW1wb3J0IHtGb3JtQnVpbGRlcn0gZnJvbSAnLi9mb3JtX2J1aWxkZXInO1xuXG4vKipcbiAqIEV4cG9ydHMgdGhlIHJlcXVpcmVkIHByb3ZpZGVycyBhbmQgZGlyZWN0aXZlcyBmb3IgdGVtcGxhdGUtZHJpdmVuIGZvcm1zLFxuICogbWFraW5nIHRoZW0gYXZhaWxhYmxlIGZvciBpbXBvcnQgYnkgTmdNb2R1bGVzIHRoYXQgaW1wb3J0IHRoaXMgbW9kdWxlLlxuICpcbiAqIEBzZWUgW0Zvcm1zIE92ZXJ2aWV3XSgvZ3VpZGUvZm9ybXMtb3ZlcnZpZXcpXG4gKiBAc2VlIFtUZW1wbGF0ZS1kcml2ZW4gRm9ybXMgR3VpZGVdKC9ndWlkZS9mb3JtcylcbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogVEVNUExBVEVfRFJJVkVOX0RJUkVDVElWRVMsXG4gIHByb3ZpZGVyczogW1JhZGlvQ29udHJvbFJlZ2lzdHJ5XSxcbiAgZXhwb3J0czogW0ludGVybmFsRm9ybXNTaGFyZWRNb2R1bGUsIFRFTVBMQVRFX0RSSVZFTl9ESVJFQ1RJVkVTXVxufSlcbmV4cG9ydCBjbGFzcyBGb3Jtc01vZHVsZSB7XG59XG5cbi8qKlxuICogRXhwb3J0cyB0aGUgcmVxdWlyZWQgaW5mcmFzdHJ1Y3R1cmUgYW5kIGRpcmVjdGl2ZXMgZm9yIHJlYWN0aXZlIGZvcm1zLFxuICogbWFraW5nIHRoZW0gYXZhaWxhYmxlIGZvciBpbXBvcnQgYnkgTmdNb2R1bGVzIHRoYXQgaW1wb3J0IHRoaXMgbW9kdWxlLlxuICpcbiAqIEBzZWUgW0Zvcm1zIE92ZXJ2aWV3XShndWlkZS9mb3Jtcy1vdmVydmlldylcbiAqIEBzZWUgW1JlYWN0aXZlIEZvcm1zIEd1aWRlXShndWlkZS9yZWFjdGl2ZS1mb3JtcylcbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1JFQUNUSVZFX0RSSVZFTl9ESVJFQ1RJVkVTXSxcbiAgcHJvdmlkZXJzOiBbRm9ybUJ1aWxkZXIsIFJhZGlvQ29udHJvbFJlZ2lzdHJ5XSxcbiAgZXhwb3J0czogW0ludGVybmFsRm9ybXNTaGFyZWRNb2R1bGUsIFJFQUNUSVZFX0RSSVZFTl9ESVJFQ1RJVkVTXVxufSlcbmV4cG9ydCBjbGFzcyBSZWFjdGl2ZUZvcm1zTW9kdWxlIHtcbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiBQcm92aWRlcyBvcHRpb25zIGZvciBjb25maWd1cmluZyB0aGUgcmVhY3RpdmUgZm9ybXMgbW9kdWxlLlxuICAgKlxuICAgKiBAcGFyYW0gb3B0cyBBbiBvYmplY3Qgb2YgY29uZmlndXJhdGlvbiBvcHRpb25zXG4gICAqICogYHdhcm5Pbk5nTW9kZWxXaXRoRm9ybUNvbnRyb2xgIENvbmZpZ3VyZXMgd2hlbiB0byBlbWl0IGEgd2FybmluZyB3aGVuIGFuIGBuZ01vZGVsYFxuICAgKiBiaW5kaW5nIGlzIHVzZWQgd2l0aCByZWFjdGl2ZSBmb3JtIGRpcmVjdGl2ZXMuXG4gICAqL1xuICBzdGF0aWMgd2l0aENvbmZpZyhvcHRzOiB7XG4gICAgLyoqIEBkZXByZWNhdGVkIGFzIG9mIHY2ICovIHdhcm5Pbk5nTW9kZWxXaXRoRm9ybUNvbnRyb2w6ICduZXZlcid8J29uY2UnfCdhbHdheXMnXG4gIH0pOiBNb2R1bGVXaXRoUHJvdmlkZXJzPFJlYWN0aXZlRm9ybXNNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAge3Byb3ZpZGU6IE5HX01PREVMX1dJVEhfRk9STV9DT05UUk9MX1dBUk5JTkcsIHVzZVZhbHVlOiBvcHRzLndhcm5Pbk5nTW9kZWxXaXRoRm9ybUNvbnRyb2x9XG4gICAgICBdXG4gICAgfTtcbiAgfVxufVxuIl19