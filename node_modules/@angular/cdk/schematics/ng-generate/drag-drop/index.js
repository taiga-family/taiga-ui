/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/cdk/schematics/ng-generate/drag-drop/index", ["require", "exports", "@angular-devkit/schematics", "@angular/cdk/schematics/utils/index"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const schematics_1 = require("@angular-devkit/schematics");
    const utils_1 = require("@angular/cdk/schematics/utils/index");
    /** Scaffolds a new Angular component that uses the Drag and Drop module. */
    function default_1(options) {
        return schematics_1.chain([
            utils_1.buildComponent(Object.assign({}, options), {
                template: './__path__/__name@dasherize@if-flat__/__name@dasherize__.component.html.template',
                stylesheet: './__path__/__name@dasherize@if-flat__/__name@dasherize__.component.__style__.template',
            }),
            options.skipImport ? schematics_1.noop() : addDragDropModulesToModule(options)
        ]);
    }
    exports.default = default_1;
    /** Adds the required modules to the main module of the CLI project. */
    function addDragDropModulesToModule(options) {
        return (host) => {
            const modulePath = utils_1.findModuleFromOptions(host, options);
            utils_1.addModuleImportToModule(host, modulePath, 'DragDropModule', '@angular/cdk/drag-drop');
            return host;
        };
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY2RrL3NjaGVtYXRpY3MvbmctZ2VuZXJhdGUvZHJhZy1kcm9wL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRzs7Ozs7Ozs7Ozs7O0lBRUgsMkRBQW1FO0lBQ25FLCtEQUEyRjtJQUczRiw0RUFBNEU7SUFDNUUsbUJBQXdCLE9BQWU7UUFDckMsT0FBTyxrQkFBSyxDQUFDO1lBQ1gsc0JBQWMsbUJBQUssT0FBTyxHQUFHO2dCQUMzQixRQUFRLEVBQUUsa0ZBQWtGO2dCQUM1RixVQUFVLEVBQ04sdUZBQXVGO2FBQzVGLENBQUM7WUFDRixPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxpQkFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLDBCQUEwQixDQUFDLE9BQU8sQ0FBQztTQUNsRSxDQUFDLENBQUM7SUFDTCxDQUFDO0lBVEQsNEJBU0M7SUFFRCx1RUFBdUU7SUFDdkUsU0FBUywwQkFBMEIsQ0FBQyxPQUFlO1FBQ2pELE9BQU8sQ0FBQyxJQUFVLEVBQUUsRUFBRTtZQUNwQixNQUFNLFVBQVUsR0FBRyw2QkFBcUIsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFFLENBQUM7WUFFekQsK0JBQXVCLENBQUMsSUFBSSxFQUFFLFVBQVUsRUFBRSxnQkFBZ0IsRUFBRSx3QkFBd0IsQ0FBQyxDQUFDO1lBQ3RGLE9BQU8sSUFBSSxDQUFDO1FBQ2QsQ0FBQyxDQUFDO0lBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge2NoYWluLCBub29wLCBSdWxlLCBUcmVlfSBmcm9tICdAYW5ndWxhci1kZXZraXQvc2NoZW1hdGljcyc7XG5pbXBvcnQge2FkZE1vZHVsZUltcG9ydFRvTW9kdWxlLCBidWlsZENvbXBvbmVudCwgZmluZE1vZHVsZUZyb21PcHRpb25zfSBmcm9tICcuLi8uLi91dGlscyc7XG5pbXBvcnQge1NjaGVtYX0gZnJvbSAnLi9zY2hlbWEnO1xuXG4vKiogU2NhZmZvbGRzIGEgbmV3IEFuZ3VsYXIgY29tcG9uZW50IHRoYXQgdXNlcyB0aGUgRHJhZyBhbmQgRHJvcCBtb2R1bGUuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihvcHRpb25zOiBTY2hlbWEpOiBSdWxlIHtcbiAgcmV0dXJuIGNoYWluKFtcbiAgICBidWlsZENvbXBvbmVudCh7Li4ub3B0aW9uc30sIHtcbiAgICAgIHRlbXBsYXRlOiAnLi9fX3BhdGhfXy9fX25hbWVAZGFzaGVyaXplQGlmLWZsYXRfXy9fX25hbWVAZGFzaGVyaXplX18uY29tcG9uZW50Lmh0bWwudGVtcGxhdGUnLFxuICAgICAgc3R5bGVzaGVldDpcbiAgICAgICAgICAnLi9fX3BhdGhfXy9fX25hbWVAZGFzaGVyaXplQGlmLWZsYXRfXy9fX25hbWVAZGFzaGVyaXplX18uY29tcG9uZW50Ll9fc3R5bGVfXy50ZW1wbGF0ZScsXG4gICAgfSksXG4gICAgb3B0aW9ucy5za2lwSW1wb3J0ID8gbm9vcCgpIDogYWRkRHJhZ0Ryb3BNb2R1bGVzVG9Nb2R1bGUob3B0aW9ucylcbiAgXSk7XG59XG5cbi8qKiBBZGRzIHRoZSByZXF1aXJlZCBtb2R1bGVzIHRvIHRoZSBtYWluIG1vZHVsZSBvZiB0aGUgQ0xJIHByb2plY3QuICovXG5mdW5jdGlvbiBhZGREcmFnRHJvcE1vZHVsZXNUb01vZHVsZShvcHRpb25zOiBTY2hlbWEpIHtcbiAgcmV0dXJuIChob3N0OiBUcmVlKSA9PiB7XG4gICAgY29uc3QgbW9kdWxlUGF0aCA9IGZpbmRNb2R1bGVGcm9tT3B0aW9ucyhob3N0LCBvcHRpb25zKSE7XG5cbiAgICBhZGRNb2R1bGVJbXBvcnRUb01vZHVsZShob3N0LCBtb2R1bGVQYXRoLCAnRHJhZ0Ryb3BNb2R1bGUnLCAnQGFuZ3VsYXIvY2RrL2RyYWctZHJvcCcpO1xuICAgIHJldHVybiBob3N0O1xuICB9O1xufVxuIl19