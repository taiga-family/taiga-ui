/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/scrolling/scrolling-module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { BidiModule } from '@angular/cdk/bidi';
import { PlatformModule } from '@angular/cdk/platform';
import { NgModule } from '@angular/core';
import { CdkFixedSizeVirtualScroll } from './fixed-size-virtual-scroll';
import { CdkScrollable } from './scrollable';
import { CdkVirtualForOf } from './virtual-for-of';
import { CdkVirtualScrollViewport } from './virtual-scroll-viewport';
export class CdkScrollableModule {
}
CdkScrollableModule.decorators = [
    { type: NgModule, args: [{
                exports: [CdkScrollable],
                declarations: [CdkScrollable]
            },] }
];
export class ScrollingModule {
}
ScrollingModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    BidiModule,
                    PlatformModule,
                    CdkScrollableModule
                ],
                exports: [
                    BidiModule,
                    CdkScrollableModule,
                    CdkFixedSizeVirtualScroll,
                    CdkVirtualForOf,
                    CdkVirtualScrollViewport,
                ],
                declarations: [
                    CdkFixedSizeVirtualScroll,
                    CdkVirtualForOf,
                    CdkVirtualScrollViewport,
                ],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsaW5nLW1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jZGsvc2Nyb2xsaW5nL3Njcm9sbGluZy1tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUNyRCxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyx5QkFBeUIsRUFBQyxNQUFNLDZCQUE2QixDQUFDO0FBQ3RFLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxjQUFjLENBQUM7QUFDM0MsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLGtCQUFrQixDQUFDO0FBQ2pELE9BQU8sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBTW5FLE1BQU0sT0FBTyxtQkFBbUI7OztZQUovQixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsYUFBYSxDQUFDO2dCQUN4QixZQUFZLEVBQUUsQ0FBQyxhQUFhLENBQUM7YUFDOUI7O0FBc0JELE1BQU0sT0FBTyxlQUFlOzs7WUFuQjNCLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsVUFBVTtvQkFDVixjQUFjO29CQUNkLG1CQUFtQjtpQkFDcEI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLFVBQVU7b0JBQ1YsbUJBQW1CO29CQUNuQix5QkFBeUI7b0JBQ3pCLGVBQWU7b0JBQ2Ysd0JBQXdCO2lCQUN6QjtnQkFDRCxZQUFZLEVBQUU7b0JBQ1oseUJBQXlCO29CQUN6QixlQUFlO29CQUNmLHdCQUF3QjtpQkFDekI7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge0JpZGlNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Nkay9iaWRpJztcbmltcG9ydCB7UGxhdGZvcm1Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XG5pbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q2RrRml4ZWRTaXplVmlydHVhbFNjcm9sbH0gZnJvbSAnLi9maXhlZC1zaXplLXZpcnR1YWwtc2Nyb2xsJztcbmltcG9ydCB7Q2RrU2Nyb2xsYWJsZX0gZnJvbSAnLi9zY3JvbGxhYmxlJztcbmltcG9ydCB7Q2RrVmlydHVhbEZvck9mfSBmcm9tICcuL3ZpcnR1YWwtZm9yLW9mJztcbmltcG9ydCB7Q2RrVmlydHVhbFNjcm9sbFZpZXdwb3J0fSBmcm9tICcuL3ZpcnR1YWwtc2Nyb2xsLXZpZXdwb3J0JztcblxuQE5nTW9kdWxlKHtcbiAgZXhwb3J0czogW0Nka1Njcm9sbGFibGVdLFxuICBkZWNsYXJhdGlvbnM6IFtDZGtTY3JvbGxhYmxlXVxufSlcbmV4cG9ydCBjbGFzcyBDZGtTY3JvbGxhYmxlTW9kdWxlIHt9XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBCaWRpTW9kdWxlLFxuICAgIFBsYXRmb3JtTW9kdWxlLFxuICAgIENka1Njcm9sbGFibGVNb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIEJpZGlNb2R1bGUsXG4gICAgQ2RrU2Nyb2xsYWJsZU1vZHVsZSxcbiAgICBDZGtGaXhlZFNpemVWaXJ0dWFsU2Nyb2xsLFxuICAgIENka1ZpcnR1YWxGb3JPZixcbiAgICBDZGtWaXJ0dWFsU2Nyb2xsVmlld3BvcnQsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIENka0ZpeGVkU2l6ZVZpcnR1YWxTY3JvbGwsXG4gICAgQ2RrVmlydHVhbEZvck9mLFxuICAgIENka1ZpcnR1YWxTY3JvbGxWaWV3cG9ydCxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgU2Nyb2xsaW5nTW9kdWxlIHt9XG4iXX0=