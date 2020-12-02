/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/a11y/a11y-module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { ObserversModule } from '@angular/cdk/observers';
import { PlatformModule } from '@angular/cdk/platform';
import { NgModule } from '@angular/core';
import { CdkMonitorFocus } from './focus-monitor/focus-monitor';
import { CdkTrapFocus } from './focus-trap/focus-trap';
import { HighContrastModeDetector } from './high-contrast-mode/high-contrast-mode-detector';
import { CdkAriaLive } from './live-announcer/live-announcer';
export class A11yModule {
    /**
     * @param {?} highContrastModeDetector
     */
    constructor(highContrastModeDetector) {
        highContrastModeDetector._applyBodyHighContrastModeCssClasses();
    }
}
A11yModule.decorators = [
    { type: NgModule, args: [{
                imports: [PlatformModule, ObserversModule],
                declarations: [CdkAriaLive, CdkTrapFocus, CdkMonitorFocus],
                exports: [CdkAriaLive, CdkTrapFocus, CdkMonitorFocus],
            },] }
];
/** @nocollapse */
A11yModule.ctorParameters = () => [
    { type: HighContrastModeDetector }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYTExeS1tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvY2RrL2ExMXkvYTExeS1tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUNyRCxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwrQkFBK0IsQ0FBQztBQUM5RCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDckQsT0FBTyxFQUFDLHdCQUF3QixFQUFDLE1BQU0sa0RBQWtELENBQUM7QUFDMUYsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGlDQUFpQyxDQUFDO0FBUTVELE1BQU0sT0FBTyxVQUFVOzs7O0lBQ3JCLFlBQVksd0JBQWtEO1FBQzVELHdCQUF3QixDQUFDLG9DQUFvQyxFQUFFLENBQUM7SUFDbEUsQ0FBQzs7O1lBUkYsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLGNBQWMsRUFBRSxlQUFlLENBQUM7Z0JBQzFDLFlBQVksRUFBRSxDQUFDLFdBQVcsRUFBRSxZQUFZLEVBQUUsZUFBZSxDQUFDO2dCQUMxRCxPQUFPLEVBQUUsQ0FBQyxXQUFXLEVBQUUsWUFBWSxFQUFFLGVBQWUsQ0FBQzthQUN0RDs7OztZQVJPLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge09ic2VydmVyc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY2RrL29ic2VydmVycyc7XG5pbXBvcnQge1BsYXRmb3JtTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xuaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Nka01vbml0b3JGb2N1c30gZnJvbSAnLi9mb2N1cy1tb25pdG9yL2ZvY3VzLW1vbml0b3InO1xuaW1wb3J0IHtDZGtUcmFwRm9jdXN9IGZyb20gJy4vZm9jdXMtdHJhcC9mb2N1cy10cmFwJztcbmltcG9ydCB7SGlnaENvbnRyYXN0TW9kZURldGVjdG9yfSBmcm9tICcuL2hpZ2gtY29udHJhc3QtbW9kZS9oaWdoLWNvbnRyYXN0LW1vZGUtZGV0ZWN0b3InO1xuaW1wb3J0IHtDZGtBcmlhTGl2ZX0gZnJvbSAnLi9saXZlLWFubm91bmNlci9saXZlLWFubm91bmNlcic7XG5cblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1BsYXRmb3JtTW9kdWxlLCBPYnNlcnZlcnNNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtDZGtBcmlhTGl2ZSwgQ2RrVHJhcEZvY3VzLCBDZGtNb25pdG9yRm9jdXNdLFxuICBleHBvcnRzOiBbQ2RrQXJpYUxpdmUsIENka1RyYXBGb2N1cywgQ2RrTW9uaXRvckZvY3VzXSxcbn0pXG5leHBvcnQgY2xhc3MgQTExeU1vZHVsZSB7XG4gIGNvbnN0cnVjdG9yKGhpZ2hDb250cmFzdE1vZGVEZXRlY3RvcjogSGlnaENvbnRyYXN0TW9kZURldGVjdG9yKSB7XG4gICAgaGlnaENvbnRyYXN0TW9kZURldGVjdG9yLl9hcHBseUJvZHlIaWdoQ29udHJhc3RNb2RlQ3NzQ2xhc3NlcygpO1xuICB9XG59XG4iXX0=